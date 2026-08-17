import usePageMeta from '../hooks/usePageMeta';
import Hero from '../sections/Hero';
import WhatIsFA from '../sections/WhatIsFA';
import TrustedBy from '../sections/TrustedBy';
import KickerBar from '../sections/KickerBar';
import ServicesGrid from '../sections/ServicesGrid';
import ScrollRoute from '../sections/ScrollRoute';
import Sectors from '../sections/Sectors';
import Coverage from '../sections/Coverage';
import StatStrip from '../sections/StatStrip';
import Results from '../sections/Results';
import AppPromo from '../sections/AppPromo';
import Pricing from '../sections/Pricing';
import FAQ from '../sections/FAQ';
import CTA from '../sections/CTA';

export default function Home() {
  usePageMeta(
    { title: 'فاست أكسس | شركة تخزين وتجهيز وشحن للمتاجر الإلكترونية في السعودية', desc: 'فاست أكسس شريكك اللوجستي في السعودية: تخزين، تجهيز بهوية علامتك، شحن لكل المملكة، وتوصيل بنفس اليوم. تكامل مباشر مع سلة وزد وشوبيفاي. خلّها علينا.' },
    { title: 'Fast Access — Fulfillment & Shipping for E-commerce', desc: 'Your logistics partner in Saudi Arabia: storage, branded fulfillment, live-tracked shipping, and same-day delivery from cloud warehouses.' }
  );
  return (
    <>
      <Hero />
      {/* Plain-language value prop first: tell visitors what we do */}
      <WhatIsFA />
      {/* Social proof high up: the platforms we plug into, right after the pitch */}
      <TrustedBy />
      <KickerBar />
      <ServicesGrid />
      {/* The journey beat: cinematic order-in-motion */}
      <ScrollRoute />
      {/* The platform: live-ops dashboard — follows the journey's
          "live readout" story with the tool that delivers it */}
      <Sectors />
      {/* Navy "proof" block: network + the numbers */}
      <Coverage />
      <StatStrip />
      <Results />
      <AppPromo />
      <Pricing />
      <FAQ />
      <CTA />
    </>
  );
}
