import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StorySection } from './components/StorySection';
import { CuratedMenu } from './components/CuratedMenu';
import { SpecialsBanner } from './components/SpecialsBanner';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { NewsletterSection } from './components/NewsletterSection';
import { Footer } from './components/Footer';

import { CartDrawer } from './components/CartDrawer';
import { ReservationModal } from './components/ReservationModal';
import { ProductModal } from './components/ProductModal';
import { StoryVideoModal } from './components/StoryVideoModal';
import { SearchModal } from './components/SearchModal';

import { MenuItem, CartItem } from './types';
import { MENU_ITEMS } from './data/coffeeData';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'default-item-1',
      menuItem: MENU_ITEMS[0], // Caramel Latte
      quantity: 1,
      milkChoice: 'Barista Oat Milk',
      temperature: 'Hot',
      sweetness: 'Standard',
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isReservationOpen, setIsReservationOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isStoryVideoOpen, setIsStoryVideoOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleQuickAddToCart = (item: MenuItem) => {
    setCartItems((prev) => {
      const existing = prev.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        return prev.map((ci) =>
          ci.id === existing.id ? { ...ci, quantity: ci.quantity + 1 } : ci
        );
      }
      return [
        ...prev,
        {
          id: `${item.id}-${Date.now()}`,
          menuItem: item,
          quantity: 1,
          milkChoice: 'Barista Oat Milk',
          temperature: 'Hot',
        },
      ];
    });
    showToast(`Added ${item.name} to your bag`);
  };

  const handleAddToCartWithOptions = (customItem: CartItem) => {
    setCartItems((prev) => [...prev, customItem]);
    showToast(`Added ${customItem.menuItem.name} (${customItem.milkChoice || 'Customized'})`);
  };

  const handleUpdateQuantity = (id: string, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveFromCart = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#062C2C] text-[#F8F5EF] flex flex-col font-sans selection:bg-[#C8A96A] selection:text-[#062C2C]">
      {/* 1. Transparent Sticky Header */}
      <Header
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => setIsReservationOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 2. Hero Experience */}
        <Hero
          onExploreMenu={() => scrollToSection('menu')}
          onWatchStory={() => setIsStoryVideoOpen(true)}
        />

        {/* 3. Our Story Section */}
        <StorySection onLearnMore={() => setIsStoryVideoOpen(true)} />

        {/* 4. Curated Menu */}
        <CuratedMenu
          onAddToCart={handleQuickAddToCart}
          onSelectItem={(item) => setSelectedProduct(item)}
        />

        {/* 5. Specials Banner & Core Pillars */}
        <SpecialsBanner onViewMenu={() => scrollToSection('menu')} />

        {/* 6. Experience Gallery */}
        <GallerySection />

        {/* 7. Testimonials */}
        <TestimonialsSection onLeaveReview={() => scrollToSection('testimonials')} />

        {/* 8. Newsletter Dispatch */}
        <NewsletterSection />
      </main>

      {/* 9. Luxury Footer */}
      <Footer onOpenReservation={() => setIsReservationOpen(true)} />

      {/* Slide-out Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onClearCart={handleClearCart}
      />

      {/* Table Reservation Modal */}
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Product Customization Modal */}
      <ProductModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCartWithOptions={handleAddToCartWithOptions}
      />

      {/* Watch Story Cinema Modal */}
      <StoryVideoModal
        isOpen={isStoryVideoOpen}
        onClose={() => setIsStoryVideoOpen(false)}
      />

      {/* Real-time Drink Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectItem={(item) => setSelectedProduct(item)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0D3B3A] text-[#F8F5EF] border border-[#C8A96A]/40 px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-3 animate-fadeIn">
          <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-pulse" />
          <span className="text-xs font-medium tracking-wide">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
