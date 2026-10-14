import React from 'react';
import { motion } from 'motion/react';
import heroCampaignPortraitImg from '../assets/images/hero_campaign_portrait_1791969043256.jpg';
import earStackProfileImg from '../assets/images/ear_stack_profile_crop_1791969045330.jpg';
import collarboneNecklaceImg from '../assets/images/collarbone_necklace_detail_1791969045068.jpg';
import threeQuarterHoopsImg from '../assets/images/three_quarter_hoops_portrait_1791969045157.jpg';
import handRingsBraceletImg from '../assets/images/hand_rings_bracelet_detail_1791969046474.jpg';
import halfbodyStreetImg from '../assets/images/halfbody_street_lifestyle_1791969046463.jpg';
import campaignWideCinematicImg from '../assets/images/campaign_wide_cinematic_1791969081881.jpg';

interface IphoneAngleStripProps {
  onSelectAngle?: (index: number) => void;
}

export const IphoneAngleStrip: React.FC<IphoneAngleStripProps> = () => {
  const snapshots = [
    { src: heroCampaignPortraitImg, label: 'White Shirt & Hoops', tag: '01' },
    { src: earStackProfileImg, label: 'Ear Stack Profile', tag: '02' },
    { src: collarboneNecklaceImg, label: 'Seed Pearl & Coin Chain', tag: '03' },
    { src: threeQuarterHoopsImg, label: 'Chunky Gold Hoops', tag: '04' },
    { src: handRingsBraceletImg, label: 'Stacked Rings & Bangle', tag: '05' },
    { src: halfbodyStreetImg, label: 'Everyday Street Styling', tag: '06' },
    { src: campaignWideCinematicImg, label: 'Golden Hour Glow', tag: '07' }
  ];

  return (
    <section className="bg-white pt-6 pb-2 border-b border-stone-200/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Caption Label */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-stone-400">
            CAMERA ROLL · SHOT ON IPHONE 15 · EVERYDAY ANGLES
          </span>
          <span className="text-[10px] text-stone-400 font-mono hidden sm:inline-block">
            AUTHENTIC PINTEREST AESTHETIC
          </span>
        </div>

        {/* Horizontal Scrollable Row matching User Reference Image 1:1 */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar pb-3">
          {snapshots.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative shrink-0 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-xs overflow-hidden border border-stone-200/90 shadow-2xs group cursor-pointer bg-stone-100"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <div className="absolute bottom-1 left-1.5 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[9px] font-medium text-white drop-shadow-sm truncate block">
                  {item.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
