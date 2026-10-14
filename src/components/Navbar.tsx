import React, { useState } from 'react';
import { Search, Bookmark, ShoppingBag, Menu, X, MessageCircle } from 'lucide-react';
import { BUSINESS_INFO, createGeneralWhatsAppUrl } from '../data/business';

interface NavbarProps {
  activeView: 'home' | 'collection' | 'about' | 'contact';
  selectedCategory: string;
  onNavigate: (view: 'home' | 'collection' | 'about' | 'contact', category?: string) => void;
  shortlistCount: number;
  bagCount: number;
  onOpenBag: () => void;
  onOpenShortlist: () => void;
  onOpenSearch: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  selectedCategory,
  onNavigate,
  shortlistCount,
  bagCount,
  onOpenBag,
  onOpenShortlist,
  onOpenSearch
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { label: 'SHOP ALL', view: 'collection' as const, category: 'all' },
    { label: 'EARRINGS', view: 'collection' as const, category: 'earrings' },
    { label: 'NECKLACES', view: 'collection' as const, category: 'necklaces' },
    { label: 'RINGS', view: 'collection' as const, category: 'rings' }
  ];

  const rightNavItems = [
    { label: 'ABOUT', view: 'about' as const },
    { label: 'CONTACT & VISIT', view: 'contact' as const }
  ];

  const allNavItems = [
    { label: 'Home', view: 'home' as const, category: 'all' },
    { label: 'All Jewellery', view: 'collection' as const, category: 'all' },
    { label: 'Earrings', view: 'collection' as const, category: 'earrings' },
    { label: 'Necklaces', view: 'collection' as const, category: 'necklaces' },
    { label: 'Bracelets & Cuffs', view: 'collection' as const, category: 'bracelets' },
    { label: 'Rings', view: 'collection' as const, category: 'rings' },
    { label: 'About Brand', view: 'about' as const },
    { label: 'Visit & Contact', view: 'contact' as const }
  ];

  const handleNavClick = (view: 'home' | 'collection' | 'about' | 'contact', category?: string) => {
    onNavigate(view, category);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-30 bg-white border-b border-stone-200 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* Left Navigation Zone (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-[0.16em] text-stone-800">
          {leftNavItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavClick(item.view, item.category)}
              className={`py-1 transition-colors hover:text-stone-950 focus:outline-none uppercase ${
                activeView === item.view && selectedCategory === item.category ? 'text-[#4A0E17] font-bold' : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu trigger */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-stone-800 hover:text-stone-950 focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Center Brand Wordmark */}
        <div className="text-center">
          <button
            onClick={() => handleNavClick('home', 'all')}
            className="group focus:outline-none"
          >
            <span className="font-display text-2xl sm:text-3xl font-normal tracking-[0.25em] text-[#4A0E17] sm:text-stone-950 uppercase group-hover:text-stone-700 transition-colors block">
              TOUCH STONE
            </span>
          </button>
        </div>

        {/* Right Navigation & Utility Zone */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden lg:flex items-center gap-6 text-[11px] font-semibold tracking-[0.16em] text-stone-800">
            {rightNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view)}
                className="py-1 transition-colors hover:text-stone-950 focus:outline-none uppercase"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3 text-stone-800">
            {/* Search */}
            <button
              onClick={onOpenSearch}
              className="p-1.5 hover:text-stone-950 transition-colors focus:outline-none"
              aria-label="Search"
            >
              <Search className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
            </button>

            {/* Shopping Bag (Primary Shopping Trigger) */}
            <button
              onClick={onOpenBag}
              className="relative p-1.5 hover:text-stone-950 transition-colors focus:outline-none flex items-center"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
              {bagCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[16px] h-[16px] px-1 rounded-full bg-[#4A0E17] text-white text-[9px] font-bold flex items-center justify-center leading-none shadow-xs animate-in zoom-in-75">
                  {bagCount}
                </span>
              )}
            </button>

            {/* Saved Shortlist */}
            <button
              onClick={onOpenShortlist}
              className="relative p-1.5 hover:text-stone-950 transition-colors focus:outline-none"
              aria-label="Saved Items"
            >
              <Bookmark className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
              {shortlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 min-w-[14px] h-[14px] px-1 rounded-full bg-stone-700 text-white text-[8px] font-semibold flex items-center justify-center leading-none">
                  {shortlistCount}
                </span>
              )}
            </button>

            {/* WhatsApp Store Chat */}
            <a
              href={createGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 hover:text-emerald-700 transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-4 h-4 sm:w-[18px] sm:h-[18px]" strokeWidth={1.8} />
            </a>
          </div>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-stone-200 px-6 py-6 animate-in fade-in duration-150">
          <div className="flex flex-col space-y-3.5 text-xs font-medium tracking-wider uppercase text-stone-700">
            {allNavItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.view, item.category)}
                className="text-left py-1 hover:text-stone-950 transition-colors"
              >
                {item.label}
              </button>
            ))}

            <div className="pt-4 border-t border-stone-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBag();
                }}
                className="w-full py-2.5 bg-[#4A0E17] text-white text-center text-xs tracking-wider uppercase font-semibold rounded-xs flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Open Shopping Bag ({bagCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
