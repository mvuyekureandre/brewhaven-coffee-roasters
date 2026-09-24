import React, { useState } from 'react';
import { Star, ArrowRight, Quote, Heart } from 'lucide-react';
import { TESTIMONIALS, ASSETS } from '../data/coffeeData';

interface TestimonialsSectionProps {
  onLeaveReview?: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onLeaveReview }) => {
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewsList, setReviewsList] = useState(TESTIMONIALS);
  const [newReviewName, setNewReviewName] = useState('');
  const [newReviewRole, setNewReviewRole] = useState('');
  const [newReviewText, setNewReviewText] = useState('');
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewName.trim() || !newReviewText.trim()) return;

    const newRev = {
      id: String(Date.now()),
      name: newReviewName.trim(),
      role: newReviewRole.trim() || 'Coffee Enthusiast',
      quote: newReviewText.trim(),
      rating: newReviewRating,
    };

    setReviewsList([newRev, ...reviewsList]);
    setSubmitted(true);
    setTimeout(() => {
      setShowReviewForm(false);
      setSubmitted(false);
      setNewReviewName('');
      setNewReviewRole('');
      setNewReviewText('');
    }, 2000);
  };

  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-[#062C2C] text-[#F8F5EF] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#0D3B3A] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Main Testimonial Block: Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start mb-20">
          
          {/* Left Side: Header & Call to Action */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs uppercase tracking-[0.24em] text-[#C8A96A] font-semibold block">
              What Our Customers Say
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif-luxury font-normal leading-tight text-[#F8F5EF]">
              Kind Words from{' '}
              <span className="font-script text-[#C8A96A] text-5xl sm:text-6xl italic block mt-1">
                Coffee Lovers
              </span>
            </h2>
            <p className="text-[#D8CEC0] text-sm leading-relaxed font-light">
              We measure our craft not just in extracted grams and extraction pressures, but in the memories and mornings made at our tables.
            </p>

            <div className="pt-2">
              <button
                onClick={() => setShowReviewForm(!showReviewForm)}
                className="group inline-flex items-center gap-3 bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-6 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-[#C8A96A]/20 hover:-translate-y-0.5"
              >
                <span>{showReviewForm ? 'Cancel Review' : 'Share Your Experience'}</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Overall Rating Scorecard */}
            <div className="p-5 rounded-2xl bg-[#0D3B3A]/60 border border-[#C8A96A]/20 flex items-center gap-4">
              <div className="font-serif-luxury text-3xl font-bold text-[#C8A96A] tabular-nums">
                4.95
              </div>
              <div>
                <div className="flex items-center gap-1 text-[#C8A96A]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="text-[11px] text-[#D8CEC0] font-light block mt-0.5">
                  Over 1,200 verified neighborhood reviews
                </span>
              </div>
            </div>
          </div>

          {/* Right Side: Three Luxury Glass Cards */}
          <div className="lg:col-span-8">
            {showReviewForm ? (
              <div className="glass-teal p-8 rounded-[28px] border border-[#C8A96A]/30 space-y-5 animate-fadeIn">
                <h3 className="font-serif-luxury text-2xl text-[#F8F5EF]">
                  Write a Note to BrewHaven
                </h3>
                {submitted ? (
                  <div className="p-6 bg-[#062C2C] border border-[#C8A96A] rounded-2xl text-center space-y-2">
                    <Heart className="w-8 h-8 text-[#C8A96A] mx-auto animate-pulse" />
                    <h4 className="font-serif-luxury text-xl text-[#F8F5EF]">
                      Thank you for your kind words!
                    </h4>
                    <p className="text-xs text-[#D8CEC0]">
                      Your review has been added to our community wall.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmitReview} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          required
                          value={newReviewName}
                          onChange={(e) => setNewReviewName(e.target.value)}
                          placeholder="e.g. Sarah Jenkins"
                          className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                        />
                      </div>
                      <div>
                        <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                          Role / Favorite Drink
                        </label>
                        <input
                          type="text"
                          value={newReviewRole}
                          onChange={(e) => setNewReviewRole(e.target.value)}
                          placeholder="e.g. Architect · Caramel Latte"
                          className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                        Rating
                      </label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => setNewReviewRating(star)}
                            className={`p-1 ${
                              star <= newReviewRating ? 'text-[#C8A96A]' : 'text-gray-500'
                            }`}
                          >
                            <Star className="w-5 h-5 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                        Your Story
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={newReviewText}
                        onChange={(e) => setNewReviewText(e.target.value)}
                        placeholder="Tell us what you loved about your experience..."
                        className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl p-4 text-sm text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="bg-[#C8A96A] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-6 py-3 rounded-full hover:bg-[#d8bb7f] transition-colors"
                    >
                      Publish Review
                    </button>
                  </form>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {reviewsList.slice(0, 3).map((item) => (
                  <div
                    key={item.id}
                    className="glass-teal p-7 rounded-[28px] border border-[#C8A96A]/20 hover:border-[#C8A96A]/40 transition-all duration-500 hover:-translate-y-1.5 flex flex-col justify-between shadow-xl"
                  >
                    <div>
                      {/* Quote mark and 5 stars */}
                      <div className="flex items-center justify-between mb-4">
                        <Quote className="w-6 h-6 text-[#C8A96A]/50 rotate-180" />
                        <div className="flex items-center gap-1 text-[#C8A96A]">
                          {[...Array(item.rating)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-[#D8CEC0] leading-relaxed font-light italic mb-6">
                        &ldquo;{item.quote}&rdquo;
                      </p>
                    </div>

                    {/* Author Footer */}
                    <div className="pt-4 border-t border-[#C8A96A]/15 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#062C2C] border border-[#C8A96A]/40 flex items-center justify-center font-serif-luxury font-bold text-sm text-[#C8A96A]">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-serif-luxury text-base font-semibold text-[#F8F5EF]">
                          {item.name}
                        </h4>
                        <span className="text-[11px] text-[#A7864B] font-light block">
                          {item.role}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* Gallery Visual Strip (Reference 4-panel visual strip) */}
        <div className="pt-8 border-t border-[#C8A96A]/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            
            {/* Panel 1: Top-down Latte */}
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] border border-[#C8A96A]/20 relative group">
              <img
                src={ASSETS.heroLatte}
                alt="Top-down latte art"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Panel 2: Burlap sack coffee beans */}
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] border border-[#C8A96A]/20 relative group">
              <img
                src={ASSETS.coffeeBeans}
                alt="BrewHaven roasted beans in burlap"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Panel 3: Rwandan Farm / Coffee Leaves */}
            <div className="rounded-[22px] overflow-hidden aspect-[4/3] border border-[#C8A96A]/20 relative group">
              <img
                src={ASSETS.rwandaFarm}
                alt="Green coffee plants"
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
            </div>

            {/* Panel 4: Gold botanical branch emblem card */}
            <div className="rounded-[22px] bg-[#073232] border border-[#C8A96A]/30 p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="w-8 h-8 text-[#C8A96A] mb-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C9 5 8 9 9 13c1 4 3 6 3 6s2-2 3-6c1-4 0-8-3-11z" />
                  <path d="M12 7c-2 2-3 5-2 8" />
                </svg>
              </div>
              <p className="font-script text-[#C8A96A] text-xl leading-tight">
                Good Coffee
              </p>
              <p className="font-script text-[#C8A96A] text-xl leading-tight">
                Good People
              </p>
              <p className="font-script text-[#C8A96A] text-xl leading-tight">
                Better Days ♡
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
