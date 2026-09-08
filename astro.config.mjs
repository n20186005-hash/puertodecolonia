import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// ÚNICO lugar para configurar el dominio público. Déjalo vacío hasta definirlo.
const site = '';

export default defineConfig({
  ...(site ? { site } : {}),
  integrations: site ? [sitemap()] : [],
  vite: {
    plugins: [tailwindcss()],
  },
});
