import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** /blog — article listing (SEO Phase 1: one article). */
export default function Blog() {
  const { locale } = useT();
  const isAr = locale === 'ar';

  usePageMeta(
    {
      title: 'مدونة فاست أكسس — أدلة الفلفلمنت واللوجستيات للمتاجر الإلكترونية',
      desc: 'أدلة عملية بالعربي عن الفلفلمنت، التخزين، تجهيز الطلبات، والشحن للمتاجر الإلكترونية في السعودية — من فريق فاست أكسس.',
    },
    {
      title: 'Fast Access Blog — Fulfillment & Logistics Guides for E-commerce',
      desc: 'Practical guides on fulfillment, storage, order prep and shipping for e-commerce stores in Saudi Arabia — from the Fast Access team.',
    },
  );

  return (
    <main className="bg-fa-classic-chalk min-h-screen">
      <div className="bg-fa-liberty-blue pt-32 pb-14">
        <div className="container-main text-left rtl:text-right">
          <h1 className="font-display text-[32px] sm:text-[42px] font-bold text-fa-classic-chalk leading-[1.15]">
            {isAr ? 'المدونة' : 'Blog'}
          </h1>
          <p className="font-body mt-4 text-[15px] lg:text-base text-fa-classic-chalk/70 max-w-[560px] leading-[1.7]">
            {isAr
              ? 'أدلة عملية عن الفلفلمنت واللوجستيات — مكتوبة لتجّار السعودية.'
              : 'Practical fulfillment and logistics guides — written for Saudi merchants.'}
          </p>
        </div>
      </div>

      <div className="container-main py-14 space-y-6">
        <Link
          to="/blog/how-to-choose-fulfillment-company"
          className="fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 text-right"
          dir="rtl"
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل عملي' : 'Practical guide'} · 18 يوليو 2026
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            12 معيار أساسي تقيّم فيها أي شركة فلفلمنت، الأسئلة اللي تطرحها قبل التعاقد، جدول تقييم جاهز
            للطباعة، وعلامات حمراء تحذّرك من الشركة الغلط.
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
        <Link
          to="/blog/what-is-fulfillment"
          className="fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 text-right"
          dir="rtl"
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل شامل' : 'Complete guide'} · 18 يوليو 2026
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            ما هو الفلفلمنت؟ الدليل الشامل للمتاجر الإلكترونية في السعودية (2026)
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            كيف يشتغل الفلفلمنت خطوة بخطوة، وش الفرق بينه وبين الشحن التقليدي والـ 3PL، كم يكلف في السوق
            السعودي، ومتى يكون القرار الصح لمتجرك.
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
      </div>
    </main>
  );
}
