import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import MagneticButton from '../components/brand/MagneticButton';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { getService } from '../i18n/services';
import usePageMeta from '../hooks/usePageMeta';

/**
 * Dedicated landing page for a single service (/solutions/<slug>).
 * Content comes from i18n/services.ts; meta + Service/FAQPage/Breadcrumb
 * schema derive from the same data so nothing drifts.
 */
export default function ServicePage() {
  const { slug = '' } = useParams();
  const { locale } = useT();
  const isAr = locale === 'ar';
  const svc = getService(slug);

  usePageMeta(
    svc ? svc.meta.ar : { title: 'فاست أكسس', desc: '' },
    svc ? svc.meta.en : { title: 'Fast Access', desc: '' },
  );

  useEffect(() => {
    if (!svc) return;
    const url = `https://faccess.co/solutions/${svc.slug}`;
    const faqs = isAr ? svc.faqs.ar : svc.faqs.en;
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: isAr ? svc.h1.ar : svc.h1.en,
        description: isAr ? svc.meta.ar.desc : svc.meta.en.desc,
        url,
        areaServed: 'SA',
        provider: { '@type': 'Organization', name: 'فاست أكسس', alternateName: 'Fast Access', url: 'https://faccess.co/' },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: isAr ? 'الرئيسية' : 'Home', item: 'https://faccess.co/' },
          { '@type': 'ListItem', position: 2, name: isAr ? 'الحلول' : 'Solutions', item: 'https://faccess.co/solutions' },
          { '@type': 'ListItem', position: 3, name: isAr ? svc.chip.ar : svc.chip.en, item: url },
        ],
      },
    ];
    const tags = schemas.map((s) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-service-schema', '1');
      el.text = JSON.stringify(s);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, [svc, isAr]);

  if (!svc) return <Navigate to="/solutions" replace />;

  const F = isAr ? svc.features.ar : svc.features.en;
  const S = isAr ? svc.steps.ar : svc.steps.en;
  const Q = isAr ? svc.faqs.ar : svc.faqs.en;
  const Arrow = isAr ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader
        chip={isAr ? svc.chip.ar : svc.chip.en}
        title={isAr ? svc.h1.ar : svc.h1.en}
        sub={isAr ? svc.intro.ar : svc.intro.en}
      />

      {/* ── What the service includes ── */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'وش تشمل الخدمة' : 'What is included'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em] max-w-[720px]">
              {svc.featuresHeading
                ? (isAr ? svc.featuresHeading.ar : svc.featuresHeading.en)
                : (isAr ? 'كل تفصيلة مبنية على تشغيل حقيقي.' : 'Every detail built on real operations.')}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {F.map((f, i) => (
              <Reveal key={f.title} delay={i * 60} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow h-full p-7 lg:p-8 text-left rtl:text-right">
                  <h3 className="font-display text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{f.title}</h3>
                  <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">{f.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works + stats ── */}
      <section className="relative bg-fa-cream-deep section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'كيف تشتغل' : 'How it works'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[26px] sm:text-[34px] lg:text-[42px] text-fa-liberty-blue leading-[1.1] tracking-[-0.02em] max-w-[680px]">
              {isAr ? 'ثلاث خطوات، وبعدها خلّها علينا.' : 'Three steps, then leave it to us.'}
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {S.map((s, i) => (
              <Reveal key={s.title} delay={i * 90} className="h-full">
                <SpotlightCard className="fa-card h-full p-8 text-left rtl:text-right">
                  <span className="font-display text-[40px] font-bold text-fa-orange-soda/25 leading-none tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display mt-4 text-[19px] lg:text-[22px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{s.title}</h3>
                  <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.7]">{s.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {svc.stats.map((st, i) => (
              <Reveal key={st.value + i} delay={i * 70}>
                <div className="fa-card p-6 text-center">
                  <div className="font-display text-[26px] lg:text-[32px] font-bold text-fa-orange-soda tracking-[-0.02em]">{isAr ? st.value : (st.valueEn ?? st.value)}</div>
                  <div className="font-ui mt-1.5 text-[12.5px] font-semibold uppercase tracking-[0.06em] text-fa-ink-muted">{isAr ? st.ar : st.en}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQs ── */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10 max-w-[860px]">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'أسئلة شائعة' : 'FAQ'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[26px] sm:text-[32px] lg:text-[38px] text-fa-liberty-blue leading-[1.12] tracking-[-0.02em]">
              {isAr ? 'اللي يسأله التجار عن هذي الخدمة' : 'What merchants ask about this service'}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-4">
            {Q.map((f) => (
              <Reveal key={f.q}>
                <details className="fa-card group p-6 text-left rtl:text-right [&_summary::-webkit-details-marker]:hidden">
                  <summary className="font-display cursor-pointer list-none text-[16.5px] lg:text-[18px] font-bold text-fa-liberty-blue flex items-center justify-between gap-4">
                    {f.q}
                    <span className="text-fa-orange-soda transition-transform group-open:rotate-90"><Arrow size={18} /></span>
                  </summary>
                  <p className="font-body mt-4 text-[14.5px] lg:text-[15.5px] text-fa-ink-muted leading-[1.8]">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={60}>
            <p className="font-body mt-8 text-[14.5px] text-fa-ink-muted leading-[1.8]">
              {isAr ? 'تبي تتعمق أكثر؟ اقرأ: ' : 'Want to go deeper? Read: '}
              <Link to={`/blog/${svc.related.slug}`} className="font-semibold text-fa-orange-soda hover:underline">
                {isAr ? svc.related.ar : svc.related.en}
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative bg-fa-liberty-blue section-padding overflow-hidden">
        <div className="container-main relative z-10 text-center">
          <Reveal>
            <h2 className="font-display font-bold text-[26px] sm:text-[34px] lg:text-[42px] text-fa-classic-chalk leading-[1.1] tracking-[-0.02em] max-w-[720px] mx-auto">
              {isAr ? 'جاهز تخلّيها علينا؟' : 'Ready to leave it to us?'}
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="font-body mt-4 text-[15.5px] text-fa-classic-chalk/70 leading-[1.7] max-w-[560px] mx-auto">
              {isAr ? 'أرسل تفاصيل متجرك ونرجع لك بعرض سعر مفصل خلال يوم عمل.' : 'Send your store details and get a detailed quote within one business day.'}
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-8 flex justify-center">
              <MagneticButton variant="filled" href="/pricing">
                {isAr ? 'اطلب عرض سعر' : 'Request a quote'}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
