import React, { useState } from 'react';
import { X, Volume2, VolumeX, Sparkles, MapPin, Coffee } from 'lucide-react';
import { ASSETS } from '../data/coffeeData';

interface StoryVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StoryVideoModal: React.FC<StoryVideoModalProps> = ({ isOpen, onClose }) => {
  const [activeChapter, setActiveChapter] = useState(0);
  const [isAudioMuted, setIsAudioMuted] = useState(false);

  if (!isOpen) return null;

  const chapters = [
    {
      title: '01. The Rwandan Mountain Dawn',
      subtitle: 'Huye Mountain Cooperative · 1,950m Altitude',
      description: 'Before sunrise, our partner farming families hand-pick only the deep crimson cherries at peak natural brix sweetness. Volcanic soil and cool mountain mist give our coffee its signature floral honeysuckle notes.',
      image: ASSETS.rwandaFarm,
    },
    {
      title: '02. The Slow Drum Roast',
      subtitle: 'In-House Small-Batch Craftsmanship in Kigali',
      description: 'We roast in 12-kilogram batches using an antique restored cast-iron drum. Gentle heat transfer caramelizes the natural fructose without charring, unlocking notes of brown butter, cacao nibs, and stone fruit.',
      image: ASSETS.coffeeBeans,
    },
    {
      title: '03. The Velvet Microfoam',
      subtitle: 'The Architecture of the Perfect Pour',
      description: 'Water purified to exact mineral specs (75ppm calcium-magnesium balance) extracts a rich, dense espresso crema. Silky milk steamed to exactly 62°C delivers unparalleled sweetness and lasting latte art.',
      image: ASSETS.heroLatte,
    },
  ];

  const current = chapters[activeChapter];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#062C2C]/90 backdrop-blur-lg transition-opacity"
      />

      <div className="relative w-full max-w-4xl bg-[#0D3B3A] text-[#F8F5EF] rounded-[28px] border border-[#C8A96A]/30 shadow-2xl overflow-hidden my-8 z-10">
        
        {/* Cinema Viewport */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover transition-all duration-700 animate-fadeIn"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D3B3A] via-transparent to-black/40" />

          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-2 glass-teal px-3.5 py-1.5 rounded-full border border-[#C8A96A]/30">
              <span className="w-2 h-2 rounded-full bg-[#C8A96A] animate-ping" />
              <span className="text-[10px] uppercase tracking-widest text-[#F8F5EF] font-medium">
                BrewHaven Cinema · Chapter {activeChapter + 1} of 3
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsAudioMuted(!isAudioMuted)}
                className="p-2 rounded-full glass-teal text-[#D8CEC0] hover:text-[#C8A96A] transition-colors"
                aria-label="Toggle ambient sound"
              >
                {isAudioMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full glass-teal text-[#D8CEC0] hover:text-[#C8A96A] transition-colors"
                aria-label="Close story"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Overlay Text Inside Video */}
          <div className="absolute bottom-6 left-6 right-6">
            <span className="text-[11px] tracking-[0.2em] uppercase font-semibold text-[#C8A96A] block">
              {current.subtitle}
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F8F5EF] mt-0.5">
              {current.title}
            </h3>
          </div>
        </div>

        {/* Story Prose & Chapter Selector */}
        <div className="p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-[#D8CEC0] font-light leading-relaxed">
            {current.description}
          </p>

          {/* Chapter Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 border-t border-[#C8A96A]/20">
            {chapters.map((ch, idx) => (
              <button
                key={ch.title}
                onClick={() => setActiveChapter(idx)}
                className={`p-3 rounded-xl border text-left transition-all ${
                  activeChapter === idx
                    ? 'bg-[#062C2C] border-[#C8A96A] text-[#F8F5EF]'
                    : 'bg-[#062C2C]/40 border-[#C8A96A]/15 text-[#D8CEC0]/70 hover:border-[#C8A96A]/40'
                }`}
              >
                <div className="text-[10px] text-[#A7864B] uppercase tracking-wider font-semibold">
                  Part 0{idx + 1}
                </div>
                <div className="text-xs font-serif-luxury font-medium text-[#F8F5EF] mt-0.5 truncate">
                  {ch.title.split('. ')[1]}
                </div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="text-xs text-[#A7864B] flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Real People · Real Coffee · Real Moments</span>
            </div>
            <button
              onClick={onClose}
              className="bg-[#C8A96A] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-6 py-2.5 rounded-full hover:bg-[#d8bb7f] transition-colors"
            >
              Back to Experience
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
