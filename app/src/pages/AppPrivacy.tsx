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
    { title: 'سياسة خصوصية التطبيق | فاست أكسس', desc: 'كيف يجمع تطبيق فاست أكسس بيانات التجار ويستخدمها ويحميها وفق نظام حماية البيانات الشخصية السعودي.' },
    { title: 'App Privacy Policy | Fast Access', desc: 'How the Fast Access mobile app collects, uses, shares, and protects merchant data under the Saudi Personal Data Protection Law.' }
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
                  توضح هذه السياسة كيف تقوم {claims.legalNameAr} ذ.م.م («فاست أكسس»، «نحن») بجمع المعلومات واستخدامها ومشاركتها وحمايتها عند استخدامك لتطبيق فاست أكسس («التطبيق») المتاح على <span dir="ltr">App Store</span> و<span dir="ltr">Google Play</span>.
                </p>
                <p>
                  التطبيق أداة أعمال مخصصة للمتاجر التي تستخدم خدمات فاست أكسس في التجهيز والتخزين والتوصيل، ويتيح للمستخدمين المصرح لهم إدارة الطلبات والمخزون والمرتجعات وأوامر الشراء والشحنات والتنبيهات وتقارير الحساب.
                </p>
                <p>
                  باستخدامك للتطبيق فإنك توافق على ما ورد في هذه السياسة. فاست أكسس شركة مسجلة في المملكة العربية السعودية (س.ت <span dir="ltr">1010856037</span>) وتعالج البيانات الشخصية وفقًا لنظام حماية البيانات الشخصية ولائحته التنفيذية. تنطبق هذه السياسة على التطبيق فقط، ولموقع faccess.co سياسة خصوصية مستقلة.
                </p>
              </S>

              <S title="٢. المعلومات التي نجمعها">
                <p>نجمع فقط ما يلزم لتشغيل حساب متجرك والخدمات التي تستخدمها عبر التطبيق.</p>
                <H>٢.١ بيانات الحساب</H>
                <UL items={[
                  'الاسم والبريد الإلكتروني ورقم الجوال لمستخدم المتجر',
                  'بيانات الدخول (كلمات المرور تُحفظ مشفّرة ولا تُخزَّن كنص صريح)',
                  'اسم المتجر وبيانات السجل التجاري وحساب فاست أكسس المرتبط',
                  'الدور والصلاحيات المسندة لك داخل حساب المتجر',
                ]} />
                <H>٢.٢ البيانات التشغيلية</H>
                <p>بيانات عمليات متجرك التي تُعالج عبر التطبيق ونظام إدارة المستودعات لدينا:</p>
                <UL items={[
                  'الطلبات وحالاتها، الشحنات وتفاصيل التتبع',
                  'المخزون والمنتجات والأطقم ومستويات المخزون',
                  'المرتجعات وأسبابها وأوامر الشراء',
                  'بيانات توصيل عملائك (اسم المستلم، رقم الجوال، العنوان، محتوى الطلب) بالقدر اللازم لتجهيز الطلبات وتوصيلها',
                ]} />
                <p>أنت، بصفتك التاجر، المتحكم في بيانات عملائك، ونحن نعالجها نيابةً عنك كمعالج بيانات ولأغراض التجهيز والتوصيل فقط.</p>
                <H>٢.٣ البيانات التقنية</H>
                <UL items={[
                  'نوع الجهاز ونظام التشغيل وإصدار التطبيق واللغة',
                  'معرّفات الجهاز ورموز الإشعارات',
                  'عنوان IP وأوقات الدخول، تُحفظ في سجلات خوادمنا لأغراض الأمان وحل المشكلات',
                ]} />
                <H>٢.٤ صلاحيات التطبيق</H>
                <p>يطلب التطبيق صلاحية واحدة فقط، وهي اختيارية ويمكن تغييرها من إعدادات جهازك:</p>
                <UL items={['الإشعارات: لإرسال تنبيهات الطلبات والمخزون والحساب']} />
                <p>لا نصل إلى الكاميرا أو الصور أو الملفات أو الميكروفون أو جهات الاتصال أو الموقع الدقيق، ولا نجمع بيانات صحية أو حيوية.</p>
              </S>

              <S title="٣. كيف نستخدم المعلومات">
                <UL items={[
                  'إنشاء حساب متجرك وإدارته والتحقق من هويتك عند تسجيل الدخول',
                  'عرض ومعالجة الطلبات والمخزون والمرتجعات وأوامر الشراء والشحنات',
                  'تجهيز طلبات عملائك وتغليفها وشحنها وتوصيلها ومعالجة المرتجعات',
                  'إرسال التنبيهات التشغيلية (حالة الطلب، انخفاض المخزون، الموافقات، تحديثات التوصيل) عبر الإشعارات أو واتساب أو الرسائل النصية أو البريد حسب إعداداتك',
                  'تقديم تحليلات وتقارير الحساب بناءً على بياناتك التشغيلية',
                  'الرد على طلبات الدعم والتواصل بشأن حسابك',
                  'مراقبة التطبيق وتأمينه وإصلاح أعطاله وتحسينه',
                  'الالتزام بالمتطلبات النظامية والضريبية والتعاقدية',
                ]} />
                <p>لا نبيع بياناتك الشخصية، ولا نستخدم بياناتك أو بيانات عملائك للإعلانات من أطراف ثالثة.</p>
              </S>

              <S title="٤. مشاركة المعلومات">
                <p>نشارك المعلومات فقط عند الحاجة لتقديم الخدمة، ومع أطراف ملتزمة بالسرية وحماية البيانات:</p>
                <UL items={[
                  <><strong>منصة إدارة المستودعات والطلبات:</strong> يعمل التطبيق عبر نظام إدارة المستودعات والطلبات لدينا (Omniful) الذي يستضيف بياناتك التشغيلية ويعالجها.</>,
                  <><strong>شركات التوصيل:</strong> اسم المستلم ورقمه وعنوانه وتفاصيل الطرد تُشارك مع شركة النقل المكلفة بالتوصيل أو الاستلام.</>,
                  <><strong>قنوات البيع المرتبطة:</strong> تُزامن بيانات الطلبات والمخزون مع منصات التجارة الإلكترونية التي تربطها بحسابك (مثل سلة، زد، شوبيفاي، نون).</>,
                  <><strong>مزودو الخدمات:</strong> الاستضافة السحابية، الرسائل (واتساب/SMS/بريد)، و<span dir="ltr">Google Firebase</span> الذي نستخدمه للإشعارات (<span dir="ltr">Firebase Cloud Messaging</span>)، ويعالج معرّفات الجهاز ورموز الإشعارات وفق سياسة خصوصية Google.</>,
                  <><strong>الجهات النظامية:</strong> الجهات الحكومية أو المحاكم أو الجهات الرقابية عند طلبها بموجب النظام، أو لحماية حقوقنا أو سلامتنا أو ممتلكاتنا.</>,
                  <><strong>نقل الأعمال:</strong> في حال الاندماج أو الاستحواذ أو بيع الأصول، مع الالتزام بنفس الحماية الواردة في هذه السياسة.</>,
                ]} />
                <p>لا نشارك بياناتك مع أطراف ثالثة لأغراضها التسويقية.</p>
              </S>

              <S id="security" title="٥. الاحتفاظ بالبيانات وحمايتها">
                <p>
                  <strong>الاحتفاظ.</strong> نحتفظ ببيانات الحساب طوال فترة نشاط حسابك. تُحفظ السجلات التشغيلية (الطلبات، الشحنات، المرتجعات، الفواتير) للمدة التي تفرضها الأنظمة التجارية والضريبية والمحاسبية في المملكة (حتى ١٠ سنوات عادةً) ثم تُحذف أو تُجهّل. تُحفظ سجلات الوصول للخوادم لمدة لا تتجاوز ١٢ شهرًا. عند حذف حسابك، تُحذف البيانات الشخصية غير الخاضعة لمتطلبات احتفاظ نظامية خلال ٣٠ يومًا.
                </p>
                <p>
                  <strong>الحماية.</strong> نحمي بياناتك بالتشفير أثناء النقل (<span dir="ltr">TLS</span>) والتخزين المشفّر والتحكم في الصلاحيات حسب الدور ورموز مصادقة تنتهي وتتجدد تلقائيًا وتسجيل الوصول إلى الأنظمة التي تحتفظ ببيانات شخصية. يقتصر الوصول على الموظفين والمتعاقدين الذين يحتاجونه لأداء عملهم. لا توجد وسيلة نقل أو تخزين آمنة بنسبة ١٠٠٪، وفي حال وقوع اختراق يمس بياناتك سنبلغك والجهة المختصة وفق ما يقتضيه النظام.
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
                  'الاعتراض على المعالجة في حالات معينة',
                  'تقديم شكوى إلى الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
                ]} />
                <p>لممارسة أي من هذه الحقوق تواصل معنا عبر بيانات التواصل في القسم ٧، ونرد خلال ٣٠ يومًا.</p>
                <p><strong>حذف حسابك.</strong> تقدر تطلب حذف حسابك في التطبيق في أي وقت عبر:</p>
                <ol className="list-decimal ps-6 space-y-1.5">
                  <li>الإعدادات ← الحساب ← حذف الحساب داخل التطبيق، أو</li>
                  <li>إرسال بريد إلى {mail} من بريدك المسجل بعنوان «حذف حسابي»</li>
                </ol>
                <p>يؤدي الحذف إلى إزالة بيانات الدخول وملفك الشخصي. السجلات التجارية المطلوب الاحتفاظ بها نظامًا (مثل الطلبات والفواتير) تُحفظ للمدة المحددة ثم تُحذف.</p>
                <p><strong>بيانات عملائك.</strong> إذا كنت عميلًا نهائيًا لأحد المتاجر وترغب في الوصول إلى بياناتك أو حذفها، فتواصل مع المتجر مباشرة، وسندعم المتجر في تنفيذ طلبك.</p>
              </S>

              <S title="٧. معلومات أخرى والتواصل">
                <p><strong>الأطفال.</strong> التطبيق مخصص للأعمال وللمستخدمين من عمر ١٨ عامًا فأكثر. لا نجمع بيانات الأطفال عن علم، وإذا اعتقدت أن طفلًا زوّدنا ببيانات فتواصل معنا لحذفها.</p>
                <p><strong>النقل خارج المملكة.</strong> تُخزَّن بياناتك بشكل أساسي داخل المملكة العربية السعودية. قد يعالج بعض مزودي الخدمات (مثل الاستضافة السحابية أو الإشعارات) بيانات خارج المملكة، وأي نقل يتم وفق ضوابط نظام حماية البيانات الشخصية وبضمانات تحافظ على نفس مستوى الحماية الوارد في هذه السياسة.</p>
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
                <p>This Privacy Policy explains how {claims.legalNameEn}, trading as Fast Access ("Fast Access", "we", "us"), collects, uses, shares, and protects information when you use the Fast Access mobile application (the "App") available on the Apple App Store and Google Play.</p>
                <p>The App is a business tool for merchants who use Fast Access fulfillment, storage, and delivery services. It lets authorized merchant users view and manage orders, inventory, returns, purchase orders, shipments, notifications, and account insights connected to their Fast Access account.</p>
                <p>By using the App, you agree to the practices described in this Policy. If you do not agree, please do not use the App. This Policy applies to the App only; our website (faccess.co) has its own privacy policy.</p>
                <p>Fast Access is a company registered in the Kingdom of Saudi Arabia (CR 1010856037) and processes personal data in accordance with the Saudi Personal Data Protection Law (PDPL) and its Implementing Regulations.</p>
              </S>

              <S title="2. Information We Collect">
                <p>We collect only what is needed to run your merchant account and the services you use through the App.</p>
                <H>2.1 Account information</H>
                <UL items={[
                  'Name, email address, and mobile number of the merchant user',
                  'Login credentials (passwords are stored in hashed form and never in plain text)',
                  'Merchant/store name, commercial registration details, and the Fast Access account you are linked to',
                  'Role and permissions assigned to you within your merchant account',
                ]} />
                <H>2.2 Business and operational data</H>
                <p>This is data about your store's operations that is processed through the App and our warehouse management system:</p>
                <UL items={[
                  'Orders, order status, shipment and tracking details',
                  'Inventory, SKUs, products, kits, and stock levels',
                  'Returns, return reasons, and purchase orders',
                  "Your customers' delivery details (recipient name, phone number, address, and order contents) as required to fulfill and deliver orders",
                ]} />
                <p>You, the merchant, are the data controller for your customers' data. Fast Access processes it on your behalf as a data processor and only for fulfillment and delivery purposes.</p>
                <H>2.3 Device and technical data</H>
                <UL items={[
                  'Device type, operating system version, app version, and language',
                  'Device identifiers and push-notification tokens',
                  'IP address and access times, kept in our server logs for security and troubleshooting',
                ]} />
                <H>2.4 App permissions</H>
                <p>The App requests only the following permission. It is optional and can be changed in your device settings:</p>
                <UL items={['Notifications: to send order, stock, and account alerts']} />
                <p>We do not access your camera, photos, files, microphone, contacts, or precise location, and we do not collect health or biometric data.</p>
              </S>

              <S title="3. How We Use Information">
                <UL items={[
                  'Create and manage your merchant account and verify your identity when you log in',
                  'Display and process orders, inventory, returns, purchase orders, and shipments',
                  "Fulfill, pack, ship, and deliver your customers' orders and handle returns",
                  'Send operational notifications (order status, low stock, approvals, delivery updates) through push notifications, WhatsApp, SMS, or email, according to your notification settings',
                  'Provide account insights and reports based on your operational data',
                  'Respond to your support requests and communicate about your account',
                  'Monitor, secure, troubleshoot, and improve the App and our services',
                  'Comply with legal, tax, regulatory, and contractual obligations',
                ]} />
                <p>We do not sell your personal data, and we do not use your data or your customers' data for third-party advertising.</p>
              </S>

              <S title="4. Sharing of Information">
                <p>We share information only where necessary to provide the service, and only with parties bound by confidentiality and data-protection obligations:</p>
                <UL items={[
                  <><strong>Warehouse and order management platform:</strong> the App is powered by our warehouse and order management system (Omniful), which hosts and processes your operational data.</>,
                  <><strong>Delivery partners:</strong> recipient name, phone number, address, and parcel details are shared with the courier assigned to deliver or collect a shipment.</>,
                  <><strong>Sales channels you connect:</strong> order and inventory data is synced with the e-commerce platforms you link to your account (such as Salla, Zid, Shopify, or Noon).</>,
                  <><strong>Service providers:</strong> cloud hosting, messaging (WhatsApp/SMS/email), and Google Firebase, which we use for push notifications (Firebase Cloud Messaging). Firebase processes device identifiers and push tokens under Google's privacy policy.</>,
                  <><strong>Legal and regulatory:</strong> government authorities, courts, or regulators where required by law, or to protect our rights, safety, or property.</>,
                  <><strong>Business transfers:</strong> in the event of a merger, acquisition, or sale of assets, subject to the same protections in this Policy.</>,
                ]} />
                <p>We do not share your data with third parties for their own marketing purposes.</p>
              </S>

              <S id="security" title="5. Data Retention and Security">
                <p><strong>Retention.</strong> We keep account data for as long as your merchant account is active. Operational records (orders, shipments, returns, invoices) are retained for the period required by Saudi commercial, tax, and accounting regulations, typically up to 10 years, after which they are deleted or anonymized. Server access logs are kept for no longer than 12 months. When you delete your account, personal data not subject to a legal retention requirement is deleted within 30 days.</p>
                <p><strong>Security.</strong> We protect your data with encryption in transit (TLS), encrypted storage, role-based access controls, authentication tokens that expire and rotate, and logging of access to systems that hold personal data. Access is limited to employees and contractors who need it to perform their work. No method of transmission or storage is completely secure; if we become aware of a breach affecting your data, we will notify you and the competent authority as required by law.</p>
              </S>

              <S id="delete" title="6. Your Rights and Account Deletion">
                <p>Under the Saudi Personal Data Protection Law, you have the right to:</p>
                <UL items={[
                  'Know how we collect and process your personal data',
                  'Access your personal data and obtain a copy of it',
                  'Request correction of inaccurate or incomplete data',
                  'Request deletion of your personal data, subject to legal retention requirements',
                  'Withdraw consent where processing is based on consent',
                  'Object to processing in certain circumstances',
                  'Lodge a complaint with the Saudi Data & AI Authority (SDAIA)',
                ]} />
                <p>To exercise any of these rights, contact us at the details in Section 7. We will respond within 30 days.</p>
                <p><strong>Deleting your account.</strong> You can request deletion of your App account at any time by:</p>
                <ol className="list-decimal ps-6 space-y-1.5">
                  <li>Going to Settings → Account → Delete Account inside the App, or</li>
                  <li>Emailing {mail} from your registered email with the subject "Delete My Account"</li>
                </ol>
                <p>Deletion removes your login and personal profile. Business records that we are legally required to keep (such as orders and invoices) are retained for the statutory period and then deleted.</p>
                <p><strong>Your customers' data.</strong> If you are an end customer of one of our merchants and wish to access or delete your data, please contact the merchant directly; we will support the merchant in fulfilling your request.</p>
              </S>

              <S title="7. Other Information and Contact">
                <p><strong>Children.</strong> The App is a business tool intended for users aged 18 and over. We do not knowingly collect personal data from children. If you believe a child has provided us with data, contact us and we will delete it.</p>
                <p><strong>International transfers.</strong> Your data is primarily stored in the Kingdom of Saudi Arabia. Some service providers (for example cloud hosting or notification providers) may process data outside Saudi Arabia. Any such transfer is made in accordance with the PDPL and with safeguards that protect your data to the same standard described in this Policy.</p>
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
