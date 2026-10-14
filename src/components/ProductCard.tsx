import React, { useState } from 'react';
import { Bookmark, ShoppingBag, Eye, Share2, Sparkles, Check } from 'lucide-react';
import { Product } from '../data/products';
import { createFriendShareWhatsAppUrl } from '../data/business';

interface ProductCardProps {
  product: Product;
  isShortlisted: boolean;
  onToggleShortlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag?: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isShortlisted,
  onToggleShortlist,
  onSelectProduct,
  onQuickAddToBag
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [justAdded, setJustAdded] = useState(false);
  const friendShareUrl = createFriendShareWhatsAppUrl(product);

  const getBadgeStyle = (tone?: 'butter' | 'linen' | 'blush' | 'matcha') => {
    switch (tone) {
      case 'butter':
        return 'bg-amber-100 text-amber-900 border-amber-200/90 shadow-2xs';
      case 'matcha':
        return 'bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-2xs';
      case 'blush':
        return 'bg-rose-50 text-rose-800 border-rose-200/80 shadow-2xs';
      case 'linen':
      default:
        return 'bg-stone-100 text-stone-800 border-stone-200 shadow-2xs';
    }
  };

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onQuickAddToBag) {
      onQuickAddToBag(product);
      setJustAdded(true);
      setTimeout(() => setJustAdded(false), 1800);
    } else {
      onSelectProduct(product);
    }
  };

  // Determine secondary image to flip to on hover
  const displayImage = isHovered && product.secondaryImage ? product.secondaryImage : product.image;

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group flex flex-col relative text-left bg-white border border-stone-200/70 rounded-xs p-2.5 sm:p-3 transition-all duration-300 hover:border-stone-900 hover:shadow-md"
    >
      
      {/* Product Image Stage with smooth hover angle flip */}
      <div 
        onClick={() => onSelectProduct(product)}
        className="relative aspect-square w-full overflow-hidden bg-[#FAF8F5] border border-stone-100 rounded-xs cursor-pointer"
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
          referrerPolicy="no-referrer"
        />

        {/* Soft Sticker Badge (Pinterest moodboard cue) */}
        {product.badge && (
          <div className="absolute top-2.5 left-2.5 pointer-events-none">
            <span
              className={`inline-block text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-[2px] border ${getBadgeStyle(
                product.badge.tone
              )} rotate-[-1deg]`}
            >
              {product.badge.label}
            </span>
          </div>
        )}

        {/* Action Controls Cluster: Bookmark & WhatsApp Share */}
        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 z-10">
          {/* Share with Friend on WhatsApp Button */}
          <a
            href={friendShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="p-1.5 rounded-xs bg-white/95 hover:bg-white text-stone-600 hover:text-stone-900 shadow-2xs transition-colors backdrop-blur-xs"
            title="Share with a bestie"
            aria-label={`Share ${product.name}`}
          >
            <Share2 className="w-3.5 h-3.5" strokeWidth={1.8} />
          </a>

          {/* Shortlist Bookmark Toggle */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onToggleShortlist(product);
            }}
            className={`p-1.5 rounded-xs shadow-2xs backdrop-blur-xs transition-colors focus:outline-none ${
              isShortlisted
                ? 'bg-[#4A0E17] text-white'
                : 'bg-white/95 text-stone-600 hover:text-stone-950 hover:bg-white'
            }`}
            aria-label={isShortlisted ? `Remove ${product.name}` : `Save ${product.name}`}
          >
            <Bookmark
              className="w-3.5 h-3.5"
              fill={isShortlisted ? 'currentColor' : 'none'}
              strokeWidth={1.8}
            />
          </button>
        </div>

        {/* Smooth Quick-Add Bar on Hover */}
        <div className="absolute inset-x-2 bottom-2 z-10 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
          <div className="flex gap-1.5">
            <button
              onClick={handleAdd}
              className={`flex-1 py-2 px-3 text-[11px] font-semibold tracking-wider uppercase rounded-xs shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                justAdded
                  ? 'bg-emerald-700 text-white'
                  : 'bg-[#4A0E17] hover:bg-[#5C121D] text-white'
              }`}
            >
              {justAdded ? (
                <>
                  <Check className="w-3.5 h-3.5" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Quick Bag</span>
                </>
              )}
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectProduct(product);
              }}
              className="p-2 bg-white/95 hover:bg-white text-stone-800 rounded-xs shadow-md transition-colors"
              title="Quick Details"
            >
              <Eye className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Secondary angle indicator hint */}
        {product.secondaryImage && (
          <div className="absolute bottom-2 left-2 pointer-events-none group-hover:opacity-0 transition-opacity">
            <span className="bg-black/50 backdrop-blur-xs text-white text-[9px] px-1.5 py-0.5 rounded-[2px] font-mono">
              2 ANGLES
            </span>
          </div>
        )}
      </div>

      {/* Product Metadata & Info */}
      <div className="pt-2.5 pb-0.5 flex flex-col flex-1">
        
        {/* Subtle category and finish */}
        <div className="flex items-center justify-between text-[10px] text-stone-400 uppercase tracking-wider mb-1 font-mono">
          <span>{product.category} · {product.finish}</span>
          <span className="text-stone-500 font-sans normal-case">Lightweight</span>
        </div>

        {/* Product Name */}
        <button
          onClick={() => onSelectProduct(product)}
          className="text-left font-serif text-sm sm:text-[15px] font-medium text-stone-900 group-hover:text-stone-700 transition-colors line-clamp-1 mb-1.5 focus:outline-none"
        >
          {product.name}
        </button>

        {/* Price & Mobile 1-Tap Bag */}
        <div className="mt-auto pt-1 flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            {product.price ? (
              <span className="text-sm font-semibold text-stone-950 tabular-nums">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
            ) : (
              <span className="text-xs text-stone-500 italic">
                Price on enquiry
              </span>
            )}
          </div>

          {/* Mobile Instant Bag Button */}
          <button
            onClick={handleAdd}
            className="sm:hidden px-2.5 py-1 bg-stone-900 text-white text-[10px] font-semibold uppercase rounded-xs flex items-center gap-1"
          >
            <ShoppingBag className="w-3 h-3" />
            <span>Bag</span>
          </button>
        </div>

      </div>

    </div>
  );
};
