import React, { useMemo } from 'react';
import { Product, CATEGORIES } from '../data/products';
import { ProductCard } from './ProductCard';

interface CollectionViewProps {
  products: Product[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  shortlistedIds: string[];
  onToggleShortlist: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
  onQuickAddToBag?: (product: Product) => void;
  onOpenFitGuide?: (tab?: 'necklaces' | 'earrings' | 'rings') => void;
}

export const CollectionView: React.FC<CollectionViewProps> = ({
  products,
  selectedCategory,
  onSelectCategory,
  shortlistedIds,
  onToggleShortlist,
  onSelectProduct,
  onQuickAddToBag,
  onOpenFitGuide
}) => {
  // Active Category Details
  const activeCategoryMeta = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  }, [selectedCategory]);

  // Clean Category Pipeline
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (selectedCategory !== 'all' && p.category !== selectedCategory) {
          return false;
        }
        return true;
      })
      .sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  }, [products, selectedCategory]);

  return (
    <section className="bg-white min-h-[70vh] py-8 sm:py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Collection Introduction Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.28em] text-stone-400 font-medium block mb-2 font-mono">
              TOUCH STONE · EVERYDAY CAPSULE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight mb-2.5">
              {activeCategoryMeta.label}
            </h1>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              {activeCategoryMeta.description}
            </p>
          </div>
        </div>

        {/* Category Tab Row */}
        <div className="border-y border-stone-200/70 py-3 mb-8 flex items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1 sm:gap-2 overflow-x-auto no-scrollbar pb-0.5">
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelectCategory(cat.id)}
                  className={`px-3.5 py-1.5 text-xs tracking-wide rounded-xs whitespace-nowrap transition-colors focus:outline-none ${
                    isSelected
                      ? 'bg-stone-950 text-stone-50 font-medium shadow-2xs'
                      : 'text-stone-600 hover:text-stone-950 hover:bg-stone-100/80'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

          {/* Simple Clean Pieces Counter */}
          <div className="text-stone-500 text-xs whitespace-nowrap shrink-0 pl-3 border-l border-stone-200 font-mono">
            <span className="font-semibold text-stone-950 tabular-nums">{filteredProducts.length}</span> pieces
          </div>

        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isShortlisted={shortlistedIds.includes(product.id)}
                onToggleShortlist={onToggleShortlist}
                onSelectProduct={onSelectProduct}
                onQuickAddToBag={onQuickAddToBag}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 text-center max-w-md mx-auto">
            <p className="text-stone-900 text-sm font-medium mb-1">
              No jewellery pieces match this selection.
            </p>
            <p className="text-xs text-stone-500 mb-6">
              Browse our complete catalog of everyday imitation jewellery.
            </p>
            <button
              onClick={() => onSelectCategory('all')}
              className="px-5 py-2 text-xs font-medium text-stone-900 border border-stone-300 hover:border-stone-900 rounded-xs transition-colors"
            >
              View All Pieces
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
