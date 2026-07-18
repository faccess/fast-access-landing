import { useEffect } from 'react';
import { useT } from '../i18n/I18nContext';

/**
 * usePageMeta — sets the document title + meta description per page/locale.
 * Lightweight SPA alternative to react-helmet; Google renders JS and reads these.
 */
export default function usePageMeta(ar: { title: string; desc: string }, en: { title: string; desc: string }) {
  const { locale } = useT();
  useEffect(() => {
    const m = locale === 'ar' ? ar : en;
    document.title = m.title;
    let tag = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    if (!tag) {
      tag = document.createElement('meta');
      tag.name = 'description';
      document.head.appendChild(tag);
    }
    tag.content = m.desc;
    // keep og tags in sync for shares
    const og = (p: string, v: string) => {
      let el = document.querySelector(`meta[property="og:${p}"]`) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', `og:${p}`);
        document.head.appendChild(el);
      }
      el.content = v;
    };
    og('title', m.title);
    og('description', m.desc);
    // canonical + og:url follow the route (single canonical per page; the
    // AR/EN toggle shares one URL so the canonical does not change with locale)
    const path = window.location.pathname.replace(/\/+$/, '');
    const url = `https://faccess.co${path || '/'}` === 'https://faccess.co/' ? 'https://faccess.co/' : `https://faccess.co${path}`;
    let canon = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canon) {
      canon = document.createElement('link');
      canon.rel = 'canonical';
      document.head.appendChild(canon);
    }
    canon.href = url;
    og('url', url);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locale, ar.title, en.title]);
}
