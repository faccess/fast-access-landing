import PageHeader from '../components/PageHeader';
import { useT } from '../i18n/I18nContext';

/** الأسئلة الشائعة — general FAQ page (footer link). */
export default function FAQ() {
  const { locale } = useT();
  const isAr = locale === 'ar';

  const faqs = [
    {
      q: isAr ? 'وش بالضبط تسوون لي؟' : 'What exactly do you do for me?',
      a: isAr
        ? 'كل شي بعد ضغطة «اشتري»: نستلم مخزونك ونخزنه بمستودعاتنا، وأول ما يجيك طلب نجهزه ونغلفه بهوية علامتك ونشحنه ونتابعه حتى باب عميلك، مع إدارة المرتجعات ودعم على مدار الساعة.'
        : 'Everything after the "Buy" click: we receive and store your inventory, and when an order lands we pick, pack it in your brand, ship it, and track it to your customer\'s door — returns management and 24/7 support included.',
    },
    {
      q: isAr ? 'كيف أربط متجري؟' : 'How do I connect my store?',
      a: isAr
        ? 'ربط مباشر بدقائق مع سلة، زد، شوبيفاي، ووكومرس وماجينتو — وطلباتك تنسحب لنظامنا تلقائيًا لحظة الشراء. وعندك نظام خاص؟ نربطه عبر API.'
        : 'Direct integration in minutes with Salla, Zid, Shopify, WooCommerce and Magento — orders flow to us automatically the moment they\'re placed. Custom system? We connect via API.',
    },
    {
      q: isAr ? 'هل فيه عقد طويل أو حد أدنى للطلبات؟' : 'Is there a long contract or order minimum?',
      a: isAr
        ? 'لا. تدفع على اللي تشحنه فعلًا، وتكبر أو تصغّر براحتك — بدون التزامات طويلة ولا حدود دنيا.'
        : 'No. You pay for what you actually ship, and scale up or down freely — no long commitments, no minimums.',
    },
    {
      q: isAr ? 'كم تاخذون وقت لتجهيز الطلب؟' : 'How fast do you prepare orders?',
      a: isAr
        ? 'متوسط تجهيز الطلب عندنا 1.3 ساعة، وبدقة تجهيز 99.7%. والطلبات العاجلة داخل المدن الرئيسية توصل خلال 2 إلى 4 ساعات من المخازن السحابية.'
        : 'Our average prep time is 1.3 hours with 99.7% picking accuracy. Urgent orders in major cities arrive within 2–4 hours from our cloud warehouses.',
    },
    {
      q: isAr ? 'وين تغطون؟' : 'Where do you cover?',
      a: isAr
        ? 'كل مدن المملكة عبر مراكزنا في الرياض وجدة والدمام، وشحن سريع لدول الخليج، وشحن دولي لأكثر من 220 دولة عبر شركاء موثوقين.'
        : 'All Saudi cities through our Riyadh, Jeddah and Dammam hubs, fast GCC shipping, and international delivery to 220+ countries via trusted partners.',
    },
    {
      q: isAr ? 'منتجاتي تحتاج تخزين مبرد — عندكم؟' : 'My products need temperature-controlled storage — do you have it?',
      a: isAr
        ? 'نعم. مستودعاتنا مرخصة من هيئة الغذاء والدواء وفيها مساحات مكيفة وتبريد مخصص (2–8°م) للمنتجات الحساسة مثل التجميل والمكملات.'
        : 'Yes. Our warehouses are SFDA-licensed with climate-controlled areas and dedicated cooling (2–8°C) for sensitive products like cosmetics and supplements.',
    },
    {
      q: isAr ? 'كيف يتابع عميلي طلبه؟' : 'How does my customer track their order?',
      a: isAr
        ? 'رابط تتبع يوصله تلقائيًا لحظة الشحن، يعرف منه وين طلبه بدون ما يسألك. وأنت تشوف كل شحناتك بلوحة واحدة، وزر «تتبع شحنتك» موجود بأعلى موقعنا لأي استعلام سريع.'
        : 'A tracking link reaches them automatically the moment it ships. You see all your shipments in one dashboard, and the "Track shipment" button at the top of our site answers any quick lookup.',
    },
    {
      q: isAr ? 'وش يصير بالمرتجعات؟' : 'What about returns?',
      a: isAr
        ? 'نستقبل المرتجع، نفحصه، ونرجعه للمخزون إذا كان سليم — أو نبلغك بحالته وتقرر. كلها تظهر لك بالنظام أولًا بأول.'
        : 'We receive the return, inspect it, and restock it if it\'s in good condition — or report its state and you decide. Everything shows in your dashboard in real time.',
    },
    {
      q: isAr ? 'كيف تحسبون الأسعار؟' : 'How do you price?',
      a: isAr
        ? 'ما عندنا باقات جاهزة — عرضك يُبنى على أربعة عوامل: حجم التخزين، عدد الطلبات، وزن ووجهة الشحن، وسرعة التوصيل. جرّب حاسبة التوفير بصفحة «كيف نسعّر» وخذ عرضك المفصّل خلال يوم عمل واحد.'
        : 'No ready-made bundles — your quote is built on four factors: storage volume, order count, weight & destination, and delivery speed. Try the savings calculator on our pricing page and get your detailed quote within one business day.',
    },
    {
      q: isAr ? 'كيف أبدأ؟' : 'How do I start?',
      a: isAr
        ? 'عبّ نموذج «اطلب عرض سعر» بدقيقتين، ونرد عليك بخطة مفصّلة على أرقامك خلال يوم عمل واحد. الإعداد والربط مجاني بالكامل، والفوترة تبدأ من أول طلب نجهزه لك.'
        : 'Fill the quote form in two minutes and we\'ll reply with a plan built on your numbers within one business day. Onboarding and integration are completely free — billing starts with your first fulfilled order.',
    },
  ];

  return (
    <main>
      <PageHeader
        chip={isAr ? 'الأسئلة الشائعة' : 'FAQ'}
        title={isAr ? (<>أسئلة تدور ببالك؟ <span className="text-fa-orange-soda">جاوبناها.</span></>) : 'Questions on your mind? Answered.'}
        sub={isAr ? 'أكثر اللي يسألنا عنه التجار قبل ما يخلّونها علينا. ما لقيت سؤالك؟ كلمنا وبنرد خلال يوم عمل.' : 'What merchants ask us most before handing it over. Can\'t find yours? Reach out and we\'ll reply within a business day.'}
        bg="/assets/hero-resources.webp"
      />
      <section className="py-16 lg:py-24 bg-fa-classic-chalk">
        <div className="container-main max-w-[820px]">
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <details
                key={i}
                className="group rounded-2xl bg-white border border-fa-liberty-blue/10 px-6 py-5 open:shadow-lg open:shadow-fa-liberty-blue/5 transition-shadow"
              >
                <summary className="font-display cursor-pointer list-none flex items-center justify-between gap-4 text-[17px] lg:text-[19px] font-bold text-fa-liberty-blue">
                  {f.q}
                  <span className="shrink-0 text-fa-orange-soda transition-transform duration-200 group-open:rotate-45 text-[22px] leading-none" aria-hidden>+</span>
                </summary>
                <p className="font-body mt-3 text-[15px] leading-[1.75] text-fa-ink-muted">{f.a}</p>
              </details>
            ))}
          </div>
          <p className="font-body mt-10 text-center text-[15px] text-fa-ink-muted">
            {isAr ? 'سؤالك مو هنا؟ ' : 'Your question isn\'t here? '}
            <a href="https://wa.me/966920032768" target="_blank" rel="noopener noreferrer" className="font-semibold text-fa-orange-soda hover:underline">
              {isAr ? 'كلمنا واتساب' : 'WhatsApp us'}
            </a>
            {isAr ? ' أو ' : ' or '}
            <a href="/contact" className="font-semibold text-fa-orange-soda hover:underline">
              {isAr ? 'اطلب عرض سعر' : 'request a quote'}
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
