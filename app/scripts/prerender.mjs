/**
 * prerender.mjs — build-time static HTML for the blog (SEO).
 *
 * Runs AFTER `vite build`. Boots the real app inside jsdom for each blog
 * route so the actual React components render and their effects fire
 * (per-page title/meta/OG/canonical via usePageMeta, Article + FAQPage
 * JSON-LD via each article's effect). The resulting document is serialized
 * to dist/blog/<slug>/index.html — Vercel serves these files before the
 * SPA fallback, so crawlers get full HTML; the JS bundle still loads and
 * takes over as the normal SPA for humans.
 *
 * Per-page post-processing:
 *  - the homepage FAQPage node is removed from the shared @graph schema
 *    (it belongs on / only); Organization/LocalBusiness/Service stay.
 *  - sanity checks: canonical, og:url, article schema, non-empty content.
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = join(__dirname, '..');
const distDir = join(appRoot, 'dist');

const ROUTES = [
  // Core pages — '/' overwrites the SPA shell copy in dist with full home HTML
  // (the shell template is read into memory before the loop, so ordering is safe)
  { path: '/', out: 'index.html', mustContain: 'خلّها علينا' },
  { path: '/solutions', mustContain: 'الحلول' },
  { path: '/solutions/storage', mustContain: 'تخزين يتمدد' },
  { path: '/solutions/packing', mustContain: 'يستلم تجربة' },
  { path: '/solutions/shipping', mustContain: 'أفضل طريق' },
  { path: '/solutions/tracking', mustContain: 'وين كل طلب' },
  { path: '/solutions/cloud-stores', mustContain: 'جوّا المدينة' },
  { path: '/solutions/support', mustContain: 'يشوف المشكلة' },
  { path: '/solutions/freight', mustContain: 'مصنع موردك' },
  { path: '/pricing', mustContain: 'السعر' },
  { path: '/about', mustContain: 'فاست أكسس' },
  { path: '/faq', mustContain: 'الأسئلة' },
  { path: '/contact', mustContain: 'تواصل' },
  { path: '/privacy', mustContain: 'الخصوصية' },
  { path: '/terms', mustContain: 'الشروط' },
  { path: '/blog', out: 'blog/index.html', mustContain: 'المدونة' },
  { path: '/blog/what-is-fulfillment', mustContain: 'الدليل الشامل' },
  { path: '/blog/how-to-choose-fulfillment-company', mustContain: 'معيار' },
  { path: '/blog/fulfillment-cost-calculation', mustContain: 'تكلفة' },
  { path: '/blog/returns-management-ecommerce', mustContain: 'المرتجعات' },
  { path: '/blog/dark-store-same-day-delivery', mustContain: 'الدارك ستور' },
  { path: '/blog/cash-on-delivery-guide', mustContain: 'الدفع عند الاستلام' },
  { path: '/blog/3pl-vs-4pl-difference', mustContain: '3PL' },
  { path: '/blog/peak-season-preparation', mustContain: 'الموسم' },
  { path: '/blog/inventory-management-basics', mustContain: 'المخزون' },
];

const template = readFileSync(join(distDir, 'index.html'), 'utf-8');

// ── jsdom environment (one window for the whole run; routes navigate) ──
const dom = new JSDOM(template, {
  url: 'https://faccess.co/blog',
  pretendToBeVisual: true, // requestAnimationFrame etc.
});
const { window } = dom;

// Expose browser globals BEFORE app modules load.
globalThis.window = window;
globalThis.document = window.document;
Object.defineProperty(globalThis, 'navigator', { value: window.navigator, configurable: true });
globalThis.location = window.location;
globalThis.history = window.history;
globalThis.localStorage = window.localStorage;
globalThis.sessionStorage = window.sessionStorage;
globalThis.HTMLElement = window.HTMLElement;
globalThis.Element = window.Element;
globalThis.Node = window.Node;
globalThis.CustomEvent = window.CustomEvent;
globalThis.getComputedStyle = window.getComputedStyle;
globalThis.requestAnimationFrame = window.requestAnimationFrame.bind(window);
globalThis.cancelAnimationFrame = window.cancelAnimationFrame.bind(window);
globalThis.IS_REACT_ACT_ENVIRONMENT = true;

// Minimal stubs for APIs jsdom lacks (used by scroll/animation code).
const noop = () => {};
window.scrollTo = noop;
window.matchMedia =
  window.matchMedia ||
  ((q) => ({
    matches: false, media: q, onchange: null,
    addListener: noop, removeListener: noop,
    addEventListener: noop, removeEventListener: noop, dispatchEvent: () => false,
  }));
class Obs {
  observe() {} unobserve() {} disconnect() {} takeRecords() { return []; }
}
window.IntersectionObserver = window.IntersectionObserver || Obs;
window.ResizeObserver = window.ResizeObserver || Obs;
globalThis.IntersectionObserver = window.IntersectionObserver;
globalThis.ResizeObserver = window.ResizeObserver;
globalThis.matchMedia = window.matchMedia;

// ── Load the prebuilt SSR bundle (built by vite.prerender.config.mjs) ──
console.log('[pre] importing framework + ssr bundle…');
const [{ default: React, act }, { createRoot }, { renderToString }, entry] = await Promise.all([
  import('react'),
  import('react-dom/client'),
  import('react-dom/server'),
  import(join(appRoot, 'dist-ssr/prerender-entry.js')),
]);
const Root = entry.default;
const preloadRoute = entry.preloadRoute;

{
  console.log('[pre] app modules loaded, rendering routes');
  const results = [];
  for (const route of ROUTES) {
    console.log('[pre] route', route.path);
    // Navigate the shared window, then mount a fresh root.
    window.history.replaceState(null, '', route.path);
    const container = window.document.getElementById('root');
    container.innerHTML = '';

    const root = createRoot(container);
    console.log('[pre]   mounting…');
    await act(async () => {
      root.render(React.createElement(Root));
    });
    console.log('[pre]   mounted, waiting for lazy chunk…');
    for (let i = 0; i < 40 && !container.textContent.includes(route.mustContain); i++) {
      await act(async () => { await new Promise((r) => setTimeout(r, 50)); });
    }

    if (!container.textContent.includes(route.mustContain)) {
      throw new Error(`prerender: ${route.path} never rendered (marker "${route.mustContain}" missing)`);
    }

    // ── Serialize + post-process ──
    // The BODY comes from renderToString: canonical SSR markup with proper
    // Suspense boundary markers and server-format ids, which is the only
    // shape hydrateRoot fully adopts. The HEAD keeps the jsdom result, where
    // effects have injected title/meta/OG/canonical/schema. The route chunk
    // is preloaded first so nothing suspends and the markup is complete.
    await preloadRoute(route.path);
    const ssrBody = renderToString(React.createElement(Root));
    // Swap the container's content textually AFTER serialization — the live
    // DOM stays untouched so React can unmount cleanly, and the head keeps
    // the effect-injected tags (schema effects clean up on unmount).
    let html = '<!doctype html>\n' + window.document.documentElement.outerHTML;
    const liveOuter = container.outerHTML;
    const openTag = liveOuter.slice(0, liveOuter.indexOf('>') + 1);
    const stamped = openTag.replace('<div ', `<div data-prerender-path="${route.path}" `);
    if (!html.includes(liveOuter)) throw new Error('prerender: container swap anchor not found for ' + route.path);
    html = html.replace(liveOuter, stamped + ssrBody + '</div>');

    // Home FAQPage schema belongs to / only — strip it from the shared @graph.
    if (route.path !== '/') html = html.replace(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
      (full, body) => {
        try {
          const data = JSON.parse(body);
          if (Array.isArray(data['@graph'])) {
            data['@graph'] = data['@graph'].filter((n) => n['@type'] !== 'FAQPage');
            return `<script type="application/ld+json">${JSON.stringify(data)}</script>`;
          }
        } catch { /* leave untouched if not the @graph block */ }
        return full;
      },
    );

    // ── Inline the full stylesheet: on slow mobile networks the extra
    //    render-blocking CSS round-trip costs ~1.5s of first paint. 24KB
    //    inlined per page is the cheaper trade for a marketing site. ──
    const cssLink = html.match(/<link rel="stylesheet"[^>]*href="(\/assets\/[^"]+\.css)"[^>]*>/);
    if (cssLink) {
      const cssText = readFileSync(join(distDir, cssLink[1].replace(/^\//, '')), 'utf-8');
      html = html.replace(cssLink[0], '<style>' + cssText + '</style>');
    }

    // ── Home only: preload the LCP hero image so the fetch starts with the
    //    document instead of after CSS/layout discovery ──
    if (route.path === '/') {
      html = html.replace(
        '</title>',
        '</title>\n    <link rel="preload" as="image" imagesrcset="/assets/hero-bg-768.webp 768w, /assets/hero-bg.webp 1344w" imagesizes="100vw" fetchpriority="high">',
      );
    }

    // ── Sanity checks (fail the build loudly rather than ship bad SEO) ──
    const isBlogArticle = route.path.startsWith('/blog/');
    const url = route.path === '/' ? 'https://faccess.co/' : 'https://faccess.co' + route.path;
    const checks = [
      [html.includes(`<link rel="canonical" href="${url}"`), 'canonical'],
      [html.includes(`property="og:url" content="${url}"`), 'og:url'],
      [/lang="ar"/.test(html) && /dir="rtl"/.test(html), 'lang/dir'],
      [(route.path === '/') === html.includes('ما هي خدمة الفلفلمنت اللي تقدمها فاست أكسس؟'), 'home FAQ scoping'],
      [!isBlogArticle || html.includes('"@type":"Article"'), 'Article schema'],
      [!isBlogArticle || html.includes('"@type":"FAQPage"'), 'article FAQPage schema'],
      [html.includes('<h1'), 'h1 present'],
    ];
    const failed = checks.filter(([ok]) => !ok).map(([, name]) => name);
    if (failed.length) throw new Error(`prerender: ${route.path} failed checks: ${failed.join(', ')}`);

    const outPath = join(distDir, route.out ?? route.path.replace(/^\//, '') + '/index.html');
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, html);
    results.push({ path: route.path, bytes: html.length, title: (html.match(/<title>([^<]*)<\/title>/) || [])[1] });

    await act(async () => root.unmount());
  }

  console.log('\nPrerendered pages:');
  for (const r of results) console.log(`  ${r.path}  (${(r.bytes / 1024).toFixed(0)} KB)  «${r.title}»`);
  window.close();
  process.exit(0); // jsdom rAF/tickers keep the loop alive otherwise
}
