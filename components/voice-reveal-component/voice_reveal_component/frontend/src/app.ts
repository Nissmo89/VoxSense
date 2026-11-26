import gsap from "gsap";
import femaleFallbackUrl from "./assets/female-fallback.webp";
import maleFallbackUrl from "./assets/male-fallback.webp";
import { GalleryScene, type GalleryPhase } from "./gallery";
import { VoiceRecorder, type RecordingResult } from "./recorder";
import { VoiceRevealUI } from "./ui";
import { Waveform } from "./waveform";
import {
  labelForPrediction,
  parseVoiceState,
  type ComponentData,
  type Prediction,
  type RecordingCompletePayload,
  type VoiceState,
  type VoiceStatus,
} from "./types";

const COMPONENT_KEY = "voice-gallery";
const PROCESSING_TIMEOUT_MS = 60_000;

// Software-rendered WebGL can drop to a few frames per second. GSAP's default
// lag smoothing caps each frame delta, which would stretch a short reveal into
// many seconds. Timing should follow wall-clock time instead.
gsap.ticker.lagSmoothing(0);

interface AppOptions {
  root: HTMLElement;
  data: ComponentData | undefined;
  setTriggerValue: (name: string, value: unknown) => void;
}

function createEventId(): string {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `evt-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function arrayBufferToBase64(buffer: ArrayBuffer): string {
  const bytes = new Uint8Array(buffer);
  const chunkSize = 0x8000;
  let binary = "";
  for (let index = 0; index < bytes.length; index += chunkSize) {
    const chunk = bytes.subarray(index, index + chunkSize);
    binary += String.fromCharCode(...chunk);
  }
  return btoa(binary);
}

function isPrediction(value: unknown): value is Prediction {
  return value === "M" || value === "F";
}

export class VoiceRevealApp {
  private readonly root: HTMLElement;
  private readonly setTriggerValue: (name: string, value: unknown) => void;
  private readonly ui: VoiceRevealUI;
  private readonly waveform: Waveform;
  private readonly recorder: VoiceRecorder;

  private scene: GalleryScene | null = null;
  private sceneAvailable = false;
  private fallbackMode = false;
  private fallbackRevealAllowed = false;

  private phase: GalleryPhase = "boot";
  private ready = false;
  private disposed = false;
  private pendingState: VoiceState | null = null;

  private activeEventId: string | null = null;
  private activeStartedAt = 0;
  private latestStartedAt = 0;
  private lastAppliedId: string | null = null;
  private lastAppliedStatus: VoiceStatus | null = null;
  private lastAppliedPrediction: Prediction | null = null;

  private lastBlobUrl: string | null = null;
  private processingTimer: number | null = null;
  private revealTimeline: gsap.core.Timeline | null = null;

  constructor(options: AppOptions) {
    this.root = options.root;
    this.setTriggerValue = options.setTriggerValue;

    this.ui = new VoiceRevealUI(this.root, {
      onRecordClick: () => {
        if (this.phase === "listening") {
          void this.finishRecording();
        } else {
          void this.startRecording();
        }
      },
      onCancelClick: () => this.cancelRecording(),
      onRetryClick: () => {
        void this.startRecording();
      },
      onRetryAssetsClick: () => this.retryAssets(),
    });

    const waveformCanvas =
      this.root.querySelector<HTMLCanvasElement>("#waveform-canvas");
    if (!waveformCanvas) {
      throw new Error("Voice reveal waveform canvas is missing");
    }
    this.waveform = new Waveform(waveformCanvas);

    this.recorder = new VoiceRecorder({
      onLevel: (timeDomain, level) => this.waveform.draw(timeDomain, level),
      onElapsed: (elapsed) => this.ui.setElapsed(elapsed),
      onError: (message) => this.handleRecorderError(message),
      onAutoStop: () => {
        if (this.phase === "listening") void this.finishRecording();
      },
    });

    this.configureFallbackImages();

    const canvas = this.root.querySelector<HTMLCanvasElement>("#gallery-canvas");
    if (!canvas) {
      throw new Error("Voice reveal gallery canvas is missing");
    }

    try {
      this.scene = new GalleryScene(this.root, canvas, {
        onProgress: (progress) => {
          if (!this.ready) this.ui.setLoading(true, progress);
        },
        onLoadSettled: (missing) => this.handleLoadSettled(missing),
        onAssetError: (message) => {
          this.ui.setAssetBanner(`${message} Reload the gallery to try again.`);
        },
        onContextLost: () => this.handleContextLost(),
      });
      this.sceneAvailable = true;
      this.ui.setLoading(true, 0.02);
    } catch (error) {
      console.error("The 3D gallery could not start", error);
      this.scene = null;
      this.sceneAvailable = false;
      this.fallbackMode = true;
      this.fallbackRevealAllowed = true;
      this.ready = true;
      this.ui.setLoading(false);
      this.ui.setFallbackVisible(true);
      this.ui.setAssetBanner(
        "3D gallery unavailable in this browser. The prediction will still be shown.",
      );
      this.ui.setReady(true);
      this.setPhase("idle");
    }

    if (options.data) this.update(options.data);
  }

  update(data: ComponentData | undefined): void {
    if (this.disposed) return;
    const state = parseVoiceState(data?.state);
    if (!state) return;

    if (this.phase === "boot") {
      if (state.status !== "idle") this.pendingState = state;
      return;
    }

    this.applyState(state);
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;
    this.clearProcessingTimer();
    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.recorder.dispose();
    this.waveform.dispose();
    this.ui.dispose();
    this.scene?.dispose();
    this.scene = null;
    this.sceneAvailable = false;
    if (this.lastBlobUrl) {
      URL.revokeObjectURL(this.lastBlobUrl);
      this.lastBlobUrl = null;
    }
  }

  private applyState(state: VoiceState): void {
    if (state.status === "idle") {
      if (this.phase === "listening" || this.phase === "processing") return;
      if (
        this.lastAppliedId === state.event_id &&
        this.phase === "idle"
      ) {
        return;
      }
      this.lastAppliedId = state.event_id;
      this.lastAppliedStatus = "idle";
      this.lastAppliedPrediction = null;
      this.resetToIdle();
      return;
    }

    if (state.status === "listening" || state.status === "processing") {
      // Transient capture/analysis states are owned by the frontend so they can
      // follow the microphone and the request in real time.
      return;
    }

    if (
      this.phase === "listening" ||
      this.phase === "processing"
    ) {
      if (this.activeEventId && state.event_id !== this.activeEventId) {
        return;
      }
    }

    // A terminal result for a cycle older than the most recently started cycle
    // must never replay over a newer interaction (for example, a reveal that
    // arrives after the user has already cancelled a fresh recording).
    if (state.started_at < this.latestStartedAt) {
      return;
    }

    if (
      this.lastAppliedId === state.event_id &&
      this.lastAppliedStatus === state.status &&
      this.lastAppliedPrediction === state.prediction
    ) {
      return;
    }

    this.clearProcessingTimer();
    this.activeEventId = state.event_id;
    this.activeStartedAt = state.started_at;
    this.lastAppliedId = state.event_id;
    this.lastAppliedStatus = state.status;
    this.lastAppliedPrediction = state.prediction;

    if (state.status === "reveal") {
      if (!state.prediction) {
        this.enterUncertain(
          state.message ??
            "The model returned an output that could not be interpreted. Try another recording.",
        );
        return;
      }
      this.enterReveal(state);
      return;
    }

    if (state.status === "uncertain") {
      this.enterUncertain(
        state.message ??
          "The model could not make a reliable prediction. Try another recording.",
      );
      return;
    }

    this.enterError(
      state.message ??
        "The voice sample could not be analysed. Try another recording.",
    );
  }

  private async startRecording(): Promise<void> {
    if (
      this.disposed ||
      !this.ready ||
      this.phase === "listening" ||
      this.phase === "processing"
    ) {
      return;
    }

    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.clearProcessingTimer();
    this.ui.hideResult(0.2);
    this.ui.hideNotice();
    this.ui.setFallbackReveal(null);
    this.ui.setAssetBanner(
      this.scene ? this.assetBannerForScene() : this.assetBannerForFallback(),
    );

    this.activeEventId = createEventId();
    this.activeStartedAt = Date.now();
    this.latestStartedAt = this.activeStartedAt;
    this.lastAppliedId = null;
    this.lastAppliedStatus = null;
    this.lastAppliedPrediction = null;

    this.setPhase("listening");
    this.ui.setElapsed(0);
    this.ui.setReplayAvailable(null);
    if (this.lastBlobUrl) {
      URL.revokeObjectURL(this.lastBlobUrl);
      this.lastBlobUrl = null;
    }

    this.scene?.enterListeningState();
    this.waveform.setActive(true);
    await this.recorder.start();

    if (this.isListening() && !this.recorder.isRecording) {
      // The recorder reports its own friendly error. This guard prevents a
      // permanently stuck listening state if a browser fails silently.
      this.handleRecorderError(
        "The microphone could not start recording. Try again or upload an audio file.",
      );
    }
  }

  private async finishRecording(): Promise<void> {
    if (this.phase !== "listening" || !this.recorder.isRecording) return;

    this.setPhase("processing");
    this.waveform.setActive(false);
    this.scene?.enterProcessingState();

    let result: RecordingResult | null = null;
    try {
      result = await this.recorder.stop();
    } catch (error) {
      console.error("Recording stop failed", error);
    }

    if (!result) {
      this.handleRecorderError(
        "The recording was too short or empty. Speak for at least one second and try again.",
        "Recording too short",
      );
      return;
    }

    this.lastBlobUrl = URL.createObjectURL(result.blob);
    this.ui.setReplayAvailable(this.lastBlobUrl);

    if (!this.activeEventId) {
      this.handleRecorderError(
        "The recording could not be identified. Try again.",
        "Recording interrupted",
      );
      return;
    }

    try {
      const base64 = arrayBufferToBase64(await result.blob.arrayBuffer());
      if (base64.length > 8_000_000) {
        this.handleRecorderError(
          "The recording is too large to analyse. Try a shorter sample.",
          "Recording too large",
        );
        return;
      }

      const payload: RecordingCompletePayload = {
        event_id: this.activeEventId,
        started_at: this.activeStartedAt,
        audio_base64: base64,
        mime_type: result.mimeType,
        duration_ms: Math.round(result.durationMs),
      };

      this.setTriggerValue(COMPONENT_KEY, payload);
      this.startProcessingTimer();
    } catch (error) {
      console.error("Unable to send the recording to Streamlit", error);
      this.handleRecorderError(
        "The recording could not be sent for analysis. Try again.",
        "Analysis interrupted",
      );
    }
  }

  private cancelRecording(): void {
    if (this.phase !== "listening") return;
    this.recorder.cancel();
    this.waveform.setActive(false);
    this.ui.hideResult(0.25);
    this.ui.setElapsed(0);
    this.latestStartedAt = Math.max(this.latestStartedAt, this.activeStartedAt);
    this.activeEventId = null;
    this.activeStartedAt = 0;
    this.setPhase("idle");
    this.ui.hideNotice();
    this.ui.setFallbackReveal(null);
    this.scene?.enterIdleState(0.55);
    this.ui.setReplayAvailable(this.lastBlobUrl);
  }

  private enterReveal(state: VoiceState): void {
    const prediction = state.prediction;
    if (!prediction) {
      this.enterUncertain(
        "The model returned an output that could not be interpreted. Try another recording.",
      );
      return;
    }

    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.ui.hideNotice();
    this.setPhase("reveal");
    this.ui.setFallbackReveal(prediction);

    const label =
      state.prediction_label === "Male" || state.prediction_label === "Female"
        ? state.prediction_label
        : labelForPrediction(prediction);

    if (this.scene && this.scene.hasStatue(prediction)) {
      const sceneTimeline = this.scene.createRevealTimeline(prediction);
      if (!sceneTimeline) {
        this.enterError(
          "The sculpture for this result could not be prepared. Try another recording.",
        );
        return;
      }

      const resultTimeline = this.ui.showResult(
        label,
        state.confidence,
        state.source,
      );
      const master = gsap.timeline({ paused: true });
      master.add(sceneTimeline, 0);
      master.add(resultTimeline, 0.82);

      // Child timelines returned by the scene/UI are paused until they are
      // attached. GSAP does not implicitly unpause them when they are nested,
      // so do this explicitly before starting the shared master timeline.
      sceneTimeline.paused(false);
      resultTimeline.paused(false);
      master.play(0);
      // GSAP can leave its shared ticker asleep when a timeline is built
      // entirely from paused children in a detached render pass. Waking it
      // here guarantees the master playhead advances on the next frame.
      gsap.ticker.wake();
      this.revealTimeline = master;
      return;
    }

    if (this.fallbackMode && this.fallbackRevealAllowed) {
      const resultTimeline = this.ui.showResult(
        label,
        state.confidence,
        state.source,
      );
      resultTimeline.play(0);
      return;
    }

    this.enterError(
      "The sculpture for this result could not be loaded. Reload the gallery to try again.",
    );
  }

  private enterUncertain(message: string): void {
    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.ui.hideResult(0.25);
    this.ui.setFallbackReveal(null);
    this.setPhase("uncertain");
    this.scene?.enterUncertainState();
    const timeline = this.ui.showNotice("No reliable prediction", message);
    timeline.play(0);
  }

  private enterError(message: string): void {
    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.ui.hideResult(0.25);
    this.ui.setFallbackReveal(null);
    this.setPhase("error");
    this.scene?.enterErrorState();
    const timeline = this.ui.showNotice("Analysis interrupted", message);
    timeline.play(0);
  }

  private resetToIdle(): void {
    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.ui.hideResult(0.3);
    this.ui.hideNotice();
    this.ui.setFallbackReveal(null);
    this.ui.setElapsed(0);
    this.activeEventId = null;
    this.activeStartedAt = 0;
    this.setPhase("idle");
    this.scene?.enterIdleState(0.7);
    this.ui.setReplayAvailable(this.lastBlobUrl);
  }

  private handleRecorderError(
    message: string,
    title = "Microphone unavailable",
  ): void {
    if (this.disposed) return;
    this.clearProcessingTimer();
    this.waveform.setActive(false);
    this.revealTimeline?.kill();
    this.revealTimeline = null;
    this.activeEventId = null;
    this.activeStartedAt = 0;
    this.setPhase("error");
    this.ui.setFallbackReveal(null);
    this.scene?.enterErrorState();
    const timeline = this.ui.showNotice(title, message);
    timeline.play(0);
  }

  private handleLoadSettled(missing: Prediction[]): void {
    if (this.disposed) return;
    this.ready = true;
    this.ui.setReady(true);
    this.ui.setLoading(false);

    if (missing.length === 0) {
      this.fallbackMode = false;
      this.fallbackRevealAllowed = false;
      this.ui.setFallbackVisible(false);
      this.ui.setAssetBanner(null);
    } else if (missing.length === 2) {
      this.fallbackMode = true;
      this.fallbackRevealAllowed = false;
      this.ui.setFallbackVisible(true);
      this.ui.setAssetBanner(
        "Both sculptures could not be loaded. The prediction will still be shown.",
      );
    } else {
      this.fallbackMode = false;
      this.fallbackRevealAllowed = false;
      this.ui.setFallbackVisible(false);
      this.ui.setAssetBanner(
        `${missing[0] === "M" ? "The male" : "The female"} sculpture could not be loaded. Reload the gallery to try again.`,
      );
    }

    if (this.pendingState) {
      const pending = this.pendingState;
      this.pendingState = null;
      this.applyState(pending);
      return;
    }

    if (this.phase === "boot") {
      this.setPhase("idle");
      this.scene?.enterIdleState(0);
    }
  }

  private handleContextLost(): void {
    if (this.disposed) return;
    console.error("The WebGL context was lost");
    this.scene?.dispose();
    this.scene = null;
    this.sceneAvailable = false;
    this.fallbackMode = true;
    this.fallbackRevealAllowed = true;
    this.ready = true;
    this.ui.setLoading(false);
    this.ui.setFallbackVisible(true);
    this.ui.setAssetBanner(
      "The 3D gallery stopped responding. The prediction will still be shown.",
    );
    this.ui.setReady(true);
    if (this.phase === "boot") this.setPhase("idle");
  }

  private retryAssets(): void {
    if (!this.scene) {
      this.ui.setAssetBanner(
        "3D gallery unavailable in this browser. Reload the page to try again.",
      );
      return;
    }
    this.ui.setAssetBanner(null);
    this.ui.setLoading(true, 0, "Reloading the marble figures");
    this.scene.retryLoad();
  }

  private configureFallbackImages(): void {
    const female = this.root.querySelector<HTMLImageElement>(
      ".fallback-female",
    );
    if (female) female.src = femaleFallbackUrl;
    const male = this.root.querySelector<HTMLImageElement>(".fallback-male");
    if (male) male.src = maleFallbackUrl;
  }

  private assetBannerForScene(): string | null {
    if (!this.scene) return null;
    const missingFemale = !this.scene.hasStatue("F");
    const missingMale = !this.scene.hasStatue("M");
    if (missingFemale && missingMale) {
      return "Both sculptures could not be loaded. The prediction will still be shown.";
    }
    if (missingMale) {
      return "The male sculpture could not be loaded. Reload the gallery to try again.";
    }
    if (missingFemale) {
      return "The female sculpture could not be loaded. Reload the gallery to try again.";
    }
    return null;
  }

  private assetBannerForFallback(): string {
    return "3D gallery unavailable in this browser. The prediction will still be shown.";
  }

  private setPhase(phase: GalleryPhase): void {
    this.phase = phase;
    this.ui.setPhase(phase);
  }

  private isListening(): boolean {
    return this.phase === "listening";
  }

  private startProcessingTimer(): void {
    this.clearProcessingTimer();
    this.processingTimer = window.setTimeout(() => {
      if (this.phase !== "processing") return;
      this.handleRecorderError(
        "The analysis took too long to respond. Try another recording.",
        "Analysis interrupted",
      );
    }, PROCESSING_TIMEOUT_MS);
  }

  private clearProcessingTimer(): void {
    if (this.processingTimer !== null) {
      window.clearTimeout(this.processingTimer);
      this.processingTimer = null;
    }
  }
}
