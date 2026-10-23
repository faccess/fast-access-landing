import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';
import { claims } from '../content/claims';

/**
 * سياسة خصوصية تطبيق فاست أكسس (App Store / Google Play).
 * Separate from /privacy (the website policy): this is the URL submitted to
 * Apple App Store Connect and Google Play Console as the app's privacy policy.
 * Bilingual — follows the site locale toggle; the AR/EN pair shares one URL.
 */
export default function AppPrivacy() {
  usePageMeta(
    { title: 'سياسة خصوصية التطبيق | فاست أكسس', desc: 'كيف يجمع تطبيق فاست أكسس بيانات التجار ويستخدمها ويشاركها ويحميها.' },
    { title: 'App Privacy Policy | Fast Access', desc: 'How the Fast Access mobile app collects, uses, shares, and protects merchant data.' }
  );
  const { locale } = useT();
  const isAr = locale === 'ar';

  const S = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="mb-10 scroll-mt-28">
      <h2 className="font-display text-[20px] lg:text-[24px] font-bold text-fa-liberty-blue mb-3">{title}</h2>
      <div className="font-body text-[15px] leading-[1.8] text-fa-ink-muted space-y-3">{children}</div>
    </section>
  );

  const H = ({ children }: { children: React.ReactNode }) => (
    <h3 className="font-display text-[16px] font-bold text-fa-liberty-blue pt-2">{children}</h3>
  );

  const UL = ({ items }: { items: React.ReactNode[] }) => (
    <ul className="list-disc ps-6 space-y-1.5">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );

  const mail = (
    <a href="mailto:info@faccess.co" className="text-fa-orange-soda font-semibold" dir="ltr">
      info@faccess.co
    </a>
  );

  return (
    <main>
      <PageHeader
        chip={isAr ? 'خصوصية التطبيق' : 'App Privacy'}
        title={isAr ? (<>سياسة خصوصية <span className="text-fa-orange-soda">التطبيق.</span></>) : 'App Privacy Policy.'}
        sub={isAr ? 'كيف يتعامل تطبيق فاست أكسس مع بياناتك وبيانات عملائك، بلغة واضحة.' : 'How the Fast Access app handles your data and your customers’ data — in clear language.'}
        bg="/assets/hero-resources.webp"
      />
      <section className="py-16 lg:py-24 bg-fa-classic-chalk">
        <div className="container-main max-w-[820px]">
          <p className="font-body text-[13px] text-fa-ink-muted/70 mb-10">
            {isAr ? 'آخر تحديث: 18 أكتوبر 2026' : 'Last updated: October 18, 2026'}
          </p>

          {isAr ? (
            <>
              <S title="١. مقدمة">
                <p>
                  توضح هذه السياسة كيف تقوم {claims.legalNameAr} ذ.م.م («فاست أكسس»، «نحن») بجمع المعلومات واستخدامها ومشاركتها وحمايتها عند استخدامك لتطبيق فاست أكسس (باسم <span dir="ltr">Fast Access Fulfillment</span> في المتاجر، «التطبيق») المتاح على <span dir="ltr">App Store</span> و<span dir="ltr">Google Play</span>.
                </p>
                <p>
                  التطبيق أداة أعمال مخصصة للمتاجر التي تستخدم خدمات فاست أكسس في التجهيز والتخزين والتوصيل، ويتيح للمستخدمين المصرح لهم إدارة الطلبات والمخزون والمرتجعات وأوامر الشراء والشحنات والتنبيهات وتقارير الحساب.
                </p>
                <p>
                  فاست أكسس شركة مسجلة في المملكة العربية السعودية (س.ت <span dir="ltr">1010856037</span>). توضح هذه السياسة ممارسات التطبيق، ولا تُعد الموافقة عليها بديلًا عن الموافقة المنفصلة على الميزات الاختيارية التي تطلبها. تنطبق هذه السياسة على التطبيق فقط، ولموقع faccess.co سياسة خصوصية مستقلة.
                </p>
              </S>

              <S title="٢. المعلومات التي نجمعها">
                <p>نجمع فقط ما يلزم لتشغيل حساب متجرك والخدمات التي تستخدمها عبر التطبيق.</p>
                <H>٢.١ بيانات الحساب</H>
                <UL items={[
                  'الاسم والبريد الإلكتروني ومعرّف حساب مستخدم المتجر',
                  'بيانات الدخول (تُحفظ كلمات مرور حسابات التجار المنشأة بدعوة باستخدام التجزئة المملّحة، ولا تُخزَّن كنص صريح)',
                  'اسم المتجر ورمزه وحساب فاست أكسس المرتبط',
                  'الدور والصلاحيات المسندة لك داخل حساب المتجر',
                ]} />
                <H>٢.٢ البيانات التشغيلية</H>
                <p>بيانات عمليات متجرك التي تُعالج عبر التطبيق ونظام إدارة المستودعات لدينا:</p>
                <UL items={[
                  'الطلبات وحالاتها، الشحنات وتفاصيل التتبع',
                  'عبارات البحث ومعايير التصفية التي ترسلها لاسترجاع السجلات التشغيلية',
                  'المخزون والمنتجات والأطقم ومستويات المخزون',
                  'المرتجعات وأسبابها وأوامر الشراء والمورّدون ومبالغ الطلبات والرسوم وطريقة الدفع (مثل الدفع المسبق أو عند الاستلام)، دون جمع أرقام البطاقات البنكية عبر التطبيق',
                  'بيانات توصيل عملائك (اسم المستلم، رقم الجوال، العنوان، محتوى الطلب) بالقدر اللازم لتجهيز الطلبات وتوصيلها',
                ]} />
                <p>يتيح التطبيق الوصول إلى بيانات العملاء بحسب صلاحيات المستخدم ولخدمات المتجر المرتبطة بفاست أكسس. يجب على التاجر إدخال ومشاركة البيانات التي يملك صلاحية استخدامها لهذه الأغراض.</p>
                <H>٢.٣ البيانات التقنية</H>
                <UL items={[
                  'نوع الجهاز ونظام التشغيل وإصدار التطبيق واللغة',
                  'رموز الإشعارات ومعرّفات التثبيت والتحديث اللازمة للإشعارات وتحديث التطبيق',
                  'تفضيلات التنبيهات وحالة قراءتها ونتائج تسليمها وسجلات أمان الحساب',
                  'بيانات تشخيص أعطال التحديث وبدء التشغيل التي يرسلها Expo EAS Update عند توفرها، ومنها معرّفات التحديثات الفاشلة وتقرير مختصر للخطأ الجسيم',
                  'عنوان IP ومعلومات الطلب التقنية التي تتلقاها خوادمنا ومزودو الاستضافة عند اتصال الجهاز بالخدمة، لأغراض تشغيلها وتأمينها وحل المشكلات',
                ]} />
                <H>٢.٤ صلاحيات التطبيق</H>
                <p>صلاحية الإشعارات اختيارية ويمكن تغييرها من إعدادات جهازك:</p>
                <UL items={['الإشعارات: لإرسال تنبيهات الطلبات والمخزون والحساب']} />
                <p>لا يطلب التطبيق الوصول إلى الكاميرا أو مكتبة الصور أو ملفاتك الشخصية أو الميكروفون أو جهات الاتصال أو الموقع الدقيق، ولا يجمع بيانات صحية أو قوالب حيوية. يحتفظ التطبيق ببياناته وذاكرته المؤقتة داخل مساحة تخزينه الخاصة على الجهاز.</p>
              </S>

              <S title="٣. كيف نستخدم المعلومات">
                <UL items={[
                  'إنشاء حساب متجرك وإدارته والتحقق من هويتك عند تسجيل الدخول',
                  'عرض ومعالجة الطلبات والمخزون والمرتجعات وأوامر الشراء والشحنات',
                  'تجهيز طلبات عملائك وتغليفها وشحنها وتوصيلها ومعالجة المرتجعات',
                  'إرسال التنبيهات التشغيلية عبر الإشعارات بحسب تفضيلاتك، ورسائل البريد المرتبطة بالدعوات والوصول للحساب واستعادة كلمة المرور والدعم',
                  'تقديم تحليلات وتقارير الحساب بناءً على بياناتك التشغيلية، وشرح اختياري بالذكاء الاصطناعي بعد موافقتك على المشاركة الموضحة أدناه',
                  'الرد على طلبات الدعم والتواصل بشأن حسابك',
                  'مراقبة التطبيق وتأمينه وإصلاح أعطاله وتحسينه',
                  'الالتزام بالمتطلبات النظامية والضريبية والتعاقدية',
                ]} />
                <p>لا نبيع بياناتك الشخصية، ولا نستخدم بياناتك أو بيانات عملائك للإعلانات من أطراف ثالثة.</p>
              </S>

              <S title="٤. مشاركة المعلومات">
                <p>تُعالج المعلومات اللازمة للخدمة عبر الجهات التالية، بحسب الميزة والخدمات المرتبطة بحسابك:</p>
                <UL items={[
                  <><strong>منصة إدارة المستودعات والطلبات:</strong> يعمل التطبيق عبر نظام إدارة المستودعات والطلبات لدينا (Omniful) الذي يستضيف بياناتك التشغيلية ويعالجها.</>,
                  <><strong>شركات التوصيل:</strong> اسم المستلم ورقمه وعنوانه وتفاصيل الطرد تُشارك مع شركة النقل المكلفة بالتوصيل أو الاستلام.</>,
                  <><strong>قنوات البيع المرتبطة:</strong> تُزامن بيانات الطلبات والمخزون مع منصات التجارة الإلكترونية التي تربطها بحسابك (مثل سلة، زد، شوبيفاي، نون).</>,
                  <><strong>استضافة التطبيق وقاعدة بيانات الحساب:</strong> نستخدم <span dir="ltr">Vercel</span> لتشغيل الواجهة الخلفية و<span dir="ltr">Neon</span> لقاعدة بيانات حسابات التطبيق وجلساته وتفضيلاته. تُستخدم خدمات البريد لإرسال رسائل الوصول للحساب والدعم.</>,
                  <><strong>الإشعارات والتحديثات:</strong> تُرسل رموز الإشعارات ومحتوى التنبيه عبر <span dir="ltr">Expo Push Service</span> ثم <span dir="ltr">Apple Push Notification service (APNs)</span> على أجهزة Apple أو <span dir="ltr">Firebase Cloud Messaging (FCM)</span> على Android. ترسل ميزة <span dir="ltr">Expo EAS Update</span> تلقائيًا معرّف تثبيت عشوائيًا ومعلومات تقنية مثل نظام التشغيل وإصدار التحديث مع طلبات التحديث. وعند توفرها، ترسل أيضًا معرّفات التحديثات التي فشل تشغيلها وتقريرًا عن خطأ جسيم سابق، مختصرًا إلى ١٠٢٤ حرفًا كحد أقصى، إلى Expo ضمن آلية تحميل التحديثات والتعافي من الأعطال. راجع <a href="https://expo.dev/privacy" className="text-fa-orange-soda font-semibold">سياسة خصوصية Expo</a>.</>,
                  <><strong>الشرح الاختياري بالذكاء الاصطناعي:</strong> عند اختيار «متابعة» في إشعار المشاركة لكل شرح، قد نرسل أسماء المنتجات ورموزها وأرقامًا مجمّعة للمبيعات والمخزون والمدن إلى <span dir="ltr">OpenRouter</span> ومزوّدي الذكاء الاصطناعي التابعين له، باستخدام نموذج من <span dir="ltr">OpenAI</span>. لا يتضمن هذا السياق أسماء المستلمين أو أرقام هواتفهم أو عناوينهم أو معرّفات الطلبات. قد يُحفظ الشرح المُنشأ لإعادة عرضه مع تحليلات المتجر وسجلات النموذج والاستخدام. تُعالج الجهات المزوّدة الطلب وفق ترتيباتها وسياساتها؛ راجع <a href="https://openrouter.ai/privacy/" className="text-fa-orange-soda font-semibold">سياسة خصوصية OpenRouter</a>. يمكنك إلغاء الطلب ومتابعة استخدام الوظائف الأساسية دون إرسال طلب شرح خارجي.</>,
                  <><strong>الجهات النظامية:</strong> الجهات الحكومية أو المحاكم أو الجهات الرقابية عند طلبها بموجب النظام، أو لحماية حقوقنا أو سلامتنا أو ممتلكاتنا.</>,
                  <><strong>نقل الأعمال:</strong> في حال الاندماج أو الاستحواذ أو بيع الأصول، مع الالتزام بنفس الحماية الواردة في هذه السياسة.</>,
                ]} />
                <p>لا نشارك بياناتك مع أطراف ثالثة لأغراضها التسويقية.</p>
              </S>

              <S id="security" title="٥. الاحتفاظ بالبيانات وحمايتها">
                <p>
                  <strong>الاحتفاظ.</strong> تُستخدم بيانات ملفك الشخصي وصلاحياتك وجلساتك ما دام حساب الدخول نشطًا. يؤدي الحذف المؤكّد إلى إزالة حساب الدخول وبياناته الشخصية المرتبطة من قاعدة بيانات التطبيق، كما هو موضح في القسم ٦. لا يحذف هذا الإجراء السجلات التشغيلية المشتركة للمتجر، ولا يمحو بذاته النسخ الموجودة مسبقًا في سجلات مزوّدي الخدمات أو نسخهم الاحتياطية أو الأنظمة التشغيلية المرتبطة. ترتبط مدد الاحتفاظ بهذه السجلات بالغرض منها والالتزامات المطبقة عليها؛ وللاستفسار عن بيانات محددة أو طلب حذفها، تواصل معنا عبر بيانات القسم ٧.
                </p>
                <p>
                  <strong>الحماية.</strong> تستخدم اتصالات التطبيق بالخدمة <span dir="ltr">HTTPS/TLS</span>، وتُحفظ كلمات مرور حسابات التجار المنشأة بدعوة بالتجزئة المملّحة. نستخدم صلاحيات حسابات وجلسات مصادقة قابلة للإلغاء وتنتهي صلاحيتها. تُحفظ رموز الدخول على أجهزة iOS وAndroid باستخدام التخزين الآمن لنظام التشغيل؛ وقد تُخزَّن البيانات التشغيلية مؤقتًا داخل مساحة التطبيق دون طبقة تشفير إضافية خاصة بالتطبيق. احمِ جهازك برمز قفل ولا تشاركه مع أشخاص غير مخولين. لا توجد وسيلة نقل أو تخزين آمنة بنسبة ١٠٠٪.
                </p>
              </S>

              <S id="delete" title="٦. حقوقك وحذف الحساب">
                <p>بموجب نظام حماية البيانات الشخصية، يحق لك:</p>
                <UL items={[
                  'معرفة كيفية جمع بياناتك الشخصية ومعالجتها',
                  'الوصول إلى بياناتك والحصول على نسخة منها',
                  'طلب تصحيح البيانات غير الدقيقة أو غير المكتملة',
                  'طلب حذف بياناتك الشخصية، مع مراعاة متطلبات الاحتفاظ النظامية',
                  'سحب الموافقة متى كانت المعالجة مبنية عليها',
                  'تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
                ]} />
                <p>لممارسة أي من هذه الحقوق تواصل معنا عبر بيانات التواصل في القسم ٧. قد نطلب التحقق من هويتك، ونتعامل مع الطلب وفق المدد والاستثناءات النظامية المطبقة.</p>
                <p><strong>حذف حسابك.</strong> تقدر تطلب حذف حسابك في التطبيق في أي وقت عبر:</p>
                <ol className="list-decimal ps-6 space-y-1.5">
                  <li>داخل التطبيق: «المزيد» ← «الحساب والأمان» ← «حذف الحساب»، ثم أدخل كلمة المرور الحالية وأكّد الحذف النهائي.</li>
                  <li>عبر المتصفح: افتح <a href="https://dashboard.faccess.co/account-deletion" className="text-fa-orange-soda font-semibold" dir="ltr">dashboard.faccess.co/account-deletion</a> واستخدم بريد حساب التطبيق وكلمة مروره لتأكيد الحذف.</li>
                  <li>إذا تعذّر عليك الوصول، أرسل طلبًا إلى {mail} من بريدك المسجل بعنوان «حذف حسابي».</li>
                </ol>
                <p>يؤدي الحذف المؤكّد إلى إزالة ملف حساب التطبيق وبيانات دخوله وتفضيلاته وتسجيلات أجهزته للإشعارات وطلبات الدعوة واستعادة كلمة المرور المرتبطة به، وإبطال جلساته على جميع الأجهزة. تُزال روابط الحساب من سجلات التدقيق التي يحتفظ بها التطبيق. لا يؤدي ذلك إلى إغلاق حساب المنشأة أو حذف طلباتها أو مخزونها أو فواتيرها أو سجلات تنفيذ الطلبات. ستحتاج إلى دعوة جديدة لاستعادة الوصول. إذا كان الحساب الإداري يُدار مركزيًا ولا يتيح الحذف الذاتي، فتواصل مع مسؤول منشأتك أو معنا.</p>
                <p><strong>بيانات عملائك.</strong> إذا كنت عميلًا نهائيًا لأحد المتاجر وترغب في الوصول إلى بياناتك أو حذفها، فتواصل مع المتجر مباشرة، وسندعم المتجر في تنفيذ طلبك.</p>
              </S>

              <S title="٧. معلومات أخرى والتواصل">
                <p><strong>الأطفال.</strong> التطبيق مخصص للأعمال وللمستخدمين من عمر ١٨ عامًا فأكثر. لا نجمع بيانات الأطفال عن علم، وإذا اعتقدت أن طفلًا زوّدنا ببيانات فتواصل معنا لحذفها.</p>
                <p><strong>النقل خارج المملكة.</strong> تُعالج بعض بيانات التطبيق خارج المملكة العربية السعودية. الواجهة الخلفية للتطبيق مهيّأة للعمل لدى Vercel في فرانكفورت بألمانيا، وتستخدم قاعدة بيانات حسابات التطبيق منطقة فرانكفورت لدى Neon. قد تعالج Omniful وخدمات الإشعارات والتحديثات والبريد والذكاء الاصطناعي بيانات في دول أخرى بحسب خدماتها وترتيباتها. لا يعني موقع الواجهة الخلفية وقاعدة بيانات الحساب أن جميع بيانات الخدمة تُخزَّن في المكان نفسه. للاستفسار عن معالجة بياناتك أو نقلها تواصل معنا.</p>
                <p><strong>الروابط الخارجية.</strong> قد يحتوي التطبيق على روابط لمنصات خارجية (مثل قنوات البيع أو صفحات تتبع شركات الشحن) تخضع لسياسات الخصوصية الخاصة بها.</p>
                <p><strong>التعديلات.</strong> قد نحدّث هذه السياسة من وقت لآخر، ويظهر تاريخ آخر تحديث في أعلى الصفحة. سنعلن عن أي تغييرات جوهرية داخل التطبيق أو بالبريد قبل سريانها.</p>
                <H>للتواصل</H>
                <p>
                  {claims.legalNameAr} ذ.م.م — س.ت <span dir="ltr">1010856037</span>
                  <br />شارع عثمان بن عفان، حي الوادي، الرياض، المملكة العربية السعودية
                  <br />البريد: {mail}
                  <br />الهاتف: <span dir="ltr" className="font-semibold">+966 920 032 768</span>
                  <br />الموقع: <span dir="ltr">faccess.co</span>
                </p>
              </S>
            </>
          ) : (
            <>
              <S title="1. Introduction">
                <p>This Privacy Policy explains how {claims.legalNameEn}, trading as Fast Access ("Fast Access", "we", "us"), collects, uses, shares, and protects information when you use the Fast Access mobile application, listed as Fast Access Fulfillment (the "App") available on the Apple App Store and Google Play.</p>
                <p>The App is a business tool for merchants who use Fast Access fulfillment, storage, and delivery services. It lets authorized merchant users view and manage orders, inventory, returns, purchase orders, shipments, notifications, and account insights connected to their Fast Access account.</p>
                <p>This Policy explains the App’s data practices. It does not replace the separate confirmation requested for optional features. This Policy applies to the App only; our website (faccess.co) has its own privacy policy.</p>
                <p>Fast Access is a company registered in the Kingdom of Saudi Arabia (CR 1010856037).</p>
              </S>

              <S title="2. Information We Collect">
                <p>We collect only what is needed to run your merchant account and the services you use through the App.</p>
                <H>2.1 Account information</H>
                <UL items={[
                  'Name, email address, and merchant-user account identifier',
                  'Login credentials (passwords for invited merchant accounts are stored using salted hashing, never as plain text)',
                  'Merchant/store name and code, and the Fast Access account you are linked to',
                  'Role and permissions assigned to you within your merchant account',
                ]} />
                <H>2.2 Business and operational data</H>
                <p>This is data about your store's operations that is processed through the App and our warehouse management system:</p>
                <UL items={[
                  'Orders, order status, shipment and tracking details',
                  'Search terms and filters submitted to retrieve operational records',
                  'Inventory, SKUs, products, kits, and stock levels',
                  'Returns, return reasons, purchase orders, suppliers, order amounts, fees, and payment method (such as prepaid or cash on delivery); the App does not collect bank-card numbers',
                  "Your customers' delivery details (recipient name, phone number, address, and order contents) as required to fulfill and deliver orders",
                ]} />
                <p>The App makes customer data available according to user permissions and the merchant services connected to Fast Access. Merchants should enter and share only the data they are authorized to use for these purposes.</p>
                <H>2.3 Device and technical data</H>
                <UL items={[
                  'Device type, operating system version, app version, and language',
                  'Push-notification tokens and installation/update identifiers needed for notifications and app updates',
                  'Notification preferences, read status, delivery results, and account-security events',
                  'Update and startup-failure diagnostics sent by Expo EAS Update when available, including failed-update identifiers and a truncated fatal-error report',
                  'IP address and technical request information received by our servers and hosting providers when your device connects, to operate, secure, and troubleshoot the service',
                ]} />
                <H>2.4 App permissions</H>
                <p>Notification permission is optional and can be changed in your device settings:</p>
                <UL items={['Notifications: to send order, stock, and account alerts']} />
                <p>The App does not request access to your camera, photo library, personal files, microphone, contacts, or precise location, and does not collect health data or biometric templates. It stores its own data and caches within its app storage on your device.</p>
              </S>

              <S title="3. How We Use Information">
                <UL items={[
                  'Create and manage your merchant account and verify your identity when you log in',
                  'Display and process orders, inventory, returns, purchase orders, and shipments',
                  "Fulfill, pack, ship, and deliver your customers' orders and handle returns",
                  'Send operational push notifications according to your preferences, and account-access, invitation, password-recovery, and support emails',
                  'Provide account insights and reports based on your operational data, including an optional AI explanation after the sharing confirmation described below',
                  'Respond to your support requests and communicate about your account',
                  'Monitor, secure, troubleshoot, and improve the App and our services',
                  'Comply with legal, tax, regulatory, and contractual obligations',
                ]} />
                <p>We do not sell your personal data, and we do not use your data or your customers' data for third-party advertising.</p>
              </S>

              <S title="4. Sharing of Information">
                <p>Information needed for the service is processed through the following parties, depending on the feature and the services connected to your account:</p>
                <UL items={[
                  <><strong>Warehouse and order management platform:</strong> the App is powered by our warehouse and order management system (Omniful), which hosts and processes your operational data.</>,
                  <><strong>Delivery partners:</strong> recipient name, phone number, address, and parcel details are shared with the courier assigned to deliver or collect a shipment.</>,
                  <><strong>Sales channels you connect:</strong> order and inventory data is synced with the e-commerce platforms you link to your account (such as Salla, Zid, Shopify, or Noon).</>,
                  <><strong>App hosting and account database:</strong> we use Vercel to run the backend and Neon for the App’s account, session, and preference database. Email services deliver account-access and support messages.</>,
                  <><strong>Notifications and updates:</strong> push tokens and notification content pass through Expo Push Service and then Apple Push Notification service (APNs) on Apple devices or Firebase Cloud Messaging (FCM) on Android. Expo EAS Update automatically sends a randomized installation identifier and technical information such as operating system and update version with update requests. When available, it also sends recent failed-update identifiers and a previous fatal-error report, truncated to at most 1,024 characters, to Expo as part of update loading and recovery. See <a href="https://expo.dev/privacy" className="text-fa-orange-soda font-semibold">Expo’s privacy policy</a>.</>,
                  <><strong>Optional AI explanations:</strong> when you choose Continue in the sharing disclosure for an explanation, we may send product names and SKU codes, together with aggregated sales, stock, and city figures, to OpenRouter and its AI providers, using an OpenAI model. This context excludes recipient names, phone numbers, addresses, and order identifiers. Generated explanations may be stored and reused with merchant analytics, alongside model and usage records. Providers process the request according to their arrangements and policies; see <a href="https://openrouter.ai/privacy/" className="text-fa-orange-soda font-semibold">OpenRouter’s privacy policy</a>. You can cancel and continue using the core features without sending an external explanation request.</>,
                  <><strong>Legal and regulatory:</strong> government authorities, courts, or regulators where required by law, or to protect our rights, safety, or property.</>,
                  <><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, subject to the same protections in this Policy.</>,
                ]} />
                <p>We do not share your data with third parties for their own marketing purposes.</p>
              </S>

              <S id="security" title="5. Data Retention and Security">
                <p><strong>Retention.</strong> Your profile, access assignments, and sessions are used while your App login is active. Confirmed deletion removes the App login and its associated personal records from the App database, as described in Section 6. This action does not delete shared merchant operational records, or by itself erase copies already held in service-provider logs, backups, or connected operational systems. Retention of those records depends on their purpose and applicable obligations. For information about particular records or to request their deletion, contact us using Section 7.</p>
                <p><strong>Security.</strong> App connections to the service use HTTPS/TLS, and invited merchant-account passwords use salted hashing. We use account permissions and revocable, expiring authentication sessions. Login tokens on iOS and Android use the operating system’s secure storage; operational data may be cached within the App’s storage without an additional App-specific encryption layer. Protect your device with a screen lock and do not share it with unauthorized people. No method of transmission or storage is completely secure.</p>
              </S>

              <S id="delete" title="6. Your Rights and Account Deletion">
                <p>Under the Saudi Personal Data Protection Law, you have the right to:</p>
                <UL items={[
                  'Know how we collect and process your personal data',
                  'Access your personal data and obtain a copy of it',
                  'Request correction of inaccurate or incomplete data',
                  'Request deletion of your personal data, subject to legal retention requirements',
                  'Withdraw consent where processing is based on consent',
                  'Lodge a complaint with the Saudi Data & AI Authority (SDAIA)',
                ]} />
                <p>To exercise any of these rights, contact us at the details in Section 7. We may need to verify your identity and will handle the request under the applicable statutory time limits and exceptions.</p>
                <p><strong>Deleting your account.</strong> You can request deletion of your App account at any time by:</p>
                <ol className="list-decimal ps-6 space-y-1.5">
                  <li>In the App, go to More → Account &amp; security → Delete account, enter your current password, and confirm permanent deletion.</li>
                  <li>In a browser, visit <a href="https://dashboard.faccess.co/account-deletion" className="text-fa-orange-soda font-semibold">dashboard.faccess.co/account-deletion</a> and use your App account email and password to confirm deletion.</li>
                  <li>If you cannot access your account, email {mail} from your registered email with the subject "Delete My Account".</li>
                </ol>
                <p>Confirmed deletion removes the App account profile and login, preferences, registered notification devices, and associated invitations and password-reset records, and invalidates its sessions on all devices. Account links are removed from retained App audit records. It does not close the merchant’s business account or delete its orders, inventory, invoices, or fulfillment records. A new invitation is needed to regain access. If a centrally managed administrator login does not offer self-service deletion, contact your organization’s administrator or us.</p>
                <p><strong>Your customers' data.</strong> If you are an end customer of one of our merchants and wish to access or delete your data, please contact the merchant directly; we will support the merchant in fulfilling your request.</p>
              </S>

              <S title="7. Other Information and Contact">
                <p><strong>Children.</strong> The App is a business tool intended for users aged 18 and over. We do not knowingly collect personal data from children. If you believe a child has provided us with data, contact us and we will delete it.</p>
                <p><strong>International transfers.</strong> Some App data is processed outside Saudi Arabia. The App backend is configured to run on Vercel in Frankfurt, Germany, and the App account database uses Neon’s Frankfurt region. Omniful, notification, update, email, and AI services may process data in other countries according to their services and arrangements. The backend and account database location does not describe the location of all service data. Contact us with questions about the processing or transfer of your data.</p>
                <p><strong>Third-party links.</strong> The App may link to third-party platforms (such as sales channels or courier tracking pages). Their privacy practices are governed by their own policies.</p>
                <p><strong>Changes to this Policy.</strong> We may update this Policy from time to time. The "Last updated" date at the top shows the current version. Material changes will be announced in the App or by email before they take effect.</p>
                <H>Contact us</H>
                <p>
                  {claims.legalNameEn} (trading as Fast Access) — CR 1010856037
                  <br />Othman bin Affan St, Al-Wadi District, Riyadh, Saudi Arabia
                  <br />Email: {mail}
                  <br />Phone: <span dir="ltr" className="font-semibold">+966 920 032 768</span>
                  <br />Website: faccess.co
                </p>
              </S>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
