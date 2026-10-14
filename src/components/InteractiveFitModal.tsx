import React, { useState } from 'react';
import { X, Sparkles, ShieldCheck, Ruler, Check, Droplets, HeartHandshake } from 'lucide-react';
import collarboneNecklaceImg from '../assets/images/collarbone_necklace_detail_1791969045068.jpg';
import earStackProfileImg from '../assets/images/ear_stack_profile_crop_1791969045330.jpg';
import handRingsBraceletImg from '../assets/images/hand_rings_bracelet_detail_1791969046474.jpg';

interface InteractiveFitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'necklaces' | 'earrings' | 'rings';
}

export const InteractiveFitModal: React.FC<InteractiveFitModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'necklaces'
}) => {
  const [activeTab, setActiveTab] = useState<'necklaces' | 'earrings' | 'rings'>(defaultTab);
  const [selectedChainLength, setSelectedChainLength] = useState<14 | 16 | 18 | 20>(16);
  const [selectedEarSize, setSelectedEarSize] = useState<'huggies' | 'midHoop' | 'statement'>(
    'huggies'
  );
  const [selectedRingStyle, setSelectedRingStyle] = useState<'minimal' | 'croissant' | 'pavé'>(
    'croissant'
  );

  if (!isOpen) return null;

  const chainGuides = {
    14: {
      name: '14" Choker Length',
      fit: 'Sits snug around the base of the throat',
      bestFor: 'High-neck tops, crew-neck tees, layering base',
      collarboneOffset: '30%',
      modelTip: 'Pair with an open collared shirt or crop tee'
    },
    16: {
      name: '16" Collarbone Fall (Most Popular)',
      fit: 'Rests gracefully right along the collarbone dip',
      bestFor: 'Everyday college tees, square necks, linen shirts',
      collarboneOffset: '46%',
      modelTip: 'The holy grail everyday length. Sits perfectly with almost every outfit.'
    },
    18: {
      name: '18" Princess Standard',
      fit: 'Drops 1.5 inches below collarbone hollow',
      bestFor: 'Pendant necklaces, V-necks, layering middle piece',
      collarboneOffset: '62%',
      modelTip: 'Ideal if you wear oversized graphic tees or kurtis.'
    },
    20: {
      name: '20" Deep Layering Length',
      fit: 'Drapes across mid-chest',
      bestFor: 'Coin medallions, dramatic open blazers, autumn sweaters',
      collarboneOffset: '78%',
      modelTip: 'The finishing touch to a multi-chain Pinterest stack.'
    }
  };

  const earGuides = {
    huggies: {
      title: 'Everyday Huggie (8mm - 10mm)',
      weight: 'Under 2.2 grams',
      feeling: 'Zero pinch. You can sleep, shower, and study without noticing them.',
      closure: 'Secure click-latch (snaps shut securely)'
    },
    midHoop: {
      title: 'Chunky Tube Hoop (16mm - 20mm)',
      weight: '3.8 grams (Hollow lightweight core)',
      feeling: 'Bold look without the drag. No earlobe elongation guarantee.',
      closure: 'Hypoallergenic surgical steel post'
    },
    statement: {
      title: 'Sculptural Teardrop (24mm+)',
      weight: '4.6 grams',
      feeling: 'Statement presence, engineered ultra-light for evening coffee runs.',
      closure: 'Reinforced bullet backing'
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-[#FAF8F5] w-full max-w-3xl rounded-xs shadow-2xl border border-stone-200 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white border-b border-stone-200 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ruler className="w-4 h-4 text-[#4A0E17]" />
            <h2 className="font-serif text-lg sm:text-xl font-normal text-stone-950">
              Interactive Size & Real Body Fit Guide
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-stone-900 transition-colors rounded-xs focus:outline-none"
            aria-label="Close fit guide"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Selection */}
        <div className="flex border-b border-stone-200 bg-stone-50/70 text-xs font-semibold tracking-wider uppercase">
          <button
            onClick={() => setActiveTab('necklaces')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'necklaces'
                ? 'border-[#4A0E17] text-[#4A0E17] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Necklaces & Chains (Collarbone)
          </button>
          <button
            onClick={() => setActiveTab('earrings')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'earrings'
                ? 'border-[#4A0E17] text-[#4A0E17] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Earrings & Huggie Scale
          </button>
          <button
            onClick={() => setActiveTab('rings')}
            className={`flex-1 py-3 text-center transition-colors border-b-2 ${
              activeTab === 'rings'
                ? 'border-[#4A0E17] text-[#4A0E17] bg-white'
                : 'border-transparent text-stone-500 hover:text-stone-800'
            }`}
          >
            Rings & Cuffs
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
          {/* TAB 1: NECKLACE COLLARBONE SLIDER */}
          {activeTab === 'necklaces' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                
                {/* Visual Collarbone Fall Stage */}
                <div className="md:col-span-6 relative aspect-square bg-white border border-stone-200 rounded-xs overflow-hidden shadow-2xs">
                  <img
                    src={collarboneNecklaceImg}
                    alt="Collarbone necklace reference shot"
                    className="w-full h-full object-cover filter brightness-[0.98]"
                  />
                  {/* Interactive Dynamic Fall Line Overlay */}
                  <div 
                    className="absolute inset-x-8 border-b-2 border-dashed border-amber-400 pointer-events-none transition-all duration-300 flex items-center justify-center"
                    style={{ top: chainGuides[selectedChainLength].collarboneOffset }}
                  >
                    <span className="bg-[#4A0E17] text-white text-[10px] font-mono font-medium px-2 py-0.5 rounded-full shadow-md -translate-y-1/2">
                      {chainGuides[selectedChainLength].name}
                    </span>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-xs font-mono">
                    REAL IPHONE 15 COLLARBONE FIT
                  </div>
                </div>

                {/* Length Switcher */}
                <div className="md:col-span-6 space-y-4">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                    TAP LENGTH TO PREVIEW ON COLLARBONE
                  </span>

                  <div className="grid grid-cols-2 gap-2">
                    {([14, 16, 18, 20] as const).map((len) => (
                      <button
                        key={len}
                        onClick={() => setSelectedChainLength(len)}
                        className={`p-3 text-left border rounded-xs transition-all ${
                          selectedChainLength === len
                            ? 'border-[#4A0E17] bg-stone-900 text-white shadow-xs'
                            : 'border-stone-200 bg-white text-stone-800 hover:border-stone-400'
                        }`}
                      >
                        <span className="block text-sm font-semibold">{len} Inches</span>
                        <span className="block text-[10px] opacity-75 mt-0.5">
                          {len === 16 ? '⭐ Best Seller' : len === 14 ? 'Choker fit' : len === 18 ? 'Princess standard' : 'Layering drop'}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Active Length Details */}
                  <div className="p-4 bg-white border border-stone-200 rounded-xs space-y-2 text-xs">
                    <p className="font-medium text-stone-950 flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{chainGuides[selectedChainLength].fit}</span>
                    </p>
                    <p className="text-stone-600 text-[11px]">
                      <strong>Recommended for:</strong> {chainGuides[selectedChainLength].bestFor}
                    </p>
                    <p className="text-stone-500 text-[11px] italic bg-stone-50 p-2 rounded-xs border border-stone-100">
                      💡 <em>Styling tip:</em> {chainGuides[selectedChainLength].modelTip}
                    </p>
                  </div>
                </div>

              </div>

              {/* Psychological Assurance Banner */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-stone-200">
                <div className="flex items-center gap-2.5 p-3 bg-white border border-stone-100 rounded-xs">
                  <Droplets className="w-4 h-4 text-sky-600 shrink-0" />
                  <span className="text-xs text-stone-700"><strong>Daily Wear:</strong> Lightweight and designed for everyday use</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white border border-stone-100 rounded-xs">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-xs text-stone-700"><strong>No Green Skin:</strong> 100% Nickel & Lead-free brass</span>
                </div>
                <div className="flex items-center gap-2.5 p-3 bg-white border border-stone-100 rounded-xs">
                  <HeartHandshake className="w-4 h-4 text-[#4A0E17] shrink-0" />
                  <span className="text-xs text-stone-700"><strong>Free 7-Day Exchange:</strong> If length does not fit perfectly</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: EARRINGS & HUGGIE SCALE */}
          {activeTab === 'earrings' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 relative aspect-square bg-white border border-stone-200 rounded-xs overflow-hidden shadow-2xs">
                  <img
                    src={earStackProfileImg}
                    alt="Real ear close-up profile"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-xs font-mono">
                    REAL EAR-TUCK PERSPECTIVE
                  </div>
                </div>

                <div className="md:col-span-6 space-y-3">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-stone-400 block">
                    CHOOSE EARRING PROFILE
                  </span>

                  {(['huggies', 'midHoop', 'statement'] as const).map((style) => (
                    <div
                      key={style}
                      onClick={() => setSelectedEarSize(style)}
                      className={`p-3.5 border rounded-xs cursor-pointer transition-all ${
                        selectedEarSize === style
                          ? 'border-[#4A0E17] bg-white shadow-xs'
                          : 'border-stone-200 bg-stone-50/50 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold text-stone-900">
                          {earGuides[style].title}
                        </span>
                        <span className="text-[10px] font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                          {earGuides[style].weight}
                        </span>
                      </div>
                      <p className="text-[11px] text-stone-600 mt-1 leading-relaxed">
                        {earGuides[style].feeling}
                      </p>
                      <span className="text-[10px] text-stone-400 block mt-1">
                        🔒 {earGuides[style].closure}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RINGS & CUFF SCALE */}
          {activeTab === 'rings' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-6 relative aspect-square bg-white border border-stone-200 rounded-xs overflow-hidden shadow-2xs">
                  <img
                    src={handRingsBraceletImg}
                    alt="Hand with stackable rings and bracelet"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-2 left-2 bg-black/60 backdrop-blur-xs text-white text-[9px] px-2 py-0.5 rounded-xs font-mono">
                    NATURAL HAND SCALE
                  </div>
                </div>

                <div className="md:col-span-6 space-y-4">
                  <h3 className="font-serif text-lg text-stone-950 font-medium">
                    Adjustable & Universal Fit Design
                  </h3>
                  <p className="text-xs text-stone-600 leading-relaxed">
                    95% of our everyday rings & cuffs feature a seamless <strong>comfort-flex open band</strong>. You can gently squeeze or expand them with your fingers to fit indices, thumbs, or middle fingers (Indian sizes 12 to 18) without distortion!
                  </p>

                  <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-xs space-y-2 text-xs">
                    <p className="font-medium text-amber-950">
                      ⚡ Never worry about exact ring measurements again
                    </p>
                    <p className="text-amber-800 text-[11px] leading-relaxed">
                      Every piece is engineered to flex comfortably around your knuckle and sit flush without pinching skin.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-stone-50 border-t border-stone-200 flex items-center justify-between text-xs">
          <span className="text-stone-500">
            Have questions about a specific outfit neckline?
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-stone-950 hover:bg-stone-800 text-white rounded-xs uppercase tracking-wider text-[11px] font-semibold transition-colors"
          >
            Got It, Back to Shopping
          </button>
        </div>
      </div>
    </div>
  );
};
