/**
 * TrackingModal — opens the Fast Access public tracking page (separate Vercel app)
 * inside an in-site popup (overlay + iframe), so visitors track shipments without
 * leaving the landing site. Falls back to a "open in new tab" link.
 */
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { useT } from '../i18n/I18nContext';

const TRACKING_BASE = 'https://tracking-three-brown.vercel.app';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function TrackingModal({ open, onClose }: Props) {
  const { locale } = useT();
  const isAr = locale === 'ar';
  const [loaded, setLoaded] = useState(false);

  // Close on Escape + lock body scroll while open
  useEffect(() => {
    if (!open) return;
    setLoaded(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const TRACKING_URL = isAr ? TRACKING_BASE : `${TRACKING_BASE}/track?lang=en`;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={isAr ? 'تتبع شحنتك' : 'Track your shipment'}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: 'rgba(13,18,50,0.72)', backdropFilter: 'blur(6px)' }}
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-[960px] h-[82vh] rounded-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
        {/* Header bar */}
        <div
          className="flex items-center justify-between px-5 py-3 shrink-0"
          style={{ backgroundColor: '#0D1232' }}
        >
          <span className="text-sm font-semibold text-white font-body">
            {isAr ? 'تتبع شحنتك' : 'Track your shipment'}
          </span>
          <div className="flex items-center gap-4">
            <a
              href={TRACKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[12px] text-white/60 hover:text-white transition-colors font-body"
            >
              {isAr ? 'فتح بصفحة مستقلة ↗' : 'Open in new tab ↗'}
            </a>
            <button
              onClick={onClose}
              aria-label={isAr ? 'إغلاق' : 'Close'}
              className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors text-lg leading-none"
            >
              ×
            </button>
          </div>
        </div>

        {/* Loading state */}
        {!loaded && (
          <div className="absolute inset-0 top-[52px] flex items-center justify-center bg-white">
            <div className="flex items-center gap-3 text-sm text-fa-ink-muted font-body">
              <span
                className="w-4 h-4 rounded-full border-2 animate-spin"
                style={{ borderColor: '#F15B41', borderTopColor: 'transparent' }}
              />
              {isAr ? 'جاري تحميل صفحة التتبع...' : 'Loading tracking page...'}
            </div>
          </div>
        )}

        {/* Tracking app */}
        <iframe
          src={TRACKING_URL}
          title={isAr ? 'تتبع شحنتك' : 'Track your shipment'}
          className="w-full flex-1 border-0"
          onLoad={() => setLoaded(true)}
        />
      </div>
    </div>,
    document.body
  );
}
