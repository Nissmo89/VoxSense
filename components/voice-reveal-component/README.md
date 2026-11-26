# voice-reveal-component

Cinematic 3D voice-reveal gallery component for Streamlit

## Installation instructions

```sh
uv pip install voice-reveal-component
```

## Local development

Build the frontend before the first run. Streamlit loads the files in `voice_reveal_component/frontend/build`, and each `js=` / `css=` glob must match exactly one file there.

From `voice_reveal_component/frontend`:

```sh
npm install
npm run build
```

From the project root:

```sh
uv pip install -e . --force-reinstall
streamlit run example.py
```

While editing the frontend, run `npm run dev` in `voice_reveal_component/frontend`. That runs Vite in watch mode. If a glob matches more than one file, run `npm run clean` and build again.

## Usage instructions

```python
import streamlit as st

from voice_reveal_component import voice_reveal_component

value = voice_reveal_component()

st.write(value)
```

## Build a wheel

To package this component for distribution:

1. Build the frontend with Vite (from `voice_reveal_component/frontend`):

   ```sh
   npm install
   npm run build
   ```

2. Build the Python wheel using UV (from the project root):
   ```sh
   uv build
   ```

This will create a `dist/` directory containing your wheel. The wheel includes the compiled frontend from `voice_reveal_component/frontend/build`.

### Requirements

- Python >= 3.10
- Node.js >= 24 (LTS)

### Expected output

- `dist/voice_reveal_component-0.0.1-py3-none-any.whl`
- If you run `uv run --with build python -m build` (without `--wheel`), you’ll also get an sdist: `dist/voice-reveal-component-0.0.1.tar.gz`
