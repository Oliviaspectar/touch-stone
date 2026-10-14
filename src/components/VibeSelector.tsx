import React from 'react';
import { Sparkles, GraduationCap, Briefcase, Coffee, Moon, Compass } from 'lucide-react';
import { VibeType, VIBES } from '../data/products';

interface VibeSelectorProps {
  selectedVibe: VibeType;
  onSelectVibe: (vibe: VibeType) => void;
}

export const VibeSelector: React.FC<VibeSelectorProps> = ({ selectedVibe, onSelectVibe }) => {
  const getVibeIcon = (id: VibeType) => {
    switch (id) {
      case 'college':
        return <GraduationCap className="w-3.5 h-3.5" />;
      case 'office':
        return <Briefcase className="w-3.5 h-3.5" />;
      case 'coffee':
        return <Coffee className="w-3.5 h-3.5" />;
      case 'evening':
        return <Moon className="w-3.5 h-3.5" />;
      default:
        return <Compass className="w-3.5 h-3.5" />;
    }
  };

  const activeVibeData = VIBES.find((v) => v.id === selectedVibe) || VIBES[0];

  return (
    <div className="bg-[#FAF8F5] border border-stone-200/90 rounded-sm p-4 sm:p-5 mb-8">
      {/* Kicker & Description */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3.5 pb-2.5 border-b border-stone-200/60">
        <div className="flex items-center gap-2">
          <span className="text-[10px] uppercase tracking-[0.2em] font-medium text-stone-500">
            SHOP BY OCCASION
          </span>
          <span className="text-stone-300">·</span>
          <span className="text-xs text-stone-800 font-medium">
            {activeVibeData.tag}
          </span>
        </div>
        <p className="text-xs text-stone-600 hidden sm:block">
          {activeVibeData.description}
        </p>
      </div>

      {/* Vibe Buttons - Soft Pinterest pill bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {VIBES.map((vibe) => {
          const isSelected = selectedVibe === vibe.id;
          return (
            <button
              key={vibe.id}
              onClick={() => onSelectVibe(vibe.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium rounded-full transition-all whitespace-nowrap focus:outline-none ${
                isSelected
                  ? 'bg-stone-900 text-stone-50 shadow-xs'
                  : 'bg-white hover:bg-stone-100/80 text-stone-700 border border-stone-200/80'
              }`}
            >
              <span className={isSelected ? 'text-amber-300' : 'text-stone-500'}>
                {getVibeIcon(vibe.id)}
              </span>
              <span>{vibe.label}</span>
            </button>
          );
        })}
      </div>

      {/* Mobile description string */}
      <p className="text-[11px] text-stone-500 sm:hidden mt-2 pt-2 border-t border-stone-200/40">
        {activeVibeData.description}
      </p>
    </div>
  );
};
