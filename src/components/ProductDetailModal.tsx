import React, { useState } from 'react';
import { X, Bookmark, MessageCircle, ShoppingBag, ArrowLeft, ShieldCheck, Sparkles, Check, ChevronDown, ChevronUp, Droplets, Truck } from 'lucide-react';
import { Product } from '../data/products';
import { BUSINESS_INFO, createProductWhatsAppUrl, createFriendShareWhatsAppUrl } from '../data/business';
import heroCampaignPortraitImg from '../assets/images/hero_campaign_portrait_1791969043256.jpg';
import threeQuarterHoopsImg from '../assets/images/three_quarter_hoops_portrait_1791969045157.jpg';
import collarboneNecklaceImg from '../assets/images/collarbone_necklace_detail_1791969045068.jpg';
import earStackProfileImg from '../assets/images/ear_stack_profile_crop_1791969045330.jpg';
import handRingsBraceletImg from '../assets/images/hand_rings_bracelet_detail_1791969046474.jpg';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  isShortlisted: boolean;
  onToggleShortlist: (product: Product) => void;
  onSelectRelated: (product: Product) => void;
  allProducts: Product[];
  onAddToBag?: (product: Product) => void;
  onOpenFitGuide?: (tab: 'necklaces' | 'earrings' | 'rings') => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  isShortlisted,
  onToggleShortlist,
  onSelectRelated,
  allProducts,
  onAddToBag,
  onOpenFitGuide
}) => {
  if (!product) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [openAccordion, setOpenAccordion] = useState<string | null>('details');
  const [baggedSuccess, setBaggedSuccess] = useState(false);

  // High-aesthetic jewellery campaign model photo based on category
  const modelPhoto = product.modelAngleImage || (
    product.category === 'earrings' 
      ? earStackProfileImg
      : product.category === 'necklaces'
      ? collarboneNecklaceImg
      : product.category === 'rings' 
      ? handRingsBraceletImg 
      : product.category === 'bracelets'
      ? handRingsBraceletImg
      : heroCampaignPortraitImg
  );

  // 3-photo gallery showing product details, on-model angle, and campaign styling
  const galleryPhotos = [
    product.image,
    modelPhoto,
    product.secondaryImage || (product.category === 'earrings' ? threeQuarterHoopsImg : heroCampaignPortraitImg)
  ];

  const whatsAppUrl = createProductWhatsAppUrl(product);
  const friendShareUrl = createFriendShareWhatsAppUrl(product);

  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const toggleAccordion = (section: string) => {
    setOpenAccordion(openAccordion === section ? null : section);
  };

  const handleBag = () => {
    if (onAddToBag) {
      onAddToBag(product);
      setBaggedSuccess(true);
      setTimeout(() => setBaggedSuccess(false), 2000);
    }
  };

  const mapCategoryToTab = (cat: string): 'necklaces' | 'earrings' | 'rings' => {
    if (cat === 'necklaces') return 'necklaces';
    if (cat === 'earrings') return 'earrings';
    return 'rings';
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-5xl max-h-[94vh] overflow-y-auto rounded-xs shadow-2xl border border-stone-200 text-left my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header / Breadcrumbs & Close Bar */}
        <div className="sticky top-0 z-30 bg-[#FAF8F5]/95 backdrop-blur-sm border-b border-stone-200 px-5 sm:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-stone-500 font-mono">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-1 text-stone-700 hover:text-stone-950 transition-colors focus:outline-none"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>COLLECTION</span>
            </button>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span>{product.category}</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-950 font-medium truncate max-w-[140px] sm:max-w-xs">{product.name}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-500 hover:text-stone-950 transition-colors rounded-xs focus:outline-none"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-5 sm:p-8 lg:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Column: 3-Image Collage Gallery */}
            <div className="lg:col-span-7 flex flex-col gap-3">
              
              {/* Primary Large Image */}
              <div className="relative aspect-[4/3.8] w-full overflow-hidden bg-white border border-stone-200/80 rounded-xs shadow-xs">
                <img
                  src={galleryPhotos[activeImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-all duration-300"
                  referrerPolicy="no-referrer"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-100 text-amber-950 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border border-amber-200 shadow-2xs">
                    {product.badge.label}
                  </span>
                )}
                <span className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-xs text-white text-[9px] font-mono px-2 py-0.5 rounded-xs">
                  {activeImageIndex === 1 ? 'ON-MODEL FIT' : 'PRODUCT MACRO'}
                </span>
              </div>

              {/* Bottom 2-Square Thumbnails */}
              <div className="grid grid-cols-2 gap-3">
                {galleryPhotos.slice(1, 3).map((imgUrl, idx) => {
                  const actualIdx = idx + 1;
                  const isActive = activeImageIndex === actualIdx;
                  return (
                    <button
                      key={actualIdx}
                      onClick={() => setActiveImageIndex(actualIdx)}
                      className={`relative aspect-square overflow-hidden bg-white rounded-xs border transition-all ${
                        isActive
                          ? 'border-[#4A0E17] ring-1 ring-[#4A0E17]'
                          : 'border-stone-200/80 hover:border-stone-400 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={imgUrl}
                        alt={`${product.name} view ${actualIdx}`}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 left-2 bg-white/95 text-stone-800 text-[9px] uppercase tracking-wider px-1.5 py-0.5 rounded-[2px] font-mono shadow-2xs">
                        {actualIdx === 1 ? 'MODEL STYLING' : 'ANGLE VIEW'}
                      </span>
                    </button>
                  );
                })}
              </div>

            </div>

            {/* Right Column: Purchasing Module (Clean without reviews) */}
            <div className="lg:col-span-5 flex flex-col">
              
              {/* Product Code / Subtitle */}
              <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block mb-1">
                EVERYDAY CAPSULE · {product.code || 'TS-101'}
              </span>

              {/* Product Title */}
              <h1 className="font-serif text-3xl sm:text-4xl font-normal text-stone-950 tracking-tight leading-[1.1] mb-2">
                {product.name}
              </h1>

              {/* Subtitle */}
              <p className="text-xs sm:text-sm text-stone-600 mb-4 leading-relaxed font-light">
                {product.shortDescription}
              </p>

              {/* Clean Price Header without reviews */}
              <div className="flex items-center gap-3 mb-5 pb-4 border-b border-stone-200">
                <span className="font-serif text-2xl sm:text-3xl font-bold text-stone-950 tabular-nums">
                  {product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Price on Enquiry'}
                </span>
                <span className="text-stone-400 text-xs">·</span>
                <span className="text-xs text-stone-600 font-mono">
                  Inclusive of all taxes
                </span>
              </div>

              {/* Finish Options & Water/Sweat Guarantee */}
              <div className="mb-4">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-900 mb-1.5 uppercase tracking-wider">
                  <span>Finish: <strong className="font-normal text-stone-600">{product.finish}</strong></span>
                  <span className="text-emerald-700 font-sans text-[11px] font-medium flex items-center gap-1">
                    <Droplets className="w-3 h-3 text-sky-600" />
                    <span>Sweat & Gym Safe</span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 text-xs bg-white border border-stone-950 rounded-xs font-semibold text-stone-900 shadow-2xs">
                    {product.finish}
                  </span>
                </div>
              </div>

              {/* Sizing & Dimensions */}
              <div className="mb-6 p-3 bg-stone-100/70 border border-stone-200/80 rounded-xs flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-stone-500 font-mono block">
                    DIMENSIONS / FIT
                  </span>
                  <span className="text-xs font-semibold text-stone-900">
                    {product.details.dimensions || 'Standard Everyday Size'}
                  </span>
                </div>
                {onOpenFitGuide && (
                  <button
                    type="button"
                    onClick={() => onOpenFitGuide(
                      product.category === 'necklaces' ? 'necklaces' : product.category === 'rings' ? 'rings' : 'earrings'
                    )}
                    className="text-[11px] font-semibold text-[#4A0E17] hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Fit Guide →</span>
                  </button>
                )}
              </div>

              {/* Primary Buying Action Buttons */}
              <div className="space-y-2.5 mb-6">
                {/* 1. Add to Bag */}
                <button
                  onClick={handleBag}
                  className={`w-full py-3.5 px-6 rounded-xs text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 shadow-sm cursor-pointer ${
                    baggedSuccess
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#4A0E17] hover:bg-[#5C121D] text-white'
                  }`}
                >
                  {baggedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>

                {/* 2. Buy in 1-Click via WhatsApp */}
                <div className="flex gap-2">
                  <a
                    href={whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3 px-4 bg-white hover:bg-stone-50 border border-stone-900 text-stone-950 text-xs font-semibold uppercase tracking-wider rounded-xs transition-colors flex items-center justify-center gap-2 text-center"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                    <span>Instant 1-Click WhatsApp Order</span>
                  </a>

                  {/* Bookmark Button */}
                  <button
                    type="button"
                    onClick={() => onToggleShortlist(product)}
                    className={`p-3 border rounded-xs transition-colors shrink-0 ${
                      isShortlisted
                        ? 'bg-stone-900 border-stone-900 text-white'
                        : 'bg-white border-stone-300 hover:border-stone-950 text-stone-800'
                    }`}
                    aria-label="Save piece"
                  >
                    <Bookmark className="w-4 h-4" fill={isShortlisted ? 'currentColor' : 'none'} />
                  </button>
                </div>
              </div>

              {/* Share with Bestie */}
              <div className="mb-6">
                <a
                  href={friendShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-stone-50 hover:bg-stone-100 border border-stone-200 text-stone-700 text-[11px] font-medium tracking-wider uppercase rounded-xs transition-colors flex items-center justify-center gap-1.5 text-center"
                >
                  <span>Share with a Bestie on WhatsApp</span>
                </a>
              </div>

              {/* Accordions */}
              <div className="border-t border-stone-200 divide-y divide-stone-200 text-xs">
                
                {/* Details Accordion */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordion('details')}
                    className="w-full flex items-center justify-between font-semibold text-stone-900 uppercase tracking-wider text-left focus:outline-none"
                  >
                    <span>Product Details & Specifications</span>
                    {openAccordion === 'details' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'details' && (
                    <div className="pt-2 text-stone-600 leading-relaxed space-y-1.5">
                      <p>{product.description}</p>
                      <p><strong>Material:</strong> {product.details.material}</p>
                      {product.details.closure && <p><strong>Closure:</strong> {product.details.closure}</p>}
                    </div>
                  )}
                </div>

                {/* Care Accordion */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordion('care')}
                    className="w-full flex items-center justify-between font-semibold text-stone-900 uppercase tracking-wider text-left focus:outline-none"
                  >
                    <span>Jewellery Care & Longevity</span>
                    {openAccordion === 'care' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'care' && (
                    <div className="pt-2 text-stone-600 leading-relaxed">
                      <p>{product.details.care}</p>
                    </div>
                  )}
                </div>

                {/* Store Accordion */}
                <div className="py-3">
                  <button
                    onClick={() => toggleAccordion('store')}
                    className="w-full flex items-center justify-between font-semibold text-stone-900 uppercase tracking-wider text-left focus:outline-none"
                  >
                    <span>Customer Care & Direct Contact</span>
                    {openAccordion === 'store' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </button>
                  {openAccordion === 'store' && (
                    <div className="pt-2 text-stone-600 leading-relaxed space-y-1">
                      <p>{BUSINESS_INFO.address.fullAddress}</p>
                      <p>Call: <a href="tel:9820764929" className="text-stone-900 font-medium underline">9820764929</a> / <a href="tel:8779842872" className="text-stone-900 font-medium underline">8779842872</a></p>
                    </div>
                  )}
                </div>

              </div>

            </div>

          </div>

          {/* Related Everyday Pieces */}
          {relatedProducts.length > 0 && (
            <div className="mt-12 pt-8 border-t border-stone-200">
              <h3 className="font-serif text-xl font-normal uppercase text-stone-950 tracking-wider mb-5">
                SIMILAR EVERYDAY STYLES
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {relatedProducts.map((rel) => (
                  <button
                    key={rel.id}
                    onClick={() => {
                      onSelectRelated(rel);
                      setActiveImageIndex(0);
                    }}
                    className="text-left group focus:outline-none bg-white p-2.5 rounded-xs border border-stone-200/80 hover:border-stone-950 transition-colors"
                  >
                    <div className="aspect-square bg-stone-100 rounded-xs overflow-hidden mb-2">
                      <img
                        src={rel.image}
                        alt={rel.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <p className="font-serif text-sm font-normal text-stone-900 group-hover:text-stone-600 transition-colors truncate">
                      {rel.name}
                    </p>
                    <p className="text-xs font-semibold text-stone-950 mt-0.5">
                      {rel.price ? `₹${rel.price}` : 'Enquire'}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>

    </div>
  );
};
