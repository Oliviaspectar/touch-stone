import React from 'react';
import { Sparkles } from 'lucide-react';

export const MarqueeTicker: React.FC = () => {
  const items = [
    'ELEGANT · MODERN · EXQUISITE',
    'LIGHTWEIGHT FOR 10+ HOUR COMFORT',
    'COLLEGE & WORKDAY STYLING',
    'DIRECT WHATSAPP ENQUIRIES',
    'BOUTIQUE IN LOKMANYA NAGAR, THANE WEST',
    'CONTEMPORARY IMITATION FINISHES',
    'ZERO HEAVY COMPLICATIONS',
    'EVERYDAY JEWELLERY CAPSULE'
  ];

  return (
    <div className="bg-stone-900 text-stone-100 py-2.5 overflow-hidden border-y border-stone-800 text-[11px] tracking-[0.25em] uppercase font-medium select-none">
      <div className="animate-marquee flex items-center gap-8 whitespace-nowrap">
        {/* First repetition */}
        {items.map((item, idx) => (
          <div key={`m1-${idx}`} className="flex items-center gap-8 shrink-0">
            <span>{item}</span>
            <span className="text-amber-400">✦</span>
          </div>
        ))}
        {/* Second repetition for seamless looping */}
        {items.map((item, idx) => (
          <div key={`m2-${idx}`} className="flex items-center gap-8 shrink-0">
            <span>{item}</span>
            <span className="text-amber-400">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
};
