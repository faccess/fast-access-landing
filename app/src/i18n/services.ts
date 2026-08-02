/**
 * Content for the dedicated service pages (/solutions/<slug>).
 * Single source of truth, bilingual. Rendered by pages/ServicePage.tsx,
 * which also derives per-page meta + Service/FAQPage schema from it.
 */

export interface ServiceContent {
  slug: string;
  meta: { ar: { title: string; desc: string }; en: { title: string; desc: string } };
  chip: { ar: string; en: string };
  h1: { ar: string; en: string };
  intro: { ar: string; en: string };
  features: { ar: { title: string; body: string }[]; en: { title: string; body: string }[] };
  featuresHeading?: { ar: string; en: string };
  steps: { ar: { title: string; body: string }[]; en: { title: string; body: string }[] };
  stats: { value: string; valueEn?: string; ar: string; en: string }[];
  faqs: { ar: { q: string; a: string }[]; en: { q: string; a: string }[] };
  related: { slug: string; ar: string; en: string };
}

export const SERVICES: ServiceContent[] = [
  {
    slug: 'storage',
    meta: {
      ar: { title: 'تخزين المنتجات للمتاجر الإلكترونية في السعودية | فاست أكسس', desc: 'مستودعات مرخّصة بمساحة 15,000 م² في الرياض: مساحات مكيفة بدرجات مضبوطة من 16 إلى 21°م، جرد دوري، تتبع صلاحية بنظام FEFO، ومخزونك مربوط بمنصتك لحظيًا. ادفع على الاستخدام الفعلي.' },
      en: { title: 'E-commerce warehousing in Saudi Arabia | Fast Access', desc: 'Licensed warehouses with 15,000 m² in Riyadh: climate-controlled space, a controlled 16-21°C climate, FEFO expiry tracking, cycle counts, and live inventory sync. Pay for what you use.' },
    },
    chip: { ar: 'التخزين', en: 'Warehousing' },
    h1: { ar: 'تخزين يتمدد مع تجارتك وينكمش مع فاتورتك', en: 'Warehousing that scales with your store' },
    intro: {
      ar: 'مستودعات مرخّصة بمساحة تتجاوز 15,000 م² في مواقع استراتيجية، مجهزة بأحدث أنظمة المراقبة والسلامة. تدفع على المساحة اللي تستخدمها فعليًا، وتتوسع بموسمك بدون عقود طويلة ولا التزامات ثابتة.',
      en: 'Licensed warehouses exceeding 15,000 m² in strategic locations, equipped with modern monitoring and safety systems. You pay for the space you actually use, and scale with your season with no long contracts.',
    },
    features: {
      ar: [
        { title: 'مساحات مكيفة بدرجات مضبوطة', body: 'قاعات تخزين مكيفة بدرجات حرارة مضبوطة من 16 إلى 21°م، تحمي منتجات العناية والتجميل والمكملات وكل ما يتأثر بحرارة الصيف.' },
        { title: 'مخزونك مربوط بمنصتك', body: 'كل قطعة تدخل المستودع تنعكس في نظامنا وفي متجرك لحظيًا، سواء سلة أو زد أو شوبيفاي، فما تبيع منتج خالص من المخزون ولا توقف منتج متوفر.' },
        { title: 'استلام وفحص منظم', body: 'شحنتك توصلنا من موردك أو من ميناء التخليص، نستلمها بمحضر موثق، نفحص الكميات والحالة، ونصورها قبل ما تترتب على الرفوف.' },
        { title: 'جرد دوري بدون إغلاق', body: 'جرد متواصل بتقنية العد الدوري، فدقة مخزونك محفوظة على مدار السنة بدون ما نوقف طلباتك يوم كامل للجرد.' },
        { title: 'أمان على مدار الساعة', body: 'كاميرات مراقبة، أنظمة إنذار وإطفاء، وصلاحيات دخول محددة، فبضاعتك مؤمّنة فعليًا وورقيًا.' },
        { title: 'تواريخ الصلاحية ونظام FEFO', body: 'نسجل تاريخ انتهاء كل دفعة عند الاستلام، ونصرف الطلبات بنظام FEFO: الأقرب انتهاءً يطلع أولًا. مخزونك يدور بذكاء، والتوالف بسبب انتهاء الصلاحية ينخفض لأدنى حد، مع تنبيهات مبكرة للدفعات اللي تقترب من نهايتها.' },
      ],
      en: [
        { title: 'Controlled-climate halls', body: 'Air-conditioned halls kept between 16 and 21°C, protecting beauty products, supplements, and anything summer heat can damage.' },
        { title: 'Inventory synced to your platform', body: 'Every unit that enters the warehouse reflects instantly in our system and your store — Salla, Zid, or Shopify — so you never oversell or pause a product that is actually in stock.' },
        { title: 'Documented receiving and inspection', body: 'Your shipment arrives from your supplier or customs, we receive it against a documented record, verify counts and condition, and photograph before shelving.' },
        { title: 'Cycle counting, no shutdowns', body: 'Continuous cycle counts keep inventory accuracy high all year — without freezing your orders for a full-day stock take.' },
        { title: 'Around-the-clock security', body: 'CCTV, alarm and fire systems, and restricted access — your goods are protected physically and on paper.' },
        { title: 'Expiry dates and FEFO', body: 'Every batch\'s expiry date is logged at receiving, and orders pick FEFO: first expired, first out. Your stock rotates intelligently, expiry write-offs drop to a minimum, and you get early alerts for batches approaching their end date.' },
      ],
    },
    steps: {
      ar: [
        { title: 'أرسل بضاعتك', body: 'من موردك مباشرة أو من مستودعك الحالي، ننسق الاستلام ونستقبل الشحنة بمحضر موثق.' },
        { title: 'نفحص ونصنّف', body: 'عدّ وفحص وتصوير، ثم ترتيب على مواقع تخزين مرقّمة يعرفها النظام قطعة قطعة.' },
        { title: 'مخزونك أمامك لحظة بلحظة', body: 'كل حركة مخزون تنعكس فورًا على متجرك، مع تقارير جاهزة من أي مكان.' },
      ],
      en: [
        { title: 'Send your stock', body: 'Direct from your supplier or your current warehouse — we coordinate receiving with a documented record.' },
        { title: 'Inspect & classify', body: 'Count, inspect, photograph, then place into numbered locations the system tracks piece by piece.' },
        { title: 'Your inventory, live in real time', body: 'Every stock movement reflects instantly in your store, with reports ready from anywhere.' },
      ],
    },
    stats: [
      { value: '15,000 م²+', ar: 'مساحة تخزين مرخّصة', en: 'Licensed storage space' },
      { value: '16-21 درجة مئوية', valueEn: '16–21°C', ar: 'بيئة تخزين مضبوطة', en: 'Controlled storage climate' },
      { value: '10+', ar: 'مستودعات ومراكز', en: 'Warehouses & hubs' },
    ],
    faqs: {
      ar: [
        { q: 'هل تتبعون تواريخ صلاحية منتجاتي؟', a: 'نعم، نسجل تاريخ انتهاء كل دفعة لحظة استلامها، والنظام يصرف الطلبات بمنهجية FEFO (الأقرب انتهاءً أولًا)، مع تنبيهات مبكرة قبل اقتراب أي دفعة من نهايتها. مناسب تمامًا لمنتجات التجميل والمكملات والأغذية.' },
        { q: 'هل فيه حد أدنى للكمية أو مدة التخزين؟', a: 'لا، تبدأ بالكمية اللي عندك وتدفع على الاستخدام الفعلي. نمو مخزونك بالمواسم ما يحتاج عقد جديد، والمساحة تتوسع معك تلقائيًا.' },
        { q: 'كيف أتابع مخزوني عندكم؟', a: 'من لوحة تحكم تعرض الأرصدة لحظيًا لكل منتج ومقاس ولون، مع تقارير حركة المخزون. والأرصدة نفسها متزامنة مع متجرك على سلة أو زد أو شوبيفاي.' },
        { q: 'هل تستقبلون بضاعة قادمة من الصين أو الخارج مباشرة؟', a: 'نعم، عبر خدمة الشحن الدولي والتخليص الجمركي نستورد بضاعتك من موردك ونخلصها ونستلمها بمستودعاتنا مباشرة، فتدخل المخزون جاهزة للبيع بدون أي خطوة منك.' },
      ],
      en: [
        { q: 'Do you track my products\' expiry dates?', a: 'Yes — every batch\'s expiry is logged at receiving, orders pick FEFO (first expired, first out), and you get early alerts before any batch approaches its end. Ideal for beauty, supplements, and food products.' },
        { q: 'Is there a minimum quantity or storage period?', a: 'No — start with what you have and pay for actual usage. Seasonal growth expands your space automatically with no new contract.' },
        { q: 'How do I monitor my inventory with you?', a: 'Through a dashboard showing live balances per SKU, size, and colour, with movement reports. The same balances sync to your Salla, Zid, or Shopify store.' },
        { q: 'Can you receive stock arriving from China or abroad directly?', a: 'Yes — through our international freight and customs service we import from your supplier, clear customs, and receive at our warehouses, so stock enters ready to sell with zero steps on your side.' },
      ],
    },
    related: { slug: 'inventory-management-basics', ar: 'أساسيات إدارة المخزون: 7 مفاهيم تضبط فلوسك', en: 'Inventory management basics' },
  },
  {
    slug: 'packing',
    meta: {
      ar: { title: 'تجهيز وتغليف الطلبات بهوية علامتك التجارية | فاست أكسس', desc: 'فريق مدرّب يجهز طلبك خلال ساعات بمواد متينة وتغليف يحمل اسم براندك: كروت شكر، إهداءات، وتغليف مواسم. عميلك يستلم تجربة، مو كرتون.' },
      en: { title: 'Branded pick, pack & fulfillment | Fast Access', desc: 'A trained team packs your orders within hours in durable materials carrying your brand: thank-you cards, gift options, seasonal packaging.' },
    },
    chip: { ar: 'التجهيز والتغليف', en: 'Pick & pack' },
    h1: { ar: 'عميلك يستلم تجربة تحمل اسمك، مو كرتون', en: 'Your customer unboxes your brand' },
    intro: {
      ar: 'لحظة فتح الطلب هي أول لقاء حقيقي بين عميلك وعلامتك. فريقنا المدرّب يجهّز الطلب من الرف، يفحصه، ويغلفه بتغليف متين يعكس هويتك.',
      en: 'Unboxing is the first real meeting between your customer and your brand. Our trained team prepares each order from the shelf, inspects it, and packs it in durable packaging that reflects your brand.',
    },
    features: {
      ar: [
        { title: 'تغليف بهوية علامتك', body: 'كراتين وأشرطة وستيكرات بشعارك وألوانك، نخزنها عندنا ونستخدمها لكل طلب، فتجربة الاستلام امتداد لمتجرك مو نهاية له.' },
        { title: 'كروت وإهداءات', body: 'كروت شكر، رسائل مخصصة، وخيارات تغليف هدايا يختارها عميلك عند الطلب، وكلها تنفذ تلقائيًا بدون تدخل منك.' },
        { title: 'فحص جودة قبل الإغلاق', body: 'كل طلب يمر بنقطة فحص: المنتج الصح، المقاس الصح، الحالة سليمة، قبل ما يقفل الكرتون ويطلع للشحن. أخطاء التجهيز عندنا أقل من 0.5%.' },
        { title: 'جاهزية المواسم', body: 'رمضان، الجمعة البيضاء، مواسم الإهداء: نرفع الطاقة التجهيزية مسبقًا ونجهز مواد تغليف موسمية، فذروتك تمر وكأنها يوم عادي.' },
        { title: 'مواد متينة تحمي منتجك', body: 'حشوات وتغليف داخلي يناسب طبيعة منتجك، سواء زجاج أو سوائل أو إلكترونيات، فنسبة التوالف بالشحن تنخفض لأدنى حد.' },
      ],
      en: [
        { title: 'Packaging in your identity', body: 'Boxes, tapes, and stickers in your logo and colours — stored with us and used for every order, so unboxing extends your store rather than ending it.' },
        { title: 'Cards and gifting', body: 'Thank-you cards, custom messages, and gift-wrap options your customer selects at checkout — all executed automatically.' },
        { title: 'Quality gate before sealing', body: 'Every order passes a check: right product, right size, sound condition — before the box closes. Packing error rate below 0.5%.' },
        { title: 'Peak-season readiness', body: 'Ramadan, White Friday, gifting seasons — we raise packing capacity in advance and prepare seasonal materials so your peak feels like a normal day.' },
        { title: 'Materials that protect', body: 'Inner padding matched to your product — glass, liquids, electronics — keeping transit damage to a minimum.' },
      ],
    },
    steps: {
      ar: [
        { title: 'الطلب يوصلنا تلقائيًا', body: 'من متجرك مباشرة عبر التكامل، بدون إدخال يدوي ولا نسخ أرقام.' },
        { title: 'تجهيز وفحص وتغليف', body: 'الفريق يجهّز القطع من مواقعها، يفحصها، ويغلفها بهويتك مع أي إضافات طلبها العميل.' },
        { title: 'جاهز للشحن بنفس اليوم', body: 'الطلب يسلم لشريك الشحن الأنسب بنفس اليوم، ورابط التتبع يوصل عميلك تلقائيًا.' },
      ],
      en: [
        { title: 'Orders flow in automatically', body: 'Straight from your store via the integration — no manual entry.' },
        { title: 'Prepare, inspect & pack', body: 'The team prepares items from their locations, inspects, and packs in your identity with any customer add-ons.' },
        { title: 'Ready to ship in hours', body: 'Handed to the best-fit carrier the same day, with the tracking link sent to your customer automatically.' },
      ],
    },
    stats: [
      { value: 'دقائق', ar: 'متوسط تجهيز الطلب', en: 'Average packing time' },
      { value: '<0.5%', ar: 'نسبة أخطاء التجهيز', en: 'Packing error rate' },
      { value: '100%', ar: 'طلبات بهوية علامتك', en: 'Orders in your branding' },
    ],
    faqs: {
      ar: [
        { q: 'أقدر أستخدم مواد التغليف الخاصة فيني؟', a: 'أكيد، ترسل لنا كراتينك وستيكراتك وموادك، نخزنها ضمن مخزونك، ونستخدمها بكل طلب حسب دليل التغليف اللي نتفق عليه.' },
        { q: 'وش يصير لو طلب العميل تغليف هدية؟', a: 'خيارات الإهداء اللي يختارها العميل بمتجرك توصلنا مع الطلب وتنفذ تلقائيًا: تغليف هدية، إخفاء الفاتورة، وكرت برسالة مخصصة.' },
        { q: 'كيف تضمنون عدم خلط الطلبات بالمواسم؟', a: 'كل قطعة لها موقع مرقّم وكل طلب يمر بفحص باركود قبل الإغلاق، النظام ما يسمح بإقفال طلب فيه قطعة غلط. وبالمواسم نرفع عدد الفريق مسبقًا حسب توقعاتك.' },
      ],
      en: [
        { q: 'Can I use my own packaging materials?', a: 'Absolutely — send us your boxes, stickers, and materials; we store them as part of your inventory and use them per the packing guide we agree on.' },
        { q: 'What happens when a customer requests gift wrapping?', a: 'Gifting options selected at your checkout arrive with the order and execute automatically: gift wrap, hidden invoice, and a card with a custom message.' },
        { q: 'How do you prevent mix-ups during peak?', a: 'Every unit has a numbered location and every order passes a barcode check before sealing — the system will not close an order with a wrong item. For peaks we scale the team in advance based on your forecast.' },
      ],
    },
    related: { slug: 'peak-season-preparation', ar: 'جهّز متجرك لمواسم الذروة: خطة 6 أسابيع', en: 'Peak season preparation plan' },
  },
  {
    slug: 'shipping',
    featuresHeading: { ar: 'كل قرار شحن مبني على بيانات تشغيل فعلية.', en: 'Every shipping decision is built on real operational data.' },
    meta: {
      ar: { title: 'شحن وتوصيل الطلبات لكل السعودية والخليج | فاست أكسس', desc: 'شبكة تضم أفضل شركات الشحن المحلية والدولية مع +42 مركز توزيع: توصيل بنفس اليوم داخل المدن الكبرى، تغطية الخليج، ووصول لأكثر من 220 دولة، بالتزام 98% بالمواعيد.' },
      en: { title: 'Shipping & delivery across Saudi Arabia and the GCC | Fast Access', desc: 'A network of the best local and international carriers with 42+ distribution centres: same-day in major cities, GCC coverage, and reach to 220+ countries at 98% on-time.' },
    },
    chip: { ar: 'الشحن والتوصيل', en: 'Shipping & delivery' },
    h1: { ar: 'كل طلب ياخذ أفضل طريق سعرًا وسرعة', en: 'Every order takes the best route' },
    intro: {
      ar: 'ما فيه شركة شحن واحدة مثالية لكل الطلبات. نظامنا يختار لكل شحنة الناقل الأنسب من شبكة شركائنا المحليين والدوليين، حسب الوجهة والوزن والسرعة المطلوبة، فتحصل على أفضل توازن بين التكلفة وسرعة الوصول، طلبًا بطلب.',
      en: 'No single carrier is ideal for every order. Our system picks the best-fit carrier per shipment from our local and international partner network — by destination, weight, and required speed — so you get the best cost-speed balance, order by order.',
    },
    features: {
      ar: [
        { title: 'اختيار الناقل الأذكى لكل طلب', body: 'خوارزمية توجيه توزن السعر والسرعة والتغطية لكل شحنة: طلب الرياض العاجل ياخذ مسار، وطلب القرية البعيدة ياخذ مسار أوفر.' },
        { title: 'نفس اليوم بالمدن الكبرى', body: 'بالتكامل مع مخازننا السحابية داخل المدن، طلبات الرياض وجدة والدمام توصل بنفس اليوم، فطلب الصباح يوصل قبل المغرب.' },
        { title: 'تغطية خليجية ودولية', body: 'شحن مباشر لدول الخليج، ووصول لأكثر من 220 دولة عبر شركائنا الدوليين، فتوسعك الإقليمي ما يحتاج مستودع جديد.' },
        { title: 'الدفع عند الاستلام مُدار بالكامل', body: 'نغطي التحصيل عند الباب، متابعة الرفض، وإعادة المحاولة، مع تحويل المبالغ لحسابك بجدول واضح.' },
        { title: 'توصيل لنقاط ريدبوكس', body: 'خيار الاستلام من النقاط الذكية لعملائك اللي يفضلون المرونة، يخفض تكلفة التوصيل ويرفع نسبة نجاح التسليم.' },
      ],
      en: [
        { title: 'Smart carrier selection per order', body: 'A routing logic weighs price, speed, and coverage per shipment — an urgent Riyadh order takes one path, a remote-village order takes a cheaper one.' },
        { title: 'Same-day in major cities', body: 'Integrated with our in-city cloud stores, Riyadh, Jeddah, and Dammam orders arrive the same day.' },
        { title: 'GCC and international reach', body: 'Direct shipping to GCC countries and reach to 220+ countries via international partners — regional expansion without a new warehouse.' },
        { title: 'Fully managed cash on delivery', body: 'We handle doorstep collection, refusal follow-up, and retries — with remittance to your account on a clear schedule.' },
        { title: 'RedBox smart lockers', body: 'Pickup-point delivery for customers who prefer flexibility — lowering delivery cost and raising first-attempt success.' },
      ],
    },
    steps: {
      ar: [
        { title: 'الطلب جاهز للانطلاق', body: 'بعد التغليف، النظام يقرأ وجهة الطلب وحجمه ومتطلباته.' },
        { title: 'التوجيه للناقل الأنسب', body: 'الخوارزمية تختار الشريك الأمثل وتصدر بوليصة الشحن تلقائيًا.' },
        { title: 'تتبع حتى الباب', body: 'رابط التتبع يوصل عميلك، وفريقنا يراقب الشحنة ويتدخل عند أي تعثر.' },
      ],
      en: [
        { title: 'Order packed and weighed', body: 'After packing, the system reads destination, weight, and requirements.' },
        { title: 'Routed to the best carrier', body: 'The algorithm selects the optimal partner and issues the label automatically.' },
        { title: 'Tracked to the door', body: 'Your customer gets the tracking link while our team monitors and intervenes on any exception.' },
      ],
    },
    stats: [
      { value: '98%', ar: 'التزام بمواعيد التسليم', en: 'On-time delivery' },
      { value: '42+', ar: 'مركز توزيع', en: 'Distribution centres' },
      { value: '220+', ar: 'دولة نوصل لها', en: 'Countries reached' },
    ],
    faqs: {
      ar: [
        { q: 'مين شركات الشحن اللي تتعاملون معها؟', a: 'شبكة تضم كبرى شركات الشحن المحلية والدولية العاملة بالمملكة. الميزة إنك ما ترتبط بشركة واحدة، النظام يوجه كل طلب للأنسب، وإذا تعثر ناقل بموسم معين نحوّل الحمل لغيره فورًا.' },
        { q: 'كم تكلفة الشحن للطلب الواحد؟', a: 'تعتمد على الوجهة والوزن والسرعة، وبحكم أحجام شحننا نحصل على أسعار تفاوضية أفضل من التعاقد المباشر غالبًا. اطلب عرض سعر ونرسل لك جدول تكلفة واضح حسب مناطقك ومتوسط أوزانك.' },
        { q: 'وش يصير إذا رفض العميل الاستلام؟', a: 'ندير محاولة التواصل وإعادة الجدولة، وإذا تأكد الرفض ترجع الشحنة لمستودعنا، تفحص، وتدخل مخزونك من جديد، وتظهر لك بتقرير المرتجعات مع سبب الرفض.' },
      ],
      en: [
        { q: 'Which carriers do you work with?', a: 'A network of the major local and international carriers operating in the Kingdom. The advantage: you are not tied to one — the system routes each order to the best fit, and if a carrier struggles in a season we shift volume instantly.' },
        { q: 'How much does shipping cost per order?', a: 'It depends on destination, weight, and speed; our volumes earn negotiated rates usually better than direct contracts. Request a quote and we will send a clear cost table for your regions and average weights.' },
        { q: 'What happens if a customer refuses delivery?', a: 'We manage contact and re-scheduling; on confirmed refusal the shipment returns to our warehouse, gets inspected, and re-enters your inventory — appearing in your returns report with the refusal reason.' },
      ],
    },
    related: { slug: 'fulfillment-cost-calculation', ar: 'كيف تحسب تكلفة الفلفلمنت بالأرقام', en: 'Fulfillment cost calculation' },
  },
  {
    slug: 'tracking',
    meta: {
      ar: { title: 'متابعة لحظية لشحناتك من لوحة واحدة | فاست أكسس', desc: 'لوحة تحكم تجمع كل شحناتك من الاستلام إلى التسليم عبر 5 مراحل، روابط تتبع توصل عملاءك تلقائيًا، وتقارير أداء تبني عليها قراراتك.' },
      en: { title: 'Live tracking for every shipment, one dashboard | Fast Access', desc: 'One dashboard for every shipment across 5 stages, automatic customer tracking links, and performance reports you can act on.' },
    },
    chip: { ar: 'المتابعة اللحظية', en: 'Live tracking' },
    h1: { ar: 'تعرف وين كل طلب، قبل ما يسألك عميلك', en: 'Know where every order is, before your customer asks' },
    intro: {
      ar: 'أكثر سؤال يستهلك خدمة عملاء المتاجر: "وين طلبي؟". لوحتنا تجاوب عنه قبل ما يُطرح: كل شحنة مرئية عبر خمس مراحل من الاستلام للتسليم، وعميلك يستلم رابط تتبع تلقائي يحدث نفسه لحظة بلحظة.',
      en: 'The question that consumes store support the most: "Where is my order?" Our dashboard answers it before it is asked — every shipment visible across five stages, and your customer receives an auto-updating tracking link.',
    },
    features: {
      ar: [
        { title: 'خمس مراحل واضحة', body: 'استلام الطلب، التجهيز، الخروج للشحن، بالطريق، تم التسليم. كل انتقال يسجل بوقته، فما فيه شحنة "مختفية" بين مرحلتين.' },
        { title: 'روابط تتبع تلقائية لعملائك', body: 'لحظة شحن الطلب، عميلك يستلم رابط تتبع بهوية متجرك يحدث نفسه تلقائيًا، ومكالمات "وين طلبي" تنخفض بشكل ملموس.' },
        { title: 'تقارير تبني عليها قرارات', body: 'متوسط زمن التسليم بمنطقة، أداء كل ناقل، نسب نجاح التسليم من أول محاولة: أرقام حقيقية توجه اختياراتك التشغيلية والتسويقية.' },
        { title: 'تنبيهات الاستثناءات', body: 'تأخر شحنة عن نافذتها، تعثر تسليم، عنوان ناقص: تظهر لك كاستثناء يحتاج قرار، مو رقم ضايع وسط جدول.' },
        { title: 'تطبيق التجار، قريبًا', body: 'تجارتك بجيبك: متابعة الطلبات وتحليلات المبيعات والمخزون وتنبيهات لحظية، قريبًا على App Store و Google Play.' },
      ],
      en: [
        { title: 'Five clear stages', body: 'Received, packed, out for shipping, in transit, delivered — every transition timestamped, so no shipment goes dark between stages.' },
        { title: 'Automatic customer tracking links', body: 'The moment an order ships, your customer receives a branded self-updating tracking link — "where is my order" contacts drop measurably.' },
        { title: 'Reports you can act on', body: 'Average delivery time per region, per-carrier performance, first-attempt success rates — real numbers guiding operational and marketing choices.' },
        { title: 'Exception alerts', body: 'A shipment past its window, a failed delivery, a missing address — surfaced as an exception needing a decision, not a lost row in a table.' },
        { title: 'Merchant app — coming soon', body: 'Your business in your pocket: order tracking, sales and inventory analytics, and instant alerts. Soon on the App Store and Google Play.' },
      ],
    },
    steps: {
      ar: [
        { title: 'كل حدث يسجل تلقائيًا', body: 'من دخول الطلب إلى تسليمه، بدون إدخال يدوي من أحد.' },
        { title: 'لوحة تحكم شاملة', body: 'كل شحناتك، بكل الناقلين، بشاشة واحدة بدل خمس بوابات متفرقة.' },
        { title: 'شفافية كاملة لك ولعميلك', body: 'هو يتابع برابطه، وأنت تتابع بلوحتك، وما أحد يحتاج يسأل الثاني.' },
      ],
      en: [
        { title: 'Every event logs automatically', body: 'From order entry to delivery — no manual input from anyone.' },
        { title: 'One dashboard for everything', body: 'All shipments, all carriers, one screen instead of five separate portals.' },
        { title: 'Full transparency for you and your customer', body: 'They follow their link, you follow your dashboard — nobody needs to ask.' },
      ],
    },
    stats: [
      { value: '5', ar: 'مراحل موثقة لكل طلب', en: 'Documented stages per order' },
      { value: '100%', ar: 'من الشحنات مرئية لحظيًا', en: 'Shipments visible live' },
      { value: '24/7', ar: 'مراقبة الاستثناءات', en: 'Exception monitoring' },
    ],
    faqs: {
      ar: [
        { q: 'هل رابط التتبع بهوية متجري أو باسمكم؟', a: 'رابط التتبع اللي يوصل عميلك يعرض تجربة نظيفة تركز على طلبه ومراحله، عميلك يتعامل مع متجرك، وإحنا المحرك بالخلفية.' },
        { q: 'أقدر أربط التتبع بنظامي الخاص؟', a: 'نعم، بيانات الشحنات متاحة عبر التكامل، فتقدر تعرضها بلوحتك الداخلية أو تبني عليها أتمتة خاصة بمتجرك.' },
        { q: 'كيف أعرف إن فيه شحنة متأخرة؟', a: 'ما تحتاج تدور، الشحنات المتأخرة عن نافذتها تظهر كتنبيه استثناء بلوحتك، وفريقنا يكون غالبًا باشر التدخل مع الناقل قبل ما تفتح اللوحة أصلًا.' },
      ],
      en: [
        { q: 'Is the tracking link branded to my store or yours?', a: 'The link your customer receives presents a clean experience focused on their order and its stages — your customer deals with your store; we are the engine behind it.' },
        { q: 'Can I connect tracking to my own system?', a: 'Yes — shipment data is available via the integration, so you can surface it in your internal dashboard or build store-specific automation on top.' },
        { q: 'How do I know a shipment is late?', a: 'You do not have to hunt — shipments past their window surface as exception alerts, and our team has usually already engaged the carrier before you open the dashboard.' },
      ],
    },
    related: { slug: 'what-is-fulfillment', ar: 'ما هو الفلفلمنت؟ الدليل الشامل', en: 'What is fulfillment? The complete guide' },
  },
  {
    slug: 'cloud-stores',
    meta: {
      ar: { title: 'المخازن السحابية: توصيل بنفس اليوم من قلب المدينة | فاست أكسس', desc: 'مخزونك موزع بمخازن داخل 6 مدن، فالطلب العاجل يوصل خلال ساعة إلى ساعتين حتى بذروة المواسم. ارفع تحويل متجرك بوعد توصيل ينافس المتاجر الفورية.' },
      en: { title: 'Cloud stores: same-day delivery from inside the city | Fast Access', desc: 'Inventory pre-positioned in 6 cities so urgent orders arrive within 1-2 hours even at peak. Win conversions with quick-commerce delivery promises.' },
    },
    chip: { ar: 'المخازن السحابية', en: 'Cloud stores' },
    h1: { ar: 'مخزونك جوّا المدينة، وطلبك عند العميل خلال ساعة إلى ساعتين', en: 'Stock inside the city, orders delivered within two hours' },
    intro: {
      ar: 'العميل اللي يبي منتجه اليوم ما ينتظر توصيل بكرة، يشتري من منافسك الأسرع. المخازن السحابية تحط مخزونك المختار داخل أحياء المدن، فطلب الظهر يوصل العصر، ووعد "توصيل اليوم" بمتجرك يصير حقيقة تشغيلية مو شعار.',
      en: 'A customer who wants it today will not wait for tomorrow — they buy from your faster competitor. Cloud stores position selected inventory inside city districts, so a noon order arrives by afternoon and "same-day delivery" becomes an operational fact, not a slogan.',
    },
    features: {
      ar: [
        { title: 'توصيل خلال ساعة إلى ساعتين', body: 'المسافة أقصر فالوصول أسرع، فالطلبات العاجلة داخل المدينة توصل خلال ساعة إلى ساعتين من الضغط على "اشتر".' },
        { title: 'توزيع ذكي للمخزون', body: 'نحلل مبيعاتك ونحدد المنتجات الأعلى دورانًا لكل مدينة، فتتقدم بمخزونها للمخزن السحابي وتبقى الأصناف البطيئة بالمستودع المركزي.' },
        { title: 'صمود بذروة المواسم', body: 'لما تزدحم شبكات الشحن برمضان والجمعة البيضاء، طلباتك السحابية تكمل مسارها القصير بشكل طبيعي، ميزة تنافسية بأصعب أسابيع السنة.' },
        { title: 'ست مدن وتتوسع', body: 'تغطية المدن الرئيسية بالمملكة، والشبكة تكبر حسب خريطة طلبات عملائنا.' },
        { title: 'مخزون واحد بنظام واحد', body: 'المخزون السحابي والمركزي بنفس اللوحة وبنفس المزامنة مع متجرك، والنظام يوجه كل طلب تلقائيًا لأقرب نقطة فيها المنتج.' },
      ],
      en: [
        { title: '1-2 hour delivery', body: 'Shorter distance, faster arrival: urgent in-city orders land within one to two hours of checkout.' },
        { title: 'Smart inventory distribution', body: 'We analyse your sales and forward-position your fastest movers per city, keeping slow SKUs at the central warehouse.' },
        { title: 'Peak-season resilience', body: 'When carrier networks jam in Ramadan and White Friday, your cloud orders keep their short route — a competitive edge in the hardest weeks.' },
        { title: 'Six cities and growing', body: 'Coverage across the Kingdom\'s major cities, expanding with our merchants\' demand map.' },
        { title: 'One inventory, one system', body: 'Cloud and central stock live in the same dashboard and the same store sync — each order routes automatically to the nearest point holding the item.' },
      ],
    },
    steps: {
      ar: [
        { title: 'نحلل خريطة مبيعاتك', body: 'وين عملاؤك؟ وش أسرع منتجاتك؟ نحدد التشكيلة الأنسب لكل مدينة.' },
        { title: 'نوزع المخزون مقدمًا', body: 'الأصناف المختارة تتقدم للمخازن السحابية قبل الطلب، مو بعده.' },
        { title: 'الطلب يوصل خلال ساعة إلى ساعتين', body: 'النظام يوجه الطلب لأقرب مخزن فيه المنتج، والتوصيل ينطلق فورًا.' },
      ],
      en: [
        { title: 'We analyse your demand map', body: 'Where are your customers? What moves fastest? We define the right assortment per city.' },
        { title: 'Stock moves forward in advance', body: 'Selected SKUs pre-position to cloud stores before the order — not after.' },
        { title: 'Orders arrive in hours', body: 'Each order routes to the nearest store holding the item, and delivery starts immediately.' },
      ],
    },
    stats: [
      { value: 'ساعة إلى ساعتين', ar: 'للتوصيل العاجل داخل المدينة', en: 'Urgent in-city delivery' },
      { value: '6', ar: 'مدن مغطاة', en: 'Cities covered' },
      { value: 'يوميًا', ar: 'تغذية المخزون من المركز', en: 'Daily replenishment' },
    ],
    faqs: {
      ar: [
        { q: 'هل أحتاج أنقل كل مخزوني للمخازن السحابية؟', a: 'لا، الفكرة عكس ذلك: نسبة صغيرة مختارة بعناية (الأصناف الأسرع لكل مدينة) تتقدم للمخازن السحابية، والباقي يبقى بالمستودع المركزي الأوفر.' },
        { q: 'وش يصير إذا نفد المنتج من المخزن السحابي؟', a: 'الطلب يتوجه تلقائيًا للمستودع المركزي ويشحن بالمسار العادي، والنظام يعيد تغذية المخزن السحابي حسب سرعة السحب، بدون تدخل منك.' },
        { q: 'هل الخدمة تناسب المتاجر الصغيرة؟', a: 'إذا كانت مبيعاتك تتركز بمدينة أو مدينتين، فالمخازن السحابية غالبًا أول ميزة تنافسية كبيرة تقدر تنافس فيها المتاجر الكبيرة، تبدأ بمدينة وحدة وبتشكيلة صغيرة وتتوسع مع النتائج.' },
      ],
      en: [
        { q: 'Do I need to move all my inventory to cloud stores?', a: 'No — the opposite: a small, carefully chosen share (your fastest movers per city) goes forward, and the rest stays at the more economical central warehouse.' },
        { q: 'What if an item runs out at a cloud store?', a: 'The order routes automatically to the central warehouse and ships the normal route, while the system replenishes the cloud store based on velocity — no action needed from you.' },
        { q: 'Does this suit small stores?', a: 'If your sales concentrate in one or two cities, cloud stores are often the first big edge that lets you match the big players — start with one city and a small assortment and expand with results.' },
      ],
    },
    related: { slug: 'dark-store-same-day-delivery', ar: 'الدارك ستور: كيف توصّل طلبات متجرك بنفس اليوم', en: 'Dark stores and same-day delivery' },
  },
  {
    slug: 'support',
    meta: {
      ar: { title: 'خدمة عملاء لوجستية تراقب شحناتك 24/7 | فاست أكسس', desc: 'فريق يراقب شحناتك أولًا بأول ويتدخل قبل التصعيد: أغلب المشاكل تنحل قبل ما تسمع فيها. دعم متواصل واستشارات تشغيلية لسلسلة إمدادك.' },
      en: { title: 'Logistics support watching your shipments 24/7 | Fast Access', desc: 'A team monitoring your shipments in real time and intervening before escalation — most issues resolve before you hear about them.' },
    },
    chip: { ar: 'خدمة العملاء', en: 'Customer care' },
    h1: { ar: 'فريق يشوف المشكلة قبلك، ويحلها قبل ما تكبر', en: 'A team that sees the problem before you do' },
    intro: {
      ar: 'الفرق بين مشغل لوجستي عادي وشريك حقيقي يظهر لحظة الخلل: شحنة تأخرت، عنوان ناقص، عميل ما رد. فريقنا يراقب الاستثناءات على مدار الساعة ويباشرها فورًا، فأغلب المشاكل تنحل وتوصلك خبرًا منتهيًا، مو أزمة مفتوحة.',
      en: 'The difference between an ordinary operator and a real partner shows the moment something breaks: a delayed shipment, a missing address, an unreachable customer. Our team monitors exceptions around the clock and acts immediately — most issues reach you as a resolved note, not an open crisis.',
    },
    features: {
      ar: [
        { title: 'مراقبة استباقية للشحنات', body: 'ما ننتظر شكوى: النظام يرصد أي شحنة خرجت عن مسارها الزمني، والفريق يباشر مع الناقل فورًا.' },
        { title: 'حل المشاكل من جذرها', body: 'عنوان غير مكتمل؟ نتواصل مع عميلك ونصححه. عميل ما يرد؟ نعيد الجدولة. رفض استلام؟ ندير الإرجاع. كل سيناريو له مسار جاهز.' },
        { title: 'استشارات تشغيلية', body: 'مو بس نجاوب أسئلتك، نراجع معك أرقامك ونقترح تحسينات: تغليف أوفر، توزيع مخزون أذكى، مواسم مجهزة أفضل.' },
        { title: 'قناة واحدة لكل شي', body: 'مخزون، شحن، مرتجعات، فواتير: فريق واحد يعرف حسابك ويجاوبك بدل تحويلك بين خمس جهات.' },
        { title: 'دعم طوارئ سلسلة الإمداد', body: 'شحنة استيراد علقت؟ ذروة مفاجئة؟ الفريق يفزع معك بخطة بديلة بنفس اليوم.' },
      ],
      en: [
        { title: 'Proactive shipment monitoring', body: 'We do not wait for complaints — the system flags any shipment off its time path and the team engages the carrier immediately.' },
        { title: 'Root-cause resolution', body: 'Incomplete address? We contact your customer and fix it. No answer? We reschedule. Refusal? We manage the return — every scenario has a ready playbook.' },
        { title: 'Operational consulting', body: 'Beyond answering questions — we review your numbers and suggest improvements: leaner packaging, smarter stock distribution, better-prepared seasons.' },
        { title: 'One channel for everything', body: 'Inventory, shipping, returns, invoices — one team that knows your account instead of bouncing you between five departments.' },
        { title: 'Supply-chain emergency support', body: 'An import shipment stuck? A sudden spike? The team mobilises a fallback plan the same day.' },
      ],
    },
    steps: {
      ar: [
        { title: 'النظام يرصد', body: 'كل شحنة خارج مسارها الزمني تظهر كاستثناء فوري.' },
        { title: 'الفريق يباشر', body: 'تواصل مع الناقل أو العميل وحل المشكلة من مصدرها.' },
        { title: 'توصلك النتيجة', body: 'تقرير مختصر: وش صار، وش انحل، ووش نقترح عشان ما يتكرر.' },
      ],
      en: [
        { title: 'The system detects', body: 'Any shipment off its time path surfaces instantly as an exception.' },
        { title: 'The team acts', body: 'Direct contact with the carrier or customer, resolving at the source.' },
        { title: 'You get the outcome', body: 'A short note: what happened, what was resolved, and what we suggest so it does not recur.' },
      ],
    },
    stats: [
      { value: '24/7', ar: 'مراقبة ودعم متواصل', en: 'Continuous monitoring' },
      { value: 'استباقي', ar: 'التدخل قبل التصعيد', en: 'Pre-escalation action' },
      { value: 'فريق واحد', ar: 'يعرف حسابك بالكامل', en: 'That knows your account' },
    ],
    faqs: {
      ar: [
        { q: 'كيف أتواصل مع الدعم؟', a: 'قناة مباشرة عبر الواتساب والإيميل والهاتف، وفريقك يعرف حسابك، فما تعيد شرح وضعك من الصفر بكل مرة.' },
        { q: 'هل الدعم يتعامل مع عملائي مباشرة؟', a: 'عند الحاجة نعم، لتصحيح عنوان أو إعادة جدولة تسليم مثلًا، وبأسلوب يمثل متجرك. سياسة التواصل مع عملائك تحددها أنت من البداية.' },
        { q: 'وش تشمل الاستشارات التشغيلية؟', a: 'مراجعات دورية لأرقامك: تكلفة الطلب، نسب الإرجاع، أداء المناطق، مع اقتراحات عملية. عملاؤنا اللي طبقوا التوصيات وفروا بالتغليف والشحن مبالغ ملموسة.' },
      ],
      en: [
        { q: 'How do I reach support?', a: 'A direct channel via WhatsApp, email, and phone — and your team knows your account, so you never re-explain your setup from scratch.' },
        { q: 'Does support contact my customers directly?', a: 'When needed, yes — to fix an address or reschedule a delivery — in a tone representing your store. You define the customer-contact policy from day one.' },
        { q: 'What does operational consulting include?', a: 'Periodic reviews of your numbers: cost per order, return rates, regional performance — with practical suggestions. Merchants who applied them saved measurably on packaging and shipping.' },
      ],
    },
    related: { slug: 'returns-management-ecommerce', ar: 'إدارة المرتجعات: حوّلها من خسارة لفرصة', en: 'Returns management for e-commerce' },
  },
  {
    slug: 'freight',
    meta: {
      ar: { title: 'الشحن الدولي والتخليص الجمركي للمتاجر | فاست أكسس', desc: 'نستورد بضاعتك من موردك، شحن بحري وجوي، ونتولى التخليص الجمركي والمستندات كاملة، وتدخل مستودعاتنا جاهزة للبيع مباشرة. من الباب للرف بدون عناء.' },
      en: { title: 'International freight & customs clearance for merchants | Fast Access', desc: 'We import from your supplier — sea and air freight — handle customs and documentation end to end, and your stock enters our warehouses ready to sell.' },
    },
    chip: { ar: 'الشحن الدولي والتخليص', en: 'Freight & customs' },
    h1: { ar: 'من مصنع موردك إلى رف مستودعنا، بدون ما تلمس ورقة', en: 'From your supplier\'s factory to our shelf' },
    intro: {
      ar: 'الاستيراد هو أكثر مرحلة تستنزف وقت التاجر: متابعة مورد، حجز شحن، مستندات، جمارك، ثم نقل داخلي. نختصرها لك كلها: نستلم بضاعتك من موردك في الصين أو أي مصدر، نشحنها بحرًا أو جوًا، نخلصها جمركيًا، وتدخل مستودعاتنا مباشرة، فتتحول من شحنة استيراد إلى مخزون جاهز للبيع بخطوة واحدة.',
      en: 'Importing drains more merchant time than anything else: supplier follow-up, freight booking, documents, customs, then domestic transport. We compress it all: we collect from your supplier in China or any origin, ship by sea or air, clear customs, and receive directly at our warehouses — turning an import shipment into sellable inventory in one step.',
    },
    features: {
      ar: [
        { title: 'شحن بحري وجوي حسب أولويتك', body: 'البحري للكميات الكبيرة بأقل تكلفة، والجوي للبضاعة العاجلة أو الموسمية، ونساعدك تختار المزيج الأمثل حسب هامشك وتوقيت موسمك.' },
        { title: 'تخليص جمركي كامل', body: 'التصنيف الجمركي، المستندات، الرسوم، ومتطلبات الجهات: ملف كامل يُدار عنك من مختصين يعرفون تفاصيل الأنظمة السعودية.' },
        { title: 'من الميناء إلى المستودع مباشرة', body: 'بضاعتك ما تلف على مستودع وسيط: من التخليص إلى مستودعاتنا، تُستلم وتُفحص وتدخل مخزونك القابل للبيع بنفس السلسلة.' },
        { title: 'رؤية كاملة للشحنة', body: 'تتابع شحنة الاستيراد بمراحلها، من استلامها عند المورد حتى دخولها المخزون، بنفس اللوحة اللي تتابع فيها طلباتك.' },
        { title: 'تكلفة إجمالية واضحة مقدمًا', body: 'عرض سعر يشمل الشحن والتخليص والرسوم المتوقعة، فتعرف تكلفة وصول البضاعة للرف قبل ما تدفع لموردك.' },
      ],
      en: [
        { title: 'Sea and air by your priority', body: 'Sea for large volumes at lowest cost, air for urgent or seasonal goods — and we help you choose the optimal mix for your margin and season timing.' },
        { title: 'Complete customs clearance', body: 'Classification, documentation, duties, and authority requirements — a full file managed for you by specialists who know the Saudi regulations in detail.' },
        { title: 'Port to warehouse directly', body: 'No intermediate stop — from clearance to our warehouses, received, inspected, and entered into your sellable inventory in one chain.' },
        { title: 'Full shipment visibility', body: 'Follow your import through its stages — from supplier pickup to inventory entry — in the same dashboard as your orders.' },
        { title: 'Clear landed cost up front', body: 'A quote covering freight, clearance, and expected duties — know your cost-to-shelf before paying your supplier.' },
      ],
    },
    steps: {
      ar: [
        { title: 'نستلم من موردك', body: 'ننسق مع المورد مباشرة ونستلم البضاعة من بابه.' },
        { title: 'نشحن ونخلص', body: 'بحري أو جوي، ثم تخليص جمركي كامل بمستنداته.' },
        { title: 'تدخل مخزونك جاهزة', body: 'فحص واستلام بمستودعاتنا، وتظهر بمخزونك القابل للبيع فورًا.' },
      ],
      en: [
        { title: 'We collect from your supplier', body: 'We coordinate directly and pick up at their door.' },
        { title: 'We ship and clear', body: 'Sea or air, then full customs clearance with documentation.' },
        { title: 'It enters your inventory ready', body: 'Inspected and received at our warehouses, appearing in your sellable stock immediately.' },
      ],
    },
    stats: [
      { value: 'بحري + جوي', ar: 'خيارات شحن مرنة', en: 'Flexible freight modes' },
      { value: '100%', ar: 'إدارة المستندات والتخليص', en: 'Docs & clearance managed' },
      { value: 'خطوة واحدة', ar: 'من الاستيراد إلى البيع', en: 'From import to selling' },
    ],
    faqs: {
      ar: [
        { q: 'أستورد من الصين، من وين تبدأ خدمتكم؟', a: 'من باب موردك: ننسق معه الاستلام، ونتولى الشحن والتخليص والنقل حتى مستودعاتنا. أنت تتفاوض مع موردك على البضاعة، وإحنا نتولى كل ما بعد ذلك.' },
        { q: 'كم تستغرق شحنة الاستيراد؟', a: 'الجوي عادة أيام قليلة من الاستلام للتخليص، والبحري أسابيع حسب الميناء والموسم، نعطيك جدولًا متوقعًا مع عرض السعر، وننصح بجدولة شحنات المواسم مبكرًا (راجع مقال خطة الستة أسابيع).' },
        { q: 'هل تتعاملون مع البضائع اللي تحتاج فسوحات خاصة؟', a: 'نتعامل مع متطلبات الجهات المختلفة حسب نوع المنتج، أخبرنا وش تستورد بالضبط ضمن طلب عرض السعر، ونؤكد لك المتطلبات والمدة قبل أي التزام.' },
      ],
      en: [
        { q: 'I import from China — where does your service start?', a: 'At your supplier\'s door: we coordinate pickup, then handle freight, clearance, and transport to our warehouses. You negotiate the goods with your supplier; we handle everything after.' },
        { q: 'How long does an import shipment take?', a: 'Air is typically days from pickup to clearance; sea is weeks depending on port and season — we provide an expected timeline with your quote, and recommend booking seasonal shipments early.' },
        { q: 'Do you handle goods needing special permits?', a: 'We work with the various authorities\' requirements by product type — tell us exactly what you import in the quote request and we confirm requirements and timeline before any commitment.' },
      ],
    },
    related: { slug: '3pl-vs-4pl-difference', ar: 'الفرق بين 3PL و4PL، وأين يقف الدروبشيبينغ', en: '3PL vs 4PL explained' },
  },
];

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
export const getService = (slug: string) => SERVICES.find((s) => s.slug === slug);
