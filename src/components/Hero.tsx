import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import heroCampaignPortraitImg from '../assets/images/hero_campaign_portrait_1791969043256.jpg';
import ringsCutoutImg from '../assets/images/category_rings_contemporary_1791901282721.jpg';
import { VibeType } from '../data/products';

interface HeroProps {
  onExploreCollection: (category?: string, vibe?: VibeType) => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreCollection }) => {
  return (
    <section className="relative w-full bg-white overflow-hidden border-b border-stone-200">
      
      {/* 2-Column Split Hero (Inspired by high-fashion Behance Jewelry E-Commerce reference) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[580px] lg:min-h-[660px]">
        
        {/* Left Side: Deep Burgundy Editorial Stage */}
        <div className="bg-[#460814] text-white p-8 sm:p-12 lg:p-16 flex flex-col justify-center items-center text-center relative overflow-hidden">
          
          {/* Subtle Ambient Radial Highlight */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.09)_0,transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
            
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/15 rounded-full mb-6 backdrop-blur-xs text-[11px] uppercase tracking-[0.22em] text-amber-200 font-medium"
            >
              <Sparkles className="w-3 h-3 text-amber-300" />
              <span>TOUCH STONE · EVERYDAY IMITATION</span>
            </motion.div>

            {/* Editorial Headline with Cormorant Garamond */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-wide uppercase leading-[1.08] mb-6 text-white"
            >
              Made for your<br />
              <span className="font-editorial italic lowercase font-light text-amber-100">everyday fits</span>
            </motion.h1>

            {/* Center Floating Jewellery Stage */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
              className="relative my-3 sm:my-5 group"
            >
              <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full bg-[#5A0C1B] border border-amber-300/30 p-2 shadow-2xl flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:border-amber-200/60">
                <img
                  src={ringsCutoutImg}
                  alt="TOUCH STONE signature handcrafted gold ring stack"
                  className="w-full h-full object-cover rounded-full transition-transform duration-700 group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>

            {/* Narrative Paragraph */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-stone-200 text-xs sm:text-sm leading-relaxed max-w-md mt-6 mb-8 font-light"
            >
              Jewellery designed for how young women actually live. Lightweight hoops, dainty chains, and stackable rings for college lectures, desk days, and spontaneous coffee runs.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex items-center gap-3"
            >
              <button
                onClick={() => onExploreCollection('all', 'all')}
                className="px-8 py-3.5 bg-white text-[#460814] hover:bg-stone-100 font-medium text-xs tracking-[0.16em] uppercase rounded-xs transition-all shadow-md hover:shadow-lg focus:outline-none flex items-center gap-2 group cursor-pointer"
              >
                <span>Shop Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>

          </div>

        </div>

        {/* Right Side: Natural Daylight Model Portrait */}
        <div className="relative min-h-[440px] lg:min-h-full bg-stone-100 overflow-hidden group">
          <img
            src={heroCampaignPortraitImg}
            alt="Young South Asian woman in a crisp white shirt wearing TOUCH STONE everyday hoop earrings and layered chain in natural daylight"
            className="w-full h-full object-cover object-center transition-transform duration-1000 group-hover:scale-103"
            loading="eager"
            referrerPolicy="no-referrer"
          />

          {/* Aesthetic Gradient Shading at Base */}
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />

          {/* Floating Influencer Look Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="absolute bottom-6 left-6 right-6 sm:left-auto sm:right-6 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xs border border-stone-200 shadow-md flex items-center justify-between gap-4 max-w-sm"
          >
            <div>
              <span className="text-[10px] uppercase tracking-widest font-mono text-stone-500 block">
                EVERYDAY EDIT
              </span>
              <p className="text-xs font-medium text-stone-900 mt-0.5">
                Classic Hoops & Layered Dainty Chain
              </p>
            </div>
            <button
              onClick={() => onExploreCollection('earrings', 'college')}
              className="text-[11px] font-semibold uppercase tracking-wider text-[#460814] hover:text-amber-800 underline underline-offset-4 whitespace-nowrap cursor-pointer"
            >
              View Pieces
            </button>
          </motion.div>
        </div>

      </div>

    </section>
  );
};
