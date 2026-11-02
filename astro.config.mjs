// @ts-check
import { defineConfig, envField } from 'astro/config';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { noindexPaths } from './src/data/seo.ts';

const SITE = 'https://anfrage.blaschke.cloud';

export default defineConfig({
  site: SITE,
  // Live-URLs haben keinen abschließenden Slash (z. B. /kanzlei-it-check).
  // Der Vercel-Adapter setzt build.format auf "directory" und leitet /pfad/ → /pfad um.
  trailingSlash: 'never',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    react(),
    sitemap({
      // Dankeseiten (noindex) gehören nicht in die Sitemap.
      filter: (page) => !noindexPaths.some((p) => page.replace(SITE, '').replace(/\/$/, '') === p),
    }),
  ],
  redirects: {
    // Startseite gab es auf Onepage nicht (404) – Einstieg über /service.
    '/': '/service',
  },
  env: {
    schema: {
      // Nur als Umgebungsvariable in Vercel (Production + Preview) – nie im Repo.
      RESEND_API_KEY: envField.string({ context: 'server', access: 'secret', optional: true }),
    },
  },
  image: {
    // Bilder werden beim Build mit Sharp optimiert (WebP, mehrere Größen).
    responsiveStyles: false,
  },
});
