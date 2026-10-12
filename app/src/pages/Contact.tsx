import usePageMeta from '../hooks/usePageMeta';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';
import { claims } from '../content/claims';

export default function Contact() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta(
    { title: `تواصل معنا: خطة فلفلمنت مخصصة خلال ${claims.quoteTurnaround.ar} | فاست أكسس`, desc: `قل لنا وش تشحن، ونرجع لك بخطة فلفلمنت مفصلة على مقاس متجرك خلال ${claims.quoteTurnaround.ar}. كلم فريق فاست أكسس مباشرة.` },
    { title: `Contact Fast Access — a tailored plan in ${claims.quoteTurnaround.en} | Fast Access`, desc: `Tell us what you ship and we'll come back with a tailored fulfillment plan within ${claims.quoteTurnaround.en}. Talk to the Fast Access team.` },
  );

  const methods = [
    { icon: Mail, label: isAr ? 'البريد' : 'Email', value: 'info@faccess.co' },
    { icon: Phone, label: isAr ? 'الهاتف' : 'Phone', value: '+966 920 032 768', dir: 'ltr' },
    { icon: MapPin, label: isAr ? 'المقر' : 'Head office', value: isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
    { icon: Clock, label: isAr ? 'ساعات خدمة العملاء' : 'Customer service hours', value: isAr ? `${claims.workingHours.ar} (دعم ${claims.support.short})` : `${claims.workingHours.en} (${claims.support.short} support)` },
  ];


  return (
    <>
      <PageHeader
        chip={isAr ? 'تواصل' : 'Contact'}
        title={isAr ? (<>جاهز تخلّيها <span className="text-fa-orange-soda">علينا؟</span></>) : 'Let’s get your orders moving.'}
        sub={isAr ? `عطنا تفاصيل شحنك بدقيقتين، ونرجع لك بخطة مفصّلة على مقاس تجارتك خلال ${claims.quoteTurnaround.ar}.` : `Share your shipping profile and we’ll come back with a tailored plan within ${claims.quoteTurnaround.en}.`}
        bg="/assets/hero-contact.webp"
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
              <QuoteForm />
            </SpotlightCard>
          </Reveal>
        </div>
      </section>
    </>
  );
}
