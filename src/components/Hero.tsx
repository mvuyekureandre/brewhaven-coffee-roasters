import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { ASSETS } from '../data/coffeeData';

interface HeroProps {
  onExploreMenu: () => void;
  onWatchStory: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreMenu, onWatchStory }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const heroSlides = [
    {
      id: 'signature-pour',
      kicker: 'Signature Pour',
      title: 'Velvet Microfoam Latte',
      price: '4,500 FRW',
      image: ASSETS.signaturePour,
      alt: 'Signature Pour Velvet Microfoam Latte in teal ceramic cup with Brewhaven booklet',
    },
    {
      id: 'cold-brew',
      kicker: 'Cold Brew Good Vibes ♡',
      title: '20-Hour Nitro Steep',
      price: '4,000 FRW',
      image: ASSETS.coldBrew,
      alt: 'Cold Brew Good Vibes 20-Hour Nitro Steep in chilled crystal glass',
    },
    {
      id: 'caramel-latte',
      kicker: 'The Art of Iced Caramel Latte',
      title: 'Handcrafted Caramel Swirl',
      price: '4,500 FRW',
      image: ASSETS.icedCaramel,
      alt: 'The Art of Iced Caramel Latte with rich espresso and golden caramel swirl',
    },
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  }, [heroSlides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, [heroSlides.length]);

  // Auto-play sliding carousel with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-[104px] pb-20 lg:pb-28 flex items-center overflow-hidden bg-[#062C2C]"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#0D3B3A] rounded-full blur-[140px] pointer-events-none opacity-60" />
      <div className="absolute -bottom-24 right-10 w-[500px] h-[500px] bg-[#C8A96A]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Decorative botanical gold lines top-left background */}
      <svg
        className="absolute top-16 left-0 w-72 h-72 opacity-15 pointer-events-none text-[#C8A96A]"
        viewBox="0 0 200 200"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        <path d="M10,190 Q90,90 190,10" />
        <path d="M50,150 Q100,100 150,50" />
        <path d="M80,180 Q130,130 180,80" />
        <circle cx="90" cy="90" r="4" fill="currentColor" opacity="0.4" />
        <circle cx="150" cy="50" r="3" fill="currentColor" opacity="0.4" />
      </svg>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: 45% (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6 pt-6 lg:pt-0">
            {/* Kicker */}
            <div className="flex items-center gap-2.5 text-[#C8A96A] tracking-[0.24em] uppercase text-xs font-semibold">
              <span className="w-6 h-[1.5px] bg-[#C8A96A]/60" />
              <span>Kigali Specialty Roastery</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-[72px] leading-[1.04] text-[#F8F5EF] font-serif-luxury font-normal">
              Good Coffee,
              <br />
              <span className="font-script text-[#C8A96A] text-6xl sm:text-7xl lg:text-8xl italic block mt-1">
                Brighter Days
              </span>
            </h1>

            {/* Subtitle / Prose */}
            <p className="text-[#D8CEC0] text-base sm:text-lg leading-relaxed max-w-lg font-light">
              Single-origin Rwandan Red Bourbon, artisan roasting, and a tranquil sanctuary in the heart of Kigali. Fresh brews, cozy spaces, and a community that loves great taste.
            </p>

            {/* CTA Button Lockup */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreMenu}
                className="group inline-flex items-center gap-3 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96A]/25 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Our Menu</span>
                <span className="w-7 h-7 rounded-full bg-[#062C2C] text-[#C8A96A] flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </button>

              <button
                onClick={onWatchStory}
                className="inline-flex items-center gap-3 text-[#F8F5EF] hover:text-[#C8A96A] border border-[#C8A96A]/30 hover:border-[#C8A96A] bg-[#0D3B3A]/40 backdrop-blur-sm text-sm font-medium px-6 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="w-6 h-6 rounded-full border border-[#C8A96A]/60 flex items-center justify-center">
                  <Play className="w-3 h-3 fill-current text-[#C8A96A]" />
                </div>
                <span>Watch Story</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-8 border-t border-[#C8A96A]/15 grid grid-cols-3 gap-6 w-full max-w-md">
              <div>
                <span className="block font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#F8F5EF] tabular-nums">
                  100%
                </span>
                <span className="text-[11px] text-[#D8CEC0] uppercase tracking-wider block mt-0.5">
                  Rwandan Bourbon
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#F8F5EF] tabular-nums">
                  20h
                </span>
                <span className="text-[11px] text-[#D8CEC0] uppercase tracking-wider block mt-0.5">
                  Cold Steeped
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-2xl lg:text-3xl font-semibold text-[#F8F5EF] tabular-nums">
                  4.9★
                </span>
                <span className="text-[11px] text-[#D8CEC0] uppercase tracking-wider block mt-0.5">
                  Kigali Favorite
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: 55% (lg:col-span-7) Single Image Carousel with Slide Transitions */}
          <div className="lg:col-span-7 flex items-center justify-center mt-6 lg:mt-0">
            {/* Exactly one image visible at a time inside this frame */}
            <div
              className="relative w-full max-w-xl aspect-square rounded-[28px] overflow-hidden border-2 border-[#C8A96A]/35 shadow-2xl shadow-black/80 bg-[#062C2C] group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Sliding Carousel Track: One slide slides in while the other slides out */}
              <div
                className="flex w-full h-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {heroSlides.map((slide) => (
                  <div
                    key={slide.id}
                    className="min-w-full w-full h-full relative flex-shrink-0"
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    {/* Atmospheric luxury gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#062C2C]/95 via-transparent to-black/25 pointer-events-none" />

                    {/* Integrated caption text badge inside the active slide */}
                    <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between z-10">
                      <div>
                        <span className="text-[11px] tracking-[0.22em] uppercase text-[#C8A96A] font-semibold block drop-shadow-sm">
                          {slide.kicker}
                        </span>
                        <h2 className="font-serif-luxury text-2xl sm:text-3xl text-[#F8F5EF] font-medium mt-0.5 drop-shadow-md">
                          {slide.title}
                        </h2>
                      </div>
                      <div className="text-right">
                        <span className="font-serif-luxury text-xl sm:text-2xl text-[#C8A96A] font-bold drop-shadow-md">
                          {slide.price}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows: Next and Prev */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-teal border border-[#C8A96A]/40 text-[#F8F5EF] hover:text-[#C8A96A] hover:border-[#C8A96A] flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full glass-teal border border-[#C8A96A]/40 text-[#F8F5EF] hover:text-[#C8A96A] hover:border-[#C8A96A] flex items-center justify-center transition-all duration-300 opacity-80 hover:opacity-100 hover:scale-105"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Carousel Indicators / Dots */}
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(idx)}
                    className={`transition-all duration-300 ${
                      currentSlide === idx
                        ? 'w-7 h-1.5 bg-[#C8A96A] rounded-full'
                        : 'w-2 h-1.5 bg-[#F8F5EF]/35 rounded-full hover:bg-[#F8F5EF]/70'
                    }`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
