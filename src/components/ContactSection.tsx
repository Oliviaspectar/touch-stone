import React from 'react';
import { MapPin, Phone, MessageCircle, Navigation, Clock, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/business';

export const ContactSection: React.FC = () => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Kanhaiya Apt, Shop No 2, Lokmanya Nagar Pada No 2, Lokmanya Nagar, Thane West 400606'
  )}`;

  return (
    <section id="contact-section" className="py-14 sm:py-20 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Behance Editorial Typography */}
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.25em] text-stone-400 font-medium block mb-2 font-mono">
            STORE & ASSISTANCE · THANE WEST
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal text-stone-950 tracking-tight mb-3">
            Visit & Contact <span className="font-editorial italic">TOUCH STONE</span>
          </h2>
          <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
            Drop by our Thane West boutique to try on pieces in person, or connect with us directly on WhatsApp for live inventory questions and doorstep delivery.
          </p>
        </div>

        {/* 3-Column Clean Card Layout (Direct, Transparent, and Authentic) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Boutique Location */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 mb-5">
                <MapPin className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 font-mono">
                Boutique Address
              </h3>
              <p className="text-sm font-normal text-stone-900 leading-relaxed">
                {BUSINESS_INFO.address.line1},<br />
                {BUSINESS_INFO.address.line2},<br />
                {BUSINESS_INFO.address.area},<br />
                {BUSINESS_INFO.address.city} – {BUSINESS_INFO.address.postalCode}.
              </p>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-stone-950 hover:text-stone-600 transition-colors group"
              >
                <Navigation className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                <span className="underline underline-offset-4">Get Driving Directions</span>
              </a>
            </div>
          </div>

          {/* Card 2: Direct Phone Support */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-900 mb-5">
                <Phone className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 font-mono">
                Phone Support
              </h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Call us directly for ring sizing, stock queries, or corporate & festive bulk orders.
              </p>
              <div className="flex flex-col gap-2.5">
                {BUSINESS_INFO.phones.map((phone) => (
                  <a
                    key={phone}
                    href={`tel:${phone}`}
                    className="inline-flex items-center justify-between px-3.5 py-2 text-sm font-medium text-stone-900 bg-stone-50 hover:bg-stone-100 border border-stone-200/80 rounded-xs transition-colors tabular-nums"
                  >
                    <span>+91 {phone}</span>
                    <span className="text-[11px] text-stone-400 font-normal">Tap to Call</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6 flex items-center gap-2 text-[11px] text-stone-500">
              <Clock className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Available Monday – Saturday, 10:30 AM to 8:30 PM</span>
            </div>
          </div>

          {/* Card 3: WhatsApp Concierge */}
          <div className="bg-white p-6 sm:p-8 rounded-xs border border-stone-200 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xs bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 mb-5">
                <MessageCircle className="w-5 h-5 stroke-[1.5]" />
              </div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-2 font-mono">
                WhatsApp Concierge
              </h3>
              <p className="text-xs text-stone-600 mb-4 leading-relaxed">
                Send us a screenshot of any piece from this catalog to check instant availability or see video close-ups.
              </p>
              
              <div className="bg-stone-50 p-3 rounded-xs border border-stone-200/60 mb-4 text-xs text-stone-700 space-y-1.5">
                <div className="flex items-center gap-1.5 font-medium text-stone-900">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Business Account</span>
                </div>
                <p className="text-[11px] text-stone-500">
                  Direct personal communication with our store team. No automated bots.
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-stone-100 mt-6">
              <a
                href={BUSINESS_INFO.whatsAppBaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-stone-950 hover:bg-stone-800 transition-colors rounded-xs shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
