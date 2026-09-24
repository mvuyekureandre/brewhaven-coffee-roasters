import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag, Sparkles, Check } from 'lucide-react';
import { MenuItem, CartItem } from '../types';

interface ProductModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCartWithOptions: (cartItem: CartItem) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  item,
  onClose,
  onAddToCartWithOptions,
}) => {
  const [milk, setMilk] = useState('Barista Oat Milk');
  const [temp, setTemp] = useState<'Hot' | 'Iced'>('Hot');
  const [sweetness, setSweetness] = useState('Standard');
  const [extraShot, setExtraShot] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!item) return null;

  const extraShotCost = extraShot ? 800 : 0;
  const milkCost = milk.includes('Oat') || milk.includes('Almond') ? 500 : 0;
  const unitPrice = item.price + extraShotCost + milkCost;
  const totalPrice = unitPrice * quantity;

  const handleAdd = () => {
    onAddToCartWithOptions({
      id: `${item.id}-${Date.now()}`,
      menuItem: item,
      quantity,
      milkChoice: milk,
      sweetness,
      temperature: temp,
      extraShot,
    });
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#062C2C]/85 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-2xl bg-[#0D3B3A] text-[#F8F5EF] rounded-[28px] border border-[#C8A96A]/30 shadow-2xl overflow-hidden my-8 z-10 grid grid-cols-1 md:grid-cols-2">
        
        {/* Left Side: Product Image & Origin */}
        <div className="relative aspect-square md:aspect-auto h-full min-h-[300px] overflow-hidden bg-black/40">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B3A] via-transparent to-transparent md:hidden" />
          
          <div className="absolute top-4 left-4">
            <span className="glass-teal text-[10px] uppercase tracking-widest font-semibold text-[#C8A96A] px-3 py-1.5 rounded-full border border-[#C8A96A]/30">
              {item.origin || 'Single Origin'}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 hidden md:block glass-teal p-3.5 rounded-2xl border border-[#C8A96A]/20">
            <span className="text-[10px] text-[#A7864B] uppercase tracking-wider block font-semibold">
              Ingredients
            </span>
            <p className="text-xs text-[#D8CEC0] font-light mt-0.5">
              {item.ingredients.join(' · ')}
            </p>
          </div>
        </div>

        {/* Right Side: Customization & Add */}
        <div className="p-6 sm:p-8 flex flex-col justify-between space-y-5">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold">
                Signature Craft
              </span>
              <button
                onClick={onClose}
                className="p-1.5 text-[#D8CEC0] hover:text-[#C8A96A] rounded-full hover:bg-white/5"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div>
              <h3 className="font-serif-luxury text-3xl font-medium text-[#F8F5EF] leading-tight">
                {item.name}
              </h3>
              <p className="text-xs text-[#D8CEC0] font-light mt-1 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Temperature toggle */}
            <div>
              <label className="text-[11px] text-[#A7864B] uppercase tracking-wider block mb-1.5 font-semibold">
                Temperature
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Hot', 'Iced'] as const).map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTemp(t)}
                    className={`py-2 text-xs font-semibold rounded-xl border transition-all ${
                      temp === t
                        ? 'bg-[#062C2C] border-[#C8A96A] text-[#F8F5EF]'
                        : 'border-[#C8A96A]/20 text-[#D8CEC0] hover:border-[#C8A96A]/40'
                    }`}
                  >
                    {t === 'Hot' ? '♨ Steamed Hot' : '❄ Chilled with Ice'}
                  </button>
                ))}
              </div>
            </div>

            {/* Milk choice */}
            <div>
              <label className="text-[11px] text-[#A7864B] uppercase tracking-wider block mb-1.5 font-semibold">
                Milk Selection
              </label>
              <select
                value={milk}
                onChange={(e) => setMilk(e.target.value)}
                className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-3 py-2 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
              >
                <option value="Barista Oat Milk">Barista Oat Milk (+500 FRW)</option>
                <option value="Organic Almond Milk">Organic Almond Milk (+500 FRW)</option>
                <option value="Inyange Whole Farm Milk">Inyange Rwandan Whole Milk</option>
                <option value="Light Skim Milk">Light Skim Milk</option>
              </select>
            </div>

            {/* Sweetness */}
            <div>
              <label className="text-[11px] text-[#A7864B] uppercase tracking-wider block mb-1.5 font-semibold">
                Sweetness
              </label>
              <div className="grid grid-cols-3 gap-2 text-center">
                {['Unsweetened', 'Half Sweet', 'Standard'].map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSweetness(s)}
                    className={`py-1.5 text-xs rounded-xl border transition-all ${
                      sweetness === s
                        ? 'bg-[#062C2C] border-[#C8A96A] text-[#F8F5EF]'
                        : 'border-[#C8A96A]/20 text-[#D8CEC0] hover:border-[#C8A96A]/40'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Extra shot toggle */}
            <div className="flex items-center justify-between p-3 rounded-xl bg-[#062C2C] border border-[#C8A96A]/20">
              <div className="text-xs">
                <span className="text-[#F8F5EF] font-medium block">Add Extra Ristretto Shot</span>
                <span className="text-[#A7864B] text-[10px]">+800 FRW</span>
              </div>
              <input
                type="checkbox"
                checked={extraShot}
                onChange={(e) => setExtraShot(e.target.checked)}
                className="w-4 h-4 accent-[#C8A96A] cursor-pointer"
              />
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="pt-4 border-t border-[#C8A96A]/20 flex items-center justify-between gap-4">
            {/* Quantity Stepper */}
            <div className="flex items-center border border-[#C8A96A]/30 rounded-full bg-[#062C2C] p-1">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 text-[#D8CEC0]"
                aria-label="Decrease quantity"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="w-8 text-center text-xs font-semibold tabular-nums">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-7 h-7 rounded-full flex items-center justify-center hover:bg-white/10 text-[#D8CEC0]"
                aria-label="Increase quantity"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add Button */}
            <button
              onClick={handleAdd}
              className="flex-1 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>Add · {totalPrice.toLocaleString()} FRW</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};
