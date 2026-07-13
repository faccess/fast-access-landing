import PageHeader from '../components/PageHeader';
import usePageMeta from '../hooks/usePageMeta';
import { useT } from '../i18n/I18nContext';

/** شروط الاستخدام — draft for legal review. */
export default function Terms() {
  usePageMeta(
    { title: 'شروط الاستخدام | فاست أكسس', desc: 'القواعد التي تحكم استخدام موقع فاست أكسس وخدماته.' },
    { title: 'Terms of Use | Fast Access', desc: 'The rules governing use of the Fast Access website and services.' }
  );
  const { locale } = useT();
  const isAr = locale === 'ar';

  const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
    <section className="mb-10">
      <h2 className="font-display text-[20px] lg:text-[24px] font-bold text-fa-liberty-blue mb-3">{title}</h2>
      <div className="font-body text-[15px] leading-[1.8] text-fa-ink-muted space-y-3">{children}</div>
    </section>
  );

  return (
    <main>
      <PageHeader
        chip={isAr ? 'الشروط' : 'Terms'}
        title={isAr ? (<>شروط <span className="text-fa-orange-soda">الاستخدام.</span></>) : 'Terms of use.'}
        sub={isAr ? 'القواعد اللي تحكم استخدامك لموقع فاست أكسس وخدماته.' : 'The rules governing your use of the Fast Access website and services.'}
        bg="/assets/hero-resources.webp"
      />
      <section className="py-16 lg:py-24 bg-fa-classic-chalk">
        <div className="container-main max-w-[820px]">
          <p className="font-body text-[13px] text-fa-ink-muted/70 mb-10">
            {isAr ? 'آخر تحديث: يوليو 2026' : 'Last updated: July 2026'}
          </p>

          {isAr ? (
            <>
              <S title="القبول بالشروط">
                <p>باستخدامك موقع faccess.co أو أي من خدماته، فأنت توافق على هذه الشروط. إذا كنت لا توافق عليها، نرجو عدم استخدام الموقع.</p>
              </S>
              <S title="عن الخدمة">
                <p>فاست أكسس شركة خدمات لوجستية سعودية (سجل تجاري رقم 7032873049) تقدم خدمات التخزين وتجهيز الطلبات والشحن والتوصيل وإدارة المرتجعات للمتاجر الإلكترونية. المعلومات المعروضة بالموقع — بما فيها نتائج حاسبة التوفير — تقديرية ولأغراض توضيحية، والالتزامات الفعلية تُحدد في عرض السعر والاتفاقية الموقعة بين الطرفين.</p>
              </S>
              <S title="طلبات عروض الأسعار">
                <p>تقديم طلب عرض سعر لا يُنشئ التزامًا تعاقديًا على أي من الطرفين. تلتزم بتقديم معلومات صحيحة ودقيقة، ويحق لنا التواصل معك عبر البيانات المقدمة لغرض إعداد العرض ومتابعته.</p>
              </S>
              <S title="الملكية الفكرية">
                <p>جميع محتويات الموقع من نصوص وتصاميم وشعارات وصور وعلامات تجارية مملوكة لفاست أكسس أو مرخصة لها، ولا يجوز نسخها أو استخدامها دون إذن كتابي مسبق.</p>
              </S>
              <S title="الاستخدام المقبول">
                <p>تلتزم بعدم إساءة استخدام الموقع، ويشمل ذلك: محاولة الوصول غير المصرح به لأنظمتنا، أو إرسال بيانات كاذبة أو مضللة، أو استخدام الموقع بأي شكل يخالف الأنظمة المعمول بها في المملكة العربية السعودية.</p>
              </S>
              <S title="حدود المسؤولية">
                <p>نبذل جهدنا لضمان دقة محتوى الموقع واستمرارية توفره، لكننا لا نضمن خلوه من الأخطاء أو الانقطاعات. لا تتحمل فاست أكسس مسؤولية أي أضرار غير مباشرة تنشأ عن استخدام الموقع. مسؤولياتنا التشغيلية تجاه عملائنا المتعاقدين تحددها اتفاقية الخدمة الموقعة.</p>
              </S>
              <S title="التعديلات">
                <p>يحق لنا تعديل هذه الشروط في أي وقت، وتسري التعديلات من تاريخ نشرها بالموقع. استمرارك باستخدام الموقع بعد التعديل يعني موافقتك عليه.</p>
              </S>
              <S title="القانون الواجب التطبيق">
                <p>تخضع هذه الشروط لأنظمة المملكة العربية السعودية، وتختص جهاتها القضائية بأي نزاع ينشأ عنها.</p>
              </S>
              <S title="التواصل">
                <p>لأي استفسار: <a href="mailto:info@faccess.co" className="text-fa-orange-soda font-semibold" dir="ltr">info@faccess.co</a> أو <span dir="ltr" className="font-semibold">+966 920 032 768</span>.</p>
              </S>
            </>
          ) : (
            <>
              <S title="Acceptance">
                <p>By using faccess.co or any of its services you agree to these terms. If you do not agree, please do not use the site.</p>
              </S>
              <S title="About the service">
                <p>Fast Access is a Saudi logistics company (CR 7032873049) providing storage, fulfillment, shipping, delivery, and returns management for e-commerce stores. Information on this site — including savings calculator results — is indicative; actual obligations are defined in the quote and signed agreement between the parties.</p>
              </S>
              <S title="Quote requests">
                <p>Submitting a quote request creates no contractual obligation on either party. You agree to provide accurate information, and we may contact you using the details provided to prepare and follow up on the quote.</p>
              </S>
              <S title="Intellectual property">
                <p>All site content — text, designs, logos, images, and trademarks — is owned by or licensed to Fast Access and may not be copied or used without prior written permission.</p>
              </S>
              <S title="Acceptable use">
                <p>You agree not to misuse the site, including attempting unauthorized access to our systems, submitting false or misleading data, or using the site in violation of applicable Saudi regulations.</p>
              </S>
              <S title="Limitation of liability">
                <p>We strive for accuracy and availability but do not guarantee the site is error-free or uninterrupted. Fast Access is not liable for indirect damages arising from site use. Our operational responsibilities to contracted clients are defined in the signed service agreement.</p>
              </S>
              <S title="Changes">
                <p>We may amend these terms at any time; amendments take effect upon publication. Continued use after changes constitutes acceptance.</p>
              </S>
              <S title="Governing law">
                <p>These terms are governed by the laws of the Kingdom of Saudi Arabia, and its courts have jurisdiction over any dispute.</p>
              </S>
              <S title="Contact">
                <p><a href="mailto:info@faccess.co" className="text-fa-orange-soda font-semibold">info@faccess.co</a> or <span dir="ltr" className="font-semibold">+966 920 032 768</span>.</p>
              </S>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
