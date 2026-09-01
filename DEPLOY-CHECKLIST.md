# Deploy Checklist — KnownHost (static)

Builds to plain static files in `dist/` — no runtime needed.

## Build
```bash
cd maitrise
npm install
npm run build      # outputs to dist/
```
- [x] `npm run build` passes — **12 pages** (11 real URLs + 404).
- [x] Images optimised to WebP (`dist/_astro/`, 200 files).
- [x] `sitemap-index.xml` + `sitemap-0.xml` generated.
- [x] `robots.txt`, `.htaccess`, `favicon.svg` in output.

## Upload
- [ ] Upload the **contents of `dist/`** to the web root (`public_html/`).
- [ ] Ensure `.htaccess` is uploaded (hidden file) — carries WP-endpoint + demo 301s.
- [ ] Force HTTPS; confirm apex/`www` matches the current canonical (`https://maitrise.in/`).

## Verify after deploy
- [ ] Every live URL resolves at the same path (see `url-parity-report.md`):
      `/`, `/projects/`, `/residential-flat/`, `/residential-flat/dreamscape/`,
      `/commercial-space/`, `/commercial-space/elegant-workspace/`, `/contact/`, etc.
- [ ] Trailing slashes behave (`/contact` → `/contact/`).
- [ ] Old WordPress links 301: `/?p=1`, `/wp-admin/`, `/sample-page/`, `/hello-world/`.
- [ ] `https://maitrise.in/sitemap-index.xml` loads (11 URLs); `robots.txt` points to it.
- [ ] Project galleries + lightbox work; images crisp on retina.
- [ ] Mobile: hamburger nav, hero, stacked sections, tap targets.
- [ ] Lighthouse: Performance / SEO / Best-Practices / Accessibility strong.

## Post-launch (client sign-off — see migration-report.md)
- [ ] Confirm final projects list & category-page contents.
- [ ] Supply real photos for the **Shendge** project (currently mirrors Modern Warmth).
- [ ] Wire the contact form to a real email endpoint (`TODO` in `src/pages/contact/index.astro`).
- [ ] Add social profile links in `src/config/site.ts` if any.
- [ ] Submit the sitemap in Google Search Console.
