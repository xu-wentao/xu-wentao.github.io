# xuwentao.github.io

Personal homepage for **xuwentao** — a Cloud Native / AI Infrastructure engineer focused on Kubernetes, GPU/NPU cluster platforms, observability, scheduling, and cost-aware AI agent tooling.

## Design direction

- Full-viewport product-style hero
- Cloud Native / AI Infrastructure positioning
- React + Vite implementation
- Lightweight motion: typewriter heading, count-up metric, orbit visualization, animated gradient buttons, and technology ticker
- Static deployment through GitHub Pages

## Tech stack

- React
- Vite
- Inter and Urbanist from Google Fonts
- Pure CSS animations
- GitHub Actions deployment to GitHub Pages

## Structure

```text
index.html                 # Vite HTML entry
src/main.jsx               # React bootstrap
src/App.jsx                # Page components and animation hooks
src/styles.css             # Visual system, motion, and responsive layout
vite.config.js             # Vite config
.github/workflows/deploy.yml # GitHub Pages build/deploy workflow
.nojekyll                  # disable Jekyll processing
```

## Local preview

```bash
npm install
npm run dev
```

Then open the local Vite URL printed in the terminal.

## Build

```bash
npm run build
```

## Live site

```text
https://xu-wentao.github.io
```
