import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSETS } from '../data/coffeeData';

interface StorySectionProps {
  onLearnMore?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onLearnMore }) => {
  const values = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
          <path d="M12 2C9 5 8 9 9 13c1 4 3 6 3 6s2-2 3-6c1-4 0-8-3-11z" />
          <path d="M12 7c-2 2-3 5-2 8" />
        </svg>
      ),
      title: 'Premium Beans',
      description: 'Expertly sourced from high-altitude exceptional micro-lots in Rwanda.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
          <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
          <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z" />
          <line x1="6" x2="6" y1="2" y2="4" />
          <line x1="10" x2="10" y1="2" y2="4" />
          <line x1="14" x2="14" y1="2" y2="4" />
        </svg>
      ),
      title: 'Artisan Crafted',
      description: 'Prepared with exact water chemistry and passion by skilled baristas.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      ),
      title: 'Cozy Atmosphere',
      description: 'Designed with tactile walnut, acoustic calm, and thoughtful seating.',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="w-5 h-5">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17" />
          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07" />
          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93" />
          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83" />
        </svg>
      ),
      title: 'Community First',
      description: 'Coffee that fosters meaningful conversations and lasting connections.',
    },
  ];

  return (
    <section
      id="story"
      className="relative py-24 lg:py-32 bg-gradient-to-b from-[#062C2C] via-[#093534] to-[#0D3B3A] overflow-hidden text-[#F8F5EF]"
    >
      {/* Decorative Gold Botanical Branch top right */}
      <div className="absolute top-10 right-4 lg:right-16 pointer-events-none opacity-25">
        <svg
          viewBox="0 0 320 220"
          className="w-72 lg:w-96 text-[#C8A96A]"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        >
          <path d="M10,210 Q120,110 280,20" />
          <path d="M60,160 C80,130 110,130 130,150" />
          <path d="M120,120 C140,80 180,90 190,110" />
          <path d="M190,80 C210,40 250,50 260,70" />
          <circle cx="130" cy="150" r="4" fill="currentColor" />
          <circle cx="190" cy="110" r="4" fill="currentColor" />
          <circle cx="260" cy="70" r="4" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Story Banner Header Strip as depicted in reference */}
        <div className="mb-14 p-8 lg:p-12 rounded-[28px] bg-[#073232] border border-[#C8A96A]/20 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs uppercase tracking-[0.22em] text-[#C8A96A] font-semibold block">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif-luxury font-normal text-[#F8F5EF] leading-tight">
                A Little Place with a{' '}
                <span className="font-script text-[#C8A96A] text-5xl sm:text-6xl italic inline-block ml-1">
                  Big Heart
                </span>
              </h2>
              <p className="text-[#D8CEC0] text-base lg:text-lg leading-relaxed font-light max-w-xl">
                BrewHaven was born from a simple idea — to create a space where great coffee, good people, and positive vibes come together. Today, it&apos;s a community, a cozy corner, and a home for coffee lovers.
              </p>
              <div className="pt-2">
                <button
                  onClick={onLearnMore}
                  className="group inline-flex items-center gap-3 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96A]/20 hover:-translate-y-0.5"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Right Calligraphic Quote Accent */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center text-center lg:text-right border-t lg:border-t-0 lg:border-l border-[#C8A96A]/15 pt-6 lg:pt-0 lg:pl-8">
              <div className="space-y-1">
                <p className="font-script text-[#C8A96A] text-3xl lg:text-4xl leading-tight">
                  Real People
                </p>
                <p className="font-script text-[#C8A96A] text-3xl lg:text-4xl leading-tight">
                  Real Coffee
                </p>
                <p className="font-script text-[#C8A96A] text-3xl lg:text-4xl leading-tight">
                  Real Moments ♡
                </p>
              </div>
              <span className="text-[10px] text-[#D8CEC0]/60 tracking-[0.2em] uppercase mt-3 block">
                BrewHaven Manifesto
              </span>
            </div>
          </div>
        </div>

        {/* Two-Column Deep Story & Farm Immersive View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT: Rwandan Landscape & Harvest Photography */}
          <div className="lg:col-span-6 relative">
            <div className="rounded-[28px] overflow-hidden border border-[#C8A96A]/25 shadow-2xl relative aspect-[16/11] group">
              <img
                src={ASSETS.rwandaFarm}
                alt="Rwandan coffee plantation at morning sunlight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#062C2C]/90 via-transparent to-black/20" />
              
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C8A96A] font-semibold block">
                    Origin Micro-lot #42
                  </span>
                  <span className="font-serif-luxury text-xl text-[#F8F5EF] font-medium">
                    Huye Mountain Cooperative, Rwanda
                  </span>
                  <span className="text-xs text-[#D8CEC0] block mt-0.5">
                    1,950m elevation · Red Bourbon Arabica
                  </span>
                </div>
                <div className="glass-teal-subtle px-3 py-1.5 rounded-full border border-[#C8A96A]/30 text-[11px] text-[#C8A96A] font-medium whitespace-nowrap">
                  Fair Trade Certified
                </div>
              </div>
            </div>

            {/* Overlapping small accent card: Fresh Roast Beans */}
            <div className="absolute -bottom-6 -right-4 sm:right-6 bg-[#0D3B3A]/95 backdrop-blur-md p-4 rounded-2xl border border-[#C8A96A]/30 shadow-2xl flex items-center gap-4 max-w-xs">
              <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-[#C8A96A]/30">
                <img
                  src={ASSETS.coffeeBeans}
                  alt="Fresh roasted beans"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="text-xs font-semibold text-[#F8F5EF] block">
                  Roasted In-House Weekly
                </span>
                <span className="text-[11px] text-[#D8CEC0] font-light">
                  Light-medium profile to preserve floral jasmine notes.
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Floating Gold Value Icons */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-2">
              <span className="text-xs tracking-[0.2em] uppercase text-[#C8A96A] font-semibold">
                Our Core Pillars
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif-luxury text-[#F8F5EF]">
                Crafted with intention, served with warmth.
              </h3>
            </div>

            {/* Floating Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-3">
              {values.map((val) => (
                <div
                  key={val.title}
                  className="p-5 rounded-[22px] bg-[#0A3332]/70 border border-[#C8A96A]/15 hover:border-[#C8A96A]/40 transition-all duration-300 hover:-translate-y-1 hover:bg-[#0D3B3A]/80 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#062C2C] border border-[#C8A96A]/30 text-[#C8A96A] flex items-center justify-center mb-3 group-hover:scale-110 group-hover:border-[#C8A96A] transition-all">
                    {val.icon}
                  </div>
                  <h4 className="font-serif-luxury text-lg font-medium text-[#F8F5EF] mb-1">
                    {val.title}
                  </h4>
                  <p className="text-xs text-[#D8CEC0] leading-relaxed font-light">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
