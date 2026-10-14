import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, X, ArrowRight } from 'lucide-react';
import { Product } from '../data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  const searchResults = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return [];

    return products.filter((p) => {
      const matchName = p.name.toLowerCase().includes(trimmed);
      const matchCategory = p.category.toLowerCase().includes(trimmed);
      const matchFinish = p.finish.toLowerCase().includes(trimmed);
      const matchCode = p.code.toLowerCase().includes(trimmed);
      const matchDesc = p.description.toLowerCase().includes(trimmed);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(trimmed));
      return matchName || matchCategory || matchFinish || matchCode || matchDesc || matchTags;
    });
  }, [query, products]);

  if (!isOpen) return null;

  const quickSearches = ['Hoops', 'Chains', 'Silver Tone', 'Bangles', 'Rings', 'Studs'];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/40 backdrop-blur-xs flex items-start justify-center p-3 sm:p-6 md:p-12 animate-in fade-in duration-150">
      
      {/* Modal Container */}
      <div 
        className="relative bg-white w-full max-w-2xl rounded-sm shadow-2xl border border-zinc-200 text-left overflow-hidden mt-8 sm:mt-12"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-zinc-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search earrings, necklaces, rings, finishes, or styles..."
            className="w-full text-sm sm:text-base text-zinc-900 placeholder:text-zinc-400 bg-transparent focus:outline-none"
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-zinc-400 hover:text-zinc-700"
              aria-label="Clear search input"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={onClose}
              className="p-1 text-zinc-400 hover:text-zinc-700"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Quick Suggestions when query is empty */}
        {!query && (
          <div className="p-5 bg-zinc-50/50">
            <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2.5">
              Popular searches
            </span>
            <div className="flex flex-wrap gap-2">
              {quickSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-3 py-1 bg-white border border-zinc-200 hover:border-zinc-900 text-xs text-zinc-700 hover:text-zinc-950 rounded-sm transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results Area */}
        {query && (
          <div className="max-h-96 overflow-y-auto p-4 sm:p-5">
            {searchResults.length > 0 ? (
              <div className="space-y-3">
                <span className="text-[11px] text-zinc-400 block mb-1">
                  Found {searchResults.length} {searchResults.length === 1 ? 'piece' : 'pieces'}
                </span>
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      onSelectProduct(product);
                      onClose();
                    }}
                    className="w-full flex items-center gap-3.5 p-2 hover:bg-zinc-50 rounded-sm text-left group transition-colors focus:outline-none"
                  >
                    <div className="w-12 h-12 bg-zinc-50 border border-zinc-100 rounded-sm overflow-hidden shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-400 uppercase tracking-wider">
                        <span>{product.category}</span>
                        <span>·</span>
                        <span>{product.finish}</span>
                      </div>
                      <p className="text-xs sm:text-sm font-medium text-zinc-900 group-hover:text-zinc-600 transition-colors truncate">
                        {product.name}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-xs font-semibold text-zinc-950 tabular-nums">
                        {product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Enquire'}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="py-12 text-center">
                <p className="text-sm font-medium text-zinc-900 mb-1">
                  No matching jewellery found
                </p>
                <p className="text-xs text-zinc-500 max-w-sm mx-auto">
                  We could not find anything matching "{query}". Try searching by category like "Earrings", "Hoops", "Necklace", or "Gold".
                </p>
              </div>
            )}
          </div>
        )}

      </div>

    </div>
  );
};
