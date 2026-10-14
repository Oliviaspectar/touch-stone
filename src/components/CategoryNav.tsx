import React from 'react';
import earringsImg from '../assets/images/category_earrings_minimal_1791901280402.jpg';
import necklacesImg from '../assets/images/category_necklaces_delicate_1791901280503.jpg';
import braceletsImg from '../assets/images/category_bracelets_sleek_1791901280339.jpg';
import ringsImg from '../assets/images/category_rings_contemporary_1791901282721.jpg';
import { ArrowUpRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';

interface CategoryNavProps {
  onSelectCategory: (category: string) => void;
}

const CATEGORY_ITEMS = [
  {
    num: '01',
    id: 'earrings',
    title: 'Earrings',
    subtitle: 'Huggies, studs & drops',
    image: earringsImg,
    alt: 'Everyday gold and silver tone earrings on clean white backdrop'
  },
  {
    num: '02',
    id: 'necklaces',
    title: 'Necklaces',
    subtitle: 'Chains & subtle pendants',
    image: necklacesImg,
    alt: 'Delicate daily wear chains and pendants on crisp background'
  },
  {
    num: '03',
    id: 'bracelets',
    title: 'Bracelets',
    subtitle: 'Cuffs, bangles & links',
    image: braceletsImg,
    alt: 'Sleek everyday cuffs and bangles on neutral surface'
  },
  {
    num: '04',
    id: 'rings',
    title: 'Rings',
    subtitle: 'Stackable bands & bezels',
    image: ringsImg,
    alt: 'Contemporary stackable minimalist rings'
  }
];

export const CategoryNav: React.FC<CategoryNavProps> = ({ onSelectCategory }) => {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section title */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 pb-4 border-b border-stone-200/60 gap-3">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-stone-500 font-medium block mb-2">
              CURATED CATEGORIES · 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-950 font-normal tracking-tight">
              Explore By Form & Silhouette
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 max-w-sm leading-relaxed">
            Every category engineered for everyday proportion: comfortable clasp closures, balanced weight, and durable imitation finishes.
          </p>
        </div>

        {/* 4-column editorial grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORY_ITEMS.map((cat) => (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className="group text-left p-3 rounded-sm bg-[#FAF8F5] border border-stone-200/80 hover:border-stone-950 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-stone-950"
            >
              {/* Category Header with Num */}
              <div className="flex items-center justify-between text-[11px] text-stone-400 font-mono mb-2">
                <span>{cat.num} /</span>
                <span className="group-hover:text-stone-950 transition-colors flex items-center gap-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>

              {/* Photo Box */}
              <div className="relative aspect-square overflow-hidden bg-white border border-stone-200/70 rounded-xs mb-3.5">
                <img
                  src={cat.image}
                  alt={cat.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Label & Subtitle */}
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-lg font-normal text-stone-900 group-hover:text-stone-600 transition-colors">
                  {cat.title}
                </h3>
                <span className="text-[10px] text-stone-400 font-medium">
                  {PRODUCTS.filter((p) => p.category === cat.id).length} Pieces
                </span>
              </div>
              <p className="text-[11px] text-stone-500 mt-0.5">
                {cat.subtitle}
              </p>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
};
