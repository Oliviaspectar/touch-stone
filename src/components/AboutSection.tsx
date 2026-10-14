import React from 'react';
import { Sparkles, Heart, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-medium block mb-2">
            The Philosophy
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 tracking-tight mb-4">
            Jewellery Made for Real Everyday Life
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm leading-relaxed max-w-2xl mx-auto">
            TOUCH STONE was created around a simple belief: jewellery does not have to be heavy, intimidating, or reserved only for wedding receptions. We curate imitation jewellery designed specifically for women aged 18 to 30 navigating college, work, weekend outings, and personal styling.
          </p>
        </div>

        {/* 3 restrained pillars (Clean unboxed typography) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto pt-4">
          
          <div className="text-left p-5 border border-zinc-100 rounded-sm bg-zinc-50/50">
            <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
              01 · Styling
            </span>
            <h3 className="text-sm font-medium text-zinc-900 mb-2">
              Modern & Approachable
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Clean silhouettes, balanced proportions, and effortless pairing. Pieces that sit naturally with western shirts, oversized blazers, kurtas, and casual denims.
            </p>
          </div>

          <div className="text-left p-5 border border-zinc-100 rounded-sm bg-zinc-50/50">
            <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
              02 · Wearability
            </span>
            <h3 className="text-sm font-medium text-zinc-900 mb-2">
              All-Day Lightweight Comfort
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              We prioritize comfortable weight distribution so hoop earrings, daily studs, and delicate chains can be worn for 10+ hours without ear fatigue.
            </p>
          </div>

          <div className="text-left p-5 border border-zinc-100 rounded-sm bg-zinc-50/50">
            <span className="text-[11px] font-mono uppercase text-zinc-400 block mb-1">
              03 · Transparency
            </span>
            <h3 className="text-sm font-medium text-zinc-900 mb-2">
              Direct Community Service
            </h3>
            <p className="text-xs text-zinc-600 leading-relaxed">
              Based in Lokmanya Nagar, Thane West. You can consult directly with us over WhatsApp, request video previews, or visit our physical store in person.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
