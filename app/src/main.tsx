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

// Prerendered pages (home, core pages, blog) ship full HTML — hydrate to
// adopt it in place, so the first paint of the static markup IS the LCP.
// Unknown routes fall back to the empty shell and mount from scratch.
if (container.hasChildNodes()) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
