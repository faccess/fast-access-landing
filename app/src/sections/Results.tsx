/**
 * Results — before/after stories from merchants (anonymised). Each card
 * contrasts the old pain (muted) with the Fast Access outcome (bright), joined
 * by an orange arrow connector, and carries sector / monthly orders / period
 * ({{CASE_n_*}} placeholders until the real figures are filled in).
 *
 * On Home the cards render inside StatStrip (numbers + stories merged), via
 * the named ResultsCards export. Headline metrics come from claims.ts.
 */

import { ArrowDown } from 'lucide-react';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { content } from '../i18n/content';
import { claims, pct } from '../content/claims';

interface Item { name: string; sector: string; monthlyOrders: string; period: string; before: string; after: string }

function metricValue(v: string) {
  return v === 'pickAccuracy' ? pct(claims.pickAccuracy) : v;
}

export function ResultsCards({ className = '' }: { className?: string }) {
  const { t, locale } = useT();
  const items = content[locale].results.items as readonly Item[];
  const isAr = locale === 'ar';
  const beforeLabel = isAr ? 'قبل' : 'Before';
  const afterLabel = isAr ? 'بعد' : 'After';

  return (
    <div className={`grid md:grid-cols-3 gap-6 ${className}`.trim()}>
      {items.map((it, i) => {
        const metric = claims.caseStudyMetrics[i];
        return (
          <Reveal key={i} delay={i * 90} className="h-full">
            <SpotlightCard className="fa-card fa-card--glow group relative h-full flex flex-col overflow-hidden text-left rtl:text-right">
              <div className="relative z-10 flex h-full flex-col">
                {/* Merchant */}
                <div className="flex items-center gap-3 px-6 pt-6 pb-3">
                  <span className="fa-iconchip w-9 h-9 rounded-xl font-display text-[15px] font-bold">
                    {it.name.trim().charAt(0)}
                  </span>
                  <div className="font-display text-[15px] font-semibold text-fa-liberty-blue leading-tight">{it.name}</div>
                </div>
                {/* Case facts */}
                <dl className="grid grid-cols-3 gap-2 px-6 pb-4 font-body text-[11px] leading-snug">
                  {[
                    [t('results.sectorLabel'), it.sector],
                    [t('results.ordersLabel'), it.monthlyOrders],
                    [t('results.periodLabel'), it.period],
                  ].map(([k, v]) => (
                    <div key={k} className="min-w-0">
                      <dt className="font-semibold uppercase tracking-[0.06em] text-fa-ink-faint">{k}</dt>
                      <dd className="mt-0.5 text-fa-liberty-blue break-words">{v}</dd>
                    </div>
                  ))}
                </dl>

                {/* Before */}
                <div className="px-6 py-5 bg-fa-cream-deep/60">
                  <span className="font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-fa-ink-faint">{beforeLabel}</span>
                  <p className="font-body text-[14px] text-fa-ink-muted leading-[1.55] mt-2">{it.before}</p>
                </div>

                {/* Connector */}
                <div className="relative h-0 flex justify-center">
                  <span className="absolute -translate-y-1/2 flex items-center justify-center w-7 h-7 rounded-full bg-fa-surface text-fa-orange-soda shadow-[0_4px_12px_rgba(241,91,65,0.28)] ring-1 ring-fa-orange-soda/15 transition-transform duration-300 group-hover:scale-110">
                    <ArrowDown size={14} strokeWidth={2.6} />
                  </span>
                </div>

                {/* After */}
                <div className="px-6 pt-7 pb-6 flex-1 flex flex-col">
                  <span className="inline-flex items-center gap-1.5 font-body text-[11px] font-semibold uppercase tracking-[0.1em] text-fa-orange-soda">
                    {afterLabel}
                  </span>
                  <p className="font-body text-[14px] text-fa-liberty-blue/90 leading-[1.55] mt-2 font-medium">{it.after}</p>
                  {metric && (
                    <div className="mt-auto pt-5 flex items-baseline gap-2 border-t border-fa-hairline">
                      <span className="font-display font-semibold text-[28px] leading-none tracking-[-0.02em] text-fa-orange-soda tabular-nums" dir="ltr">
                        {metricValue(metric.value)}
                      </span>
                      <span className="font-body text-[13px] text-fa-ink-muted leading-[1.4]">{metric.label[locale]}</span>
                    </div>
                  )}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>
        );
      })}
    </div>
  );
}

export default function Results() {
  const { t } = useT();
  return (
    <section className="relative bg-fa-cream section-padding overflow-hidden">
      <div className="container-main relative z-10">
        <div className="max-w-[760px] text-left rtl:text-right">
          <Reveal className="mb-5"><SectionChip>{t('results.chip')}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[30px] sm:text-[38px] lg:text-[48px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em]">
              {t('results.headlineA')}{' '}
              <span className="text-fa-orange-soda">{t('results.headlineHighlight')}</span>
              {t('results.headlineB')}
            </h2>
          </Reveal>
        </div>
        <ResultsCards className="mt-14" />
      </div>
    </section>
  );
}
