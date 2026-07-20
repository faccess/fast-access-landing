import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta';
import { PackageCheck, Boxes, Truck, Radar, Store, Headset, Ship, Smartphone } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import DashboardPreview from '../sections/DashboardPreview';
import SectionChip from '../components/brand/SectionChip';
import SpotlightCard from '../components/brand/SpotlightCard';
import RevealText from '../components/brand/RevealText';
import MagneticButton from '../components/brand/MagneticButton';
import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

export default function Solutions() {
  usePageMeta(
    { title: 'حلولنا — تخزين وتجهيز وشحن وتتبع | فاست أكسس', desc: 'كل اللي تحتاجه عشان توصل طلباتك: ربط متجرك، تخزين مرن مرخص، تجهيز بدقة 99.7%، شحن لكل المملكة والخليج، ولوحة تتبع موحدة.' },
    { title: 'Solutions — Storage, Fulfillment & Shipping | Fast Access', desc: 'Everything to deliver your orders: store integration, licensed flexible storage, 99.7% picking accuracy, KSA & GCC shipping, unified tracking.' }
  );
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  usePageMeta(
    { title: 'حلول الفلفلمنت المتكاملة للمتاجر الإلكترونية | فاست أكسس', desc: 'كيف تربط فاست أكسس متجرك وتدير الفلفلمنت كاملًا: تخزين، تجهيز بهويتك، شحن ذكي، متابعة لحظية، وتوصيل بنفس اليوم من المخازن السحابية.' },
    { title: "End-to-end fulfillment solutions for e-commerce | Fast Access", desc: "How Fast Access plugs into your store and runs fulfillment end to end — warehousing, pick & pack, shipping, live tracking, and same-day cloud-store delivery." },
  );

  // How Fast Access plugs into a merchant's operation — page-specific, not on home
  const model = [
    {
      step: '01',
      title: isAr ? 'نربط متجرك' : 'We connect your store',
      body: isAr
        ? 'سلة، زد، شوبيفاي، ووكومرس أو API، ربط بدقائق، وطلباتك تنسحب لنظامنا تلقائيًا بدون أي تدخل منك.'
        : 'Direct integration with Salla, Zid, and Shopify — orders flow to us automatically the moment a buyer checks out.',
    },
    {
      step: '02',
      title: isAr ? 'نستلم مخزونك' : 'We take your stock',
      body: isAr
        ? 'ننسّق الاستلام من موقعك أو موردك — حتى لو كان خارج المملكة، نتولى الشحن الدولي والتخليص الجمركي — نفحص البضاعة وندخلها مستودعاتنا المرخصة من هيئة الغذاء والدواء.'
        : 'From your site or your supplier — even overseas, we handle international freight and customs — we inspect, shelve, and log every SKU.',
    },
    {
      step: '03',
      title: isAr ? 'نشحن ونتابع' : 'We ship & track',
      body: isAr
        ? 'كل طلب يتجهز ويتغلف بهويتك وينطلق، وأنت وعميلك تشوفونه لحظة بلحظة حتى باب البيت.'
        : 'We pick, pack, and deliver — every order tracked from shelf to doorstep in one live dashboard.',
    },
  ];

  const capabilities = [
    { icon: Boxes, id: 'storage', title: isAr ? 'تخزين مرن' : 'Flexible warehousing', body: isAr ? 'أكثر من 15,000 م² تتمدد مع موسمك، بمساحات مكيفة بدرجات مضبوطة (16-21°م) لمنتجاتك الحساسة.' : 'Space that expands with your season, with a controlled 16-21°C climate.', metric: isAr ? '10+ مراكز' : '10+ centres' },
    { icon: PackageCheck, id: 'packing', title: isAr ? 'تجهيز وتغليف' : 'Pick & pack', body: isAr ? 'فريق مدرب يجهز طلبك بمواد متينة وهوية علامتك، كروت، إهداءات، وتغليف مخصص جاهز للمواسم.' : 'Branded packing built for your identity, ready for peak.', metric: isAr ? 'تجهيز وتغليف خلال دقائق' : 'Packed in minutes' },
    { icon: Truck, id: 'shipping', title: isAr ? 'شحن وتوصيل' : 'Shipping & delivery', body: isAr ? 'أفضل شركاء الشحن المحليين والدوليين، مع توصيل بنفس اليوم داخل المدن الكبرى ووصول لأكثر من 220 دولة.' : 'Wide carrier network with same-day in major cities.', metric: isAr ? '98% بالوقت' : '98% on-time' },
    { icon: Radar, id: 'tracking', title: isAr ? 'متابعة لحظية' : 'Live tracking', body: isAr ? 'لوحة واحدة تجمع كل شحناتك — وقريبًا تطبيق جوال للتجار — وروابط تتبع توصل عملاءك تلقائيًا، يعرفون وين طلبهم قبل ما يسألون.' : 'Every order event surfaces live, for you and your buyer.', metric: isAr ? '5 مراحل' : '5 stages' },
    { icon: Store, id: 'cloud-stores', title: isAr ? 'المخازن السحابية' : 'Cloud stores', body: isAr ? 'مخزونك موزّع بقلب المدن، فالطلب العاجل يوصل خلال ساعة إلى ساعتين، حتى بذروة المواسم.' : 'Inventory pre-positioned where your customers actually order.', metric: isAr ? '6 مدن' : '6 cities' },
    { icon: Headset, id: 'support', title: isAr ? 'خدمة العملاء' : 'Customer care', body: isAr ? 'فريق يراقب شحناتك أولاً بأول — أغلب المشاكل تنحل قبل حتى ما تسمع فيها.' : 'A team watching your shipments in real time — most issues get solved before you even hear about them.', metric: isAr ? 'دعم 24/7' : '24/7 support' },
    { icon: Smartphone, wide: true, id: 'merchant-app', title: isAr ? 'تطبيق فاست أكسس للتجار' : 'Fast Access merchant app', body: isAr ? 'تجارتك بجيبك: متابعة الطلبات، تحليلات المبيعات والمخزون، وتنبيهات لحظية توصلك أول بأول — قريبًا على App Store وGoogle Play.' : 'Your business in your pocket: order tracking, sales & inventory analytics, and instant alerts — soon on the App Store and Google Play.', metric: isAr ? 'قريبًا' : 'Coming soon' },
    { icon: Ship, wide: true, id: 'freight', title: isAr ? 'الشحن الدولي والتخليص الجمركي' : 'International freight & customs clearance', body: isAr ? 'نستورد بضاعتك من موردك — شحن بحري وجوي — ونخلّصها جمركيًا بدون عناء، وتدخل مستودعاتنا جاهزة للبيع مباشرة.' : 'We import your goods from your supplier — sea and air freight — clear customs end to end, and your stock enters our warehouses ready to sell.', metric: isAr ? 'من الباب للرف' : 'Door to shelf' },
  ];

  const stack = ['Salla', 'Zid', 'Shopify', 'WooCommerce', 'Magento', 'Custom API'];

  return (
    <>
      <PageHeader
        chip={t('services.chip')}
        title={isAr ? (<><span className="text-fa-orange-soda">حلولنا...</span> كل اللي تحتاجه عشان توصل طلباتك</>) : t('pages.solutions.title')}
        sub={t('pages.solutions.sub')}
        bg="/assets/hero-solutions.webp"
      />

      {/* Operating model — 3 steps */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'كيف نعمل معك' : 'How it works with you'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[46px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em] max-w-[720px]">
              <RevealText accent={isAr ? 'منظومة واحدة' : 'one operation'} stagger={45}>
                {isAr ? 'ثلاث خطوات... وبعدها خلّها علينا.' : 'Three steps connect your store to one operation.'}
              </RevealText>
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            {model.map((m, i) => (
              <Reveal key={m.step} delay={i * 100} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow h-full p-8 lg:p-9 text-left rtl:text-right">
                  <span className="font-display text-[44px] font-bold text-fa-orange-soda/25 leading-none tabular-nums">{m.step}</span>
                  <h3 className="font-display mt-4 text-[21px] lg:text-[24px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{m.title}</h3>
                  <p className="font-body mt-3 text-[15px] text-fa-ink-muted leading-[1.7]">{m.body}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities deep-dive */}
      <section className="relative bg-fa-cream-deep section-padding overflow-hidden">
        <div className="container-main relative z-10">
          <Reveal className="mb-4"><SectionChip>{isAr ? 'القدرات' : 'Capabilities'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[28px] sm:text-[36px] lg:text-[46px] text-fa-liberty-blue leading-[1.08] tracking-[-0.02em] max-w-[720px]">
              {isAr ? 'كل ما تحتاجه تجارتك، تحت سقف واحد.' : 'Everything your operation needs, under one roof.'}
            </h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {capabilities.map((c, i) => (
              <div key={c.title} id={(c as any).id} className={`scroll-mt-28 h-full ${(c as any).wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
              <Reveal delay={i * 70} className="h-full">
                <SpotlightCard className="fa-card fa-card--glow group h-full p-7 lg:p-8 text-left rtl:text-right">
                  <span className="fa-iconchip"><c.icon size={22} strokeWidth={1.8} /></span>
                  <h3 className="font-display mt-5 text-[19px] lg:text-[21px] font-bold text-fa-liberty-blue tracking-[-0.02em]">{c.title}</h3>
                  <p className="font-body mt-2.5 text-[14px] text-fa-ink-muted leading-[1.65]">{c.body}</p>
                  <div className="mt-5 flex items-center justify-between gap-3 border-t border-fa-liberty-blue/10 pt-3">
                    <span className="font-ui text-[12px] font-semibold uppercase tracking-[0.08em] text-fa-orange-soda">{c.metric}</span>
                    {(c as any).id && (c as any).id !== 'merchant-app' && (
                      <Link to={`/solutions/${(c as any).id}`} className="font-ui text-[12px] font-semibold text-fa-liberty-blue/70 hover:text-fa-orange-soda transition-colors whitespace-nowrap">
                        {isAr ? 'التفاصيل الكاملة ←' : 'Full details →'}
                      </Link>
                    )}
                  </div>
                </SpotlightCard>
              </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DashboardPreview />

      {/* Works with your stack */}
      <section className="relative bg-fa-cream section-padding overflow-hidden">
        <div className="container-main relative z-10 text-center">
          <Reveal className="mb-4 flex justify-center"><SectionChip>{isAr ? 'يعمل مع أدواتك' : 'Works with your stack'}</SectionChip></Reveal>
          <Reveal delay={80}>
            <h2 className="font-display font-bold text-[26px] sm:text-[34px] lg:text-[42px] text-fa-liberty-blue leading-[1.1] tracking-[-0.02em] max-w-[680px] mx-auto">
              {isAr ? 'نربط متجرك خلال دقائق، مو أسابيع.' : 'We connect your store in minutes, not weeks.'}
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              {stack.map((s) => (
                <span key={s} className="rounded-full border border-fa-liberty-blue/12 bg-white/60 px-5 py-2.5 font-ui text-[14px] font-semibold text-fa-liberty-blue/80">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-12 flex justify-center">
              <MagneticButton variant="filled" href="/contact">
                {isAr ? 'ابدأ الربط' : 'Start connecting'}
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
