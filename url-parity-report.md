# URL Parity Report — maitrise.in → Astro rebuild

**Goal:** every real, indexable URL on the live WordPress site exists at the
**identical path** (same slug, same trailing slash) in the new Astro site.

- **Source of truth:** live `wp-sitemap.xml` + `/wp-json/wp/v2/` + crawled HTML (Elementor).
- **Trailing slashes:** live uses trailing slashes → Astro `trailingSlash: 'always'`
  + `build.format: 'directory'` → exact path match.
- **Result:** **11 / 11 real URLs match 1:1.** ✅

## Pages (11/11)

| Live URL | New path | Match |
|---|---|:--:|
| `/` | `/` | ✅ |
| `/projects/` | `/projects/` | ✅ |
| `/residential-flat/` | `/residential-flat/` | ✅ |
| `/residential-flat/dreamscape/` | `/residential-flat/dreamscape/` | ✅ |
| `/residential-flat/modern-warmth/` | `/residential-flat/modern-warmth/` | ✅ |
| `/residential-flat/urban-comfort/` | `/residential-flat/urban-comfort/` | ✅ |
| `/residential-flat/shendge/` | `/residential-flat/shendge/` | ✅ |
| `/commercial-space/` | `/commercial-space/` | ✅ |
| `/commercial-space/elegant-workspace/` | `/commercial-space/elegant-workspace/` | ✅ |
| `/commercial-space/contemporary-workspace/` | `/commercial-space/contemporary-workspace/` | ✅ |
| `/contact/` | `/contact/` | ✅ |

Plus a styled `404` page (not indexed, not in sitemap).

## Redirects added (WordPress-specific + demo only)

`public/.htaccess` adds 301s **only** for:
- WP query permalinks (`/?p=`, `/?page_id=`, `/?cat=`, `/?feed=`) → `/`
- WP system paths (`/wp-admin`, `/wp-login.php`, `/wp-includes`, `/xmlrpc.php`, `/wp-json`, `/feed/`) → `/`
- Removed default demo pages `/sample-page/` and `/hello-world/` → `/`

## Not carried over (dead links on the live site — see migration-report.md)

The live `/projects/` page contained cards linking to pages that **do not exist**
(return 404 live): `/commercial-space/sanket-kothari/`,
`/commercial-space/webster-solutions/`, `/residential-flat/ullas-nalawade/`. These
were never real URLs, so there is nothing to preserve; the rebuilt Projects page
links to the 6 real, published project pages instead.

## SEO

- `<title>` preserved per page (`<Page> – Maitrise`; home is `Maitrise`).
- Canonical URLs point at the same absolute paths.
- Live site had **no** meta descriptions; the rebuild adds concise, factual ones
  (improvement, not a regression).
- `sitemap-index.xml` regenerated; `robots.txt` references it.
- JSON-LD `LocalBusiness` / `ProfessionalService` with founders, contact, area served.
