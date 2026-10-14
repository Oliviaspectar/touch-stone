/**
 * TOUCH STONE - Official Web Application
 * Contemporary Indian imitation jewellery brand for everyday wear, college, and work.
 * Clean, editorial e-commerce layout:
 * - Beautiful on-model imagery & authentic iPhone 15 angles
 * - "YOU'D LOOK GOOD IN THESE" curated best sellers
 * - Interactive Sizing & Collarbone Fit Visualizer
 * - Shopping Bag Drawer with Free Luxe Velvet Pouch Progress Bar (₹999 threshold)
 * - 1-Click WhatsApp Checkout Order Slip
 * - Complete Everyday Catalogue with occasion vibes & hover angle transitions
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { MarqueeTicker } from './components/MarqueeTicker';
import { Hero } from './components/Hero';
import { IphoneAngleStrip } from './components/IphoneAngleStrip';
import { BestSellers } from './components/BestSellers';
import { CampaignBanner } from './components/CampaignBanner';
import { CategoryNav } from './components/CategoryNav';
import { ProductCard } from './components/ProductCard';
import { CollectionView } from './components/CollectionView';
import { ProductDetailModal } from './components/ProductDetailModal';
import { InteractiveFitModal } from './components/InteractiveFitModal';
import { ShoppingBagDrawer, BagItem } from './components/ShoppingBagDrawer';
import { BagToast } from './components/BagToast';
import { SearchModal } from './components/SearchModal';
import { ContactSection } from './components/ContactSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';
import { PRODUCTS, Product } from './data/products';
import { ArrowRight } from 'lucide-react';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'collection' | 'about' | 'contact'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Drawers & Modals
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [bagDrawerTab, setBagDrawerTab] = useState<'bag' | 'shortlist'>('bag');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);
  const [fitModalTab, setFitModalTab] = useState<'necklaces' | 'earrings' | 'rings'>('necklaces');

  const openFitGuide = (tab: 'necklaces' | 'earrings' | 'rings' = 'necklaces') => {
    setFitModalTab(tab);
    setIsFitModalOpen(true);
  };

  // Celebratory Toast
  const [toastProduct, setToastProduct] = useState<Product | null>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);

  // Shopping Bag Persistence
  const [bagItems, setBagItems] = useState<BagItem[]>(() => {
    try {
      const saved = localStorage.getItem('touchstone_bag');
      if (saved) return JSON.parse(saved);
      return [{ product: PRODUCTS[0], quantity: 1 }];
    } catch {
      return [{ product: PRODUCTS[0], quantity: 1 }];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('touchstone_bag', JSON.stringify(bagItems));
    } catch {
      // ignore storage errors
    }
  }, [bagItems]);

  // Shortlist Persistence
  const [shortlistedIds, setShortlistedIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('touchstone_shortlist');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('touchstone_shortlist', JSON.stringify(shortlistedIds));
    } catch {
      // storage unavailable
    }
  }, [shortlistedIds]);

  // Bag Action Handlers
  const handleAddToBag = (product: Product, quantity: number = 1) => {
    setBagItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { product, quantity }];
    });

    // Trigger feedback toast
    setToastProduct(product);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 3500);
  };

  const handleUpdateQuantity = (productId: string, delta: number) => {
    setBagItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter((item): item is BagItem => item !== null)
    );
  };

  const handleRemoveFromBag = (productId: string) => {
    setBagItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearBag = () => {
    setBagItems([]);
  };

  const toggleShortlist = (product: Product) => {
    setShortlistedIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const shortlistedProducts = PRODUCTS.filter((p) => shortlistedIds.includes(p.id));

  const totalBagQuantity = bagItems.reduce((sum, item) => sum + item.quantity, 0);
  const bagSubtotal = bagItems.reduce((sum, item) => sum + (item.product.price || 0) * item.quantity, 0);

  // Navigation Handler
  const handleNavigate = (view: 'home' | 'collection' | 'about' | 'contact', category?: string) => {
    setActiveView(view);
    if (category) {
      setSelectedCategory(category);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleExploreCategory = (category: string = 'all') => {
    setSelectedCategory(category);
    setActiveView('collection');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // All catalog pieces displayed directly without filters
  const cataloguePieces = PRODUCTS;

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-900 flex flex-col font-sans selection:bg-amber-100 selection:text-stone-900">
      
      {/* Top Navigation */}
      <Navbar
        activeView={activeView}
        selectedCategory={selectedCategory}
        onNavigate={handleNavigate}
        shortlistCount={shortlistedIds.length}
        bagCount={totalBagQuantity}
        onOpenBag={() => {
          setBagDrawerTab('bag');
          setIsBagOpen(true);
        }}
        onOpenShortlist={() => {
          setBagDrawerTab('shortlist');
          setIsBagOpen(true);
        }}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Editorial Infinite Marquee Ticker */}
      <MarqueeTicker />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* VIEW 1: HOMEPAGE */}
        {activeView === 'home' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* 1. HERO: Beautiful Model + Editorial Typography */}
            <Hero onExploreCollection={handleExploreCategory} />

            {/* 2. CAMERA ROLL STRIP: Shot on iPhone 15 from Different Model Angles */}
            <IphoneAngleStrip />

            {/* 3. BEST SELLERS: "YOU'D LOOK GOOD IN THESE" with 1-Click Quick Bag */}
            <BestSellers
              products={PRODUCTS}
              shortlistedIds={shortlistedIds}
              onToggleShortlist={toggleShortlist}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onExploreCollection={() => handleExploreCategory('all', 'all')}
              onQuickAddToBag={(p) => handleAddToBag(p, 1)}
            />

            {/* 4. CATEGORY BROWSE: 01 Earrings, 02 Necklaces, 03 Bracelets, 04 Rings */}
            <CategoryNav onSelectCategory={handleExploreCategory} />

            {/* 5. CAMPAIGN BANNER: Wide Cinematic Dark Banner + 5-Image Lookbook Gallery */}
            <CampaignBanner
              onShopCollection={() => handleExploreCategory('all', 'all')}
            />

            {/* 6. COMPLETE EVERYDAY CATALOGUE & OCCASION VIBES */}
            <section className="py-16 sm:py-24 bg-white border-b border-stone-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-stone-100 gap-4">
                  <div className="max-w-2xl">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium block mb-2 font-mono">
                      EVERYDAY CATALOGUE · TOUCH STONE
                    </span>
                    <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-950 font-normal tracking-tight">
                      Explore All <span className="font-editorial italic">Everyday Pieces</span>
                    </h2>
                    <p className="text-stone-600 text-xs sm:text-sm mt-2 leading-relaxed">
                      Lightweight, hypoallergenic, and skin-friendly Indian imitation jewellery crafted for daily college lectures, office desks, and coffee dates.
                    </p>
                  </div>

                  <div>
                    <span className="text-xs text-stone-500 font-mono">
                      <strong className="text-stone-950">{cataloguePieces.length}</strong> pieces
                    </span>
                  </div>
                </div>

                {/* 4-Column Product Grid */}
                <motion.div 
                  layout
                  className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 sm:gap-6 mt-6"
                >
                  <AnimatePresence>
                    {cataloguePieces.map((product) => (
                      <motion.div
                        key={product.id}
                        layout
                        initial={{ opacity: 0, scale: 0.96 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.96 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ProductCard
                          product={product}
                          isShortlisted={shortlistedIds.includes(product.id)}
                          onToggleShortlist={toggleShortlist}
                          onSelectProduct={(p) => setSelectedProduct(p)}
                          onQuickAddToBag={(p) => handleAddToBag(p, 1)}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Jump to dedicated view button */}
                <div className="mt-14 text-center">
                  <button
                    onClick={() => handleExploreCategory('all')}
                    className="inline-flex items-center gap-2 px-8 py-3.5 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold tracking-[0.16em] uppercase rounded-xs transition-colors shadow-sm cursor-pointer"
                  >
                    <span>View Dedicated Collection Page</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </section>

            {/* 7. BRAND STORY & ESSENTIALS */}
            <AboutSection />

            {/* 8. VISIT & CONTACT SECTION */}
            <ContactSection />
          </motion.div>
        )}

        {/* VIEW 2: DEDICATED COLLECTION PAGE */}
        {activeView === 'collection' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <CollectionView
              products={PRODUCTS}
              selectedCategory={selectedCategory}
              onSelectCategory={(cat) => setSelectedCategory(cat)}
              shortlistedIds={shortlistedIds}
              onToggleShortlist={toggleShortlist}
              onSelectProduct={(p) => setSelectedProduct(p)}
              onQuickAddToBag={(p) => handleAddToBag(p, 1)}
              onOpenFitGuide={() => openFitGuide('necklaces')}
            />
          </motion.div>
        )}

        {/* VIEW 3: ABOUT VIEW */}
        {activeView === 'about' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AboutSection />
          </motion.div>
        )}

        {/* VIEW 4: CONTACT & VISIT VIEW */}
        {activeView === 'contact' && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ContactSection />
          </motion.div>
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* MODAL 1: Product Detail View (2-Column PDP layout) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        isShortlisted={selectedProduct ? shortlistedIds.includes(selectedProduct.id) : false}
        onToggleShortlist={toggleShortlist}
        onSelectRelated={(p) => setSelectedProduct(p)}
        allProducts={PRODUCTS}
        onAddToBag={(p) => handleAddToBag(p, 1)}
        onOpenFitGuide={(tab) => openFitGuide(tab)}
      />

      {/* MODAL 2: Interactive Sizing & Collarbone Fit Scale Modal */}
      <InteractiveFitModal
        isOpen={isFitModalOpen}
        onClose={() => setIsFitModalOpen(false)}
        defaultTab={fitModalTab}
      />

      {/* DRAWER: Shopping Bag & Saved Items Drawer */}
      <ShoppingBagDrawer
        isOpen={isBagOpen}
        onClose={() => setIsBagOpen(false)}
        initialTab={bagDrawerTab}
        bagItems={bagItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromBag}
        onClearBag={handleClearBag}
        shortlistedProducts={shortlistedProducts}
        onMoveToBag={(p) => handleAddToBag(p, 1)}
        onRemoveFromShortlist={(id) => setShortlistedIds((prev) => prev.filter((i) => i !== id))}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onBrowseCollection={() => handleExploreCategory('all', 'all')}
      />

      {/* MODAL 3: Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        products={PRODUCTS}
        onSelectProduct={(p) => {
          setSelectedProduct(p);
          setIsSearchOpen(false);
        }}
      />

      {/* FLOATING TOAST: Celebratory Bag Notification */}
      <BagToast
        product={toastProduct}
        isVisible={isToastVisible}
        onClose={() => setIsToastVisible(false)}
        onOpenBag={() => setIsBagOpen(true)}
        bagCount={totalBagQuantity}
        subtotal={bagSubtotal}
      />

    </div>
  );
}
