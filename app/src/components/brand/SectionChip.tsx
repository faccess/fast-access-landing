/**
 * SectionChip — small orange-dot pill used as eyebrow above every section
 * heading (brandbook pg 56: "Introduction", "Logo", "Colors", "Typeface",
 * "Visual Elements", "Brand Applications").
 */

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onDark?: boolean;
  className?: string;
}

export default function SectionChip(_props: Props) {
  // Per brand review (July 2026): section titles must stand alone —
  // the eyebrow chips above headings were removed site-wide.
  return null;
}
