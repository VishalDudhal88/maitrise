# Migration Report — maitrise.in → Astro

## What this is
The live site is WordPress + Elementor for **Maitrise Associates**, an interior
designing & consulting firm (Sangli, Maharashtra). It is a small, mostly complete
portfolio site that is **partly mid-build** — a few pages are empty stubs and the
Projects page links to pages that were never created. Content is reproduced
near-verbatim; deviations are listed below.

## ✅ Kept & rebuilt (11 real pages)
- Home, Projects, Residential Flat, Commercial Space, Contact
- 6 project detail pages (galleries + brief + role + specs), verbatim:
  Dreamscape, Modern Warmth, Urban Comfort, Shendge (residential);
  Elegant Workspace, Contemporary Workspace (commercial)

All headings, briefs, role lists, project specs (type / carpet area / location),
testimonials, the About/Company-Experience copy, and every gallery image are
reproduced faithfully. See `url-map.json`.

## 🗑️ Removed as default WordPress demo junk
- `/sample-page/` — the default WordPress "Sample Page" (lorem). 301 → home.
- `/hello-world/` — the default first post. 301 → home.

## ⚙️ Faithful-reproduction notes / fixes (need client sign-off)
1. **Projects page had broken links.** The live `/projects/` grid showed 5 cards
   (Sanket Kothari, Webster Solutions, Ullas Nalawade, Suraj Salavi, Sandeep
   Chavan). Three linked to pages that **return 404** on the live site
   (`/commercial-space/sanket-kothari/`, `/commercial-space/webster-solutions/`,
   `/residential-flat/ullas-nalawade/`) and two had no link at all. Because those
   target pages don't exist and the names don't match any published page, the
   rebuilt Projects page instead shows the **6 real, published project pages**
   (which have full galleries and are in the site's own nav). → **Confirm the final
   project list / whether the 5 client-named projects should become real pages.**
2. **Empty category pages.** Live `/residential-flat/` and `/commercial-space/`
   were empty stubs (just a title). The rebuild lists their child projects
   (4 residential, 2 commercial) — a working category page. → Confirm.
3. **`shendge` reused `modern-warmth` images.** On the live site the Shendge
   project gallery serves the same photos as Modern Warmth (likely a placeholder
   pending Shendge's own photos). Reproduced as-is. → Supply Shendge's real photos.
4. **Contact form.** Live used MetForm (fields: name, email, optional message)
   with an empty "No content is added yet." block (dropped as placeholder). The
   rebuilt form has client-side validation + a `mailto:` fallback. → Wire to a real
   endpoint (see the `TODO` in `src/pages/contact/index.astro`).
5. **Empty image alt text.** All gallery/hero images had empty alt on the live
   site; descriptive alt is generated for accessibility/SEO.
6. **Nav "About" / "Services"** are in-page anchors on the home page
   (`/#about`, `/#services`), matching the live menu.

## 📝 Needs client sign-off (summary)
- Final projects list (item 1) and category-page contents (item 2).
- Shendge real photos (item 3).
- Contact form email endpoint (item 4).
- Social profile links (none on the live site — `site.socials` is empty).
