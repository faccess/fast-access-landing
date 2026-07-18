import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * /blog/what-is-fulfillment — first blog article (SEO Phase 1).
 * Content is the literal Arabic source document; rendered RTL in both locales.
 * Injects Article + FAQPage JSON-LD scoped to this page only.
 */

const META = {
  title: 'ما هو الفلفلمنت؟ دليل المتاجر الإلكترونية الشامل (2026) | فاست أكسس',
  desc:
    'ما هو الفلفلمنت وكيف يشتغل؟ دليل شامل يشرح خدمات التخزين والتجهيز والشحن للمتاجر الإلكترونية في السعودية، الفرق بين الفلفلمنت والـ 3PL، التكلفة، ومتى يحتاجه متجرك.',
};

const META_EN = {
  title: 'What Is Fulfillment? The Complete E-commerce Guide (2026) | Fast Access',
  desc:
    'What is fulfillment and how does it work? A complete guide to storage, order prep and shipping services for e-commerce stores in Saudi Arabia — fulfillment vs 3PL, costs, and when your store needs it.',
};

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Is fulfillment right for small stores?',
    a: 'Yes — if your order volume justifies the cost. From around 300 orders a month the math usually tips in favor of fulfillment. Below that, run the numbers: your time + rent + packing errors versus the service fees.',
  },
  {
    q: 'Do I lose control of my inventory if I hand it to a fulfillment company?',
    a: 'The opposite — you see your stock with more precision. Inventory systems give you live numbers for every SKU: available, reserved and returned quantities, with alerts before anything runs out.',
  },
  {
    q: 'Can my customer tell the shipment didn’t come from me?',
    a: 'No. Packaging is fully white-label with your brand — your box, your sticker, your card. The customer’s experience is with your brand from start to finish.',
  },
  {
    q: 'How does my Salla or Zid store connect to the fulfillment company?',
    a: 'Through a ready-made app you install from your platform’s app store in minutes. Once connected, every new order flows automatically into the warehouse system with no manual entry.',
  },
  {
    q: 'What’s the difference between fulfillment and dropshipping?',
    a: 'In dropshipping you never own the inventory — the supplier ships directly to the customer. In fulfillment the goods and the brand are yours, and the company manages them on your behalf, giving you full control over quality, packaging and experience.',
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'هل الفلفلمنت مناسب للمتاجر الصغيرة؟',
    a: 'نعم إذا كان حجم طلباتك يبرر التكلفة — عادة من 300 طلب شهرياً وفوق تبدأ المعادلة تميل لصالح الفلفلمنت. تحت هذا الرقم، احسبها: قيمة وقتك + الإيجار + أخطاء التجهيز مقابل رسوم الخدمة.',
  },
  {
    q: 'هل أفقد السيطرة على مخزوني إذا سلمته لشركة فلفلمنت؟',
    a: 'العكس — تشوف مخزونك بدقة أعلى. أنظمة إدارة المخزون تعطيك أرقام لحظية لكل SKU: الكمية المتوفرة، المحجوزة، والمرتجعة، مع تنبيهات قبل نفاد أي منتج.',
  },
  {
    q: 'هل يقدر العميل يعرف إن الشحنة ما طلعت من عندي؟',
    a: 'لا. التغليف يكون بهوية علامتك التجارية بالكامل (White Label) — كرتونك، ستيكرك، وبطاقتك. تجربة العميل تكون مع براندك من أوله لآخره.',
  },
  {
    q: 'كيف يرتبط متجري على سلة أو زد بشركة الفلفلمنت؟',
    a: 'عبر تطبيق جاهز تثبّته من متجر تطبيقات المنصة بدقايق. بعد الربط، كل طلب جديد ينسحب تلقائياً لنظام المستودع بدون أي إدخال يدوي.',
  },
  {
    q: 'وش الفرق بين الفلفلمنت والدروبشيبينغ؟',
    a: 'في الدروبشيبينغ أنت ما تملك المخزون أصلاً — المورد يشحن مباشرة للعميل. في الفلفلمنت البضاعة بضاعتك وعلامتك، والشركة تديرها نيابة عنك. الفلفلمنت يعطيك تحكم كامل بالجودة والتغليف والتجربة.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'ما هو الفلفلمنت؟ الدليل الشامل للمتاجر الإلكترونية في السعودية (2026)'
          : 'What Is Fulfillment? The Complete Guide for E-commerce Stores in Saudi Arabia (2026)',
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
        mainEntityOfPage: 'https://faccess.co/blog/what-is-fulfillment',
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
const h3 = 'font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue';
const p = 'font-body mt-4 text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const li = 'font-body text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const thEn = 'bg-fa-liberty-blue text-fa-classic-chalk font-display text-[13.5px] font-semibold p-3 text-left';
const th = 'bg-fa-liberty-blue text-fa-classic-chalk font-display text-[13.5px] font-semibold p-3 text-right';
const td = 'font-body text-[14px] text-fa-ink-muted p-3 align-top border-b border-fa-liberty-blue/10 leading-[1.7]';
const tdHead = 'font-body text-[14px] font-bold text-fa-liberty-blue p-3 align-top border-b border-fa-liberty-blue/10';

export default function BlogArticle() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta({ title: META.title, desc: META.desc }, { title: META_EN.title, desc: META_EN.desc });
  useArticleSchema(isAr);

  if (!isAr) return <ArticleEn />;

  return (
    <main dir="rtl" className="bg-fa-classic-chalk">
      {/* header band */}
      <div className="bg-fa-liberty-blue pt-32 pb-14">
        <div className="container-main text-right">
          <Link to="/blog" className="font-ui text-[13px] font-semibold text-fa-orange-soda">
            ← المدونة
          </Link>
          <h1 className="font-display mt-4 text-[28px] sm:text-[36px] lg:text-[44px] font-bold text-fa-classic-chalk leading-[1.2] max-w-[880px]">
            ما هو الفلفلمنت؟ الدليل الشامل للمتاجر الإلكترونية في السعودية (2026)
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">
            18 يوليو 2026
          </div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        {/* الإجابة المباشرة */}
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            <strong>الفلفلمنت (Fulfillment)</strong> هو خدمة تتولى فيها شركة متخصصة كل العمليات اللوجستية
            لمتجرك الإلكتروني: استلام المخزون، تخزينه، تجهيز كل طلب وتغليفه، شحنه للعميل، وإدارة المرتجعات —
            بحيث يتفرّغ التاجر بالكامل للتسويق والمبيعات وتطوير المنتجات.
          </p>
        </div>

        <p className={p}>
          إذا وصل متجرك لمرحلة صرت تقضي فيها وقتك بين الكراتين وشركات الشحن أكثر من وقتك في تطوير البزنس،
          فهذا المقال لك. بنشرح لك الفلفلمنت من الصفر: كيف يشتغل خطوة بخطوة، وش الفرق بينه وبين الشحن
          التقليدي والـ 3PL، كم يكلف في السوق السعودي، ومتى يكون القرار الصح لمتجرك.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>الفلفلمنت يغطي الرحلة كاملة: استلام ← تخزين ← تجهيز ← شحن ← مرتجعات.</li>
          <li className={li}>الفرق الجوهري عن الشحن التقليدي: الشحن ينقل الطرد، الفلفلمنت يدير المخزون والعملية كلها.</li>
          <li className={li}>الـ 3PL هو المصطلح الأوسع، والفلفلمنت أهم خدماته للمتاجر الإلكترونية.</li>
          <li className={li}>التسعير عادة: رسوم تخزين شهرية + رسوم تجهيز لكل طلب + رسوم شحن.</li>
          <li className={li}>متجرك يحتاج فلفلمنت غالباً إذا تجاوزت طلباتك 300-500 طلب شهرياً أو صار التجهيز يأكل وقتك.</li>
        </ul>

        <h2 className={h2}>ما معنى الفلفلمنت بالضبط؟</h2>
        <p className={p}>
          كلمة Fulfillment بالإنجليزي تعني «إتمام» أو «تنفيذ» — والمقصود فيها تنفيذ الطلب من لحظة ما يضغط
          عميلك زر «شراء» في متجرك إلى لحظة ما يستلم الشحنة عند بابه. في عالم التجارة الإلكترونية، صار
          المصطلح يشير لخدمة متكاملة تقدمها شركات متخصصة (تسمى شركات فلفلمنت أو مراكز فلفلمنت Fulfillment
          Centers) تتولى عنك هذي الرحلة كاملة.
        </p>
        <p className={p}>
          الفكرة ببساطة: بدل ما تخزّن بضاعتك في مستودعك أو بيتك، وتجهّز الطلبات بنفسك، وتنسّق مع خمس شركات
          شحن — ترسل مخزونك مرة وحدة لمركز الفلفلمنت، ويربط النظام متجرك الإلكتروني بالمستودع مباشرة. كل طلب
          جديد ينسحب تلقائياً، يتجهّز، يتغلّف باسم علامتك التجارية، وينشحن — وأنت تتابع كل شي من شاشة وحدة.
        </p>

        <h2 className={h2}>كيف تشتغل خدمة الفلفلمنت؟ (5 خطوات)</h2>

        <h3 className={h3}>1. استلام المخزون</h3>
        <p className={p}>
          ترسل منتجاتك لمستودع شركة الفلفلمنت. يستلم الفريق الشحنة، يفحصها، يعدّها، ويسجّل كل منتج في نظام
          إدارة المخزون برقم تعريفي (SKU). من هذي اللحظة تشوف مخزونك محدّث لحظياً في لوحة التحكم.
        </p>

        <h3 className={h3}>2. التخزين</h3>
        <p className={p}>
          تُخزّن المنتجات في مواقع مخصصة داخل مستودعات مجهزة — أرفف مرقمة، تحكم بدرجة الحرارة عند الحاجة،
          وتراخيص نظامية للمنتجات الحساسة (مثل ترخيص هيئة الغذاء والدواء SFDA لمنتجات التجميل والمكملات).
          التخزين المنظم هو اللي يخلي تجهيز الطلب يتم بدقايق مو ساعات.
        </p>

        <h3 className={h3}>3. تجهيز الطلب (Pick &amp; Pack)</h3>
        <p className={p}>
          أول ما يوصل طلب جديد من متجرك، يستلمه النظام تلقائياً، يلتقط الموظف المنتجات من مواقعها (Picking)،
          ويغلّفها (Packing) — وهنا تقدر تطلب تغليف بهوية علامتك: كرتون مطبوع، بطاقة شكر، أو ستيكر خاص. في
          فاست أكسس متوسط تجهيز الطلب ساعتان من لحظة استلامه.
        </p>

        <h3 className={h3}>4. الشحن والتوصيل</h3>
        <p className={p}>
          ينشحن الطلب عبر شبكة التوصيل المناسبة لموقع عميلك — توصيل عادي لكل مناطق المملكة، توصيل بنفس اليوم
          داخل المدن الرئيسية عبر الدارك ستور، أو تسليم لنقاط الاستلام الذكية مثل ريدبوكس. العميل يستلم رقم
          تتبع ويوصله إشعار بكل تحديث.
        </p>

        <h3 className={h3}>5. إدارة المرتجعات</h3>
        <p className={p}>
          إذا رجّع العميل منتج، تستقبله شركة الفلفلمنت، تفحص حالته، وترجّعه للمخزون إذا كان سليم — أو تبلغك
          بحالته. المرتجعات من أكثر العمليات استنزافاً لوقت التاجر، وتسليمها لجهة متخصصة يوفر عليك صداع كبير.
        </p>

        <h2 className={h2}>الفرق بين الفلفلمنت والشحن التقليدي</h2>
        <p className={p}>كثير من التجار يخلط بين الاثنين، والفرق جوهري:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>وجه المقارنة</th>
                <th className={th}>شركة الشحن التقليدية</th>
                <th className={th}>شركة الفلفلمنت</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>نقطة البداية</td><td className={td}>تستلم الطرد جاهز من عندك</td><td className={td}>تستلم مخزونك كامل قبل ما يجي أي طلب</td></tr>
              <tr><td className={tdHead}>التخزين</td><td className={td}>لا يوجد</td><td className={td}>مستودعات مجهزة بنظام إدارة مخزون</td></tr>
              <tr><td className={tdHead}>تجهيز الطلبات</td><td className={td}>أنت تجهّز وتغلّف</td><td className={td}>الشركة تجهّز وتغلّف بهوية علامتك</td></tr>
              <tr><td className={tdHead}>الربط مع المتجر</td><td className={td}>غالباً يدوي أو محدود</td><td className={td}>تكامل مباشر: الطلب ينسحب تلقائياً</td></tr>
              <tr><td className={tdHead}>المرتجعات</td><td className={td}>توصيل فقط</td><td className={td}>استلام وفحص وإرجاع للمخزون</td></tr>
              <tr><td className={tdHead}>دورك أنت</td><td className={td}>تدير كل العملية وتسلّم الطرد</td><td className={td}>تتابع من لوحة تحكم — والباقي مو شغلك</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          <strong>الخلاصة:</strong> شركة الشحن تحل جزء واحد من المعادلة (نقل الطرد). شركة الفلفلمنت تحل
          المعادلة كلها.
        </p>

        <h2 className={h2}>طيب وش هو الـ 3PL؟ وهل هو نفس الفلفلمنت؟</h2>
        <p className={p}>
          <strong>3PL اختصار Third-Party Logistics — «الطرف اللوجستي الثالث».</strong> وهو المصطلح الأشمل:
          أي شركة تتولى عمليات لوجستية نيابة عن غيرها تعتبر 3PL، سواء كانت الخدمة تخزين، نقل، تجهيز، أو كلها
          مع بعض. الفلفلمنت هو أهم خدمات الـ 3PL الموجهة للتجارة الإلكترونية تحديداً.
        </p>
        <p className={p}>وعشان تتضح الصورة، هذا التدرج الكامل:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المستوى</th>
                <th className={th}>المعنى</th>
                <th className={th}>مثال</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>1PL</td><td className={td}>التاجر يسوي كل شي بنفسه</td><td className={td}>متجر يخزّن في مستودعه ويوصّل بسياراته</td></tr>
              <tr><td className={tdHead}>2PL</td><td className={td}>الاستعانة بناقل فقط</td><td className={td}>التعاقد مع شركة شحن لتوصيل الطرود</td></tr>
              <tr><td className={tdHead}>3PL</td><td className={td}>طرف ثالث يدير التخزين والتجهيز والشحن</td><td className={td}>فاست أكسس: فلفلمنت متكامل للمتاجر</td></tr>
              <tr><td className={tdHead}>4PL</td><td className={td}>طرف يدير عدة شركات 3PL ويشرف على السلسلة كاملة</td><td className={td}>مناسب للشركات العملاقة متعددة الأسواق</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2}>متى يحتاج متجرك شركة فلفلمنت؟ 5 علامات واضحة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-3">
          <li className={li}><strong>طلباتك تجاوزت 300-500 طلب شهرياً</strong> وصار التجهيز اليدوي يأخّر الشحن ويطلّع أخطاء.</li>
          <li className={li}><strong>وقتك يروح للعمليات مو للنمو:</strong> تقضي ساعات يومياً في التغليف والتنسيق مع شركات الشحن بدل التسويق وتطوير المنتجات.</li>
          <li className={li}><strong>مساحة التخزين خلصت:</strong> البضاعة صارت في البيت والملحق وسيارة الوالد — واستئجار مستودع خاص مكلف والتزام طويل.</li>
          <li className={li}><strong>المواسم تكسر ظهرك:</strong> في رمضان والعروض تتضاعف الطلبات ×3 وما عندك طاقة استيعابية — الفلفلمنت يتمدد معك بدون ما توظف أحد.</li>
          <li className={li}><strong>عملاؤك يشتكون:</strong> تأخير بالشحن، طلبات غلط، مرتجعات ضايعة — وكل تقييم سلبي يكلفك عملاء جدد.</li>
        </ul>
        <p className={p}>
          لو انطبقت عليك علامتين أو أكثر، فأنت في المرحلة اللي يكون فيها الفلفلمنت استثمار يرجّع نفسه، مو
          مصروف إضافي.
        </p>

        <h2 className={h2}>كم تكلفة خدمة الفلفلمنت في السعودية؟</h2>
        <p className={p}>التسعير يختلف من شركة لشركة، لكن النموذج شبه موحد ويتكون من ثلاث مكونات رئيسية:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المكوّن</th>
                <th className={th}>طريقة الحساب</th>
                <th className={th}>وش يأثر فيه</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>رسوم التخزين</td><td className={td}>شهرياً حسب المساحة أو عدد القطع/الطبليات</td><td className={td}>حجم المنتجات وسرعة دورانها</td></tr>
              <tr><td className={tdHead}>رسوم التجهيز</td><td className={td}>مبلغ ثابت لكل طلب (Pick &amp; Pack)</td><td className={td}>عدد القطع بالطلب ونوع التغليف</td></tr>
              <tr><td className={tdHead}>رسوم الشحن</td><td className={td}>حسب الوجهة والوزن وسرعة التوصيل</td><td className={td}>توصيل عادي / نفس اليوم / نقاط استلام</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          وبعض الشركات تضيف رسوم استلام مخزون أو رسوم مرتجعات. النصيحة الذهبية: لا تقارن الأسعار بند ببند
          فقط — قارن التكلفة الإجمالية لكل طلب مكتمل، وقارنها بتكلفتك الحالية شاملة وقتك وإيجارك وأخطاء
          التجهيز. غالباً بتكتشف إن الفلفلمنت أرخص مما تتوقع.
        </p>
        <p className={p}>
          <strong>تبي رقم دقيق لمتجرك؟</strong>{' '}
          <Link to="/contact" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            اطلب عرض سعر من فاست أكسس
          </Link>{' '}
          — يوصلك مفصّل خلال يوم عمل.
        </p>

        <h2 className={h2}>كيف تختار شركة الفلفلمنت المناسبة؟ (باختصار)</h2>
        <p className={p}>الاختيار موضوع كبير بنفرد له دليل مستقل، لكن هذي أهم 6 معايير تبدأ فيها:</p>
        <ul className="mt-4 list-disc pr-6 space-y-3">
          <li className={li}><strong>التكامل مع منصتك:</strong> لازم يكون فيه ربط مباشر وجاهز مع سلة أو زد أو شوبيفاي — مو ربط يدوي بجداول إكسل.{' '}
            <Link to="/#integrations" className="text-fa-orange-soda font-semibold underline underline-offset-4">شوف تكاملات فاست أكسس</Link>
          </li>
          <li className={li}><strong>سرعة التجهيز:</strong> اسأل عن متوسط الوقت من استلام الطلب لتسليمه للشحن (المعيار الممتاز: ساعات، مو أيام).</li>
          <li className={li}><strong>الالتزام بالمواعيد:</strong> اطلب نسبة الشحن في الوقت المحدد — الشركات الجادة تعلنها (في فاست أكسس: 99.8%).</li>
          <li className={li}><strong>التغطية:</strong> هل توصّل لكل مناطق المملكة؟ وهل عندها خيارات توصيل سريع داخل المدن؟</li>
          <li className={li}><strong>الشفافية:</strong> لوحة تحكم توريك المخزون والطلبات لحظياً، وتسعير واضح بدون رسوم مخفية.</li>
          <li className={li}><strong>التراخيص:</strong> مستودعات مرخّصة، وترخيص SFDA إذا منتجاتك غذائية أو تجميلية أو صحية.</li>
        </ul>

        <h2 className={h2}>ليش الفلفلمنت صار ضرورة في السوق السعودي تحديداً؟</h2>
        <p className={p}>
          التجارة الإلكترونية في السعودية تعيش نمو غير مسبوق مدفوع برؤية 2030 وانتشار منصات مثل سلة وزد
          اللي خلّت إطلاق متجر إلكتروني مسألة ساعات. لكن هذا النمو خلق تحدي: توقعات العميل السعودي ارتفعت —
          يبي توصيل سريع (وأحياناً بنفس اليوم)، تتبع لحظي، تجربة فتح طلب (Unboxing) تليق بالبراند، ومرتجعات
          سهلة.
        </p>
        <p className={p}>
          التاجر اللي يجهّز طلباته يدوياً ما يقدر ينافس على هذي التوقعات ويكبر بنفس الوقت. وهنا بالضبط دور
          شركات الفلفلمنت المحلية اللي تفهم السوق: تعرف خريطة المدن والأحياء، تتعامل مع الدفع عند الاستلام
          (COD) اللي ما زال خيار أساسي للمشتري السعودي، ومتكاملة مع المنصات المحلية من اليوم الأول.
        </p>

        <h2 className={h2}>الأسئلة الشائعة عن الفلفلمنت</h2>
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
            جاهز تشيل هم اللوجستيات عنك؟
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            فاست أكسس تستلم مخزونك، تجهّز طلباتك بهوية علامتك خلال ساعتين، وتوصّلها لكل مناطق المملكة — مع
            تكامل مباشر مع سلة وزد وشوبيفاي وتوصيل بنفس اليوم عبر الدارك ستور. اطلب عرض سعرك اليوم، وخلّها
            علينا.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link to="/contact" className="btn-brand btn-brand--filled btn-brand--accent">
              <span className="btn-brand__label">اطلب عرض السعر</span>
            </Link>
            <a
              href="https://wa.me/966920032768"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-brand btn-brand--outline"
            >
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
            What Is Fulfillment? The Complete Guide for E-commerce Stores in Saudi Arabia (2026)
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            <strong>Fulfillment</strong> is a service where a specialized company takes over all the
            logistics of your online store: receiving inventory, storing it, picking and packing every
            order, shipping it to the customer, and managing returns — so you can focus entirely on
            marketing, sales and product development.
          </p>
        </div>

        <p className={p}>
          If you've reached the stage where you spend more time between boxes and courier companies than
          growing your business, this article is for you. We explain fulfillment from scratch: how it works
          step by step, how it differs from traditional shipping and 3PL, what it costs in the Saudi
          market, and when it becomes the right call for your store.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Fulfillment covers the full journey: receiving → storage → pick &amp; pack → shipping → returns.</li>
          <li className={li}>The core difference from shipping: a courier moves the parcel; fulfillment manages the inventory and the whole operation.</li>
          <li className={li}>3PL is the broader term; fulfillment is its most important service for e-commerce.</li>
          <li className={li}>Pricing is usually: monthly storage fees + a pick-&amp;-pack fee per order + shipping fees.</li>
          <li className={li}>Your store likely needs fulfillment once you pass 300–500 orders a month or prep starts eating your time.</li>
        </ul>

        <h2 className={h2}>What exactly does fulfillment mean?</h2>
        <p className={p}>
          The word means completing an order — from the moment your customer taps "Buy" to the moment the
          parcel lands at their door. In e-commerce, the term now refers to an end-to-end service offered
          by specialized companies (fulfillment centers) that run this journey for you.
        </p>
        <p className={p}>
          The idea is simple: instead of storing goods at home or in your own warehouse, packing orders
          yourself, and juggling five courier companies — you send your inventory once to a fulfillment
          center, and the system connects your store directly to the warehouse. Every new order flows in
          automatically, gets picked, packed under your brand, and shipped — while you watch everything
          from a single dashboard.
        </p>

        <h2 className={h2}>How does fulfillment work? (5 steps)</h2>

        <h3 className={h3}>1. Receiving your inventory</h3>
        <p className={p}>
          You send your products to the fulfillment warehouse. The team receives, inspects and counts the
          shipment, and registers every product in the inventory system under its SKU. From that moment
          your stock is live in your dashboard.
        </p>

        <h3 className={h3}>2. Storage</h3>
        <p className={p}>
          Products are stored in dedicated locations inside equipped warehouses — numbered racks,
          temperature control where needed, and regulatory licensing for sensitive products (such as SFDA
          licensing for cosmetics and supplements). Organized storage is what makes order prep take
          minutes, not hours.
        </p>

        <h3 className={h3}>3. Pick &amp; Pack</h3>
        <p className={p}>
          The moment a new order arrives from your store, the system picks it up automatically; staff
          collect the items (picking) and package them (packing) — with branded packaging if you want it:
          printed boxes, thank-you cards, or custom stickers. At Fast Access the average prep time is two
          hours from the moment an order lands.
        </p>

        <h3 className={h3}>4. Shipping &amp; delivery</h3>
        <p className={p}>
          The order ships through the delivery network that fits your customer's location — standard
          delivery across all of Saudi Arabia, same-day delivery inside major cities via dark stores, or
          smart pickup points like RedBox. The customer gets a tracking number and notifications at every
          update.
        </p>

        <h3 className={h3}>5. Returns management</h3>
        <p className={p}>
          If a customer returns a product, the fulfillment company receives it, inspects its condition, and
          restocks it if it's intact — or reports its status to you. Returns are among the most
          time-draining operations for merchants; handing them to a specialist saves you a serious
          headache.
        </p>

        <h2 className={h2}>Fulfillment vs traditional shipping</h2>
        <p className={p}>Many merchants confuse the two, and the difference is fundamental:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Comparison</th>
                <th className={thEn}>Traditional courier</th>
                <th className={thEn}>Fulfillment company</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Starting point</td><td className={td}>Picks up a ready parcel from you</td><td className={td}>Receives your full inventory before any order exists</td></tr>
              <tr><td className={tdHead}>Storage</td><td className={td}>None</td><td className={td}>Equipped warehouses with an inventory system</td></tr>
              <tr><td className={tdHead}>Order prep</td><td className={td}>You pick and pack</td><td className={td}>The company packs under your brand</td></tr>
              <tr><td className={tdHead}>Store integration</td><td className={td}>Mostly manual or limited</td><td className={td}>Direct integration: orders flow automatically</td></tr>
              <tr><td className={tdHead}>Returns</td><td className={td}>Delivery only</td><td className={td}>Receiving, inspection and restocking</td></tr>
              <tr><td className={tdHead}>Your role</td><td className={td}>You run the whole operation and hand over the parcel</td><td className={td}>You watch a dashboard — the rest isn't your problem</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          <strong>Bottom line:</strong> a courier solves one part of the equation (moving the parcel). A
          fulfillment company solves the whole equation.
        </p>

        <h2 className={h2}>So what is 3PL? Is it the same as fulfillment?</h2>
        <p className={p}>
          <strong>3PL stands for Third-Party Logistics.</strong> It's the umbrella term: any company that
          runs logistics on someone else's behalf is a 3PL, whether the service is storage, transport,
          order prep, or all of them together. Fulfillment is the 3PL service most relevant to e-commerce
          specifically.
        </p>
        <p className={p}>Here's the full ladder to make it clear:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Level</th>
                <th className={thEn}>Meaning</th>
                <th className={thEn}>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>1PL</td><td className={td}>The merchant does everything themselves</td><td className={td}>A store using its own warehouse and vehicles</td></tr>
              <tr><td className={tdHead}>2PL</td><td className={td}>Hiring a carrier only</td><td className={td}>Contracting a courier to deliver parcels</td></tr>
              <tr><td className={tdHead}>3PL</td><td className={td}>A third party managing storage, prep and shipping</td><td className={td}>Fast Access: end-to-end fulfillment for stores</td></tr>
              <tr><td className={tdHead}>4PL</td><td className={td}>A party managing multiple 3PLs and overseeing the full chain</td><td className={td}>Suited to giant multi-market enterprises</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2}>When does your store need a fulfillment company? 5 clear signs</h2>
        <ul className="mt-4 list-disc pl-6 space-y-3">
          <li className={li}><strong>You've passed 300–500 orders a month</strong> and manual prep is delaying shipments and producing errors.</li>
          <li className={li}><strong>Your time goes to operations, not growth:</strong> hours a day spent packing and coordinating couriers instead of marketing and product work.</li>
          <li className={li}><strong>You've run out of storage space:</strong> stock has spread to the house, the annex and the family car — while renting a warehouse is expensive and a long commitment.</li>
          <li className={li}><strong>Seasons break your back:</strong> during Ramadan and sale events orders triple and you have no capacity — fulfillment scales with you without hiring anyone.</li>
          <li className={li}><strong>Your customers are complaining:</strong> late shipping, wrong orders, lost returns — and every bad review costs you new customers.</li>
        </ul>
        <p className={p}>
          If two or more of these apply, you're at the stage where fulfillment is an investment that pays
          for itself — not an extra expense.
        </p>

        <h2 className={h2}>How much does fulfillment cost in Saudi Arabia?</h2>
        <p className={p}>Pricing varies by company, but the model is nearly universal, built from three components:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Component</th>
                <th className={thEn}>How it's calculated</th>
                <th className={thEn}>What affects it</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Storage fees</td><td className={td}>Monthly, by space or units/pallets</td><td className={td}>Product size and turnover speed</td></tr>
              <tr><td className={tdHead}>Pick &amp; pack fees</td><td className={td}>Flat fee per order</td><td className={td}>Items per order and packaging type</td></tr>
              <tr><td className={tdHead}>Shipping fees</td><td className={td}>By destination, weight and delivery speed</td><td className={td}>Standard / same-day / pickup points</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          Some companies add inbound-receiving or returns fees. The golden rule: don't compare line items —
          compare the <strong>total cost per completed order</strong>, and weigh it against your current
          cost including your time, your rent and your packing errors. You'll often find fulfillment is
          cheaper than you expected.
        </p>
        <p className={p}>
          <strong>Want an exact number for your store?</strong>{' '}
          <Link to="/contact" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            Request a quote from Fast Access
          </Link>{' '}
          — a detailed one lands within one business day.
        </p>

        <h2 className={h2}>How to choose the right fulfillment company (in brief)</h2>
        <p className={p}>Choosing deserves its own full guide, but these are the 6 criteria to start with:</p>
        <ul className="mt-4 list-disc pl-6 space-y-3">
          <li className={li}><strong>Platform integration:</strong> there must be a direct, ready connection with Salla, Zid or Shopify — not manual Excel syncing.{' '}
            <Link to="/#integrations" className="text-fa-orange-soda font-semibold underline underline-offset-4">See Fast Access integrations</Link>
          </li>
          <li className={li}><strong>Prep speed:</strong> ask for the average time from order receipt to courier handover (excellent = hours, not days).</li>
          <li className={li}><strong>On-time rate:</strong> serious companies publish it (at Fast Access: 99.8%).</li>
          <li className={li}><strong>Coverage:</strong> do they deliver across all of Saudi Arabia, with fast in-city options?</li>
          <li className={li}><strong>Transparency:</strong> a live dashboard for stock and orders, and clear pricing with no hidden fees.</li>
          <li className={li}><strong>Licensing:</strong> licensed warehouses, plus SFDA licensing if your products are food, cosmetic or health items.</li>
        </ul>

        <h2 className={h2}>Why has fulfillment become essential in the Saudi market specifically?</h2>
        <p className={p}>
          E-commerce in Saudi Arabia is growing at an unprecedented pace, driven by Vision 2030 and
          platforms like Salla and Zid that made launching a store a matter of hours. But that growth
          created a challenge: the Saudi customer's expectations have risen — fast delivery (sometimes
          same-day), live tracking, an unboxing experience worthy of the brand, and easy returns.
        </p>
        <p className={p}>
          A merchant packing orders by hand can't compete on those expectations and grow at the same time.
          That's exactly where local fulfillment companies that understand the market come in: they know
          the map of cities and districts, they handle cash on delivery (COD) — still a primary choice for
          Saudi buyers — and they integrate with local platforms from day one.
        </p>

        <h2 className={h2}>Fulfillment FAQs</h2>
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
            Ready to take logistics off your plate?
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Fast Access receives your inventory, packs your orders under your brand within two hours, and
            delivers across all of Saudi Arabia — with direct Salla, Zid and Shopify integration and
            same-day dark-store delivery. Request your quote today, and leave it to us.
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
