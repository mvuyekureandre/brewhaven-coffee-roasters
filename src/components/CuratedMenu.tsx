import React, { useState } from 'react';
import { Plus, Check, Sparkles } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/coffeeData';

interface CuratedMenuProps {
  onAddToCart: (item: MenuItem) => void;
  onSelectItem: (item: MenuItem) => void;
}

export const CuratedMenu: React.FC<CuratedMenuProps> = ({ onAddToCart, onSelectItem }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'signature' | 'cold' | 'tea' | 'espresso'>('all');
  const [addedItemId, setAddedItemId] = useState<string | null>(null);

  const filteredItems = activeCategory === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  const handleQuickAdd = (e: React.MouseEvent, item: MenuItem) => {
    e.stopPropagation();
    onAddToCart(item);
    setAddedItemId(item.id);
    setTimeout(() => {
      setAddedItemId(null);
    }, 1500);
  };

  const categories = [
    { id: 'all', label: 'All Selections' },
    { id: 'signature', label: 'Signature Lattes' },
    { id: 'cold', label: 'Nitro & Chilled' },
    { id: 'espresso', label: 'Pure Espresso' },
    { id: 'tea', label: 'Artisan Matcha' },
  ];

  return (
    <section id="menu" className="relative py-24 lg:py-32 bg-[#F6F1E8] text-[#1E1E1E]">
      {/* Subtle paper grain / delicate decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C8A96A]/30" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-[#A7864B] tracking-[0.24em] uppercase text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Menu Selections</span>
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#062C2C] tracking-tight">
            Crafted with Exceptional Ingredients
          </h2>
          <p className="text-[#685D52] text-base font-light">
            Every cup is dialed in daily by our master baristas in Kigali using filtered volcanic water and single-origin Rwandan micro-lot beans.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-5 py-2 text-xs uppercase tracking-wider font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-[#062C2C] text-[#F8F5EF] shadow-md'
                  : 'bg-white/80 hover:bg-white text-[#685D52] hover:text-[#062C2C] border border-[#C8A96A]/20'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid: 28px radius, soft shadow, thin gold outline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
          {filteredItems.map((item) => {
            const isJustAdded = addedItemId === item.id;

            return (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group relative bg-white rounded-[28px] p-4 border border-[#C8A96A]/25 shadow-sm hover:shadow-2xl hover:shadow-[#062C2C]/10 transition-all duration-500 hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
              >
                {/* Product Image Frame */}
                <div>
                  <div className="relative aspect-square w-full rounded-[20px] overflow-hidden bg-[#EFE9DF] mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Subtle gold tag if popular */}
                    {item.isPopular && (
                      <span className="absolute top-3 left-3 bg-[#062C2C]/90 backdrop-blur-sm text-[#C8A96A] text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full border border-[#C8A96A]/30">
                        Signature
                      </span>
                    )}

                    {/* Quick view overlay hint */}
                    <div className="absolute inset-0 bg-[#062C2C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="bg-[#062C2C]/80 text-[#F8F5EF] text-xs px-3 py-1.5 rounded-full font-medium backdrop-blur-sm">
                        Customize Drink
                      </span>
                    </div>
                  </div>

                  {/* Metadata */}
                  <div className="space-y-1.5 px-1">
                    <div className="flex items-center justify-between text-[11px] text-[#A7864B] font-medium tracking-wider uppercase">
                      <span>{item.origin || 'Single Origin'}</span>
                      {item.calories && <span className="text-[#8D8274]">{item.calories} kcal</span>}
                    </div>

                    <h3 className="font-serif-luxury text-xl font-medium text-[#062C2C] group-hover:text-[#A7864B] transition-colors leading-tight">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#685D52] line-clamp-2 leading-relaxed font-light">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Bar: Price & Elegant ADD button */}
                <div className="pt-4 mt-3 border-t border-[#C8A96A]/15 flex items-center justify-between px-1">
                  <div>
                    <span className="text-xs text-[#8D8274] block font-light">Price</span>
                    <span className="font-serif-luxury text-lg font-bold text-[#062C2C] tabular-nums">
                      {item.price.toLocaleString()} FRW
                    </span>
                  </div>

                  <button
                    onClick={(e) => handleQuickAdd(e, item)}
                    aria-label={`Add ${item.name} to order`}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isJustAdded
                        ? 'bg-[#062C2C] text-[#C8A96A]'
                        : 'bg-[#F6F1E8] hover:bg-[#C8A96A] text-[#062C2C] border border-[#C8A96A]/40 hover:border-[#C8A96A]'
                    }`}
                  >
                    {isJustAdded ? (
                      <Check className="w-4 h-4 animate-scaleUp" />
                    ) : (
                      <Plus className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dietary / Roasting Notes Footer */}
        <div className="mt-14 pt-8 border-t border-[#C8A96A]/20 flex flex-wrap items-center justify-between gap-4 text-xs text-[#685D52]">
          <div className="flex items-center gap-6">
            <span>✓ Organic Oat, Almond & Whole Milk Available</span>
            <span className="hidden sm:inline">·</span>
            <span className="hidden sm:inline">✓ Sugar-Free Madagascar Vanilla Option</span>
          </div>
          <div className="text-[#A7864B] font-medium">
            Takeout & Dine-In Available
          </div>
        </div>

      </div>
    </section>
  );
};
