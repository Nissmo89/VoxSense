import gsap from "gsap";
import type { GalleryPhase } from "./gallery";
import type { Prediction, VoiceSource } from "./types";

export interface UICallbacks {
  onRecordClick: () => void;
  onCancelClick: () => void;
  onRetryClick: () => void;
  onRetryAssetsClick: () => void;
}

const STATUS_COPY: Record<GalleryPhase, string> = {
  boot: "Preparing the gallery",
  idle: "Ready",
  listening: "Listening",
  processing: "Analysing voice",
  reveal: "Prediction ready",
  uncertain: "No reliable prediction",
  error: "Analysis interrupted",
};

const RECORD_LABEL: Record<GalleryPhase, string> = {
  boot: "Preparing gallery",
  idle: "Begin recording",
  listening: "Finish recording",
  processing: "Analysing voice",
  reveal: "Record again",
  uncertain: "Try again",
  error: "Try again",
};

const RECORD_HINT: Record<GalleryPhase, string> = {
  boot: "Loading the marble figures",
  idle: "Speak for a few seconds",
  listening: "Tap to finish",
  processing: "The model is reading the sample",
  reveal: "Speak again",
  uncertain: "Another recording",
  error: "Another recording",
};

const formatTime = (milliseconds: number): string => {
  const totalSeconds = Math.max(0, Math.floor(milliseconds / 1000));
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

export class VoiceRevealUI {
  private readonly root: HTMLElement;
  private readonly callbacks: UICallbacks;
  private readonly reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  private readonly recordButton: HTMLButtonElement;
  private readonly themeButton: HTMLButtonElement;
  private readonly recordLabel: HTMLElement;
  private readonly recordHint: HTMLElement;
  private readonly cancelButton: HTMLButtonElement;
  private readonly replayButton: HTMLButtonElement;
  private readonly statusText: HTMLElement;
  private readonly timer: HTMLElement;
  private readonly loading: HTMLElement;
  private readonly loadingProgress: HTMLElement;
  private readonly loadingMessage: HTMLElement;
  private readonly fallback: HTMLElement;
  private readonly result: HTMLElement;
  private readonly resultEyebrow: HTMLElement;
  private readonly resultLabel: HTMLElement;
  private readonly resultMeta: HTMLElement;
  private readonly resultCaveat: HTMLElement;
  private readonly notice: HTMLElement;
  private readonly noticeTitle: HTMLElement;
  private readonly noticeMessage: HTMLElement;
  private readonly noticeRetry: HTMLButtonElement;
  private readonly assetBanner: HTMLElement;
  private readonly assetBannerText: HTMLElement;
  private readonly assetRetry: HTMLButtonElement;
  private readonly liveRegion: HTMLElement;

  private audio: HTMLAudioElement | null = null;
  private replayUrl: string | null = null;
  private ready = false;
  private phase: GalleryPhase = "boot";
  private resultTimeline: gsap.core.Animation | null = null;
  private noticeTimeline: gsap.core.Timeline | null = null;
  private announceTimer: number | null = null;

  constructor(root: HTMLElement, callbacks: UICallbacks) {
    this.root = root;
    this.callbacks = callbacks;

    this.recordButton = this.require<HTMLButtonElement>("#record-button");
    this.themeButton = this.require<HTMLButtonElement>("#theme-toggle");
    this.recordLabel = this.require<HTMLElement>("#record-label");
    this.recordHint = this.require<HTMLElement>("#record-hint");
    this.cancelButton = this.require<HTMLButtonElement>("#cancel-button");
    this.replayButton = this.require<HTMLButtonElement>("#replay-button");
    this.statusText = this.require<HTMLElement>("#status-text");
    this.timer = this.require<HTMLElement>("#timer");
    this.loading = this.require<HTMLElement>(".loading");
    this.loadingProgress = this.require<HTMLElement>("#loading-progress");
    this.loadingMessage = this.require<HTMLElement>("#loading-message");
    this.fallback = this.require<HTMLElement>(".fallback");
    this.result = this.require<HTMLElement>(".result");
    this.resultEyebrow = this.require<HTMLElement>("#result-eyebrow");
    this.resultLabel = this.require<HTMLElement>("#result-label");
    this.resultMeta = this.require<HTMLElement>("#result-meta");
    this.resultCaveat = this.require<HTMLElement>("#result-caveat");
    this.notice = this.require<HTMLElement>(".notice");
    this.noticeTitle = this.require<HTMLElement>("#notice-title");
    this.noticeMessage = this.require<HTMLElement>("#notice-message");
    this.noticeRetry = this.require<HTMLButtonElement>("#notice-retry");
    this.assetBanner = this.require<HTMLElement>(".asset-banner");
    this.assetBannerText = this.require<HTMLElement>("#asset-banner-text");
    this.assetRetry = this.require<HTMLButtonElement>("#asset-retry");
    this.liveRegion = this.require<HTMLElement>("#live-region");

    this.recordButton.addEventListener("click", this.handleRecordClick);
    this.themeButton.addEventListener("click", this.handleThemeClick);
    this.cancelButton.addEventListener("click", this.handleCancelClick);
    this.replayButton.addEventListener("click", this.handleReplayClick);
    this.noticeRetry.addEventListener("click", this.handleRetryClick);
    this.assetRetry.addEventListener("click", this.handleRetryAssetsClick);

    this.setPhase("boot");
    const savedTheme = window.localStorage.getItem("voice-reveal-theme");
    this.setTheme(savedTheme === "light" ? "light" : "dark");
  }

  setReady(ready: boolean): void {
    this.ready = ready;
    this.syncRecordButton();
  }

  setPhase(phase: GalleryPhase): void {
    this.phase = phase;
    this.root.dataset.phase = phase;
    this.statusText.textContent = STATUS_COPY[phase];
    this.recordLabel.textContent = RECORD_LABEL[phase];
    this.recordHint.textContent = RECORD_HINT[phase];
    this.recordButton.setAttribute(
      "aria-label",
      `${RECORD_LABEL[phase]}. ${RECORD_HINT[phase]}.`,
    );
    this.recordButton.setAttribute(
      "aria-pressed",
      phase === "listening" ? "true" : "false",
    );

    this.cancelButton.hidden = phase !== "listening";
    this.timer.hidden = phase !== "listening" && phase !== "processing";
    if (phase === "listening") {
      this.timer.textContent = "0:00";
    }
    if (phase === "idle" || phase === "reveal" || phase === "boot") {
      this.timer.hidden = true;
    }

    this.syncRecordButton();
    this.syncReplayButton();
    this.announce(STATUS_COPY[phase]);
  }

  setLoading(visible: boolean, progress = 0, message?: string): void {
    this.loading.classList.toggle("is-hidden", !visible);
    this.loading.setAttribute("aria-hidden", visible ? "false" : "true");
    this.loadingProgress.style.width = `${Math.round(
      Math.max(0, Math.min(1, progress)) * 100,
    )}%`;
    if (message) this.loadingMessage.textContent = message;
  }

  setLoadingMessage(message: string): void {
    this.loadingMessage.textContent = message;
  }

  setFallbackVisible(visible: boolean): void {
    this.fallback.classList.toggle("is-visible", visible);
    this.fallback.setAttribute("aria-hidden", visible ? "false" : "true");
  }

  setFallbackReveal(prediction: Prediction | null): void {
    this.fallback.classList.toggle("reveal-male", prediction === "M");
    this.fallback.classList.toggle("reveal-female", prediction === "F");
  }

  setAssetBanner(message: string | null): void {
    this.assetBanner.classList.toggle("is-visible", Boolean(message));
    if (message) this.assetBannerText.textContent = message;
  }

  setElapsed(milliseconds: number): void {
    this.timer.textContent = formatTime(milliseconds);
  }

  setReplayAvailable(url: string | null): void {
    this.replayUrl = url;
    this.replayButton.textContent = "Play recording";
    this.replayButton.setAttribute("aria-label", "Play the last recording");
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio = null;
    }
    this.syncReplayButton();
    if (!url) return;

    const audio = new Audio(url);
    audio.preload = "metadata";
    audio.addEventListener("ended", () => {
      this.replayButton.textContent = "Play recording";
      this.replayButton.setAttribute("aria-label", "Play the last recording");
    });
    this.audio = audio;
  }

  showResult(
    label: string,
    confidence: number | null,
    source: VoiceSource | null,
  ): gsap.core.Timeline {
    this.resultTimeline?.kill();
    this.resultEyebrow.textContent = "Predicted voice category";
    this.resultLabel.textContent = label;
    this.resultLabel.setAttribute("aria-label", `Predicted voice category: ${label}`);

    const sourceCopy =
      source === "upload" ? "Uploaded clip" : source === "microphone" ? "Live recording" : "";
    const confidenceCopy =
      confidence === null
        ? "Confidence not reported by the model"
        : `Model confidence ${Math.round(confidence * 100)}%`;
    this.resultMeta.textContent = sourceCopy
      ? `${confidenceCopy} · ${sourceCopy}`
      : confidenceCopy;
    this.resultCaveat.textContent =
      "A statistical model output, not a statement about identity.";

    this.result.hidden = false;
    this.result.setAttribute("aria-hidden", "false");

    const duration = this.reducedMotion ? 0.18 : 1.05;
    const timeline = gsap.timeline({ paused: true });
    timeline.set(this.result, { visibility: "visible" });
    timeline.fromTo(
      this.result,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration, ease: "power2.out" },
    );
    timeline.fromTo(
      this.resultEyebrow,
      { opacity: 0, y: 6 },
      { opacity: 1, y: 0, duration: this.reducedMotion ? 0.15 : 0.7, ease: "power2.out" },
      0.06,
    );
    timeline.fromTo(
      this.resultMeta,
      { opacity: 0 },
      { opacity: 1, duration: this.reducedMotion ? 0.15 : 0.8, ease: "power2.out" },
      0.2,
    );
    this.resultTimeline = timeline;

    this.announce(
      `Predicted voice category: ${label}. ${confidenceCopy}. This is a model output, not a statement about identity.`,
    );
    return timeline;
  }

  hideResult(duration = 0.3): void {
    this.resultTimeline?.kill();
    this.resultTimeline = null;
    if (this.reducedMotion || duration <= 0) {
      this.result.style.opacity = "0";
      this.result.style.transform = "translateY(8px)";
      this.result.setAttribute("aria-hidden", "true");
      this.result.hidden = true;
      return;
    }
    this.resultTimeline = gsap.to(this.result, {
      opacity: 0,
      y: 8,
      duration,
      ease: "power2.out",
      overwrite: "auto",
      onComplete: () => {
        this.result.setAttribute("aria-hidden", "true");
        this.result.hidden = true;
        this.resultTimeline = null;
      },
    });
  }

  showNotice(
    title: string,
    message: string,
    retryLabel = "Try another recording",
  ): gsap.core.Timeline {
    this.noticeTimeline?.kill();
    this.noticeTitle.textContent = title;
    this.noticeMessage.textContent = message;
    this.noticeRetry.textContent = retryLabel;
    this.notice.hidden = false;
    this.notice.classList.add("is-visible");
    this.notice.setAttribute("aria-hidden", "false");

    const timeline = gsap.timeline({ paused: true });
    timeline.fromTo(
      this.notice,
      { opacity: 0, y: 10 },
      {
        opacity: 1,
        y: 0,
        duration: this.reducedMotion ? 0.15 : 0.5,
        ease: "power2.out",
      },
    );
    this.noticeTimeline = timeline;
    this.announce(`${title}. ${message}`);
    return timeline;
  }

  hideNotice(): void {
    this.noticeTimeline?.kill();
    this.noticeTimeline = null;
    this.notice.classList.remove("is-visible");
    this.notice.setAttribute("aria-hidden", "true");
    this.notice.hidden = true;
  }

  announce(message: string): void {
    if (this.announceTimer !== null) {
      window.clearTimeout(this.announceTimer);
    }
    this.liveRegion.textContent = "";
    this.announceTimer = window.setTimeout(() => {
      this.liveRegion.textContent = message;
      this.announceTimer = null;
    }, 40);
  }

  dispose(): void {
    this.recordButton.removeEventListener("click", this.handleRecordClick);
    this.themeButton.removeEventListener("click", this.handleThemeClick);
    this.cancelButton.removeEventListener("click", this.handleCancelClick);
    this.replayButton.removeEventListener("click", this.handleReplayClick);
    this.noticeRetry.removeEventListener("click", this.handleRetryClick);
    this.assetRetry.removeEventListener("click", this.handleRetryAssetsClick);
    this.resultTimeline?.kill();
    this.noticeTimeline?.kill();
    if (this.announceTimer !== null) {
      window.clearTimeout(this.announceTimer);
      this.announceTimer = null;
    }
    if (this.audio) {
      this.audio.pause();
      this.audio.removeAttribute("src");
      this.audio.load();
      this.audio = null;
    }
    this.replayUrl = null;
  }

  private require<T extends HTMLElement>(selector: string): T {
    const element = this.root.querySelector<T>(selector);
    if (!element) {
      throw new Error(`Voice reveal UI is missing ${selector}`);
    }
    return element;
  }

  private syncRecordButton(): void {
    const busy = this.phase === "boot" || this.phase === "processing";
    this.recordButton.disabled = !this.ready || busy;
    this.recordButton.classList.toggle("is-busy", busy);
  }

  private syncReplayButton(): void {
    this.replayButton.hidden =
      !this.replayUrl ||
      (this.phase !== "reveal" && this.phase !== "idle");
  }

  private handleRecordClick = (): void => {
    if (!this.ready || this.phase === "boot" || this.phase === "processing") {
      return;
    }
    this.callbacks.onRecordClick();
  };

  private handleThemeClick = (): void => {
    this.setTheme(this.root.dataset.theme === "light" ? "dark" : "light");
  };

  private setTheme(theme: "dark" | "light"): void {
    this.root.dataset.theme = theme;
    document.documentElement.dataset.voiceTheme = theme;
    window.localStorage.setItem("voice-reveal-theme", theme);
    const next = theme === "dark" ? "light" : "dark";
    this.themeButton.setAttribute("aria-label", `Switch to ${next} theme`);
    this.themeButton.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
  }

  private handleCancelClick = (): void => {
    this.callbacks.onCancelClick();
  };

  private handleRetryClick = (): void => {
    this.callbacks.onRetryClick();
  };

  private handleRetryAssetsClick = (): void => {
    this.callbacks.onRetryAssetsClick();
  };

  private handleReplayClick = (): void => {
    if (!this.replayUrl) return;
    if (!this.audio) {
      this.audio = new Audio(this.replayUrl);
      this.audio.addEventListener("ended", () => {
        this.replayButton.textContent = "Play recording";
        this.replayButton.setAttribute("aria-label", "Play the last recording");
      });
    }

    if (this.audio.paused) {
      void this.audio.play().then(() => {
        this.replayButton.textContent = "Pause recording";
        this.replayButton.setAttribute("aria-label", "Pause the last recording");
      }).catch(() => {
        this.replayButton.textContent = "Play recording";
      });
    } else {
      this.audio.pause();
      this.replayButton.textContent = "Play recording";
      this.replayButton.setAttribute("aria-label", "Play the last recording");
    }
  };
}
