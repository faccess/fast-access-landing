import { Boxes, PackageCheck, Truck, MapPin } from 'lucide-react';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import BrandPattern from '../components/brand/BrandPattern';
import MagneticButton from '../components/brand/MagneticButton';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { claims } from '../content/claims';

/**
 * Pricing in brief (Home) — the same four price factors as /pricing
 * (claims.pricingFactors, single source) and one CTA to the full pricing page.
 */
const factorIcons = [Boxes, PackageCheck, Truck, MapPin];

export default function Pricing() {
  const { t, locale } = useT();

  return (
    <section id="pricing" className="relative bg-fa-cream section-padding border-t border-fa-hairline overflow-hidden">
      <BrandPattern
        pattern="ribbon"
        tint="navy"
        opacity={0.03}
        className="absolute top-[8%] -left-[25%] w-[80%] max-w-none"
      />
      <div className="container-main relative z-10">
        <div className="text-center mx-auto max-w-[720px]">
          <Reveal className="inline-flex mb-5"><SectionChip>{t('pricing.chip')}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[52px] text-fa-liberty-blue leading-[1.05] tracking-[-0.02em] [text-wrap:balance]">
              {t('pricing.headlineA')} <span className="text-fa-orange-soda">{t('pricing.headlineHighlight')}</span>{t('pricing.headlineB')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-body mt-5 text-base text-fa-ink-muted leading-[1.6]">{t('pricing.body')}</p>
          </Reveal>
        </div>

        <Reveal delay={160}>
          <div className="mt-12 text-center text-[11px] font-semibold uppercase tracking-[0.1em] font-body text-fa-orange-soda">
            {t('pricing.howTitle')}
          </div>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {claims.pricingFactors.map((f, i) => {
            const Icon = factorIcons[i];
            return (
              <Reveal key={f.title.en} delay={i * 80} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow h-full p-6 text-left rtl:text-right">
                  <span className="fa-iconchip w-10 h-10 rounded-xl"><Icon size={20} strokeWidth={1.8} /></span>
                  <h3 className="font-display mt-4 text-[17px] font-bold text-fa-liberty-blue tracking-[-0.01em]">{f.title[locale]}</h3>
                  <p className="font-body mt-2 text-[13.5px] text-fa-ink-muted leading-[1.6]">{f.body[locale]}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col items-center gap-3">
            <MagneticButton variant="filled" href="/pricing">
              {t('pricing.cta')}
            </MagneticButton>
            <span className="font-body text-[12px] text-fa-ink-muted">{t('pricing.replyNote')}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
