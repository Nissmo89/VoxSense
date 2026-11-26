export const STATE_VERSION = 1;

export const ALLOWED_STATUSES = [
  "idle",
  "listening",
  "processing",
  "reveal",
  "uncertain",
  "error",
] as const;

export type VoiceStatus = (typeof ALLOWED_STATUSES)[number];

/** The exact class values produced by the project's LogisticRegression model. */
export type Prediction = "M" | "F";

export type VoiceSource = "microphone" | "upload";

export interface VoiceState {
  version: number;
  event_id: string;
  started_at: number;
  status: VoiceStatus;
  prediction: Prediction | null;
  prediction_label: string | null;
  confidence: number | null;
  message: string | null;
  source: VoiceSource | null;
}

export interface ComponentData {
  state?: unknown;
}

export interface RecordingCompletePayload {
  event_id: string;
  started_at: number;
  audio_base64: string;
  mime_type: string;
  duration_ms: number;
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isFiniteNumber = (value: unknown): value is number =>
  typeof value === "number" && Number.isFinite(value);

const cleanString = (value: unknown, max = 600): string | null => {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.slice(0, max);
};

/**
 * Validate a state payload before it is allowed to influence the scene.
 * Unknown or malformed payloads are rejected rather than guessed at.
 */
export function parseVoiceState(raw: unknown): VoiceState | null {
  if (!isRecord(raw)) return null;

  const version = raw.version;
  if (version !== STATE_VERSION) return null;

  const eventId = cleanString(raw.event_id, 128);
  if (!eventId) return null;

  const startedAt = raw.started_at;
  if (!isFiniteNumber(startedAt) || startedAt < 0) return null;

  const status = raw.status;
  if (
    typeof status !== "string" ||
    !ALLOWED_STATUSES.includes(status as VoiceStatus)
  ) {
    return null;
  }

  let prediction: Prediction | null = null;
  if (raw.prediction === "M" || raw.prediction === "F") {
    prediction = raw.prediction;
  } else if (raw.prediction !== null && raw.prediction !== undefined) {
    // An unknown class is not allowed to illuminate a statue.
    prediction = null;
  }

  let confidence: number | null = null;
  if (isFiniteNumber(raw.confidence) && raw.confidence >= 0 && raw.confidence <= 1) {
    confidence = raw.confidence;
  }

  let source: VoiceSource | null = null;
  if (raw.source === "microphone" || raw.source === "upload") {
    source = raw.source;
  }

  const parsed: VoiceState = {
    version: STATE_VERSION,
    event_id: eventId,
    started_at: startedAt,
    status: status as VoiceStatus,
    prediction,
    prediction_label: cleanString(raw.prediction_label, 80),
    confidence,
    message: cleanString(raw.message, 600),
    source,
  };

  if (parsed.status === "reveal" && parsed.prediction === null) {
    parsed.status = "uncertain";
    parsed.prediction_label = null;
    parsed.confidence = null;
    parsed.message =
      parsed.message ??
      "The model returned an output that could not be interpreted. Try another recording.";
  }

  if (parsed.status !== "reveal") {
    parsed.prediction = null;
    parsed.prediction_label = null;
    parsed.confidence = null;
  }

  return parsed;
}

export function labelForPrediction(prediction: Prediction): string {
  return prediction === "M" ? "Male" : "Female";
}

export function idleState(): VoiceState {
  return {
    version: STATE_VERSION,
    event_id: "initial",
    started_at: 0,
    status: "idle",
    prediction: null,
    prediction_label: null,
    confidence: null,
    message: null,
    source: null,
  };
}
