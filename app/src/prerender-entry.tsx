/**
 * prerender-entry — the exact provider tree from main.tsx, exported as a
 * component so scripts/prerender.mjs can mount it inside jsdom at build
 * time (blog SSG). Keep in sync with main.tsx if providers change.
 */
import App from './App';
export { preloadRoute } from './routeLoaders';
import { I18nProvider } from './i18n/I18nContext';
import { ThemeProvider } from './i18n/ThemeContext';
import { HelmetProvider } from 'react-helmet-async';

export default function Root() {
  return (
    <HelmetProvider>
      <ThemeProvider>
        <I18nProvider>
          <App />
        </I18nProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}
