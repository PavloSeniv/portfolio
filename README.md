# Portfolio

Personal portfolio website built on a modern **Gulp 5** front‑end pipeline
(SCSS → CSS, ES modules bundled with webpack, automatic WOFF2 fonts, image
optimization, WebP generation and a live‑reload dev server).

## Demo

https://pavloseniv.github.io/portfolio/portfolio/index.html

## Screenshots

![App Screenshot](https://github.com/user-attachments/assets/67b79b12-1f25-4496-9617-8fcd5ef0203e)

## Tech stack

- **Gulp 5** (ESM gulpfile, gulp-cli 3)
- **Dart Sass** via `gulp-sass` — SCSS compiled, grouped media queries, autoprefixed & minified
- **webpack 5** (`webpack-stream`) — JavaScript bundling & minification
- **BrowserSync 3** — local dev server with live reload
- Fonts: **TTF → WOFF2** (`gulp-ttf2woff2`) with auto‑generated `@font-face`
- Images: `gulp-imagemin` (JPEG/PNG/GIF/SVG) + `gulp-webp` (WebP generation)
- HTML: `gulp-file-include` partials + cache‑busting version numbers on build

## Requirements

- **Node.js >= 20.19** (required by Gulp 5 / gulp-cli 3)
- npm

## Run locally

Clone the project:

```bash
git clone https://github.com/PavloSeniv/portfolio.git
cd portfolio
```

Install dependencies:

```bash
npm install
```

Start the dev server (watch + live reload at http://localhost:3000):

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

## Available scripts

| Script              | Description                                                        |
| ------------------- | ------------------------------------------------------------------ |
| `npm run dev`       | Build once, then watch files and serve with BrowserSync live reload |
| `npm run build`     | Production build (minify CSS/JS, optimize images, WebP, cache‑bust) |
| `npm run zip`       | Production build, then package the output folder into a `.zip`      |
| `npm run ftp`       | Production build, then deploy over FTP (configure `gulp/config/ftp.js`) |
| `npm run svgSprite` | Generate an SVG sprite from `src/assets/icons/*.svg`                |

## Project structure

```
src/                  # Source files
  index.html          # Pages (built with gulp-file-include partials)
  html/               # Reusable HTML partials
  scss/               # Styles (SCSS)
  assets/
    js/               # JavaScript (webpack entry: app.js)
    fonts/            # Source .ttf fonts (converted to .woff2 on build)
    images/, icons/   # Images & icons
    files/            # Static files (pdf, media)
gulp/                 # Build pipeline
  config/             # path.js, plugins.js, ftp.js
  tasks/              # Individual gulp tasks
gulpfile.js           # ESM entry point
portfolio/            # Build output (served by GitHub Pages)
```

## Notes

- The gulpfile is an **ES module** (`"type": "module"`); Gulp 5 / gulp-cli 3 loads it natively.
- On Gulp 5 all binary assets (fonts, images, PDFs) are read with `{ encoding: false }`
  so they are never corrupted by text encoding — this is required after the Gulp 4 → 5 upgrade.
- FTP credentials in `gulp/config/ftp.js` are git‑ignored.

## Author

- [@PavloSeniv](https://github.com/PavloSeniv)
