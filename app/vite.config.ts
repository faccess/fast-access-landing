import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { inspectAttr } from 'kimi-plugin-inspect-react'


// Load the main stylesheet asynchronously so first paint (hero/LCP) isn't
// gated on it; the inline critical CSS in index.html covers the gap.
function asyncCss() {
  return {
    name: 'async-css',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        return html.replace(
          /<link rel="stylesheet"([^>]*?)href="([^"]+\.css)"([^>]*?)>/g,
          (_m: string, pre: string, href: string, post: string) =>
            `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'"${pre}${post}><noscript><link rel="stylesheet" href="${href}"></noscript>`
        );
      },
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [inspectAttr(), react(), asyncCss()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
