import React from 'react';
import { MapPin, Phone, MessageSquare } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
      <div className="max-w-4xl mx-auto space-y-4">
        
        {/* Brand */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-black">
            ✱
          </div>
          <span className="font-extrabold text-sm text-slate-900">
            Intense 1-2-1 GCSE Tuition
          </span>
        </div>

        {/* Address and details */}
        <p className="text-slate-600 max-w-md mx-auto">
          {TUTOR_DATA.address} • Edexcel, AQA & OCR GCSE English & Mathematics
        </p>

        {/* Fast links */}
        <div className="flex items-center justify-center gap-4 text-xs font-semibold text-slate-700">
          <a href={`tel:${TUTOR_DATA.phone}`} className="hover:text-emerald-700 flex items-center gap-1">
            <Phone className="w-3.5 h-3.5" /> {TUTOR_DATA.phoneDisplay}
          </a>
          <span>•</span>
          <a 
            href={`https://wa.me/447976264403?text=Hi%2C%20I%20have%20an%20enquiry%20about%20Intense%201-2-1%20Tuition.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-emerald-700 flex items-center gap-1"
          >
            <MessageSquare className="w-3.5 h-3.5" /> WhatsApp
          </a>
          <span>•</span>
          <a href={TUTOR_DATA.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" /> Northwood HA6
          </a>
        </div>

        {/* Copyright */}
        <p className="text-[11px] text-slate-400 pt-2 border-t border-slate-100">
          © 2026 Intense 1-2-1 GCSE English & Maths Tuition. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
