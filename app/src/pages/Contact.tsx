import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

export default function Contact() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const methods = [
    { icon: Mail, label: isAr ? 'البريد' : 'Email', value: 'info@faccess.co' },
    { icon: Phone, label: isAr ? 'الهاتف' : 'Phone', value: '+966 920 032 768', dir: 'ltr' },
    { icon: MapPin, label: isAr ? 'المقر' : 'Head office', value: isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
    { icon: Clock, label: isAr ? 'ساعات العمل' : 'Hours', value: isAr ? 'الأحد إلى الخميس، 9 صباحًا إلى 5 مساءً (دعم 24/7)' : 'Sun–Thu, 9am–5pm (24/7 support)' },
  ];

  const field = 'w-full rounded-xl border border-fa-liberty-blue/12 bg-white/70 px-4 py-3 font-body text-[15px] text-fa-liberty-blue placeholder:text-fa-liberty-blue/35 outline-none transition focus:border-fa-orange-soda/60 focus:ring-2 focus:ring-fa-orange-soda/15';

  return (
    <>
      <Helmet>
        <title>Contact — Fast Access</title>
        <meta name="description" content="Tell us what you ship and we'll come back with a tailored fulfillment plan within one business day. Talk to the Fast Access team." />
      </Helmet>
      <PageHeader
        chip={isAr ? 'تواصل' : 'Contact'}
        title={isAr ? 'لنبدأ تشغيل طلباتك.' : 'Let’s get your orders moving.'}
        sub={isAr ? 'شاركنا تفاصيل شحنك، ونعود إليك بخطة مخصّصة خلال يوم عمل واحد.' : 'Share your shipping profile and we’ll come back with a tailored plan within one business day.'}
        bg="/assets/hero-contact.jpg"
      />

      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10 grid lg:grid-cols-[0.85fr_1.15fr] gap-10 lg:gap-16 items-start">
          {/* Contact methods */}
          <div>
            <Reveal className="mb-6"><SectionChip>{isAr ? 'تواصل مباشر' : 'Reach us'}</SectionChip></Reveal>
            <div className="space-y-3">
              {methods.map((m, i) => (
                <Reveal key={m.label} delay={i * 70}>
                  <div className="flex items-center gap-4 rounded-2xl border border-fa-liberty-blue/10 bg-white/60 p-5">
                    <span className="fa-iconchip shrink-0"><m.icon size={20} strokeWidth={1.8} /></span>
                    <div className="text-left rtl:text-right">
                      <div className="font-ui text-[11px] font-semibold uppercase tracking-[0.1em] text-fa-orange-soda">{m.label}</div>
                      <div className="font-body mt-1 text-[15px] text-fa-liberty-blue" dir={(m as any).dir || undefined} style={(m as any).dir ? { unicodeBidi: 'isolate' } : undefined}>{m.value}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Quote form */}
          <Reveal delay={120}>
            <SpotlightCard className="fa-card fa-card--glow p-7 lg:p-10 text-left rtl:text-right">
              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fa-orange-soda/15 text-fa-orange-soda">
                    <Check size={28} strokeWidth={2.6} />
                  </span>
                  <h3 className="font-display mt-6 text-[24px] font-bold text-fa-liberty-blue tracking-[-0.02em]">
                    {isAr ? 'وصلنا طلبك!' : 'Got it — thank you!'}
                  </h3>
                  <p className="font-body mt-3 text-[15px] text-fa-ink-muted leading-[1.7] max-w-[360px]">
                    {isAr ? 'سيتواصل معك فريقنا خلال يوم عمل واحد بخطة مخصّصة.' : 'Our team will reach out within one business day with a tailored plan.'}
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    if (sending) return;
                    setSending(true);
                    setSendError(false);
                    const f = e.currentTarget as HTMLFormElement;
                    const data = {
                      name: (f.elements.namedItem('name') as HTMLInputElement)?.value,
                      email: (f.elements.namedItem('email') as HTMLInputElement)?.value,
                      store: (f.elements.namedItem('store') as HTMLInputElement)?.value,
                      orders: (f.elements.namedItem('orders') as HTMLInputElement)?.value,
                      message: (f.elements.namedItem('message') as HTMLTextAreaElement)?.value,
                      locale,
                    };
                    try {
                      const res = await fetch('/api/lead', {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data),
                      });
                      const out = await res.json();
                      if (out.ok) setSent(true);
                      else setSendError(true);
                    } catch {
                      setSendError(true);
                    } finally {
                      setSending(false);
                    }
                  }}
                  className="space-y-4"
                >
                  <h3 className="font-display text-[22px] lg:text-[26px] font-bold text-fa-liberty-blue tracking-[-0.02em]">
                    {isAr ? 'اطلب عرض سعر' : 'Request a quote'}
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-4 pt-2">
                    <input required name="name" className={field} placeholder={isAr ? 'الاسم' : 'Full name'} aria-label={isAr ? 'الاسم' : 'Full name'} />
                    <input required name="email" type="email" className={field} placeholder={isAr ? 'البريد الإلكتروني' : 'Email'} aria-label={isAr ? 'البريد الإلكتروني' : 'Email'} />
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input name="store" className={field} placeholder={isAr ? 'اسم المتجر' : 'Store / company'} aria-label={isAr ? 'اسم المتجر' : 'Store / company'} />
                    <input name="orders" className={field} placeholder={isAr ? 'الطلبات شهريًا' : 'Orders / month'} aria-label={isAr ? 'الطلبات شهريًا' : 'Orders / month'} />
                  </div>
                  <textarea name="message" rows={4} className={field} placeholder={isAr ? 'ماذا تشحن؟ أخبرنا بالتفاصيل.' : 'What do you ship? Tell us a bit.'} aria-label={isAr ? 'رسالتك' : 'Message'} />
                  <button type="submit" disabled={sending} className="btn-brand btn-brand--filled w-full justify-center disabled:opacity-60">
                    <span className="btn-brand__label">{sending ? (isAr ? 'جاري الإرسال...' : 'Sending...') : isAr ? 'أرسل الطلب... وخلّها علينا' : 'Send request'}</span>
                  </button>
                  {sendError && (
                    <p className="font-body text-[13px] text-red-600 text-center">
                      {isAr ? 'تعذّر إرسال الطلب. جرّب مرة ثانية أو كلمنا واتساب على 968 032 920.' : 'Could not send your request. Please try again or reach us on WhatsApp.'}
                    </p>
                  )}
                  <p className="font-body text-[12px] text-fa-ink-muted/80 text-center">
                    {isAr ? 'نرد خلال يوم عمل واحد. لا رسائل مزعجة.' : 'We reply within one business day. No spam.'}
                  </p>
                </form>
              )}
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
