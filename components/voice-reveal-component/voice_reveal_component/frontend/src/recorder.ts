export interface RecordingResult {
  blob: Blob;
  mimeType: string;
  durationMs: number;
}

export interface RecorderCallbacks {
  onLevel: (timeDomain: Uint8Array, level: number) => void;
  onElapsed: (elapsedMs: number) => void;
  onError: (message: string) => void;
  onAutoStop: () => void;
}

const MAX_DURATION_MS = 20_000;
const MIN_DURATION_MS = 800;
const AUDIO_BITS_PER_SECOND = 64_000;

const MIME_CANDIDATES = [
  "audio/webm;codecs=opus",
  "audio/webm",
  "audio/ogg;codecs=opus",
  "audio/mp4",
];

function friendlyMicrophoneError(error: unknown): string {
  if (error instanceof DOMException) {
    switch (error.name) {
      case "NotAllowedError":
      case "SecurityError":
        return "Microphone access was denied. Allow microphone access in your browser, then try again.";
      case "NotFoundError":
      case "DevicesNotFoundError":
        return "No microphone was found. Connect a microphone, then try again.";
      case "NotReadableError":
      case "TrackStartError":
        return "The microphone is unavailable or in use by another application.";
      case "OverconstrainedError":
        return "This microphone does not support the requested recording settings.";
      default:
        break;
    }
  }
  return "The microphone could not be started. Check your browser permissions and try again.";
}

export class VoiceRecorder {
  private readonly callbacks: RecorderCallbacks;

  private stream: MediaStream | null = null;
  private mediaRecorder: MediaRecorder | null = null;
  private chunks: BlobPart[] = [];
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private sourceNode: MediaStreamAudioSourceNode | null = null;
  private silentGain: GainNode | null = null;
  private timeDomain: Uint8Array<ArrayBuffer> | null = null;
  private animationFrame: number | null = null;
  private timer: number | null = null;
  private startedAt = 0;
  private elapsedMs = 0;
  private recording = false;
  private cancelled = false;
  private stopPromise: Promise<RecordingResult | null> | null = null;
  private stopResolve: ((result: RecordingResult | null) => void) | null = null;
  private autoStopRequested = false;

  constructor(callbacks: RecorderCallbacks) {
    this.callbacks = callbacks;
  }

  get isRecording(): boolean {
    return this.recording;
  }

  get durationMs(): number {
    return this.elapsedMs;
  }

  async start(): Promise<void> {
    if (this.recording) return;

    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      this.callbacks.onError(
        "This browser does not support microphone recording. You can upload an audio file instead.",
      );
      return;
    }

    this.cleanupAudioGraph();
    this.detachRecorder();
    this.chunks = [];
    this.cancelled = false;
    this.autoStopRequested = false;
    this.elapsedMs = 0;

    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true,
        },
        video: false,
      });
    } catch (error) {
      this.stream = null;
      if (!this.cancelled) this.callbacks.onError(friendlyMicrophoneError(error));
      return;
    }

    if (this.cancelled) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
      return;
    }

    try {
      const mimeType =
        MIME_CANDIDATES.find((candidate) =>
          MediaRecorder.isTypeSupported(candidate),
        ) ?? "";

      this.mediaRecorder = mimeType
        ? new MediaRecorder(this.stream, {
            mimeType,
            audioBitsPerSecond: AUDIO_BITS_PER_SECOND,
          })
        : new MediaRecorder(this.stream, {
            audioBitsPerSecond: AUDIO_BITS_PER_SECOND,
          });

      this.mediaRecorder.addEventListener("dataavailable", this.handleData);
      this.mediaRecorder.addEventListener("stop", this.handleStop);
      this.mediaRecorder.addEventListener("error", this.handleRecorderError);

      this.setupAudioGraph(this.stream);

      this.startedAt = performance.now();
      this.recording = true;
      this.mediaRecorder.start(250);
      this.timer = window.setInterval(this.handleTick, 100);
      this.animationFrame = requestAnimationFrame(this.drawLoop);
    } catch (error) {
      console.error("Unable to start MediaRecorder", error);
      this.cleanupAudioGraph();
      this.detachRecorder();
      if (!this.cancelled) {
        this.callbacks.onError(
          "The microphone could not start recording. Try again or upload an audio file.",
        );
      }
    }
  }

  stop(): Promise<RecordingResult | null> {
    if (!this.recording || !this.mediaRecorder) {
      return Promise.resolve(null);
    }
    if (this.stopPromise) return this.stopPromise;

    this.recording = false;
    this.clearTimer();
    this.stopAnimation();

    this.stopPromise = new Promise<RecordingResult | null>((resolve) => {
      this.stopResolve = resolve;
    });

    try {
      if (this.mediaRecorder.state !== "inactive") {
        this.mediaRecorder.stop();
      } else {
        this.finishStop();
      }
    } catch (error) {
      console.error("Unable to stop MediaRecorder", error);
      this.finishStop();
    }

    return this.stopPromise;
  }

  cancel(): void {
    this.cancelled = true;
    this.recording = false;
    this.clearTimer();
    this.stopAnimation();

    try {
      if (this.mediaRecorder && this.mediaRecorder.state !== "inactive") {
        this.mediaRecorder.stop();
      }
    } catch (error) {
      console.error("Unable to cancel MediaRecorder", error);
    }

    this.detachRecorder();
    this.cleanupAudioGraph();
    this.chunks = [];
    this.elapsedMs = 0;
    this.stopResolve?.(null);
    this.stopResolve = null;
    this.stopPromise = null;
  }

  dispose(): void {
    this.cancel();
    this.detachRecorder();
  }

  private setupAudioGraph(stream: MediaStream): void {
    const AudioContextCtor =
      window.AudioContext ??
      (window as unknown as { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;

    if (!AudioContextCtor) {
      throw new Error("Web Audio API is unavailable");
    }

    this.audioContext = new AudioContextCtor();
    this.analyser = this.audioContext.createAnalyser();
    this.analyser.fftSize = 2048;
    this.analyser.smoothingTimeConstant = 0.72;
    this.timeDomain = new Uint8Array(this.analyser.fftSize);

    this.sourceNode = this.audioContext.createMediaStreamSource(stream);
    this.silentGain = this.audioContext.createGain();
    this.silentGain.gain.value = 0;

    this.sourceNode.connect(this.analyser);
    this.analyser.connect(this.silentGain);
    this.silentGain.connect(this.audioContext.destination);

    void this.audioContext.resume().catch(() => undefined);
  }

  private drawLoop = (): void => {
    if (!this.recording || !this.analyser || !this.timeDomain) return;

    this.analyser.getByteTimeDomainData(this.timeDomain);

    let sumSquares = 0;
    for (let index = 0; index < this.timeDomain.length; index += 1) {
      const centred = (this.timeDomain[index] - 128) / 128;
      sumSquares += centred * centred;
    }
    const rms = Math.sqrt(sumSquares / this.timeDomain.length);
    const level = Math.min(1, rms * 3.6);

    this.callbacks.onLevel(this.timeDomain, level);
    this.animationFrame = requestAnimationFrame(this.drawLoop);
  };

  private handleTick = (): void => {
    if (!this.recording) return;
    this.elapsedMs = performance.now() - this.startedAt;
    this.callbacks.onElapsed(this.elapsedMs);

    if (this.elapsedMs >= MAX_DURATION_MS && !this.autoStopRequested) {
      this.autoStopRequested = true;
      this.callbacks.onAutoStop();
    }
  };

  private handleData = (event: BlobEvent): void => {
    if (this.cancelled) return;
    if (event.data && event.data.size > 0) {
      this.chunks.push(event.data);
    }
  };

  private handleRecorderError = (event: Event): void => {
    console.error("MediaRecorder error", event);
    this.recording = false;
    this.clearTimer();
    this.stopAnimation();
    this.cleanupAudioGraph();
    this.detachRecorder();
    this.callbacks.onError(
      "The microphone stopped unexpectedly. Try again or upload an audio file.",
    );
    this.stopResolve?.(null);
    this.stopResolve = null;
    this.stopPromise = null;
  };

  private handleStop = (): void => {
    this.finishStop();
  };

  private finishStop(): void {
    this.recording = false;
    this.clearTimer();
    this.stopAnimation();

    const durationMs = Math.max(
      this.elapsedMs,
      this.startedAt > 0 ? performance.now() - this.startedAt : 0,
    );

    const mimeType =
      this.mediaRecorder?.mimeType ||
      (this.chunks[0] instanceof Blob ? this.chunks[0].type : "audio/webm");

    const blob = this.cancelled
      ? null
      : new Blob(this.chunks, { type: mimeType || "audio/webm" });

    this.cleanupAudioGraph();
    this.chunks = [];

    const result: RecordingResult | null =
      blob && blob.size > 0 && durationMs >= MIN_DURATION_MS
        ? { blob, mimeType: mimeType || blob.type || "audio/webm", durationMs }
        : null;

    this.elapsedMs = durationMs;
    this.detachRecorder();
    this.stopResolve?.(result);
    this.stopResolve = null;
    this.stopPromise = null;
  }

  private detachRecorder(): void {
    this.mediaRecorder?.removeEventListener("dataavailable", this.handleData);
    this.mediaRecorder?.removeEventListener("stop", this.handleStop);
    this.mediaRecorder?.removeEventListener("error", this.handleRecorderError);
    this.mediaRecorder = null;
  }

  private clearTimer(): void {
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
  }

  private stopAnimation(): void {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private cleanupAudioGraph(): void {
    this.stopAnimation();
    this.sourceNode?.disconnect();
    this.analyser?.disconnect();
    this.silentGain?.disconnect();
    this.sourceNode = null;
    this.analyser = null;
    this.silentGain = null;
    this.timeDomain = null;

    if (this.audioContext) {
      void this.audioContext.close().catch(() => undefined);
      this.audioContext = null;
    }

    this.stream?.getTracks().forEach((track) => track.stop());
    this.stream = null;
  }
}
