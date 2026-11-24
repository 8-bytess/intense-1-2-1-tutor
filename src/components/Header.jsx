import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F8F9FB]/90 backdrop-blur-md border-b border-slate-200/60 py-3.5 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        
        {/* Brand Logo with Asterisk Icon (Reference style) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center text-white text-base font-black transition-transform group-hover:scale-105">
            ✱
          </div>
          <div>
            <div className="text-base font-extrabold tracking-tight text-slate-900">
              Intense 1-2-1
            </div>
            <div className="text-[10px] text-slate-500 font-medium -mt-1">
              GCSE Revision • Northwood HA6
            </div>
          </div>
        </div>

        {/* Center Pill Menu (Desktop) */}
        <nav className="hidden md:flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-slate-200/80 shadow-xs text-xs font-semibold text-slate-600">
          <button onClick={() => scrollTo('overview')} className="px-3 py-1.5 hover:text-slate-950 rounded-full hover:bg-slate-50 transition-colors">
            Overview
          </button>
          <button onClick={() => scrollTo('subjects')} className="px-3 py-1.5 hover:text-slate-950 rounded-full hover:bg-slate-50 transition-colors">
            Subjects
          </button>
          <button onClick={() => scrollTo('why-choose')} className="px-3 py-1.5 hover:text-slate-950 rounded-full hover:bg-slate-50 transition-colors">
            Why 1-2-1
          </button>
          <button onClick={() => scrollTo('review')} className="px-3 py-1.5 hover:text-slate-950 rounded-full hover:bg-slate-50 transition-colors">
            Review
          </button>
          <button onClick={() => scrollTo('contact')} className="px-3 py-1.5 hover:text-slate-950 rounded-full hover:bg-slate-50 transition-colors">
            Contact
          </button>
        </nav>

        {/* Right CTA Buttons (Reference style) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={`tel:${TUTOR_DATA.phone}`}
            className="flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-950 px-3 py-2 rounded-full border border-slate-200 hover:bg-white transition-all"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-600" />
            <span>{TUTOR_DATA.phoneDisplay}</span>
          </a>

          <button
            onClick={() => scrollTo('contact')}
            className="flex items-center gap-1.5 text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-full shadow-xs transition-all hover:scale-105"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>WhatsApp Enquiry</span>
          </button>
        </div>

        {/* Mobile Hamburger Trigger */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => scrollTo('contact')}
            className="p-2 rounded-full bg-emerald-100 text-emerald-800"
            aria-label="Enquire"
          >
            <MessageSquare className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div className="sm:hidden mt-3 pt-3 border-t border-slate-200/80 bg-white rounded-2xl p-4 shadow-lg space-y-2">
          <button onClick={() => scrollTo('overview')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Overview
          </button>
          <button onClick={() => scrollTo('subjects')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Subjects (Maths & English)
          </button>
          <button onClick={() => scrollTo('why-choose')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Why Intense 1-2-1?
          </button>
          <button onClick={() => scrollTo('review')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Google Review
          </button>
          <button onClick={() => scrollTo('contact')} className="w-full text-left py-2 px-3 rounded-lg text-sm font-semibold text-slate-700 hover:bg-slate-50">
            Location & WhatsApp Form
          </button>
          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
            <a
              href={`tel:${TUTOR_DATA.phone}`}
              className="w-full py-2.5 rounded-full border border-slate-200 text-center font-bold text-xs text-slate-800 flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-600" />
              <span>Call: {TUTOR_DATA.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
