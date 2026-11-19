import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://site-sueli-v2.vercel.app',
  integrations: [sitemap()],
  build: { inlineStylesheets: 'auto' },
});
