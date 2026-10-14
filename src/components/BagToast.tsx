import React from 'react';
import { ShoppingBag, ArrowRight, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../data/products';

interface BagToastProps {
  product: Product | null;
  isVisible: boolean;
  onClose: () => void;
  onOpenBag: () => void;
  bagCount: number;
  subtotal: number;
}

export const BagToast: React.FC<BagToastProps> = ({
  product,
  isVisible,
  onClose,
  onOpenBag,
  bagCount,
  subtotal
}) => {
  if (!isVisible || !product) return null;

  const FREE_SHIPPING_THRESHOLD = 999;
  const isFreeUnlocked = subtotal >= FREE_SHIPPING_THRESHOLD;
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-5 right-5 z-50 max-w-sm w-full bg-stone-950 text-white rounded-xs shadow-2xl border border-stone-800 p-3.5 flex items-center gap-3"
      >
        <div className="w-12 h-12 rounded-xs overflow-hidden bg-stone-900 shrink-0 border border-stone-800">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0 text-left">
          <div className="flex items-center gap-1.5 text-[10px] text-amber-400 font-mono uppercase tracking-wider">
            <Sparkles className="w-3 h-3" />
            <span>ADDED TO YOUR BAG</span>
          </div>
          <p className="text-xs font-serif font-medium text-stone-100 truncate mt-0.5">
            {product.name}
          </p>
          <p className="text-[10px] text-stone-400 mt-0.5 font-mono">
            {product.price ? `₹${product.price.toLocaleString('en-IN')}` : ''} · Bag count: {bagCount}
          </p>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenBag();
            }}
            className="px-2.5 py-1.5 bg-[#4A0E17] hover:bg-[#5C121D] text-white text-[10px] font-semibold uppercase tracking-wider rounded-xs flex items-center gap-1 transition-colors"
          >
            <span>View Bag</span>
            <ArrowRight className="w-3 h-3" />
          </button>
          
          <button
            onClick={onClose}
            className="p-1 text-stone-500 hover:text-stone-300"
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
