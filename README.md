Bridget Fitzgibbons for AZ State Senate (LD9)

Static multi-page React site built with Vite. Each tab is an independent HTML page for SEO and HostGator compatibility.

Develop

- Install: `npm ci`
- Run dev server: `npm run dev` (Home at `/src/pages/home/index.html`)
- Build: `npm run build`

Deploy (GitHub Actions → FTP)

Set repository secrets:
- `FTP_SERVER` (e.g., 50.6.109.179)
- `FTP_USERNAME` (e.g., info@bridgetfitzgibbons.com)
- `FTP_PASSWORD`
- `FTP_PORT` (e.g., 21)

On push to `main`, the workflow builds and uploads `dist/` to `public_html/`.

Structure

- `public/` assets, `robots.txt`, `sitemap.xml`
- `src/styles/globals.css` shared styles
- `src/components/` shared UI
- `src/pages/<page>/index.html|App.tsx|main.tsx`

Notes

- Fonts: Proxima Nova (system fallbacks if not installed). Provide webfont files if licensing permits.
- Colors: Wonder Woman theme — Red #dc2927, Yellow #f2cf30, Blue #2c328e.

.