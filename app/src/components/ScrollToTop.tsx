import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/**
 * Resets scroll to the top on every route change and refreshes ScrollTrigger
 * so pinned scenes (e.g. the Journey on /solutions) measure against the new page.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const lenis = (window as unknown as { __lenis?: { scrollTo: (t: number | HTMLElement, o?: object) => void } }).__lenis;
    if (hash) {
      // Hash navigation (e.g. /#integrations from the blog): scroll to the
      // target section once the page has painted.
      // The target page is code-split, so the anchor may not exist yet on a
      // cross-page hash navigation — retry briefly until it appears.
      let tries = 0;
      const id = window.setInterval(() => {
        const el = document.querySelector(hash) as HTMLElement | null;
        tries += 1;
        if (el) {
          window.clearInterval(id);
          if (lenis?.scrollTo) lenis.scrollTo(el, { immediate: false });
          else el.scrollIntoView({ behavior: 'smooth' });
          ScrollTrigger.refresh();
        } else if (tries >= 20) {
          window.clearInterval(id);
          ScrollTrigger.refresh();
        }
      }, 120);
      return () => window.clearInterval(id);
    }
    // Lenis owns the scroll position; reset it immediately if present.
    if (lenis?.scrollTo) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
    // Let the new page paint, then recalc any scroll-driven animations.
    const id = window.setTimeout(() => ScrollTrigger.refresh(), 80);
    return () => window.clearTimeout(id);
  }, [pathname, hash]);

  return null;
}
