import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig, type Plugin } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'
import { indexMeta, homeJsonLd } from './src/content/seo'


// Load the main stylesheet asynchronously so first paint (hero/LCP) isn't
// gated on it; the inline critical CSS in index.html covers the gap.

/** Fills index.html's __FA_*__ tokens from src/content/claims.ts (via seo.ts). */
function claimsHtml(): Plugin {
  const attr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;');
  return {
    name: 'claims-html',
    transformIndexHtml(html) {
      return html
        .replace('__FA_DESC__', attr(indexMeta.description))
        .replace('__FA_OG_DESC__', attr(indexMeta.ogDescription))
        .replace('__FA_JSONLD__', homeJsonLd().replace(/</g, '\\u003c'));
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react(), claimsHtml()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
