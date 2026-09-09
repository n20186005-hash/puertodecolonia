import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO lugar para configurar el dominio público.
const site = 'https://puertodecolonia.com';

export default defineConfig({
  ...(site ? { site } : {}),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
