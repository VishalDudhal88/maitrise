# Maitrise Associates — Astro rebuild

A fast, static **Astro + TypeScript + Tailwind CSS v4** rebuild of
[maitrise.in](https://maitrise.in/) (Maitrise Associates — interior designing &
consulting firm). Same URLs, same content, **new premium design**. No CMS.

## Commands
```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static output → dist/
npm run preview
```

## Editing (by design: no CMS)
| To change… | Edit |
|---|---|
| Brand colours, fonts | `src/styles/global.css` (`@theme` tokens) |
| Name, contacts, nav, socials | `src/config/site.ts` |
| Projects (copy, specs, galleries) | `src/data/projects.ts` + images in `src/assets/projects/<slug>/` |
| Home / Contact copy | `src/pages/index.astro`, `src/pages/contact/index.astro` |
| Redirects (old WP links) | `public/.htaccess` |

The whole theme is driven from one tokens file — brand colours are never
hardcoded in templates.

## Design
- Palette from the live Elementor globals: taupe `#AD8D78`, cream `#F5F2EF`,
  beige `#E1D8D1`, near-black `#141414`.
- Fonts: **Italiana** (display serif) + **DM Sans** (body).
- **Lenis** smooth scroll, scroll reveals, project **lightbox gallery**, elegant
  hover — all behind `prefers-reduced-motion`, degrading without JS.

## Structure
```
src/
  config/site.ts            # brand, contacts, nav (single source of truth)
  styles/global.css         # tokens + Tailwind + motion
  data/projects.ts          # 6 projects + galleries (astro:assets)
  layouts/Base.astro        # head/SEO, Lenis, reveals, header/footer
  components/               # SEO, Header, Footer, ProjectCard, ProjectDetail, Gallery
  pages/
    index.astro                         # /
    projects/index.astro                # /projects/
    residential-flat/index.astro        # /residential-flat/
    residential-flat/[slug].astro       # /residential-flat/<slug>/
    commercial-space/index.astro        # /commercial-space/
    commercial-space/[slug].astro       # /commercial-space/<slug>/
    contact/index.astro                 # /contact/
    404.astro
  assets/                   # optimised at build (WebP) via astro:assets
public/                     # robots.txt, .htaccess, favicon, og image, logo
```

## Reports
- `url-map.json`, `url-parity-report.md` — 1:1 URL coverage.
- `assets-report.md` — media migrated + optimised.
- `migration-report.md` — removed junk + items needing client sign-off.
- `DEPLOY-CHECKLIST.md` — KnownHost static deploy.

Built by Webster Solutions.
