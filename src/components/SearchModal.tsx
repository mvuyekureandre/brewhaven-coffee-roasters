import React, { useState } from 'react';
import { Search, X, Plus, Sparkles, ArrowRight } from 'lucide-react';
import { MENU_ITEMS } from '../data/coffeeData';
import { MenuItem } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectItem: (item: MenuItem) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectItem,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const results = query.trim() === ''
    ? MENU_ITEMS.slice(0, 4)
    : MENU_ITEMS.filter(
        (item) =>
          item.name.toLowerCase().includes(query.toLowerCase()) ||
          item.description.toLowerCase().includes(query.toLowerCase()) ||
          item.ingredients.some((ing) => ing.toLowerCase().includes(query.toLowerCase())) ||
          (item.origin && item.origin.toLowerCase().includes(query.toLowerCase()))
      );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-20 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#062C2C]/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#0D3B3A] text-[#F8F5EF] rounded-[28px] border border-[#C8A96A]/30 shadow-2xl overflow-hidden z-10">
        
        {/* Search Input Bar */}
        <div className="p-5 bg-[#062C2C] border-b border-[#C8A96A]/20 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#C8A96A]" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lattes, matcha, beans, or ingredients..."
            className="flex-1 bg-transparent text-sm text-[#F8F5EF] placeholder:text-[#8D8274] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-[#8D8274] hover:text-[#D8CEC0]"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-[#D8CEC0] hover:text-[#C8A96A] rounded-full hover:bg-white/5 ml-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Tags */}
        <div className="px-5 py-3 bg-[#08302f] border-b border-[#C8A96A]/15 flex items-center gap-2 overflow-x-auto text-xs text-[#D8CEC0]">
          <span className="text-[#A7864B] font-medium text-[11px] uppercase tracking-wider">
            Popular:
          </span>
          {['Caramel Latte', 'Matcha', 'Nitro Cold Brew', 'Oat Milk', 'Rwanda'].map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-full bg-[#0D3B3A] border border-[#C8A96A]/20 hover:border-[#C8A96A] text-[11px] whitespace-nowrap transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="p-5 max-h-[60vh] overflow-y-auto space-y-3">
          {results.length === 0 ? (
            <div className="text-center py-10 space-y-2">
              <Sparkles className="w-8 h-8 text-[#C8A96A]/50 mx-auto" />
              <p className="font-serif-luxury text-xl text-[#F8F5EF]">No brew found</p>
              <p className="text-xs text-[#D8CEC0] font-light">
                Try searching for &quot;latte&quot;, &quot;chocolate&quot;, or &quot;espresso&quot;.
              </p>
            </div>
          ) : (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  onSelectItem(item);
                  onClose();
                }}
                className="p-3.5 rounded-2xl bg-[#062C2C]/60 border border-[#C8A96A]/15 hover:border-[#C8A96A]/40 transition-all flex items-center gap-4 cursor-pointer group"
              >
                <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/40 flex-shrink-0 border border-[#C8A96A]/20">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h4 className="font-serif-luxury text-base font-semibold text-[#F8F5EF] group-hover:text-[#C8A96A] transition-colors truncate">
                      {item.name}
                    </h4>
                    <span className="font-serif-luxury text-sm font-bold text-[#C8A96A] tabular-nums ml-2 whitespace-nowrap">
                      {item.price.toLocaleString()} FRW
                    </span>
                  </div>
                  <p className="text-xs text-[#D8CEC0] truncate font-light mt-0.5">
                    {item.description}
                  </p>
                </div>
                <div className="p-2 text-[#C8A96A] opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
