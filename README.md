# Build with Pijush

Static portfolio for **Pijush Mahato (PJ)** — custom SaaS, apps, websites and AI integrations.

No build step. Open `index.html` or host the folder as a static site.

## Preview locally

From this directory:

```bash
# Option A — just open the file
#   /workspace/build-with-pijush/index.html
#   or double-click index.html

# Option B — any static server (cleaner paths, recommended)
python3 -m http.server 4173
```

Then visit `http://127.0.0.1:4173/`.

## Deploy on GitHub Pages

1. Create a repository (for example `build-with-pijush`) and put these files at the **repository root** — `index.html` must sit at `/`.
2. On GitHub: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**. Branch: `main` (or `master`). Folder: `/ (root)`.
4. Save. The site will be served at `https://<user>.github.io/<repo>/`.
5. After the first live URL exists, replace the empty `<link rel="canonical">` in `index.html` and make the Open Graph / Twitter image paths absolute, e.g. `https://<user>.github.io/<repo>/assets/og.png`.

A project-site `404.html` is included so unknown paths stay on-brand.

Custom domain (optional): add a `CNAME` file at the repo root with the hostname, then point DNS as GitHub documents.

## Files

```
index.html          # page
404.html            # GitHub Pages fallback
css/styles.css
js/main.js
assets/favicon.svg
assets/mark.svg
assets/og.png
assets/apple-touch-icon.png
README.md
```

Fonts load from Google Fonts (Fraunces, Outfit, IBM Plex Mono). If the network is blocked, system serif/sans fallbacks still read cleanly.

Primary contact: [buildwithpijush@gmail.com](mailto:buildwithpijush@gmail.com).
