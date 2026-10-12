import { ShoppingCart, PackageCheck, Truck, DoorOpen, RotateCcw, Globe2 } from 'lucide-react';
import SectionChip from '../components/brand/SectionChip';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { content } from '../i18n/content';

/**
 * رحلة الطلب — five fixed steps, all visible at once (no scroll-scrub):
 * order in → packing → shipping → delivery → returns. Each step carries an
 * approximate time from claims.ts. Replaces the ScrollRoute video on Home and
 * absorbs the Coverage section's one-line reach statement.
 */
const icons = [ShoppingCart, PackageCheck, Truck, DoorOpen, RotateCcw];

export default function OrderJourney() {
  const { t, locale } = useT();
  const j = content[locale].orderJourney;

  return (
    <section id="journey" className="relative bg-fa-cream section-padding overflow-hidden">
      <div className="container-main relative z-10">
        <div className="max-w-[760px] text-left rtl:text-right">
          <Reveal className="mb-5"><SectionChip>{t('orderJourney.chip')}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[30px] sm:text-[38px] lg:text-[48px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em]">
              {t('orderJourney.headlineA')}{' '}
              <span className="text-fa-orange-soda">{t('orderJourney.headlineHighlight')}</span>
            </h2>
          </Reveal>
        </div>

        <ol className="relative mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-0">
          {/* connector line behind the step markers (lg only) */}
          <span aria-hidden className="hidden lg:block absolute top-[22px] inset-x-[10%] h-px bg-fa-liberty-blue/15" />
          {j.steps.map((step, i) => {
            const Icon = icons[i];
            const label = 'timeLabel' in step ? step.timeLabel : undefined;
            return (
              <Reveal as="li" key={step.title} delay={i * 80} className="relative lg:px-3 text-left rtl:text-right lg:text-center lg:rtl:text-center">
                <div className="flex lg:flex-col items-start lg:items-center gap-4 lg:gap-0 rounded-2xl lg:rounded-none border border-fa-liberty-blue/10 bg-white/60 lg:bg-transparent lg:border-0 p-5 lg:p-0">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-fa-orange-soda text-white shadow-[0_0_0_6px_#F5F3EF]">
                    <Icon size={19} strokeWidth={2} />
                  </span>
                  <div className="lg:mt-5">
                    <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-fa-ink-faint">
                      {String(i + 1).padStart(2, '0')} · {step.title}
                    </div>
                    <div className="font-display mt-2 text-[20px] lg:text-[22px] font-bold text-fa-liberty-blue leading-tight tracking-[-0.01em]">
                      {step.time}
                      {label && <span className="ms-1.5 font-body text-[11px] font-semibold text-fa-orange-soda align-middle">{label}</span>}
                    </div>
                    <p className="font-body mt-2 text-[13.5px] text-fa-ink-muted leading-[1.6]">{step.body}</p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ol>

        <Reveal delay={200}>
          <p className="mt-10 flex items-start gap-3 border-t border-fa-liberty-blue/10 pt-6 font-body text-[14.5px] text-fa-ink-muted leading-[1.6] text-left rtl:text-right">
            <Globe2 size={18} strokeWidth={1.8} className="text-fa-orange-soda shrink-0 mt-0.5" aria-hidden />
            {j.coverage}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
