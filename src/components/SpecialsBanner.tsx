import React from 'react';
import { ArrowRight, Coffee, Heart, Users, Sparkles } from 'lucide-react';
import { ASSETS } from '../data/coffeeData';

interface SpecialsBannerProps {
  onViewMenu: () => void;
}

export const SpecialsBanner: React.FC<SpecialsBannerProps> = ({ onViewMenu }) => {
  return (
    <section className="py-16 bg-[#F6F1E8] border-b border-[#C8A96A]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Special Card with Curved Cutout and Ceramic Cup */}
          <div className="lg:col-span-5 bg-[#062C2C] text-[#F8F5EF] rounded-[28px] p-8 sm:p-10 relative overflow-hidden flex flex-col justify-between border border-[#C8A96A]/30 shadow-xl">
            {/* Ambient gold glow */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-[#C8A96A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#C8A96A] font-semibold block">
                Our Specials
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury font-normal leading-tight">
                Featured Tasting Menu
              </h3>
              <p className="text-xs sm:text-sm text-[#D8CEC0] font-light leading-relaxed max-w-sm">
                From velvety espressos to hand-whisked Kyoto matcha, our seasonal curation is designed to satisfy every discerning coffee lover.
              </p>
            </div>

            <div className="pt-8 flex items-center justify-between relative z-10">
              <button
                onClick={onViewMenu}
                className="group inline-flex items-center gap-2.5 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96A]/20"
              >
                <span>View Full Menu</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Decorative mini badge */}
              <div className="w-16 h-16 rounded-full border border-[#C8A96A]/40 overflow-hidden shadow-lg hidden sm:block">
                <img
                  src={ASSETS.heroLatte}
                  alt="Ceramic latte cup"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right: 4-Value Pillar Badges & Community Photo */}
          <div className="lg:col-span-7 bg-white rounded-[28px] p-8 border border-[#C8A96A]/20 shadow-sm flex flex-col justify-between">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
              
              {/* Pillar 1 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#062C2C] text-[#C8A96A] flex items-center justify-center border border-[#C8A96A]/30">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-[#062C2C] uppercase tracking-wider">
                  100% Premium Beans
                </h4>
                <p className="text-[11px] text-[#685D52] font-light">
                  Sourced from exceptional volcanic micro-climates.
                </p>
              </div>

              {/* Pillar 2 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#062C2C] text-[#C8A96A] flex items-center justify-center border border-[#C8A96A]/30">
                  <Coffee className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-[#062C2C] uppercase tracking-wider">
                  Expertly Crafted
                </h4>
                <p className="text-[11px] text-[#685D52] font-light">
                  Dialed in by certified Q-graders and master baristas.
                </p>
              </div>

              {/* Pillar 3 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#062C2C] text-[#C8A96A] flex items-center justify-center border border-[#C8A96A]/30">
                  <Heart className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-[#062C2C] uppercase tracking-wider">
                  Cozy Atmosphere
                </h4>
                <p className="text-[11px] text-[#685D52] font-light">
                  Quiet corners, warm wood, and gentle acoustics.
                </p>
              </div>

              {/* Pillar 4 */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-[#062C2C] text-[#C8A96A] flex items-center justify-center border border-[#C8A96A]/30">
                  <Users className="w-5 h-5" />
                </div>
                <h4 className="text-xs font-bold text-[#062C2C] uppercase tracking-wider">
                  Friendly Community
                </h4>
                <p className="text-[11px] text-[#685D52] font-light">
                  A place where strangers become daily friends.
                </p>
              </div>

            </div>

            {/* Bottom mini banner strip */}
            <div className="mt-6 pt-5 border-t border-[#C8A96A]/15 flex items-center justify-between text-xs text-[#8D8274]">
              <span className="font-serif-luxury text-base text-[#062C2C] italic">
                &ldquo;Where slow coffee meets good company.&rdquo;
              </span>
              <span className="text-[#A7864B] font-medium tracking-wide">
                Specialty Coffee Guild Accredited
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
