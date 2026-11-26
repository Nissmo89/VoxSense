import io
import subprocess
import opensmile
import soundfile as sf

smile = opensmile.Smile(
    feature_set=opensmile.FeatureSet.eGeMAPSv02,
    feature_level=opensmile.FeatureLevel.Functionals
)


def convert_wav(audio):
    """Convert raw audio bytes to eGeMAPS feature vector via ffmpeg + openSMILE."""
    result = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", "pipe:0",
         "-ar", "16000", "-ac", "1", "-f", "wav", "pipe:1"],
        input=audio, capture_output=True
    )

    if result.returncode != 0 or not result.stdout:
        stderr = result.stderr.decode(errors="replace") if result.stderr else "no output"
        raise RuntimeError(
            f"ffmpeg failed (exit {result.returncode}): {stderr[:300]}"
        )

    wav = result.stdout
    signal, sr = sf.read(io.BytesIO(wav), dtype="float32")

    if signal.size == 0:
        raise ValueError("ffmpeg produced an empty audio stream — clip may be corrupt or silent.")

    features = smile.process_signal(signal, sr)
    return features.iloc[0].to_numpy(dtype=float)
