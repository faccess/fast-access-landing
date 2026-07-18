import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** /blog/inventory-management-basics — ninth article (bilingual). */

const META = {
  title: 'إدارة المخزون للمتاجر الإلكترونية: 7 مفاهيم تضبط فلوسك | فاست أكسس',
  desc:
    'دليل مبسط لإدارة المخزون في متجرك الإلكتروني: SKU، مخزون الأمان، نقطة إعادة الطلب، معدل الدوران، تصنيف ABC، الجرد، والتعامل مع الراكد — بأمثلة عملية لكل مفهوم.',
};

const META_EN = {
  title: 'Inventory Management for E-commerce: 7 Concepts That Keep Your Money in Check | Fast Access',
  desc:
    'A simple guide to managing inventory in your online store: SKUs, safety stock, the reorder point, turnover rate, ABC classification, stock counting, and handling dead stock — with practical examples for each.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'أبدأ بإكسل ولا أحتاج نظام من أول يوم؟',
    a: 'بأصناف قليلة وطلبات محدودة، إكسل منضبط يكفي مؤقتاً. لكن مع النمو، التحديث اليدوي نفسه يصير مصدر الأخطاء — والانتقال لنظام (أو لشريك فلفلمنت نظامه جاهز) يصير تحصيل حاصل.',
  },
  {
    q: 'مخزوني موزع بين بيتي ومستودع — كيف أوحّد الصورة؟',
    a: 'هذي من أكثر مصادر الفوضى: صنف «متوفر» بالنظام لكنه بالموقع الثاني. الحل إما نظام يدعم مواقع متعددة بترصيد منفصل، أو الأبسط: توحيد المخزون بموقع واحد مُدار — وهذا من أول مكاسب الانتقال للفلفلمنت.',
  },
  {
    q: 'كم مرة أحدّث توقعات الطلب؟',
    a: 'مراجعة شهرية خفيفة تكفي بالأوضاع العادية، وتصير أسبوعية قبل وأثناء المواسم — التوقع الجامد أخطر من عدمه لأنه يعطيك ثقة زايفة.',
  },
  {
    q: 'وش أخطر خطأ بإدارة المخزون؟',
    a: 'اتخاذ قرارات الشراء بالإحساس بدل الأرقام — «أحس هالمنتج بينباع» اشترت مخازن كاملة من الراكد. خلّ بيانات مبيعاتك الفعلية هي اللي تطلب، وحماسك للتسويق.',
  },
  {
    q: 'هل فاست أكسس تنبهني قبل نفاد صنف؟',
    a: 'نعم — مستويات مخزونك مرئية لحظياً بلوحة التحكم مع تنبيهات قبل النفاد، عشان طلبية المورد تنطلق بوقتها مو بعد فوات الأوان. اطلب عرض السعر وشوف اللوحة بنفسك بديمو.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Can I start with Excel, or do I need a system from day one?',
    a: 'With few SKUs and limited orders, disciplined Excel is enough temporarily. But as you grow, the manual updating itself becomes the source of errors — and moving to a system (or a fulfillment partner whose system is ready) becomes inevitable.',
  },
  {
    q: 'My inventory is split between my house and a warehouse — how do I unify the picture?',
    a: 'One of the biggest sources of chaos: an item "available" in the system but sitting at the other location. The fix is either a system with multi-location balances, or simpler: consolidating inventory in one managed location — one of the first wins of moving to fulfillment.',
  },
  {
    q: 'How often should I update demand forecasts?',
    a: 'A light monthly review is enough in normal times, moving to weekly before and during seasons — a frozen forecast is more dangerous than none, because it gives you false confidence.',
  },
  {
    q: 'What is the most dangerous inventory mistake?',
    a: 'Making purchase decisions by feel instead of numbers — "I feel this will sell" has bought entire warehouses of dead stock. Let your actual sales data do the ordering, and your enthusiasm do the marketing.',
  },
  {
    q: 'Does Fast Access alert me before an item runs out?',
    a: 'Yes — your stock levels are visible live on the dashboard with pre-stockout alerts, so the supplier order goes out on time, not after it’s too late. Request a quote and see the dashboard yourself in a demo.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'إدارة المخزون للمتاجر الإلكترونية: 7 مفاهيم تضبط فلوسك'
          : 'Inventory Management for E-commerce: 7 Concepts That Keep Your Money in Check',
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
        mainEntityOfPage: 'https://faccess.co/blog/inventory-management-basics',
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

export default function BlogArticle9() {
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
            إدارة المخزون للمتاجر الإلكترونية: 7 مفاهيم تضبط فلوسك
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            إدارة المخزون هي التوازن بين خطرين: النفاد (مبيعات ضايعة وعملاء راحوا للمنافس) والتكدس (رأس مال
            حبيس ورسوم تخزين بلا داعي). وأدواتها الأساسية سبعة مفاهيم: ترميز SKU لكل صنف، مخزون الأمان، نقطة
            إعادة الطلب، معدل الدوران، تصنيف ABC للأولويات، الجرد الدوري، وخطة واضحة للمخزون الراكد.
          </p>
        </div>

        <p className={p}>
          المخزون هو أكبر مبلغ من فلوسك موقف في مكان واحد — على أرفف. تديره صح: يدور ويتحول مبيعات وأرباح
          بإيقاع منتظم. تديره عشوائي: نص فلوسك نايمة في أصناف راكدة، والنص الثاني ناقص في الأصناف اللي
          تنباع فعلاً. والخبر الحلو إن ضبطه ما يحتاج شهادة بسلاسل الإمداد — يحتاج سبعة مفاهيم تفهمها مرة
          وتطبقها دايماً.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>المخزون فلوس بشكل بضاعة — كل قرار فيه قرار مالي قبل ما يكون تشغيلي.</li>
          <li className={li}>SKU لكل صنف هو الأساس اللي بدونه كل شي بعده تخمين.</li>
          <li className={li}>مخزون الأمان ونقطة إعادة الطلب هما صمام الأمان ضد النفاد.</li>
          <li className={li}>معدل الدوران يقول لك إذا فلوسك تشتغل ولا نايمة.</li>
          <li className={li}>20% من أصنافك تصنع أغلب مبيعاتك — تصنيف ABC يوجّه تركيزك لها.</li>
        </ul>

        <h2 className={h2}>1. الـ SKU: هوية كل صنف</h2>
        <p className={p}>
          الـ SKU (رمز وحدة التخزين) هو الرمز الفريد لكل تنويعة منتج عندك — القميص الأزرق مقاس L له SKU
          مختلف عن نفس القميص مقاس M. بدونه، «عندي 50 قميص» معلومة بلا قيمة: 50 من أي لون وأي مقاس؟ ابنِ
          ترميزك بنمط ثابت مفهوم (مثال: TSH-BLU-L) والتزم فيه من أول منتج — الترميم بعدين أصعب بكثير من
          التأسيس.
        </p>

        <h2 className={h2}>2. مخزون الأمان: وسادة الطوارئ</h2>
        <p className={p}>
          الكمية الإضافية اللي تحتفظ فيها فوق حاجتك المتوقعة، تمتص المفاجآت: طلب أعلى من المتوقع أو مورد
          تأخر. المنطق البسيط لحسابه: كم يبيع الصنف بأسوأ (أعلى) أسبوع، وكم أقصى تأخير محتمل من المورد —
          الفجوة بينهما وبين متوسطك الطبيعي هي وسادتك. الأصناف الأسرع والأهم تاخذ وسادة أسمك.
        </p>

        <h2 className={h2}>3. نقطة إعادة الطلب: متى تطلب؟</h2>
        <p className={p}>
          الرصيد اللي إذا وصله الصنف، تطلب دفعة جديدة <strong>فوراً</strong> — محسوب بحيث الدفعة توصل قبل
          نفاد الموجود:
        </p>
        <div className="mt-5 rounded-2xl bg-fa-liberty-blue p-6 lg:p-7 text-center">
          <p className="font-display text-[16px] lg:text-[19px] font-bold text-fa-classic-chalk leading-[1.9] m-0" dir="rtl">
            نقطة إعادة الطلب = (متوسط المبيعات اليومي × أيام توريد المورد) + مخزون الأمان
          </p>
        </div>
        <p className={p}>
          مثال: صنف يبيع 10 قطع يومياً، والمورد يوصّل خلال 7 أيام، ومخزون أمانه 30 قطعة ← نقطة إعادة الطلب =
          (10×7)+30 = <strong>100 قطعة</strong>. أول ما يلامس الرصيد 100، الطلبية تنطلق — بتنبيه آلي من
          نظامك، مو بذاكرتك.
        </p>

        <h2 className={h2}>4. معدل الدوران: هل فلوسك تشتغل؟</h2>
        <p className={p}>
          كم مرة يتجدد مخزونك (يُباع ويُستبدل) خلال فترة — أصدق مقياس لصحة فلوسك: دوران سريع يعني رأس مالك
          يدور ويربح مرات أكثر بنفس السنة؛ دوران بطيء يعني فلوس نايمة تدفع عليها رسوم تخزين (وهنا يلتقي
          المفهوم مع{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            معادلة تكلفة الطلب المكتمل
          </Link>
          ). قارن دورانك بنفسك عبر الزمن وبين أصنافك — الصنف الأبطأ دوراناً هو أول مرشح للمراجعة: تسعيره،
          تسويقه، أو مصيره.
        </p>

        <h2 className={h2}>5. تصنيف ABC: ركّز صح</h2>
        <p className={p}>طبّق قاعدة الأولويات على أصنافك:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>الفئة</th>
                <th className={th}>وصفها</th>
                <th className={th}>تعاملك معها</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>A</td><td className={td}>قلة من الأصناف تصنع معظم مبيعاتك</td><td className={td}>متابعة شبه يومية، مخزون أمان سخي، ولا تسمح بنفادها أبداً</td></tr>
              <tr><td className={tdHead}>B</td><td className={td}>الوسط المعقول</td><td className={td}>متابعة أسبوعية وقواعد إعادة طلب آلية</td></tr>
              <tr><td className={tdHead}>C</td><td className={td}>كثرة من الأصناف بمساهمة صغيرة</td><td className={td}>متابعة شهرية، كميات صغيرة، ومراجعة دورية: يستاهل البقاء بالكتالوج؟</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          الفخ المعتاد: توزيع نفس الاهتمام (ونفس رأس المال) على الكل بالتساوي — فينفد صنف A وأنت مشغول بجرد
          أصناف C.
        </p>

        <h2 className={h2}>6. الجرد: الحقيقة على الأرض</h2>
        <p className={p}>
          النظام يقول 80 قطعة والرف يقول 76 — هالفجوة اسمها انحراف الجرد، وأسبابها من أخطاء تسجيل إلى تلف
          غير موثق. علاجها الجرد الدوري، والأسلوب الأذكى للمتاجر هو <strong>الجرد الدوّار</strong>: بدل إغلاق
          سنوي مرهق، تجرد شريحة صغيرة كل فترة (أصناف A بتكرار أعلى) فتظل أرقامك موثوقة على مدار السنة. وأي
          فرق يُسجل ويُبحث سببه — الفرق المتكرر بنفس الصنف مؤشر مشكلة أعمق.
        </p>

        <h2 className={h2}>7. المخزون الراكد: القرار الصعب</h2>
        <p className={p}>
          الصنف اللي جلس شهور بلا حركة يستنزفك مرتين: رأس مال محبوس + رسوم تخزين شهرية. القاعدة النفسية
          أولاً: <strong>التكلفة اللي دفعتها راحت</strong> — القرار الصح يُبنى على مستقبل الصنف مو على ثمنه
          القديم. خياراتك بالترتيب: خصم تصفية، تجميعه مع صنف سريع (Bundle)، قناة تصريف بديلة، وأخيراً
          الإتلاف الموثق إذا انعدمت القيمة. الأهم: <strong>راجع الراكد بموعد ثابت</strong> (شهرياً أو
          ربعياً) — الركود اللي ما له موعد مراجعة يتراكم بصمت.
        </p>

        <h2 className={h2}>وين شركة الفلفلمنت من كل هذا؟</h2>
        <p className={p}>
          القرارات الاستراتيجية (وش تشتري، كم، ومصير الراكد) تظل قراراتك — لكن البنية اللي تخليها قرارات
          مبنية على حقائق هي شغل شريكك اللوجستي: أرقام لحظية لكل SKU، تنبيهات نقاط إعادة الطلب، جرد دوري
          بمسؤولية الشريك ودقة معلنة، وتقارير حركة توريك دورانك وراكدك بوضوح. (وقبل المواسم تحديداً، هالبنية
          هي اللي تخلي{' '}
          <Link to="/blog/peak-season-preparation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            خطة الذروة
          </Link>{' '}
          قابلة للتنفيذ أصلاً.) في فاست أكسس هذي البنية جاهزة من يوم واحد — مخزونك يوصل، ينرمّز، ويصير مرئي
          لك لحظياً من لوحة وحدة، ضمن منظومة{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الفلفلمنت
          </Link>{' '}
          الكاملة.
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
            مخزونك مرئي، مضبوط، ويدور
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            من الترميز إلى تنبيهات النفاد — بنية إدارة مخزون جاهزة من أول يوم. اطلب عرض سعرك، وخلّها علينا.
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
            Inventory Management for E-commerce: 7 Concepts That Keep Your Money in Check
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Inventory management is the balance between two dangers: stockouts (lost sales and customers
            gone to the competitor) and overstock (trapped capital and needless storage fees). Its core
            toolkit is seven concepts: an SKU code for every item, safety stock, the reorder point, turnover
            rate, ABC classification for priorities, periodic counting, and a clear plan for dead stock.
          </p>
        </div>

        <p className={p}>
          Inventory is the largest sum of your money sitting in one place — on shelves. Manage it right and
          it cycles into sales and profit at a steady rhythm. Manage it haphazardly and half your money
          sleeps in stale items while the other half is missing from the items that actually sell. The good
          news: getting it under control doesn't require a supply-chain degree — it requires seven concepts
          you understand once and apply forever.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Inventory is money in the shape of goods — every inventory decision is a financial decision before an operational one.</li>
          <li className={li}>An SKU per item is the foundation; without it, everything after is guesswork.</li>
          <li className={li}>Safety stock and the reorder point are your valves against stockouts.</li>
          <li className={li}>Turnover rate tells you whether your money is working or sleeping.</li>
          <li className={li}>20% of your items drive most of your sales — ABC classification points your focus at them.</li>
        </ul>

        <h2 className={h2}>1. The SKU: every item's identity</h2>
        <p className={p}>
          The SKU (stock keeping unit) is the unique code for every product variant you carry — the blue
          shirt in L has a different SKU from the same shirt in M. Without it, "I have 50 shirts" is
          worthless information: 50 of which color, which size? Build your coding on a fixed, readable
          pattern (e.g., TSH-BLU-L) and commit from the first product — repair later is far harder than
          founding right.
        </p>

        <h2 className={h2}>2. Safety stock: the emergency cushion</h2>
        <p className={p}>
          The extra quantity you hold above expected need, absorbing surprises: demand above forecast or a
          delayed supplier. The simple logic: how much does the item sell in its worst (highest) week, and
          what's the maximum plausible supplier delay — the gap between those and your normal average is
          your cushion. Faster and more critical items get a thicker one.
        </p>

        <h2 className={h2}>3. The reorder point: when do you order?</h2>
        <p className={p}>
          The balance at which, once an item reaches it, you order a new batch <strong>immediately</strong>{' '}
          — calculated so the batch arrives before what's left runs out:
        </p>
        <div className="mt-5 rounded-2xl bg-fa-liberty-blue p-6 lg:p-7 text-center">
          <p className="font-display text-[16px] lg:text-[19px] font-bold text-fa-classic-chalk leading-[1.9] m-0">
            Reorder point = (average daily sales × supplier lead-time days) + safety stock
          </p>
        </div>
        <p className={p}>
          Example: an item selling 10 units a day, a supplier delivering in 7 days, and safety stock of 30
          units → reorder point = (10×7)+30 = <strong>100 units</strong>. The moment the balance touches
          100, the order goes out — by an automatic alert from your system, not from your memory.
        </p>

        <h2 className={h2}>4. Turnover rate: is your money working?</h2>
        <p className={p}>
          How many times your inventory renews (sells and gets replaced) in a period — the most honest
          gauge of your money's health: fast turnover means your capital cycles and earns more times in the
          same year; slow turnover means sleeping money you pay storage fees on (which is where this
          concept meets{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the completed-order cost equation
          </Link>
          ). Compare your turnover against yourself over time and across items — the slowest turner is the
          first candidate for review: its pricing, its marketing, or its fate.
        </p>

        <h2 className={h2}>5. ABC classification: focus correctly</h2>
        <p className={p}>Apply the priority rule to your items:</p>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Class</th>
                <th className={thEn}>Description</th>
                <th className={thEn}>How you treat it</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>A</td><td className={td}>A few items driving most of your sales</td><td className={td}>Near-daily monitoring, generous safety stock, and never allow a stockout</td></tr>
              <tr><td className={tdHead}>B</td><td className={td}>The reasonable middle</td><td className={td}>Weekly monitoring and automatic reorder rules</td></tr>
              <tr><td className={tdHead}>C</td><td className={td}>Many items with small contribution</td><td className={td}>Monthly monitoring, small quantities, and a periodic review: does it deserve to stay in the catalog?</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          The usual trap: spreading the same attention (and the same capital) evenly across everything — so
          an A item runs out while you're busy counting C items.
        </p>

        <h2 className={h2}>6. Counting: the truth on the ground</h2>
        <p className={p}>
          The system says 80 units, the shelf says 76 — that gap is called count variance, and its causes
          range from logging errors to undocumented damage. The cure is periodic counting, and the smartest
          method for stores is <strong>cycle counting</strong>: instead of an exhausting annual shutdown,
          you count a small slice regularly (A items more frequently), keeping your numbers trustworthy all
          year. Every variance gets logged and investigated — a repeated variance on the same item signals a
          deeper problem.
        </p>

        <h2 className={h2}>7. Dead stock: the hard decision</h2>
        <p className={p}>
          An item that has sat motionless for months drains you twice: locked capital + monthly storage
          fees. The psychological rule first: <strong>the cost you paid is gone</strong> — the right
          decision is built on the item's future, not its old price. Your options, in order: clearance
          discount, bundling with a fast seller, an alternative liquidation channel, and finally documented
          disposal if the value is gone. Most important: <strong>review dead stock on a fixed schedule</strong>{' '}
          (monthly or quarterly) — stagnation with no review date piles up silently.
        </p>

        <h2 className={h2}>Where does the fulfillment company fit in all this?</h2>
        <p className={p}>
          The strategic decisions (what to buy, how much, and the fate of dead stock) remain yours — but
          the infrastructure that makes them fact-based decisions is your logistics partner's job: live
          numbers per SKU, reorder-point alerts, periodic counting under the partner's responsibility with a
          published accuracy rate, and movement reports showing your turnover and your dead stock clearly.
          (And before seasons specifically, this infrastructure is what makes{' '}
          <Link to="/blog/peak-season-preparation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            the peak plan
          </Link>{' '}
          executable at all.) At Fast Access this infrastructure is ready from day one — your inventory
          arrives, gets coded, and becomes visible to you live from a single dashboard, within the full{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            fulfillment
          </Link>{' '}
          setup.
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
            Your inventory: visible, controlled, and turning
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            From coding to stockout alerts — inventory management infrastructure ready from day one.
            Request your quote, and leave it to us.
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
