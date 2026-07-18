import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * /blog/how-to-choose-fulfillment-company — second article.
 * Literal Arabic source content; Article + FAQPage JSON-LD scoped here.
 */

const META = {
  title: 'كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع | فاست أكسس',
  desc:
    'دليل عملي لاختيار شركة التخزين والشحن المناسبة لمتجرك الإلكتروني في السعودية: 12 معيار أساسي، أسئلة تطرحها قبل التعاقد، وعلامات حمراء تحذّرك من الشركة الغلط.',
};

const META_EN = {
  title: 'How to Choose a Storage & Shipping Company for Your Store: 12 Criteria Before You Sign | Fast Access',
  desc:
    'A practical guide to choosing the right storage and shipping company for your e-commerce store in Saudi Arabia: 12 essential criteria, the questions to ask before signing, and red flags that warn you off the wrong company.',
};

const FAQS_EN: Array<{ q: string; a: string }> = [
  {
    q: 'How many companies should I compare before deciding?',
    a: 'At least three. Ask each for a detailed quote on the same numbers (same order volume and inventory size) so the comparison is fair.',
  },
  {
    q: 'Should I move all my inventory from day one?',
    a: 'You don\u2019t have to. The smart start: part of your inventory or a single product line for a month, measuring real performance (speed, accuracy, customer experience) before the full move.',
  },
  {
    q: 'If I had to pick one criterion, what matters most?',
    a: 'Platform integration + on-time rate. The first defines how smooth your day is; the second defines how happy your customer is — everything else builds on those two.',
  },
  {
    q: 'Is the cheapest always the wrong choice?',
    a: 'No — but a price far below market has a hidden cost: slower prep, more errors, or fees that appear later. Judge price as part of the full picture, not on its own.',
  },
  {
    q: 'How do I test Fast Access against these same criteria?',
    a: 'Simple: request a quote and ask us every question in the table above — our Salla, Zid and Shopify integrations are ready, average prep is two hours, our on-time rate is 99.8%, and we\u2019ll answer the rest with numbers.',
  },
];

const FAQS: Array<{ q: string; a: string }> = [
  {
    q: 'كم شركة أقارن قبل ما أقرر؟',
    a: 'ثلاث شركات على الأقل. اطلب من كل وحدة عرض سعر مفصّل على نفس الأرقام (نفس عدد الطلبات وحجم المخزون) عشان تكون المقارنة عادلة.',
  },
  {
    q: 'هل أنقل كل مخزوني من أول يوم؟',
    a: 'ما يلزم. البداية الذكية: جزء من المخزون أو خط منتجات واحد لمدة شهر، تقيس فيها الأداء الفعلي (سرعة، دقة، تجربة عميل) قبل النقل الكامل.',
  },
  {
    q: 'وش أهم معيار واحد لو اضطريت أختصر؟',
    a: 'التكامل مع منصتك + نسبة الالتزام بالمواعيد. الأول يحدد سلاسة يومك، والثاني يحدد رضا عميلك — والباقي تفاصيل تنبني عليهما.',
  },
  {
    q: 'هل الأرخص دايماً الخيار الغلط؟',
    a: 'لا، بس السعر المنخفض جداً عن السوق له ثمن مخفي: تجهيز أبطأ، أخطاء أكثر، أو رسوم تطلع لك بعدين. قيّم السعر ضمن الصورة الكاملة، مو لحاله.',
  },
  {
    q: 'كيف أجرب فاست أكسس بنفس هذي المعايير؟',
    a: 'بكل بساطة: اطلب عرض سعر واسألنا نفس أسئلة الجدول فوق — تكاملنا مع سلة وزد وشوبيفاي جاهز، متوسط التجهيز ساعتان، والتزامنا بالمواعيد 99.8%، والباقي نجاوبك عليه بالأرقام.',
  },
];

function useArticleSchema(isAr: boolean) {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: isAr
          ? 'كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع'
          : 'How to Choose a Storage & Shipping Company for Your Store: 12 Criteria Before You Sign',
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
        mainEntityOfPage: 'https://faccess.co/blog/how-to-choose-fulfillment-company',
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

const CRITERIA_TABLE_EN: Array<[string, string, string]> = [
  ['Integration', 'Do you have a ready app for Salla/Zid/Shopify?', 'Yes — one-click connection'],
  ['Prep speed', 'What is your average order prep time?', 'Hours, not days'],
  ['On-time rate', 'What is your on-time shipping rate?', 'Above 98%, published'],
  ['Accuracy', 'What is your order accuracy rate?', 'Above 99%'],
  ['Coverage', 'Where do you deliver, with which options?', 'All of KSA + fast in-city delivery'],
  ['COD', 'How long is your COD remittance cycle?', 'Weekly or faster'],
  ['Returns', 'How do you manage returns?', 'Inspection & restocking within a set window'],
  ['Licensing', 'Can I see your licenses and SFDA?', 'Yes, immediately'],
  ['Pricing', 'A detailed quote with all fees?', 'Transparent, no hidden lines'],
  ['Flexibility', 'What happens if my orders triple?', 'We absorb it, no new conditions'],
  ['Support', 'Who do I call when something breaks?', 'A direct channel and an account manager'],
  ['Reputation', 'Can I talk to current clients?', 'Yes — here are their numbers'],
];

const CRITERIA_TABLE: Array<[string, string, string]> = [
  ['التكامل', 'هل عندكم تطبيق جاهز لسلة/زد/شوبيفاي؟', 'نعم، ربط بضغطة زر'],
  ['التجهيز', 'كم متوسط زمن تجهيز الطلب؟', 'ساعات، مو أيام'],
  ['الالتزام', 'وش نسبة الشحن في الوقت المحدد؟', 'فوق 98% ومعلنة'],
  ['الدقة', 'وش نسبة الطلبات الصحيحة؟', 'فوق 99%'],
  ['التغطية', 'وين توصّلون وبأي خيارات؟', 'كل المملكة + توصيل سريع بالمدن'],
  ['COD', 'كم دورة تحويل المبالغ؟', 'أسبوعية أو أسرع'],
  ['المرتجعات', 'كيف تديرون المرتجع؟', 'فحص وإرجاع للمخزون بمدة محددة'],
  ['التراخيص', 'ممكن صور التراخيص وSFDA؟', 'نعم فوراً'],
  ['التسعير', 'عرض مفصّل بكل الرسوم؟', 'شفاف بدون بنود مخفية'],
  ['المرونة', 'وش يصير لو تضاعفت طلباتي؟', 'نستوعب بدون شروط جديدة'],
  ['الدعم', 'مين أكلم إذا صارت مشكلة؟', 'قناة مباشرة ومدير حساب'],
  ['السمعة', 'ممكن أكلم عملاء حاليين؟', 'نعم، وهذي أرقامهم'],
];

export default function BlogArticle2() {
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
            كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">18 يوليو 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-right">
        {/* صندوق الإجابة المباشرة */}
        <div className="rounded-2xl border-r-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            اختيار شركة التخزين والشحن الصح يقوم على 12 معيار أساسي أهمها: التكامل المباشر مع منصة متجرك
            (سلة، زد، شوبيفاي)، سرعة تجهيز الطلبات، نسبة الالتزام بمواعيد الشحن، شفافية التسعير، التعامل مع
            الدفع عند الاستلام، وإدارة المرتجعات — والشركة اللي ما تقدر تعطيك أرقام واضحة في هذي النقاط، هذا
            بحد ذاته جواب.
          </p>
        </div>

        <p className={p}>
          قرار اختيار شريكك اللوجستي من أثقل القرارات في مشوار متجرك — لأنك ما تسلّمه مهمة، أنت تسلّمه{' '}
          <strong>بضاعتك وتجربة عميلك وسمعة براندك</strong>. شركة ممتازة تخليك تكبر وأنت مرتاح، وشركة غلط
          تحرق لك تقييماتك وترجّعك سنة لورا. في هذا الدليل نعطيك الـ 12 معيار اللي تقيّم فيها أي شركة
          فلفلمنت، والأسئلة اللي تطرحها بالضبط، وشكل الإجابة الممتازة — عشان تدخل أي اجتماع تفاوض وأنت أعلم
          واحد بالطاولة.
        </p>

        <div className="mt-6 rounded-xl bg-fa-liberty-blue/[0.04] border border-fa-liberty-blue/10 p-5">
          <p className="font-body text-[15px] text-fa-ink-muted leading-[1.8] m-0">
            إذا لسا ما تعرف وش الفلفلمنت أصلاً أو الفرق بينه وبين شركات الشحن، ابدأ بمقالنا:{' '}
            <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-bold underline underline-offset-4">
              ما هو الفلفلمنت؟ الدليل الشامل
            </Link>{' '}
            وارجع لهنا.
          </p>
        </div>

        <h2 className={h2}>خلاصة سريعة</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>التكامل المباشر مع منصتك (سلة/زد/شوبيفاي) شرط أساسي مو ميزة — الربط اليدوي يعني أخطاء وتأخير.</li>
          <li className={li}>اطلب أرقام مو وعود: نسبة الشحن في الوقت، متوسط زمن التجهيز، ونسبة دقة الطلبات.</li>
          <li className={li}>التسعير الصح يُقارن بالتكلفة الإجمالية لكل طلب مكتمل، مو ببنود متفرقة.</li>
          <li className={li}>إدارة المرتجعات والدفع عند الاستلام هما اللي يفرقان الشركة الفاهمة للسوق السعودي عن غيرها.</li>
          <li className={li}>أي شركة ترفض تعطيك عملاء حاليين تكلمهم = علامة حمراء.</li>
        </ul>

        <h2 className={h2}>المجموعة الأولى: التقنية والتكامل</h2>

        <h3 className={h3}>1. التكامل المباشر مع منصة متجرك</h3>
        <p className={p}>
          أول سؤال تسأله: «هل عندكم تطبيق جاهز في متجر تطبيقات سلة أو زد؟» الشركة الجادة يكون ربطها بضغطة
          زر: تثبّت التطبيق، وكل طلب جديد ينسحب تلقائياً لنظام المستودع. أما إذا كان الحل «أرسلوا لنا ملف
          إكسل بالطلبات» — فهذا مو فلفلمنت، هذا تعذيب يومي وأخطاء مضمونة.{' '}
          <Link to="/#integrations" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            شوف تكاملات فاست أكسس
          </Link>
        </p>

        <h3 className={h3}>2. لوحة التحكم والرؤية اللحظية</h3>
        <p className={p}>
          لازم تشوف مخزونك وطلباتك لحظة بلحظة من شاشة وحدة: كم قطعة متوفرة من كل منتج، وين وصل كل طلب، وكم
          طلب اترجّع. اطلب <strong>ديمو حي</strong> للوحة التحكم قبل التوقيع — إذا اللوحة قديمة أو تحدّث مرة
          باليوم، تجربتك بتكون عمياء.
        </p>

        <h3 className={h3}>3. دقة إدارة المخزون</h3>
        <p className={p}>
          اسأل: «وش نسبة دقة الجرد عندكم؟ وكيف تتعاملون مع الفروقات؟» الشركات المحترفة تسوي جرد دوري وتعطيك
          تقارير، وتتحمل مسؤولية أي نقص من عندها. وضّح من البداية آلية التعويض عن المفقود أو التالف داخل
          المستودع — واكتبها بالعقد.
        </p>

        <h2 className={h2}>المجموعة الثانية: العمليات</h2>

        <h3 className={h3}>4. سرعة تجهيز الطلب</h3>
        <p className={p}>
          المعيار الذهبي: من لحظة وصول الطلب إلى تسليمه لشركة الشحن. الإجابة الممتازة تُقاس بالساعات مو
          بالأيام — في فاست أكسس مثلاً المتوسط ساعتان. اسأل أيضاً: «وش آخر وقت باليوم يطلع فيه الطلب بنفس
          اليوم؟» (الـ Cut-off time) — لأن هذا اللي يحدد هل طلب الساعة 3 العصر يوصل بكرة ولا بعد بكرة.
        </p>

        <h3 className={h3}>5. الالتزام بالمواعيد ونِسَب الدقة</h3>
        <p className={p}>
          رقمان يكشفان الشركة: <strong>نسبة الشحن في الوقت المحدد</strong> (الممتاز فوق 98%) و
          <strong>نسبة دقة الطلبات</strong> — يعني كم طلب طلع صح بدون منتج غلط أو ناقص. الشركة اللي تعلن
          أرقامها واثقة من عملياتها؛ واللي تقول «إن شاء الله كله تمام» بدون رقم، خذ حذرك.
        </p>

        <h3 className={h3}>6. التغطية الجغرافية وخيارات التوصيل</h3>
        <p className={p}>
          هل توصّل لكل مناطق المملكة ولا بس المدن الرئيسية؟ وش الخيارات: توصيل عادي، توصيل بنفس اليوم داخل
          المدن (دارك ستور)، نقاط استلام ذكية مثل ريدبوكس؟ كل خيار إضافي يعني قدرة أكبر على إرضاء شرائح
          مختلفة من عملائك — وعملاء المدن الكبرى تحديداً صاروا يتوقعون التوصيل السريع.
        </p>

        <h3 className={h3}>7. التعامل مع الدفع عند الاستلام (COD)</h3>
        <p className={p}>
          الدفع عند الاستلام ما زال خيار أساسي للمشتري السعودي، وإدارته فن بحد ذاته: تحصيل المبالغ، تحويلها
          لك بدورة واضحة، والتعامل مع رفض الاستلام. اسأل: «كم مدة دورة تحويل مبالغ الـ COD؟ وكيف تتعاملون مع
          الطلبات المرفوضة؟» — الإجابة الممتازة: تحويل أسبوعي أو أسرع، وآلية واضحة لإرجاع المرفوض للمخزون.
        </p>

        <h3 className={h3}>8. إدارة المرتجعات</h3>
        <p className={p}>
          المرتجعات جزء طبيعي من التجارة الإلكترونية، والفرق في كيف تُدار: استلام المرتجع، فحص حالته، إرجاع
          السليم للمخزون خلال مدة محددة، وتقرير لك بكل حالة. الشركة اللي تعتبر المرتجعات «مشكلتك أنت»
          بتخليك تعيش نفس الصداع اللي جيت تهرب منه.
        </p>

        <h2 className={h2}>المجموعة الثالثة: الثقة والتكلفة</h2>

        <h3 className={h3}>9. التراخيص والامتثال</h3>
        <p className={p}>
          مستودعات مرخّصة نظامياً، وإذا منتجاتك غذائية أو تجميلية أو صحية فترخيص{' '}
          <strong>هيئة الغذاء والدواء (SFDA)</strong> للمستودع مو اختياري — هو شرط نظامي عليك أنت كتاجر قبل
          ما يكون على الشركة. اطلب صور التراخيص، والشركة المحترمة تعطيك إياها بدون تردد.
        </p>

        <h3 className={h3}>10. شفافية التسعير</h3>
        <p className={p}>
          عرض السعر الصح يفصّل: رسوم التخزين، رسوم التجهيز لكل طلب، رسوم الشحن حسب الوجهة، وأي رسوم إضافية
          (استلام مخزون، مرتجعات، تغليف خاص). الفخ المعتاد: سعر تجهيز مغري تكتشف بعده رسوم مخفية بكل
          فاتورة. <strong>قارن التكلفة الإجمالية لكل طلب مكتمل</strong> بين العروض، مو بند ببند.
        </p>

        <h3 className={h3}>11. المرونة والقدرة على التوسع</h3>
        <p className={p}>
          اسأل: «لو تضاعفت طلباتي ×3 في رمضان أو اليوم الوطني، وش يصير؟» الشركة الممتازة تمتص المواسم بدون
          ما تنهار جودتها ولا تفرض عليك حدود. واسأل بالعكس: «هل في حد أدنى شهري ملزم؟» — الالتزامات العالية
          من أول يوم علامة إنهم يبون يربطونك مو يخدمونك.
        </p>

        <h3 className={h3}>12. خدمة العملاء والدعم</h3>
        <p className={p}>
          لما يتأخر طلب أو يضيع، مين تكلم وبأي سرعة يرد؟ الإجابة الممتازة: مدير حساب مخصص أو قناة دعم
          مباشرة (واتساب/هاتف) بأوقات استجابة معلنة. جرّب بنفسك قبل التعاقد: أرسل استفسار وشوف كم يأخذون
          وقت بالرد — تعاملهم معك وأنت عميل محتمل هو أحسن حالاتهم.
        </p>

        <h2 className={h2}>جدول التقييم السريع (اطبعه وخذه معك)</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-right min-w-[560px]">
            <thead>
              <tr>
                <th className={th}>المعيار</th>
                <th className={th}>السؤال اللي تسأله</th>
                <th className={th}>الإجابة الممتازة</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA_TABLE.map(([c, q, a]) => (
                <tr key={c}>
                  <td className={tdHead}>{c}</td>
                  <td className={td}>{q}</td>
                  <td className={td}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2}>علامات حمراء تهرب منها</h2>
        <ul className="mt-4 list-disc pr-6 space-y-2">
          <li className={li}>ما يعطونك أرقام أداء ولا يقبلون تحطها بالعقد.</li>
          <li className={li}>يرفضون تعرّف على عملاء حاليين لهم.</li>
          <li className={li}>عقد طويل ملزم بحد أدنى عالي من أول شهر.</li>
          <li className={li}>ما عندهم تطبيق رسمي في متجر تطبيقات منصتك.</li>
          <li className={li}>لوحة تحكم ما تتحدث لحظياً أو ما فيه لوحة أصلاً.</li>
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

        {/* CTA — نفس تصميم المقال الأول */}
        <div className="mt-14 rounded-2xl bg-fa-liberty-blue p-8 lg:p-10 text-center">
          <h2 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-classic-chalk m-0">
            جاهز تحط فاست أكسس تحت الاختبار؟
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            خذ جدول التقييم اللي فوق واسألنا كل سؤال فيه — نحب العميل اللي يجي جاهز. اطلب عرض سعرك اليوم،
            وخلّها علينا.
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
            How to Choose a Storage &amp; Shipping Company for Your Store: 12 Criteria Before You Sign
          </h1>
          <div className="font-ui mt-5 text-[13px] text-fa-classic-chalk/60">July 18, 2026</div>
        </div>
      </div>

      <article className="container-main max-w-[820px] pb-24 pt-12 text-left">
        <div className="rounded-2xl border-l-4 border-fa-orange-soda bg-fa-cream-deep p-6 lg:p-7">
          <p className="font-body text-[16px] lg:text-[17px] text-fa-liberty-blue leading-[1.85] m-0">
            Choosing the right storage and shipping company comes down to 12 essential criteria — chief
            among them: direct integration with your store platform (Salla, Zid, Shopify), order prep
            speed, on-time shipping rate, pricing transparency, cash-on-delivery handling, and returns
            management. A company that can't give you clear numbers on these points has already answered
            your question.
          </p>
        </div>

        <p className={p}>
          Choosing your logistics partner is one of the heaviest decisions in your store's journey —
          because you're not handing over a task, you're handing over{' '}
          <strong>your goods, your customer's experience and your brand's reputation</strong>. A great
          company lets you grow with peace of mind; the wrong one burns your reviews and sets you back a
          year. This guide gives you the 12 criteria to evaluate any fulfillment company, the exact
          questions to ask, and what an excellent answer looks like — so you walk into any negotiation as
          the best-informed person at the table.
        </p>

        <div className="mt-6 rounded-xl bg-fa-liberty-blue/[0.04] border border-fa-liberty-blue/10 p-5">
          <p className="font-body text-[15px] text-fa-ink-muted leading-[1.8] m-0">
            If you don't yet know what fulfillment even is, or how it differs from courier companies, start
            with our guide:{' '}
            <Link to="/blog/what-is-fulfillment" className="text-fa-orange-soda font-bold underline underline-offset-4">
              What Is Fulfillment? The Complete Guide
            </Link>{' '}
            and come back here.
          </p>
        </div>

        <h2 className={h2}>Quick summary</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>Direct integration with your platform (Salla/Zid/Shopify) is a requirement, not a feature — manual syncing means errors and delays.</li>
          <li className={li}>Ask for numbers, not promises: on-time rate, average prep time, and order accuracy rate.</li>
          <li className={li}>Compare pricing by total cost per completed order, not by scattered line items.</li>
          <li className={li}>Returns management and COD handling are what separate companies that understand the Saudi market from the rest.</li>
          <li className={li}>Any company that refuses to connect you with current clients = red flag.</li>
        </ul>

        <h2 className={h2}>Group one: technology &amp; integration</h2>

        <h3 className={h3}>1. Direct integration with your store platform</h3>
        <p className={p}>
          Your first question: "Do you have a ready app in the Salla or Zid app store?" A serious company
          connects with one click: you install the app, and every new order flows automatically into the
          warehouse system. If the answer is "send us an Excel sheet of your orders" — that's not
          fulfillment, that's daily torture with guaranteed errors.{' '}
          <Link to="/#integrations" className="text-fa-orange-soda font-semibold underline underline-offset-4">
            See Fast Access integrations
          </Link>
        </p>

        <h3 className={h3}>2. Dashboard and real-time visibility</h3>
        <p className={p}>
          You need to see your stock and orders live from a single screen: how many units of each product,
          where every order stands, and how many came back. Ask for a <strong>live demo</strong> of the
          dashboard before signing — if it's dated or refreshes once a day, you'll be running blind.
        </p>

        <h3 className={h3}>3. Inventory accuracy</h3>
        <p className={p}>
          Ask: "What's your stock-count accuracy, and how do you handle discrepancies?" Professional
          companies run periodic counts, share reports, and take responsibility for losses on their side.
          Agree upfront on compensation for items lost or damaged inside the warehouse — and put it in the
          contract.
        </p>

        <h2 className={h2}>Group two: operations</h2>

        <h3 className={h3}>4. Order prep speed</h3>
        <p className={p}>
          The golden metric: from order arrival to courier handover. An excellent answer is measured in
          hours, not days — at Fast Access, for example, the average is two hours. Also ask: "What's your
          same-day cut-off time?" — that's what decides whether a 3 PM order arrives tomorrow or the day
          after.
        </p>

        <h3 className={h3}>5. On-time rate and accuracy</h3>
        <p className={p}>
          Two numbers expose any company: the <strong>on-time shipping rate</strong> (excellent is above
          98%) and the <strong>order accuracy rate</strong> — how many orders went out right, with nothing
          wrong or missing. A company that publishes its numbers trusts its operation; one that says
          "don't worry, it'll all be fine" without a number deserves your caution.
        </p>

        <h3 className={h3}>6. Coverage and delivery options</h3>
        <p className={p}>
          Do they deliver across all of Saudi Arabia or just the major cities? What are the options:
          standard delivery, same-day inside cities (dark stores), smart pickup points like RedBox? Every
          extra option means more ways to satisfy different customer segments — and big-city customers in
          particular now expect fast delivery.
        </p>

        <h3 className={h3}>7. Cash on delivery (COD) handling</h3>
        <p className={p}>
          COD is still a primary choice for Saudi buyers, and managing it is an art of its own: collecting
          payments, remitting them to you on a clear cycle, and handling refused deliveries. Ask: "How long
          is your COD remittance cycle? How do you handle refused orders?" — the excellent answer: weekly
          remittance or faster, and a clear process for restocking refusals.
        </p>

        <h3 className={h3}>8. Returns management</h3>
        <p className={p}>
          Returns are a natural part of e-commerce; the difference is in how they're managed: receiving the
          return, inspecting it, restocking intact items within a defined window, and reporting every case
          to you. A company that treats returns as "your problem" will put you right back in the headache
          you came to escape.
        </p>

        <h2 className={h2}>Group three: trust &amp; cost</h2>

        <h3 className={h3}>9. Licensing and compliance</h3>
        <p className={p}>
          Properly licensed warehouses — and if your products are food, cosmetic or health items, an{' '}
          <strong>SFDA license</strong> for the warehouse isn't optional; it's a regulatory requirement on
          you as the merchant before it's on the company. Ask for copies of the licenses; a respectable
          company hands them over without hesitation.
        </p>

        <h3 className={h3}>10. Pricing transparency</h3>
        <p className={p}>
          A proper quote itemizes: storage fees, pick-&amp;-pack fees per order, shipping fees by
          destination, and any extras (inbound receiving, returns, custom packaging). The classic trap: a
          tempting prep fee followed by hidden charges on every invoice.{' '}
          <strong>Compare the total cost per completed order</strong> across quotes, not line by line.
        </p>

        <h3 className={h3}>11. Flexibility and scalability</h3>
        <p className={p}>
          Ask: "If my orders triple during Ramadan or National Day, what happens?" An excellent company
          absorbs seasonal surges without quality collapsing or new limits being imposed. And ask the
          reverse: "Is there a binding monthly minimum?" — heavy commitments from day one signal a company
          that wants to lock you in, not serve you.
        </p>

        <h3 className={h3}>12. Customer service and support</h3>
        <p className={p}>
          When an order is late or lost, who do you call and how fast do they answer? The excellent
          answer: a dedicated account manager or a direct channel (WhatsApp/phone) with published response
          times. Test it yourself before signing: send an inquiry and time the reply — how they treat you
          as a prospect is them at their very best.
        </p>

        <h2 className={h2}>The quick evaluation table (print it and take it with you)</h2>
        <div className="mt-5 overflow-x-auto rounded-xl border border-fa-liberty-blue/10">
          <table className="w-full border-collapse text-left min-w-[560px]">
            <thead>
              <tr>
                <th className={thEn}>Criterion</th>
                <th className={thEn}>The question to ask</th>
                <th className={thEn}>The excellent answer</th>
              </tr>
            </thead>
            <tbody>
              {CRITERIA_TABLE_EN.map(([c, q, a]) => (
                <tr key={c}>
                  <td className={tdHead}>{c}</td>
                  <td className={td}>{q}</td>
                  <td className={td}>{a}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2 className={h2}>Red flags to run from</h2>
        <ul className="mt-4 list-disc pl-6 space-y-2">
          <li className={li}>They won't share performance numbers or put them in the contract.</li>
          <li className={li}>They refuse to introduce you to current clients.</li>
          <li className={li}>A long binding contract with a high minimum from month one.</li>
          <li className={li}>No official app in your platform's app store.</li>
          <li className={li}>A dashboard that isn't real-time — or no dashboard at all.</li>
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
            Ready to put Fast Access to the test?
          </h2>
          <p className="font-body mt-4 text-[15px] text-fa-classic-chalk/75 leading-[1.8] max-w-[560px] mx-auto">
            Take the evaluation table above and ask us every question in it — we love merchants who come
            prepared. Request your quote today, and leave it to us.
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
