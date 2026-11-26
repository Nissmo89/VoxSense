import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import gsap from "gsap";
import type { Prediction } from "./types";

export type GalleryPhase =
  | "boot"
  | "idle"
  | "listening"
  | "processing"
  | "reveal"
  | "uncertain"
  | "error";

export interface GalleryCallbacks {
  onProgress: (progress: number) => void;
  onLoadSettled: (missing: Prediction[]) => void;
  onAssetError: (message: string) => void;
  onContextLost: () => void;
}

interface Framing {
  position: THREE.Vector3;
  target: THREE.Vector3;
}

interface StatueRig {
  prediction: Prediction;
  group: THREE.Group;
  keyLight: THREE.DirectionalLight;
  rimLight: THREE.DirectionalLight;
  accentSpot: THREE.SpotLight;
  layer: number;
  loaded: boolean;
  bounds: THREE.Box3;
}

interface MaterialDefaults {
  opacity: number;
  transparent: boolean;
}

interface StatueDefinition {
  prediction: Prediction;
  url: string;
  targetHeight: number;
  rotationY: number;
  x: number;
  layer: number;
}

// Vite's library build can inline `new URL(..., import.meta.url)` into a data
// URL when it sees the pattern directly. Capturing the module URL as a string
// first keeps runtime asset resolution pointed at the component's served build
// directory, where copy-models.mjs places the GLBs next to this bundle.
const MODULE_URL = String(import.meta.url);
const assetUrl = (filename: string): string =>
  new URL(`models/${filename}`, new URL(".", MODULE_URL)).href;

const STATUES: Record<Prediction, StatueDefinition> = {
  F: {
    prediction: "F",
    // The supplied filename is intentionally kept exactly as delivered.
    url: assetUrl("femal-plaster-head_v2.glb"),
    targetHeight: 1.12,
    rotationY: Math.PI + 0.14,
    x: -0.62,
    layer: 1,
  },
  M: {
    prediction: "M",
    url: assetUrl("somewhat_recognizable.glb"),
    targetHeight: 1.0,
    rotationY: -Math.PI / 2 - 0.14,
    x: 0.62,
    layer: 2,
  },
};

const IDLE_KEY = 0.34;
const IDLE_RIM = 0.05;
const LISTENING_KEY = 0.26;
const LISTENING_RIM = 0.035;
const PROCESSING_KEY = 0.2;
const PROCESSING_RIM = 0.025;
const REVEAL_KEY = 3.6;
const REVEAL_RIM = 1.45;

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

export class GalleryScene {
  private readonly container: HTMLElement;
  private readonly canvas: HTMLCanvasElement;
  private readonly callbacks: GalleryCallbacks;
  private readonly renderer: THREE.WebGLRenderer;
  private readonly scene: THREE.Scene;
  private readonly camera: THREE.PerspectiveCamera;
  private readonly cameraTarget = new THREE.Vector3(0, 0.55, 0);
  private readonly clock = new THREE.Clock();
  private readonly reducedMotionQuery = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  );

  private readonly statues: Partial<Record<Prediction, StatueRig>> = {};
  private readonly pendingLoads = new Set<Prediction>();
  private readonly progress = new Map<Prediction, { loaded: number; total: number }>();
  private readonly missing = new Set<Prediction>();
  private readonly materialDefaults = new WeakMap<THREE.Material, MaterialDefaults>();

  private ambient: THREE.HemisphereLight | null = null;
  private fill: THREE.DirectionalLight | null = null;
  private floor: THREE.Mesh | null = null;
  private contactShadows: THREE.Mesh[] = [];
  private dust: THREE.Points | null = null;
  private dustBase: Float32Array | null = null;
  private environmentTexture: THREE.Texture | null = null;
  private floorTexture: THREE.CanvasTexture | null = null;
  private shadowTexture: THREE.CanvasTexture | null = null;

  private stateTimeline: gsap.core.Timeline | null = null;
  private resizeObserver: ResizeObserver | null = null;
  private animationFrame: number | null = null;
  private running = false;
  private disposed = false;
  private phase: GalleryPhase = "boot";
  private currentReveal: Prediction | null = null;
  private reducedMotion = this.reducedMotionQuery.matches;
  private stageWidth = 1;
  private stageHeight = 1;
  private initialLoadDone = false;

  // Parallax cursor tracking
  private parallaxX = 0;
  private parallaxY = 0;
  private targetParallaxX = 0;
  private targetParallaxY = 0;
  private readonly handlePointerMove: (e: MouseEvent | TouchEvent) => void;
  private readonly resetPointer = (): void => {
    this.targetParallaxX = 0;
    this.targetParallaxY = 0;
  };

  constructor(
    container: HTMLElement,
    canvas: HTMLCanvasElement,
    callbacks: GalleryCallbacks,
  ) {
    this.container = container;
    this.canvas = canvas;
    this.callbacks = callbacks;

    this.renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setClearColor(0x000000, 0);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x0a0908, 4.2, 9.5);

    this.camera = new THREE.PerspectiveCamera(32, 1, 0.05, 40);
    this.camera.position.set(0, 0.7, 3.2);
    this.camera.layers.enable(0);
    this.camera.layers.enable(1);
    this.camera.layers.enable(2);

    this.stageWidth = Math.max(1, container.clientWidth);
    this.stageHeight = Math.max(1, container.clientHeight);

    this.setupEnvironment();
    this.setupLights();
    this.setupFloor();
    this.setupDust();
    this.resize();

    this.handlePointerMove = (e: MouseEvent | TouchEvent) => {
      const rect = this.container.getBoundingClientRect();
      let clientX: number;
      let clientY: number;
      if (e instanceof TouchEvent && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else if (e instanceof MouseEvent) {
        clientX = e.clientX;
        clientY = e.clientY;
      } else {
        return;
      }
      const nx = ((clientX - rect.left) / rect.width) * 2 - 1;
      const ny = ((clientY - rect.top) / rect.height) * 2 - 1;
      this.targetParallaxX = clamp(nx, -1, 1) * 0.12;
      this.targetParallaxY = clamp(ny, -1, 1) * -0.065;
    };

    this.reducedMotionQuery.addEventListener("change", this.handleMotionPreference);
    this.canvas.addEventListener("webglcontextlost", this.handleContextLost, false);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
    this.container.addEventListener("mousemove", this.handlePointerMove);
    this.container.addEventListener("touchmove", this.handlePointerMove, { passive: true });
    this.container.addEventListener("mouseleave", this.resetPointer);
    this.container.addEventListener("touchend", this.resetPointer, { passive: true });

    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(container);

    this.startLoop();
    this.loadMissingStatues();
  }

  get isReducedMotion(): boolean {
    return this.reducedMotion;
  }

  get currentPhase(): GalleryPhase {
    return this.phase;
  }

  hasStatue(prediction: Prediction): boolean {
    return this.statues[prediction]?.loaded === true;
  }

  retryLoad(): void {
    if (this.disposed) return;
    this.missing.clear();
    this.callbacks.onProgress(0);
    this.loadMissingStatues();
  }

  enterIdleState(duration = 0.8): void {
    this.phase = "idle";
    this.currentReveal = null;
    this.killStateTimeline();
    this.tweenLightsTo(IDLE_KEY, IDLE_RIM, duration);
    this.applyFraming(this.computeIdleFraming(), duration);
    // Reset any recession effect on all statues
    this.resetRecession(duration);
    this.tweenDustColor(0xfff0dc, duration);
  }

  enterListeningState(): void {
    this.phase = "listening";
    this.currentReveal = null;
    this.killStateTimeline();
    // Put the figures back in their original two-model composition before
    // calculating the idle camera framing for a new recording.
    this.resetRecession(0.75, true);
    this.tweenLightsTo(LISTENING_KEY, LISTENING_RIM, 0.75);
    this.applyFraming(this.computeIdleFraming(), 0.9);
    this.tweenDustColor(0xfff0dc, 0.75);
  }

  enterProcessingState(): void {
    this.phase = "processing";
    this.currentReveal = null;
    this.killStateTimeline();
    this.tweenLightsTo(PROCESSING_KEY, PROCESSING_RIM, 0.55);
    this.resetRecession(0.55);
    this.tweenDustColor(0xfff0dc, 0.55);
  }

  enterUncertainState(): void {
    this.phase = "uncertain";
    this.currentReveal = null;
    this.killStateTimeline();
    this.tweenLightsTo(IDLE_KEY, IDLE_RIM, 0.9);
    this.applyFraming(this.computeIdleFraming(), 0.9);
    this.resetRecession(0.9);
    this.tweenDustColor(0xfff0dc, 0.9);
  }

  enterErrorState(): void {
    this.phase = "error";
    this.currentReveal = null;
    this.killStateTimeline();
    this.tweenLightsTo(IDLE_KEY, IDLE_RIM, 0.7);
    this.applyFraming(this.computeIdleFraming(), 0.7);
    this.resetRecession(0.7);
    this.tweenDustColor(0xfff0dc, 0.7);
  }

  /**
   * Build (but do not play) the master scene reveal timeline. The UI adds its
   * typography tween to this same timeline so light, camera and text feel like
   * one event.
   */
  createRevealTimeline(prediction: Prediction): gsap.core.Timeline | null {
    const selected = this.statues[prediction];
    if (!selected || !selected.loaded) {
      return null;
    }

    this.phase = "reveal";
    this.currentReveal = prediction;
    this.killStateTimeline();

    const timeline = gsap.timeline({ paused: true });
    const reduced = this.reducedMotion;
    const lightDuration = reduced ? 0.35 : 2.2;

    // Gender-specific light colors for selected statue
    const isMale = prediction === "M";
    const revealKeyColor = isMale ? 0xffd28a : 0xa8d8ff;
    const revealRimColor = isMale ? 0xc8963c : 0x7ab8f5;
    const dustColor = isMale ? 0xffd28a : 0xa8d8ff;
    if (this.dust) {
      const material = this.dust.material as THREE.PointsMaterial;
      timeline.to(material.color, {
        r: ((dustColor >> 16) & 0xff) / 255,
        g: ((dustColor >> 8) & 0xff) / 255,
        b: (dustColor & 0xff) / 255,
        duration: lightDuration,
        ease: "power2.inOut",
      }, 0.3);
    }

    for (const rig of Object.values(this.statues)) {
      if (!rig) continue;
      if (rig.prediction === prediction) {
        // Animate to colored key/rim light
        timeline.to(
          rig.keyLight.color,
          {
            r: ((revealKeyColor >> 16) & 0xff) / 255,
            g: ((revealKeyColor >> 8) & 0xff) / 255,
            b: (revealKeyColor & 0xff) / 255,
            duration: lightDuration,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          0.12,
        );
        timeline.to(
          rig.keyLight,
          {
            intensity: REVEAL_KEY,
            duration: lightDuration,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          0.12,
        );
        timeline.to(
          rig.rimLight.color,
          {
            r: ((revealRimColor >> 16) & 0xff) / 255,
            g: ((revealRimColor >> 8) & 0xff) / 255,
            b: (revealRimColor & 0xff) / 255,
            duration: reduced ? 0.35 : 1.85,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          0.42,
        );
        timeline.to(
          rig.rimLight,
          {
            intensity: REVEAL_RIM,
            duration: reduced ? 0.35 : 1.85,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          0.42,
        );
        timeline.to(
          rig.accentSpot,
          {
            intensity: prediction === "F" ? 1.25 : 0,
            duration: reduced ? 0.35 : 1.8,
            ease: "power2.inOut",
            overwrite: "auto",
          },
          0.28,
        );
        if (prediction === "F") {
          timeline.to(
            rig.accentSpot.position,
            { x: STATUES.M.x + 0.48, duration: reduced ? 0.25 : 1.0, ease: "power2.out" },
            0,
          );
          timeline.to(
            rig.accentSpot.target.position,
            { x: STATUES.M.x, duration: reduced ? 0.25 : 1.0, ease: "power2.out" },
            0,
          );
        }
        // Reset selected statue recession (bring to normal)
        timeline.to(
          rig.group.position,
          {
            // Keep either winning figure in the right-hand spotlight. This
            // leaves the lower-left result label unobstructed.
            x: STATUES.M.x,
            duration: reduced ? 0.25 : 1.0,
            ease: "power2.out",
            overwrite: "auto",
          },
          0,
        );
        timeline.to(
          rig.group.scale,
          {
            x: 1, y: 1, z: 1,
            duration: reduced ? 0.25 : 1.0,
            ease: "power2.out",
            overwrite: "auto",
          },
          0,
        );
        // A figure can become dimmed when it was the non-selected statue in
        // the previous reveal. Always restore its source opacity as it wins.
        rig.group.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          for (const material of materials) {
            const defaults = this.materialDefaults.get(material) ?? {
              opacity: 1,
              transparent: false,
            };
            material.transparent = true;
            timeline.to(
              material,
              {
                opacity: defaults.opacity,
                duration: reduced ? 0.25 : 0.8,
                ease: "power2.out",
                overwrite: "auto",
                onComplete: () => { material.transparent = defaults.transparent; },
              },
              0,
            );
          }
        });
      } else {
        // Dim the non-selected statue
        timeline.to(
          rig.keyLight,
          {
            intensity: IDLE_KEY,
            duration: reduced ? 0.25 : 1.1,
            ease: "power2.out",
            overwrite: "auto",
          },
          0,
        );
        timeline.to(
          rig.rimLight,
          {
            intensity: IDLE_RIM,
            duration: reduced ? 0.25 : 1.1,
            ease: "power2.out",
            overwrite: "auto",
          },
          0,
        );
        // Recession: move sideways + scale down + fade materials
        const otherDef = STATUES[rig.prediction];
        const recessX = otherDef.x + (rig.prediction === "M" ? 0.6 : -0.6);
        timeline.to(
          rig.group.position,
          {
            x: recessX,
            duration: reduced ? 0.25 : 1.1,
            ease: "none",
            overwrite: "auto",
          },
          0,
        );
        timeline.to(
          rig.group.scale,
          {
            x: 0.62, y: 0.62, z: 0.62,
            duration: reduced ? 0.25 : 1.1,
            ease: "none",
            overwrite: "auto",
          },
          0,
        );
        // Fade materials
        rig.group.traverse((child) => {
          if (!(child instanceof THREE.Mesh)) return;
          const materials = Array.isArray(child.material) ? child.material : [child.material];
          for (const mat of materials) {
            if (mat && "transparent" in mat) {
              (mat as THREE.MeshStandardMaterial).transparent = true;
              timeline.to(
                mat,
                {
                  opacity: 0.14,
                  duration: reduced ? 0.25 : 1.1,
                  ease: "none",
                  overwrite: "auto",
                },
                0,
              );
            }
          }
        });
      }
    }

    if (!reduced) {
      const framing = this.computeRevealFraming(prediction);
      if (framing) {
        this.addFramingTweens(timeline, framing, 0.12, 2.45);
      }
    }

    this.stateTimeline = timeline;
    return timeline;
  }

  setReducedMotion(value: boolean): void {
    this.reducedMotion = value;
  }

  resize(): void {
    if (this.disposed) return;
    const width = Math.max(1, this.container.clientWidth);
    const height = Math.max(1, this.container.clientHeight);
    this.stageWidth = width;
    this.stageHeight = height;

    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(width, height, false);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    if (this.phase === "reveal" && this.currentReveal) {
      const framing = this.computeRevealFraming(this.currentReveal);
      if (framing) this.applyFraming(framing, 0.25);
    } else if (this.phase !== "boot") {
      this.applyFraming(this.computeIdleFraming(), 0.25);
    }
  }

  dispose(): void {
    if (this.disposed) return;
    this.disposed = true;

    this.killStateTimeline();
    for (const rig of Object.values(this.statues)) {
      if (!rig) continue;
      gsap.killTweensOf(rig.keyLight);
      gsap.killTweensOf(rig.rimLight);
      gsap.killTweensOf(rig.accentSpot);
      gsap.killTweensOf(rig.accentSpot.position);
      gsap.killTweensOf(rig.accentSpot.target.position);
    }

    this.stopLoop();
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
    this.reducedMotionQuery.removeEventListener(
      "change",
      this.handleMotionPreference,
    );
    this.canvas.removeEventListener(
      "webglcontextlost",
      this.handleContextLost,
      false,
    );
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
    this.container.removeEventListener("mousemove", this.handlePointerMove);
    this.container.removeEventListener("touchmove", this.handlePointerMove);
    this.container.removeEventListener("mouseleave", this.resetPointer);
    this.container.removeEventListener("touchend", this.resetPointer);

    const geometries = new Set<THREE.BufferGeometry>();
    const materials = new Set<THREE.Material>();
    const textures = new Set<THREE.Texture>();

    this.scene.traverse((object) => {
      const mesh = object as THREE.Mesh;
      if (mesh.geometry) geometries.add(mesh.geometry);
      const material = mesh.material;
      if (Array.isArray(material)) {
        material.forEach((entry) => materials.add(entry));
      } else if (material) {
        materials.add(material);
      }
    });

    materials.forEach((material) => {
      const entries = material as THREE.Material & {
        map?: THREE.Texture | null;
        normalMap?: THREE.Texture | null;
        roughnessMap?: THREE.Texture | null;
        metalnessMap?: THREE.Texture | null;
        aoMap?: THREE.Texture | null;
        clearcoatMap?: THREE.Texture | null;
        clearcoatNormalMap?: THREE.Texture | null;
      };
      if (entries.map) textures.add(entries.map);
      if (entries.normalMap) textures.add(entries.normalMap);
      if (entries.roughnessMap) textures.add(entries.roughnessMap);
      if (entries.metalnessMap) textures.add(entries.metalnessMap);
      if (entries.aoMap) textures.add(entries.aoMap);
      if (entries.clearcoatMap) textures.add(entries.clearcoatMap);
      if (entries.clearcoatNormalMap) textures.add(entries.clearcoatNormalMap);
      material.dispose();
    });

    textures.forEach((texture) => texture.dispose());
    geometries.forEach((geometry) => geometry.dispose());

    this.environmentTexture?.dispose();
    this.floorTexture?.dispose();
    this.shadowTexture?.dispose();

    this.scene.clear();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
  }

  private setupEnvironment(): void {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createLinearGradient(0, 0, 0, 256);
      gradient.addColorStop(0, "#7c7060");
      gradient.addColorStop(0.32, "#3b352c");
      gradient.addColorStop(0.72, "#171410");
      gradient.addColorStop(1, "#090807");
      context.fillStyle = gradient;
      context.fillRect(0, 0, 512, 256);

      const glow = context.createRadialGradient(150, 46, 4, 150, 46, 190);
      glow.addColorStop(0, "rgba(255, 244, 224, 0.95)");
      glow.addColorStop(0.28, "rgba(224, 204, 174, 0.32)");
      glow.addColorStop(1, "rgba(0, 0, 0, 0)");
      context.fillStyle = glow;
      context.fillRect(0, 0, 512, 256);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.mapping = THREE.EquirectangularReflectionMapping;
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;

    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.environmentTexture = pmrem.fromEquirectangular(texture).texture;
    pmrem.dispose();
    texture.dispose();

    this.scene.environment = this.environmentTexture;
    this.scene.environmentIntensity = 0.2;
  }

  private setupLights(): void {
    this.ambient = new THREE.HemisphereLight(0xfff3df, 0x17130f, 0.42);
    this.ambient.layers.set(0);
    this.scene.add(this.ambient);

    this.fill = new THREE.DirectionalLight(0xcfd8e6, 0.18);
    this.fill.position.set(-0.6, 1.6, 3.4);
    this.fill.target.position.set(0, 0.5, 0);
    this.fill.layers.set(0);
    this.scene.add(this.fill, this.fill.target);
  }

  private setupFloor(): void {
    this.floorTexture = this.createRadialTexture(
      "rgba(146, 132, 108, 0.24)",
      "rgba(0, 0, 0, 0)",
    );
    const floorMaterial = new THREE.MeshBasicMaterial({
      map: this.floorTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.85,
      toneMapped: false,
    });
    this.floor = new THREE.Mesh(new THREE.PlaneGeometry(7.5, 5.6), floorMaterial);
    this.floor.rotation.x = -Math.PI / 2;
    this.floor.position.set(0, -0.002, 0);
    this.floor.renderOrder = -2;
    this.floor.layers.set(0);
    this.scene.add(this.floor);

    this.shadowTexture = this.createRadialTexture(
      "rgba(0, 0, 0, 0.58)",
      "rgba(0, 0, 0, 0)",
    );
    const shadowMaterial = new THREE.MeshBasicMaterial({
      map: this.shadowTexture,
      transparent: true,
      depthWrite: false,
      opacity: 0.75,
      toneMapped: false,
    });

    for (const prediction of ["F", "M"] as const) {
      const definition = STATUES[prediction];
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(0.78, 0.58),
        shadowMaterial,
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.set(definition.x, 0.001, 0.02);
      shadow.renderOrder = -1;
      shadow.layers.set(0);
      this.contactShadows.push(shadow);
      this.scene.add(shadow);
    }
  }

  private setupDust(): void {
    const count = 90;
    const positions = new Float32Array(count * 3);
    for (let index = 0; index < count; index += 1) {
      positions[index * 3] = (Math.random() - 0.5) * 2.7;
      positions[index * 3 + 1] = Math.random() * 1.85 + 0.1;
      positions[index * 3 + 2] = (Math.random() - 0.5) * 1.1;
    }

    this.dustBase = positions.slice();
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({
      color: 0xfff0dc,
      size: 0.008,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.16,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      toneMapped: false,
    });

    this.dust = new THREE.Points(geometry, material);
    this.dust.layers.set(0);
    this.scene.add(this.dust);
  }

  private loadMissingStatues(): void {
    for (const prediction of ["F", "M"] as const) {
      if (this.statues[prediction]?.loaded) continue;
      if (this.pendingLoads.has(prediction)) continue;
      this.pendingLoads.add(prediction);
      this.missing.delete(prediction);
      this.loadStatue(prediction);
    }
  }

  private loadStatue(prediction: Prediction): void {
    const definition = STATUES[prediction];
    const loader = new GLTFLoader();

    loader.load(
      definition.url,
      (gltf) => {
        if (this.disposed) return;
        try {
          const rig = this.prepareStatue(gltf.scene, definition);
          this.statues[prediction] = rig;
          this.pendingLoads.delete(prediction);
          this.settleLoad();
        } catch (error) {
          console.error(`Unable to prepare the ${prediction} sculpture`, error);
          this.handleAssetFailure(prediction);
        }
      },
      (event) => {
        if (this.disposed) return;
        const total = event.total > 0 ? event.total : 0;
        const loaded = event.loaded;
        this.progress.set(prediction, { loaded, total });
        this.callbacks.onProgress(this.computeProgress());
      },
      (error) => {
        console.error(`Unable to load the ${prediction} sculpture`, error);
        this.handleAssetFailure(prediction);
      },
    );
  }

  private handleAssetFailure(prediction: Prediction): void {
    this.pendingLoads.delete(prediction);
    this.missing.add(prediction);
    this.callbacks.onAssetError(
      prediction === "M"
        ? "The male sculpture could not be loaded."
        : "The female sculpture could not be loaded.",
    );
    this.settleLoad();
  }

  private settleLoad(): void {
    if (this.pendingLoads.size > 0) return;

    const missing = Array.from(this.missing);
    if (this.initialLoadDone && missing.length === 0) {
      this.callbacks.onProgress(1);
    }
    this.initialLoadDone = true;
    this.callbacks.onLoadSettled(missing);

    if (missing.length === 0) {
      this.callbacks.onProgress(1);
    }
    this.applyFraming(this.computeIdleFraming(), 0);
  }

  private computeProgress(): number {
    let loaded = 0;
    let total = 0;
    let known = true;
    for (const value of this.progress.values()) {
      loaded += value.loaded;
      total += value.total;
      if (value.total <= 0) known = false;
    }
    if (known && total > 0) {
      return clamp(loaded / total, 0, 1);
    }
    return clamp(loaded > 0 ? 0.12 : 0.02, 0, 0.9);
  }

  private prepareStatue(
    model: THREE.Object3D,
    definition: StatueDefinition,
  ): StatueRig {
    const maxAnisotropy = Math.min(
      4,
      this.renderer.capabilities.getMaxAnisotropy(),
    );

    model.traverse((child) => {
      if (!(child instanceof THREE.Mesh)) return;
      child.castShadow = false;
      child.receiveShadow = false;
      child.frustumCulled = true;
      child.layers.enable(0);
      child.layers.enable(definition.layer);

      const source = child.material;
      const sourceMaterials = Array.isArray(source) ? source : [source];
      const nextMaterials = sourceMaterials.map((material) => {
        const map = (material as THREE.MeshBasicMaterial).map;
        if (map) {
          map.anisotropy = maxAnisotropy;
          map.needsUpdate = true;
        }

        if ((material as THREE.MeshBasicMaterial).isMeshBasicMaterial) {
          const basic = material as THREE.MeshBasicMaterial;
          const standard = new THREE.MeshStandardMaterial({
            name: basic.name,
            map: basic.map,
            color: basic.color.clone(),
            side: basic.side,
            transparent: basic.transparent,
            opacity: basic.opacity,
            alphaTest: basic.alphaTest,
            roughness: 0.66,
            metalness: 0,
            envMapIntensity: 0.3,
          });
          this.materialDefaults.set(standard, {
            opacity: standard.opacity,
            transparent: standard.transparent,
          });
          basic.dispose();
          return standard;
        }

        const standard = material as THREE.MeshStandardMaterial;
        this.materialDefaults.set(standard, {
          opacity: standard.opacity,
          transparent: standard.transparent,
        });
        if ("envMapIntensity" in standard) {
          standard.envMapIntensity = 0.42;
        }
        return standard;
      });

      child.material = Array.isArray(source) ? nextMaterials : nextMaterials[0];
    });

    const rawBox = new THREE.Box3().setFromObject(model);
    const rawSize = rawBox.getSize(new THREE.Vector3());
    const scale = definition.targetHeight / Math.max(0.0001, rawSize.y);
    model.scale.setScalar(scale);
    model.rotation.y = definition.rotationY;
    model.updateMatrixWorld(true);

    const rotatedBox = new THREE.Box3().setFromObject(model);
    model.position.x -= (rotatedBox.min.x + rotatedBox.max.x) / 2;
    model.position.z -= (rotatedBox.min.z + rotatedBox.max.z) / 2;
    model.position.y -= rotatedBox.min.y;
    model.updateMatrixWorld(true);

    const group = new THREE.Group();
    group.position.set(definition.x, 0, 0);
    group.add(model);
    this.scene.add(group);

    const keyLight = new THREE.DirectionalLight(0xfff1dc, IDLE_KEY);
    keyLight.position.set(definition.x - 1.2, 2.15, 2.5);
    keyLight.target.position.set(definition.x, 0.56, 0);
    keyLight.layers.set(definition.layer);
    this.scene.add(keyLight, keyLight.target);

    const rimLight = new THREE.DirectionalLight(0xdce7f2, IDLE_RIM);
    rimLight.position.set(definition.x + 1.0, 1.65, -2.3);
    rimLight.target.position.set(definition.x, 0.72, 0);
    rimLight.layers.set(definition.layer);
    this.scene.add(rimLight, rimLight.target);

    const accentSpot = new THREE.SpotLight(
      0xff78ba,
      0,
      3.8,
      Math.PI / 5,
      0.78,
      1.2,
    );
    accentSpot.position.set(definition.x + 0.48, 1.72, 1.45);
    accentSpot.target.position.set(definition.x, 0.78, 0);
    accentSpot.layers.set(definition.layer);
    this.scene.add(accentSpot, accentSpot.target);

    const bounds = new THREE.Box3().setFromObject(group);
    return {
      prediction: definition.prediction,
      group,
      keyLight,
      rimLight,
      accentSpot,
      layer: definition.layer,
      loaded: true,
      bounds,
    };
  }

  private computeCompositionBounds(): THREE.Box3 {
    const bounds = new THREE.Box3();
    let hasBounds = false;
    for (const rig of Object.values(this.statues)) {
      if (!rig) continue;
      const rigBounds = new THREE.Box3().setFromObject(rig.group);
      if (hasBounds) bounds.union(rigBounds);
      else {
        bounds.copy(rigBounds);
        hasBounds = true;
      }
    }
    if (!hasBounds) {
      bounds.set(
        new THREE.Vector3(-0.75, 0, -0.25),
        new THREE.Vector3(0.75, 1.1, 0.25),
      );
    }
    return bounds;
  }

  private computeIdleFraming(): Framing {
    const bounds = this.computeCompositionBounds();
    const size = bounds.getSize(new THREE.Vector3());
    const center = bounds.getCenter(new THREE.Vector3());
    const aspect = this.stageWidth / Math.max(1, this.stageHeight);
    const mobile = aspect < 0.82;
    const focusHeight = mobile ? size.y * 0.78 : size.y;
    const focusWidth = mobile ? size.x * 0.92 : size.x;
    const focusCenterY = mobile
      ? bounds.max.y - focusHeight / 2
      : center.y;
    const margin = mobile ? 1.04 : 1.24;
    const fovRadians = THREE.MathUtils.degToRad(this.camera.fov);
    const distanceForHeight =
      (focusHeight * margin) / 2 / Math.tan(fovRadians / 2);
    const distanceForWidth =
      (focusWidth * margin) / 2 / (Math.tan(fovRadians / 2) * aspect);
    const distance = Math.max(distanceForHeight, distanceForWidth, 2.0);

    return {
      position: new THREE.Vector3(
        center.x,
        focusCenterY + focusHeight * (mobile ? 0.03 : 0.06),
        center.z + distance,
      ),
      target: new THREE.Vector3(center.x, focusCenterY, center.z),
    };
  }

  private computeRevealFraming(prediction: Prediction): Framing | null {
    const selected = this.statues[prediction];
    if (!selected) return null;

    const aspect = this.stageWidth / Math.max(1, this.stageHeight);
    const mobile = aspect < 0.82;
    const selectedBounds = new THREE.Box3().setFromObject(selected.group);
    selectedBounds.translate(
      new THREE.Vector3(STATUES.M.x - selected.group.position.x, 0, 0),
    );
    const selectedSize = selectedBounds.getSize(new THREE.Vector3());
    const selectedCenter = selectedBounds.getCenter(new THREE.Vector3());

    if (mobile) {
      const focusHeight = selectedSize.y * 0.66;
      const focusWidth = selectedSize.x * 1.1;
      const focusCenterY = selectedBounds.max.y - focusHeight / 2;
      const margin = 1.18;
      const fovRadians = THREE.MathUtils.degToRad(this.camera.fov);
      const distanceForHeight =
        (focusHeight * margin) / 2 / Math.tan(fovRadians / 2);
      const distanceForWidth =
        (focusWidth * margin) / 2 / (Math.tan(fovRadians / 2) * aspect);
      const distance = Math.max(distanceForHeight, distanceForWidth, 1.65);

      return {
        position: new THREE.Vector3(
          selectedCenter.x,
          focusCenterY + focusHeight * 0.035,
          selectedCenter.z + distance,
        ),
        target: new THREE.Vector3(
          selectedCenter.x,
          focusCenterY,
          selectedCenter.z,
        ),
      };
    }

    const base = this.computeIdleFraming();
    const shift =
      (selectedCenter.x - base.target.x) * (aspect < 1.1 ? 0.55 : 0.38);
    const target = new THREE.Vector3(
      base.target.x + shift,
      base.target.y,
      base.target.z,
    );
    const position = new THREE.Vector3(
      target.x,
      base.position.y,
      base.target.z +
        (base.position.z - base.target.z) * (aspect < 1.1 ? 0.92 : 0.94),
    );
    return { position, target };
  }

  private addFramingTweens(
    timeline: gsap.core.Timeline,
    framing: Framing,
    position: number,
    duration: number,
  ): void {
    timeline.to(
      this.camera.position,
      {
        x: framing.position.x,
        y: framing.position.y,
        z: framing.position.z,
        duration,
        ease: "power3.inOut",
        overwrite: "auto",
      },
      position,
    );
    timeline.to(
      this.cameraTarget,
      {
        x: framing.target.x,
        y: framing.target.y,
        z: framing.target.z,
        duration,
        ease: "power3.inOut",
        overwrite: "auto",
      },
      position,
    );
  }

  private applyFraming(framing: Framing, duration: number): void {
    if (duration <= 0 || this.reducedMotion) {
      this.camera.position.copy(framing.position);
      this.cameraTarget.copy(framing.target);
      return;
    }

    gsap.to(this.camera.position, {
      x: framing.position.x,
      y: framing.position.y,
      z: framing.position.z,
      duration,
      ease: "power3.inOut",
      overwrite: "auto",
    });
    gsap.to(this.cameraTarget, {
      x: framing.target.x,
      y: framing.target.y,
      z: framing.target.z,
      duration,
      ease: "power3.inOut",
      overwrite: "auto",
    });
  }

  private tweenLightsTo(
    keyIntensity: number,
    rimIntensity: number,
    duration: number,
  ): void {
    const reduced = this.reducedMotion;
    const effectiveDuration = reduced ? Math.min(duration, 0.3) : duration;

    for (const rig of Object.values(this.statues)) {
      if (!rig) continue;
      gsap.to(rig.keyLight, {
        intensity: keyIntensity,
        duration: effectiveDuration,
        ease: "power2.inOut",
        overwrite: "auto",
      });
      gsap.to(rig.rimLight, {
        intensity: rimIntensity,
        duration: effectiveDuration,
        ease: "power2.inOut",
        overwrite: "auto",
      });
      gsap.to(rig.accentSpot, {
        intensity: 0,
        duration: effectiveDuration,
        ease: "power2.inOut",
        overwrite: "auto",
      });
      gsap.to(rig.accentSpot.position, {
        x: STATUES[rig.prediction].x + 0.48,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(rig.accentSpot.target.position, {
        x: STATUES[rig.prediction].x,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
    }
  }

  private killStateTimeline(): void {
    this.stateTimeline?.kill();
    this.stateTimeline = null;
  }

  private tweenDustColor(color: number, duration: number): void {
    if (!this.dust) return;
    const material = this.dust.material as THREE.PointsMaterial;
    gsap.to(material.color, {
      r: ((color >> 16) & 0xff) / 255,
      g: ((color >> 8) & 0xff) / 255,
      b: (color & 0xff) / 255,
      duration: this.reducedMotion ? Math.min(duration, 0.25) : duration,
      ease: "power2.inOut",
      overwrite: "auto",
    });
  }

  private resetRecession(duration: number, restorePositionsNow = false): void {
    const effectiveDuration = this.reducedMotion ? Math.min(duration, 0.25) : duration;
    for (const rig of Object.values(this.statues)) {
      if (!rig) continue;
      if (restorePositionsNow) {
        gsap.killTweensOf(rig.group.position);
        gsap.killTweensOf(rig.group.scale);
        rig.group.position.x = STATUES[rig.prediction].x;
        rig.group.scale.setScalar(1);
      }
      gsap.to(rig.keyLight.color, {
        r: 1, g: 0.945, b: 0.863,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(rig.rimLight.color, {
        r: 0.863, g: 0.906, b: 0.949,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(rig.group.position, {
        x: STATUES[rig.prediction].x,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
      gsap.to(rig.group.scale, {
        x: 1, y: 1, z: 1,
        duration: effectiveDuration,
        ease: "power2.out",
        overwrite: "auto",
      });
      rig.group.traverse((child) => {
        if (!(child instanceof THREE.Mesh)) return;
        const materials = Array.isArray(child.material) ? child.material : [child.material];
        for (const material of materials) {
          if (!("opacity" in material)) continue;
          const opacityMaterial = material as THREE.Material;
          const defaults = this.materialDefaults.get(opacityMaterial) ?? {
            opacity: 1,
            transparent: false,
          };
          opacityMaterial.transparent = true;
          gsap.to(opacityMaterial, {
            opacity: defaults.opacity,
            duration: effectiveDuration,
            ease: "power2.out",
            overwrite: "auto",
            onComplete: () => { opacityMaterial.transparent = defaults.transparent; },
          });
        }
      });
    }
  }

  private createRadialTexture(
    inner: string,
    outer: string,
  ): THREE.CanvasTexture {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const context = canvas.getContext("2d");
    if (context) {
      const gradient = context.createRadialGradient(
        size / 2,
        size / 2,
        0,
        size / 2,
        size / 2,
        size / 2,
      );
      gradient.addColorStop(0, inner);
      gradient.addColorStop(0.42, inner);
      gradient.addColorStop(1, outer);
      context.fillStyle = gradient;
      context.fillRect(0, 0, size, size);
    }
    const texture = new THREE.CanvasTexture(canvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    return texture;
  }

  private startLoop(): void {
    if (this.running || this.disposed) return;
    this.running = true;
    this.clock.start();
    this.animationFrame = requestAnimationFrame(this.animate);
  }

  private stopLoop(): void {
    this.running = false;
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }

  private animate = (): void => {
    if (!this.running || this.disposed) return;
    const delta = this.clock.getDelta();
    const elapsed = this.clock.elapsedTime;

    if (this.dust && this.dustBase && !this.reducedMotion) {
      const positionAttribute = this.dust.geometry.getAttribute(
        "position",
      ) as THREE.BufferAttribute;
      const array = positionAttribute.array as Float32Array;
      for (let index = 0; index < array.length / 3; index += 1) {
        const baseX = this.dustBase[index * 3];
        const baseY = this.dustBase[index * 3 + 1];
        const baseZ = this.dustBase[index * 3 + 2];
        array[index * 3] = baseX + Math.sin(elapsed * 0.12 + index) * 0.012;
        array[index * 3 + 1] =
          baseY + ((elapsed * 0.012 + index * 0.13) % 0.18);
        array[index * 3 + 2] =
          baseZ + Math.cos(elapsed * 0.09 + index * 0.7) * 0.008;
      }
      positionAttribute.needsUpdate = true;
    }

    if (!this.reducedMotion) {
      // Smooth parallax interpolation
      const lerpFactor = 1 - Math.pow(0.08, delta);
      this.parallaxX += (this.targetParallaxX - this.parallaxX) * lerpFactor;
      this.parallaxY += (this.targetParallaxY - this.parallaxY) * lerpFactor;

      // Idle breathing animation + parallax for each statue group
      for (const rig of Object.values(this.statues)) {
        if (!rig || !rig.loaded) continue;
        // Breathing: subtle vertical bob at ~0.4 Hz
        const breathOffset = Math.sin(elapsed * 2.513) * 0.004;
        // Store original base Y (at scene add time it's 0)
        const baseY = 0;
        // Apply parallax rotation
        // The model keeps its authored gallery angle; only its parent rig moves.
        rig.group.rotation.y = this.parallaxX;
        rig.group.rotation.x = this.parallaxY * 0.5;
        // Vertical breathing
        rig.group.position.y = baseY + breathOffset;
      }
    }

    this.camera.lookAt(this.cameraTarget);
    this.renderer.render(this.scene, this.camera);
    this.animationFrame = requestAnimationFrame(this.animate);
  };

  private handleMotionPreference = (event: MediaQueryListEvent): void => {
    this.reducedMotion = event.matches;
  };

  private handleVisibilityChange = (): void => {
    if (document.hidden) {
      this.stopLoop();
    } else {
      this.startLoop();
    }
  };

  private handleContextLost = (event: Event): void => {
    event.preventDefault();
    this.stopLoop();
    this.callbacks.onContextLost();
  };
}
