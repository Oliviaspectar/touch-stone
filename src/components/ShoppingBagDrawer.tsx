import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, MessageCircle, ShoppingBag, Bookmark, ArrowRight, ShieldCheck, Sparkles, Truck, Gift } from 'lucide-react';
import { Product } from '../data/products';
import { createBagOrderWhatsAppUrl, BUSINESS_INFO } from '../data/business';

export interface BagItem {
  product: Product;
  quantity: number;
}

interface ShoppingBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'bag' | 'shortlist';
  bagItems: BagItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearBag: () => void;
  shortlistedProducts: Product[];
  onMoveToBag: (product: Product) => void;
  onRemoveFromShortlist: (productId: string) => void;
  onSelectProduct: (product: Product) => void;
  onBrowseCollection: () => void;
}

export const ShoppingBagDrawer: React.FC<ShoppingBagDrawerProps> = ({
  isOpen,
  onClose,
  initialTab = 'bag',
  bagItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
  shortlistedProducts,
  onMoveToBag,
  onRemoveFromShortlist,
  onSelectProduct,
  onBrowseCollection
}) => {
  const [activeTab, setActiveTab] = useState<'bag' | 'shortlist'>(initialTab);

  React.useEffect(() => {
    if (isOpen && initialTab) {
      setActiveTab(initialTab);
    }
  }, [isOpen, initialTab]);

  if (!isOpen) return null;

  // Pricing calculations
  const subtotal = bagItems.reduce((sum, item) => sum + (item.product.price || 0) * item.quantity, 0);
  
  // Free shipping threshold at ₹999
  const FREE_SHIPPING_THRESHOLD = 999;
  const isFreeUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;

  const totalQuantity = bagItems.reduce((sum, item) => sum + item.quantity, 0);

  // Stack bundle discount: if user has 3 or more items, apply 10% stack discount
  const hasStackBonus = totalQuantity >= 3;
  const stackDiscount = hasStackBonus ? Math.round(subtotal * 0.1) : 0;
  const finalPayable = subtotal - stackDiscount;

  // WhatsApp cart enquiry URL
  const whatsAppOrderUrl = createBagOrderWhatsAppUrl({
    items: bagItems.map((b) => ({
      name: b.product.name,
      code: b.product.code,
      price: b.product.price || 0,
      quantity: b.quantity
    })),
    totalAmount: finalPayable,
    discountAmount: stackDiscount
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      
      {/* Slide-over panel */}
      <div 
        className="w-full max-w-md bg-[#FAF8F5] h-full shadow-2xl flex flex-col justify-between border-l border-stone-200 text-left animate-in slide-in-from-right duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Drawer Header with Dual Tabs */}
        <div className="bg-white border-b border-stone-200">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-stone-100 p-0.5 rounded-xs text-xs font-semibold uppercase tracking-wider">
              <button
                onClick={() => setActiveTab('bag')}
                className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'bag'
                    ? 'bg-stone-950 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>My Bag ({totalQuantity})</span>
              </button>

              <button
                onClick={() => setActiveTab('shortlist')}
                className={`px-3 py-1.5 rounded-xs transition-colors flex items-center gap-1.5 ${
                  activeTab === 'shortlist'
                    ? 'bg-stone-950 text-white shadow-2xs'
                    : 'text-stone-600 hover:text-stone-950'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>Saved ({shortlistedProducts.length})</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-stone-950 transition-colors rounded-xs focus:outline-none"
              aria-label="Close bag"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Luxe Velvet Pouch Progress Bar */}
          <div className="px-6 py-2.5 bg-stone-50 border-t border-stone-100 text-[11px]">
            <div className="flex items-center justify-between font-mono mb-1.5">
              <span className="flex items-center gap-1.5 text-stone-700">
                <Gift className="w-3.5 h-3.5 text-[#4A0E17]" />
                {isFreeUnlocked ? (
                  <span className="text-emerald-700 font-semibold">Free Luxe Velvet Pouch + Shipping Unlocked!</span>
                ) : (
                  <span>
                    Add <strong className="text-stone-900 font-sans font-medium">₹{(FREE_SHIPPING_THRESHOLD - subtotal).toLocaleString('en-IN')}</strong> for Free Pouch & Delivery
                  </span>
                )}
              </span>
              <span className="text-stone-500 font-medium">
                {Math.min(100, Math.round((subtotal / FREE_SHIPPING_THRESHOLD) * 100))}%
              </span>
            </div>
            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
              <div 
                className="bg-[#4A0E17] h-full transition-all duration-300 rounded-full"
                style={{ width: `${Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100)}%` }}
              />
            </div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          
          {/* TAB 1: SHOPPING BAG */}
          {activeTab === 'bag' && (
            <>
              {bagItems.length > 0 ? (
                <div className="space-y-4">
                  {bagItems.map(({ product, quantity }) => (
                    <div 
                      key={product.id} 
                      className="p-3 bg-white border border-stone-200/80 rounded-xs flex gap-3.5 items-start group hover:border-stone-400 transition-colors"
                    >
                      {/* Thumbnail */}
                      <div
                        onClick={() => {
                          onSelectProduct(product);
                          onClose();
                        }}
                        className="w-16 h-16 sm:w-20 sm:h-20 bg-stone-50 border border-stone-100 rounded-xs overflow-hidden shrink-0 cursor-pointer"
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Info & Quantity */}
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-mono">
                          {product.category} · {product.code || 'TS'}
                        </span>
                        
                        <button
                          onClick={() => {
                            onSelectProduct(product);
                            onClose();
                          }}
                          className="text-xs sm:text-sm font-serif font-medium text-stone-900 hover:text-stone-600 transition-colors text-left line-clamp-1 block w-full focus:outline-none"
                        >
                          {product.name}
                        </button>

                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs font-semibold text-stone-950 tabular-nums">
                            ₹{((product.price || 0) * quantity).toLocaleString('en-IN')}
                          </span>

                          {/* Quantity Controls */}
                          <div className="flex items-center border border-stone-200 rounded-xs bg-stone-50">
                            <button
                              onClick={() => onUpdateQuantity(product.id, -1)}
                              className="p-1 text-stone-600 hover:text-stone-950 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="px-2 text-xs font-semibold text-stone-900 tabular-nums">
                              {quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(product.id, 1)}
                              className="p-1 text-stone-600 hover:text-stone-950 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => onRemoveItem(product.id)}
                        className="p-1 text-stone-400 hover:text-stone-900 transition-colors shrink-0"
                        aria-label={`Remove ${product.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-14 h-14 rounded-full bg-stone-100 flex items-center justify-center mb-4 text-stone-400">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif text-base font-medium text-stone-950 mb-1">
                    Your shopping bag is empty
                  </h3>
                  <p className="text-xs text-stone-500 max-w-xs mb-6 leading-relaxed">
                    Explore our lightweight everyday earrings, collarbone chains, bracelets, and stackable rings.
                  </p>
                  <button
                    onClick={() => {
                      onClose();
                      onBrowseCollection();
                    }}
                    className="px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-stone-950 border border-stone-950 hover:bg-stone-950 hover:text-white rounded-xs transition-colors"
                  >
                    Explore Everyday Pieces
                  </button>
                </div>
              )}
            </>
          )}

          {/* TAB 2: SAVED SHORTLIST */}
          {activeTab === 'shortlist' && (
            <>
              {shortlistedProducts.length > 0 ? (
                <div className="space-y-3">
                  {shortlistedProducts.map((item) => (
                    <div 
                      key={item.id} 
                      className="p-3 bg-white border border-stone-200/80 rounded-xs flex gap-3.5 items-center group"
                    >
                      <div
                        onClick={() => {
                          onSelectProduct(item);
                          onClose();
                        }}
                        className="w-14 h-14 bg-stone-50 border border-stone-100 rounded-xs overflow-hidden shrink-0 cursor-pointer"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-serif font-medium text-stone-900 truncate">
                          {item.name}
                        </h4>
                        <p className="text-xs font-semibold text-stone-950 mt-0.5 tabular-nums">
                          ₹{item.price?.toLocaleString('en-IN')}
                        </p>
                        
                        <button
                          onClick={() => {
                            onMoveToBag(item);
                            setActiveTab('bag');
                          }}
                          className="text-[11px] text-[#4A0E17] font-semibold underline underline-offset-2 mt-1 block"
                        >
                          Move to Bag →
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveFromShortlist(item.id)}
                        className="p-1 text-stone-400 hover:text-stone-900"
                        aria-label="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-12 h-12 rounded-full bg-stone-100 flex items-center justify-center mb-3 text-stone-400">
                    <Bookmark className="w-5 h-5" />
                  </div>
                  <p className="text-xs text-stone-500">No saved items yet.</p>
                </div>
              )}
            </>
          )}

        </div>

        {/* Drawer Footer with High-Conversion Order Action */}
        {activeTab === 'bag' && bagItems.length > 0 && (
          <div className="p-5 border-t border-stone-200 bg-white space-y-3.5">
            
            {/* Price Summary */}
            <div className="space-y-1.5 text-xs">
              <div className="flex justify-between text-stone-600">
                <span>Subtotal ({totalQuantity} items)</span>
                <span className="tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>

              {hasStackBonus && (
                <div className="flex justify-between text-emerald-700 font-medium">
                  <span>Stack Bonus (3+ items 10% OFF)</span>
                  <span className="tabular-nums">-₹{stackDiscount.toLocaleString('en-IN')}</span>
                </div>
              )}

              <div className="flex justify-between text-stone-600">
                <span>Pan-India Delivery</span>
                <span className="text-emerald-700 font-semibold">
                  {isFreeUnlocked ? 'FREE' : '₹60'}
                </span>
              </div>

              <div className="flex justify-between text-sm font-bold text-stone-950 pt-2 border-t border-stone-100">
                <span>Total Payable</span>
                <span className="tabular-nums text-base">
                  ₹{finalPayable.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Direct WhatsApp Order Notice */}
            <div className="bg-amber-50/70 border border-amber-200/80 rounded-xs px-3 py-2 text-center text-[11px] text-stone-800 leading-tight flex items-center justify-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-amber-700 shrink-0" />
              <span><strong>Instant Checkout:</strong> No pincode check needed — tap below to enquire directly on WhatsApp!</span>
            </div>

            {/* Primary Order Action Button */}
            <a
              href={whatsAppOrderUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-[#4A0E17] hover:bg-[#5C121D] text-white text-xs sm:text-sm font-semibold tracking-wider uppercase flex items-center justify-center gap-2 rounded-xs transition-colors shadow-md text-center"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>Enquire on WhatsApp</span>
            </a>

            {/* Reassurance Strip */}
            <div className="pt-2 border-t border-stone-100 flex items-center justify-center gap-4 text-[10px] text-stone-500 font-mono">
              <span className="flex items-center gap-1">
                <Truck className="w-3 h-3 text-stone-600" />
                <span>Pan-India Delivery</span>
              </span>
              <span>·</span>
              <span>Dispatched from Thane West</span>
            </div>

          </div>
        )}

      </div>

    </div>
  );
};
