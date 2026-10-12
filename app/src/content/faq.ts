/**
 * faq.ts — المصدر الوحيد للأسئلة الشائعة.
 *
 * `/faq` يعرض القائمة كاملة، والرئيسية تعرض أول HOME_FAQ_COUNT فقط مع رابط
 * «كل الأسئلة»، وFAQPage schema للرئيسية (vite.config.ts) يُبنى من نفس الأسئلة
 * المعروضة. كل رقم أو وعد يُقرأ من claims.ts.
 *
 * دُمجت هنا أسئلة الرئيسية الـ17 وأسئلة صفحة /faq الـ11 بدون تكرار.
 */

import {
  claims, joinList, platformList, plus, num, packingTime, pct, warehouseArea, climateAnswer, type Loc,
} from './claims';

export interface FaqItem {
  id: string;
  q: Record<Loc, string>;
  a: Record<Loc, string>;
}

export const HOME_FAQ_COUNT = 5;

const c = claims;
const support = c.support;

const items: (FaqItem | false)[] = [
  {
    id: 'services',
    q: { ar: 'وش بالضبط تسوون لي؟', en: 'What exactly do you do for me?' },
    a: {
      ar: `كل شي بعد ضغطة «اشتري»: نستلم مخزونك ونخزنه بمستودعاتنا، وأول ما يجيك طلب نجهزه ونغلفه بهوية علامتك ونشحنه ونتابعه حتى باب عميلك. ومعها توصيل عاجل من المخازن السحابية، شحن دولي وتخليص جمركي، إدارة المرتجعات، ودعم ${support.ar}.`,
      en: `Everything after the "Buy" click: we receive and store your inventory, and when an order lands we pack it in your brand, ship it, and track it to your customer's door. Plus express delivery from our cloud warehouses, international freight and customs, returns management, and support ${support.en}.`,
    },
  },
  {
    id: 'integration',
    q: { ar: 'هل تربطون مع منصة متجري؟', en: 'Do you integrate with my store platform?' },
    a: {
      ar: `نعم، ربط مباشر خلال ${c.integrationSetup.ar} مع ${platformList('ar')}. وطلباتك تنسحب لنظامنا تلقائيًا لحظة الشراء.`,
      en: `Yes. Direct integration in ${c.integrationSetup.en} with ${platformList('en')}. Orders flow to us automatically the moment they're placed.`,
    },
  },
  {
    id: 'delivery',
    q: { ar: 'كم مدة التوصيل، ووين تغطون؟', en: 'How long does delivery take, and where do you cover?' },
    a: {
      ar: `الطلب العاجل يوصل خلال ${c.expressDeliveryWindow.ar} من المخازن السحابية داخل ${joinList(c.expressCities, 'ar')}. التوصيل القياسي: الرياض ${c.riyadhStandard.ar}، المدن الرئيسية ${c.mainCitiesStandard.ar}، باقي مناطق المملكة ${c.otherRegionsStandard.ar}، ودول الخليج ${c.gccDelivery.ar}.`,
      en: `Express orders arrive within ${c.expressDeliveryWindow.en} from our cloud warehouses in ${joinList(c.expressCities, 'en')}. Standard delivery: Riyadh ${c.riyadhStandard.en}, main cities ${c.mainCitiesStandard.en}, other regions ${c.otherRegionsStandard.en}, and GCC countries ${c.gccDelivery.en}.`,
    },
  },
  {
    id: 'pricing',
    q: { ar: 'كيف تحسبون الأسعار؟', en: 'How do you price?' },
    a: {
      ar: `ما عندنا باقات جاهزة، عرضك يُبنى على أربعة عوامل: ${c.pricingFactors.map((f) => f.title.ar).join('، ')}. جرّب حاسبة التوفير بصفحة «كيف نسعّر» وخذ عرضك المفصّل خلال ${c.quoteTurnaround.ar}.`,
      en: `No ready-made bundles. Your quote is built on four factors: ${c.pricingFactors.map((f) => f.title.en.toLowerCase()).join(', ')}. Try the savings calculator on our pricing page and get your detailed quote within ${c.quoteTurnaround.en}.`,
    },
  },
  c.minimumCommitment === null && {
    id: 'commitment',
    q: { ar: 'هل فيه عقد طويل أو حد أدنى للطلبات؟', en: 'Is there a long contract or order minimum?' },
    a: {
      ar: `لا. تدفع على اللي تشحنه فعلًا، وتكبر أو تصغّر براحتك، بدون التزامات طويلة ولا حدود دنيا.${c.setupFee === 0 ? ' والإعداد والربط مجاني بالكامل.' : ''}`,
      en: `No. You pay for what you actually ship, and scale up or down freely, with no long commitments and no minimums.${c.setupFee === 0 ? ' Onboarding and integration are completely free.' : ''}`,
    },
  },
  {
    id: 'packing-time',
    q: { ar: 'كم تاخذون وقت لتجهيز الطلب؟', en: 'How fast do you prepare orders?' },
    a: {
      ar: `متوسط تجهيز الطلب عندنا ${packingTime('ar')}، بدقة تجهيز ${pct(c.pickAccuracy)}.`,
      en: `Our average prep time is ${packingTime('en')}, with ${pct(c.pickAccuracy)} picking accuracy.`,
    },
  },
  {
    id: 'international',
    q: { ar: 'هل يوجد شحن دولي؟', en: 'Do you ship internationally?' },
    a: {
      ar: `نعم، نشحن لأكثر من ${c.internationalCountries} دولة حول العالم عبر شركاء موثوقين.`,
      en: `Yes. We ship to ${plus(c.internationalCountries)} countries through trusted international carrier partners.`,
    },
  },
  {
    id: 'climate',
    q: { ar: 'هل عندكم تخزين بدرجة حرارة مضبوطة؟', en: 'Do you offer temperature-controlled storage?' },
    a: { ar: climateAnswer('ar'), en: climateAnswer('en') },
  },
  c.sfdaLicensed && {
    id: 'sfda',
    q: { ar: 'هل عندكم ترخيص هيئة الغذاء والدواء (SFDA)؟', en: 'Are you SFDA-licensed?' },
    a: {
      ar: 'نعم، جميع مستودعاتنا مرخصة من الهيئة العامة للغذاء والدواء.',
      en: 'Yes. All our warehouses are licensed by the Saudi Food and Drug Authority (SFDA).',
    },
  },
  {
    id: 'warehouse-size',
    q: { ar: 'كم مساحة المستودعات؟', en: 'How big are your warehouses?' },
    a: {
      ar: `${plus(c.distributionCenters)} مستودع ومركز توزيع تتجاوز مساحتها ${num(c.warehouseAreaSqm)} متر مربع.`,
      en: `${plus(c.distributionCenters)} warehouses and hubs with over ${warehouseArea('en')} of storage.`,
    },
  },
  {
    id: 'visit',
    q: { ar: 'هل أقدر أزور المستودع؟', en: 'Can I visit the warehouse?' },
    a: {
      ar: 'أكيد، بالتنسيق مع مدير حسابك، حياك في أي وقت.',
      en: 'Of course. Coordinate with your account manager and you are welcome any time.',
    },
  },
  {
    id: 'inbound',
    q: { ar: 'كيف يتم استلام البضاعة مني؟', en: 'How is inventory picked up from me?' },
    a: {
      ar: 'ننسّق الاستلام من موقعك أو من مورّديك مباشرة، والتكلفة تُحسب حسب الحجم وعدد المنصات.',
      en: 'We coordinate pickup from your location or directly from your suppliers. Cost is based on volume and pallet count.',
    },
  },
  {
    id: 'import',
    q: { ar: 'بضاعتي تجي من الصين، تقدرون تستوردونها؟', en: 'My goods come from China. Can you import them?' },
    a: {
      ar: 'نعم. نرتب الشحن الدولي (بحري أو جوي) من موردك، ونتولى التخليص الجمركي كاملًا، وتوصل بضاعتك مستودعاتنا جاهزة للبيع، وأنت ما تلمس ورقة وحدة.',
      en: 'Yes. We arrange international freight (sea or air) from your supplier, handle customs clearance end to end, and your goods arrive at our warehouses ready to sell. You never touch a single document.',
    },
  },
  {
    id: 'customer-tracking',
    q: { ar: 'كيف يتابع عميلي طلبه؟', en: 'How does my customer track their order?' },
    a: {
      ar: 'رابط تتبع يوصله تلقائيًا لحظة الشحن، يعرف منه وين طلبه بدون ما يسألك. وأنت تشوف كل شحناتك بلوحة واحدة، وزر «تتبع شحنتك» موجود بأعلى موقعنا لأي استعلام سريع.',
      en: 'A tracking link reaches them automatically the moment it ships. You see all your shipments in one dashboard, and the "Track shipment" button at the top of our site answers any quick lookup.',
    },
  },
  {
    id: 'reports',
    q: { ar: 'هل توفرون تقارير ووضوح تشغيلي؟', en: 'Do you provide reports and operational visibility?' },
    a: {
      ar: 'لوحة تحكم متكاملة بتقارير لحظية عن الشحنات والأداء والالتزام بالمواعيد وحالة المخزون.',
      en: 'Yes. Your dashboard gives live visibility on shipment stages, delivery performance, on-time rates, and inventory.',
    },
  },
  {
    id: 'returns',
    q: { ar: 'هل تديرون المرتجعات؟', en: 'Do you manage returns?' },
    a: {
      ar: 'نعم، إدارة كاملة: نستقبل المرتجع، نفحصه، ونرجعه للمخزون إذا كان سليم، أو نبلغك بحالته وتقرر. كلها تظهر لك بالنظام أول بأول.',
      en: 'Yes, end to end: we receive the return, inspect it, and restock it if it is in good condition, or report its state and you decide. Everything shows in your dashboard in real time.',
    },
  },
  {
    id: 'custom-ops',
    q: { ar: 'هل تدعمون متطلبات تشغيلية خاصة؟', en: 'Do you support custom operational requirements?' },
    a: {
      ar: 'نعم، تجهيز الباقات، دمج المنتجات، كروت الهدايا، والتغليف الكامل بهوية علامتك.',
      en: 'Yes: kitting, bundle assembly, gift cards, and fully branded packaging.',
    },
  },
  {
    id: 'scale',
    q: { ar: 'هل تقدر عملياتكم تتوسع مع نمو نشاطي؟', en: 'Can your operations scale with my growth?' },
    a: {
      ar: 'بنيتنا التحتية وشبكة مستودعاتنا مصممة أصلًا لمواكبة النمو والمواسم، توسّع براحتك، والسعة علينا.',
      en: 'Our infrastructure and warehouse network are built for growth and peak seasons. Scale freely; capacity is on us.',
    },
  },
  c.shipmentInsurance && {
    id: 'insurance',
    q: { ar: 'لو تلفت منتجاتي أثناء الشحن، وش التعويض؟', en: 'If a carrier damages my products, what is the compensation?' },
    a: {
      ar: `جميع الشحنات مغطاة بتأمين لوجستي، نتولى إدارة المطالبة كاملة، والتعويض يُحسب حسب ${c.compensationBasis.ar}.`,
      en: `All shipments are covered by logistics insurance. We handle the claim end to end and compensate you based on ${c.compensationBasis.en}.`,
    },
  },
  {
    id: 'clients',
    q: { ar: 'مين العملاء اللي تشتغلون معهم؟', en: 'Who do you work with?' },
    a: {
      ar: 'أصحاب المتاجر الإلكترونية، والشركات التجارية، وتجار التجزئة، من أول متجر ناشئ إلى العلامات الكبيرة.',
      en: 'E-commerce brands, trading companies, and retailers, from first-time stores to large brands.',
    },
  },
  {
    id: 'start',
    q: { ar: 'كيف أبدأ؟', en: 'How do I start?' },
    a: {
      ar: `عبّ نموذج «اطلب عرض سعر» بدقيقتين، ونرد عليك بخطة مفصّلة على أرقامك خلال ${c.quoteTurnaround.ar}.${c.setupFee === 0 ? ' الإعداد والربط مجاني بالكامل، والفوترة تبدأ من أول طلب نجهزه لك.' : ''}`,
      en: `Fill the quote form in two minutes and we'll reply with a plan built on your numbers within ${c.quoteTurnaround.en}.${c.setupFee === 0 ? ' Onboarding and integration are completely free; billing starts with your first fulfilled order.' : ''}`,
    },
  },
];

export const FAQS: FaqItem[] = items.filter((x): x is FaqItem => Boolean(x));
export const HOME_FAQS: FaqItem[] = FAQS.slice(0, HOME_FAQ_COUNT);
