import Reveal from '../components/Reveal';
import { useT } from '../i18n/I18nContext';

type Platform =
  | { kind: 'text'; label: { ar: string; en: string }; weight: number; letter: string; color: string }
  | { kind: 'lockup'; name: string; icon: string; color: string; iconOnly?: boolean; vb?: string; svgClass?: string }
  | { kind: 'img'; name: string; src: string; h: number }
  | { kind: 'api' };

const ICONS: Record<string, string> = {
  shopify: 'M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z',
  woocommerce: 'M.754 9.58a.754.754 0 00-.754.758v2.525c0 .42.339.758.758.758h3.135l1.431.799-.326-.799h2.373a.757.757 0 00.758-.758v-2.525a.757.757 0 00-.758-.758H.754zm2.709.445h.03c.065.001.124.023.179.067a.26.26 0 01.103.19.29.29 0 01-.033.16c-.13.239-.236.64-.322 1.199-.083.541-.114.965-.094 1.267a.392.392 0 01-.039.219.213.213 0 01-.176.12c-.086.006-.177-.034-.263-.124-.31-.316-.555-.788-.735-1.416-.216.425-.375.744-.478.957-.196.376-.363.568-.502.578-.09.007-.166-.069-.233-.228-.17-.436-.352-1.277-.548-2.524a.297.297 0 01.054-.222c.047-.064.116-.095.21-.102.169-.013.265.065.288.238.103.695.217 1.284.336 1.766l.727-1.387c.066-.126.15-.192.25-.199.146-.01.237.083.273.28.083.441.188.817.315 1.136.086-.844.233-1.453.44-1.828a.255.255 0 01.218-.147zm1.293.36c.056 0 .116.006.18.02.232.05.411.177.53.386.107.18.161.395.161.654 0 .343-.087.654-.26.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.158-.659c0-.342.085-.655.258-.937.202-.333.462-.498.78-.498zm2.084 0c.056 0 .116.006.18.02.236.05.411.177.53.386.107.18.16.395.16.654 0 .343-.086.654-.259.94-.2.332-.459.5-.781.5a.88.88 0 01-.18-.022.763.763 0 01-.531-.384 1.287 1.287 0 01-.16-.659c0-.342.087-.655.26-.937.202-.333.462-.498.78-.498zm4.437.047c-.305 0-.546.102-.718.304-.173.203-.256.49-.256.856 0 .395.086.697.256.906.17.21.418.316.744.316.315 0 .559-.107.728-.316.17-.21.256-.504.256-.883s-.087-.673-.26-.879c-.176-.202-.424-.304-.75-.304zm-1.466.002a1.13 1.13 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.505.336.861.336.103 0 .22-.016.346-.052v-.54c-.117.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm12.414 0a1.135 1.135 0 00-.84.326c-.223.22-.332.499-.332.838 0 .362.108.658.328.88.22.223.506.336.861.336.103 0 .22-.016.346-.052v-.54c-.116.034-.216.051-.303.051a.545.545 0 01-.422-.177c-.106-.12-.16-.278-.16-.48 0-.19.053-.348.156-.468a.498.498 0 01.397-.181c.103 0 .212.015.332.049v-.537a1.394 1.394 0 00-.363-.045zm-9.598.06l-.29 2.264h.579l.156-1.559.395 1.559h.412l.379-1.555.164 1.555h.603l-.304-2.264h-.791l-.12.508c-.03.13-.06.264-.087.4l-.067.352a29.97 29.97 0 00-.258-1.26h-.771zm2.768 0l-.29 2.264h.579l.156-1.559.396 1.559h.412l.375-1.555.165 1.555h.603l-.305-2.264h-.789l-.119.508c-.03.13-.06.264-.086.4l-.066.352c-.063-.352-.15-.771-.26-1.26h-.771zm3.988 0v2.264h.611v-1.031h.012l.494 1.03h.645l-.489-1.019a.61.61 0 00.37-.552.598.598 0 00-.25-.506c-.167-.123-.394-.186-.68-.186h-.713zm3.377 0v2.264H24v-.483h-.63v-.414h.54v-.468h-.54v-.416h.626v-.483H22.76zm-4.793.004v2.264h1.24v-.483h-.627v-.416h.541v-.468h-.54v-.415h.622v-.482h-1.236zm2.025.432c.146.003.25.025.313.072.063.046.091.12.091.227 0 .156-.135.236-.404.24v-.54zm-15.22.011c-.104 0-.205.069-.301.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.016-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm2.083 0c-.103 0-.204.069-.3.211a1.078 1.078 0 00-.2.639c0 .096.02.2.06.303.049.13.117.198.196.215.083.016.173-.02.27-.106.123-.11.205-.273.252-.492.013-.077.023-.16.023-.246 0-.097-.02-.2-.06-.303-.05-.13-.116-.198-.196-.215a.246.246 0 00-.045-.006zm4.428.006c.233 0 .354.218.354.66-.004.273-.038.46-.098.553a.293.293 0 01-.262.139.266.266 0 01-.242-.139c-.056-.093-.084-.28-.084-.562 0-.436.11-.65.332-.65Z',
  magento: 'M12 24l-4.455-2.572v-12l2.97-1.715v12.001l1.485.902 1.485-.902V7.713l2.971 1.715v12L12 24zM22.391 6v12l-2.969 1.714V7.713L12 3.43 4.574 7.713v12.001L1.609 18V6L12 0l10.391 6z',
  amazon: 'M.045 18.02c.072-.116.187-.124.348-.022 3.636 2.11 7.594 3.166 11.87 3.166 2.852 0 5.668-.533 8.447-1.595l.315-.14c.138-.06.234-.1.293-.13.226-.088.39-.046.525.13.12.174.09.336-.12.48-.256.19-.6.41-1.006.654-1.244.743-2.64 1.316-4.185 1.726a17.617 17.617 0 01-10.951-.577 17.88 17.88 0 01-5.43-3.35c-.1-.074-.151-.15-.151-.22 0-.047.021-.09.051-.13zm6.565-6.218c0-1.005.247-1.863.743-2.577.495-.71 1.17-1.25 2.04-1.615.796-.335 1.756-.575 2.912-.72.39-.046 1.033-.103 1.92-.174v-.37c0-.93-.105-1.558-.3-1.875-.302-.43-.78-.65-1.44-.65h-.182c-.48.046-.896.196-1.246.46-.35.27-.575.63-.675 1.096-.06.3-.206.465-.435.51l-2.52-.315c-.248-.06-.372-.18-.372-.39 0-.046.007-.09.022-.15.247-1.29.855-2.25 1.82-2.88.976-.616 2.1-.975 3.39-1.05h.54c1.65 0 2.957.434 3.888 1.29.135.15.27.3.405.48.12.165.224.314.283.45.075.134.15.33.195.57.06.254.105.42.135.51.03.104.062.3.076.615.01.313.02.493.02.553v5.28c0 .376.06.72.165 1.036.105.313.21.54.315.674l.51.674c.09.136.136.256.136.36 0 .12-.06.226-.18.314-1.2 1.05-1.86 1.62-1.963 1.71-.165.135-.375.15-.63.045a6.062 6.062 0 01-.526-.496l-.31-.347a9.391 9.391 0 01-.317-.42l-.3-.435c-.81.886-1.603 1.44-2.4 1.665-.494.15-1.093.227-1.83.227-1.11 0-2.04-.343-2.76-1.034-.72-.69-1.08-1.665-1.08-2.94l-.05-.076zm3.753-.438c0 .566.14 1.02.425 1.364.285.34.675.512 1.155.512.045 0 .106-.007.195-.02.09-.016.134-.023.166-.023.614-.16 1.08-.553 1.424-1.178.165-.28.285-.58.36-.91.09-.32.12-.59.135-.8.015-.195.015-.54.015-1.005v-.54c-.84 0-1.484.06-1.92.18-1.275.36-1.92 1.17-1.92 2.43l-.035-.02zm9.162 7.027c.03-.06.075-.11.132-.17.362-.243.714-.41 1.05-.5a8.094 8.094 0 011.612-.24c.14-.012.28 0 .41.03.65.06 1.05.168 1.172.33.063.09.099.228.099.39v.15c0 .51-.149 1.11-.424 1.8-.278.69-.664 1.248-1.156 1.68-.073.06-.14.09-.197.09-.03 0-.06 0-.09-.012-.09-.044-.107-.12-.064-.24.54-1.26.806-2.143.806-2.64 0-.15-.03-.27-.087-.344-.145-.166-.55-.257-1.224-.257-.243 0-.533.016-.87.046-.363.045-.7.09-1 .135-.09 0-.148-.014-.18-.044-.03-.03-.036-.047-.02-.077 0-.017.006-.03.02-.063v-.06z',
};

/** Arabic wordmarks for the Saudi platforms; official marks + English names
 *  for the international ones; Jahez raster logo; Custom API lockup. */
const platforms: Platform[] = [
  { kind: 'text', label: { ar: 'سلة', en: 'Salla' }, weight: 700, letter: '-0.02em', color: '#00B68C' },
  { kind: 'text', label: { ar: 'زد', en: 'Zid' }, weight: 600, letter: '0.01em', color: '#5A2C85' },
  { kind: 'lockup', name: 'Shopify', icon: 'shopify', color: '#7AB55C' },
  { kind: 'lockup', name: 'WooCommerce', icon: 'woocommerce', color: '#96588A', iconOnly: true, vb: '0 9.3 24 5.4', svgClass: 'h-[26px] lg:h-[30px] w-auto shrink-0' },
  { kind: 'lockup', name: 'Magento', icon: 'magento', color: '#EE6723' },
  { kind: 'lockup', name: 'Amazon', icon: 'amazon', color: '#FF9900', iconOnly: true, vb: '0 1.1 24 21.8', svgClass: 'h-8 lg:h-9 w-auto shrink-0' },
  { kind: 'text', label: { ar: 'noon', en: 'noon' }, weight: 800, letter: '-0.03em', color: '#D4B800' },
  { kind: 'img', name: 'Jahez', src: '/brand/platforms/jahez.png', h: 30 },
  { kind: 'api' },
];

export default function TrustedBy() {
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  // Eight copies: the loop shifts by -50% (4 sets), so the remaining 4 must
  // cover any viewport width — keeps the seam invisible (no whitespace).
  const loop = Array.from({ length: 8 }, () => platforms).flat();

  return (
    <section id="integrations" className="bg-fa-cream py-16 lg:py-20 overflow-hidden">
      <div className="container-main">
        <Reveal>
          <h2 className="text-center text-[12px] font-semibold text-fa-ink-faint uppercase tracking-[0.16em] mb-10 font-body">
            {t('integrations.title')}
          </h2>
        </Reveal>
      </div>

      <Reveal
        // overflow-hidden + contain:paint clip the wide GPU-animated marquee
        // track here at its own wrapper; the mask only fades the edges, it does
        // not clip, so without this the track bleeds past and lets the whole page
        // scroll sideways into white space on iOS Safari.
        className="group relative overflow-hidden [contain:paint]"
        // soft fade on both edges so wordmarks dissolve instead of clipping
        style={{
          WebkitMaskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
          maskImage: 'linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)',
        }}
      >
        <div className="fa-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          {loop.map((p, i) => (
            <span
              key={i}
              className="fa-marquee__item inline-flex items-center gap-2.5 mx-8 lg:mx-12 cursor-default select-none transition-colors duration-300"
              style={{ color: '#0D1232' }}
              onMouseEnter={(e) => { const c = (p as any).color; if (c) e.currentTarget.style.color = c; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#0D1232'; }}
            >
              {p.kind === 'text' && (
                <span className="font-display text-[22px] lg:text-[26px]" style={{ fontWeight: p.weight, letterSpacing: p.letter }}>
                  {isAr && p.label.ar !== p.label.en ? p.label.ar : p.label.en}
                </span>
              )}
              {p.kind === 'lockup' && (
                <>
                  <svg
                    viewBox={p.vb ?? '0 0 24 24'}
                    className={p.svgClass ?? 'h-6 w-6 lg:h-7 lg:w-7 shrink-0'}
                    fill="currentColor"
                    role={p.iconOnly ? 'img' : undefined}
                    aria-label={p.iconOnly ? p.name : undefined}
                    aria-hidden={p.iconOnly ? undefined : true}
                  >
                    <path d={ICONS[p.icon]} />
                  </svg>
                  {!p.iconOnly && (
                    <span className="font-display text-[21px] lg:text-[25px] font-semibold" style={{ letterSpacing: '-0.02em' }}>{p.name}</span>
                  )}
                </>
              )}
              {p.kind === 'img' && (
                <img src={p.src} alt={p.name} style={{ height: p.h }} className="w-auto grayscale opacity-80" loading="lazy" />
              )}
              {p.kind === 'api' && (
                <>
                  <span className="font-ui text-[19px] lg:text-[22px] font-bold tracking-tight" aria-hidden>{'</>'}</span>
                  <span className="font-display text-[21px] lg:text-[25px] font-semibold" style={{ letterSpacing: '-0.02em' }}>Custom API</span>
                </>
              )}
            </span>
          ))}
        </div>
      </Reveal>

      <style>{`
        .fa-marquee {
          animation: fa-marquee-scroll 45s linear infinite;
          opacity: 0.55;
        }
        .fa-marquee:hover { opacity: 0.85; }
        .fa-marquee__item:hover { opacity: 1; }
        @keyframes fa-marquee-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        /* RTL: the w-max track anchors right and overflows left, so the LTR
           keyframes (0 → -50%) leave the viewport empty for most of the cycle.
           Dedicated keyframes keep the visible window covered at all times. */
        html[dir='rtl'] .fa-marquee { animation-name: fa-marquee-scroll-rtl; }
        @keyframes fa-marquee-scroll-rtl {
          from { transform: translateX(0); }
          to   { transform: translateX(50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .fa-marquee { animation: none; opacity: 0.5; flex-wrap: wrap; justify-content: center; }
        }
      `}</style>
    </section>
  );
}
