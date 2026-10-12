/**
 * claims.ts — المصدر الوحيد لكل رقم ووعد يظهر في الموقع.
 *
 * كل الصفحات والمكونات وملفات المحتوى (content.ts, services.ts, faq.ts,
 * index.html عبر vite.config.ts) تقرأ من هنا. لا يُكتب أي رقم أو وعد عن
 * فاست أكسس يدويًا في مكان آخر.
 *
 * كل قيمة عليها `TODO: confirm` قيمة مؤقتة لم تُعتمد بعد. التعليق هنا فقط،
 * لا يظهر في الواجهة. بعد التأكيد: عدّل القيمة واحذف التعليق.
 */

export type Bi = { ar: string; en: string };

export const claims = {
  // ── أداء ─────────────────────────────────────────────────────────────
  /** % الطلبات المشحونة ضمن الوقت المحدد */
  onTimeRate: 98, // اعتُمد 2026-10-12 (كان بالموقع 97% و99.8% بأماكن ثانية)
  /** % دقة المخزون */
  inventoryAccuracy: 99.99, // TODO: confirm
  /** % دقة تجهيز الطلبات */
  pickAccuracy: 99.7, // TODO: confirm
  /** الحد الأعلى لنسبة أخطاء التجهيز (%) — صفحة التغليف */
  packingErrorRateMax: 0.5, // TODO: confirm — يتسق مع pickAccuracy (99.7% = 0.3% أخطاء)
  /** متوسط تجهيز الطلب بالساعات */
  avgPackingTimeHours: 1.3, // TODO: confirm — الحلول والتغليف وJSON-LD كانت تقول «خلال دقائق»، والمدونة «ساعتان»

  // ── التوصيل ──────────────────────────────────────────────────────────
  /** نافذة التوصيل العاجل من المخازن السحابية */
  expressDeliveryWindow: { ar: 'ساعة إلى ساعتين', en: '1–2 hours' } as Bi, // TODO: confirm — الموقع كان فيه «نفس اليوم» و«ساعة إلى ساعتين» و«2-4 ساعات»
  /** المدن اللي فيها مخازن سحابية (العدد المعروض بالموقع يُشتق من طول القائمة) */
  expressCities: [
    { ar: 'الرياض', en: 'Riyadh' },
    { ar: 'جدة', en: 'Jeddah' },
    { ar: 'الدمام', en: 'Dammam' },
  ] as Bi[], // اعتُمد 2026-10-12: 3 مدن (كانت صفحة المخازن السحابية تقول «6 مدن»)
  /** التوصيل القياسي داخل الرياض */
  riyadhStandard: { ar: 'نفس اليوم', en: 'same day' } as Bi, // TODO: confirm — FAQ الرئيسية كانت تقول «الرياض خلال 2-4 ساعات»
  /** التوصيل القياسي للمدن الرئيسية */
  mainCitiesStandard: { ar: 'اليوم التالي', en: 'next day' } as Bi, // TODO: confirm
  /** التوصيل القياسي لباقي المناطق */
  otherRegionsStandard: { ar: '2-3 أيام', en: '2–3 days' } as Bi, // TODO: confirm
  /** التوصيل لدول الخليج */
  gccDelivery: { ar: '3-5 أيام', en: '3–5 days' } as Bi, // TODO: confirm
  /** عدد الدول اللي نشحن لها دوليًا */
  internationalCountries: 220, // TODO: confirm
  /** عدد مناطق المملكة المغطاة */
  coverageRegions: 13, // TODO: confirm — صفحة من نحن
  /** متى يُسلَّم الطلب لشركة الشحن بعد التجهيز */
  carrierHandover: { ar: 'نفس اليوم', en: 'Same day' } as Bi, // TODO: confirm — صفحة التغليف «يسلم لشريك الشحن الأنسب بنفس اليوم»
  /** تغذية المخازن السحابية من المستودع المركزي */
  cloudReplenishment: { ar: 'يوميًا', en: 'Daily' } as Bi, // TODO: confirm
  /** متى يوصل الطلب لنظامنا بعد الشراء (رحلة الطلب بالرئيسية) */
  orderSync: { ar: 'لحظيًا', en: 'Instantly' } as Bi, // TODO: confirm
  /** متى تظهر حالة المرتجع للتاجر (رحلة الطلب بالرئيسية) */
  returnsVisibility: { ar: 'أول بأول', en: 'Real time' } as Bi, // TODO: confirm — لا يوجد بالموقع زمن لمعالجة المرتجع

  // ── البنية ───────────────────────────────────────────────────────────
  /** عدد المستودعات ومراكز التوزيع (يُعرض «N+») */
  distributionCenters: 10, // اعتُمد 2026-10-12 (كانت صفحة الشحن تقول «42+»)
  /** إجمالي مساحة التخزين بالمتر المربع */
  warehouseAreaSqm: 15000, // TODO: confirm
  /** نطاق درجة الحرارة (تكييف وليس تبريد) */
  temperatureRange: { min: 16, max: 21 },
  /** هل يوجد تخزين مبرّد فعلي؟ إذا صار true تنضاف جملة التبريد تلقائيًا */
  hasColdStorage: false, // TODO: confirm
  /** هل كل المستودعات مرخصة من هيئة الغذاء والدواء؟ */
  sfdaLicensed: true, // TODO: confirm
  /** الدعم التشغيلي */
  support: { ar: 'على مدار الساعة', en: 'around the clock', short: '24/7' }, // TODO: confirm
  /** ساعات خدمة العملاء (صفحة التواصل). ليست ساعات تشغيل المستودع، وهي مختلفة عنها */
  workingHours: { ar: 'الأحد إلى الخميس، 9 صباحًا إلى 5 مساءً', en: 'Sun–Thu, 9am–5pm' } as Bi,

  // ── التكامل ──────────────────────────────────────────────────────────
  /** منصات البيع المربوطة (+ API للمنصات الخاصة) */
  platforms: [
    { ar: 'سلة', en: 'Salla' },
    { ar: 'زد', en: 'Zid' },
    { ar: 'شوبيفاي', en: 'Shopify' },
    { ar: 'ووكومرس', en: 'WooCommerce' },
    { ar: 'ماجنتو', en: 'Magento' },
    { ar: 'أمازون', en: 'Amazon' },
    { ar: 'نون', en: 'noon' },
    { ar: 'جاهز', en: 'Jahez' },
  ] as Bi[], // TODO: confirm — الرئيسية: سلة، زد، شوبيفاي، ووكومرس، ماجنتو، أمازون، نون، جاهز، API · الحلول/الأسئلة: سلة، زد، شوبيفاي، ووكومرس، ماجنتو، API
  hasCustomApi: true, // TODO: confirm
  /** مدة ربط المتجر */
  integrationSetup: { ar: 'دقائق', en: 'minutes' } as Bi, // TODO: confirm — «ربط بدقائق»

  // ── التسعير ──────────────────────────────────────────────────────────
  /** عوامل التسعير الأربعة (قائمة صفحة التسعير المعتمدة) */
  pricingFactors: [
    { title: { ar: 'حجم التخزين', en: 'Storage footprint' }, body: { ar: 'المساحة اللي تشغلها بضاعتك ومدة بقائها عندنا، تدفع على المستخدم فعلًا.', en: 'The space your stock occupies and how long it sits on the shelf.' } },
    { title: { ar: 'عدد الطلبات', en: 'Order volume' }, body: { ar: 'كم طلب نجهّز ونغلّف شهريًا، وكل ما زاد العدد انخفض سعر الطلب الواحد.', en: 'How many orders we pick & pack monthly. More volume, lower per-order rate.' } },
    { title: { ar: 'وزن ووجهة الشحن', en: 'Weight & destination' }, body: { ar: 'وزن الطرد ووجهته يحددان تكلفة الشحن الحقيقية، بدون متوسطات مضخمة.', en: 'Parcel weight and destination set the real shipping cost.' } },
    { title: { ar: 'سرعة التوصيل', en: 'Delivery speed' }, body: { ar: 'قياسي، أو عاجل من المخازن السحابية، أنت تختار لكل شريحة من طلباتك.', en: 'Standard, or express from our cloud warehouses. You choose per order segment.' } },
  ] as { title: Bi; body: Bi }[],
  /** هل التغليف بهوية العلامة مشمول (وليس عامل سعر)؟ */
  brandedPackagingIncluded: true, // TODO: confirm — التسعير يقول مشمول، الرئيسية كانت تعدّه عامل سعر («نوع التغليف»)
  /** رسوم الإعداد والربط (ر.س) */
  setupFee: 0, // TODO: confirm
  /** الحد الأدنى للالتزام (null = لا يوجد عقد طويل ولا حد أدنى) */
  minimumCommitment: null as Bi | null, // TODO: confirm
  /** مدة الرد بعرض السعر */
  quoteTurnaround: { ar: 'يوم عمل واحد', en: 'one business day' } as Bi,
  /** افتراضات حاسبة التوفير (%) */
  calculatorCostSavingPct: 18, // TODO: confirm — نسبة التوفير على تكلفة الطلب
  calculatorHoursSavingPct: 70, // TODO: confirm — نسبة الساعات التشغيلية الموفّرة

  // ── الإحصائيات (عدّاد الرئيسية) ────────────────────────────────────
  merchantsCount: 500, // TODO: confirm — يُعرض «500+»
  dailyUnits: 15000, // TODO: confirm — يُعرض «15K»
  totalOrdersDelivered: 1_200_000, // TODO: confirm — يُعرض «1.2M»
  positiveReviewsRate: 98, // TODO: confirm — %
  returnsErrorRate: 1, // TODO: confirm — يُعرض «<1%»
  /** مقاييس قصص العملاء الثلاث (بنفس ترتيب القصص) */
  caseStudyMetrics: [
    { value: '2x', label: { ar: 'تضاعفت المبيعات', en: 'sales after joining' } },
    { value: 'pickAccuracy', label: { ar: 'دقة تجهيز الطلبات', en: 'order accuracy' } },
    { value: '-85%', label: { ar: 'مرتجعات تالفة', en: 'damage returns' } },
  ] as { value: string; label: Bi }[], // TODO: confirm — كانت «توضيحية» حسب تعليق الكود؛ القيمة 'pickAccuracy' تقرأ من claims.pickAccuracy

  // ── التأمين والتعويض ────────────────────────────────────────────────
  /** هل كل الشحنات مغطاة بتأمين لوجستي؟ */
  shipmentInsurance: true, // TODO: confirm
  compensationBasis: { ar: 'القيمة التكلفية للمنتج', en: 'the declared cost value of the products' } as Bi, // TODO: confirm

  // ── الشركة ───────────────────────────────────────────────────────────
  foundedYear: 2023,
  /** سنة النقلة/التوسع المذكورة بقصة من نحن */
  growthYear: 2025, // TODO: confirm
  legalNameAr: 'شركة مدخل السرعة للخدمات اللوجستية',
  legalNameEn: 'Madkhal Alsura Company for Logistics',
} as const;

// ── مشتقات للعرض (بدون قيم جديدة؛ كلها محسوبة من الأعلى) ─────────────

export type Loc = 'ar' | 'en';

const fmtNum = (n: number) => new Intl.NumberFormat('en-US').format(n);

/** «98%» */
export const pct = (n: number) => `${n}%`;
/** «10+» */
export const plus = (n: number) => `${fmtNum(n)}+`;
/** «15,000» */
export const num = fmtNum;

/** «الرياض وجدة والدمام» / «Riyadh, Jeddah, and Dammam» */
export function joinList(items: readonly Bi[], l: Loc): string {
  const xs = items.map((i) => i[l]);
  if (xs.length <= 1) return xs.join('');
  // Short lists read naturally with «و» throughout («الرياض وجدة والدمام»);
  // longer ones use commas with «و» before the last item.
  if (l === 'ar') return xs.length <= 3 ? xs.join(' و') : xs.slice(0, -1).join('، ') + ' و' + xs[xs.length - 1];
  return xs.length === 2 ? `${xs[0]} and ${xs[1]}` : xs.slice(0, -1).join(', ') + ', and ' + xs[xs.length - 1];
}

/** «سلة، زد، شوبيفاي… وواجهة API للمنصات الخاصة» */
export function platformList(l: Loc): string {
  const base = joinList(claims.platforms, l);
  if (!claims.hasCustomApi) return base;
  return l === 'ar' ? `${base}، وواجهة API للمنصات الخاصة` : `${base}, plus an API for custom platforms`;
}

/** عدد مدن المخازن السحابية + نصها: «3 مدن» */
export function expressCitiesCount(l: Loc): string {
  const n = claims.expressCities.length;
  if (l === 'en') return `${n} ${n === 1 ? 'city' : 'cities'}`;
  return n === 1 ? 'مدينة واحدة' : n === 2 ? 'مدينتين' : n <= 10 ? `${n} مدن` : `${n} مدينة`;
}

/** «بين 16 و21 درجة مئوية» / «between 16 and 21°C» */
export function tempRange(l: Loc, compact = false): string {
  const { min, max } = claims.temperatureRange;
  if (compact) return l === 'ar' ? `${min}-${max} درجة مئوية` : `${min}–${max}°C`;
  return l === 'ar' ? `بين ${min} و${max} درجة مئوية` : `between ${min} and ${max}°C`;
}

/** «1.3 ساعة» / «1.3 hours» */
export function packingTime(l: Loc): string {
  const h = claims.avgPackingTimeHours;
  return l === 'ar' ? `${h} ساعة` : `${h} hours`;
}

/** «15,000 م²» */
export function warehouseArea(l: Loc): string {
  return l === 'ar' ? `${num(claims.warehouseAreaSqm)} م²` : `${num(claims.warehouseAreaSqm)} m²`;
}

/** جواب سؤال التخزين بدرجة حرارة مضبوطة (يضيف جملة التبريد تلقائيًا إذا hasColdStorage) */
export function climateAnswer(l: Loc): string {
  const base =
    l === 'ar'
      ? `نعم، مساحات مكيّفة بدرجات مضبوطة ${tempRange('ar')} تناسب العطور ومستحضرات التجميل والمكمّلات والإلكترونيات.`
      : `Yes. Air-conditioned spaces kept ${tempRange('en')}, suited to perfumes, cosmetics, supplements, and electronics.`;
  if (!claims.hasColdStorage) return base;
  return l === 'ar'
    ? `${base} وعندنا كذلك تخزين مبرّد للمنتجات اللي تحتاج تبريد.`
    : `${base} We also offer refrigerated storage for products that need it.`;
}
