import io
import subprocess
import opensmile
import soundfile as sf

smile = opensmile.Smile(
    feature_set=opensmile.FeatureSet.eGeMAPSv02,
    feature_level=opensmile.FeatureLevel.Functionals
)


def convert_wav(audio):
    wav = subprocess.run(
        ["ffmpeg", "-hide_banner", "-loglevel", "error", "-i", "pipe:0",
         "-ar", "16000", "-ac", "1", "-f", "wav", "pipe:1"],
        input=audio, capture_output=True
    ).stdout
    signal, sr = sf.read(io.BytesIO(wav), dtype="float32")
    features = smile.process_signal(signal, sr)
    return features.iloc[0].to_numpy(dtype=float)
