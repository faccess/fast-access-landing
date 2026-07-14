import { useInView } from '../hooks/useInView';
import SectionChip from '../components/brand/SectionChip';
import RevealText from '../components/brand/RevealText';
import BrandPattern from '../components/brand/BrandPattern';
import { useT } from '../i18n/I18nContext';

/**
 * Coverage / Network map — simplified per client feedback ("make it simpler
 * and better looking: just the highlighted Kingdom and arrows out of it
 * showing international shipping; drop the live-operations data").
 *
 * No Leaflet, no tiles, no live counters. A self-contained SVG: the Saudi
 * Arabia outline highlighted in brand orange with one origin hub (Riyadh),
 * and animated shipping arrows fanning out to the world's regions.
 */

// ── Equirectangular projection tuned so the Kingdom sits centred in an
// 800×600 frame, leaving margins for the outbound arrows. Riyadh is the
// anchor point; longitude is cos-corrected at the Kingdom's mid-latitude.
const RX = 410;
const RY = 285;
const K = 20; // px per degree latitude
const KX = K * Math.cos((24.7136 * Math.PI) / 180); // px per degree longitude
const proj = (lat: number, lng: number): [number, number] => [
  RX + (lng - 46.6753) * KX,
  RY - (lat - 24.7136) * K,
];

// Simplified Saudi Arabia boundary ([lat, lng], Douglas–Peucker reduced).
const KSA_BOUNDARY: [number, number][] = [
  [32.155, 39.203], [31.501, 37.002], [30.501, 37.996], [29.998, 37.5], [29.869, 36.752],
  [29.185, 36.072], [29.355, 34.933], [27.941, 34.486], [27.737, 35.272], [25.923, 36.584],
  [25.572, 36.436], [25.26, 37.013], [24.242, 37.458], [23.483, 38.546], [22.584, 38.958],
  [21.974, 38.82], [20.977, 39.15], [19.467, 40.798], [18.151, 41.418], [17.387, 42.237],
  [16.42, 42.731], [16.647, 43.215], [17.524, 43.292], [17.288, 46.752], [16.957, 47.181],
  [18.167, 48.186], [18.62, 49.114], [19.0, 52.0], [20.002, 54.998], [22.002, 55.665],
  [22.706, 55.213], [22.94, 52.581], [24.257, 51.59], [24.317, 51.332], [24.64, 51.467],
  [24.545, 50.929], [26.04, 50.028], [26.154, 50.238], [26.686, 50.146], [26.962, 49.73],
  [27.311, 49.709], [27.369, 49.481], [27.159, 49.434], [27.512, 49.286], [27.677, 48.884],
  [28.495, 48.512], [28.524, 47.704], [29.0, 47.466], [29.203, 44.72], [31.12, 42.079],
  [31.945, 40.424], [32.155, 39.203],
];

const KSA_PATH =
  KSA_BOUNDARY.map(([lat, lng], i) => {
    const [x, y] = proj(lat, lng);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(' ') + ' Z';

// The three main regional hubs. Outbound arrows emanate from whichever hub
// faces the destination, so the read is "three regions, out to the world".
type Hub = { x: number; y: number; lx: number; ly: number; anchor: 'start' | 'middle' | 'end'; en: string; ar: string };
const mkHub = (lat: number, lng: number, ldx: number, ldy: number, anchor: Hub['anchor'], en: string, ar: string): Hub => {
  const [x, y] = proj(lat, lng);
  return { x, y, lx: x + ldx, ly: y + ldy, anchor, en, ar };
};
const HUBS: Record<'jed' | 'ryd' | 'dmm', Hub> = {
  jed: mkHub(21.5433, 39.1728, 0, 20, 'middle', 'Jeddah', 'جدة'),
  ryd: mkHub(24.7136, 46.6753, 12, 4, 'start', 'Riyadh', 'الرياض'),
  dmm: mkHub(26.4207, 50.0888, 0, -13, 'middle', 'Dammam', 'الدمام'),
};

// Outbound shipping arrows — each fans from a hub toward a world region.
type Arrow = {
  from: 'jed' | 'ryd' | 'dmm';
  x: number; y: number; lx: number; ly: number;
  anchor: 'start' | 'middle' | 'end';
  en: string; ar: string;
};
const ARROWS: Arrow[] = [
  { from: 'jed', x: 150, y: 150, lx: 150, ly: 128, anchor: 'middle', en: 'Europe', ar: 'أوروبا' },
  { from: 'jed', x: 100, y: 300, lx: 94, ly: 300, anchor: 'end', en: 'Americas', ar: 'الأمريكتان' },
  { from: 'jed', x: 175, y: 505, lx: 175, ly: 528, anchor: 'middle', en: 'Africa', ar: 'أفريقيا' },
  { from: 'ryd', x: 400, y: 58, lx: 400, ly: 42, anchor: 'middle', en: 'Türkiye', ar: 'تركيا' },
  { from: 'dmm', x: 560, y: 515, lx: 560, ly: 537, anchor: 'middle', en: 'South Asia', ar: 'جنوب آسيا' },
  { from: 'dmm', x: 720, y: 322, lx: 712, ly: 322, anchor: 'end', en: 'East Asia', ar: 'شرق آسيا' },
];

// Gentle quadratic arc from a hub origin to an outbound endpoint.
function arrowPath(ox: number, oy: number, ex: number, ey: number): string {
  const mx = (ox + ex) / 2;
  const my = (oy + ey) / 2;
  const dx = ex - ox;
  const dy = ey - oy;
  const cx = mx - dy * 0.1;
  const cy = my + dx * 0.1;
  return `M${ox.toFixed(1)} ${oy.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${ex} ${ey}`;
}

const ACCENT = '#F15B41';

export default function Coverage() {
  const { ref, isInView } = useInView(0.15);
  const { t, locale } = useT();
  const isAr = locale === 'ar';
  const lang: 'en' | 'ar' = isAr ? 'ar' : 'en';

  // High-level reach — no live counts, just the coverage story.
  const stats = [
    { value: isAr ? 'السعودية' : 'KSA', label: isAr ? 'تغطية وطنية، كل المدن الرئيسية' : 'Nationwide — every major city' },
    { value: isAr ? 'الخليج' : 'GCC', label: isAr ? 'شحن سريع لجميع دول الخليج' : 'Fast shipping to all GCC countries' },
    { value: isAr ? 'دولي' : 'Global', label: isAr ? 'شحنات دولية عبر شركاء موثوقين' : 'International shipments worldwide' },
  ];

  return (
    <section id="network" ref={ref} className="bg-fa-liberty-blue section-padding relative overflow-hidden">
      <BrandPattern
        pattern="isometric"
        tint="orange"
        opacity={0.06}
        className="absolute -top-[10%] -right-[15%] w-[70%] max-w-[1100px]"
      />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
          {/* LEFT — copy + reach */}
          <div>
            <div className="mb-4" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 500ms ease-out' }}>
              <SectionChip onDark>{t('coverage.chip')}</SectionChip>
            </div>
            <h2 className="font-display font-bold text-[32px] sm:text-[40px] lg:text-[52px] text-fa-classic-chalk leading-[1.05] tracking-[-0.02em]" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 600ms ease-out 100ms' }}>
              <RevealText accent={t('coverage.headlineHighlight')} stagger={50}>
                {`${t('coverage.headlineA')} ${t('coverage.headlineHighlight')} ${t('coverage.headlineB')}`}
              </RevealText>
            </h2>
            <p className="font-body mt-5 text-base text-fa-classic-chalk/60 max-w-[480px] leading-[1.65]" style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 500ms ease-out 200ms' }}>
              {t('coverage.body')}
            </p>

            {/* Reach stats */}
            <div className="grid grid-cols-3 gap-6 mt-9 pt-8 border-t border-fa-classic-chalk/10 max-w-[560px]" style={{ opacity: isInView ? 1 : 0, transition: 'opacity 600ms ease-out 300ms' }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <div className={`font-display font-semibold ${isAr ? 'text-[26px] lg:text-[30px]' : 'text-[34px] lg:text-[38px]'} text-fa-classic-chalk leading-none tracking-[-0.02em]`}>
                    {s.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold text-fa-classic-chalk/55 uppercase tracking-[0.08em] font-body leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — highlighted Kingdom + outbound arrows */}
          <div style={{ opacity: isInView ? 1 : 0, transform: isInView ? 'translateY(0)' : 'translateY(40px)', transition: 'all 800ms ease-out 200ms' }}>
            <div className="fa-netmap-frame">
              <svg
                viewBox="0 0 760 560"
                className="w-full h-auto block"
                style={{ direction: 'ltr' }}
                role="img"
                aria-label={isAr ? 'خريطة تغطية: السعودية والخليج وشحن دولي' : 'Coverage map: Saudi Arabia, the GCC, and international shipping'}>
                <defs>
                  {/* KSA brand gradient */}
                  <radialGradient id="ksaFill" cx="45%" cy="42%" r="75%">
                    <stop offset="0%" stopColor="#F15B41" stopOpacity="0.55" />
                    <stop offset="55%" stopColor="#F15B41" stopOpacity="0.30" />
                    <stop offset="100%" stopColor="#F15B41" stopOpacity="0.12" />
                  </radialGradient>
                  <filter id="glowLine" x="-40%" y="-40%" width="180%" height="180%">
                    <feGaussianBlur stdDeviation="2.2" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                  <filter id="glowDot" x="-80%" y="-80%" width="260%" height="260%">
                    <feGaussianBlur stdDeviation="3" result="b" />
                    <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                </defs>

                {/* ── GCC countries (secondary layer) ── */}
                <g fill="rgba(244,244,241,0.05)" stroke="rgba(244,244,241,0.28)" strokeWidth="1">
                  <path d="M393.6,82.1L399.5,95.9L397.0,103.1L406.2,126.7L386.0,127.5L378.9,112.6L353.4,109.6L374.4,79.5L393.6,82.1Z" />
                  <path d="M474.6,245.6L472.7,222.8L480.4,206.4L488.2,203.0L496.8,212.8L497.3,231.1L491.1,249.5L483.2,251.8L474.6,245.6Z" />
                  <path d="M496.6,261.5L501.6,260.0L502.7,268.6L525.1,263.6L548.7,264.4L565.9,265.4L585.5,244.2L606.8,224.1L624.9,204.8L630.3,215.5L634.2,240.2L619.6,240.4L617.3,260.7L622.3,265.1L609.4,271.3L609.3,284.0L601.0,297.0L600.2,309.6L594.5,316.2L508.6,300.4L497.6,268.7L496.6,261.5Z" />
                  <path d="M704.6,359.5L693.9,380.9L681.0,379.3L675.0,386.8L670.5,402.6L674.0,423.6L671.3,427.4L658.1,427.3L640.3,439.0L637.5,454.2L631.0,460.9L613.2,460.6L602.0,468.5L602.1,481.1L588.3,489.8L572.6,486.9L553.4,497.4L540.2,499.2L530.9,477.3L508.6,425.7L594.3,394.4L613.3,331.8L600.2,309.6L601.0,297.0L609.3,284.0L609.4,271.3L622.3,265.1L617.3,260.7L619.6,240.4L634.2,240.2L647.0,261.6L663.0,273.0L683.9,277.1L700.8,282.8L713.7,300.7L721.4,311.1L731.7,315.1L731.6,322.1L721.2,340.7L716.6,349.5L704.6,359.5Z M634.0,209.8L630.3,215.5L624.9,204.8L633.2,194.2L636.7,196.9L634.0,209.8Z" />
                  <ellipse cx="464.0" cy="221.0" rx="4.5" ry="7" />
                </g>

                {/* ── Saudi Arabia (hero layer) ── */}
                <path d="M245.1,508.7L241.4,495.3L232.8,485.9L230.6,473.4L215.8,462.2L200.6,436.0L192.6,410.4L172.8,388.9L160.0,383.8L141.1,353.9L137.8,332.2L139.0,313.6L122.7,278.9L109.3,266.7L93.8,260.2L84.4,242.3L86.0,235.2L78.0,219.0L69.7,212.0L58.5,188.7L41.1,163.5L26.6,142.0L12.4,142.1L16.8,125.0L18.1,114.0L21.6,101.5L53.4,106.5L65.7,96.9L72.6,85.6L94.4,81.3L99.1,70.8L108.5,65.5L80.1,34.2L137.3,18.5L142.7,13.7L177.1,22.2L219.7,44.1L300.3,107.1L353.4,109.6L378.9,112.6L386.0,127.5L406.2,126.7L417.4,153.7L431.4,160.8L436.3,171.8L455.8,185.0L457.5,197.9L454.7,208.3L458.3,218.8L466.5,227.6L470.3,237.9L474.6,245.6L483.2,251.8L491.1,249.5L496.6,261.5L497.6,268.7L508.6,300.4L594.5,316.2L600.2,309.6L613.3,331.8L594.3,394.4L508.6,425.7L426.2,437.7L399.5,451.8L379.0,484.6L365.7,489.8L358.6,479.4L347.6,481.0L320.0,477.8L314.8,474.7L281.8,475.4L274.0,478.3L262.3,470.1L254.7,485.5L257.7,498.7L245.1,508.7Z" fill="url(#ksaFill)" stroke="#F15B41" strokeWidth="1.6" strokeLinejoin="round" />

                {/* ── GCC routes: all radiating from Riyadh (strong, glowing) ── */}
                <g stroke="#F15B41" strokeWidth="1.6" fill="none" opacity="0.85" filter="url(#glowLine)" strokeLinecap="round">
                  <path d="M356.6,247.0 Q375.0,152.05 393.4,101.1" />
                  <path d="M356.6,247.0 Q409.0,212.0 464.5,219.0" />
                  <path d="M356.6,247.0 Q425.85,222.05 495.1,229.1" />
                  <path d="M356.6,247.0 Q479.3,205.3 602.0,231.6" />
                  <path d="M356.6,247.0 Q524.0,212.2 691.4,281.4" />
                </g>

                {/* ── nationwide coverage dots (unlabeled) ── */}
                <g fill="#F4F4F1" opacity="0.75">
                  <circle cx="154.6" cy="254.5" r="3" /><circle cx="160.9" cy="349.9" r="3" /><circle cx="237.1" cy="450.1" r="3" /><circle cx="67.7" cy="132.1" r="3" /><circle cx="214.3" cy="159.0" r="3" /><circle cx="279.1" cy="196.2" r="3" /><circle cx="238.6" cy="491.4" r="3" /><circle cx="335.7" cy="130.5" r="3" />
                </g>

                {/* ── GCC capital dots ── */}
                <g fill="#F4F4F1" opacity="0.9">
                  <circle cx="393.4" cy="101.1" r="3.4" /><circle cx="464.5" cy="219.0" r="3.4" /><circle cx="495.1" cy="229.1" r="3.4" /><circle cx="602.0" cy="231.6" r="3.4" /><circle cx="691.4" cy="281.4" r="3.4" />
                </g>

                {/* ── main operational hubs ── */}
                <g filter="url(#glowDot)">
                  <circle cx="356.6" cy="247.0" r="6.5" fill="#F15B41" /><circle cx="356.6" cy="247.0" r="2.6" fill="#F4F4F1" /><circle cx="142.6" cy="347.7" r="6.5" fill="#F15B41" /><circle cx="142.6" cy="347.7" r="2.6" fill="#F4F4F1" /><circle cx="454.3" cy="193.1" r="6.5" fill="#F15B41" /><circle cx="454.3" cy="193.1" r="2.6" fill="#F4F4F1" />
                </g>

                {/* ── labels ── */}
                <g fontFamily="inherit" fontSize="15" fontWeight="700" fill="#F4F4F1">
                  <text x="342" y="253" textAnchor="end">{isAr ? 'الرياض' : 'Riyadh'}</text>
                  <text x="128" y="352" textAnchor="end">{isAr ? 'جدة' : 'Jeddah'}</text>
                  <text x="454" y="174" textAnchor="middle">{isAr ? 'الدمام' : 'Dammam'}</text>
                </g>
                <g fontFamily="inherit" fontSize="12" fontWeight="600" fill="rgba(244,244,241,0.62)">
                  <text x="294.3" y="300.5" textAnchor="middle" fontSize="16" fontWeight="700" fill="rgba(244,244,241,0.8)">{isAr ? 'السعودية' : 'Saudi Arabia'}</text>
                  <text x="382.9" y="84.5" textAnchor="middle">{isAr ? 'الكويت' : 'Kuwait'}</text>
                  <text x="456" y="225" textAnchor="end">{isAr ? 'البحرين' : 'Bahrain'}</text>
                  <text x="486" y="196" textAnchor="middle">{isAr ? 'قطر' : 'Qatar'}</text>
                  <text x="572" y="265" textAnchor="middle">{isAr ? 'الإمارات' : 'UAE'}</text>
                  <text x="655" y="408" textAnchor="middle">{isAr ? 'عُمان' : 'Oman'}</text>
                </g>

                {/* ── world inset: international coverage (tertiary) ── */}
                <g transform="translate(14, 388)">
                  <rect x="0" y="0" width="236" height="156" rx="14" fill="rgba(13,18,50,0.55)" stroke="rgba(244,244,241,0.14)" strokeWidth="1" />
                  <text x="118" y="24" textAnchor="middle" fontSize="11.5" fontWeight="700" fill="rgba(244,244,241,0.7)">{isAr ? 'تغطية دولية عبر شركاء موثوقين' : 'International via trusted partners'}</text>
                  {/* mini abstract world: KSA node + dotted routes */}
                  <circle cx="118" cy="102" r="5" fill="#F15B41" filter="url(#glowDot)" />
                  <g stroke="rgba(241,91,65,0.55)" strokeWidth="1.1" strokeDasharray="2.5 4" fill="none" strokeLinecap="round">
                    <path d="M118,102 Q106,88 88,74" />
                    <path d="M118,102 Q84,72 46,52" />
                    <path d="M118,102 Q160,84 192,62" />
                  </g>
                  <g fill="rgba(244,244,241,0.72)" fontSize="10.5" fontWeight="600">
                    <circle cx="88" cy="74" r="2.6" /><text x="88" y="62" textAnchor="middle">{isAr ? 'تركيا' : 'Turkey'}</text>
                    <circle cx="46" cy="52" r="2.6" /><text x="50" y="40" textAnchor="middle">{isAr ? 'أوروبا' : 'Europe'}</text>
                    <circle cx="192" cy="62" r="2.6" /><text x="192" y="50" textAnchor="middle">{isAr ? 'شرق آسيا' : 'East Asia'}</text>
                  </g>
                  <text x="118" y="138" textAnchor="middle" fontSize="10" fill="rgba(244,244,241,0.45)">{isAr ? '+220 دولة' : '220+ countries'}</text>
                </g>
              </svg>
              <div className="fa-netmap-vignette" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
