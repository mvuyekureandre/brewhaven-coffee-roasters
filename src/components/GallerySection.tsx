import React, { useState } from 'react';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/coffeeData';
import { GalleryItem } from '../types';

export const GallerySection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[prevIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedItem) return;
    const currentIndex = GALLERY_ITEMS.findIndex((item) => item.id === selectedItem.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedItem(GALLERY_ITEMS[nextIndex]);
  };

  return (
    <section id="gallery" className="relative py-24 lg:py-32 bg-[#062C2C] text-[#F8F5EF] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#0D3B3A]/50 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Gallery Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C8A96A] font-semibold block">
              Moments of BrewHaven
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif-luxury font-normal text-[#F8F5EF] leading-tight">
              An Editorial Glimpse into Our World
            </h2>
          </div>
          <p className="text-[#D8CEC0] text-sm max-w-md font-light">
            From sunrise bean sorting to slow afternoon conversations, experience the rhythm of our sanctuary.
          </p>
        </div>

        {/* Gallery Grid: Uniform Equal Length & Height Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group relative rounded-[28px] overflow-hidden border border-[#C8A96A]/20 shadow-xl cursor-pointer aspect-[4/3] w-full"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />

              {/* Subtle gradient vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#062C2C]/90 via-[#062C2C]/25 to-transparent opacity-65 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Caption Card */}
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#C8A96A]">
                    {item.category}
                  </span>
                  <span className="w-8 h-8 rounded-full bg-[#0D3B3A]/80 border border-[#C8A96A]/40 text-[#C8A96A] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl font-medium text-[#F8F5EF] mb-0.5 truncate">
                  {item.title}
                </h3>
                <p className="text-xs text-[#D8CEC0] line-clamp-1 font-light">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <span className="text-xs text-[#C8A96A] tracking-wider uppercase font-medium">
            Tag @BrewHavenCoffee on Instagram to be featured in our seasonal exhibition
          </span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div
          onClick={() => setSelectedItem(null)}
          className="fixed inset-0 z-50 bg-[#062C2C]/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-6 right-6 p-3 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full bg-white/5 hover:bg-white/10 z-10"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrev}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-3 text-[#D8CEC0] hover:text-[#C8A96A] rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 hidden sm:flex"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-3 text-[#D8CEC0] hover:text-[#C8A96A] rounded-full bg-white/5 hover:bg-white/10 transition-colors z-10 hidden sm:flex"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[85vh] flex flex-col rounded-[28px] overflow-hidden border border-[#C8A96A]/30 bg-[#0D3B3A] shadow-2xl"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/40">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="p-6 bg-[#062C2C] flex items-center justify-between">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96A] font-semibold block">
                  {selectedItem.category}
                </span>
                <h4 className="font-serif-luxury text-2xl font-medium text-[#F8F5EF]">
                  {selectedItem.title}
                </h4>
                <p className="text-xs text-[#D8CEC0] mt-1 font-light">
                  {selectedItem.caption}
                </p>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="text-xs text-[#C8A96A] border border-[#C8A96A]/30 px-4 py-2 rounded-full hover:bg-[#C8A96A]/10 transition-colors"
              >
                Close View
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
