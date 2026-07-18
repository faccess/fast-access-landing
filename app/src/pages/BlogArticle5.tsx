import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** /blog/dark-store-same-day-delivery — fifth article (bilingual). */

const META = {
  title: 'الدارك ستور: كيف توصّل طلبات متجرك بنفس اليوم؟ | فاست أكسس',
  desc:
    'ما هو الدارك ستور وكيف يمكّن متجرك الإلكتروني من التوصيل بنفس اليوم داخل المدن؟ شرح الفكرة، الفرق عن المستودع المركزي، المنتجات المناسبة، وأثره على مبيعاتك.',
};

const META_EN = {
  title: 'Dark Stores: How to Deliver Your Store’s Orders Same-Day | Fast Access',
  desc:
    'What is a dark store, and how does it let your online store deliver same-day inside cities? The concept, how it differs from a central warehouse, which products fit, and its impact on your sales.',
};

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'هل الدارك ستور مناسب للمتاجر الصغيرة؟',
    a: 'كخدمة ضمن الفلفلمنت — نعم، لأنك تدفع على الاستخدام مو على البنية. كمشروع تبنيه بنفسك — غالباً لا قبل أحجام كبيرة جداً.',
  },
  {
    q: 'هل أحتاج أنقل كل مخزوني للدارك ستور؟',
    a: 'لا، بالعكس — الدارك ستور للنخبة السريعة من أصنافك فقط، والعمق يظل في المستودع المركزي.',
  },
  {
    q: 'وش الفرق بين الدارك ستور والتوصيل السريع من شركة شحن؟',
    a: 'شركة الشحن السريعة تسرّع المشوار، لكن إذا مخزونك أصلاً بعيد فالمشوار طويل مهما أسرعت. الدارك ستور يقصّر المسافة نفسها — وهذا الفرق الجوهري.',
  },
  {
    q: 'كيف أعرف أي منتجات أحط فيه؟',
    a: 'بياناتك تجاوب: أكثر الأصناف مبيعاً داخل المدينة المستهدفة خلال آخر 3 شهور، مع مراعاة الحجم. وشريكك اللوجستي يساعدك بالتحليل.',
  },
  {
    q: 'هل التوصيل بنفس اليوم متاح بكل المدن؟',
    a: 'يعتمد على شبكة الدارك ستورز المتوفرة. اسأل عن نطاق التغطية الحالي وخطة التوسع — وكلمنا نعطيك تغطية فاست أكسس المحدثة.',
  },
];

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'Are dark stores suitable for small stores?',
    a: 'As a service within fulfillment — yes, because you pay for usage, not infrastructure. As something you build yourself — usually not until you reach very large volumes.',
  },
  {
    q: 'Do I need to move all my inventory to the dark store?',
    a: 'No — the opposite. The dark store is for the fast-moving elite of your catalog only; the depth stays in the central warehouse.',
  },
  {
    q: 'What’s the difference between a dark store and express courier delivery?',
    a: 'An express courier speeds up the trip — but if your stock is far away, the trip is long no matter how fast they drive. A dark store shortens the distance itself, and that’s the fundamental difference.',
  },
  {
    q: 'How do I know which products to place in it?',
    a: 'Your data answers: your best-selling items inside the target city over the last three months, factoring in size. Your logistics partner helps with the analysis.',
  },
  {
    q: 'Is same-day delivery available in every city?',
    a: 'It depends on the available dark-store network. Ask about current coverage and the expansion plan — and talk to us for Fast Access’s up-to-date coverage.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'الدارك ستور: كيف توصّل طلبات متجرك بنفس اليوم؟'
          : 'Dark Stores: How to Deliver Your Store’s Orders Same-Day',
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
        mainEntityOfPage: 'https://faccess.co/blog/dark-store-same-day-delivery',
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

export default function BlogArticle5() {
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
            الدارك ستور: كيف توصّل طلبات متجرك بنفس اليوم؟
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            الدارك ستور (Dark Store) هو مستودع صغير داخل المدينة، قريب من أحياء العملاء، مخصص لتجهيز طلبات
            التجارة الإلكترونية فقط — بدون واجهة بيع ولا زوار. قربه الجغرافي هو اللي يخلي التوصيل بنفس اليوم
            (وأحياناً خلال ساعات) ممكناً وبتكلفة معقولة، لأن الطلب يقطع كيلومترات معدودة بدل ما يعبر المدينة
            كاملة من مستودع مركزي بأطرافها.
          </p>
        </div>

        <p className={p}>
          عميلك اتعوّد: يطلب الظهر ويستلم العصر. تطبيقات التوصيل السريع غيّرت توقعات المشتري السعودي عن «متى
          المفروض توصل الأغراض» — والمتجر اللي يقول «التوصيل خلال 3-5 أيام عمل» صار يتنافس بقواعد قديمة.
          الدارك ستور هو الحل اللي يخلي متجرك — مهما كان حجمه — يلعب بنفس سرعة الكبار بدون ما يبني شبكة
          مستودعات بنفسه.
        </p>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>الدارك ستور = مستودع مصغّر داخل المدينة، مخصص للتجهيز السريع، بدون واجهة بيع.</li>
          <li className={li}>سرعة التوصيل تجي من قصر المسافة، مو من سرعة المندوب.</li>
          <li className={li}>الأنسب له: المنتجات سريعة الحركة اللي يحتاجها العميل اليوم مو الأسبوع الجاي.</li>
          <li className={li}>ما يلغي المستودع المركزي — يكمّله: المركزي للعمق، والدارك ستور للسرعة.</li>
          <li className={li}>التوصيل السريع مو رفاهية تشغيلية: يرفع إتمام الشراء ويقلل الإلغاءات ورفض الاستلام.</li>
        </ul>

        <h2 className={h2}>وش الفرق بينه وبين المستودع المركزي؟</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>وجه المقارنة</th>
                <th className={th}>المستودع المركزي</th>
                <th className={th}>الدارك ستور</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>الموقع</td><td className={td}>أطراف المدينة / مناطق صناعية</td><td className={td}>داخل الأحياء، قريب من العملاء</td></tr>
              <tr><td className={tdHead}>الحجم</td><td className={td}>كبير — كل مخزونك</td><td className={td}>صغير — المنتجات سريعة الحركة فقط</td></tr>
              <tr><td className={tdHead}>الدور</td><td className={td}>العمق التخزيني والشحن لكل المناطق</td><td className={td}>السرعة داخل المدينة</td></tr>
              <tr><td className={tdHead}>زمن التوصيل</td><td className={td}>يوم لأيام حسب الوجهة</td><td className={td}>نفس اليوم — وأحياناً ساعات</td></tr>
              <tr><td className={tdHead}>التكلفة للمتر</td><td className={td}>أقل</td><td className={td}>أعلى، لكن على مساحة أصغر بكثير</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          الصيغة الذكية تجمعهما: مخزونك الكامل في المستودع المركزي، ونسخة مصغّرة من الأصناف الأكثر مبيعاً في
          دارك ستور داخل المدينة — يتغذى منه تلقائياً كل ما نقص.
        </p>

        <h2 className={h2}>كيف يشتغل عملياً؟</h2>
        <ol className="mt-4 list-decimal pr-6 space-y-2">
          <li className={li}>تحدد (بالبيانات) أكثر منتجاتك طلباً داخل المدينة المستهدفة.</li>
          <li className={li}>كمية محسوبة منها تنقل للدارك ستور، والباقي يظل بالمستودع المركزي.</li>
          <li className={li}>الطلب الجاي من داخل نطاق التغطية يتوجه تلقائياً للدارك ستور، يتجهز، وينطلق لمشوار قصير.</li>
          <li className={li}>الطلبات خارج النطاق أو لمنتجات غير متوفرة بالدارك ستور تخدم من المركزي بالمسار العادي.</li>
          <li className={li}>النظام يعيد تعبئة الدارك ستور دورياً حسب سرعة السحب.</li>
        </ol>
        <p className={p}>كل هذا التوجيه يصير خلف الكواليس — عميلك ما يشوف إلا نتيجة وحدة: «طلبك في الطريق».</p>

        <h2 className={h2}>ليش يفرق مع مبيعاتك؟ ثلاث نقاط</h2>
        <p className={p}>
          <strong>1. إتمام الشراء:</strong> «يوصلك اليوم» جنب زر الشراء تكسر تردد اللحظة الأخيرة — خصوصاً
          للمنتجات اللي الحاجة لها آنية (هدية، مستلزمات، قطعة ناقصة).
        </p>
        <p className={p}>
          <strong>2. تقليل الإلغاءات ورفض الاستلام:</strong> أكثر الإلغاءات تصير في فترة الانتظار — كل ما
          قصرت الفترة، قلّت فرصة تغيّر المزاج. وهذا ينعكس مباشرة على طلبات{' '}
          <Link to="/blog/cash-on-delivery-guide" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الدفع عند الاستلام
          </Link>{' '}
          تحديداً.
        </p>
        <p className={p}>
          <strong>3. التميز التنافسي:</strong> إذا منافسك يوصل بثلاثة أيام وأنت بنفس اليوم، فهذي ميزة تسوّق
          فيها بصوت عالي — بالبنر الرئيسي مو بصفحة الشحن.
        </p>

        <h2 className={h2}>وش المنتجات المناسبة للدارك ستور؟</h2>
        <p className={p}>
          الأولوية للأصناف اللي تجتمع فيها ثلاث صفات: <strong>سريعة الحركة</strong> (تستاهل مساحة قريبة
          غالية)، <strong>حجمها معقول</strong> (الدارك ستور مساحته محسوبة)، و<strong>الحاجة لها عاجلة</strong>{' '}
          بطبيعتها. عطور ومستحضرات، مستلزمات أطفال، إكسسوارات، منتجات عناية — أمثلة كلاسيكية. أما بطيء
          الحركة أو ضخم الحجم فمكانه الطبيعي المستودع المركزي.
        </p>

        <h2 className={h2}>كيف تبدأ بدون ما تبني شي؟</h2>
        <p className={p}>
          بناء دارك ستور خاص فيك يعني إيجار وتشغيل وعمالة في كل مدينة — استثمار ما يستقيم إلا للعمالقة.
          البديل: <strong>الدارك ستور كخدمة</strong> ضمن منظومة{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            الفلفلمنت
          </Link>{' '}
          — وهذا نموذج فاست أكسس: مستودعاتنا السحابية داخل المدن جاهزة، تحط فيها أصنافك السريعة، وطلباتك داخل
          النطاق تنطلق بنفس اليوم — بنفس التكامل ونفس لوحة التحكم، بدون أي بنية تحتية عليك. (وتذكّر من{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            مقال التكلفة
          </Link>
          : قيّم أثر السرعة على مبيعاتك، مو بس بند الشحن.)
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
            خلّ «يوصل اليوم» ميزتك الجاية
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            حط أصنافك السريعة في دارك ستور فاست أكسس، وخلّ طلبات مدينتك توصل بنفس اليوم. اطلب عرض السعر،
            وخلّها علينا.
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
            Dark Stores: How to Deliver Your Store's Orders Same-Day
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            A dark store is a small warehouse inside the city, close to customer neighborhoods, dedicated
            purely to preparing e-commerce orders — no storefront, no visitors. Its proximity is what makes
            same-day delivery (sometimes within hours) possible at a reasonable cost: the order travels a
            few kilometers instead of crossing the whole city from a central warehouse on its outskirts.
          </p>
        </div>

        <p className={p}>
          Your customer has developed a habit: order at noon, receive by afternoon. Quick-delivery apps
          changed the Saudi buyer's expectations of "when things should arrive" — and a store promising
          "delivery in 3–5 business days" is now competing by old rules. The dark store is what lets your
          store — whatever its size — play at the speed of the giants without building a warehouse network
          of its own.
        </p>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Dark store = a mini in-city warehouse, dedicated to fast prep, with no storefront.</li>
          <li className={li}>Delivery speed comes from a shorter distance, not a faster courier.</li>
          <li className={li}>Best fit: fast-moving products the customer needs today, not next week.</li>
          <li className={li}>It doesn't replace the central warehouse — it complements it: central for depth, dark store for speed.</li>
          <li className={li}>Fast delivery isn't an operational luxury: it lifts checkout completion and cuts cancellations and delivery refusals.</li>
        </ul>

        <h2 className={h2}>How is it different from a central warehouse?</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Comparison</th>
                <th className={thEn}>Central warehouse</th>
                <th className={thEn}>Dark store</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className={tdHead}>Location</td><td className={td}>City outskirts / industrial zones</td><td className={td}>Inside neighborhoods, close to customers</td></tr>
              <tr><td className={tdHead}>Size</td><td className={td}>Large — your full inventory</td><td className={td}>Small — fast movers only</td></tr>
              <tr><td className={tdHead}>Role</td><td className={td}>Storage depth and shipping to all regions</td><td className={td}>Speed inside the city</td></tr>
              <tr><td className={tdHead}>Delivery time</td><td className={td}>A day to days, by destination</td><td className={td}>Same-day — sometimes hours</td></tr>
              <tr><td className={tdHead}>Cost per m²</td><td className={td}>Lower</td><td className={td}>Higher, but over a much smaller footprint</td></tr>
            </tbody>
          </table>
        </div>
        <p className={p}>
          The smart setup combines both: your full inventory in the central warehouse, and a compact replica
          of your best sellers in an in-city dark store — automatically replenished whenever it runs low.
        </p>

        <h2 className={h2}>How does it work in practice?</h2>
        <ol className="mt-4 list-decimal pl-6 space-y-2">
          <li className={li}>You identify (from data) your most-demanded products inside the target city.</li>
          <li className={li}>A calculated quantity moves to the dark store; the rest stays in the central warehouse.</li>
          <li className={li}>An order from inside the coverage zone routes automatically to the dark store, gets prepped, and leaves on a short trip.</li>
          <li className={li}>Orders outside the zone, or for products not stocked there, are served from the central warehouse on the standard route.</li>
          <li className={li}>The system replenishes the dark store periodically based on how fast items are drawn down.</li>
        </ol>
        <p className={p}>All that routing happens backstage — your customer sees a single result: "your order is on its way."</p>

        <h2 className={h2}>Why does it move your sales? Three points</h2>
        <p className={p}>
          <strong>1. Checkout completion:</strong> "Arrives today" next to the buy button breaks last-moment
          hesitation — especially for products with immediate need (a gift, essentials, a missing piece).
        </p>
        <p className={p}>
          <strong>2. Fewer cancellations and refusals:</strong> most cancellations happen during the waiting
          window — the shorter it gets, the smaller the chance of a change of heart. That reflects directly
          on{' '}
          <Link to="/blog/cash-on-delivery-guide" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            cash-on-delivery
          </Link>{' '}
          orders in particular.
        </p>
        <p className={p}>
          <strong>3. Competitive edge:</strong> if your competitor delivers in three days and you deliver
          same-day, that's an advantage to market loudly — in the main banner, not the shipping page.
        </p>

        <h2 className={h2}>Which products fit a dark store?</h2>
        <p className={p}>
          Priority goes to items combining three traits: <strong>fast-moving</strong> (worth expensive
          close-in space), <strong>reasonably sized</strong> (dark-store space is measured), and{' '}
          <strong>urgent by nature</strong>. Perfumes and cosmetics, baby essentials, accessories, personal
          care — classic examples. Slow movers and bulky items belong in the central warehouse.
        </p>

        <h2 className={h2}>How to start without building anything</h2>
        <p className={p}>
          Building your own dark stores means rent, operations and staff in every city — an investment that
          only makes sense for giants. The alternative: <strong>dark store as a service</strong> within a{' '}
          <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            fulfillment
          </Link>{' '}
          setup — which is the Fast Access model: our cloud warehouses inside the cities are ready, you
          place your fast movers in them, and in-zone orders go out same-day — same integration, same
          dashboard, zero infrastructure on you. (And remember from the{' '}
          <Link to="/blog/fulfillment-cost-calculation" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            cost article
          </Link>
          : weigh speed's impact on your sales, not just the shipping line item.)
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
            Make "arrives today" your next advantage
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Place your fast movers in a Fast Access dark store, and let your city's orders arrive the same
            day. Request a quote, and leave it to us.
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
