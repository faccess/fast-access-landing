import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** /blog/3pl-vs-4pl-difference — seventh article (bilingual). */

const META = {
  title: 'الفرق بين 3PL و4PL؟ وأين يقف الدروبشيبينغ من كل هذا | فاست أكسس',
  desc:
    'شرح مبسط لمستويات الخدمات اللوجستية من 1PL إلى 4PL، الفرق الجوهري بين 3PL و4PL، مقارنة الفلفلمنت بالدروبشيبينغ، وأي نموذج يناسب حجم متجرك اليوم.',
};

const META_EN = {
  title: '3PL vs 4PL: What’s the Difference? And Where Does Dropshipping Fit? | Fast Access',
  desc:
    'A simple explanation of logistics service levels from 1PL to 4PL, the core difference between 3PL and 4PL, fulfillment vs dropshipping compared, and which model fits your store’s size today.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'هل فاست أكسس 3PL ولا شركة فلفلمنت؟',
    a: 'الاثنين — فالفلفلمنت هو خدمة الـ 3PL الموجهة للتجارة الإلكترونية: تخزين، تجهيز بهوية علامتك، شحن، دارك ستور، ومرتجعات، بتكامل مباشر مع سلة وزد وشوبيفاي.',
  },
  {
    q: 'هل في 5PL؟',
    a: 'يُستخدم المصطلح أحياناً لوصف إدارة سلاسل إمداد كاملة عبر منصات وشبكات لعدة عملاء معاً — لكنه خارج أي نقاش عملي لمتاجر التجارة الإلكترونية، ولا تشغل بالك فيه.',
  },
  {
    q: 'أقدر أجمع دروبشيبينغ وفلفلمنت بنفس المتجر؟',
    a: 'نعم وهذا شائع: أصنافك المثبتة الرابحة بمخزون مملوك عبر الفلفلمنت (تحكم وهامش وسرعة)، وأصناف الاختبار الجديدة دروبشيبينغ — لين تثبت فتنضم للمخزون.',
  },
  {
    q: 'هل الانتقال من التجهيز الذاتي لـ 3PL معقد؟',
    a: 'أبسط مما يتصور أغلب التجار: نقل مخزون + ربط المتجر بتطبيق جاهز. والبداية الذكية بجزء من المخزون لمدة تجريبية — كما نصحنا بدليل الاختيار.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Is Fast Access a 3PL or a fulfillment company?',
    a: 'Both — fulfillment is the 3PL service aimed at e-commerce: storage, branded order prep, shipping, dark stores and returns, with direct Salla, Zid and Shopify integration.',
  },
  {
    q: 'Is there such a thing as 5PL?',
    a: 'The term is sometimes used for managing entire supply chains across platforms and networks for multiple clients at once — but it sits outside any practical discussion for e-commerce stores. Don’t worry about it.',
  },
  {
    q: 'Can I combine dropshipping and fulfillment in the same store?',
    a: 'Yes, and it’s common: your proven winning items with owned inventory through fulfillment (control, margin and speed), and new test items via dropshipping — until they prove themselves and join the inventory.',
  },
  {
    q: 'Is moving from self-fulfillment to a 3PL complicated?',
    a: 'Simpler than most merchants imagine: moving inventory + connecting your store with a ready-made app. The smart start is part of your inventory for a trial period — as we advised in the choosing guide.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'الفرق بين 3PL و4PL؟ وأين يقف الدروبشيبينغ من كل هذا'
          : '3PL vs 4PL: What’s the Difference? And Where Does Dropshipping Fit?',
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
        mainEntityOfPage: 'https://faccess.co/blog/3pl-vs-4pl-difference',
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

export default function BlogArticle7() {
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
            الفرق بين 3PL و4PL؟ وأين يقف الدروبشيبينغ من كل هذا
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            الـ 3PL (الطرف اللوجستي الثالث) شركة <strong>تنفّذ</strong> عملياتك اللوجستية بنفسها: تخزّن في
            مستودعاتها وتجهّز بفرقها وتشحن عبر شبكتها. الـ 4PL (الطرف الرابع) طبقة <strong>إدارة وإشراف</strong>{' '}
            فوقها: لا يملك مستودعات غالباً، بل يدير عدة شركات 3PL وسلسلة الإمداد كاملة نيابة عن الشركات
            الضخمة. لمتاجر التجارة الإلكترونية بكل أحجامها العملية تقريباً، الـ 3PL هو المستوى المناسب.
          </p>
        </div>

        <p className={p}>
          المصطلحات اللوجستية تلخبط: 3PL، 4PL، فلفلمنت، دروبشيبينغ — وكل واحد يستخدمها بمعنى شوي مختلف. هذا
          المقال يرتبها لك مرة وحدة بترتيب منطقي، عشان لما توصلك عروض أو تقرأ مقارنات، تعرف بالضبط وش اللي
          ينباع لك.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>الأرقام (1PL←4PL) تعني: مين يسوي الشغل اللوجستي — أنت، ناقل، منفّذ متكامل، أو مدير فوق المنفذين.</li>
          <li className={li}>3PL ينفّذ بأصوله؛ 4PL يدير وينسّق بلا أصول غالباً.</li>
          <li className={li}>الفلفلمنت هو خدمة الـ 3PL المصممة للتجارة الإلكترونية تحديداً.</li>
          <li className={li}>الدروبشيبينغ نموذج <strong>تجاري</strong> مختلف كلياً: ما تملك مخزون أصلاً — مو مستوى لوجستي.</li>
          <li className={li}>لمتجرك الإلكتروني: 3PL هو الإجابة في الغالبية الساحقة من الحالات.</li>
        </ul>

        <h2 className={h2}>المستويات الأربعة بمثال واحد</h2>
        <p className={p}>تخيل متجر عطور:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المستوى</th>
                <th className={th}>الاسم</th>
                <th className={th}>مين يسوي الشغل</th>
                <th className={th}>مثالنا</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>1PL</td><td className={td}>اللوجستيات الذاتية</td><td className={td}>أنت بنفسك</td><td className={td}>تخزّن بملحقك وتوصّل بسيارتك</td></tr>
              <tr><td className={tdHead}>2PL</td><td className={td}>الناقل</td><td className={td}>أنت تجهّز، وناقل يوصّل</td><td className={td}>تغلّف بنفسك وتسلّم لشركة شحن</td></tr>
              <tr><td className={tdHead}>3PL</td><td className={td}>الطرف الثالث</td><td className={td}>شركة متكاملة تنفّذ كل شي</td><td className={td}>ترسل مخزونك لفاست أكسس — تخزين وتجهيز وشحن ومرتجعات</td></tr>
              <tr><td className={tdHead}>4PL</td><td className={td}>الطرف الرابع</td><td className={td}>مدير يشرف على عدة أطراف ثالثة</td><td className={td}>شركة عالمية عندها مخازن بخمس دول توكّل جهة تدير كل مزودي الـ 3PL عندها</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          لاحظ التدرج: كل مستوى تتنازل فيه عن جزء من التنفيذ مقابل تفرّغ أكبر — والسؤال الصح مو «أي مستوى
          أفضل؟» بل «أي مستوى يناسب حجمي ومرحلة نموي؟»
        </p>

        <h2 className={h2}>3PL مقابل 4PL — الفرق الجوهري</h2>
        <p className={p}>
          <strong>الـ 3PL يملك وينفّذ:</strong> مستودعات، فرق تجهيز، أنظمة، وشبكات توصيل. تتعامل معه مباشرة،
          وتشوف أداءه بأرقامه هو. هذا اللي يحتاجه أي متجر إلكتروني: جهة وحدة تنفّذ سلسلته كاملة. (تفاصيل
          الخدمة نفسها في{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الدليل الشامل للفلفلمنت
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>الـ 4PL يدير ولا ينفّذ:</strong> طبقة استشارية-إدارية فوق المنفذين. يظهر احتياجه لما
          تتضخم السلسلة: مصانع بدولة، مخازن بثلاث دول، عشر شركات نقل — وقتها تحتاج «مايسترو» يدير
          الأوركسترا. وبعض شركات الـ 3PL الكبيرة تقدم طبقة 4PL كخدمة إضافية لعملائها المتوسعين.
        </p>
        <p className={p}>
          <strong>متى تفكر بالـ 4PL؟</strong> عملياً: لما يصير عندك أكثر من مزود 3PL في أكثر من سوق وتحتاج
          جهة توحّد الإدارة. قبل كذا، الـ 4PL طبقة تكلفة بدون قيمة لحجمك.
        </p>

        <h2 className={h2}>طيب والدروبشيبينغ؟</h2>
        <p className={p}>
          الدروبشيبينغ <strong>مو مستوى لوجستي</strong> — هو نموذج عمل تجاري مختلف من الجذر: ما تشتري مخزون
          أصلاً؛ العميل يطلب من متجرك، وأنت تمرر الطلب لمورّد يشحنه مباشرة باسمك (نظرياً).
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>وجه المقارنة</th>
                <th className={th}>الفلفلمنت (3PL)</th>
                <th className={th}>الدروبشيبينغ</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>ملكية المخزون</td><td className={td}>مخزونك أنت، بمستودع الشريك</td><td className={td}>مخزون المورّد</td></tr>
              <tr><td className={tdHead}>رأس المال</td><td className={td}>تشتري المخزون مقدماً</td><td className={td}>شبه معدوم</td></tr>
              <tr><td className={tdHead}>التحكم بالجودة</td><td className={td}>كامل — منتجك وتغليفك وفحصك</td><td className={td}>معدوم تقريباً — بيد المورّد</td></tr>
              <tr><td className={tdHead}>هوية البراند</td><td className={td}>تغليف باسمك وتجربة كاملة</td><td className={td}>نادراً، وغالباً تغليف المورد</td></tr>
              <tr><td className={tdHead}>سرعة التوصيل</td><td className={td}>أيام محلياً (أو ساعات بالدارك ستور)</td><td className={td}>غالباً أسابيع إذا المورّد خارجي</td></tr>
              <tr><td className={tdHead}>الهوامش</td><td className={td}>أعلى — تشتري جملة</td><td className={td}>مضغوطة — المورّد ياخذ حصته</td></tr>
              <tr><td className={tdHead}>المخاطرة</td><td className={td}>مخزون قد يركد</td><td className={td}>سمعتك بيد طرف ما تتحكم فيه</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          الخلاصة بصراحة: الدروبشيبينغ باب دخول منخفض التكلفة لاختبار فكرة — لكن بناء <strong>براند</strong>{' '}
          حقيقي بولاء عملاء يحتاج تحكم بالمنتج والتجربة، وهذا طريق المخزون المملوك + فلفلمنت. وكثير من
          التجار الناجحين بدأوا دروبشيبينغ لاختبار الطلب، وأول ما ثبت المنتج تحولوا لمخزون خاص — مسار منطقي
          تماماً.
        </p>

        <h2 className={h2}>أي نموذج يناسبك اليوم؟</h2>
        <ul className="mt-4 list-disc pr-6 space-y-3">
          <li className={li}><strong>تختبر فكرة منتج بدون رأس مال؟</strong> دروبشيبينغ للاختبار — بعيون مفتوحة على حدوده.</li>
          <li className={li}><strong>طلباتك قليلة (عشرات شهرياً) ووقتك يسمح؟</strong> 1PL/2PL منطقي مؤقتاً.</li>
          <li className={li}><strong>طلباتك بالمئات وتبي تتفرغ للنمو وبراندك يستاهل تجربة كاملة؟</strong> 3PL/فلفلمنت — وهنا ينفعك{' '}
            <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
              دليل الاختيار بمعاييره الـ 12
            </Link>
            .
          </li>
          <li className={li}><strong>إمبراطورية بعدة أسواق ومزودين؟</strong> وقتها فقط يدخل الـ 4PL بالنقاش.</li>
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

        <div className="mt-14 rounded-2xl bg-fa-liberty-blue p-8 lg:p-10 text-center">
          <h2 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-classic-chalk m-0">
            جاهز تنتقل لمستوى الـ 3PL؟
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            مخزونك عندنا، وطلباتك تتجهز بهوية براندك، وأنت متفرغ للنمو. اطلب عرض سعرك اليوم، وخلّها علينا.
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
            3PL vs 4PL: What's the Difference? And Where Does Dropshipping Fit?
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            A 3PL (third-party logistics provider) <strong>executes</strong> your logistics itself: it
            stores in its warehouses, preps with its teams, and ships through its network. A 4PL
            (fourth-party) is a layer of <strong>management and oversight</strong> above it: it usually owns
            no warehouses, but manages multiple 3PLs and the entire supply chain on behalf of very large
            companies. For practically every e-commerce store size, 3PL is the right level.
          </p>
        </div>

        <p className={p}>
          Logistics terms get muddled: 3PL, 4PL, fulfillment, dropshipping — and everyone uses them slightly
          differently. This article sorts them once, in logical order, so when offers land in your inbox or
          you read comparisons, you know exactly what's being sold to you.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>The numbers (1PL→4PL) answer one question: who does the logistics work — you, a carrier, an integrated executor, or a manager above the executors.</li>
          <li className={li}>3PL executes with its own assets; 4PL manages and coordinates, usually without assets.</li>
          <li className={li}>Fulfillment is the 3PL service designed specifically for e-commerce.</li>
          <li className={li}>Dropshipping is a fundamentally different <strong>business</strong> model: you never own inventory — it's not a logistics level.</li>
          <li className={li}>For your online store: 3PL is the answer in the overwhelming majority of cases.</li>
        </ul>

        <h2 className={h2}>The four levels in one example</h2>
        <p className={p}>Picture a perfume store:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Level</th>
                <th className={thEn}>Name</th>
                <th className={thEn}>Who does the work</th>
                <th className={thEn}>Our example</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>1PL</td><td className={td}>Self-logistics</td><td className={td}>You, yourself</td><td className={td}>Storing in your annex, delivering in your car</td></tr>
              <tr><td className={tdHead}>2PL</td><td className={td}>The carrier</td><td className={td}>You prep, a carrier delivers</td><td className={td}>You pack yourself and hand parcels to a courier</td></tr>
              <tr><td className={tdHead}>3PL</td><td className={td}>Third party</td><td className={td}>An integrated company executes everything</td><td className={td}>You send inventory to Fast Access — storage, prep, shipping and returns</td></tr>
              <tr><td className={tdHead}>4PL</td><td className={td}>Fourth party</td><td className={td}>A manager overseeing several third parties</td><td className={td}>A global company with warehouses in five countries appoints one party to manage all its 3PLs</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          Notice the ladder: each level trades away part of the execution in exchange for more focus — and
          the right question isn't "which level is best?" but "which level fits my size and growth stage?"
        </p>

        <h2 className={h2}>3PL vs 4PL — the core difference</h2>
        <p className={p}>
          <strong>A 3PL owns and executes:</strong> warehouses, prep teams, systems and delivery networks.
          You deal with it directly and see its performance in its own numbers. That's what any e-commerce
          store needs: one party executing its whole chain. (The service itself is detailed in{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the complete fulfillment guide
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>A 4PL manages, and does not execute:</strong> a consulting-management layer above the
          executors. The need appears when the chain balloons: factories in one country, warehouses in
          three, ten transport companies — that's when you need a "maestro" to conduct the orchestra. Some
          large 3PLs offer a 4PL layer as an add-on for their expanding clients.
        </p>
        <p className={p}>
          <strong>When to consider 4PL?</strong> Practically: when you have more than one 3PL provider in
          more than one market and need one party to unify management. Before that, 4PL is a cost layer with
          no value at your size.
        </p>

        <h2 className={h2}>And dropshipping?</h2>
        <p className={p}>
          Dropshipping is <strong>not a logistics level</strong> — it's a fundamentally different business
          model: you don't buy inventory at all; the customer orders from your store, and you pass the order
          to a supplier who ships it directly under your name (in theory).
        </p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Comparison</th>
                <th className={thEn}>Fulfillment (3PL)</th>
                <th className={thEn}>Dropshipping</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Inventory ownership</td><td className={td}>Yours, in the partner's warehouse</td><td className={td}>The supplier's</td></tr>
              <tr><td className={tdHead}>Capital</td><td className={td}>You buy inventory upfront</td><td className={td}>Nearly zero</td></tr>
              <tr><td className={tdHead}>Quality control</td><td className={td}>Full — your product, your packaging, your inspection</td><td className={td}>Nearly none — in the supplier's hands</td></tr>
              <tr><td className={tdHead}>Brand identity</td><td className={td}>Branded packaging and a complete experience</td><td className={td}>Rarely — usually the supplier's packaging</td></tr>
              <tr><td className={tdHead}>Delivery speed</td><td className={td}>Days locally (or hours via dark stores)</td><td className={td}>Often weeks if the supplier is overseas</td></tr>
              <tr><td className={tdHead}>Margins</td><td className={td}>Higher — you buy wholesale</td><td className={td}>Squeezed — the supplier takes their share</td></tr>
              <tr><td className={tdHead}>Risk</td><td className={td}>Inventory can go stale</td><td className={td}>Your reputation in the hands of a party you don't control</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          The honest bottom line: dropshipping is a low-cost entry door for testing an idea — but building a
          real <strong>brand</strong> with loyal customers needs control over the product and the
          experience, and that's the owned-inventory + fulfillment path. Many successful merchants started
          with dropshipping to test demand, then moved to owned stock once the product proved itself — an
          entirely logical path.
        </p>

        <h2 className={h2}>Which model fits you today?</h2>
        <ul className="mt-4 list-disc pl-6 space-y-3">
          <li className={li}><strong>Testing a product idea with no capital?</strong> Dropshipping for the test — with eyes open to its limits.</li>
          <li className={li}><strong>Few orders (dozens a month) and time to spare?</strong> 1PL/2PL makes temporary sense.</li>
          <li className={li}><strong>Hundreds of orders, ready to focus on growth, and a brand worth a full experience?</strong> 3PL/fulfillment — where{' '}
            <Link to="/blog/how-to-choose-fulfillment-company" className="text-fa-orange-soda font-semibold underline underline-offset-4">
              the choosing guide and its 12 criteria
            </Link>{' '}
            serves you.
          </li>
          <li className={li}><strong>An empire across several markets and providers?</strong> Only then does 4PL enter the conversation.</li>
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
            Ready to move up to the 3PL level?
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Your inventory with us, your orders packed under your brand, and you free to grow. Request your
            quote today, and leave it to us.
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
