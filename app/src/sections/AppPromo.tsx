import { useT } from '../i18n/I18nContext';
import SectionChip from '../components/brand/SectionChip';
import Reveal from '../components/Reveal';
import { Bell, LineChart, PackageSearch, Boxes, PackagePlus, Undo2 } from 'lucide-react';

/**
 * AppPromo — merchant mobile app section (app launching soon).
 * The phone is a pure CSS/JSX mockup in brand identity — no image assets.
 */
export default function AppPromo() {
  const { locale } = useT();
  const isAr = locale === 'ar';

  const feats = [
    {
      icon: PackageSearch,
      title: isAr ? 'متابعة الطلبات' : 'Order tracking',
      body: isAr ? 'كل شحناتك لحظة بلحظة، من التجهيز إلى باب العميل.' : 'Every shipment live, from prep to your customer\u2019s door.',
    },
    {
      icon: LineChart,
      title: isAr ? 'تحليلات الطلبات والمخزون' : 'Orders & inventory analytics',
      body: isAr ? 'أرقامك قدامك: مبيعات، مخزون، وتنبؤات تبني عليها قراراتك.' : 'Your numbers at a glance: sales, stock, and forecasts to act on.',
    },
    {
      icon: PackagePlus,
      title: isAr ? 'إنشاء طلب أو استرجاع' : 'Create orders & returns',
      body: isAr ? 'أنشئ طلب شحن جديد أو طلب استرجاع من جوالك بثواني — بدون ما تفتح اللابتوب.' : 'Create a new shipment or a return request from your phone in seconds.',
    },
    {
      icon: Bell,
      title: isAr ? 'تنبيهات لحظية' : 'Instant alerts',
      body: isAr ? 'مخزون قرب يخلص؟ طلب تعثر؟ يوصلك إشعار قبل ما تصير مشكلة.' : 'Low stock? A stuck order? You get notified before it becomes a problem.',
    },
  ];

  return (
    <section className="relative bg-fa-liberty-blue section-padding overflow-hidden">
      <div className="container-main relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        {/* Copy */}
        <div className="text-left rtl:text-right">
          <Reveal className="mb-4"><SectionChip onDark>{isAr ? 'تطبيق فاست أكسس' : 'Fast Access app'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[30px] sm:text-[38px] lg:text-[48px] text-fa-classic-chalk leading-[1.35] tracking-[-0.02em]">
              {isAr ? (<>تجارتك كلها... <span className="text-fa-orange-soda">بجيبك.</span></>) : (<>Your whole business... <span className="text-fa-orange-soda">in your pocket.</span></>)}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-body mt-4 text-[15px] lg:text-[17px] text-fa-classic-chalk/70 leading-[1.75] max-w-[520px]">
              {isAr
                ? 'تطبيق جوال صممناه للتجار: تتابع طلباتك، تحلل مبيعاتك ومخزونك، وتوصلك التنبيهات المهمة أول بأول — وين ما كنت.'
                : 'A mobile app built for merchants: track your orders, analyze sales and inventory, and get the alerts that matter — wherever you are.'}
            </p>
          </Reveal>

          <div className="mt-8 space-y-5">
            {feats.map((f, i) => (
              <Reveal key={f.title} delay={180 + i * 70}>
                <div className="flex items-start gap-4">
                  <span className="shrink-0 flex h-11 w-11 items-center justify-center rounded-xl bg-fa-orange-soda/15 text-fa-orange-soda">
                    <f.icon size={20} strokeWidth={1.9} />
                  </span>
                  <div>
                    <h3 className="font-display text-[17px] font-bold text-fa-classic-chalk">{f.title}</h3>
                    <p className="font-body mt-1 text-[14px] text-fa-classic-chalk/60 leading-[1.65]">{f.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Store badges — soon state */}
          <Reveal delay={420}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              {[
                { store: 'App Store', sub: isAr ? 'قريبًا على' : 'Soon on' },
                { store: 'Google Play', sub: isAr ? 'قريبًا على' : 'Soon on' },
              ].map((b) => (
                <div key={b.store} className="inline-flex items-center gap-3 rounded-xl border border-fa-classic-chalk/25 bg-white/5 px-5 py-3 select-none">
                  <div className="text-left rtl:text-right">
                    <div className="font-ui text-[10.5px] uppercase tracking-[0.08em] text-fa-classic-chalk/55">{b.sub}</div>
                    <div className="font-display text-[16px] font-bold text-fa-classic-chalk leading-tight">{b.store}</div>
                  </div>
                  <span className="rounded-full bg-fa-orange-soda px-2.5 py-0.5 font-ui text-[10px] font-bold text-white">{isAr ? 'قريبًا' : 'Soon'}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Phone mockup — pure CSS, brand identity */}
        <Reveal delay={200}>
          <div className="relative mx-auto w-[260px] sm:w-[290px]" aria-hidden>
            {/* glow */}
            <div className="absolute -inset-10 rounded-full bg-fa-orange-soda/15 blur-3xl" />
            {/* frame */}
            <div className="relative rounded-[42px] border border-fa-classic-chalk/20 bg-[#0A0E28] p-3 shadow-[0_40px_80px_rgba(0,0,0,0.45)]">
              <div className="rounded-[32px] bg-fa-classic-chalk overflow-hidden aspect-[9/18] flex flex-col">
                {/* status bar + header */}
                <div className="bg-fa-liberty-blue px-5 pt-4 pb-5">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-[13px] font-extrabold text-fa-classic-chalk tracking-wide">FAST ACCESS</span>
                    <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-white/10 text-fa-classic-chalk">
                      <Bell size={13} />
                      <span className="absolute -top-0.5 -end-0.5 h-2.5 w-2.5 rounded-full bg-fa-orange-soda ring-2 ring-fa-liberty-blue" />
                    </span>
                  </div>
                  <div className="font-body mt-3 text-[11px] text-fa-classic-chalk/60">{isAr ? 'أهلًا، متجر النخبة' : 'Hi, Elite Store'}</div>
                  <div className="font-display text-[18px] font-bold text-fa-classic-chalk leading-snug">{isAr ? 'طلبات اليوم: 142' : 'Today\u2019s orders: 142'}</div>
                </div>
                {/* stat cards */}
                <div className="grid grid-cols-2 gap-2.5 p-4">
                  {[
                    { l: isAr ? 'قيد التجهيز' : 'Preparing', v: '38', accent: false },
                    { l: isAr ? 'خارج للتوصيل' : 'Out for delivery', v: '54', accent: true },
                    { l: isAr ? 'تم التسليم' : 'Delivered', v: '47', accent: false },
                    { l: isAr ? 'مرتجعات' : 'Returns', v: '3', accent: false },
                  ].map((s) => (
                    <div key={s.l} className={`rounded-2xl p-3 ${s.accent ? 'bg-fa-orange-soda text-white' : 'bg-white text-fa-liberty-blue'} shadow-sm`}>
                      <div className={`font-ui text-[9.5px] font-semibold ${s.accent ? 'text-white/80' : 'text-fa-ink-muted'}`}>{s.l}</div>
                      <div className="font-display text-[22px] font-extrabold leading-tight">{s.v}</div>
                    </div>
                  ))}
                </div>
                {/* mini bar chart */}
                <div className="mx-4 mb-3 rounded-2xl bg-white p-3.5 shadow-sm flex-1 flex flex-col justify-center">
                  <div className="flex items-center justify-between">
                    <span className="font-ui text-[10px] font-semibold text-fa-ink-muted">{isAr ? 'مبيعات الأسبوع' : 'This week\u2019s sales'}</span>
                    <span className="font-ui text-[10px] font-bold text-fa-orange-soda" dir="ltr">+18%</span>
                  </div>
                  <div className="mt-2.5 flex items-end gap-1.5 h-[52px]" style={{ direction: 'ltr' }}>
                    {[34, 48, 40, 62, 55, 78, 92].map((h, i) => (
                      <div key={i} className={`flex-1 rounded-t-md ${i === 6 ? 'bg-fa-orange-soda' : 'bg-fa-liberty-blue/15'}`} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
                {/* quick actions: create order / return */}
                <div className="mx-4 mb-3 grid grid-cols-2 gap-2.5">
                  <div className="flex items-center justify-center gap-1.5 rounded-xl bg-fa-orange-soda px-2 py-2.5 shadow-sm">
                    <PackagePlus size={13} className="text-white" />
                    <span className="font-ui text-[10.5px] font-bold text-white">{isAr ? 'طلب جديد' : 'New order'}</span>
                  </div>
                  <div className="flex items-center justify-center gap-1.5 rounded-xl bg-white px-2 py-2.5 shadow-sm ring-1 ring-fa-liberty-blue/10">
                    <Undo2 size={13} className="text-fa-liberty-blue" />
                    <span className="font-ui text-[10.5px] font-bold text-fa-liberty-blue">{isAr ? 'استرجاع' : 'Return'}</span>
                  </div>
                </div>
                {/* alert toast */}
                <div className="mx-4 mb-5 flex items-center gap-2.5 rounded-2xl bg-fa-liberty-blue px-3.5 py-3 shadow-md">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-fa-orange-soda/20 text-fa-orange-soda"><Boxes size={15} /></span>
                  <div className="min-w-0">
                    <div className="font-display text-[11.5px] font-bold text-fa-classic-chalk truncate">{isAr ? 'تنبيه مخزون' : 'Stock alert'}</div>
                    <div className="font-body text-[10px] text-fa-classic-chalk/60 truncate">{isAr ? 'عطر العود الملكي — باقي 12 قطعة' : 'Royal Oud — 12 units left'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
