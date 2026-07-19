import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionChip from '../components/brand/SectionChip';
import { useT } from '../i18n/I18nContext';

gsap.registerPlugin(ScrollTrigger);

const SCENES = [
  {
    progress: 0,
    time: '11:00 ص',
    timeEn: '11:00 AM',
    label: { en: 'Order in', ar: 'الطلب وصل' },
    title: { en: 'Your customer hit "Buy" — and it became ours to handle.', ar: 'عميلك اشترى... وخلاص، صارت علينا.' },
    metric: { en: 'New order', ar: 'طلب جديد' },
    detail: {
      en: 'The order flows from your store into our system automatically. No emails, no spreadsheets, no follow-ups.',
      ar: 'الطلب انسحب من متجرك لنظامنا تلقائيًا. بدون إيميل، بدون إكسل، بدون «أبشر أرسله لك».',
    },
  },
  {
    progress: 0.27,
    time: '11:30 ص',
    timeEn: '11:30 AM',
    label: { en: 'Pick & pack', ar: 'التجهيز' },
    title: { en: 'Picked, packed, and wearing your brand.', ar: 'تجهيز، تغليف، وهوية علامتك على الصندوق.' },
    metric: { en: 'Ready to ship', ar: 'جاهز للشحن' },
    detail: {
      en: 'Our team packs every order in your branding, not ours. Your customer receives an experience, not a box.',
      ar: 'فريقنا يجهّز الطلب بتغليف يحمل اسم براندك مو اسمنا. عميلك يستلم تجربة، مو كرتون.',
    },
  },
  {
    progress: 0.54,
    time: '2:00 م',
    timeEn: '2:00 PM',
    label: { en: 'On the road', ar: 'على الطريق' },
    title: { en: 'The order is out for shipping, and tracking is in everyone\u2019s hands.', ar: 'الطلب طلع للشحن... والتتبع بيدك وبيد عميلك.' },
    metric: { en: 'Live tracking', ar: 'تتبع مباشر' },
    detail: {
      en: 'A live tracking link reaches your customer automatically. They know where their order is without asking you, and you see every shipment in one dashboard.',
      ar: 'رابط تتبع لحظي يوصل عميلك تلقائيًا، يعرف وين طلبه بدون ما يسألك، وأنت تشوف كل شحناتك بلوحة واحدة.',
    },
  },
  {
    progress: 0.78,
    time: '6:00 م',
    timeEn: '6:00 PM',
    label: { en: 'At the door', ar: 'عند الباب' },
    title: { en: 'Delivered, and your customer loves you a little more.', ar: 'وصل الطلب... وعميلك صار يحبّك أكثر.' },
    metric: { en: 'Delivered ✓', ar: 'تم التسليم ✓' },
    detail: {
      en: 'From the morning click to the doorstep before sunset, same day. That is what brings customers back, and gets them talking about you.',
      ar: 'من ضغطة الصباح إلى باب البيت قبل المغرب، بنفس اليوم. هذا اللي يخلي العميل يرجع يطلب، ويحكي عنك.',
    },
  },
] as const;

const VIDEO_DURATION = 10.041667;
const ROUTE_VIDEO_SRC = '/assets/scroll-route-van.mp4';

export default function ScrollRoute() {
  const { locale } = useT();
  const isAr = locale === 'ar';
  const lang = isAr ? 'ar' : 'en';
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [activeScene, setActiveScene] = useState(0);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoadVideo(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoadVideo(true);
        observer.disconnect();
      },
      // Start fetching before the sticky section reaches the viewport so the
      // scroll-scrub still feels ready without loading the MP4 at first paint.
      { rootMargin: '1800px 0px' },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!shouldLoadVideo) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    const progress = progressRef.current;
    if (!section || !video || !progress) return;

    let duration = VIDEO_DURATION;
    let lastScene = 0;

    const updateActiveScene = (scrollProgress: number) => {
      const nextScene = SCENES.reduce((current, scene, index) => {
        return scrollProgress >= scene.progress ? index : current;
      }, 0);

      if (nextScene !== lastScene) {
        lastScene = nextScene;
        setActiveScene(nextScene);
      }
    };

    const handleMetadata = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        duration = video.duration;
      }
    };

    video.addEventListener('loadedmetadata', handleMetadata);
    video.muted = true;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isMobile = window.innerWidth < 1024;

    // --- Mobile / touch path: scroll-scrub (video follows scroll, like desktop) -
    // The footage is scrubbed to the scroll position so the truck drives exactly
    // with the finger — same feel as desktop. We compute progress from scrollY
    // ourselves and drive it from real scroll/touchmove events (throttled via
    // rAF), NOT GSAP's onUpdate, which iOS throttles during momentum scrolling and
    // would make the scrub freeze then jump. The decoder is primed once (muted
    // play→pause) so iOS paints the seeked frames instead of showing black.
    if (isMobile) {
      video.pause();
      const primed = video.play();
      if (primed && typeof primed.then === 'function') {
        primed.then(() => video.pause()).catch(() => {});
      }
      let raf = 0;
      const sync = () => {
        raf = 0;
        const total = section.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-section.getBoundingClientRect().top, 0), Math.max(total, 1));
        const p = total > 0 ? scrolled / total : 0;
        const t = Math.min(duration - 0.05, Math.max(0, duration * p));
        if (Math.abs(video.currentTime - t) > 0.02) video.currentTime = t;
        progress.style.transform = `scaleX(${p})`;
        updateActiveScene(p);
      };
      const onScroll = () => {
        if (!raf) raf = requestAnimationFrame(sync);
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      window.addEventListener('touchmove', onScroll, { passive: true });
      sync();

      return () => {
        if (raf) cancelAnimationFrame(raf);
        window.removeEventListener('scroll', onScroll);
        window.removeEventListener('touchmove', onScroll);
        video.removeEventListener('loadedmetadata', handleMetadata);
      };
    }

    // --- Desktop path: frame-accurate scrub ----------------------------------
    video.pause();
    video.style.transformOrigin = 'center 45%';

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: 'bottom bottom',
      // Eased catch-up (~1s) so the footage glides with the scroll instead of
      // snapping — paired with the all-intra (every-frame-keyframe) encode of the
      // mp4, every seek lands on an exact frame, so the scrub reads buttery.
      scrub: 1,
      onUpdate: (self) => {
        const nextTime = Math.min(duration - 0.05, Math.max(0, duration * self.progress));
        // ~half a frame at 24fps: tight enough to track every frame, loose enough
        // to avoid re-seeking within the same frame (which causes decode thrash).
        if (Math.abs(video.currentTime - nextTime) > 0.02) {
          video.currentTime = nextTime;
        }

        if (!reduceMotion) {
          // Slow push-in keeps the static-ish desktop framing feeling forward.
          video.style.transform = `scale(${(1.1 - 0.1 * self.progress).toFixed(4)})`;
        }

        progress.style.transform = `scaleX(${self.progress})`;
        updateActiveScene(self.progress);
      },
    });

    updateActiveScene(0);

    return () => {
      video.removeEventListener('loadedmetadata', handleMetadata);
      trigger.kill();
    };
  }, [shouldLoadVideo]);

  const active = SCENES[activeScene];

  return (
    <section id="route-motion" ref={sectionRef} className="relative h-[340vh] bg-fa-liberty-blue text-fa-classic-chalk">
      <div className="sticky top-0 min-h-[100dvh] overflow-hidden">
        <div className="absolute inset-0">
          <video
            ref={videoRef}
            className="h-full w-full object-cover object-[38%_46%] will-change-transform lg:object-[center_60%]"
            src={shouldLoadVideo ? ROUTE_VIDEO_SRC : undefined}
            poster="/assets/scroll-route-van-poster.webp"
            preload={shouldLoadVideo ? 'auto' : 'none'}
            muted
            playsInline
            aria-hidden
          />
          {/* Side scrims keep the copy legible over the footage */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(13,18,50,0.9)_0%,rgba(13,18,50,0.34)_36%,rgba(13,18,50,0.16)_62%,rgba(13,18,50,0.86)_100%)]" />
          {/* Bottom anchor so the scene rail + progress card sit on solid ground.
              Kept short (transparent by ~32%) so the truck riding mid-frame isn't
              dimmed; the card carries its own backdrop-blur for legibility. */}
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(11,15,42,0.9)_0%,rgba(11,15,42,0.38)_13%,transparent_32%)]" />
          {/* Top fade smooths the seam from the hero */}
          <div className="absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(11,15,42,0.7)_0%,transparent_100%)]" />
          {/* Warm key glow on the truck + cinematic vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_46%,rgba(241,91,65,0.14),transparent_32%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(125%_125%_at_50%_42%,transparent_52%,rgba(7,10,30,0.62)_100%)]" />
        </div>

        <div className="relative z-[1] flex min-h-[100dvh] flex-col justify-between px-5 pt-16 pb-4 sm:px-8 sm:pb-6 lg:px-16 lg:py-20">
          {/* Mobile order: headline → fixed truck band → scrubber → card →
              flexible road spacer. The truck band is a FIXED height so the card's
              top edge is anchored: longer scenes grow the card DOWNWARD into the
              road spacer below instead of creeping up over the truck.
              On lg this becomes the 3-col grid (headline | spacer | card) with the
              scrubber spanning a full-width bottom row. */}
          <div className="flex flex-1 flex-col gap-3 lg:grid lg:grid-cols-[minmax(320px,0.9fr)_minmax(240px,0.8fr)_minmax(320px,0.72fr)] lg:grid-rows-[1fr_auto] lg:items-start lg:gap-x-8 lg:gap-y-0">
            <div className="order-1 max-w-[560px] pt-1 lg:col-start-1 lg:row-start-1 lg:pt-7">
              <SectionChip onDark>{isAr ? 'يوم في فاست أكسس' : 'A day at Fast Access'}</SectionChip>
              <h2 className="mt-3 font-display text-[25px] font-semibold leading-[1.02] tracking-[-0.025em] text-fa-classic-chalk sm:mt-5 sm:text-[50px] sm:leading-[0.98] lg:text-[68px]">
                {isAr ? (
                  <>
                    طلب الصباح...{' '}
                    <span className="text-fa-orange-soda">يوصل نفس اليوم</span>.
                  </>
                ) : (
                  <>
                    A morning order,{' '}
                    <span className="text-fa-orange-soda">delivered the same day</span>
                  </>
                )}
              </h2>
              <p className="mt-5 hidden max-w-[34rem] font-body text-[14px] leading-[1.75] text-fa-classic-chalk/68 sm:block sm:text-base">
                {isAr
                  ? 'هذي مو خطة توصيل، هذا يوم عادي في فاست أكسس. تابع رحلة طلب واحد من قبل الظهر إلى باب العميل.'
                  : 'This is not a delivery plan. It is an ordinary day at Fast Access. Follow one order from late morning to the customer\u2019s door.'}
              </p>
            </div>

            {/* Fixed truck band (mobile): clear air for the footage; its fixed
                height anchors the card top so the card grows downward, not up.
                Sized so the card's top sits BELOW the truck (which rides at ~58%
                of the frame) — keeping the truck visible the whole scroll. */}
            <div className="order-2 min-h-[150px] flex-1 lg:hidden" aria-hidden />

            <div className="hidden min-h-[50vh] lg:col-start-2 lg:row-start-1 lg:block" aria-hidden />

            <div className="route-active-panel order-4 w-full max-w-[390px] overflow-hidden border border-fa-classic-chalk/18 bg-fa-liberty-blue/78 p-3 sm:bg-fa-liberty-blue/58 shadow-[0_24px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl sm:p-5 lg:col-start-3 lg:row-start-1 lg:mt-20 lg:justify-self-end">
              <div key={activeScene} className="route-panel">
                <div className="route-panel__el flex items-center justify-between gap-4 border-b border-fa-classic-chalk/12 pb-2.5 sm:pb-4">
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.16em] text-fa-orange-soda">
                    {isAr ? active.time : active.timeEn}
                  </span>
                  <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] text-fa-classic-chalk/48">
                    <b className="text-fa-classic-chalk/70 tabular-nums">{String(activeScene + 1).padStart(2, '0')}</b>
                    <span className="mx-1 opacity-40">/</span>
                    {String(SCENES.length).padStart(2, '0')}
                    <span className="ms-2">· {active.label[lang]}</span>
                  </span>
                </div>
                <h3 className="route-panel__el mt-2.5 font-display text-[18px] font-semibold leading-[1.08] text-fa-classic-chalk sm:mt-5 sm:text-[28px] sm:leading-[1.05]">
                  {active.title[lang]}
                </h3>
                <p className="route-panel__el mt-1.5 line-clamp-2 font-body text-[12.5px] leading-[1.5] text-fa-classic-chalk/62 sm:mt-4 sm:line-clamp-none sm:text-sm sm:leading-[1.65]">
                  {active.detail[lang]}
                </p>
                <div className="route-panel__el mt-2.5 inline-flex items-center gap-2 border border-fa-orange-soda/35 bg-fa-orange-soda/12 px-3 py-1.5 font-ui text-[12px] font-semibold uppercase tracking-[0.12em] text-fa-classic-chalk sm:mt-6 sm:py-2">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-fa-orange-soda" />
                  {active.metric[lang]}
                </div>
              </div>
            </div>

            {/* Slim scrubber sits between the fixed truck band and the card; on lg
                it spans a full-width bottom row beneath the headline + card grid. */}
            <div className="order-3 pb-1 lg:col-span-3 lg:row-start-2 lg:mt-0">
              <div className="flex items-center gap-4 sm:gap-6">
              <span className="hidden whitespace-nowrap font-ui text-[10px] font-semibold uppercase tracking-[0.16em] text-fa-classic-chalk/55 sm:inline">
                {isAr ? 'تقدم المشهد' : 'Scenery scrub'}
              </span>
              <div className="relative flex-1">
                <div className="h-[3px] origin-left overflow-hidden rounded-full bg-fa-classic-chalk/16">
                  <div
                    ref={progressRef}
                    className="h-full origin-left scale-x-0 rounded-full bg-fa-orange-soda shadow-[0_0_12px_rgba(241,91,65,0.7)] will-change-transform"
                  />
                </div>
                {/* Scene ticks sit on the track at their scroll position */}
                {SCENES.map((scene, index) => (
                  <span
                    key={scene.label.en}
                    style={{ insetInlineStart: `${scene.progress * 100}%` }}
                    className={`absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full ring-2 ring-fa-liberty-blue/70 transition-colors duration-300 ${
                      index <= activeScene ? 'bg-fa-orange-soda' : 'bg-fa-classic-chalk/35'
                    }`}
                    aria-hidden
                  />
                ))}
              </div>
              <span className="font-ui text-[11px] font-semibold uppercase tracking-[0.14em] tabular-nums text-fa-classic-chalk/65">
                {isAr ? active.time : active.timeEn}
              </span>
            </div>
            </div>

            {/* Flexible road spacer (mobile): absorbs leftover height so the card
                above it grows downward into this space instead of pushing up. */}
            <div className="order-5 min-h-[4vh] flex-1 lg:hidden" aria-hidden />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes routePanelIn {
          from { opacity: 0; transform: translateY(16px); filter: blur(3px); }
          to   { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        .route-panel__el {
          animation: routePanelIn 620ms cubic-bezier(0.22, 1, 0.36, 1) both;
        }
        .route-panel__el:nth-child(1) { animation-delay: 0ms; }
        .route-panel__el:nth-child(2) { animation-delay: 70ms; }
        .route-panel__el:nth-child(3) { animation-delay: 130ms; }
        .route-panel__el:nth-child(4) { animation-delay: 190ms; }
        @media (prefers-reduced-motion: reduce) {
          .route-panel__el { animation: none; }
        }
      `}</style>
    </section>
  );
}
