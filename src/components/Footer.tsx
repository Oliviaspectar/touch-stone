import React, { useState } from 'react';
import { MessageCircle, Phone, MapPin, Instagram, Facebook, Send } from 'lucide-react';
import { BUSINESS_INFO, createGeneralWhatsAppUrl } from '../data/business';
import { CATEGORIES } from '../data/products';

interface FooterProps {
  onNavigate: (view: 'home' | 'collection' | 'about' | 'contact', category?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#FAF8F5] border-t border-stone-200 text-stone-700 text-xs">
      
      {/* Main Footer Container (Direct match to Image 2 layout) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16">
          
          {/* Left Column: Brand & Newsletter Signup (5 cols on md) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-display text-2xl sm:text-3xl font-normal tracking-[0.25em] text-[#460814] sm:text-stone-950 uppercase block">
              {BUSINESS_INFO.name}
            </span>
            <p className="text-stone-600 text-xs leading-relaxed max-w-sm font-light">
              Join the everyday club. Get previews of new daily imitation jewellery drops, college styling guides, and boutique arrivals in Thane West.
            </p>

            {/* Newsletter Input (matching Image 2) */}
            <form onSubmit={handleSubscribe} className="pt-2 max-w-sm">
              {subscribed ? (
                <div className="p-2.5 bg-stone-100 border border-stone-200 rounded-xs text-[11px] text-stone-800 font-medium">
                  Thank you! You're now on our everyday VIP list.
                </div>
              ) : (
                <div className="flex items-center">
                  <input
                    type="email"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                    placeholder="Enter your email or phone"
                    required
                    className="flex-1 text-xs px-3.5 py-3 bg-white border border-stone-300 rounded-l-xs text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-950"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-stone-950 hover:bg-stone-800 text-white text-xs font-semibold tracking-wider uppercase rounded-r-xs transition-colors"
                  >
                    Subscribe
                  </button>
                </div>
              )}
            </form>

            {/* Social / WhatsApp Row */}
            <div className="pt-3 flex items-center gap-3 text-stone-700">
              <a
                href={createGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-stone-300 hover:border-stone-900 flex items-center justify-center transition-colors"
                title="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-stone-500 font-mono">
                WhatsApp: +91 {BUSINESS_INFO.phones[0]}
              </span>
            </div>
          </div>

          {/* Column 1: SHOP (2 cols on md) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-stone-950">
              SHOP
            </h4>
            <ul className="space-y-2 text-xs font-light text-stone-600">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    onClick={() => {
                      onNavigate('collection', cat.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-stone-950 transition-colors text-left focus:outline-none"
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: CARE & BOUTIQUE (2 cols on md) */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-stone-950">
              CARE
            </h4>
            <ul className="space-y-2 text-xs font-light text-stone-600">
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-stone-950">
                  Imitation Care
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-stone-950">
                  Thane West Store
                </button>
              </li>
              <li>
                <a href={`tel:${BUSINESS_INFO.phones[0]}`} className="hover:text-stone-950">
                  Call: {BUSINESS_INFO.phones[0]}
                </a>
              </li>
              <li>
                <a href={createGeneralWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-stone-950">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: STORE ADDRESS (3 cols on md) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-[0.16em] text-stone-950">
              BOUTIQUE
            </h4>
            <p className="text-xs font-light text-stone-600 leading-relaxed">
              {BUSINESS_INFO.address.line1}, {BUSINESS_INFO.address.line2},<br />
              {BUSINESS_INFO.address.area}, {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.postalCode}.
            </p>
            <p className="text-[11px] text-stone-500 pt-1 font-mono">
              Phone: {BUSINESS_INFO.phones.join(' / ')}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-stone-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <p>© {new Date().getFullYear()} TOUCH STONE. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Everyday Imitation Jewellery</span>
            <span>·</span>
            <span>Thane West, Maharashtra</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
