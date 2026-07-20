import usePageMeta from '../hooks/usePageMeta';
import { Mail, Phone, MapPin, Clock, Check } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import QuoteForm from '../components/QuoteForm';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

export default function Contact() {
  usePageMeta(
    { title: 'اطلب عرض سعر — جاهز تخلّيها علينا؟ | فاست أكسس', desc: 'عطنا تفاصيل شحنك بدقيقتين ونرجع لك بخطة مفصّلة على مقاس تجارتك خلال يوم عمل واحد. واتساب وهاتف موحد ودعم 24/7.' },
    { title: 'Request a Quote | Fast Access', desc: 'Share your shipping profile in two minutes and get a tailored plan within one business day. WhatsApp, unified phone, 24/7 support.' }
  );
  const { locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta(
    { title: 'تواصل معنا — خطة فلفلمنت مخصصة خلال يوم عمل | فاست أكسس', desc: 'قل لنا وش تشحن، ونرجع لك بخطة فلفلمنت مفصلة على مقاس متجرك خلال يوم عمل. كلم فريق فاست أكسس مباشرة.' },
    { title: "Contact Fast Access — a tailored plan in one business day | Fast Access", desc: "Tell us what you ship and we'll come back with a tailored fulfillment plan within one business day. Talk to the Fast Access team." },
  );

  const methods = [
    { icon: Mail, label: isAr ? 'البريد' : 'Email', value: 'info@faccess.co' },
    { icon: Phone, label: isAr ? 'الهاتف' : 'Phone', value: '+966 920 032 768', dir: 'ltr' },
    { icon: MapPin, label: isAr ? 'المقر' : 'Head office', value: isAr ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia' },
    { icon: Clock, label: isAr ? 'ساعات العمل' : 'Hours', value: isAr ? 'الأحد إلى الخميس، 9 صباحًا إلى 5 مساءً (دعم 24/7)' : 'Sun–Thu, 9am–5pm (24/7 support)' },
  ];


  return (
    <>
      <PageHeader
        chip={isAr ? 'تواصل' : 'Contact'}
        title={isAr ? (<>جاهز تخلّيها <span className="text-fa-orange-soda">علينا؟</span></>) : 'Let’s get your orders moving.'}
        sub={isAr ? 'عطنا تفاصيل شحنك بدقيقتين، ونرجع لك بخطة مفصّلة على مقاس تجارتك خلال يوم عمل واحد.' : 'Share your shipping profile and we’ll come back with a tailored plan within one business day.'}
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
