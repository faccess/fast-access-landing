import { useState } from 'react';
import { Check } from 'lucide-react';
import { useT } from '../i18n/I18nContext';

/**
 * QuoteForm — the single source of truth for the "request a quote" form.
 * Used on both the Contact page (light card) and the homepage CTA (dark card).
 * Submits to /api/lead, which creates an Opportunity in Odoo CRM with
 * Expected Volume mapped from the orders bracket.
 */
export default function QuoteForm({ dark = false }: { dark?: boolean }) {
  const { locale } = useT();
  const isAr = locale === 'ar';

  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);

  const field = dark
    ? 'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-body text-[15px] text-white placeholder:text-white/30 outline-none transition focus:border-fa-orange-soda/50 focus:ring-2 focus:ring-fa-orange-soda/10'
    : 'w-full rounded-xl border border-fa-liberty-blue/12 bg-white/70 px-4 py-3 font-body text-[15px] text-fa-liberty-blue placeholder:text-fa-liberty-blue/35 outline-none transition focus:border-fa-orange-soda/60 focus:ring-2 focus:ring-fa-orange-soda/15';

  // LTR data (phone / email / URL) typed left-to-right but aligned to the
  // right edge in the Arabic layout so the form reads as one column.
  const ltr = `${field} ${isAr ? 'text-right' : ''}`.trim();

  const heading = dark ? 'text-white' : 'text-fa-liberty-blue';
  const muted = dark ? 'text-fa-classic-chalk/65' : 'text-fa-ink-muted';

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-fa-orange-soda/15 text-fa-orange-soda">
          <Check size={28} strokeWidth={2.6} />
        </span>
        <h3 className={`font-display mt-6 text-[24px] font-bold tracking-[-0.02em] ${heading}`}>
          {isAr ? 'وصلنا طلبك!' : 'Got it — thank you!'}
        </h3>
        <p className={`font-body mt-3 text-[15px] leading-[1.7] max-w-[360px] ${muted}`}>
          {isAr
            ? 'سيتواصل معك فريقنا خلال يوم عمل واحد بخطة مخصّصة.'
            : 'Our team will reach out within one business day with a tailored plan.'}
        </p>
      </div>
    );
  }

  return (
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
          phone: (f.elements.namedItem('phone') as HTMLInputElement)?.value,
          storeUrl: (f.elements.namedItem('storeUrl') as HTMLInputElement)?.value,
          orders: (f.elements.namedItem('orders') as HTMLSelectElement)?.value,
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
      <h3 className={`font-display text-[22px] lg:text-[26px] font-bold tracking-[-0.02em] ${heading}`}>
        {isAr ? 'اطلب عرض سعر' : 'Request a quote'}
      </h3>
      <div className="grid sm:grid-cols-2 gap-4 pt-2">
        <input required name="name" className={field} placeholder={isAr ? 'الاسم' : 'Full name'} aria-label={isAr ? 'الاسم' : 'Full name'} />
        <input required name="phone" type="tel" dir="ltr" className={ltr} placeholder={isAr ? 'رقم التواصل (جوال)' : 'Phone number'} aria-label={isAr ? 'رقم التواصل' : 'Phone number'} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input required name="email" type="email" dir="ltr" className={ltr} placeholder={isAr ? 'البريد الإلكتروني' : 'Email'} aria-label={isAr ? 'البريد الإلكتروني' : 'Email'} />
        <input required name="store" className={field} placeholder={isAr ? 'اسم العلامة التجارية / الشركة' : 'Brand / company name'} aria-label={isAr ? 'اسم العلامة التجارية / الشركة' : 'Brand / company name'} />
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <input name="storeUrl" type="text" inputMode="url" dir="ltr" className={ltr} placeholder={isAr ? 'رابط المتجر (اختياري)' : 'Store URL (optional)'} aria-label={isAr ? 'رابط المتجر' : 'Store URL'} />
        <select
          required
          name="orders"
          defaultValue=""
          className={`${field} cursor-pointer appearance-none ${dark ? 'invalid:text-white/30 [&>option]:text-fa-liberty-blue' : 'invalid:text-fa-ink-muted/60'}`}
          aria-label={isAr ? 'عدد الطلبات شهريًا' : 'Orders / month'}
        >
          <option value="" disabled>{isAr ? 'عدد الطلبات شهريًا' : 'Orders / month'}</option>
          <option value="0-100">{isAr ? 'من 0 إلى 100' : '0–100'}</option>
          <option value="101-500">{isAr ? 'من 101 إلى 500' : '101–500'}</option>
          <option value="501-2000">{isAr ? 'من 501 إلى 2,000' : '501–2,000'}</option>
          <option value="2001-10000">{isAr ? 'من 2,001 إلى 10,000' : '2,001–10,000'}</option>
          <option value="10000+">{isAr ? '10 آلاف أو أكثر' : '10,000+'}</option>
        </select>
      </div>
      <textarea name="message" rows={3} className={field} placeholder={isAr ? 'ماذا تشحن؟ تفاصيل إضافية (اختياري)' : 'What do you ship? Extra details (optional)'} aria-label={isAr ? 'رسالتك' : 'Message'} />
      <button type="submit" disabled={sending} className="btn-brand btn-brand--filled btn-brand--accent w-full justify-center disabled:opacity-60">
        <span className="btn-brand__label">{sending ? (isAr ? 'جاري الإرسال...' : 'Sending...') : isAr ? 'أرسل الطلب... وخلّها علينا' : 'Send request'}</span>
      </button>
      {sendError && (
        <p className="font-body text-[13px] text-red-500 text-center">
          {isAr ? 'تعذّر إرسال الطلب. جرّب مرة ثانية أو كلمنا واتساب.' : 'Could not send your request. Please try again or reach us on WhatsApp.'}
        </p>
      )}
      <p className={`font-body text-[12px] text-center ${dark ? 'text-fa-classic-chalk/45' : 'text-fa-ink-muted/80'}`}>
        {isAr ? 'نرد خلال يوم عمل واحد. لا رسائل مزعجة.' : 'We reply within one business day. No spam.'}
      </p>
    </form>
  );
}
