import React from 'react';
import { Bookmark, ShoppingBag, Eye } from 'lucide-react';
import { Product } from '../data/products';

interface BestSellersProps {
  products: Product[];
  shortlistedIds: string[];
  onToggleShortlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onExploreCollection: () => void;
  onQuickAddToBag?: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  shortlistedIds,
  onToggleShortlist,
  onSelectProduct,
  onExploreCollection,
  onQuickAddToBag
}) => {
  // 4 curated best seller pieces featuring different real iPhone 15 angles
  const hoopEarrings = products.find((p) => p.id === 'ts-101') || products[0];
  const coinNecklace = products.find((p) => p.id === 'ts-102') || products[1];
  const mirrorSelfieSet = products.find((p) => p.id === 'ts-127') || products[products.length - 1];
  const daisyPendant = products.find((p) => p.id === 'ts-118') || products[3];

  const featuredPieces = [
    { product: hoopEarrings, angleTag: 'EAR CLOSE-UP' },
    { product: coinNecklace, angleTag: 'COLLARBONE ANGLE' },
    { product: mirrorSelfieSet, angleTag: 'MIRROR SELFIE' },
    { product: daisyPendant, angleTag: 'HAND ON DAISIES' }
  ];

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching user reference image screenshot */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-8 pb-3 border-b border-stone-100 gap-3">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.06em] uppercase text-stone-950">
              YOU’D LOOK GOOD IN THESE
            </h2>
            <p className="text-stone-500 text-xs sm:text-sm mt-1">
              Real everyday angles on college fits, casual tees, and morning sun.
            </p>
          </div>

          <button
            onClick={onExploreCollection}
            className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-900 hover:text-stone-600 underline underline-offset-4 transition-colors shrink-0 cursor-pointer"
          >
            Explore All Pieces
          </button>
        </div>

        {/* 4-Item Grid matching Reference with authentic iPhone 15 angles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {featuredPieces.map(({ product, angleTag }) => {
            const isBookmarked = shortlistedIds.includes(product.id);
            return (
              <div key={product.id} className="flex flex-col group text-left">
                <div 
                  onClick={() => onSelectProduct(product)}
                  className="relative aspect-square w-full overflow-hidden bg-[#F5F2EB] rounded-xs cursor-pointer border border-stone-200/80 shadow-2xs group-hover:border-stone-950 transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />

                  {/* Real Angle Tag Badge (Top Left) */}
                  <div className="absolute top-2.5 left-2.5 pointer-events-none">
                    <span className="text-[9px] uppercase tracking-widest font-mono font-medium px-2 py-0.5 rounded-[2px] bg-white/90 text-stone-800 shadow-2xs backdrop-blur-xs">
                      {angleTag}
                    </span>
                  </div>

                  {/* Bookmark Button (Top Right) */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onToggleShortlist(product);
                    }}
                    className={`absolute top-2.5 right-2.5 p-1.5 rounded-sm shadow-2xs transition-colors backdrop-blur-xs focus:outline-none ${
                      isBookmarked
                        ? 'bg-[#4A0E17] text-white'
                        : 'bg-white/80 hover:bg-white text-stone-700'
                    }`}
                    aria-label={`Bookmark ${product.name}`}
                  >
                    <Bookmark
                      className="w-3.5 h-3.5"
                      fill={isBookmarked ? 'currentColor' : 'none'}
                      strokeWidth={1.75}
                    />
                  </button>

                  {/* Quick Action Hover Bar */}
                  <div className="absolute inset-x-2 bottom-2.5 flex gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                    {onQuickAddToBag && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onQuickAddToBag(product);
                        }}
                        className="flex-1 py-1.5 bg-[#4A0E17] hover:bg-[#5C121D] text-white text-[10px] font-semibold tracking-wider uppercase rounded-xs shadow-md transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>Quick Bag</span>
                      </button>
                    )}

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product);
                      }}
                      className="p-1.5 bg-white text-stone-900 rounded-xs shadow-md hover:bg-stone-100 transition-colors cursor-pointer"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>

                {/* Card Info */}
                <div className="pt-3">
                  <div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-stone-400 mb-1 font-mono">
                    <span>{product.category}</span>
                    <span className="text-stone-500 font-sans normal-case">Comfort Fit</span>
                  </div>
                  <p 
                    onClick={() => onSelectProduct(product)}
                    className="font-serif text-sm sm:text-[15px] font-medium text-stone-900 group-hover:text-stone-600 transition-colors line-clamp-1 cursor-pointer"
                  >
                    {product.name}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-stone-950 mt-1 tabular-nums">
                    ₹{product.price?.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
