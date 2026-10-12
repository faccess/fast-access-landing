import { Zap, MonitorSmartphone, Workflow, Check } from 'lucide-react';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { content } from '../i18n/content';

/**
 * «ليش فاست أكسس؟» — three differentiators + a short comparison table
 * (Fast Access / a regular shipping company / doing it yourself).
 * The headline is the {{USP_HEADLINE}} placeholder until Meshal sets it.
 */
const icons = [Zap, MonitorSmartphone, Workflow];

export default function WhyFA() {
  const { t, locale } = useT();
  const why = content[locale].why;

  return (
    <section id="why" className="relative bg-fa-cream section-padding overflow-hidden">
      <div className="container-main relative z-10">
        <div className="max-w-[780px] text-left rtl:text-right">
          <Reveal className="mb-5"><SectionChip>{t('why.chip')}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[30px] sm:text-[38px] lg:text-[48px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em]">
              {t('why.headline')}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-body mt-5 text-base lg:text-lg text-fa-ink-muted leading-[1.7] max-w-[680px]">
              {t('why.intro')}
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-3 gap-5 mt-12">
          {why.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <Reveal key={card.title} delay={i * 90} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow h-full p-7 text-left rtl:text-right">
                  <span className="fa-iconchip"><Icon size={22} strokeWidth={1.8} /></span>
                  <h3 className="font-display mt-5 text-[19px] lg:text-[21px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{card.title}</h3>
                  <p className="font-body mt-2.5 text-[14.5px] text-fa-ink-muted leading-[1.65]">{card.body}</p>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120}>
          <h3 className="font-display mt-16 text-[22px] lg:text-[26px] font-bold text-fa-liberty-blue tracking-[-0.02em] text-left rtl:text-right">
            {why.compareTitle}
          </h3>
        </Reveal>
        <Reveal delay={160}>
          <div className="mt-6 overflow-x-auto rounded-2xl border border-fa-liberty-blue/10 bg-white/60">
            <table className="w-full min-w-[640px] border-collapse text-left rtl:text-right font-body text-[14px]">
              <thead>
                <tr>
                  {why.compareCols.map((col, i) => (
                    <th
                      key={i}
                      scope="col"
                      className={`px-5 py-4 font-display text-[15px] font-bold tracking-[-0.01em] ${
                        i === 1 ? 'bg-fa-liberty-blue text-fa-classic-chalk' : 'text-fa-liberty-blue'
                      }`}
                    >
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {why.compareRows.map((row) => (
                  <tr key={row[0]} className="border-t border-fa-liberty-blue/10">
                    {row.map((cell, i) =>
                      i === 0 ? (
                        <th key={i} scope="row" className="px-5 py-4 font-semibold text-fa-liberty-blue align-top whitespace-nowrap">{cell}</th>
                      ) : (
                        <td
                          key={i}
                          className={`px-5 py-4 align-top leading-[1.55] ${
                            i === 1 ? 'bg-fa-liberty-blue/[0.04] font-medium text-fa-liberty-blue' : 'text-fa-ink-muted'
                          }`}
                        >
                          {i === 1 && <Check size={14} strokeWidth={2.6} className="inline-block text-fa-orange-soda me-1.5 -mt-0.5" aria-hidden />}
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
