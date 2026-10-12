import { Link } from 'react-router-dom';
import { Warehouse, Package, Truck, Activity, Zap, Headphones, Ship, ArrowRight } from 'lucide-react';
import SectionChip from '../components/brand/SectionChip';
import BrandPattern from '../components/brand/BrandPattern';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

const serviceIcons = [
  { icon: Warehouse, number: '01', slug: 'storage' },
  { icon: Package, number: '02', slug: 'packing' },
  { icon: Truck, number: '03', slug: 'shipping' },
  { icon: Activity, number: '04', slug: 'tracking' },
  { icon: Zap, number: '05', slug: 'cloud-stores' },
  { icon: Headphones, number: '06', slug: 'support' },
  { icon: Ship, number: '07', slug: 'freight' },
];

/**
 * Seven services as compact, uniform cards: icon + number (rendered once) +
 * title + one sentence + link. 1 col on mobile, 2 on md, 4 on lg.
 */
export default function ServicesGrid() {
  const { t } = useT();

  return (
    <section id="services" className="relative bg-fa-cream-deep section-padding overflow-hidden">
      <BrandPattern
        pattern="lozenge"
        tint="navy"
        opacity={0.09}
        className="absolute -top-[10%] -right-[12%] w-[72%] max-w-[1050px]"
      />
      <div className="container-main relative z-10">
        <div className="mb-12 max-w-[820px] text-left rtl:text-right">
          <Reveal className="mb-5"><SectionChip>{t('services.chip')}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[52px] text-fa-liberty-blue leading-[1.05] tracking-[-0.02em]">
              {t('services.headlineA')}{' '}
              <span className="text-fa-orange-soda">{t('services.headlineHighlight')}</span>
              {t('services.headlineB')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-body mt-5 text-base lg:text-lg text-fa-ink-muted leading-[1.6] max-w-[640px]">
              {t('services.body')}
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {serviceIcons.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.number} delay={i * 60} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow group relative h-full overflow-hidden p-6 text-left rtl:text-right">
                  <div className="relative z-10 flex h-full flex-col">
                    <div className="flex items-start justify-between">
                      <span className="fa-iconchip w-10 h-10 rounded-xl">
                        <Icon size={20} strokeWidth={1.8} />
                      </span>
                      <span className="font-display text-[12px] text-fa-orange-soda/70 font-semibold tracking-[0.12em] mt-1" aria-hidden>
                        {item.number}
                      </span>
                    </div>
                    <h3 className="font-display mt-5 text-[18px] lg:text-[19px] font-semibold text-fa-liberty-blue tracking-[-0.01em]">
                      {t(`services.items.${i}.title`)}
                    </h3>
                    <p className="font-body mt-2 text-[13.5px] text-fa-ink-muted leading-[1.6]">
                      {t(`services.items.${i}.body`)}
                    </p>
                    <Link
                      to={`/solutions/${item.slug}`}
                      className="group/link inline-flex items-center gap-1.5 mt-auto pt-5 text-[12px] font-semibold uppercase tracking-[0.06em] text-fa-orange-soda font-body"
                    >
                      {t('services.learnMore')}
                      <ArrowRight
                        size={13}
                        strokeWidth={2.4}
                        className="transition-transform duration-200 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1"
                      />
                    </Link>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
