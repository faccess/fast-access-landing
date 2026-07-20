/**
 * Preloadable lazy routes. Each route code-splits exactly like React.lazy,
 * but exposes .preload() — once preloaded, the component renders
 * synchronously, which is what makes hydration of prerendered pages match
 * on the first pass (a plain React.lazy suspends on first render even when
 * its chunk is already cached, breaking hydration).
 */
import { lazy, createElement, type ComponentType } from 'react';

type Preloadable = ComponentType & { preload: () => Promise<void> };

function lazyRoute(factory: () => Promise<{ default: ComponentType }>): Preloadable {
  let Loaded: ComponentType | null = null;
  const Lazy = lazy(async () => {
    const m = await factory();
    Loaded = m.default;
    return m;
  });
  const Route = () => (Loaded ? createElement(Loaded) : createElement(Lazy));
  (Route as Preloadable).preload = async () => {
    const m = await factory();
    Loaded = m.default;
  };
  return Route as Preloadable;
}

export const Home = lazyRoute(() => import('./pages/Home'));
export const Solutions = lazyRoute(() => import('./pages/Solutions'));
export const Pricing = lazyRoute(() => import('./pages/Pricing'));
export const About = lazyRoute(() => import('./pages/About'));
export const Resources = lazyRoute(() => import('./pages/Resources'));
export const Contact = lazyRoute(() => import('./pages/Contact'));
export const NotFound = lazyRoute(() => import('./pages/NotFound'));
export const FAQ = lazyRoute(() => import('./pages/FAQ'));
export const Privacy = lazyRoute(() => import('./pages/Privacy'));
export const Terms = lazyRoute(() => import('./pages/Terms'));
export const ServicePage = lazyRoute(() => import('./pages/ServicePage'));
export const Blog = lazyRoute(() => import('./pages/Blog'));
export const BlogArticle = lazyRoute(() => import('./pages/BlogArticle'));
export const BlogArticle2 = lazyRoute(() => import('./pages/BlogArticle2'));
export const BlogArticle3 = lazyRoute(() => import('./pages/BlogArticle3'));
export const BlogArticle4 = lazyRoute(() => import('./pages/BlogArticle4'));
export const BlogArticle5 = lazyRoute(() => import('./pages/BlogArticle5'));
export const BlogArticle6 = lazyRoute(() => import('./pages/BlogArticle6'));
export const BlogArticle7 = lazyRoute(() => import('./pages/BlogArticle7'));
export const BlogArticle8 = lazyRoute(() => import('./pages/BlogArticle8'));
export const BlogArticle9 = lazyRoute(() => import('./pages/BlogArticle9'));

const byPath: Record<string, Preloadable> = {
  '/': Home,
  '/solutions': Solutions,
  '/pricing': Pricing,
  '/about': About,
  '/resources': Resources,
  '/contact': Contact,
  '/faq': FAQ,
  '/privacy': Privacy,
  '/terms': Terms,
  '/solutions/storage': ServicePage,
  '/solutions/packing': ServicePage,
  '/solutions/shipping': ServicePage,
  '/solutions/tracking': ServicePage,
  '/solutions/cloud-stores': ServicePage,
  '/solutions/support': ServicePage,
  '/solutions/freight': ServicePage,
  '/blog': Blog,
  '/blog/what-is-fulfillment': BlogArticle,
  '/blog/how-to-choose-fulfillment-company': BlogArticle2,
  '/blog/fulfillment-cost-calculation': BlogArticle3,
  '/blog/returns-management-ecommerce': BlogArticle4,
  '/blog/dark-store-same-day-delivery': BlogArticle5,
  '/blog/cash-on-delivery-guide': BlogArticle6,
  '/blog/3pl-vs-4pl-difference': BlogArticle7,
  '/blog/peak-season-preparation': BlogArticle8,
  '/blog/inventory-management-basics': BlogArticle9,
};

/** Load the chunk for a pathname ahead of render. Resolves immediately for unknown paths. */
export function preloadRoute(pathname: string): Promise<void> {
  const clean = pathname.replace(/\/+$/, '') || '/';
  return byPath[clean]?.preload() ?? Promise.resolve();
}
