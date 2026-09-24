import React, { useState } from 'react';
import { X, Calendar, Clock, Users, CheckCircle2, Sparkles, MapPin } from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [guests, setGuests] = useState('2');
  const [date, setDate] = useState('2026-09-25');
  const [time, setTime] = useState('10:30');
  const [seating, setSeating] = useState('Solarium Lounge');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const seatingOptions = [
    { id: 'Solarium Lounge', title: 'Solarium Lounge', desc: 'Plush velvet seating beneath sunny greenhouse windows' },
    { id: 'Barista Counter', title: 'Barista Counter', desc: 'Front-row view of single-origin pour-overs & latte art' },
    { id: 'Quiet Study Nook', title: 'Quiet Study Nook', desc: 'Soft warm lighting, power outlets & acoustic serenity' },
    { id: 'Garden Terrace', title: 'Garden Terrace', desc: 'Fresh air surrounded by potted olive trees and jasmine' },
  ];

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto animate-fadeIn">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-[#062C2C]/80 backdrop-blur-md transition-opacity"
      />

      <div className="relative w-full max-w-xl bg-[#0D3B3A] text-[#F8F5EF] rounded-[28px] border border-[#C8A96A]/30 shadow-2xl overflow-hidden my-8 z-10">
        
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#062C2C] border-b border-[#C8A96A]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C8A96A]/40 bg-[#0D3B3A] text-[#C8A96A] flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] tracking-[0.2em] uppercase text-[#C8A96A] font-semibold block">
                Sanctuary Booking
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-medium text-[#F8F5EF]">
                Reserve a Table
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#D8CEC0] hover:text-[#C8A96A] transition-colors rounded-full hover:bg-white/5"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {isSubmitted ? (
            <div className="text-center py-6 space-y-5 animate-scaleUp">
              <div className="w-16 h-16 rounded-full bg-[#062C2C] border-2 border-[#C8A96A] text-[#C8A96A] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="font-serif-luxury text-3xl font-medium text-[#F8F5EF]">
                Reservation Confirmed
              </h4>
              <p className="text-xs text-[#D8CEC0] max-w-sm mx-auto font-light leading-relaxed">
                We have saved a place for <span className="font-semibold text-[#F8F5EF]">{name}</span> on{' '}
                <span className="font-semibold text-[#C8A96A]">{date}</span> at{' '}
                <span className="font-semibold text-[#C8A96A]">{time}</span> ({seating}).
              </p>

              <div className="p-4 bg-[#062C2C] rounded-2xl border border-[#C8A96A]/25 text-left text-xs max-w-sm mx-auto space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#A7864B]">Confirmation Code:</span>
                  <span className="font-mono text-[#F8F5EF] font-bold">#BH-RES-{(Date.now() % 100000)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#A7864B]">Party Size:</span>
                  <span className="text-[#F8F5EF]">{guests} Guests</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[#A7864B]">Location:</span>
                  <span className="text-[#F8F5EF] flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#C8A96A]" /> KG 674 St, Kimihurura, Kigali
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#C8A96A] text-[#062C2C] font-semibold text-xs tracking-wider uppercase px-8 py-3.5 rounded-full hover:bg-[#d8bb7f] transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Row 1: Guests, Date, Time */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-[#C8A96A]" /> Party
                  </label>
                  <select
                    value={guests}
                    onChange={(e) => setGuests(e.target.value)}
                    className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-3 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                  >
                    <option value="1">1 Guest (Solo Study)</option>
                    <option value="2">2 Guests (Table for 2)</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests (Lounge)</option>
                    <option value="6">6 Guests (Community Table)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" /> Date
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-3 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>

                <div>
                  <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#C8A96A]" /> Time
                  </label>
                  <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-3 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                  >
                    <option value="08:00">08:00 AM (Early Roast)</option>
                    <option value="09:30">09:30 AM</option>
                    <option value="10:30">10:30 AM (Peak Sun)</option>
                    <option value="12:00">12:00 PM (Midday)</option>
                    <option value="14:00">02:00 PM</option>
                    <option value="16:00">04:00 PM (Afternoon Tea)</option>
                    <option value="18:00">06:00 PM (Sunset Brew)</option>
                  </select>
                </div>
              </div>

              {/* Seating Preference Selector */}
              <div>
                <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#C8A96A]" /> Atmosphere Preference
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {seatingOptions.map((opt) => (
                    <button
                      type="button"
                      key={opt.id}
                      onClick={() => setSeating(opt.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        seating === opt.id
                          ? 'bg-[#062C2C] border-[#C8A96A] text-[#F8F5EF]'
                          : 'bg-[#062C2C]/50 border-[#C8A96A]/15 text-[#D8CEC0] hover:border-[#C8A96A]/40'
                      }`}
                    >
                      <div className="text-xs font-semibold text-[#F8F5EF] flex items-center justify-between">
                        <span>{opt.title}</span>
                        {seating === opt.id && <span className="w-2 h-2 rounded-full bg-[#C8A96A]" />}
                      </div>
                      <p className="text-[11px] text-[#D8CEC0]/70 font-light mt-0.5 leading-snug">
                        {opt.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Keza Mugisha"
                    className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="keza@example.rw"
                    className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+250 788 000 000"
                  className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                />
              </div>

              <div>
                <label className="text-xs text-[#D8CEC0] uppercase tracking-wider block mb-1">
                  Special Notes / Occasion (Optional)
                </label>
                <input
                  type="text"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Coffee tasting meeting, need quiet corner"
                  className="w-full bg-[#062C2C] border border-[#C8A96A]/30 rounded-xl px-4 py-2.5 text-xs text-[#F8F5EF] focus:outline-none focus:border-[#C8A96A]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-[#C8A96A] hover:bg-[#d8bb7f] text-[#062C2C] font-semibold text-xs tracking-wider uppercase py-4 rounded-full transition-all duration-300 hover:shadow-xl active:scale-95"
                >
                  Confirm Table Reservation
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
