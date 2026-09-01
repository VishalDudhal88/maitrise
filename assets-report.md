# Assets Report — maitrise.in → Astro

All media referenced by the real pages was downloaded from the live site and is
served locally (no hotlinking to `/wp-content/`).

## Migrated media
| Group | Count | Source (live) | Location (repo) |
|---|--:|---|---|
| Project gallery images | 54 | `/wp-content/uploads/**` (9 per project × 6) | `src/assets/projects/<slug>/NN.jpg` |
| Home images (hero, about, categories) | 13 | `/wp-content/uploads/**` | `src/assets/home/NN.*` |
| Logo | 1 | `Maitrise-Associates-logo-2…png` | `src/assets/brand/logo.png` |
| Favicon | 1 | *new* (MA monogram) | `public/favicon.svg` |
| OG image | 1 | derived from a home interior | `public/og-default.jpg` |

## Optimisation
- Full-resolution originals were fetched where available (stripping WordPress'
  `-WxH` size suffix, with fallback to the sized version).
- Every `src/assets` image is processed at build by **astro:assets + sharp** →
  **WebP** with responsive `srcset` widths.
- **200 optimised image files** generated in `dist/_astro/`.
- Gallery/hero images lazy-load; the home hero and header logo load eagerly.
- Empty live alt text → descriptive alt generated per image.

## Sizes
- Source assets: **14 MB** (full-resolution interior photography)
- Built site (`dist/`, incl. all responsive variants): **13 MB**

## Not migrated (intentional)
- Elementor/theme CSS & JS (replaced by Tailwind + minimal vanilla JS).
- A few tiny decorative stock PNG/WebP used in the live "services" strip
  (`unnamed*.png`, a stock hat/plant `.webp`) — replaced with the client's own
  project photography for a stronger, on-brand presentation.
