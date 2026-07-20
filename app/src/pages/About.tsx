import usePageMeta from '../hooks/usePageMeta';
import { Target, Telescope, Gauge, ShieldCheck, HeartHandshake, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import RevealText from '../components/brand/RevealText';
import MagneticButton from '../components/brand/MagneticButton';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

export default function About() {
  usePageMeta(
    { title: 'من نحن — قصة فاست أكسس', desc: 'تعرف على فاست أكسس: شركة لوجستية سعودية تشغّل التخزين والتجهيز والشحن لمئات المتاجر، بمراكز في الرياض وجدة والدمام.' },
    { title: 'About Fast Access', desc: 'Meet Fast Access: a Saudi logistics company running storage, fulfillment and shipping for hundreds of stores from Riyadh, Jeddah and Dammam.' }
  );
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta(
    { title: 'من نحن — قصة فاست أكسس اللوجستية | فاست أكسس', desc: 'فاست أكسس شركة لوجستية تشغيلية سعودية — التيار اللي يحرك نمو التجارة الإلكترونية في المملكة والخليج. تعرف على قصتنا وأرقامنا.' },
    { title: "About Fast Access — our logistics story | Fast Access", desc: "Fast Access is an operational logistics company — the current that drives e-commerce growth across Saudi Arabia and the Gulf." },
  );

  const values = [
    { icon: Gauge, title: isAr ? 'السرعة أولًا' : 'Speed first', body: isAr ? 'نقيس أنفسنا بالساعات، لا الأيام، لأن عميلك ينتظر.' : 'We measure ourselves in hours, not days — because your customer is waiting.' },
    { icon: ShieldCheck, title: isAr ? 'موثوقية مطلقة' : 'Radical reliability', body: isAr ? 'كل طلب يُعامل كأنه يحمل اسمك، لأنه فعلًا يحمله.' : 'Every order is handled as if it carries your name — because it does.' },
    { icon: HeartHandshake, title: isAr ? 'شريك لا مورّد' : 'Partner, not vendor', body: isAr ? 'نجاحك هو مقياسنا الوحيد — لو ما نما متجرك، ما سوّينا شغلنا.' : 'Your growth is our only metric — if your store didn\u2019t grow, we didn\u2019t do our job.' },
    { icon: TrendingUp, title: isAr ? 'مبنيّ للنمو' : 'Built for growth', body: isAr ? 'من ١٠٠ طلب إلى ١٠,٠٠٠ — نفس الدقة، نفس السرعة، بدون ما تحس بالفرق.' : 'From 100 orders to 10,000 — same accuracy, same speed, and you won\u2019t feel the difference.' },
  ];

  const numbers = [
    { v: '10+', l: isAr ? 'مركز توزيع' : 'Fulfilment centres' },
    { v: '13', l: isAr ? 'منطقة في المملكة' : 'Regions in the Kingdom' },
    { v: '97%', l: isAr ? 'التزام بالوقت' : 'On-time rate' },
    { v: '24/7', l: isAr ? 'دعم تشغيلي' : 'Operations support' },
  ];

  return (
    <>
      <PageHeader title={t('pages.about.title')} sub={t('pages.about.sub')} bg="/assets/hero-about.webp" />

      {/* Who we are */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10 max-w-[780px] text-left rtl:text-right">
          <Reveal className="mb-6"><SectionChip>{isAr ? 'قصتنا' : 'Our story'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <p className="font-display font-normal text-[22px] sm:text-[26px] lg:text-[31px] text-fa-liberty-blue leading-[1.55] tracking-[-0.01em]">
              {isAr
                ? 'بدأنا في 2023 بملاحظة بسيطة: التجارة الإلكترونية في السعودية تنمو بسرعة، والخدمات اللوجستية ما كانت تلحق عليها. شفنا الفجوة واضحة — تجّار يكبرون، وعمليات تشدّهم لتحت.'
                : 'We started in 2023 with a simple observation: e-commerce in Saudi Arabia was growing fast, and logistics wasn\u2019t keeping up. The gap was clear — merchants scaling up, and operations dragging them down.'}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <p className="font-body mt-6 text-[16px] lg:text-[17px] text-fa-ink-muted leading-[1.85]">
              {isAr
                ? 'فدخلنا السوق برهانين ما تنازلنا عنهما يوم: خدمة جبارة تعامل كل طلب كأنه يحمل اسمنا، وتقنية نطوّرها بأيدينا — منصة تربط متجرك، تجهّز، تشحن، وتتبّع، عشان تشوف كل شي وتتفرغ لنموك.'
                : 'So we entered the market with two bets we\u2019ve never compromised on: exceptional service that treats every order as if it carries our name, and technology we build ourselves — a platform that connects your store, fulfills, ships, and tracks, so you see everything and focus on growth.'}
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="font-body mt-4 text-[16px] lg:text-[17px] text-fa-ink-muted leading-[1.85]">
              {isAr
                ? 'وفي 2025 جات النقلة: موجة عملاء جدد اختاروا يخلّونها علينا، وتوسّعت عملياتنا عبر المملكة. واليوم نكمل على نفس الطريق — نكبر مع تجّارنا، ونطوّر قبل ما يحتاجون.'
                : 'Then 2025 brought the leap: a wave of new clients chose to hand it over to us, and our operations expanded across the Kingdom. Today we\u2019re on the same road — growing with our merchants, and building ahead of their needs.'}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="relative bg-fa-cream-deep section-padding overflow-hidden">
        <div className="container-main relative z-10 grid md:grid-cols-2 gap-6">
          {[
            { icon: Target, title: t('pages.mission.title'), body: t('pages.mission.body') },
            { icon: Telescope, title: t('pages.vision.title'), body: t('pages.vision.body') },
          ].map((b, i) => (
            <Reveal key={i} delay={i * 100} className="h-full">
              <SpotlightCard className="fa-card fa-card--glow group relative h-full overflow-hidden p-8 lg:p-10 text-left rtl:text-right">
                <div className="relative z-10">
                  <span className="fa-iconchip"><b.icon size={24} strokeWidth={1.8} /></span>
                  <h2 className="font-display mt-6 text-[24px] lg:text-[28px] font-bold text-fa-liberty-blue tracking-[-0.02em]">
                    <RevealText stagger={45}>{b.title}</RevealText>
                  </h2>
                  <p className="font-body mt-3 text-[15px] lg:text-base text-fa-ink-muted leading-[1.7]">{b.body}</p>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* What we value */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'ما نؤمن به' : 'What we value'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[46px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em] max-w-[720px]">
              {isAr ? 'المبادئ التي تحرّك كل طلب.' : 'The principles behind every order.'}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 80} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow group h-full p-7 text-left rtl:text-right">
                  <span className="fa-iconchip"><v.icon size={22} strokeWidth={1.8} /></span>
                  <h3 className="font-display mt-5 text-[18px] lg:text-[20px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{v.title}</h3>
                  <p className="font-body mt-2.5 text-[14px] text-fa-ink-muted leading-[1.65]">{v.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* By the numbers + CTA */}
      <section className="relative bg-fa-liberty-blue section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip onDark>{isAr ? 'بالأرقام' : 'By the numbers'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[44px] text-fa-classic-chalk leading-[1.1] tracking-[-0.02em] max-w-[640px]">
              {isAr ? 'حضور تشغيلي عبر المملكة.' : 'An operational footprint across the Kingdom.'}
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mt-12 pt-10 border-t border-fa-classic-chalk/12">
            {numbers.map((n, i) => (
              <Reveal key={n.l} delay={i * 90}>
                <div className="w-10 h-[3px] bg-fa-orange-soda mb-5" />
                <div className="font-display font-semibold text-[40px] lg:text-[52px] text-fa-classic-chalk leading-none tracking-[-0.02em] tabular-nums">{n.v}</div>
                <div className="mt-3 text-[11px] font-semibold text-fa-classic-chalk/55 uppercase tracking-[0.08em] font-body">{n.l}</div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <div className="mt-14">
              <MagneticButton variant="filled" href="/contact">
                {isAr ? 'تحدث إلى فريقنا' : 'Talk to our team'}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
