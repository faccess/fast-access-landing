import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/**
 * سياسة الخصوصية — includes #security and #cookies anchor sections
 * (footer's الأمان / ملفات الارتباط links point here).
 * Draft for legal review.
 */
export default function Privacy() {
  usePageMeta(
    { title: 'سياسة الخصوصية | فاست أكسس', desc: 'كيف نجمع بياناتك ونستخدمها ونحميها وفق نظام حماية البيانات الشخصية السعودي — بلغة واضحة.' },
    { title: 'Privacy Policy | Fast Access', desc: 'How we collect, use and protect your data under the Saudi Personal Data Protection Law.' }
  );
  const { locale } = useT();
  const isAr = locale === 'ar';

  const S = ({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) => (
    <section id={id} className="mb-10 scroll-mt-28">
      <h2 className="font-display text-[20px] lg:text-[24px] font-bold text-fa-liberty-blue mb-3">{title}</h2>
      <div className="font-body text-[15px] leading-[1.8] text-fa-ink-muted space-y-3">{children}</div>
    </section>
  );

  return (
    <main>
      <PageHeader
        chip={isAr ? 'الخصوصية' : 'Privacy'}
        title={isAr ? (<>بياناتك... <span className="text-fa-orange-soda">أمانة عندنا.</span></>) : 'Your data, in safe hands.'}
        sub={isAr ? 'كيف نجمع بياناتك ونستخدمها ونحميها — بلغة واضحة بدون تعقيد.' : 'How we collect, use, and protect your data — in clear language.'}
        bg="/assets/hero-resources.webp"
      />
      <section className="py-16 lg:py-24 bg-fa-classic-chalk">
        <div className="container-main max-w-[820px]">
          <p className="font-body text-[13px] text-fa-ink-muted/70 mb-10">
            {isAr ? 'آخر تحديث: يوليو 2026' : 'Last updated: July 2026'}
          </p>

          {isAr ? (
            <>
              <S title="مقدمة">
                <p>
                  هذه السياسة توضح كيف تتعامل شركة فاست أكسس للخدمات اللوجستية («فاست أكسس»، «نحن») مع البيانات الشخصية التي نجمعها عبر موقع faccess.co وخدماتنا، وذلك التزامًا بنظام حماية البيانات الشخصية في المملكة العربية السعودية.
                </p>
              </S>
              <S title="البيانات التي نجمعها">
                <p>نجمع البيانات التي تزودنا بها مباشرة عند طلب عرض سعر أو التواصل معنا، وتشمل: الاسم، رقم الجوال، البريد الإلكتروني، اسم العلامة التجارية أو الشركة، رابط المتجر، وحجم الطلبات الشهرية، وأي تفاصيل إضافية تشاركها معنا.</p>
                <p>كما نجمع تلقائيًا بيانات تقنية محدودة عند تصفح الموقع مثل نوع المتصفح والجهاز وصفحات الزيارة، لأغراض تشغيل الموقع وتحسينه.</p>
              </S>
              <S title="كيف نستخدم بياناتك">
                <p>نستخدم بياناتك لإعداد عروض الأسعار والتواصل معك بشأنها، وتقديم خدماتنا وإدارة علاقتنا التجارية، وتحسين الموقع والخدمة، والالتزام بالمتطلبات النظامية. لا نبيع بياناتك لأي طرف ثالث ولا نستخدمها لأغراض إعلانية خارجية.</p>
              </S>
              <S title="مشاركة البيانات">
                <p>تُحفظ بيانات طلبات عروض الأسعار في أنظمتنا الداخلية لإدارة علاقات العملاء. وقد نشارك الحد الأدنى الضروري من البيانات مع مزودي خدمات موثوقين يعملون لصالحنا (مثل الاستضافة والبنية التقنية) وشركاء الشحن لتنفيذ الخدمة، مع إلزامهم بحماية البيانات. وقد نفصح عن البيانات إذا طلبت الجهات المختصة ذلك نظامًا.</p>
              </S>
              <S id="security" title="أمان البيانات">
                <p>نطبق إجراءات تقنية وتنظيمية مناسبة لحماية بياناتك، تشمل تشفير الاتصال بالموقع (HTTPS)، وتقييد الوصول للبيانات على الموظفين المصرح لهم فقط، وحفظ البيانات في أنظمة محمية بمصادقة آمنة. ومع ذلك، لا توجد وسيلة نقل أو تخزين إلكتروني آمنة بنسبة 100%، ونعمل باستمرار على تطوير إجراءاتنا.</p>
              </S>
              <S id="cookies" title="ملفات الارتباط (الكوكيز)">
                <p>يستخدم موقعنا ملفات ارتباط تشغيلية أساسية فقط، مثل حفظ تفضيل اللغة (العربية/الإنجليزية). لا نستخدم ملفات ارتباط إعلانية أو تتبع لأطراف ثالثة. تقدر تعطيل ملفات الارتباط من إعدادات متصفحك، مع العلم أن بعض وظائف الموقع قد تتأثر.</p>
              </S>
              <S title="حقوقك">
                <p>يحق لك طلب الاطلاع على بياناتك الشخصية لدينا، أو تصحيحها، أو حذفها، أو الاعتراض على معالجتها، وذلك بالتواصل معنا عبر info@faccess.co وسنستجيب لطلبك خلال مدة معقولة وفق الأنظمة المعمول بها.</p>
              </S>
              <S title="التواصل">
                <p>
                  لأي استفسار حول هذه السياسة: البريد الإلكتروني <a href="mailto:info@faccess.co" className="text-fa-orange-soda font-semibold" dir="ltr">info@faccess.co</a> أو الهاتف الموحد <span dir="ltr" className="font-semibold">+966 920 032 768</span>.
                </p>
              </S>
            </>
          ) : (
            <>
              <S title="Introduction">
                <p>This policy explains how Fast Access Fulfillment Services ("Fast Access", "we") handles personal data collected through faccess.co and our services, in line with the Saudi Personal Data Protection Law.</p>
              </S>
              <S title="Data we collect">
                <p>We collect data you provide directly when requesting a quote or contacting us: name, phone, email, brand/company name, store URL, monthly order volume, and any details you share. We also automatically collect limited technical data (browser, device, pages visited) to operate and improve the site.</p>
              </S>
              <S title="How we use it">
                <p>To prepare quotes and communicate with you, deliver our services and manage our business relationship, improve the site, and meet legal requirements. We never sell your data or use it for third-party advertising.</p>
              </S>
              <S title="Sharing">
                <p>Quote data is stored in our internal CRM. We may share the minimum necessary with trusted providers working on our behalf (hosting, infrastructure) and shipping partners to deliver the service, all bound to protect it. We may disclose data when lawfully required by authorities.</p>
              </S>
              <S id="security" title="Security">
                <p>We apply appropriate technical and organizational measures: HTTPS encryption, access restricted to authorized staff, and data held in systems protected by secure authentication. No electronic transmission or storage is 100% secure, and we continuously improve our measures.</p>
              </S>
              <S id="cookies" title="Cookies">
                <p>Our site uses essential operational cookies only, such as remembering your language preference. We use no advertising or third-party tracking cookies. You can disable cookies in your browser settings; some site functions may be affected.</p>
              </S>
              <S title="Your rights">
                <p>You may request access to, correction of, or deletion of your personal data, or object to its processing, by contacting info@faccess.co. We will respond within a reasonable period per applicable regulations.</p>
              </S>
              <S title="Contact">
                <p>For any question about this policy: <a href="mailto:info@faccess.co" className="text-fa-orange-soda font-semibold">info@faccess.co</a> or <span dir="ltr" className="font-semibold">+966 920 032 768</span>.</p>
              </S>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
