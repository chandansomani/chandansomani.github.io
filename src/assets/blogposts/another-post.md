
(You can use frontmatter parsers if you prefer reading frontmatter from the `.md` directly — but for a simple static solution a `posts.json` index is easiest.)

---

# 5) Notes, options & trade-offs

- **Why `posts.json`?** Static hosts (GitHub Pages, Netlify) do not allow directory listing via `fetch`. A static `posts.json` is reliable for listing posts. If you control a server you could expose an API listing posts dynamically instead.
- **SEO / pre-rendering:** Client-side rendering works fine but for best SEO and speed you may pre-render `.md` to HTML during build (e.g., use a Node script with `remark` to produce HTML files at build time). If you prefer a fully static site generator approach, use Astro/Next/11ty/etc.
- **Syntax highlight/style:** I included `rehype-highlight` and import of `highlight.js` CSS. You can change highlight styles or use Prism instead.
- **Security:** `rehype-raw` allows raw HTML in `.md` — only use if you trust the markdown source. Otherwise remove `rehype-raw`.
- **Repository integration:** Your current repo is static HTML/CSS (no React app). You can:
  - Create a new Vite React app folder and deploy the built files to the repo `gh-pages` branch or as site root.
  - Or, embed the bundle into your existing `index.html` and add a `/blog` route that mounts the React app.

(Repo contents noted earlier: `index.html`, `styles.css`, etc.). :contentReference[oaicite:2]{index=2}

---

# 6) Want me to do one of these next?
Pick one and I’ll produce exact files you can copy:

- A. Create the minimal Vite + React + TS app structure and the two components above (I’ll provide the exact files and `package.json`).
- B. Provide a build-time script (Node) that converts `/posts/*.md` into static `/blog/<slug>.html` pages for perfect SEO (no React client-side).
- C. Show how to add a new `posts.json` automatically at build time by scanning a `/posts-src` folder.

Tell me which option you want and I’ll give exact files & commands (or I can just paste the full component files + `package.json` now).
::contentReference[oaicite:3]{index=3}
