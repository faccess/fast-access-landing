import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './i18n/ThemeContext'
import { HelmetProvider } from 'react-helmet-async';

const container = document.getElementById('root')!;
const tree = (
  <HelmetProvider>
    <ThemeProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </ThemeProvider>
  </HelmetProvider>
);

// Prerendered pages ship full HTML — adopt it in place (hydrate) so the
// static first paint IS the LCP. Hydration only happens when the served
// markup provably belongs to this URL (data-prerender-path marker) and the
// route's lazy chunk is loaded first, so the first render pass matches.
const currentPath = window.location.pathname.replace(/\/+$/, '') || '/';
const prerenderedFor = container.getAttribute('data-prerender-path');

async function mount() {
  if (container.hasChildNodes() && prerenderedFor === currentPath) {
    const { preloadRoute } = await import('./routeLoaders');
    await preloadRoute(currentPath);
    hydrateRoot(container, tree);
  } else {
    container.innerHTML = '';
    createRoot(container).render(tree);
  }
}
void mount();
