import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * /blog/fulfillment-cost-calculation — third article (bilingual).
 * Article + FAQPage JSON-LD scoped to this page, switching with locale.
 */

const META = {
  title: 'تكلفة التخزين والشحن للمتاجر: طريقة الحساب بالأرقام | فاست أكسس',
  desc:
    'كيف تحسب تكلفة التخزين والشحن لمتجرك الإلكتروني؟ شرح مكونات التسعير، التكاليف المخفية للتجهيز الذاتي، مثال عملي بالأرقام، ومعادلة تكلفة الطلب المكتمل.',
};

const META_EN = {
  title: 'Storage & Shipping Costs for E-commerce: How to Calculate Them, With Numbers | Fast Access',
  desc:
    'How do you calculate storage and shipping costs for your online store? A breakdown of pricing components, the hidden costs of self-fulfillment, a worked example with numbers, and the cost-per-completed-order formula.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'هل فيه رسوم تأسيس أو اشتراك عند البداية؟',
    a: 'يختلف من شركة لشركة. بعضها ياخذ رسوم تفعيل رمزية وبعضها يبدأ بدون أي رسوم مقدمة. المهم تسأل صراحة وتحسب أي رسوم بداية ضمن مقارنتك الإجمالية.',
  },
  {
    q: 'ليش ما تنشرون قائمة أسعار ثابتة؟',
    a: 'لأن التسعير العادل يعتمد على منتجاتك: حجمها، وزنها، عدد القطع بالطلب، وحجم طلباتك الشهري. قائمة موحدة بتظلم نص التجار — عرض السعر المخصص يعطيك رقم يعكس واقعك أنت.',
  },
  {
    q: 'متجري صغير (أقل من 300 طلب) — هل الفلفلمنت مكلف علي؟',
    a: 'احسبها بالمعادلة: لو تكلفتك الذاتية الحقيقية (بوقتك) أقل، كمّل ذاتي وارجع للحساب كل ما كبرت. كثير من التجار يتفاجأون أن الرقم أقرب مما توقعوا حتى بالأحجام الصغيرة.',
  },
  {
    q: 'هل أقدر أتفاوض على الأسعار؟',
    a: 'الشركات المحترفة تتعامل بشرائح واضحة حسب الحجم — والتفاوض الحقيقي يصير طبيعياً كل ما كبرت طلباتك. اطلب مراجعة الأسعار كل 6-12 شهر مع نموك.',
  },
  {
    q: 'كيف أعرف عرض سعر فاست أكسس لمتجري؟',
    a: 'تعبي نموذج طلب عرض السعر بأرقام متجرك (عدد الطلبات، نوع المنتجات) ويوصلك عرض مفصل خلال يوم عمل — بكل البنود معلنة وبدون رسوم مخفية.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Are there setup or subscription fees at the start?',
    a: 'It varies by company. Some charge a small activation fee; others start with no upfront fees at all. What matters is asking explicitly and counting any starting fees in your overall comparison.',
  },
  {
    q: 'Why don\u2019t you publish a fixed price list?',
    a: 'Because fair pricing depends on your products: their size, weight, items per order, and your monthly volume. A one-size list would shortchange half of all merchants — a custom quote gives you a number that reflects your reality.',
  },
  {
    q: 'My store is small (under 300 orders) — is fulfillment too expensive for me?',
    a: 'Run the formula: if your true self-fulfillment cost (including your time) is lower, keep doing it yourself and redo the math as you grow. Many merchants are surprised how close the number is even at small volumes.',
  },
  {
    q: 'Can I negotiate the prices?',
    a: 'Professional companies work with clear volume tiers — and real negotiation happens naturally as your orders grow. Ask for a pricing review every 6–12 months as you scale.',
  },
  {
    q: 'How do I get a Fast Access quote for my store?',
    a: 'Fill in the quote form with your store\u2019s numbers (order volume, product type) and a detailed quote lands within one business day — every line item declared, no hidden fees.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'تكلفة التخزين والشحن للمتاجر الإلكترونية: طريقة الحساب بالأرقام'
          : 'Storage & Shipping Costs for E-commerce Stores: How to Calculate Them, With Numbers',
        description: isAr ? META.desc : META_EN.desc,
        inLanguage: isAr ? 'ar' : 'en',
        datePublished: '2026-07-18',
        dateModified: '2026-07-18',
        image: 'https://faccess.co/assets/hero-bg.webp',
        // author: intentionally omitted for now — to be added later
        publisher: {
          '@type': 'Organization',
          name: 'Fast Access',
          alternateName: 'فاست أكسس',
          logo: { '@type': 'ImageObject', url: 'https://faccess.co/assets/logo-mark.png' },
        },
        mainEntityOfPage: 'https://faccess.co/blog/fulfillment-cost-calculation',
      },
      {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: (isAr ? FAQS : FAQS_EN).map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ];
    const tags = schemas.map((s) => {
      const el = document.createElement('script');
      el.type = 'application/ld+json';
      el.setAttribute('data-blog-schema', '1');
      el.text = JSON.stringify(s);
      document.head.appendChild(el);
      return el;
    });
    return () => tags.forEach((el) => el.remove());
  }, [isAr]);
}

const h2 = 'font-display mt-12 text-[24px] lg:text-[30px] font-bold text-fa-liberty-blue leading-[1.2]';
const p = 'font-body mt-4 text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const li = 'font-body text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const thEn = 'bg-fa-liberty-blue text-fa-classic-chalk font-display text-[13.5px] font-semibold p-3 text-left';
const th = 'bg-fa-liberty-blue text-fa-classic-chalk font-display text-[13.5px] font-semibold p-3 text-right';
const td = 'font-body text-[14px] text-fa-ink-muted p-3 align-top border-b border-fa-liberty-blue/10 leading-[1.7]';
const tdHead = 'font-body text-[14px] font-bold text-fa-liberty-blue p-3 align-top border-b border-fa-liberty-blue/10';
const tdSum = 'font-body text-[14px] font-bold text-fa-liberty-blue p-3 align-top border-b border-fa-liberty-blue/10 bg-fa-orange-soda/[0.06]';

export default function BlogArticle3() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta({ title: META.title, desc: META.desc }, { title: META_EN.title, desc: META_EN.desc });
  useArticleSchema(isAr);

  if (!isAr) return <ArticleEn />;

  return (
    <main dir="rtl" className="bg-fa-classic-chalk">
      <div className="bg-fa-liberty-blue pt-32 pb-14">
        <div className="container-main text-right">
          <Link to="/blog" className="font-ui text-[13px] font-semibold text-fa-orange-soda">
            ← المدونة
          </Link>
          <h1 className="font-display mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-fa-classic-chalk leading-[1.2] max-w-[880px]">
            تكلفة التخزين والشحن للمتاجر الإلكترونية: طريقة الحساب بالأرقام
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        {/* صندوق الإجابة المباشرة */}
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            تكلفة خدمة التخزين والشحن (الفلفلمنت) تتكون من ثلاثة بنود رئيسية: رسوم تخزين شهرية حسب المساحة
            أو عدد القطع، رسوم تجهيز ثابتة لكل طلب، ورسوم شحن حسب الوجهة والوزن. والمقياس الصحيح للمقارنة هو
            <strong> تكلفة الطلب المكتمل</strong>: مجموع ما تدفعه شهرياً مقسوماً على عدد طلباتك — مقارنةً
            بتكلفتك الحقيقية لو جهّزت بنفسك شاملة الإيجار والعمالة ووقتك.
          </p>
        </div>

        <p className={p}>
          «كم بتكلفين؟» — هذا أول سؤال يسأله أي تاجر يفكر يسلّم عملياته لشركة فلفلمنت، وهو سؤال صح بس أغلب
          التجار يحسبونه غلط: يقارنون رسوم شركة الفلفلمنت الظاهرة بتكلفتهم الحالية الظاهرة — وينسون إن نص
          تكلفتهم الحالية مخفية: إيجار، عمالة، تغليف، أخطاء، ووقتهم هم. في هذا المقال نفكك التسعير بند بند،
          ونحسب مثال كامل بالأرقام، ونعطيك المعادلة اللي تقارن فيها أي عرضين مقارنة عادلة.
        </p>

        <div className="mt-6 rounded-xl bg-fa-liberty-blue/[0.04] border border-fa-liberty-blue/10 p-5">
          <p className="font-body text-[15px] text-fa-ink-muted leading-[1.8] m-0">
            جديد على الموضوع؟ ابدأ بـ{' '}
            <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-bold underline underline-offset-4">
              ما هو الفلفلمنت؟
            </Link>{' '}
            ثم{' '}
            <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-bold underline underline-offset-4">
              كيف تختار شركة التخزين والشحن
            </Link>{' '}
            — وارجع لهنا للحسبة.
          </p>
        </div>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>التسعير القياسي = تخزين شهري + تجهيز لكل طلب + شحن لكل شحنة، وأي رسوم إضافية لازم تكون معلنة.</li>
          <li className={li}>تكلفة التجهيز الذاتي الحقيقية أعلى مما تحسبه — الإيجار والعمالة والأخطاء ووقتك كلها تكاليف.</li>
          <li className={li}>المقياس العادل الوحيد: تكلفة الطلب المكتمل، مو مقارنة بند ببند.</li>
          <li className={li}>الأرقام بالمقال أمثلة توضيحية للمنهجية — الأسعار الفعلية تختلف حسب منتجاتك وحجمك.</li>
          <li className={li}>من 300-500 طلب شهرياً وفوق، الفلفلمنت غالباً أوفر من التجهيز الذاتي بالتكلفة الكاملة.</li>
        </ul>

        <h2 className={h2}>مكونات التسعير الثلاثة: وش تدفع بالضبط؟</h2>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">1. رسوم التخزين</h3>
        <p className={p}>
          تُحسب شهرياً حسب المساحة المستخدمة (متر مكعب أو طبلية) أو عدد القطع. منتجاتك الصغيرة الخفيفة
          (إكسسوارات، عناية) تكلفتها التخزينية أقل بكثير من الكبيرة (أجهزة، أثاث). النقطة المهمة: التخزين
          الذكي يعني ما تدفع إلا على المساحة اللي تستخدمها فعلاً — بعكس المستودع المستأجر اللي تدفع إيجاره
          كامل حتى لو نصه فاضي.
        </p>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">2. رسوم التجهيز (Pick &amp; Pack)</h3>
        <p className={p}>
          مبلغ ثابت لكل طلب يغطي الالتقاط والتغليف والتسليم لشركة الشحن. يتأثر بعدد القطع في الطلب ونوع
          التغليف (عادي / مخصص بهوية علامتك / هدايا). هذا البند هو اللي يستبدل عمالة التجهيز عندك.
        </p>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">3. رسوم الشحن</h3>
        <p className={p}>
          حسب الوجهة والوزن وسرعة التوصيل (عادي / نفس اليوم / نقاط استلام). ميزة شركات الفلفلمنت هنا: أسعار
          شحن تفاوضية بحكم الحجم، غالباً أفضل من اللي تحصل عليه كتاجر منفرد.
        </p>

        <p className={p}>
          <strong>ورسوم إضافية محتملة تسأل عنها:</strong> استلام المخزون (Inbound)، معالجة المرتجعات، إعادة
          التغليف، وتخزين المواسم. الشركة الشفافة تعلنها كلها بعرض السعر — واللي «تكتشفها» لاحقاً بالفواتير
          علامة سيئة.
        </p>

        <h2 className={h2}>التكلفة المخفية للتجهيز الذاتي (اللي ما تحسبها)</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[520px]">
            <thead>
              <tr>
                <th className={th}>البند</th>
                <th className={th}>وش يشمل</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>إيجار المساحة</td><td className={td}>مستودع أو مكتب أو حتى غرفة ببيتك لها قيمة بديلة</td></tr>
              <tr><td className={tdHead}>العمالة</td><td className={td}>رواتب موظفي تجهيز، أو وقتك أنت (وهو أغلى بند عندك)</td></tr>
              <tr><td className={tdHead}>التغليف</td><td className={td}>كراتين، لواصق، مواد حماية — بالحبة تكلفتها أعلى من الجملة</td></tr>
              <tr><td className={tdHead}>الأخطاء</td><td className={td}>طلب غلط = شحن مرتين + استرجاع + عميل زعلان</td></tr>
              <tr><td className={tdHead}>الفرصة الضائعة</td><td className={td}>كل ساعة تجهيز هي ساعة ما اشتغلتها على التسويق والنمو</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          القاعدة: لو جمعت هذي البنود وقسمتها على طلباتك الشهرية بتحصل على تكلفتك الحقيقية للطلب — وهي
          غالباً أعلى مما تتوقع بـ30-60%.
        </p>

        <h2 className={h2}>مثال عملي بالأرقام: متجر 800 طلب شهرياً</h2>
        <p className={p}>(الأرقام أدناه توضيحية لشرح المنهجية، مو عرض سعر)</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>البند</th>
                <th className={th}>التجهيز الذاتي</th>
                <th className={th}>مع شركة فلفلمنت</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>الإيجار</td><td className={td}>4,000 ريال (مستودع صغير)</td><td className={td}>— (ضمن رسوم التخزين)</td></tr>
              <tr><td className={tdHead}>العمالة</td><td className={td}>6,000 ريال (موظفان جزئي)</td><td className={td}>— (ضمن رسوم التجهيز)</td></tr>
              <tr><td className={tdHead}>التغليف</td><td className={td}>1,600 ريال (2 ريال للطلب)</td><td className={td}>مشمول</td></tr>
              <tr><td className={tdHead}>رسوم تخزين</td><td className={td}>—</td><td className={td}>2,500 ريال</td></tr>
              <tr><td className={tdHead}>رسوم تجهيز</td><td className={td}>—</td><td className={td}>4,800 ريال (6 ريال للطلب)</td></tr>
              <tr><td className={tdHead}>الشحن</td><td className={td}>16,000 ريال (20 ريال متوسط)</td><td className={td}>13,600 ريال (17 ريال تفاوضي)</td></tr>
              <tr><td className={tdHead}>تكلفة الأخطاء (2% مقابل 0.3%)</td><td className={td}>640 ريال</td><td className={td}>96 ريال</td></tr>
              <tr><td className={tdSum}>المجموع الشهري</td><td className={tdSum}>28,240 ريال</td><td className={tdSum}>20,996 ريال</td></tr>
              <tr><td className={tdSum}>تكلفة الطلب المكتمل</td><td className={tdSum}>35.3 ريال</td><td className={tdSum}>26.2 ريال</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          النتيجة بهذا المثال: فرق 9 ريالات بالطلب = وفر يتجاوز <strong>7,000 ريال شهرياً</strong> — قبل ما
          نحسب قيمة وقتك اللي رجع لك.
        </p>

        <h2 className={h2}>معادلة تكلفة الطلب المكتمل (احفظها)</h2>
        <div className="mt-5 rounded-2xl bg-fa-liberty-blue p-6 lg:p-8 text-center">
          <p className="font-display text-[16px] lg:text-[19px] font-bold text-fa-classic-chalk leading-[1.9] m-0">
            تكلفة الطلب المكتمل = (رسوم التخزين + رسوم التجهيز + رسوم الشحن + أي رسوم أخرى) ÷ عدد الطلبات
            الشهرية
          </p>
        </div>
        <p className={p}>
          طبقها على أي عرض سعر يوصلك، وطبقها على تكلفتك الذاتية الحقيقية (شاملة المخفي) — وقارن الرقمين.
          هذي المقارنة الوحيدة العادلة.
        </p>

        <h2 className={h2}>ليش الأرقام تتحسن مع النمو؟</h2>
        <p className={p}>
          كل ما زادت طلباتك انخفضت تكلفة الطلب: رسوم التخزين تتوزع على طلبات أكثر، وشركات الفلفلمنت تعطي
          شرائح أسعار أفضل للأحجام الأكبر، وقوة الشحن التفاوضية تزيد. عشان كذا التاجر اللي يكبر مع شريك
          فلفلمنت تكلفته تنزل تدريجياً — بينما اللي يجهز ذاتياً تكاليفه تقفز كل ما احتاج موظف جديد أو مساحة
          أكبر (تكاليف سُلّمية مو خطية).
        </p>

        <h2 className={h2}>أسئلة تطرحها على أي عرض سعر</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>هل الأسعار شاملة كل شيء ولا فيه رسوم إضافية؟ (اطلبها مكتوبة)</li>
          <li className={li}>وش يصير برسوم التخزين لو نزل مخزوني أو ارتفع؟</li>
          <li className={li}>هل فيه حد أدنى شهري ملزم؟</li>
          <li className={li}>كم رسوم معالجة المرتجع؟ ورسوم استلام المخزون؟</li>
          <li className={li}>هل أسعار الشحن ثابتة بالعقد ولا تتغير؟</li>
        </ul>

        <h2 className={h2}>الأسئلة الشائعة</h2>
        <div className="mt-5 space-y-6">
          {FAQS.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-[17px] font-bold text-fa-liberty-blue">{f.q}</h3>
              <p className="font-body mt-2 text-[15.5px] text-fa-ink-muted leading-[1.85]">{f.a}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl bg-fa-liberty-blue p-8 lg:p-10 text-center">
          <h2 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-classic-chalk m-0">
            جاهز تعرف رقمك الحقيقي؟
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            خذ المعادلة اللي فوق، وعبّي نموذج عرض السعر بأرقام متجرك — يوصلك عرض مفصل بكل البنود خلال يوم
            عمل. قارن بنفسك، وخلّها علينا.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-brand btn-brand--filled btn-brand--accent">
              <span className="btn-brand__label">اطلب عرض السعر</span>
            </Link>
            <a href="https://wa.me/966920032768" target="_blank" rel="noopener noreferrer" className="btn-brand btn-brand--outline">
              <span className="btn-brand__label">تواصل واتساب</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}

/* ─────────────────────── English version ─────────────────────── */
function ArticleEn() {
  return (
    <main dir="ltr" className="bg-fa-classic-chalk">
      <div className="bg-fa-liberty-blue pt-32 pb-14">
        <div className="container-main text-left">
          <Link to="/blog" className="font-ui text-[13px] font-semibold text-fa-orange-soda">
            ← Blog
          </Link>
          <h1 className="font-display mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-fa-classic-chalk leading-[1.2] max-w-[880px]">
            Storage &amp; Shipping Costs for E-commerce Stores: How to Calculate Them, With Numbers
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Fulfillment (storage &amp; shipping) pricing is built from three main components: monthly
            storage fees based on space or unit count, a flat pick-&amp;-pack fee per order, and shipping
            fees by destination and weight. The right yardstick for comparison is{' '}
            <strong>cost per completed order</strong>: everything you pay per month divided by your order
            count — measured against your true self-fulfillment cost including rent, labor and your own
            time.
          </p>
        </div>

        <p className={p}>
          "How much will it cost me?" — the first question every merchant asks when considering handing
          operations to a fulfillment company. It's the right question, but most merchants calculate it
          wrong: they compare the fulfillment company's visible fees against their own visible costs — and
          forget that half their current cost is hidden: rent, labor, packaging, errors, and their own
          time. In this article we break pricing down line by line, work a full example with numbers, and
          give you the formula for comparing any two offers fairly.
        </p>

        <div className="mt-6 rounded-xl bg-fa-liberty-blue/[0.04] border border-fa-liberty-blue/10 p-5">
          <p className="font-body text-[15px] text-fa-ink-muted leading-[1.8] m-0">
            New to the topic? Start with{' '}
            <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-bold underline underline-offset-4">
              What Is Fulfillment?
            </Link>{' '}
            then{' '}
            <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-bold underline underline-offset-4">
              How to Choose a Storage &amp; Shipping Company
            </Link>{' '}
            — and come back here for the math.
          </p>
        </div>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Standard pricing = monthly storage + per-order prep + per-shipment shipping, with any extra fees declared upfront.</li>
          <li className={li}>Your true self-fulfillment cost is higher than you think — rent, labor, errors and your time are all costs.</li>
          <li className={li}>The only fair yardstick: cost per completed order, not line-by-line comparison.</li>
          <li className={li}>The numbers in this article are illustrative of the method — actual prices depend on your products and volume.</li>
          <li className={li}>From roughly 300–500 orders a month upward, fulfillment usually beats self-fulfillment on full cost.</li>
        </ul>

        <h2 className={h2}>The three pricing components: what exactly do you pay?</h2>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">1. Storage fees</h3>
        <p className={p}>
          Charged monthly by the space you use (cubic meter or pallet) or by unit count. Small, light
          products (accessories, skincare) cost far less to store than bulky ones (appliances, furniture).
          The key point: smart storage means paying only for the space you actually use — unlike a rented
          warehouse where you pay full rent even when half of it sits empty.
        </p>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">2. Pick &amp; pack fees</h3>
        <p className={p}>
          A flat fee per order covering picking, packing and courier handover. It varies with items per
          order and packaging type (standard / branded / gift). This is the line that replaces your prep
          labor.
        </p>

        <h3 className="font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue">3. Shipping fees</h3>
        <p className={p}>
          By destination, weight and delivery speed (standard / same-day / pickup points). The fulfillment
          advantage here: negotiated shipping rates by virtue of volume — usually better than what you'd
          get as a lone merchant.
        </p>

        <p className={p}>
          <strong>And possible extras to ask about:</strong> inbound receiving, returns processing,
          repackaging, and seasonal storage. A transparent company declares them all in the quote — one you
          "discover" later on invoices is a bad sign.
        </p>

        <h2 className={h2}>The hidden cost of self-fulfillment (the part you don't count)</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[520px]">
            <thead>
              <tr>
                <th className={thEn}>Item</th>
                <th className={thEn}>What it includes</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Space rent</td><td className={td}>A warehouse, office, or even a room at home — all have an opportunity value</td></tr>
              <tr><td className={tdHead}>Labor</td><td className={td}>Prep staff salaries — or your own time (your most expensive line)</td></tr>
              <tr><td className={tdHead}>Packaging</td><td className={td}>Boxes, labels, protective materials — retail quantities cost more than wholesale</td></tr>
              <tr><td className={tdHead}>Errors</td><td className={td}>A wrong order = double shipping + a return + an upset customer</td></tr>
              <tr><td className={tdHead}>Opportunity cost</td><td className={td}>Every packing hour is an hour not spent on marketing and growth</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          The rule: add these up and divide by your monthly orders to get your true cost per order — it's
          usually 30–60% higher than you expected.
        </p>

        <h2 className={h2}>A worked example: a store with 800 orders a month</h2>
        <p className={p}>(The figures below are illustrative of the method, not a price quote)</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Item</th>
                <th className={thEn}>Self-fulfillment</th>
                <th className={thEn}>With a fulfillment company</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Rent</td><td className={td}>SAR 4,000 (small warehouse)</td><td className={td}>— (within storage fees)</td></tr>
              <tr><td className={tdHead}>Labor</td><td className={td}>SAR 6,000 (two part-time staff)</td><td className={td}>— (within prep fees)</td></tr>
              <tr><td className={tdHead}>Packaging</td><td className={td}>SAR 1,600 (SAR 2 per order)</td><td className={td}>Included</td></tr>
              <tr><td className={tdHead}>Storage fees</td><td className={td}>—</td><td className={td}>SAR 2,500</td></tr>
              <tr><td className={tdHead}>Pick &amp; pack fees</td><td className={td}>—</td><td className={td}>SAR 4,800 (SAR 6 per order)</td></tr>
              <tr><td className={tdHead}>Shipping</td><td className={td}>SAR 16,000 (SAR 20 average)</td><td className={td}>SAR 13,600 (SAR 17 negotiated)</td></tr>
              <tr><td className={tdHead}>Error cost (2% vs 0.3%)</td><td className={td}>SAR 640</td><td className={td}>SAR 96</td></tr>
              <tr><td className={tdSum}>Monthly total</td><td className={tdSum}>SAR 28,240</td><td className={tdSum}>SAR 20,996</td></tr>
              <tr><td className={tdSum}>Cost per completed order</td><td className={tdSum}>SAR 35.3</td><td className={tdSum}>SAR 26.2</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          The result in this example: a SAR 9 difference per order = savings of over{' '}
          <strong>SAR 7,000 a month</strong> — before counting the value of the time you got back.
        </p>

        <h2 className={h2}>The cost-per-completed-order formula (memorize it)</h2>
        <div className="mt-5 rounded-2xl bg-fa-liberty-blue p-6 lg:p-8 text-center">
          <p className="font-display text-[16px] lg:text-[19px] font-bold text-fa-classic-chalk leading-[1.9] m-0">
            Cost per completed order = (storage fees + prep fees + shipping fees + any other fees) ÷
            monthly order count
          </p>
        </div>
        <p className={p}>
          Apply it to any quote you receive, and apply it to your true self-fulfillment cost (hidden items
          included) — then compare the two numbers. That's the only fair comparison.
        </p>

        <h2 className={h2}>Why do the numbers improve as you grow?</h2>
        <p className={p}>
          The more orders you have, the lower your cost per order: storage fees spread across more orders,
          fulfillment companies offer better tiers at higher volumes, and shipping leverage grows. That's
          why a merchant growing with a fulfillment partner sees costs decline gradually — while a
          self-fulfilling merchant's costs jump every time they need another employee or more space
          (stepwise, not linear).
        </p>

        <h2 className={h2}>Questions to put to any quote</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Are the prices all-inclusive, or are there extra fees? (Get it in writing.)</li>
          <li className={li}>What happens to storage fees if my inventory shrinks or grows?</li>
          <li className={li}>Is there a binding monthly minimum?</li>
          <li className={li}>What are the returns-processing and inbound-receiving fees?</li>
          <li className={li}>Are shipping rates fixed in the contract, or can they change?</li>
        </ul>

        <h2 className={h2}>FAQs</h2>
        <div className="mt-5 space-y-6">
          {FAQS_EN.map((f) => (
            <div key={f.q}>
              <h3 className="font-display text-[17px] font-bold text-fa-liberty-blue">{f.q}</h3>
              <p className="font-body mt-2 text-[15.5px] text-fa-ink-muted leading-[1.85]">{f.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl bg-fa-liberty-blue p-8 lg:p-10 text-center">
          <h2 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-classic-chalk m-0">
            Ready to know your real number?
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Take the formula above and fill in the quote form with your store's numbers — a detailed,
            fully-itemized quote lands within one business day. Compare for yourself, and leave it to us.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-brand btn-brand--filled btn-brand--accent">
              <span className="btn-brand__label">Request a quote</span>
            </Link>
            <a href="https://wa.me/966920032768" target="_blank" rel="noopener noreferrer" className="btn-brand btn-brand--outline">
              <span className="btn-brand__label">WhatsApp us</span>
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
