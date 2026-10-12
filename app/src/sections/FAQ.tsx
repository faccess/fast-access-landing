import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, MessageCircleQuestion, ArrowRight } from 'lucide-react';
import { useT } from '../i18n/I18nContext';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import BrandPattern from '../components/brand/BrandPattern';
import { HOME_FAQS } from '../content/faq';
import { claims } from '../content/claims';

export default function FAQ() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-fa-paper py-20 lg:py-28 border-t border-fa-hairline">
      <BrandPattern
        pattern="lozenge"
        tint="navy"
        opacity={0.035}
        className="absolute -top-[10%] -right-[12%] w-[54%] max-w-[760px] pointer-events-none"
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-start">
          {/* Intro — sticky on desktop */}
          <div className="text-left rtl:text-right lg:sticky lg:top-28">
            <div className="inline-flex mb-5">
              <SectionChip>{isAr ? 'الأسئلة الشائعة' : 'FAQ'}</SectionChip>
            </div>
            <h2 className="font-display font-bold text-[30px] sm:text-[38px] lg:text-[46px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em]">
              {isAr ? (
                <>
                  الأسئلة الشائعة عن خدمات <span className="text-fa-orange-soda">التخزين والشحن</span>
                </>
              ) : (
                <>
                  Everything you need to know about <span className="text-fa-orange-soda">FAST ACCESS</span>
                </>
              )}
            </h2>
            <p className="font-body mt-5 text-base text-fa-ink-muted leading-[1.6] max-w-[420px]">
              {isAr
                ? 'إجابات شاملة لجميع استفساراتك حول التخزين، التغليف، التوصيل، وأنظمتنا التقنية.'
                : 'Detailed answers to all your inquiries about warehousing, packaging, delivery, and our software integration.'}
            </p>

            {/* Still have questions — contact nudge */}
            <SpotlightCard
              radius={300}
              className="fa-card fa-card--glow group relative overflow-hidden mt-8 p-6 hidden lg:block max-w-[380px]"
            >
              <div className="relative z-10 flex items-start gap-4">
                <span className="fa-iconchip shrink-0">
                  <MessageCircleQuestion size={22} strokeWidth={1.8} />
                </span>
                <div>
                  <h3 className="font-display text-[16px] font-semibold text-fa-liberty-blue">
                    {isAr ? 'لم تجد إجابتك؟' : 'Still have a question?'}
                  </h3>
                  <p className="font-body mt-1.5 text-[13px] text-fa-ink-muted leading-[1.55]">
                    {isAr ? `فريقنا يرد خلال ${claims.quoteTurnaround.ar}.` : `Our team replies within ${claims.quoteTurnaround.en}.`}
                  </p>
                  <Link
                    to="/contact"
                    className="group/link inline-flex items-center gap-1.5 mt-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-fa-orange-soda font-body"
                  >
                    {isAr ? 'تواصل معنا' : 'Talk to us'}
                    <ArrowRight size={13} strokeWidth={2.4} className="transition-transform duration-200 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1" />
                  </Link>
                </div>
              </div>
            </SpotlightCard>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {HOME_FAQS.map((item, i) => {
              const question = item.q[locale];
              const answer = item.a[locale];
              const isOpen = activeIndex === i;

              return (
                <div
                  key={i}
                  className={`rounded-xl border overflow-hidden transition-all duration-200 ${
                    isOpen
                      ? 'border-fa-orange-soda/30 bg-fa-surface shadow-[0_12px_32px_-14px_rgba(13,18,50,0.16)]'
                      : 'border-fa-hairline bg-fa-surface/50 hover:border-fa-orange-soda/20 hover:bg-fa-surface'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(i)}
                    aria-expanded={isOpen}
                    className="group w-full flex items-center justify-between gap-4 p-5 lg:px-6 text-left rtl:text-right"
                  >
                    <span className={`font-display text-[15px] lg:text-base font-semibold transition-colors duration-200 ${isOpen ? 'text-fa-orange-soda' : 'text-fa-liberty-blue group-hover:text-fa-orange-soda'}`}>
                      {question}
                    </span>
                    <span
                      className={`relative shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isOpen ? 'bg-fa-orange-soda text-white' : 'bg-fa-orange-100 text-fa-orange-soda group-hover:bg-fa-orange-soda/15'
                      }`}
                    >
                      <Plus size={15} strokeWidth={2.5} className={`absolute transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                      <Minus size={15} strokeWidth={2.5} className={`absolute transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
                    </span>
                  </button>

                  {/* Animated collapsible answer panel */}
                  <div
                    className="transition-all duration-300 ease-in-out overflow-hidden"
                    style={{
                      maxHeight: isOpen ? '320px' : '0px',
                      opacity: isOpen ? 1 : 0,
                    }}
                  >
                    <div className="mx-5 lg:mx-6 mb-6 pt-4 text-sm text-fa-ink-muted leading-[1.65] border-t border-fa-hairline/55">
                      {answer}
                    </div>
                  </div>
                </div>
              );
            })}
            <Link
              to="/faq"
              className="group/link inline-flex items-center gap-1.5 pt-3 text-[12px] font-semibold uppercase tracking-[0.06em] text-fa-orange-soda font-body"
            >
              {isAr ? 'كل الأسئلة' : 'All questions'}
              <ArrowRight size={13} strokeWidth={2.4} className="transition-transform duration-200 group-hover/link:translate-x-1 rtl:rotate-180 rtl:group-hover/link:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
