import React from 'react';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  onOpenReservation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  return (
    <footer id="footer" className="bg-[#062C2C] text-[#F8F5EF] relative pt-20 pb-12 overflow-hidden border-t border-[#C8A96A]/20">
      
      {/* Botanical Gold Vine Left Decoration */}
      <div className="absolute bottom-0 left-0 w-48 h-64 pointer-events-none opacity-20 text-[#C8A96A]">
        <svg viewBox="0 0 160 220" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,220 Q60,160 80,80 Q90,30 140,0" />
          <path d="M40,160 C70,140 70,110 50,110 C30,110 30,140 40,160 Z" />
          <path d="M70,110 C100,90 100,60 80,60 C60,60 60,90 70,110 Z" />
          <path d="M100,60 C130,40 130,10 110,10 C90,10 90,40 100,60 Z" />
        </svg>
      </div>

      {/* Botanical Gold Vine Right Decoration */}
      <div className="absolute bottom-0 right-0 w-48 h-64 pointer-events-none opacity-20 text-[#C8A96A] transform -scale-x-100">
        <svg viewBox="0 0 160 220" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M0,220 Q60,160 80,80 Q90,30 140,0" />
          <path d="M40,160 C70,140 70,110 50,110 C30,110 30,140 40,160 Z" />
          <path d="M70,110 C100,90 100,60 80,60 C60,60 60,90 70,110 Z" />
          <path d="M100,60 C130,40 130,10 110,10 C90,10 90,40 100,60 Z" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Brand Statement */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-14 border-b border-[#C8A96A]/15 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full border border-[#C8A96A]/50 bg-[#0D3B3A] text-[#C8A96A] flex items-center justify-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                <path d="M12 2C9 5 8 9 9 13c1 4 3 6 3 6s2-2 3-6c1-4 0-8-3-11z" />
                <path d="M12 7c-2 2-3 5-2 8" />
                <path d="M6 19c2 1 4 1 6 1s4 0 6-1" />
              </svg>
            </div>
            <div>
              <span className="font-serif-luxury text-3xl tracking-widest text-[#F8F5EF] block font-semibold">
                BREWHAVEN
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#C8A96A] uppercase font-medium">
                Coffee · People · Better Days
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs text-[#D8CEC0]">Looking for a quiet spot?</span>
            <button
              onClick={onOpenReservation}
              className="bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-5 py-2.5 rounded-full transition-all duration-300"
            >
              Book a Table
            </button>
          </div>
        </div>

        {/* Four Columns Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-14">
          
          {/* Col 1: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CEC0] font-light">
              <li>
                <a href="#hero" className="hover:text-[#F8F5EF] hover:underline underline-offset-4 transition-colors">
                  Home Sanctuary
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#F8F5EF] hover:underline underline-offset-4 transition-colors">
                  Our Origin Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#F8F5EF] hover:underline underline-offset-4 transition-colors">
                  Curated Drink Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#F8F5EF] hover:underline underline-offset-4 transition-colors">
                  Editorial Gallery
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-[#F8F5EF] hover:underline underline-offset-4 transition-colors">
                  Guest Reviews
                </a>
              </li>
            </ul>
          </div>

          {/* Col 2: Specialty Menu Highlights */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Specialty Menu
            </h4>
            <ul className="space-y-2.5 text-sm text-[#D8CEC0] font-light">
              <li className="flex justify-between items-center pr-4">
                <span>Caramel Latte</span>
                <span className="text-[#C8A96A] text-xs font-medium tabular-nums">4,500 FRW</span>
              </li>
              <li className="flex justify-between items-center pr-4">
                <span>Ceremonial Matcha</span>
                <span className="text-[#C8A96A] text-xs font-medium tabular-nums">4,200 FRW</span>
              </li>
              <li className="flex justify-between items-center pr-4">
                <span>Nitro 20-Hour Brew</span>
                <span className="text-[#C8A96A] text-xs font-medium tabular-nums">4,000 FRW</span>
              </li>
              <li className="flex justify-between items-center pr-4">
                <span>Velvet Rwandan Mocha</span>
                <span className="text-[#C8A96A] text-xs font-medium tabular-nums">4,800 FRW</span>
              </li>
              <li className="flex justify-between items-center pr-4">
                <span>Rwanda Bourbon Beans (250g)</span>
                <span className="text-[#C8A96A] text-xs font-medium tabular-nums">14,000 FRW</span>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Hours & Location
            </h4>
            <div className="space-y-3 text-xs text-[#D8CEC0] font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                <span>KG 674 St, Kimihurura, Kigali, Rwanda</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C8A96A] flex-shrink-0 mt-0.5" />
                <div>
                  <p>Mon – Fri: 06:30 – 21:00 CAT</p>
                  <p>Sat – Sun: 07:30 – 22:00 CAT</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span>+250 788 123 456</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C8A96A] flex-shrink-0" />
                <span>kigali@brewhavencoffee.rw</span>
              </div>
            </div>
          </div>

          {/* Col 4: Social & Ethics */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C8A96A]">
              Connect & Ethos
            </h4>
            <p className="text-xs text-[#D8CEC0] leading-relaxed font-light">
              100% of our green coffees are ethically purchased at 2.4× fair trade minimum directly from cooperative farming families.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full border border-[#C8A96A]/30 flex items-center justify-center text-[#D8CEC0] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full border border-[#C8A96A]/30 flex items-center justify-center text-[#D8CEC0] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
                className="w-9 h-9 rounded-full border border-[#C8A96A]/30 flex items-center justify-center text-[#D8CEC0] hover:text-[#C8A96A] hover:border-[#C8A96A] transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom divider and copyright */}
        <div className="pt-8 border-t border-[#C8A96A]/15 text-center text-xs text-[#D8CEC0]/70 font-light">
          <p>© 2026 BrewHaven. Crafted with passion. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};
