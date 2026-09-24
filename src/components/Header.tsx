import React, { useState, useEffect } from 'react';
import { Search, ShoppingBag, Menu as MenuIcon, X, Calendar } from 'lucide-react';

interface HeaderProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
  onOpenSearch: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
  onOpenSearch,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Menu', href: '#menu' },
    { label: 'About', href: '#story' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact', href: '#footer' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[84px] transition-all duration-500 ${
          isScrolled
            ? 'bg-[#062C2C]/95 backdrop-blur-md shadow-2xl border-b border-[#C8A96A]/20'
            : 'bg-transparent border-b border-[#C8A96A]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-6 lg:px-12 flex items-center justify-between">
          {/* Left: Brand Logo Lockup */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C8A96A]"
          >
            {/* Elegant Botanical Gold Emblem */}
            <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 flex items-center justify-center bg-[#0D3B3A]/60 text-[#C8A96A] group-hover:border-[#C8A96A] group-hover:scale-105 transition-all duration-300">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                {/* Coffee Leaf & Cup Symbol */}
                <path d="M12 2C9 5 8 9 9 13c1 4 3 6 3 6s2-2 3-6c1-4 0-8-3-11z" />
                <path d="M12 7c-2 2-3 5-2 8" />
                <path d="M6 19c2 1 4 1 6 1s4 0 6-1" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-2xl tracking-[0.08em] font-semibold text-[#F8F5EF] group-hover:text-[#C8A96A] transition-colors">
                BREWHAVEN
              </span>
              <span className="text-[9px] tracking-[0.22em] text-[#C8A96A] font-medium uppercase -mt-1">
                Coffee · People · Better Days
              </span>
            </div>
          </a>

          {/* Center: Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="relative py-1 text-[#D8CEC0] hover:text-[#F8F5EF] transition-colors group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C8A96A] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-3 lg:gap-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search Menu"
              className="p-2 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full hover:bg-[#0D3B3A]/60"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Instagram Link */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="BrewHaven Instagram"
              className="hidden sm:flex p-2 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full hover:bg-[#0D3B3A]/60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-4 h-4"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              aria-label="Open Shopping Bag"
              className="relative p-2 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full hover:bg-[#0D3B3A]/60"
            >
              <ShoppingBag className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#C8A96A] text-[#062C2C] text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Gold "Reserve Table" Button */}
            <button
              onClick={onOpenReservation}
              className="hidden lg:flex items-center gap-2 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96A]/20 active:scale-95 whitespace-nowrap"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve Table</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="md:hidden p-2 text-[#F8F5EF] hover:text-[#C8A96A]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#062C2C]/98 backdrop-blur-xl pt-24 px-8 flex flex-col justify-between pb-12 animate-fadeIn md:hidden">
          <div className="flex flex-col gap-6">
            <div className="border-b border-[#C8A96A]/20 pb-4">
              <span className="text-xs uppercase tracking-widest text-[#C8A96A] font-semibold">
                Explore BrewHaven
              </span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-serif-luxury text-2xl text-[#F8F5EF] hover:text-[#C8A96A] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-[#C8A96A]/20">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full bg-[#C8A96A] text-[#062C2C] font-semibold text-sm py-3.5 rounded-full flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Reserve a Table
            </button>
            <div className="flex justify-center gap-6 pt-2 text-[#D8CEC0] text-xs">
              <span>Opening Hours: 07:00 – 20:00</span>
              <span>·</span>
              <span>124 Highland Way</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
