/** Vite config for the build-time prerender bundle (Node/SSR target). */
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = join(__dirname, '..');

export default defineConfig({
  root: appRoot,
  plugins: [react()],
  logLevel: 'warn',
  resolve: {
    alias: {
      '@': join(appRoot, 'src'),
      // jsdom has no real scrolling — smooth-scroll lib becomes a no-op
      lenis: join(__dirname, 'prerender-lenis-stub.mjs'),
    },
  },
  ssr: {
    // bundle CJS packages so rollup handles named-export interop everywhere
    noExternal: ['react-helmet-async'],
  },
  build: {
    ssr: join(appRoot, 'src/prerender-entry.tsx'),
    outDir: join(appRoot, 'dist-ssr'),
    emptyOutDir: true,
  },
});
