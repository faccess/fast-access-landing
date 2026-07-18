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
          to="/blog/returns-management-ecommerce"
          className={`fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 ${isAr ? 'text-right' : 'text-left'}`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل تشغيلي · 18 يوليو 2026' : 'Operations guide · July 18, 2026'}
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            {isAr
              ? 'إدارة المرتجعات للمتاجر الإلكترونية: من صداع يومي إلى ولاء عملاء'
              : 'Returns Management: From Daily Headache to Customer Loyalty'}
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            {isAr
              ? 'أسباب الإرجاع وعلاجها من المصدر، بناء سياسة إرجاع تبيع، رحلة المرتجع بأربع محطات، والمؤشرات الأربعة اللي تحطك بالسيطرة.'
              : 'Return causes and their cures at the source, a return policy that sells, the four-station returns journey, and the four metrics that keep you in control.'}
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
        <Link
          to="/blog/fulfillment-cost-calculation"
          className={`fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 ${isAr ? 'text-right' : 'text-left'}`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل بالأرقام · 18 يوليو 2026' : 'Numbers guide · July 18, 2026'}
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            {isAr
              ? 'تكلفة التخزين والشحن للمتاجر الإلكترونية: طريقة الحساب بالأرقام'
              : 'Storage & Shipping Costs: How to Calculate Them, With Numbers'}
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            {isAr
              ? 'مكونات التسعير الثلاثة، التكاليف المخفية للتجهيز الذاتي، مثال عملي كامل بالأرقام، ومعادلة تكلفة الطلب المكتمل اللي تقارن فيها أي عرضين.'
              : 'The three pricing components, the hidden costs of self-fulfillment, a full worked example, and the cost-per-completed-order formula for comparing any two offers.'}
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
        <Link
          to="/blog/how-to-choose-fulfillment-company"
          className={`fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 ${isAr ? 'text-right' : 'text-left'}`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل عملي · 18 يوليو 2026' : 'Practical guide · July 18, 2026'}
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            {isAr
              ? 'كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع'
              : 'How to Choose a Storage & Shipping Company: 12 Criteria Before You Sign'}
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            {isAr
              ? '12 معيار أساسي تقيّم فيها أي شركة فلفلمنت، الأسئلة اللي تطرحها قبل التعاقد، جدول تقييم جاهز للطباعة، وعلامات حمراء تحذّرك من الشركة الغلط.'
              : '12 essential criteria to evaluate any fulfillment company, the questions to ask before signing, a printable evaluation table, and red flags that warn you off the wrong one.'}
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
        <Link
          to="/blog/what-is-fulfillment"
          className={`fa-card fa-card--glow group block max-w-[680px] overflow-hidden p-7 lg:p-8 ${isAr ? 'text-right' : 'text-left'}`}
          dir={isAr ? 'rtl' : 'ltr'}
        >
          <div className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">
            {isAr ? 'دليل شامل · 18 يوليو 2026' : 'Complete guide · July 18, 2026'}
          </div>
          <h2 className="font-display mt-3 text-[21px] lg:text-[25px] font-bold text-fa-liberty-blue leading-[1.3] group-hover:text-fa-orange-soda transition-colors duration-200">
            {isAr
              ? 'ما هو الفلفلمنت؟ الدليل الشامل للمتاجر الإلكترونية في السعودية (2026)'
              : 'What Is Fulfillment? The Complete E-commerce Guide for Saudi Arabia (2026)'}
          </h2>
          <p className="font-body mt-3 text-[14.5px] text-fa-ink-muted leading-[1.75]">
            {isAr
              ? 'كيف يشتغل الفلفلمنت خطوة بخطوة، وش الفرق بينه وبين الشحن التقليدي والـ 3PL، كم يكلف في السوق السعودي، ومتى يكون القرار الصح لمتجرك.'
              : 'How fulfillment works step by step, how it differs from couriers and 3PL, what it costs in the Saudi market, and when it becomes the right call for your store.'}
          </p>
          <span className="font-ui mt-5 inline-block text-[13px] font-semibold text-fa-orange-soda">
            {isAr ? 'اقرأ المقال ←' : 'Read the article →'}
          </span>
        </Link>
      </div>
    </main>
  );
}
