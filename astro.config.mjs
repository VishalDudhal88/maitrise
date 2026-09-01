// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Live site (maitrise.in, WordPress) uses trailing-slash URLs. We mirror that
// exactly for 1:1 URL parity, emitting directory-style output.
export default defineConfig({
  site: 'https://maitrise.in',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [sitemap({ changefreq: 'monthly', priority: 0.7 })],
  vite: { plugins: [tailwindcss()] },
});
