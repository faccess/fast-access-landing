/**
 * hydration-test.mjs — mounts the real tree over the prerendered HTML inside
 * jsdom with development React, so hydration mismatches print their full
 * component stack instead of the minified #418. Run AFTER the prerender.
 */
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';

process.env.NODE_ENV = 'development';

const __dirname = dirname(fileURLToPath(import.meta.url));
const appRoot = join(__dirname, '..');
const distDir = join(appRoot, 'dist');

const PAGES = [
  { path: '/', file: 'index.html' },
  { path: '/blog/what-is-fulfillment', file: 'blog/what-is-fulfillment/index.html' },
];

for (const page of PAGES) {
  const html = readFileSync(join(distDir, page.file), 'utf-8');
  const dom = new JSDOM(html, { url: 'https://faccess.co' + page.path, pretendToBeVisual: true });
  const { window } = dom;

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

  const noop = () => {};
  window.scrollTo = noop;
  window.matchMedia = window.matchMedia || ((q) => ({
    matches: false, media: q, onchange: null,
    addListener: noop, removeListener: noop,
    addEventListener: noop, removeEventListener: noop, dispatchEvent: () => false,
  }));
  class Obs { observe() {} unobserve() {} disconnect() {} takeRecords() { return []; } }
  window.IntersectionObserver = window.IntersectionObserver || Obs;
  window.ResizeObserver = window.ResizeObserver || Obs;
  globalThis.IntersectionObserver = window.IntersectionObserver;
  globalThis.ResizeObserver = window.ResizeObserver;
  globalThis.matchMedia = window.matchMedia;

  // Capture hydration diagnostics
  const logs = [];
  const origErr = console.error;
  console.error = (...a) => { logs.push(a.map(String).join(' ')); };

  const [{ default: React, act }, { hydrateRoot }, entry] = await Promise.all([
    import('react'),
    import('react-dom/client'),
    import(join(appRoot, 'dist-ssr/prerender-entry.js')),
  ]);
  const Root = entry.default;

  const container = window.document.getElementById('root');
  if (entry.preloadRoute) await entry.preloadRoute(page.path);
  await act(async () => { hydrateRoot(container, React.createElement(Root)); });
  await act(async () => { await new Promise((r) => setTimeout(r, 400)); });

  console.error = origErr;
  const relevant = logs.filter((l) => /hydrat|match|418|recreate/i.test(l));
  console.log(`\n===== ${page.path} =====`);
  if (relevant.length === 0) {
    console.log('NO HYDRATION ERRORS ✅');
    if (logs.length) console.log('(other console.error output: ' + logs.length + ' entries)');
  } else {
    for (const l of relevant.slice(0, 4)) console.log(l.slice(0, 3000) + '\n---');
  }
}
process.exit(0);
