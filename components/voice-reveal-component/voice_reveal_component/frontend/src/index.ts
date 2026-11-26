import type {
  FrontendRenderer,
  FrontendRendererArgs,
} from "@streamlit/component-v2-lib";

import "@fontsource/cormorant-garamond/latin-400.css";
import "@fontsource/cormorant-garamond/latin-500.css";
import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "./styles.css";

import { VoiceRevealApp } from "./app";
import type { ComponentData } from "./types";

type ParentElement = FrontendRendererArgs["parentElement"];

// Streamlit calls the renderer again whenever Python sends new data. Keep the
// long-lived Three.js/GSAP/audio instance per mounted component so a rerun never
// recreates the scene.
const instances = new WeakMap<ParentElement, VoiceRevealApp>();

const VoiceRevealComponent: FrontendRenderer<
  Record<string, unknown>,
  ComponentData
> = (args) => {
  const { parentElement, data, setTriggerValue } = args;

  const root = parentElement.querySelector<HTMLElement>(".voice-reveal-root");
  if (!root) {
    throw new Error("Unexpected: voice reveal root element not found");
  }

  const existing = instances.get(parentElement);
  if (existing) {
    existing.update(data);
  } else {
    const app = new VoiceRevealApp({
      root,
      data,
      setTriggerValue: (name, value) => setTriggerValue(name, value),
    });
    instances.set(parentElement, app);
  }

  return () => {
    const app = instances.get(parentElement);
    if (!app) return;
    app.dispose();
    instances.delete(parentElement);
  };
};

export default VoiceRevealComponent;
