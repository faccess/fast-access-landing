/**
 * KickerBar — editorial marquee between WhatIsFA and Services. Big display
 * type that scrolls "Store ★ Pack ★ Ship ★ Track ★ Deliver" continuously,
 * with the brand Package icon (Phosphor) in orange between verbs. Pauses on hover, reverses
 * under RTL, no animation under prefers-reduced-motion.
 *
 * Direct port of the design's <KickerBar/> — the "brand moment" of the page.
 */

import { useT } from '../i18n/I18nContext';

const verbsByLocale: Record<'en' | 'ar', string[]> = {
  en: ['Store', 'Pack', 'Ship', 'Track', 'Deliver'],
  ar: ['نخزّن', 'نجهّز', 'نشحن', 'نتتبع', 'نوصّل', 'خلّها علينا'],
};

/** Phosphor "Package" — the brand iconography set. Rendered in brand orange. */
function PackageMark() {
  return (
    <svg
      className="fa-kicker-star"
      viewBox="0 0 256 256"
      width={19}
      height={19}
      fill="currentColor"
      aria-hidden
    >
      <path d="M223.68,66.15,135.68,18a15.88,15.88,0,0,0-15.36,0l-88,48.17a16,16,0,0,0-8.32,14v95.64a16,16,0,0,0,8.32,14l88,48.17a15.88,15.88,0,0,0,15.36,0l88-48.17a16,16,0,0,0,8.32-14V80.18A16,16,0,0,0,223.68,66.15ZM128,32l80.34,44-29.77,16.3-80.35-44ZM128,120,47.66,76l33.9-18.56,80.34,44ZM40,90l80,43.78v85.79L40,175.82Zm176,85.78h0l-80,43.79V133.82l32-17.51V152a8,8,0,0,0,16,0V107.55L216,90v85.77Z" />
    </svg>
  );
}

export default function KickerBar() {
  const { locale } = useT();
  const verbs = verbsByLocale[locale];
  // Eight identical sets: the loop shifts by 50% (4 sets), so the other 4
  // must be wide enough to cover any viewport — no whitespace at the seam.
  const sets = [0, 1, 2, 3, 4, 5, 6, 7];

  return (
    <section className="fa-kicker-bar" aria-hidden>
      <div className="fa-kicker-track">
        {sets.map((s) => (
          <div key={s} className="fa-kicker-item">
            {verbs.map((v, i) => (
              <span key={`${s}-${i}`} className="fa-kicker-item">
                {v}
                <PackageMark />
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
