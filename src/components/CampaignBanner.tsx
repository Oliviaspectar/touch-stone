import React from 'react';
import { motion } from 'motion/react';
import campaignWideCinematicImg from '../assets/images/campaign_wide_cinematic_1791969081881.jpg';
import heroCampaignPortraitImg from '../assets/images/hero_campaign_portrait_1791969043256.jpg';
import threeQuarterHoopsImg from '../assets/images/three_quarter_hoops_portrait_1791969045157.jpg';
import collarboneNecklaceImg from '../assets/images/collarbone_necklace_detail_1791969045068.jpg';
import handRingsBraceletImg from '../assets/images/hand_rings_bracelet_detail_1791969046474.jpg';
import halfbodyStreetImg from '../assets/images/halfbody_street_lifestyle_1791969046463.jpg';

interface CampaignBannerProps {
  onShopCollection: () => void;
}

export const CampaignBanner: React.FC<CampaignBannerProps> = ({ onShopCollection }) => {
  const galleryImages = [
    { src: heroCampaignPortraitImg, alt: 'Everyday hoop earrings and delicate layered chain with crisp white shirt' },
    { src: collarboneNecklaceImg, alt: 'Layered seed pearl choker and gold coin pendant necklace on light blue shirt' },
    { src: threeQuarterHoopsImg, alt: 'Chunky polished gold hoops with clean black scoop-neck top' },
    { src: handRingsBraceletImg, alt: 'Stackable minimalist gold rings and delicate beaded bracelet' },
    { src: halfbodyStreetImg, alt: 'Candid everyday street style with floral shirt and subtle hoop earrings' }
  ];

  return (
    <div className="w-full">
      {/* Wide Cinematic Dark Banner */}
      <section className="relative w-full min-h-[460px] sm:min-h-[520px] lg:min-h-[580px] bg-stone-950 flex items-center justify-center overflow-hidden">
        
        {/* Background Model Image with Dark Vignette */}
        <div className="absolute inset-0">
          <img
            src={campaignWideCinematicImg}
            alt="Young South Asian woman wearing TOUCH STONE everyday jewellery at sunset"
            className="w-full h-full object-cover object-center opacity-70"
            loading="lazy"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/50 to-stone-950/75" />
        </div>

        {/* Centered Overlay Headline and Button with Cormorant Garamond */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-16">
          <motion.span
            initial={{ opacity: 0, y: -6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[11px] uppercase tracking-[0.28em] text-amber-200/90 font-mono font-medium block mb-4"
          >
            THE EVERYDAY CAPSULE · THANE WEST
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal uppercase tracking-wide text-white leading-[1.18] text-balance mb-8"
          >
            Find the pieces you will <span className="font-editorial italic lowercase text-amber-200">wear on repeat</span> with our lightweight everyday jewellery
          </motion.h2>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onClick={onShopCollection}
            className="px-8 py-3.5 bg-white text-stone-950 hover:bg-stone-100 text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-all shadow-lg hover:scale-105 cursor-pointer"
          >
            Shop Collection
          </motion.button>
        </div>

      </section>

      {/* 5-Image Lookbook Gallery Strip */}
      <section className="bg-[#FAF8F5] py-4 sm:py-6 border-b border-stone-200">
        <div className="w-full px-2 sm:px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3">
            {galleryImages.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative aspect-square overflow-hidden bg-stone-100 rounded-xs border border-stone-200/80 group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
