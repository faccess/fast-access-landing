import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** /blog/cash-on-delivery-guide — sixth article (bilingual). */

const META = {
  title: 'الدفع عند الاستلام (COD): دليل التاجر لإدارته بدون خسائر | فاست أكسس',
  desc:
    'الدفع عند الاستلام ما زال خيار أساسي للمشتري السعودي. دليل عملي لإدارة COD في متجرك: تقليل رفض الاستلام، ضبط دورة التحصيل، والمؤشرات اللي تحميك من الخسائر.',
};

const META_EN = {
  title: 'Cash on Delivery (COD): The Merchant’s Guide to Managing It Without Losses | Fast Access',
  desc:
    'Cash on delivery is still a primary choice for the Saudi buyer. A practical guide to managing COD in your store: cutting delivery refusals, tightening the remittance cycle, and the metrics that protect you from losses.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'هل ألغي COD إذا ارتفع رفض الاستلام؟',
    a: 'الإلغاء آخر الدواء. جرّب أولاً: تأكيد الطلبات قبل الشحن، وتسريع التوصيل — أغلب المتاجر تشوف انخفاض ملموس بهاتين وحدهما. وإذا استمر، جرّب رسوم COD رمزية قبل الإلغاء الكامل.',
  },
  {
    q: 'وش نسبة رفض الاستلام المقبولة؟',
    a: 'تختلف حسب الفئة والجمهور، والمهم اتجاهها عندك أنت: ثبّت خط أساس من بياناتك وقارن كل شهر وبعد كل تحسين تسويه.',
  },
  {
    q: 'هل رسوم COD الإضافية تنفّر العملاء؟',
    a: 'ترفع جدية الطلبات وتنفّر جزء من غير الجادين — وهذا نصف مقصود. القرار يوزن: إذا رفضك مرتفع فهي أداة قوية، وإذا منخفض فربما ما تحتاجها.',
  },
  {
    q: 'الدفع بالشبكة عند الباب — يحسب COD؟',
    a: 'من ناحية العميل نعم (ما دفع إلا عند الاستلام)، ومن ناحيتك هو أفضل نسخة منه: تحصيل موثق رقمياً بدون كاش. وفّره إذا شريكك اللوجستي يدعمه.',
  },
  {
    q: 'كيف تدير فاست أكسس الـ COD؟',
    a: 'تأكيد الطلب قبل الشحن، خيارات دفع متعددة عند الباب، توثيق رقمي لكل تحصيل، ودورة تحويل منتظمة بتقرير مطابقة — اطلب عرض السعر ونشرح لك الدورة على أرقامك.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Should I drop COD if delivery refusals rise?',
    a: 'Dropping it is the last resort. Try first: confirming orders before shipping, and faster delivery — most stores see a tangible drop from those two alone. If refusals persist, try a small COD fee before a full removal.',
  },
  {
    q: 'What is an acceptable refusal rate?',
    a: 'It varies by category and audience; what matters is your own trend. Set a baseline from your data and compare monthly and after every improvement you make.',
  },
  {
    q: 'Do COD surcharges scare customers away?',
    a: 'They raise order seriousness and deter some of the non-serious — which is half the point. Weigh the decision: if your refusal rate is high, it’s a powerful tool; if low, you may not need it.',
  },
  {
    q: 'Card payment at the door — does it count as COD?',
    a: 'From the customer’s side, yes (they only paid on receipt). From yours, it’s the best version of it: a digitally documented collection with no cash. Offer it if your logistics partner supports it.',
  },
  {
    q: 'How does Fast Access manage COD?',
    a: 'Order confirmation before shipping, multiple payment options at the door, digital documentation of every collection, and a regular remittance cycle with a reconciliation report — request a quote and we’ll walk you through the cycle on your own numbers.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'الدفع عند الاستلام (COD): دليل التاجر لإدارته بدون خسائر'
          : 'Cash on Delivery (COD): The Merchant’s Guide to Managing It Without Losses',
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
        mainEntityOfPage: 'https://faccess.co/blog/cash-on-delivery-guide',
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

export default function BlogArticle6() {
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
            الدفع عند الاستلام (COD): دليل التاجر لإدارته بدون خسائر
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            الدفع عند الاستلام (Cash on Delivery) يعني أن العميل يدفع قيمة الطلب عند وصوله، لا عند الشراء. هو
            أداة ثقة تفتح لك شريحة عملاء ما كانوا بيشترون بدونه، لكنه يحمل مخاطرته: رفض الاستلام وتأخر التدفق
            النقدي. إدارته الناجحة تقوم على ثلاثة أعمدة: تأكيد الطلب قبل الشحن، توصيل سريع يسبق تغيّر المزاج،
            ودورة تحصيل منضبطة بمدة واضحة.
          </p>
        </div>

        <p className={p}>
          رغم انتشار المدى وأبل باي وكل وسائل الدفع الرقمي، ما زالت شريحة معتبرة من المشترين السعوديين تفضّل
          الدفع عند الاستلام — بعضهم عن حذر من متجر يجربه أول مرة، وبعضهم عادة راسخة. والتاجر قدام قرارين غلط
          وقرار صح: يلغي COD ويخسر الشريحة كاملة، أو يفتحه بدون ضوابط ويتحمّل رفض استلام يأكل هامشه — أو
          يديره بذكاء ويحصد الميزة بأقل مخاطرة. هذا المقال عن الخيار الثالث.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>COD أداة اكتساب عملاء جدد بالدرجة الأولى — العميل اللي وثق فيك يتحول تدريجياً للدفع المسبق.</li>
          <li className={li}>رفض الاستلام هو الخطر الأول: طلب راح وشحن راح ورجع، وكله على حسابك.</li>
          <li className={li}>أقوى علاجين للرفض: تأكيد الطلب برسالة قبل الشحن + توصيل أسرع.</li>
          <li className={li}>دورة تحصيل واضحة (متى توصلك فلوس الـ COD) شرط تسأل عنه أي شريك لوجستي قبل التعاقد.</li>
          <li className={li}>تابع نسبة رفض الاستلام كمؤشر مستقل شهرياً — ارتفاعها إنذار مبكر.</li>
        </ul>

        <h2 className={h2}>ليش تبقيه أصلاً؟ حساب الميزة</h2>
        <p className={p}>
          COD يكسر حاجز الثقة الأول: العميل اللي ما يعرف متجرك يطمئن إن فلوسه ما تطلع إلا والمنتج بيده. وهذا
          يعني عملاء جدد ما كانوا بيكملون الشراء بدونه — خصوصاً خارج المدن الرئيسية وفي الفئات العمرية
          الأكبر. الصفقة الأولى الناجحة بالـ COD تبني الثقة اللي تخلي الصفقة الثانية بالدفع المسبق. يعني: COD
          تكلفة اكتساب، مو مجرد وسيلة دفع.
        </p>

        <h2 className={h2}>المخاطر الثلاثة — وعلاج كل واحدة</h2>

        <h3 className={h3}>1. رفض الاستلام</h3>
        <p className={p}>
          الطلب يوصل والعميل يعتذر أو ما يرد. الخسارة مضاعفة: شحن ذهاب + شحن إرجاع + منتج معلّق خارج
          المخزون. العلاجات بالترتيب من الأقوى:
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>العلاج</th>
                <th className={th}>كيف يشتغل</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>تأكيد الطلب قبل الشحن</td><td className={td}>رسالة واتساب تلقائية: «طلبك رقم كذا بقيمة كذا جاهز للشحن — تأكيد؟» تصفّي الطلبات غير الجادة قبل ما تكلفك ريال</td></tr>
              <tr><td className={tdHead}>توصيل أسرع</td><td className={td}>أغلب الرفض يصير بفترة الانتظار — التوصيل بنفس اليوم (<Link to="/blog/dark-store-same-day-delivery" className="text-fa-orange-soda font-semibold underline underline-offset-4">الدارك ستور</Link>) يقفل نافذة تغيّر المزاج تقريباً</td></tr>
              <tr><td className={tdHead}>إشعارات تتبع واضحة</td><td className={td}>العميل اللي يعرف إن الطلب «يوصل اليوم بين 4-7» يرتب نفسه — المفاجأة عدو الاستلام</td></tr>
              <tr><td className={tdHead}>رسوم COD رمزية</td><td className={td}>مبلغ بسيط مقابل خيار COD يرفع جدية الطلب — قرار يوزن حسب فئتك وجمهورك</td></tr>
              <tr><td className={tdHead}>قائمة متابعة داخلية</td><td className={td}>العميل اللي رفض مرتين بدون سبب، الطلب الثالث له يحتاج تأكيد أشد</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className={h3}>2. تأخر التدفق النقدي</h3>
        <p className={p}>
          فلوس مبيعاتك عند شركة التحصيل لين تتحول لك. اسأل شريكك اللوجستي سؤال واحد صريح:{' '}
          <strong>«كم دورة تحويل مبالغ الـ COD؟»</strong> — الإجابة الممتازة أسبوعية أو أسرع، مع تقرير يطابق
          كل تحويل بطلباته. الدورة الشهرية الغامضة تخنق متجر نامي.
        </p>

        <h3 className={h3}>3. أخطاء التحصيل</h3>
        <p className={p}>
          مندوب حصّل مبلغ ناقص، أو طلب اتسلّم بدون تحصيل. الحماية: شريك لوجستي بنظام تحصيل رقمي يوثّق كل
          عملية، وتقارير مطابقة (Reconciliation) تراجعها شهرياً — مو دفتر وذاكرة مندوب.
        </p>

        <h2 className={h2}>دورة الـ COD المثالية من البداية للنهاية</h2>
        <ol className="mt-4 list-decimal pr-6 space-y-2">
          <li className={li}><strong>عند الطلب:</strong> المبلغ والرسوم واضحة قبل التأكيد — لا مفاجآت عند الباب.</li>
          <li className={li}><strong>قبل الشحن:</strong> رسالة تأكيد تلقائية (واتساب الأفضل محلياً).</li>
          <li className={li}><strong>أثناء التوصيل:</strong> إشعار بنطاق وقت الوصول + خيارات دفع عند الباب (كاش أو شبكة/مدى مع المندوب — كل خيار إضافي يقلل الرفض).</li>
          <li className={li}><strong>بعد التسليم:</strong> تسجيل التحصيل فورياً بالنظام.</li>
          <li className={li}><strong>الرفض إن صار:</strong> الطلب يدخل مسار المرتجعات المعتاد (استلام، فحص، إرجاع للمخزون) — فصّلناه في <Link to="/blog/returns-management-ecommerce" className="text-fa-orange-soda font-semibold underline underline-offset-4">دليل إدارة المرتجعات</Link>.</li>
          <li className={li}><strong>التحويل:</strong> دورة أسبوعية بتقرير مطابقة.</li>
        </ol>

        <h2 className={h2}>المؤشرات اللي تتابعها</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المؤشر</th>
                <th className={th}>ليش يهم</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>نسبة طلبات COD من الإجمالي</td><td className={td}>توريك اعتماد جمهورك عليه واتجاهه بالزمن</td></tr>
              <tr><td className={tdHead}>نسبة رفض الاستلام</td><td className={td}>المؤشر الحاكم — قارنه شهرياً وبعد كل تحسين</td></tr>
              <tr><td className={tdHead}>متوسط دورة التحصيل</td><td className={td}>صحة تدفقك النقدي</td></tr>
              <tr><td className={tdHead}>نسبة تحوّل عملاء COD للدفع المسبق</td><td className={td}>يقيس نجاح COD كأداة بناء ثقة</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2}>دور شريكك اللوجستي</h2>
        <p className={p}>
          إدارة COD الناجحة عمليتها كلها عند الطرف اللي يوصّل: التأكيد قبل الشحن، خيارات الدفع عند الباب،
          توثيق التحصيل، دورة التحويل، ومسار المرفوضات. ولهذا هي من أول الأسئلة اللي تطرحها قبل اختيار شركة{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الفلفلمنت
          </Link>{' '}
          (راجع{' '}
          <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الـ 12 معيار
          </Link>{' '}
          — معيار COD تحديداً). في فاست أكسس الدورة كاملة ضمن الخدمة: من تأكيد الطلب إلى تحويل المبالغ
          بتقارير مطابقة واضحة.
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

        <div className="mt-14 rounded-2xl bg-fa-liberty-blue p-8 lg:p-10 text-center">
          <h2 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-classic-chalk m-0">
            خلّ الـ COD ميزة، مو مخاطرة
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            من تأكيد الطلب إلى تحويل المبلغ لحسابك — دورة كاملة مضبوطة بالتقارير. اطلب عرض سعرك، وخلّها
            علينا.
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
            Cash on Delivery (COD): The Merchant's Guide to Managing It Without Losses
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Cash on delivery means the customer pays when the order arrives, not when they buy. It's a trust
            tool that opens up a segment of customers who wouldn't purchase without it — but it carries its
            risks: delivery refusals and delayed cash flow. Managing it well rests on three pillars:
            confirming the order before shipping, delivery fast enough to beat a change of heart, and a
            disciplined remittance cycle with a clear timeline.
          </p>
        </div>

        <p className={p}>
          Despite mada, Apple Pay and every digital payment method, a substantial share of Saudi buyers
          still prefers cash on delivery — some out of caution with a store they're trying for the first
          time, some out of ingrained habit. The merchant faces two wrong decisions and one right one: kill
          COD and lose that segment entirely, open it with no controls and absorb refusals that eat the
          margin — or manage it intelligently and harvest the advantage at minimal risk. This article is
          about the third option.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>COD is first and foremost a customer-acquisition tool — a customer who learns to trust you gradually shifts to prepayment.</li>
          <li className={li}>Delivery refusal is risk #1: an order gone, shipping paid both ways, all on your account.</li>
          <li className={li}>The two strongest refusal cures: a confirmation message before shipping + faster delivery.</li>
          <li className={li}>A clear remittance cycle (when your COD money reaches you) is a question to ask any logistics partner before signing.</li>
          <li className={li}>Track your refusal rate as its own monthly metric — a rise is an early alarm.</li>
        </ul>

        <h2 className={h2}>Why keep it at all? The upside math</h2>
        <p className={p}>
          COD breaks the first trust barrier: a customer who doesn't know your store is reassured their
          money only leaves once the product is in hand. That means new customers who wouldn't have
          completed the purchase otherwise — especially outside major cities and among older segments. A
          successful first COD transaction builds the trust that makes the second one prepaid. In other
          words: COD is an acquisition cost, not just a payment method.
        </p>

        <h2 className={h2}>The three risks — and the cure for each</h2>

        <h3 className={h3}>1. Delivery refusal</h3>
        <p className={p}>
          The order arrives and the customer apologizes or doesn't answer. The loss is doubled: outbound
          shipping + return shipping + a product stuck outside inventory. The cures, strongest first:
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Cure</th>
                <th className={thEn}>How it works</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Confirm before shipping</td><td className={td}>An automatic WhatsApp message: "Order #X worth Y is ready to ship — confirm?" filters out non-serious orders before they cost you a riyal</td></tr>
              <tr><td className={tdHead}>Faster delivery</td><td className={td}>Most refusals happen during the waiting window — same-day delivery (<Link to="/blog/dark-store-same-day-delivery" className="text-fa-orange-soda font-semibold underline underline-offset-4">dark stores</Link>) nearly closes the change-of-heart window</td></tr>
              <tr><td className={tdHead}>Clear tracking notifications</td><td className={td}>A customer who knows the order "arrives today between 4–7" plans for it — surprise is the enemy of receipt</td></tr>
              <tr><td className={tdHead}>A small COD fee</td><td className={td}>A modest charge for the COD option raises order seriousness — weigh it by your category and audience</td></tr>
              <tr><td className={tdHead}>An internal watch list</td><td className={td}>A customer who refused twice with no reason gets stricter confirmation on the third order</td></tr>
            </tbody>
          </table>
        </div>

        <h3 className={h3}>2. Delayed cash flow</h3>
        <p className={p}>
          Your sales money sits with the collector until it's remitted. Ask your logistics partner one blunt
          question: <strong>"How long is your COD remittance cycle?"</strong> — the excellent answer is
          weekly or faster, with a report reconciling every transfer to its orders. A vague monthly cycle
          suffocates a growing store.
        </p>

        <h3 className={h3}>3. Collection errors</h3>
        <p className={p}>
          A driver collected a short amount, or an order was handed over without collection. The
          protection: a logistics partner with a digital collection system documenting every transaction,
          and reconciliation reports you review monthly — not a notebook and a driver's memory.
        </p>

        <h2 className={h2}>The ideal COD cycle, start to finish</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-2">
          <li className={li}><strong>At checkout:</strong> the amount and fees are clear before confirmation — no surprises at the door.</li>
          <li className={li}><strong>Before shipping:</strong> an automatic confirmation message (WhatsApp works best locally).</li>
          <li className={li}><strong>During delivery:</strong> a time-window notification + payment options at the door (cash or card/mada with the driver — every extra option cuts refusals).</li>
          <li className={li}><strong>After handover:</strong> the collection is logged in the system immediately.</li>
          <li className={li}><strong>If refused:</strong> the order enters the standard returns flow (receiving, inspection, restocking) — detailed in our <Link to="/blog/returns-management-ecommerce" className="text-fa-orange-soda font-semibold underline underline-offset-4">returns management guide</Link>.</li>
          <li className={li}><strong>Remittance:</strong> a weekly cycle with a reconciliation report.</li>
        </ol>

        <h2 className={h2}>The metrics to watch</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Metric</th>
                <th className={thEn}>Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>COD share of total orders</td><td className={td}>Shows how much your audience relies on it, and the trend over time</td></tr>
              <tr><td className={tdHead}>Delivery refusal rate</td><td className={td}>The governing metric — compare monthly and after every improvement</td></tr>
              <tr><td className={tdHead}>Average remittance cycle</td><td className={td}>The health of your cash flow</td></tr>
              <tr><td className={tdHead}>COD-to-prepaid conversion rate</td><td className={td}>Measures COD's success as a trust-building tool</td></tr>
            </tbody>
          </table>
        </div>

        <h2 className={h2}>Your logistics partner's role</h2>
        <p className={p}>
          Successful COD management lives almost entirely with whoever delivers: pre-ship confirmation,
          payment options at the door, collection documentation, the remittance cycle, and the refusals
          flow. That's why it's among the first questions to ask before choosing a{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            fulfillment
          </Link>{' '}
          company (see{' '}
          <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the 12 criteria
          </Link>{' '}
          — the COD criterion specifically). At Fast Access the full cycle is part of the service: from
          order confirmation to remittance with clear reconciliation reports.
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
            Make COD an advantage, not a gamble
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            From order confirmation to money in your account — a complete cycle governed by reports. Request
            your quote, and leave it to us.
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
