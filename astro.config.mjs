// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import 'dotenv/config';

// https://astro.build/config
export default defineConfig({
  vite: {
    // @ts-expect-error - Vite plugin type mismatch between Astro and Tailwind
    plugins: [tailwindcss()],
    server: {
      host: true,
      watch: {
        usePolling: true,
        interval: 1000,
      },
      allowedHosts: [process.env.SERVER_HOST || ''],
    },
  },

  integrations: [react()],
  cacheDir: './node_modules/.assets',
  build: {
    assets: '_assets',
  },
});
