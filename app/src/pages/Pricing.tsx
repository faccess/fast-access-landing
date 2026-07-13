import { Helmet } from 'react-helmet-async';
import { Boxes, PackageCheck, Truck, MapPin, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Calculator from '../sections/Calculator';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import RevealText from '../components/brand/RevealText';
import MagneticButton from '../components/brand/MagneticButton';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

export default function Pricing() {
  const { t, locale } = useT();
  const isAr = locale === 'ar';

  // What actually moves the price — pricing-page specific
  const drivers = [
    { icon: Boxes, title: isAr ? 'حجم التخزين' : 'Storage footprint', body: isAr ? 'المساحة اللي تشغلها بضاعتك ومدة بقائها عندنا، تدفع على المستخدم فعلاً.' : 'The space your stock occupies and how long it sits on the shelf.' },
    { icon: PackageCheck, title: isAr ? 'عدد الطلبات' : 'Order volume', body: isAr ? 'كم طلب نجهّز ونغلّف شهريًا، وكل ما زاد العدد انخفض سعر الطلب الواحد.' : 'How many orders we pick & pack monthly — more volume, lower per-unit rate.' },
    { icon: Truck, title: isAr ? 'وزن ووجهة الشحن' : 'Weight & destination', body: isAr ? 'وزن الطرد ووجهته يحددان تكلفة الشحن الحقيقية، بدون متوسطات مضخمة.' : 'Parcel weight and distance set the real shipping cost.' },
    { icon: MapPin, title: isAr ? 'سرعة التوصيل' : 'Delivery speed', body: isAr ? 'قياسي، أو بنفس اليوم من المخازن السحابية، أنت تختار لكل شريحة من طلباتك.' : 'Standard, or same-day from a cloud store.' },
  ];

  const included = [
    isAr ? 'استلام وفحص البضاعة' : 'Inbound receiving & inspection',
    isAr ? 'تكامل المتجر والطلبات' : 'Store & order integration',
    isAr ? 'لوحة تتبع لحظية' : 'Live tracking dashboard',
    isAr ? 'تغليف بهوية علامتك' : 'Branded packaging',
    isAr ? 'إدارة المرتجعات' : 'Returns handling',
    isAr ? 'دعم تشغيلي 24/7' : '24/7 operations support',
  ];

  const faqs = [
    { q: isAr ? 'هل فيه عقد طويل أو حد أدنى؟' : 'Is there a long contract or minimum?', a: isAr ? 'لا. تدفع على اللي تشحنه فعلاً، وتكبر أو تصغّر براحتك.' : 'No. You pay for what you actually ship, and scale up or down freely.' },
    { q: isAr ? 'فيه رسوم تأسيس أو إعداد؟' : 'Are there setup fees?', a: isAr ? 'أبدًا. الإعداد والربط مجاني بالكامل، والفوترة تبدأ من أول طلب نجهزه لك.' : 'None. Onboarding and integration are completely free — billing starts with your first fulfilled order.' },
    { q: isAr ? 'متى يوصلني عرض السعر؟' : 'How fast do I get a quote?', a: isAr ? 'خلال يوم عمل واحد من مشاركتك تفاصيل شحنك.' : 'Within one business day of sharing your shipping profile.' },
    { q: isAr ? 'ليش ما تنشرون أسعار ثابتة؟' : 'Why not publish fixed prices?', a: isAr ? 'لأن تكلفة شحن عطر 200 جرام للرياض تختلف جذريًا عن أثاث 15 كيلو لأبها. السعر الثابت يعني إن أحد يدفع زيادة، وغالبًا أنت.' : 'Because shipping a 200g perfume to Riyadh costs radically less than 15kg of furniture to Abha. A fixed price means someone overpays — usually you.' },
  ];

  return (
    <>
      <Helmet>
        <title>Pricing — Fast Access</title>
        <meta name="description" content="No tiers, no hidden fees — pricing built around what you actually ship. See what drives the price, what's included, and get an exact quote in one business day." />
      </Helmet>
      <PageHeader
        chip={t('pricing.chip')}
        title={isAr ? (<><span className="text-fa-orange-soda">كيف نسعّر؟</span> ببساطة... على قدّ شغلك.</>) : t('pages.pricing.title')}
        sub={t('pages.pricing.sub')}
        bg="/assets/hero-pricing.webp"
      />

      <Calculator />

      {/* What drives the price */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'كيف نحسب السعر' : 'How we price'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[46px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em] max-w-[720px]">
              <RevealText accent={isAr ? 'أربعة عوامل' : 'four factors'} stagger={45}>
                {isAr ? 'أربعة عوامل. عرض سعر واحد شفاف.' : 'Four factors. One transparent quote.'}
              </RevealText>
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {drivers.map((d, i) => (
              <Reveal key={d.title} delay={i * 80} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow group h-full p-7 text-left rtl:text-right">
                  <span className="fa-iconchip"><d.icon size={22} strokeWidth={1.8} /></span>
                  <h3 className="font-display mt-5 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{d.title}</h3>
                  <p className="font-body mt-2.5 text-[14px] text-fa-ink-muted leading-[1.65]">{d.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="relative bg-fa-liberty-blue section-padding overflow-hidden">
        <div className="container-main relative z-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div>
            <Reveal className="mb-4"><SectionChip onDark>{isAr ? 'بدون رسوم خفية' : 'No hidden fees'}</SectionChip></Reveal>
            <Reveal delay={80}>
              <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-fa-classic-chalk leading-[1.1] tracking-[-0.02em] max-w-[520px]">
                {isAr ? 'كل خطة تشمل هذه الأساسيات، لا مفاجآت في الفاتورة.' : 'Every plan includes these essentials.'}
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="font-body mt-5 text-base text-fa-classic-chalk/60 max-w-[460px] leading-[1.65]">
                {isAr ? 'لا مفاجآت في الفاتورة. ما تراه في عرض السعر هو ما تدفعه.' : 'No billing surprises. What you see in the quote is what you pay.'}
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="grid sm:grid-cols-2 gap-3">
              {included.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-fa-classic-chalk/12 bg-fa-classic-chalk/[0.04] px-4 py-3.5">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-fa-orange-soda/15 text-fa-orange-soda">
                    <Check size={14} strokeWidth={3} />
                  </span>
                  <span className="font-body text-[14px] text-fa-classic-chalk/85">{item}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pricing FAQ + CTA */}
      <section className="relative bg-fa-cream-deep section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'أسئلة التسعير' : 'Pricing questions'}</SectionChip></Reveal>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start mt-2">
            <div className="space-y-4">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 80}>
                  <div className="rounded-2xl border border-fa-liberty-blue/10 bg-white/60 p-6">
                    <h3 className="font-display text-[18px] font-bold text-fa-liberty-blue tracking-[-0.01em]">{f.q}</h3>
                    <p className="font-body mt-2 text-[14px] text-fa-ink-muted leading-[1.65]">{f.a}</p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={120}>
              <SpotlightCard className="fa-card fa-card--glow p-8 lg:p-10 text-left rtl:text-right">
                <h3 className="font-display text-[24px] lg:text-[30px] font-bold text-fa-liberty-blue leading-[1.15] tracking-[-0.02em]">
                  {isAr ? 'أرقامك جاهزة؟ عرضك جاهز.' : 'Get an exact quote within one business day.'}
                </h3>
                <p className="font-body mt-4 text-[15px] text-fa-ink-muted leading-[1.7]">
                  {isAr ? 'شاركنا تفاصيل شحنك، ونرد عليك بخطة مفصّلة على أرقامك أنت، خلال يوم عمل واحد.' : 'Share your shipping profile and we’ll come back with a detailed plan built on your real numbers.'}
                </p>
                <div className="mt-8">
                  <MagneticButton variant="filled" href="/contact">
                    {isAr ? 'اطلب عرض السعر' : 'Request a quote'}
                  </MagneticButton>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
