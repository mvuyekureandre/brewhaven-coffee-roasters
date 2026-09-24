import React, { useState } from 'react';
import { Mail, CheckCircle2, Sparkles } from 'lucide-react';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
  };

  return (
    <section className="py-24 bg-[#F6F1E8] text-[#062C2C] relative border-t border-[#C8A96A]/20">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        
        {/* Emblem / Accent */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#062C2C] text-[#C8A96A] border border-[#C8A96A]/40 mb-2">
          <Sparkles className="w-5 h-5" />
        </div>

        <div className="space-y-3">
          <span className="text-xs uppercase tracking-[0.24em] text-[#A7864B] font-semibold block">
            The BrewHaven Dispatch
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-luxury font-normal text-[#062C2C] tracking-tight">
            Stay Close to the Brew
          </h2>
          <p className="text-[#685D52] text-base max-w-lg mx-auto font-light leading-relaxed">
            Subscribe for quiet Sunday morning notes, micro-lot harvest drops, seasonal workshop invitations, and brewing guides.
          </p>
        </div>

        {/* Subscription Form */}
        {subscribed ? (
          <div className="p-6 bg-white rounded-[24px] border border-[#C8A96A]/30 max-w-md mx-auto shadow-md animate-fadeIn flex items-center justify-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-[#A7864B]" />
            <div className="text-left">
              <span className="font-serif-luxury text-lg font-semibold text-[#062C2C] block">
                Welcome to the Family
              </span>
              <span className="text-xs text-[#685D52] font-light">
                Check your inbox shortly for your 15% complimentary first roast coupon.
              </span>
            </div>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
          >
            <div className="relative w-full">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8D8274]" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-11 pr-4 py-3.5 bg-white border border-[#C8A96A]/30 focus:border-[#062C2C] rounded-full text-sm text-[#062C2C] placeholder:text-[#8D8274] focus:outline-none transition-all shadow-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto bg-[#C8A96A] hover:bg-[#b89858] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#C8A96A]/25 whitespace-nowrap active:scale-95"
            >
              Join the Community
            </button>
          </form>
        )}

        {/* Benefits Line with dot separators (Zero-Pill discipline) */}
        <div className="flex items-center justify-center flex-wrap gap-4 text-xs text-[#8D8274] font-medium pt-2">
          <span>Exclusive coffee releases</span>
          <span aria-hidden="true">·</span>
          <span>Community events</span>
          <span aria-hidden="true">·</span>
          <span>Brewing masterclasses</span>
          <span aria-hidden="true">·</span>
          <span>Zero spam</span>
        </div>

      </div>
    </section>
  );
};
