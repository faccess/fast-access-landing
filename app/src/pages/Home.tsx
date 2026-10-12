import usePageMeta from '../hooks/usePageMeta';
import Hero from '../sections/Hero';
import TrustedBy from '../sections/TrustedBy';
import WhyFA from '../sections/WhyFA';
import ServicesGrid from '../sections/ServicesGrid';
import OrderJourney from '../sections/OrderJourney';
import StatStrip from '../sections/StatStrip';
import AppPromo from '../sections/AppPromo';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';
import { claims } from '../content/claims';
import { indexMeta } from '../content/seo';

const w = claims.expressDeliveryWindow;

export default function Home() {
  usePageMeta(
    { title: 'فاست أكسس | شركة تخزين وتجهيز وشحن للمتاجر الإلكترونية في السعودية', desc: indexMeta.description },
    { title: 'Fast Access — Fulfillment & Shipping for E-commerce', desc: `Your logistics partner in Saudi Arabia: storage, branded fulfillment, live-tracked shipping, and express delivery within ${w.en} from our cloud warehouses.` }
  );
  return (
    <>
      {/* 1. Hero: headline + the three performance stats */}
      <Hero />
      {/* Platforms strip, shown once */}
      <TrustedBy />
      {/* 2. Why Fast Access: three differentiators + comparison table */}
      <WhyFA />
      {/* 3. The seven services, compact */}
      <ServicesGrid />
      {/* 4. The order journey: five fixed steps with times from claims */}
      <OrderJourney />
      {/* 5. Numbers + client stories, merged */}
      <StatStrip />
      {/* 6. Dashboard + merchant app, merged */}
      <AppPromo />
      {/* 7. Pricing in brief */}
      <Pricing />
      {/* 8. Top-5 FAQ, final CTA + quote form */}
      <FAQ />
      <CTA />
    </>
  );
}
