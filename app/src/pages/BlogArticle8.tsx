import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * /blog/peak-season-preparation — eighth article (bilingual).
 * Seasonal evergreen: refresh the intro annually before each major season.
 */

const META = {
  title: 'جهّز متجرك لمواسم الذروة: خطة 6 أسابيع قبل رمضان والجمعة البيضاء | فاست أكسس',
  desc:
    'خطة عملية من 6 أسابيع لتجهيز متجرك الإلكتروني لمواسم الذروة في السعودية: توقع الطلب، تأمين المخزون، تجهيز العمليات والشحن، وخطة الطوارئ — عشان الموسم يرفعك مو يكسرك.',
};

const META_EN = {
  title: 'Get Your Store Peak-Season Ready: The Full 6-Week Plan | Fast Access',
  desc:
    'A practical 6-week plan to prepare your online store for Saudi peak seasons: demand forecasting, securing inventory, operations and shipping readiness, and a contingency plan — so the season lifts you instead of breaking you.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'ستة أسابيع ما تكفيني — الموسم بعد أسبوعين، وش أسوي؟',
    a: 'ركّز على الأثر الأسرع: أمّن مخزون أبطالك فقط، اضبط توقعات الشحن المعلنة بصدق، فعّل تأكيد طلبات COD، وجهّز ردود خدمة العملاء. وسجّل درس الموسم: التجهيز الجاي يبدأ من اليوم.',
  },
  {
    q: 'كيف أوازن بين خوف نفاد المخزون وخوف الركود بعده؟',
    a: 'بالسيناريوهات: مخزون يغطي المتوقع + اتفاق مرن مع المورد على دفعة سريعة إذا انطلق المتفائل. وللمتبقي بعد الموسم خطط مسبقاً: عروض تصفية أو تجميعات (Bundles) بدل ما يجلس يأكل رسوم تخزين.',
  },
  {
    q: 'هل أرفع أسعار الشحن بالموسم؟',
    a: 'الأفضل لا — العميل بالموسم حساس للمقارنة. عالج ضغط التكلفة بكفاءة العمليات وأسعار الجملة عبر شريكك اللوجستي، مو بتحميله للعميل بأحرج وقت.',
  },
  {
    q: 'متجري صغير — هل كلامكم هذا لي؟',
    a: 'لك بالذات: المتجر الكبير عنده هامش يمتص الأخطاء، الصغير كل خطأ موسمي يوجعه أكثر. طبّق نفس الخطة بنطاق أصغر — نفس المبادئ، أرقام أصغر.',
  },
  {
    q: 'كيف يساعد الفلفلمنت تحديداً بالمواسم؟',
    a: 'الموسم هو بالضبط اللحظة اللي صُمم لها: طاقة تجهيز تتمدد مع طلباتك بدون ما توظف أحد، مخزونك مؤمّن بمستودعات جاهزة، وشحن بأسعار وشبكات الجملة — تدفع على الاستخدام وقت الذروة بدل ما تبني طاقة تخاف تركد باقي السنة. كلمنا قبل موسمك الجاي بوقت كافي، وخلّها علينا.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Six weeks is more than I have — the season is two weeks away. What do I do?',
    a: 'Focus on the fastest impact: secure inventory for your hero items only, honestly adjust your published shipping expectations, enable COD order confirmation, and prepare customer-service replies. And log the lesson: next season’s preparation starts today.',
  },
  {
    q: 'How do I balance fear of stockouts against fear of dead stock afterwards?',
    a: 'With scenarios: inventory covering the expected case + a flexible supplier agreement for a fast top-up if the optimistic case takes off. And plan ahead for the leftovers: clearance offers or bundles instead of letting them sit and eat storage fees.',
  },
  {
    q: 'Should I raise shipping prices during the season?',
    a: 'Better not — seasonal customers are comparison-sensitive. Handle cost pressure with operational efficiency and wholesale rates through your logistics partner, not by charging the customer at the most awkward moment.',
  },
  {
    q: 'My store is small — is this really for me?',
    a: 'Especially for you: a big store has margin to absorb mistakes; for a small one, every seasonal error hurts more. Apply the same plan at a smaller scale — same principles, smaller numbers.',
  },
  {
    q: 'How exactly does fulfillment help during seasons?',
    a: 'The season is precisely what it was designed for: prep capacity that stretches with your orders without hiring anyone, inventory secured in ready warehouses, and shipping at wholesale networks and rates — you pay for usage at the peak instead of building capacity you fear will idle the rest of the year. Talk to us well before your next season, and leave it to us.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'جهّز متجرك لمواسم الذروة: خطة 6 أسابيع كاملة'
          : 'Get Your Store Peak-Season Ready: The Full 6-Week Plan',
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
        mainEntityOfPage: 'https://faccess.co/blog/peak-season-preparation',
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

export default function BlogArticle8() {
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
            جهّز متجرك لمواسم الذروة: خطة 6 أسابيع كاملة
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            التجهيز لموسم الذروة يبدأ قبله بستة أسابيع على الأقل ويقوم على خمسة محاور: توقّع الطلب بناءً على
            بياناتك، تأمين المخزون ووصوله للمستودع مبكراً، رفع الطاقة التشغيلية للتجهيز والشحن، تجهيز واجهة
            المتجر وخدمة العملاء، وخطة طوارئ للسيناريو الأعلى من المتوقع — لأن الموسم يضخّم كل شي: نجاح
            عملياتك أو عيوبها.
          </p>
        </div>

        <p className={p}>
          مواسم الذروة في السوق السعودي معروفة بالتقويم: رمضان والعيدين، اليوم الوطني ويوم التأسيس، الجمعة
          البيضاء، ومواسم العودة للمدارس — وكل تاجر يعرف إنها جاية. ومع كذا، كل موسم نشوف متاجر تنهار فيه:
          مخزون خلص من ثاني يوم، طلبات تأخرت أسبوعين، وتقييمات سلبية مسحت مجهود سنة كاملة. متجر يطلع
          من الموسم بأرقام قياسية، ومتجر ثاني يطلع بخسائر وتقييمات تلاحقه — والفرق بينهما ما هو حظ، الفرق تجهيز
          مسبق. وهذا اللي بنسويه هنا: خطة عملية تبدأ قبل الموسم بستة أسابيع، خطوة بخطوة.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>الموسم يضاعف طلباتك ويضاعف معها كل نقطة ضعف تشغيلية عندك — جهّز العمليات قبل التسويق.</li>
          <li className={li}>توقّع الطلب من بياناتك أنت (نفس الموسم السنة الماضية × نموك) مو من التفاؤل.</li>
          <li className={li}>المخزون يوصل المستودع قبل الموسم بأسبوعين على الأقل — موردك أيضاً عنده ذروة.</li>
          <li className={li}>أعلن مواعيد الشحن الواقعية للموسم بشفافية — وعد صادق بيومين أحسن من وعد كاذب بيوم.</li>
          <li className={li}>ما بعد الموسم جزء من الموسم: موجة المرتجعات والتقييم البارد بنفس أهمية موجة المبيعات.</li>
        </ul>

        <h2 className={h2}>الأسبوعان 6-5 قبل الموسم: التوقع والمخزون</h2>
        <p className={p}>
          <strong>توقّع الطلب بالأرقام:</strong> ارجع لبيانات نفس الموسم السنة الماضية، اضربها بمعدل نموك
          الحالي، وأضف أثر عروضك المخططة. اطلع بثلاثة سيناريوهات: متحفظ، متوقع، ومتفائل — وجهّز مخزونك على
          المتوقع وخطة طوارئك على المتفائل.
        </p>
        <p className={p}>
          <strong>اطلب المخزون فوراً:</strong> موردك عنده ذروة مثلك، والشحن (خصوصاً المستورد) أزمنته تطول
          بالمواسم. القاعدة: المخزون كامل في مستودعك (أو مستودع شريكك اللوجستي){' '}
          <strong>قبل انطلاق الموسم بأسبوعين على الأقل</strong>.
        </p>
        <p className={p}>
          <strong>ركّز على الأبطال:</strong> بيانات مبيعاتك توريك الأصناف اللي تسحب بالمواسم — أمّن عمقها
          أولاً، ولا توزع رأس مالك بالتساوي على كل الكتالوج.
        </p>

        <h2 className={h2}>الأسبوعان 4-3: العمليات والشحن</h2>
        <p className={p}>
          <strong>اختبر طاقتك التشغيلية بسؤال صريح:</strong> لو جاك ضعفين طلباتك اليومية بكرة، تجهّزها بنفس
          السرعة والدقة؟ إذا الجواب لا — وهو غالباً لا للتجهيز الذاتي — فهذا آخر وقت تنقل فيه العمليات لشريك
          فلفلمنت يمتص الذروة، لأن النقل نفسه يحتاج أسابيع استقرار. (البداية من{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الدليل الشامل
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>جهّز مواد التغليف بحساب الذروة:</strong> نفاد الكراتين وسط الموسم مشكلة سخيفة ومكلفة —
          اطلب على السيناريو المتفائل، الفائض ينستخدم بعدين.
        </p>
        <p className={p}>
          <strong>فعّل التوصيل السريع وين ما أمكن:</strong> بالموسم كل المتاجر تتنافس على انتباه نفس العميل،
          و«يوصلك اليوم» حجة حسم قوية —{' '}
          <Link to="/blog/dark-store-same-day-delivery" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الدارك ستور
          </Link>{' '}
          لأصنافك الأسرع داخل المدن يعطيك هالميزة وقت ما تحتاجها أكثر شي.
        </p>
        <p className={p}>
          <strong>اضبط توقعات الشحن المعلنة:</strong> حدّث صفحة الشحن ورسائل ما بعد الطلب بأزمنة الموسم
          الواقعية. العميل يتقبل «3-4 أيام لضغط الموسم» المعلنة مقدماً، وما يغفر «خلال 24 ساعة» اللي صارت
          خمسة أيام.
        </p>

        <h2 className={h2}>الأسبوعان 2-1: الواجهة والفريق</h2>
        <p className={p}>
          <strong>واجهة المتجر:</strong> صفحات العروض جاهزة ومختبرة، سرعة الموقع مفحوصة (زحمة الموسم تكشف
          البطء)، والمقاسات والأوصاف مراجعة — لأن كل غموض بالوصف يتحول مرتجعات مضاعفة بالموسم.
        </p>
        <p className={p}>
          <strong>خدمة العملاء:</strong> جهّز ردود جاهزة لأسئلة الموسم المتكررة (وين طلبي؟ متى يوصل؟ سياسة
          الإرجاع؟) ووسّع تغطية الرد — حجم الاستفسارات يتضاعف مع حجم الطلبات.
        </p>
        <p className={p}>
          <strong>الـ COD تحت السيطرة:</strong> فعّل تأكيد الطلبات قبل الشحن إن ما كان مفعّل — الطلبات
          الاندفاعية تكثر بالمواسم ومعها رفض الاستلام. (التفاصيل في{' '}
          <Link to="/blog/cash-on-delivery-guide" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            دليل الـ COD
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>خطة الطوارئ المكتوبة:</strong> وش تسوي لو نفد صنف رئيسي؟ (بديل مقترح؟ إشعار انتظار؟) لو
          تعطل التوصيل بمنطقة؟ لو انقطع التواصل مع مورد؟ ساعة تفكير قبل الموسم توفر عليك يوم ذعر داخله.
        </p>

        <h2 className={h2}>داخل الموسم: راقب وعدّل</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>تابع يومياً: المبيعات مقابل التوقع، مستويات مخزون الأبطال، وزمن التجهيز الفعلي.</li>
          <li className={li}>شغّل تنبيهات نفاد المخزون المبكرة — وأوقف إعلانات أي صنف قارب النفاد بدل ما تدفع لزيارات بتنتهي بخيبة.</li>
          <li className={li}>لا تطلق عرض جديد وعملياتك أصلاً على الحافة — الانضباط وسط الحماس هو اللي يحمي تقييماتك.</li>
        </ul>

        <h2 className={h2}>بعد الموسم: الربع الأخير من الشوط</h2>
        <ol className="mt-4 list-decimal pr-6 space-y-3">
          <li className={li}>
            <strong>موجة المرتجعات:</strong> طبيعية بعد كل موسم (هدايا، اندفاع شراء) — جهّز مسارها من قبل،
            ورحّب فيها بصدر واسع: تجربة الإرجاع السلسة هي اللي تحوّل مشتري الموسم لعميل دائم (
            <Link to="/blog/returns-management-ecommerce" className="text-fa-orange-soda font-semibold underline underline-offset-4">
              دليل المرتجعات
            </Link>
            ).
          </li>
          <li className={li}>
            <strong>التقييم البارد:</strong> خلال أسبوع من نهاية الموسم، بالأرقام: وين طابق التوقع؟ وين
            انكسرت العمليات؟ وش أول ثلاثة إصلاحات قبل الموسم الجاي؟ — هذا التقرير أثمن مخرجات الموسم كلها.
          </li>
          <li className={li}>
            <strong>استثمر العملاء الجدد:</strong> مشترو الموسم أول مرة هم أكبر غنيمة — رسالة شكر، وعرض
            للعودة، وخدمة ما بعد بيع تليق.
          </li>
        </ol>

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
            موسمك الجاي — جاهز له من اليوم
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            خلّ الذروة ترفع مبيعاتك مو ضغطك: مخزون مؤمّن، تجهيز يتمدد، وشحن ما يتأخر. اطلب عرض سعرك قبل
            الموسم، وخلّها علينا.
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
            Get Your Store Peak-Season Ready: The Full 6-Week Plan
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Peak-season preparation starts at least six weeks out and rests on five pillars: forecasting
            demand from your own data, securing inventory and getting it into the warehouse early, raising
            prep and shipping capacity, readying the storefront and customer service, and a contingency
            plan for the above-forecast scenario — because the season amplifies everything: your
            operation's strengths or its flaws.
          </p>
        </div>

        <p className={p}>
          Saudi peak seasons are on the calendar: Ramadan and the two Eids, National Day and Founding Day,
          White Friday, and back-to-school — every merchant knows they're coming. And yet every season we
          watch stores collapse into them: inventory gone by day two, orders delayed two weeks, negative
          reviews wiping out a year's effort. One store exits the season with record numbers; another
          exits with losses and reviews that follow it around — and the difference between them isn't luck, it's preparation
          done in advance. That's what this article is for: a practical plan that starts six weeks before
          the season, step by step.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>The season multiplies your orders — and multiplies every operational weakness with them. Prepare operations before marketing.</li>
          <li className={li}>Forecast demand from your own data (last year's same season × your growth), not from optimism.</li>
          <li className={li}>Inventory reaches the warehouse at least two weeks before the season — your supplier has a peak too.</li>
          <li className={li}>Publish realistic seasonal shipping times transparently — an honest two-day promise beats a false one-day promise.</li>
          <li className={li}>Post-season is part of the season: the returns wave and the cold review matter as much as the sales wave.</li>
        </ul>

        <h2 className={h2}>Weeks 6–5 out: forecast and inventory</h2>
        <p className={p}>
          <strong>Forecast with numbers:</strong> pull last year's same-season data, multiply by your
          current growth rate, and add the impact of your planned promotions. Produce three scenarios —
          conservative, expected, optimistic — and stock for the expected while building your contingency
          on the optimistic.
        </p>
        <p className={p}>
          <strong>Order inventory immediately:</strong> your supplier has a peak like yours, and shipping
          (especially imports) slows down in season. The rule: full inventory in your warehouse (or your
          logistics partner's) <strong>at least two weeks before the season opens</strong>.
        </p>
        <p className={p}>
          <strong>Focus on the heroes:</strong> your sales data shows which items pull in seasons — secure
          their depth first, and don't spread your capital evenly across the whole catalog.
        </p>

        <h2 className={h2}>Weeks 4–3: operations and shipping</h2>
        <p className={p}>
          <strong>Stress-test your capacity with one blunt question:</strong> if double your daily orders
          arrived tomorrow, could you prep them at the same speed and accuracy? If the answer is no — and
          for self-fulfillment it usually is — this is the last window to move operations to a fulfillment
          partner that absorbs the peak, because the move itself needs weeks to settle. (Start with{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the complete guide
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>Stock packaging materials at peak levels:</strong> running out of boxes mid-season is a
          silly, costly problem — order for the optimistic scenario; the surplus gets used later.
        </p>
        <p className={p}>
          <strong>Enable fast delivery wherever possible:</strong> in season, every store competes for the
          same customer's attention, and "arrives today" is a powerful closer —{' '}
          <Link to="/blog/dark-store-same-day-delivery" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            dark stores
          </Link>{' '}
          for your fastest items inside the cities give you that edge exactly when you need it most.
        </p>
        <p className={p}>
          <strong>Reset published shipping expectations:</strong> update the shipping page and post-order
          messages with realistic seasonal times. Customers accept "3–4 days due to seasonal volume"
          announced upfront; they don't forgive "within 24 hours" that became five days.
        </p>

        <h2 className={h2}>Weeks 2–1: storefront and team</h2>
        <p className={p}>
          <strong>The storefront:</strong> promotion pages built and tested, site speed checked (seasonal
          traffic exposes slowness), sizes and descriptions reviewed — every ambiguity in a description
          turns into doubled returns in season.
        </p>
        <p className={p}>
          <strong>Customer service:</strong> prepare canned replies for the season's repeat questions
          (where's my order? when does it arrive? return policy?) and widen response coverage — inquiries
          scale with orders.
        </p>
        <p className={p}>
          <strong>COD under control:</strong> enable pre-ship order confirmation if it isn't already —
          impulse orders surge in seasons, and delivery refusals with them. (Details in{' '}
          <Link to="/blog/cash-on-delivery-guide" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the COD guide
          </Link>
          .)
        </p>
        <p className={p}>
          <strong>A written contingency plan:</strong> what do you do if a hero item runs out? (a suggested
          substitute? a waitlist notice?) If delivery breaks in one region? If a supplier goes silent? An
          hour of thinking before the season saves you a day of panic inside it.
        </p>

        <h2 className={h2}>Inside the season: watch and adjust</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Track daily: sales vs forecast, hero inventory levels, and actual prep time.</li>
          <li className={li}>Turn on early stockout alerts — and pause ads for any item nearing depletion instead of paying for visits that end in disappointment.</li>
          <li className={li}>Don't launch a new promotion while operations are already at the edge — discipline amid the excitement is what protects your reviews.</li>
        </ul>

        <h2 className={h2}>After the season: the final quarter of the match</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-3">
          <li className={li}>
            <strong>The returns wave:</strong> natural after every season (gifts, impulse buys) — prepare
            its flow beforehand and welcome it warmly: a smooth return experience is what turns a seasonal
            buyer into a permanent customer (
            <Link to="/blog/returns-management-ecommerce" className="text-fa-orange-soda font-semibold underline underline-offset-4">
              the returns guide
            </Link>
            ).
          </li>
          <li className={li}>
            <strong>The cold review:</strong> within a week of season's end, in numbers: where did reality
            match the forecast? Where did operations crack? What are the first three fixes before next
            season? — this report is the season's most valuable output.
          </li>
          <li className={li}>
            <strong>Invest in the new customers:</strong> first-time seasonal buyers are the biggest prize
            — a thank-you message, a comeback offer, and after-sales service that fits.
          </li>
        </ol>

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
            Your next season — ready for it from today
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Let the peak lift your sales, not your stress: inventory secured, prep that stretches, and
            shipping that doesn't slip. Request your quote before the season, and leave it to us.
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
