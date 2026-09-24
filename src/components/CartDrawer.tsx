import React, { useState } from 'react';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, CheckCircle2 } from 'lucide-react';
import { CartItem } from '../types';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, newQty: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [customerName, setCustomerName] = useState('');
  const [tableOrPickup, setTableOrPickup] = useState<'dine-in' | 'takeout'>('dine-in');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.menuItem.price * item.quantity,
    0
  );
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
    }, 1200);
  };

  const handleFinish = () => {
    setOrderComplete(false);
    onClearCart();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0D3B3A] border-l border-[#C8A96A]/30 text-[#F8F5EF] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="p-6 border-b border-[#C8A96A]/20 flex items-center justify-between bg-[#062C2C]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C8A96A]" />
              <h3 className="font-serif-luxury text-2xl font-medium tracking-wide">
                Your Coffee Order
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full hover:bg-white/5"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {orderComplete ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#062C2C] border-2 border-[#C8A96A] flex items-center justify-center text-[#C8A96A] animate-scaleUp">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-luxury text-3xl font-medium text-[#F8F5EF]">
                  Order Confirmed!
                </h4>
                <p className="text-xs text-[#D8CEC0] font-light max-w-xs leading-relaxed">
                  Thank you, <span className="font-semibold text-[#F8F5EF]">{customerName || 'Friend'}</span>. Your artisan drinks are now being queued at the espresso bar.
                </p>
                <div className="p-4 bg-[#062C2C] rounded-2xl border border-[#C8A96A]/20 w-full text-xs text-left space-y-1.5">
                  <div className="flex justify-between">
                    <span className="text-[#A7864B]">Order Number:</span>
                    <span className="font-mono text-[#F8F5EF]">#BH-{(Date.now() % 10000)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A7864B]">Type:</span>
                    <span className="capitalize text-[#F8F5EF]">{tableOrPickup}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#A7864B]">Estimated prep:</span>
                    <span className="text-[#F8F5EF]">5 – 7 minutes</span>
                  </div>
                </div>
                <button
                  onClick={handleFinish}
                  className="w-full bg-[#C8A96A] text-[#062C2C] font-semibold text-xs uppercase tracking-wider py-3.5 rounded-full hover:bg-[#d8bb7f] transition-colors"
                >
                  Start New Order
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#062C2C] border border-[#C8A96A]/20 flex items-center justify-center text-[#C8A96A]/60">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h4 className="font-serif-luxury text-2xl font-medium text-[#F8F5EF]">
                  Your Bag is Quiet
                </h4>
                <p className="text-xs text-[#D8CEC0] max-w-xs font-light">
                  Explore our curated seasonal menu and indulge in an artisan pour crafted with passion.
                </p>
                <button
                  onClick={onClose}
                  className="mt-2 bg-[#C8A96A] text-[#062C2C] font-semibold text-xs uppercase tracking-wider px-6 py-3 rounded-full hover:bg-[#d8bb7f] transition-colors"
                >
                  Browse Menu
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-2xl bg-[#062C2C]/80 border border-[#C8A96A]/20 flex gap-4 items-center justify-between"
                  >
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-black/30 flex-shrink-0 border border-[#C8A96A]/30">
                      <img
                        src={item.menuItem.image}
                        alt={item.menuItem.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className="font-serif-luxury text-base font-semibold text-[#F8F5EF] truncate">
                        {item.menuItem.name}
                      </h5>
                      <div className="text-[11px] text-[#A7864B] flex flex-wrap gap-1 font-light">
                        {item.milkChoice && <span>{item.milkChoice}</span>}
                        {item.temperature && <span>· {item.temperature}</span>}
                      </div>
                      <div className="font-serif-luxury text-sm font-bold text-[#C8A96A] mt-1 tabular-nums">
                        {(item.menuItem.price * item.quantity).toLocaleString()} FRW
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-[#C8A96A]/30 rounded-full bg-[#0D3B3A] p-0.5">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/10 text-[#D8CEC0]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-6 text-center text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-white/10 text-[#D8CEC0]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="p-1.5 text-[#D8CEC0]/60 hover:text-rose-400 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer & Checkout Form */}
          {cartItems.length > 0 && !orderComplete && (
            <div className="p-6 bg-[#062C2C] border-t border-[#C8A96A]/20 space-y-4">
              {/* Dine-In vs Takeout selector */}
              <div className="grid grid-cols-2 gap-2 bg-[#0D3B3A] p-1 rounded-xl border border-[#C8A96A]/20">
                <button
                  type="button"
                  onClick={() => setTableOrPickup('dine-in')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
                    tableOrPickup === 'dine-in'
                      ? 'bg-[#C8A96A] text-[#062C2C]'
                      : 'text-[#D8CEC0] hover:text-white'
                  }`}
                >
                  Table Service
                </button>
                <button
                  type="button"
                  onClick={() => setTableOrPickup('takeout')}
                  className={`py-2 text-xs font-semibold rounded-lg transition-colors ${
                    tableOrPickup === 'takeout'
                      ? 'bg-[#C8A96A] text-[#062C2C]'
                      : 'text-[#D8CEC0] hover:text-white'
                  }`}
                >
                  Express Takeout
                </button>
              </div>

              {/* Guest name */}
              <div>
                <input
                  type="text"
                  placeholder="Your Name for the Cup (e.g. Keza)"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full bg-[#0D3B3A] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A] placeholder:text-[#8D8274]"
                />
              </div>

              {/* Pricing breakdown */}
              <div className="space-y-1.5 text-xs text-[#D8CEC0]">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="tabular-nums font-mono">{subtotal.toLocaleString()} FRW</span>
                </div>
                <div className="flex justify-between">
                  <span>Rwanda VAT (18%)</span>
                  <span className="tabular-nums font-mono">{tax.toLocaleString()} FRW</span>
                </div>
                <div className="flex justify-between font-serif-luxury text-lg font-bold text-[#F8F5EF] pt-2 border-t border-[#C8A96A]/15">
                  <span>Total</span>
                  <span className="text-[#C8A96A] tabular-nums font-mono">
                    {total.toLocaleString()} FRW
                  </span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handlePlaceOrder}
                disabled={isCheckingOut}
                className="w-full bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs uppercase tracking-wider py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
              >
                {isCheckingOut ? (
                  <span>Sending to Barista...</span>
                ) : (
                  <>
                    <span>Confirm & Pay {total.toLocaleString()} FRW</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
