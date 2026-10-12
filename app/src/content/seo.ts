/**
 * seo.ts — the static <head> pieces of index.html, built from claims.ts and
 * the home FAQ (faq.ts) so the shell's description and JSON-LD can never drift
 * from what the pages say. Consumed at build time by the `claims-html` plugin
 * in vite.config.ts (replaces the __FA_*__ tokens in index.html).
 */

import { claims as c, joinList } from './claims';
import { HOME_FAQS } from './faq';

const w = c.expressDeliveryWindow.ar;
const shortPlatforms = joinList(c.platforms.slice(0, 3), 'ar');

export const indexMeta = {
  description: `فاست أكسس شريكك اللوجستي في السعودية: تخزين، تجهيز بهوية علامتك، شحن لكل المملكة، وتوصيل عاجل خلال ${w}. تكامل مباشر مع ${shortPlatforms} وغيرها. خلّها علينا.`,
  ogDescription: `تخزين، تجهيز، شحن، وتوصيل عاجل خلال ${w}. تكامل مباشر مع ${shortPlatforms} وغيرها. خلّها علينا.`,
};

export function homeJsonLd(): string {
  const graph = [
    {
      '@type': 'WebSite', '@id': 'https://faccess.co/#website', url: 'https://faccess.co/', name: 'فاست أكسس',
      alternateName: ['Fast Access', 'faccess'], inLanguage: 'ar', publisher: { '@id': 'https://faccess.co/#org' },
    },
    {
      '@type': 'Organization', '@id': 'https://faccess.co/#org', name: 'Fast Access',
      alternateName: ['فاست أكسس', c.legalNameAr, c.legalNameEn],
      url: 'https://faccess.co', logo: 'https://faccess.co/assets/logo-mark.png', slogan: 'خلّها علينا',
      foundingDate: String(c.foundedYear),
      description: `فاست أكسس شركة سعودية متخصصة في خدمات الفلفلمنت والتخزين والشحن للمتاجر الإلكترونية، مع تكامل مباشر مع ${joinList(c.platforms, 'ar')}، وتوصيل عاجل خلال ${w} عبر المخازن السحابية.`,
      sameAs: ['https://apps.salla.sa/en/app/379666742', 'https://www.linkedin.com/company/faccess-co', 'https://www.instagram.com/faccess.co'],
    },
    {
      '@type': 'LocalBusiness', '@id': 'https://faccess.co/#local', name: 'فاست أكسس — Fast Access',
      parentOrganization: { '@id': 'https://faccess.co/#org' }, image: 'https://faccess.co/assets/hero-bg.webp', url: 'https://faccess.co',
      address: { '@type': 'PostalAddress', addressLocality: 'الرياض', addressCountry: 'SA' }, areaServed: ['Saudi Arabia', 'GCC'], priceRange: '$$',
    },
    {
      '@type': 'Service', serviceType: 'E-commerce Fulfillment & 3PL', name: 'خدمات التخزين والتجهيز والشحن للمتاجر الإلكترونية',
      provider: { '@id': 'https://faccess.co/#org' }, areaServed: 'SA',
      hasOfferCatalog: {
        '@type': 'OfferCatalog', name: 'خدمات فاست أكسس',
        itemListElement: ['تخزين المنتجات', 'تجهيز وتغليف الطلبات', 'الشحن والتوصيل', `المخازن السحابية (الدارك ستور): توصيل خلال ${w}`, 'التوصيل لنقاط ريدبوكس', 'إدارة المرتجعات']
          .map((name) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name } })),
      },
    },
    {
      // Mirrors the five questions visible on the home page (Google requires FAQ schema to match visible content).
      '@type': 'FAQPage', '@id': 'https://faccess.co/#faq',
      mainEntity: HOME_FAQS.map((f) => ({ '@type': 'Question', name: f.q.ar, acceptedAnswer: { '@type': 'Answer', text: f.a.ar } })),
    },
  ];
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}
