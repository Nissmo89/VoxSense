export class Waveform {
  private readonly canvas: HTMLCanvasElement;
  private readonly context: CanvasRenderingContext2D | null;
  private readonly wrapper: HTMLElement | null;
  private width = 0;
  private height = 0;
  private dpr = 1;
  private lastDraw = 0;
  private readonly reducedMotion: boolean;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.wrapper = canvas.closest(".waveform");
    this.reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    this.resize();
  }

  setActive(active: boolean): void {
    this.wrapper?.classList.toggle("is-active", active);
    if (!active) this.clear();
  }

  resize(): void {
    const rect = this.canvas.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);
    this.width = rect.width;
    this.height = rect.height;
    this.canvas.width = Math.round(this.width * this.dpr);
    this.canvas.height = Math.round(this.height * this.dpr);
    this.context?.setTransform(this.dpr, 0, 0, this.dpr, 0, 0);
  }

  draw(timeDomain: Uint8Array, level: number): void {
    const context = this.context;
    if (!context) return;

    if (this.width === 0 || this.height === 0) this.resize();
    if (this.width === 0 || this.height === 0) return;

    // The waveform is decorative, but it is driven by real microphone data.
    // Throttle slightly on reduced-motion machines without replacing the data.
    const now = performance.now();
    if (this.reducedMotion && now - this.lastDraw < 80) return;
    this.lastDraw = now;

    const width = this.width;
    const height = this.height;
    const center = height / 2;
    const points = this.reducedMotion ? 56 : 104;
    const amplitude = height * (0.28 + Math.min(0.32, level * 0.32));

    context.clearRect(0, 0, width, height);

    const gradient = context.createLinearGradient(0, 0, width, 0);
    gradient.addColorStop(0, "rgba(239, 233, 223, 0)");
    gradient.addColorStop(0.18, "rgba(239, 233, 223, 0.34)");
    gradient.addColorStop(0.5, "rgba(246, 238, 225, 0.9)");
    gradient.addColorStop(0.82, "rgba(239, 233, 223, 0.34)");
    gradient.addColorStop(1, "rgba(239, 233, 223, 0)");

    context.save();
    context.lineWidth = 1;
    context.strokeStyle = "rgba(239, 233, 223, 0.13)";
    context.beginPath();
    context.moveTo(0, center);
    context.lineTo(width, center);
    context.stroke();

    const top: Array<[number, number]> = [];
    for (let index = 0; index < points; index += 1) {
      const ratio = index / (points - 1);
      const sampleIndex = Math.min(
        timeDomain.length - 1,
        Math.floor(ratio * (timeDomain.length - 1)),
      );
      const sample = (timeDomain[sampleIndex] - 128) / 128;
      const x = ratio * width;
      const y = center + sample * amplitude;
      top.push([x, y]);
    }

    context.beginPath();
    context.moveTo(top[0][0], top[0][1]);
    for (let index = 1; index < top.length; index += 1) {
      const [previousX, previousY] = top[index - 1];
      const [x, y] = top[index];
      const midX = (previousX + x) / 2;
      context.quadraticCurveTo(previousX, previousY, midX, (previousY + y) / 2);
    }
    const last = top[top.length - 1];
    context.lineTo(last[0], last[1]);

    context.lineWidth = 1.15;
    context.strokeStyle = gradient;
    context.shadowColor = "rgba(230, 210, 180, 0.35)";
    context.shadowBlur = 7;
    context.stroke();

    context.globalAlpha = 0.16;
    context.fillStyle = gradient;
    context.beginPath();
    context.moveTo(top[0][0], center);
    for (const [x, y] of top) context.lineTo(x, y);
    context.lineTo(last[0], center);
    context.closePath();
    context.fill();

    context.restore();
  }

  clear(): void {
    if (!this.context) return;
    this.context.clearRect(0, 0, this.width, this.height);
  }

  dispose(): void {
    this.clear();
    this.wrapper?.classList.remove("is-active");
  }
}
