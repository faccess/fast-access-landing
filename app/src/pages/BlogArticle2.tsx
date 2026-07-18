import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';

/**
 * /blog/how-to-choose-fulfillment-company — second article.
 * Literal Arabic source content; Article + FAQPage JSON-LD scoped here.
 */

const META = {
  title: 'كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع | فاست أكسس',
  desc:
    'دليل عملي لاختيار شركة التخزين والشحن المناسبة لمتجرك الإلكتروني في السعودية: 12 معيار أساسي، أسئلة تطرحها قبل التعاقد، وعلامات حمراء تحذّرك من الشركة الغلط.',
};

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

function useArticleSchema() {
  useEffect(() => {
    const schemas = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: 'كيف تختار شركة تخزين وشحن لمتجرك؟ 12 معيار قبل ما توقّع',
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
        mainEntityOfPage: 'https://faccess.co/blog/how-to-choose-fulfillment-company',
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
  usePageMeta({ title: META.title, desc: META.desc }, { title: META.title, desc: META.desc });
  useArticleSchema();

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
