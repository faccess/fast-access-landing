import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

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

function useArticleSchema() {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'ما هو الفلفلمنت؟ الدليل الشامل للمتاجر الإلكترونية في السعودية (2026)',
        description: META.desc,
        inLanguage: 'ar',
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
        mainEntity: FAQS.map((f) => ({
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
  }, []);
}

const h2 = 'font-display mt-12 text-[24px] lg:text-[30px] font-bold text-fa-liberty-blue leading-[1.2]';
const h3 = 'font-display mt-8 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue';
const p = 'font-body mt-4 text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const li = 'font-body text-[15.5px] lg:text-[16.5px] text-fa-ink-muted leading-[1.85]';
const th = 'bg-fa-liberty-blue text-fa-classic-chalk font-display text-[13.5px] font-semibold p-3 text-right';
const td = 'font-body text-[14px] text-fa-ink-muted p-3 align-top border-b border-fa-liberty-blue/10 leading-[1.7]';
const tdHead = 'font-body text-[14px] font-bold text-fa-liberty-blue p-3 align-top border-b border-fa-liberty-blue/10';

export default function BlogArticle() {
  usePageMeta({ title: META.title, desc: META.desc }, { title: META.title, desc: META.desc });
  useArticleSchema();

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
