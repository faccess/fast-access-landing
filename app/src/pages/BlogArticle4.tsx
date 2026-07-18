import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * /blog/returns-management-ecommerce — fourth article (bilingual).
 * Article + FAQPage JSON-LD scoped to this page, switching with locale.
 * With this article's three mandatory internal links, all four blog posts
 * form a closed interlinked network.
 */

const META = {
  title: 'إدارة المرتجعات للمتاجر الإلكترونية: من صداع يومي إلى ولاء عملاء | فاست أكسس',
  desc:
    'دليل عملي لإدارة المرتجعات في متجرك الإلكتروني: أسباب الإرجاع، بناء سياسة إرجاع ذكية، رحلة المرتجع التشغيلية، مؤشرات القياس، وكيف تقلل نسبة الإرجاع من المصدر.',
};

const META_EN = {
  title: 'Returns Management for E-commerce: From Daily Headache to Customer Loyalty | Fast Access',
  desc:
    'A practical guide to managing returns in your online store: why customers return, building a smart return policy, the operational returns journey, the metrics to track, and how to cut your return rate at the source.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'وش النسبة الطبيعية للمرتجعات؟',
    a: 'تختلف جذرياً حسب الفئة: الملابس والأحذية أعلى فئات الإرجاع بطبيعتها، والإلكترونيات والمنتجات المعيارية أقل بكثير. قارن نفسك بفئتك وباتجاهك الشهري، مو برقم موحد.',
  },
  {
    q: 'هل أخلي شحن الإرجاع مجاني؟',
    a: 'الإرجاع المجاني يرفع ثقة الشراء ويزيد التحويل، لكنه يرفع نسبة الإرجاع أيضاً. حل وسط منتشر: مجاني إذا العيب من المنتج أو التجهيز، وعلى العميل إذا تغيير رأي — المهم الوضوح من قبل الشراء.',
  },
  {
    q: 'كيف أتعامل مع العميل اللي يكرر الإرجاع باستمرار؟',
    a: 'تابع النمط بالبيانات أولاً — بعض المكررين سببهم مقاسات غير واضحة عندك مو سوء نية. وإذا ثبت نمط استغلال، سياستك المكتوبة (حالة المنتج، المدة) هي مرجعك للرفض المهذب.',
  },
  {
    q: 'المرتجع اللي رفضه عميل الدفع عند الاستلام، نفس المعاملة؟',
    a: 'مبدأ الرحلة نفسه (استلام، فحص، إرجاع للمخزون) لكنه أسرع لأن الطرد ما انفتح غالباً — والمهم متابعة نسبة رفض الاستلام كمؤشر مستقل، لأن ارتفاعها يشير لمشكلة توقعات أو زمن توصيل.',
  },
  {
    q: 'هل فاست أكسس تدير المرتجعات لو مخزوني عندهم؟',
    a: 'نعم، إدارة المرتجعات جزء من خدمتنا: نستقبل المرتجع في مستودعاتنا، نفحصه ونوثّق حالته، نرجّع السليم لمخزونك المتاح للبيع، ونرسل لك تقرير بكل حالة. اطلب عرض السعر وبنشرح لك الدورة كاملة على منتجاتك.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'What is a normal return rate?',
    a: 'It varies radically by category: apparel and footwear are naturally the highest-return categories, while electronics and standardized products are far lower. Benchmark against your own category and your monthly trend, not a universal number.',
  },
  {
    q: 'Should I make return shipping free?',
    a: 'Free returns raise purchase confidence and conversion — but they raise your return rate too. A common middle ground: free when the fault is in the product or the prep, on the customer for a change of mind. What matters is clarity before purchase.',
  },
  {
    q: 'How do I deal with a customer who returns constantly?',
    a: 'Follow the pattern in the data first — some repeat returners are caused by your unclear sizing, not bad faith. If a pattern of abuse is confirmed, your written policy (product condition, time window) is your reference for a polite refusal.',
  },
  {
    q: 'A COD order the customer refused at the door — same treatment?',
    a: 'The same journey principle (receiving, inspection, restocking) but faster, since the parcel usually never opened. The key is tracking your delivery-refusal rate as its own metric — a rise signals an expectations or delivery-time problem.',
  },
  {
    q: 'Does Fast Access manage returns if my inventory is with them?',
    a: 'Yes — returns management is part of our service: we receive the return in our warehouses, inspect and document its condition, restock intact items into your sellable inventory, and send you a report on every case. Request a quote and we\u2019ll walk you through the full cycle for your products.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'إدارة المرتجعات للمتاجر الإلكترونية: من صداع يومي إلى ولاء عملاء'
          : 'Returns Management for E-commerce Stores: From Daily Headache to Customer Loyalty',
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
        mainEntityOfPage: 'https://faccess.co/blog/returns-management-ecommerce',
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

export default function BlogArticle4() {
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
            إدارة المرتجعات للمتاجر الإلكترونية: من صداع يومي إلى ولاء عملاء
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        {/* صندوق الإجابة المباشرة */}
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            إدارة المرتجعات هي منظومة كاملة تبدأ قبل الإرجاع بسياسة واضحة ووصف منتج دقيق يقلل أسبابه، وتمر
            بتجربة إرجاع سهلة للعميل، وتنتهي برحلة تشغيلية منضبطة: استلام المرتجع، فحصه، تصنيفه (إرجاع
            للمخزون / إصلاح / إتلاف)، واسترداد سريع — والمتجر اللي يتقنها يحوّل أسوأ لحظة في تجربة الشراء
            إلى سبب يخلي العميل يرجع يشتري.
          </p>
        </div>

        <p className={p}>
          المرتجعات هي الجزء اللي ما أحد يحب يتكلم عنه من التجارة الإلكترونية — بس تجاهلها يكلفك مرتين: مرة
          في الفوضى التشغيلية (شحنات راجعة مكدسة، مخزون ضايع بين «موجود» و«مو موجود»)، ومرة في العميل اللي
          تعثّرت تجربة إرجاعه فقرر إنها آخر مرة يشتري منك. والمفارقة إن الدراسات في التجارة الإلكترونية
          عالمياً تتفق على نمط واحد: العميل اللي مرّ بتجربة إرجاع <strong>سلسة</strong> يصير أكثر ولاءً من
          عميل ما رجّع أصلاً — لأنه جرّبك في أصعب لحظة وطلعت من عنده كفو.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>أغلب المرتجعات سببها قابل للعلاج من المصدر: وصف ناقص، مقاسات غير دقيقة، أو تغليف ضعيف.</li>
          <li className={li}>سياسة الإرجاع الواضحة تزيد ثقة الشراء — إخفاؤها أو تعقيدها يخسّرك مبيعات قبل ما يخسّرك مرتجعات.</li>
          <li className={li}>رحلة المرتجع التشغيلية لها 4 محطات: استلام ← فحص ← تصنيف ← استرداد، وكل محطة لها مدة مستهدفة.</li>
          <li className={li}>المرتجع اللي يرجع للمخزون بسرعة = فلوس رجعت تشتغل؛ اللي يتكدس = خسارة صامتة.</li>
          <li className={li}>4 مؤشرات تكفيك للسيطرة: نسبة الإرجاع، زمن المعالجة، نسبة الإرجاع للمخزون، وتوزيع الأسباب.</li>
        </ul>

        <h2 className={h2}>أولاً: ليش يرجّعون؟ اعرف السبب قبل ما تعالج</h2>
        <p className={p}>قبل أي تحسين، صنّف مرتجعاتك حسب السبب — لأن كل سبب له علاج مختلف:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>السبب</th>
                <th className={th}>مثاله</th>
                <th className={th}>علاجه</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>المقاس أو التوافق</td><td className={td}>ملابس وأحذية غالباً</td><td className={td}>جدول مقاسات دقيق + صور على موديل حقيقي</td></tr>
              <tr><td className={tdHead}>المنتج غير مطابق للوصف</td><td className={td}>«توقعته أكبر/لون ثاني»</td><td className={td}>وصف صريح وصور من كل الزوايا بإضاءة طبيعية</td></tr>
              <tr><td className={tdHead}>تلف أثناء الشحن</td><td className={td}>وصل مكسور أو مخدوش</td><td className={td}>تغليف أقوى + شريك لوجستي يهتم بالتعامل مع الطرود</td></tr>
              <tr><td className={tdHead}>تغيّر رأي العميل</td><td className={td}>اشترى بحماس وندم</td><td className={td}>طبيعي بنسب معينة — سياستك تحدد التعامل معه</td></tr>
              <tr><td className={tdHead}>خطأ تجهيز</td><td className={td}>وصله منتج غلط أو ناقص</td><td className={td}>دقة تشغيلية — هذا النوع مسؤوليتك 100% ولازم يقارب الصفر</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          النوع الأخير تحديداً هو مقياس جودة عملياتك: إذا نسبة «خطأ التجهيز» عندك مرتفعة، مشكلتك مو
          بالمرتجعات — مشكلتك بالتجهيز نفسه. (وهذا من الأسباب اللي خلتنا نحط دقة الطلبات معيار أساسي في{' '}
          <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            دليل اختيار شركة التخزين والشحن
          </Link>
          .)
        </p>

        <h2 className={h2}>ثانياً: سياسة الإرجاع — اكتبها لتبيع، مو بس لتحمي</h2>
        <p className={p}>
          سياسة الإرجاع مو صفحة قانونية مخبأة بالفوتر — هي أداة بيع. العميل المتردد يفتح صفحة السياسة قبل
          ما يضغط «شراء»، وإذا لقاها واضحة وعادلة اطمأن وكمّل. عناصرها الأساسية:
        </p>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}><strong>المدة:</strong> كم يوم من الاستلام يحق له الإرجاع؟ حدد رقم صريح.</li>
          <li className={li}><strong>الحالة المقبولة:</strong> بالتغليف الأصلي؟ غير مستخدم؟ وش المنتجات المستثناة (مثل منتجات العناية الشخصية بعد الفتح)؟</li>
          <li className={li}><strong>من يدفع شحن الإرجاع؟</strong> ولو فرّقت بين «عيب بالمنتج» (عليك) و«تغيير رأي» (على العميل) — قلها صراحة.</li>
          <li className={li}><strong>طريقة الاسترداد ومدته:</strong> لنفس وسيلة الدفع؟ رصيد بالمتجر؟ خلال كم يوم عمل؟</li>
          <li className={li}><strong>خطوات الطلب:</strong> من وين يقدم طلب الإرجاع وكيف يتابعه.</li>
        </ul>

        {/* ملاحظة نظامية — تنسيق مميز */}
        <div className="mt-6 rounded-xl bg-fa-orange-soda/[0.07] border border-fa-orange-soda/25 p-5">
          <p className="font-body text-[15px] text-fa-liberty-blue leading-[1.8] m-0">
            <strong>ملاحظة نظامية:</strong> حقوق المستهلك في التجارة الإلكترونية بالسعودية منظمة بأنظمة
            وزارة التجارة، وفيها حالات يكون الإرجاع أو الاستبدال فيها حق للمستهلك بغض النظر عن سياستك —
            فتأكد إن سياستك متوافقة مع آخر تحديثات الأنظمة، ولا تكتب شرط يخالفها لأنه ببساطة ما يحميك.
          </p>
        </div>

        <h2 className={h2}>ثالثاً: رحلة المرتجع التشغيلية — 4 محطات</h2>

        <h3 className={h3}>1. الاستلام</h3>
        <p className={p}>
          المرتجع يوصل ويُسجّل فوراً بالنظام مربوطاً برقم الطلب الأصلي. المرتجع اللي يجلس بدون تسجيل هو
          مخزون شبح: لا هو مباع ولا هو متاح.
        </p>

        <h3 className={h3}>2. الفحص</h3>
        <p className={p}>
          فحص الحالة خلال مدة محددة (المعيار الجيد: 24-48 ساعة من الاستلام): سليم بتغليفه؟ مستخدم؟ تالف؟
          ووثّق الحالة بصور — تحميك في أي خلاف.
        </p>

        <h3 className={h3}>3. التصنيف والمصير</h3>
        <p className={p}>
          ثلاث نتائج لا رابع لها، وكل وحدة بمسار: <strong>إرجاع للمخزون</strong> (سليم — يرجع متاح للبيع
          فوراً)، <strong>إصلاح أو إعادة تغليف</strong> ثم إرجاع للمخزون، أو <strong>إتلاف/تصفية</strong>{' '}
          (تالف — يُوثّق ويُخصم). السرعة هنا فلوس مباشرة: كل يوم يقضيه منتج سليم خارج المخزون هو يوم مبيعات
          ضايع.
        </p>

        <h3 className={h3}>4. الاسترداد وإغلاق الحلقة</h3>
        <p className={p}>
          استرداد المبلغ أو الاستبدال حسب السياسة، مع إشعار للعميل بكل خطوة. الإغلاق السريع هو اللي يترك
          الانطباع الأخير — وخلّ رسالة الإغلاق لطيفة، هذا عميل تبيه يرجع.
        </p>

        <h2 className={h2}>رابعاً: قلّل الإرجاع من المصدر — أرخص 5 تحسينات</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}><strong>جدول مقاسات حقيقي</strong> بقياسات منتجك الفعلية، مو جدول عام منسوخ.</li>
          <li className={li}><strong>صور صادقة:</strong> كل الزوايا، إضاءة طبيعية، ولقطة توضح الحجم بجانب شي مألوف.</li>
          <li className={li}><strong>وصف يجاوب الأسئلة قبل ما تنسأل:</strong> الخامة، الأبعاد، طريقة الاستخدام، وش داخل الصندوق.</li>
          <li className={li}><strong>تغليف يحمي فعلاً:</strong> راجع مرتجعات «وصل تالف» — إذا تكررت على منتج معين، غيّر تغليفه.</li>
          <li className={li}><strong>فحص جودة قبل الشحن</strong> للمنتجات الحساسة — دقيقة فحص توفر أسبوع معالجة مرتجع.</li>
        </ul>

        <h2 className={h2}>خامساً: المؤشرات الأربعة اللي تتابعها شهرياً</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المؤشر</th>
                <th className={th}>طريقة الحساب</th>
                <th className={th}>ليش يهمك</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>نسبة الإرجاع</td><td className={td}>المرتجعات ÷ إجمالي الطلبات</td><td className={td}>النبض العام — تتبع اتجاهه أهم من رقمه المطلق</td></tr>
              <tr><td className={tdHead}>زمن معالجة المرتجع</td><td className={td}>من الاستلام إلى الإغلاق</td><td className={td}>يقيس انضباط عملياتك وسرعة رضا العميل</td></tr>
              <tr><td className={tdHead}>نسبة الإرجاع للمخزون</td><td className={td}>السليم المرجَع للبيع ÷ إجمالي المرتجعات</td><td className={td}>كل نقطة فيها فلوس مستردة تشتغل</td></tr>
              <tr><td className={tdHead}>توزيع الأسباب</td><td className={td}>تصنيف كل مرتجع بسبب</td><td className={td}>خريطة التحسين — يوريك وين تصرف جهدك</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          وتذكّر إن تكلفة المرتجعات جزء من{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            معادلة تكلفة الطلب المكتمل
          </Link>{' '}
          اللي شرحناها — المتجر اللي يقيسها يعرف بالضبط كم توفر عليه كل نقطة تحسين.
        </p>

        <h2 className={h2}>سادساً: وش دور شركة الفلفلمنت في كل هذا؟</h2>
        <p className={p}>
          كل الرحلة التشغيلية (استلام، فحص، تصنيف، إرجاع للمخزون) شغل مستودعات بامتياز — وهذا بالضبط اللي
          تسويه شركة الفلفلمنت نيابة عنك: المرتجع يرجع للمستودع مو لبيتك، يُفحص ويُوثّق بصور، والسليم يرجع
          متاح للبيع بمخزونك تلقائياً، وأنت توصلك التقارير وأنت مركّز على متجرك. في فاست أكسس هذي خدمة
          قائمة ضمن المنظومة — من الاستلام إلى إعادة المخزون — بدون ما تشيل همّ شحنة راجعة وحدة. (جديد على
          مفهوم الفلفلمنت كامل؟ ابدأ من{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الدليل الشامل
          </Link>
          .)
        </p>

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
            خلّ المرتجعات ترجع لنا، مو لك
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            مستودع يستقبل، فريق يفحص ويوثّق، ومخزونك يرجع يشتغل — وأنت توصلك التقارير بس. اطلب عرض سعرك
            اليوم، وخلّها علينا.
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
            Returns Management for E-commerce Stores: From Daily Headache to Customer Loyalty
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Returns management is a complete system that starts before the return — with a clear policy and
            accurate product descriptions that cut its causes — runs through an easy return experience for
            the customer, and ends with a disciplined operational journey: receiving the return, inspecting
            it, classifying it (restock / repair / dispose), and refunding fast. A store that masters it
            turns the worst moment in the buying experience into a reason the customer comes back to buy.
          </p>
        </div>

        <p className={p}>
          Returns are the part of e-commerce nobody likes to talk about — but ignoring them costs you
          twice: once in operational chaos (returned shipments piling up, inventory lost between "in stock"
          and "not in stock"), and once in the customer whose return experience stumbled and who decided
          it was their last purchase from you. The irony is that e-commerce studies worldwide agree on one
          pattern: a customer who went through a <strong>smooth</strong> return becomes more loyal than one
          who never returned at all — because they tested you at the hardest moment and you came through.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Most returns have causes treatable at the source: incomplete descriptions, inaccurate sizing, or weak packaging.</li>
          <li className={li}>A clear return policy raises purchase confidence — hiding or complicating it loses you sales before it loses you returns.</li>
          <li className={li}>The operational returns journey has 4 stations: receiving → inspection → classification → refund, each with a target duration.</li>
          <li className={li}>A return that restocks quickly = money back at work; one that piles up = a silent loss.</li>
          <li className={li}>4 metrics are enough to stay in control: return rate, processing time, restock rate, and cause distribution.</li>
        </ul>

        <h2 className={h2}>First: why do they return? Know the cause before you treat it</h2>
        <p className={p}>Before any improvement, classify your returns by cause — because every cause has a different cure:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Cause</th>
                <th className={thEn}>Example</th>
                <th className={thEn}>Cure</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Size or fit</td><td className={td}>Mostly apparel and footwear</td><td className={td}>An accurate size chart + photos on a real model</td></tr>
              <tr><td className={tdHead}>Not as described</td><td className={td}>"I expected it bigger / a different color"</td><td className={td}>Honest descriptions and photos from every angle in natural light</td></tr>
              <tr><td className={tdHead}>Damaged in shipping</td><td className={td}>Arrived broken or scratched</td><td className={td}>Stronger packaging + a logistics partner that handles parcels with care</td></tr>
              <tr><td className={tdHead}>Change of mind</td><td className={td}>Bought on impulse, regretted it</td><td className={td}>Natural at certain rates — your policy defines how it's handled</td></tr>
              <tr><td className={tdHead}>Prep error</td><td className={td}>Received the wrong or an incomplete item</td><td className={td}>Operational accuracy — this one is 100% on you and must approach zero</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          That last type is precisely the quality gauge of your operation: if your "prep error" rate is
          high, your problem isn't returns — it's the prep itself. (One of the reasons we made order
          accuracy a core criterion in our{' '}
          <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            guide to choosing a storage &amp; shipping company
          </Link>
          .)
        </p>

        <h2 className={h2}>Second: your return policy — write it to sell, not just to protect</h2>
        <p className={p}>
          A return policy isn't a legal page buried in the footer — it's a sales tool. A hesitant customer
          opens the policy page before tapping "Buy"; if they find it clear and fair, they relax and
          complete the purchase. Its essential elements:
        </p>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}><strong>The window:</strong> how many days from delivery can they return? State an explicit number.</li>
          <li className={li}><strong>Accepted condition:</strong> original packaging? Unused? Which products are excluded (like personal-care items after opening)?</li>
          <li className={li}><strong>Who pays return shipping?</strong> If you differentiate "product defect" (on you) from "change of mind" (on the customer) — say it explicitly.</li>
          <li className={li}><strong>Refund method and timing:</strong> to the same payment method? Store credit? Within how many business days?</li>
          <li className={li}><strong>Request steps:</strong> where do they submit a return request and how do they track it.</li>
        </ul>

        {/* Regulatory note — distinct formatting */}
        <div className="mt-6 rounded-xl bg-fa-orange-soda/[0.07] border border-fa-orange-soda/25 p-5">
          <p className="font-body text-[15px] text-fa-liberty-blue leading-[1.8] m-0">
            <strong>Regulatory note:</strong> consumer rights in Saudi e-commerce are governed by Ministry
            of Commerce regulations, which include cases where a return or exchange is the consumer's right
            regardless of your policy — so make sure your policy complies with the latest regulations, and
            never write a clause that contradicts them, because it simply won't protect you.
          </p>
        </div>

        <h2 className={h2}>Third: the operational returns journey — 4 stations</h2>

        <h3 className={h3}>1. Receiving</h3>
        <p className={p}>
          The return arrives and is logged immediately in the system, linked to the original order number.
          A return sitting unlogged is ghost inventory: neither sold nor available.
        </p>

        <h3 className={h3}>2. Inspection</h3>
        <p className={p}>
          Condition check within a defined window (a good standard: 24–48 hours from receipt): intact in
          its packaging? Used? Damaged? Document the condition with photos — they protect you in any
          dispute.
        </p>

        <h3 className={h3}>3. Classification and destiny</h3>
        <p className={p}>
          Three outcomes, no fourth, each with its path: <strong>restock</strong> (intact — back on sale
          immediately), <strong>repair or repackage</strong> then restock, or <strong>dispose/liquidate</strong>{' '}
          (damaged — documented and written off). Speed here is direct money: every day an intact product
          spends outside inventory is a day of lost sales.
        </p>

        <h3 className={h3}>4. Refund and closing the loop</h3>
        <p className={p}>
          Refund or exchange per policy, with the customer notified at every step. Fast closure is what
          leaves the final impression — and make the closing message a kind one; this is a customer you
          want back.
        </p>

        <h2 className={h2}>Fourth: cut returns at the source — the 5 cheapest improvements</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}><strong>A real size chart</strong> with your product's actual measurements, not a copied generic one.</li>
          <li className={li}><strong>Honest photos:</strong> every angle, natural light, and a shot showing scale next to something familiar.</li>
          <li className={li}><strong>Descriptions that answer questions before they're asked:</strong> material, dimensions, how to use, what's in the box.</li>
          <li className={li}><strong>Packaging that actually protects:</strong> review your "arrived damaged" returns — if they repeat on one product, change its packaging.</li>
          <li className={li}><strong>Pre-shipping quality checks</strong> for sensitive products — a one-minute check saves a week of return processing.</li>
        </ul>

        <h2 className={h2}>Fifth: the four metrics to track monthly</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Metric</th>
                <th className={thEn}>How it's calculated</th>
                <th className={thEn}>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Return rate</td><td className={td}>Returns ÷ total orders</td><td className={td}>The general pulse — its trend matters more than its absolute number</td></tr>
              <tr><td className={tdHead}>Return processing time</td><td className={td}>From receipt to closure</td><td className={td}>Measures operational discipline and how fast customers are made whole</td></tr>
              <tr><td className={tdHead}>Restock rate</td><td className={td}>Intact items returned to sale ÷ total returns</td><td className={td}>Every point is refunded money back at work</td></tr>
              <tr><td className={tdHead}>Cause distribution</td><td className={td}>Every return classified by cause</td><td className={td}>Your improvement map — shows where to spend your effort</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          And remember that return costs are part of the{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            cost-per-completed-order formula
          </Link>{' '}
          we explained — a store that measures it knows exactly how much every improvement point saves.
        </p>

        <h2 className={h2}>Sixth: what's the fulfillment company's role in all this?</h2>
        <p className={p}>
          The entire operational journey (receiving, inspection, classification, restocking) is warehouse
          work par excellence — and that's exactly what a fulfillment company does on your behalf: the
          return goes back to the warehouse, not your house; it's inspected and documented with photos;
          intact items go back into your sellable inventory automatically; and you just get the reports
          while you stay focused on your store. At Fast Access this is a standing service within the system
          — from receipt to restocking — without you carrying the weight of a single returned shipment.
          (New to fulfillment as a whole? Start with{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the complete guide
          </Link>
          .)
        </p>

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
            Let returns come back to us, not to you
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            A warehouse that receives, a team that inspects and documents, and inventory that gets back to
            work — while you just get the reports. Request your quote today, and leave it to us.
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
