// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  site: 'https://tkbeautystudio.de',
  output: 'static',
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': path.join(root, 'src'),
        'next/image': path.join(root, 'src/shims/next-image.tsx'),
        'next/link': path.join(root, 'src/shims/next-link.tsx'),
        'next/script': path.join(root, 'src/shims/next-script.tsx'),
        'next/navigation': path.join(root, 'src/shims/next-navigation.ts'),
        'next/dynamic': path.join(root, 'src/shims/next-dynamic.tsx'),
      },
    },
    define: {
      // Build-Zeit Fallback; Produktion setzt window.__PLANITY_API_KEY__ per Runtime
      'process.env.NEXT_PUBLIC_PLANITY_API_KEY': JSON.stringify(
        process.env.PUBLIC_PLANITY_API_KEY ||
          process.env.NEXT_PUBLIC_PLANITY_API_KEY ||
          '',
      ),
      'process.env.NEXT_PUBLIC_SITE_URL': JSON.stringify(
        process.env.PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://tkbeautystudio.de',
      ),
    },
  },
  server: {
    proxy: {
      '/api': 'http://127.0.0.1:3001',
    },
  },
});
