import { Link } from 'react-router-dom';
import type { ComponentType } from 'react';
import { WhatsappLogo, EnvelopeSimple, Phone, FileText, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import BrandLogo from '../components/brand/BrandLogo';
import { useT } from '../i18n/I18nContext';

type FooterLink = { label: string; to: string; icon?: ComponentType<any>; accent?: boolean };

export default function Footer() {
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  // Nav structure from PPT slide 20 footer:
  // About · Logistics solutions · Pricing · FAQ · Blog · Contact
  // `to`: "/route" → SPA link · "mailto:"/"http" → external.
  const footerLinks: Record<string, FooterLink[]> = {
    [t('footer.cols.Solutions')]: [
      { label: isAr ? 'التخزين' : 'Storage', to: '/solutions' },
      { label: isAr ? 'التغليف' : 'Packing', to: '/solutions' },
      { label: isAr ? 'الشحن والتوصيل' : 'Shipping & Delivery', to: '/solutions' },
      { label: isAr ? 'المتابعة اللحظية' : 'Real-time Tracking', to: '/solutions' },
      { label: isAr ? 'المخازن السحابية' : 'Cloud Stores', to: '/solutions' },
      { label: isAr ? 'الشحن الدولي والتخليص الجمركي' : 'International freight & customs', to: '/solutions' },
    ],
    [t('footer.cols.Company')]: [
      { label: isAr ? 'من نحن' : 'About us', to: '/about' },
      { label: isAr ? 'المهمة والرؤية' : 'Mission & Vision', to: '/about' },
      { label: isAr ? 'القطاعات التي نخدمها' : 'Industries served', to: '/solutions' },
      { label: isAr ? 'المصادر' : 'Resources', to: '/resources' },
    ],
    [t('footer.cols.Resources')]: [
      { label: isAr ? 'الأسئلة الشائعة' : 'FAQ', to: '/faq' },
      { label: isAr ? 'كيف نسعّر' : 'Pricing', to: '/pricing' },
      { label: isAr ? 'مركز المساعدة' : 'Help center', to: 'https://wa.me/966920032768' },
      { label: isAr ? 'الخصوصية' : 'Privacy', to: '/privacy' },
      { label: isAr ? 'الشروط' : 'Terms', to: '/terms' },
    ],
    [t('footer.cols.Contact')]: [
      { label: isAr ? 'اطلب عرض سعر' : 'Get a quote', to: '/contact', icon: FileText, accent: true },
      { label: isAr ? 'واتساب' : 'WhatsApp', to: 'https://wa.me/966920032768', icon: WhatsappLogo, accent: true },
      { label: isAr ? 'اتصل بنا' : 'Call us', to: 'tel:+966920032768', icon: Phone, accent: true },
      { label: 'info@faccess.co', to: 'mailto:info@faccess.co', icon: EnvelopeSimple, accent: true },
      { label: isAr ? 'إنستقرام' : 'Instagram', to: 'https://www.instagram.com/faccess.co', icon: InstagramLogo, accent: true },
      { label: isAr ? 'لينكدإن' : 'LinkedIn', to: 'https://www.linkedin.com/company/faccess-co', icon: LinkedinLogo, accent: true },
    ],
  };

  // Subtle "slide on hover" feedback on every link so the column feels alive.
  const linkClass =
    'inline-flex items-center gap-1.5 text-sm text-[#8a8a9a] hover:text-[#F4F4F1] transition-all duration-200 rtl:flex-row-reverse hover:translate-x-0.5 rtl:hover:-translate-x-0.5';
  const accentClass =
    'inline-flex items-center gap-2 text-sm text-fa-orange-soda hover:brightness-125 transition-all duration-200';
  const renderLink = ({ label, to, icon: Icon, accent }: FooterLink) => {
    if (accent) {
      const inner = (
        <>
          {Icon && <Icon size={16} weight="bold" aria-hidden />}
          <span>{label}</span>
        </>
      );
      const external = to.startsWith('http');
      return to.startsWith('/')
        ? <Link to={to} className={accentClass}>{inner}</Link>
        : <a href={to} className={accentClass} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>{inner}</a>;
    }
    return to.startsWith('/') ? (
      <Link to={to} className={linkClass}>
        <span className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/li:opacity-60 group-hover/li:translate-x-0 rtl:translate-x-1 rtl:group-hover/li:-translate-x-0 text-fa-orange-soda">›</span>
        {Icon && <Icon size={16} aria-hidden />}
        <span>{label}</span>
      </Link>
    ) : (
      <a href={to} className={linkClass}>
        <span className="opacity-0 -translate-x-1 transition-all duration-200 group-hover/li:opacity-60 group-hover/li:translate-x-0 rtl:translate-x-1 rtl:group-hover/li:-translate-x-0 text-fa-orange-soda">›</span>
        {Icon && <Icon size={16} aria-hidden />}
        <span>{label}</span>
      </a>
    );
  };

  return (
    <footer className="bg-fa-liberty-blue pt-24 pb-10 relative overflow-hidden">
      {/* No ribbon here — the CTA above is the pattern moment.
          Footer stays quiet: just the giant FAST ACCESS watermark + links. */}
      {/* Background watermark */}
      <div
        className="absolute bottom-0 right-0 font-display font-bold pointer-events-none select-none leading-none tracking-[-0.04em]"
        style={{
          fontSize: 'clamp(140px, 18vw, 260px)',
          color: 'rgba(244,244,241,0.04)',
          transform: 'translate(4%, 22%)',
        }}
      >
        FAST&nbsp;ACCESS
      </div>

      <div className="container-main relative z-10">
        {/* Top section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {/* Logo & Description */}
          <div className="col-span-2 rtl:order-last rtl:text-right">
            <div dir="ltr" className="text-left">
              <BrandLogo variant="full" mode="dark" height={56} />
            </div>
            {/* Tagline sits flush with the logo's left edge — the old pulsing
                dot indented it and read as a misalignment. */}
            <div className="font-display mt-5 text-base text-fa-classic-chalk font-semibold tracking-[-0.01em]">
              {t('footer.tagline')}
            </div>
            <p className="font-body mt-3 text-sm text-fa-classic-chalk/55 leading-[1.65] max-w-[320px]">
              {t('footer.body')}
            </p>
            <p className="mt-4 font-ui text-[12px] font-semibold text-[#8a8a9a]">
              {isAr ? '📱 تطبيق فاست أكسس للتجار — قريبًا على App Store و Google Play' : '📱 Fast Access merchant app — soon on the App Store & Google Play'}
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([header, links]) => (
            <div key={header}>
              <div className="text-xs font-semibold text-[#F4F4F1] uppercase tracking-[0.08em] mb-4">
                {header}
              </div>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label} className="group/li">{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-[rgba(244,244,241,0.1)]" />

        {/* Legal entity + registered address */}
        <div className="mb-4 text-center sm:text-start font-body text-[12.5px] leading-[1.8] text-[#8a8a9a]">
          {isAr
            ? 'شركة مدخل السرعة للخدمات اللوجستية — الرياض، حي الوادي، شارع عثمان بن عفان'
            : 'Madkhal Alsura Company for Logistics — Othman bin Affan St., Al Wadi District, Riyadh'}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[13px] text-[#8a8a9a]" dir="ltr" style={{ unicodeBidi: 'isolate' }}>
            {t('footer.copyright')}
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: isAr ? 'الخصوصية' : 'Privacy', to: '/privacy' },
              { label: isAr ? 'الشروط' : 'Terms', to: '/terms' },
              { label: isAr ? 'الأمان' : 'Security', to: '/privacy#security' },
              { label: isAr ? 'ملفات الارتباط' : 'Cookies', to: '/privacy#cookies' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-[13px] text-[#8a8a9a] hover:text-[#F4F4F1] transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
