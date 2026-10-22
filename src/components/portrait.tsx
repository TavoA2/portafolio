'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Portrait({ front, side }: { front: string; side: string }) {
  const [selected, setSelected] = useState(false);
  const [hovered, setHovered] = useState(false);
  const showingSide = selected || hovered;

  return <div className="interactive-portrait">
    <button
      type="button"
      className="portrait-frame portrait-toggle"
      aria-label="Show alternate portrait of Dixon G. Araya Arias"
      aria-pressed={selected}
      aria-describedby="portrait-instructions"
      data-side={showingSide}
      onPointerEnter={event => { if (event.pointerType === 'mouse') setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onClick={() => { setSelected(value => !value); setHovered(false); }}
      onKeyDown={event => { if (event.key === 'Escape') { setSelected(false); setHovered(false); } }}
    >
      <span className="sr-only">Portrait of Dixon G. Araya Arias</span>
      <Image src={front} alt="" aria-hidden="true" width={1186} height={1327} priority sizes="(max-width: 760px) 280px, 340px" className="portrait-image portrait-front"/>
      <Image src={side} alt="" aria-hidden="true" width={1087} height={1446} loading="eager" sizes="(max-width: 760px) 280px, 340px" className="portrait-image portrait-side"/>
      <span className="portrait-indicator" aria-hidden="true">{showingSide ? '02 / PROFILE' : '01 / FRONT'}</span>
    </button>
    <p id="portrait-instructions" className="portrait-instructions">Hover to explore · Tap or press Enter to switch</p>
  </div>;
}
