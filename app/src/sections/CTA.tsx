import { useInView } from '../hooks/useInView';
import SectionChip from '../components/brand/SectionChip';
import BrandPattern from '../components/brand/BrandPattern';
import BrandButton from '../components/brand/BrandButton';
import QuoteForm from '../components/QuoteForm';
import { useT } from '../i18n/I18nContext';


export default function CTA() {
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  const { ref, isInView } = useInView(0.15);

  

  
  const handleServiceChange = (serviceName: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter(s => s !== serviceName)
        : [...prev.services, serviceName]
    }));
  };

  
  return (
    <section id="quote" ref={ref} className="relative bg-fa-liberty-blue pt-24 pb-20 lg:pt-28 lg:pb-28 overflow-hidden">
      {/* Pattern 1 — Ribbon background decoration */}
      <BrandPattern
        pattern="ribbon"
        tint="orange"
        opacity={0.16}
        className="absolute top-[15%] -right-[10%] w-[110%] max-w-none"
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">
          
          {/* LEFT — Info & Texts */}
          <div className="text-left rtl:text-right lg:sticky lg:top-28">
            <div className="inline-flex mb-6" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 500ms ease-out' }}>
              <SectionChip onDark>{t('cta.chip')}</SectionChip>
            </div>

            <h2 className="font-display font-bold text-[36px] sm:text-[48px] lg:text-[56px] text-fa-classic-chalk leading-[1.05] tracking-[-0.025em]" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease-out 100ms' }}>
              {t('cta.headlineA')} <span className="text-fa-orange-soda">{t('cta.headlineHighlight')}</span>{t('cta.headlineB')}
            </h2>

            <p className="font-body mt-6 text-base text-fa-classic-chalk/65 max-w-[500px] leading-[1.6]" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 500ms ease-out 200ms' }}>
              {t('cta.body')}
            </p>

            {/* Clear contact CTA (brand review: link to contact page instead of listing details) */}
            <div className="mt-10" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 500ms ease-out 300ms' }}>
              <BrandButton href="/contact">{isAr ? 'تواصل معنا' : 'Contact us'}</BrandButton>
              <div className="flex items-center gap-2 mt-6 text-[11px] text-fa-orange-soda font-semibold uppercase tracking-wider font-body">
                <span className="w-1.5 h-1.5 rounded-full bg-fa-orange-soda animate-pulse" />
                {isAr ? 'الرد خلال يوم عمل واحد' : 'Reply within one business day'}
              </div>
            </div>
          </div>

          {/* RIGHT — Contact Form Card */}
          <div style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(30px)', transition: 'all 600ms ease-out 250ms' }}>
            <div 
              className="rounded-2xl p-6 sm:p-8 md:p-10 text-fa-classic-chalk relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.03)',
                backdropFilter: 'blur(20px)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.3), inset 0 0 0 1px rgba(255,255,255,0.08)',
              }}
            >
              <QuoteForm dark />
            </div>
          </div>

        </div>
      </div>
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 350ms cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
      `}</style>
    </section>
  );
}
