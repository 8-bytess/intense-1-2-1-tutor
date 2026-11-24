import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function HeroSection({ onEnquireClick }) {
  return (
    <section id="overview" className="relative pt-8 pb-16 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Background Organic Doodle Wireframe Lines (From Reference Design) */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 -z-10" 
        viewBox="0 0 1200 800" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          d="M 150 120 C 400 40, 750 200, 950 100 C 1150 0, 1100 450, 850 500 C 600 550, 400 350, 550 250 C 700 150, 950 400, 1050 600" 
          stroke="#E2E8F0" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeDasharray="6 6"
        />
        <path 
          d="M 200 650 C 450 600, 700 750, 1100 680" 
          stroke="#CBD5E1" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
        />
      </svg>

      <div className="max-w-6xl mx-auto">
        
        {/* Main Headline & Identity (Reference Typography Match) */}
        <div className="relative mb-10 md:mb-14">
          
          {/* Top Asterisk & Bold First Line */}
          <div className="flex items-center gap-3 mb-1">
            <span className="w-8 h-8 rounded-full bg-[#86EFAC] text-emerald-950 flex items-center justify-center font-black text-xl shadow-xs">
              ✱
            </span>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight">
              Intense 1-2-1
            </h1>
          </div>

          {/* Second Line in Delicate Italic Serif */}
          <div className="font-editorial-italic text-4xl sm:text-6xl lg:text-7xl text-slate-900 tracking-tight pl-11">
            Revision Summer School
          </div>

          {/* Circular Badge Top Right (Reference Style Sticker) */}
          <div className="hidden md:flex absolute top-0 right-4 lg:right-12 w-28 h-28 rounded-full bg-[#E0E7FF] border border-indigo-200/60 p-2 flex-col items-center justify-center text-center shadow-xs transform rotate-6 hover:rotate-0 transition-transform">
            <div className="w-10 h-10 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-700 font-bold text-sm mb-0.5">
              ✱
            </div>
            <div className="text-[9px] font-black uppercase tracking-wider text-indigo-900 leading-tight">
              Year 10 ➔ 11<br />Summer 2026
            </div>
          </div>

        </div>

        {/* Sub-headline Pill with Student Photo & Description (Reference Style) */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10 max-w-3xl">
          <div className="inline-flex items-center gap-2.5 bg-white p-1.5 pr-4 rounded-full border border-slate-200/80 shadow-xs">
            <img 
              src={TUTOR_DATA.images.heroStudent} 
              alt="GCSE Year 10 Student" 
              className="w-10 h-10 rounded-full object-cover shadow-xs border border-white"
            />
            <span className="text-xs font-semibold text-slate-700">
              Private 1-to-1 Tuition • Northwood HA6
            </span>
          </div>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Targeting Year 10 students to consolidate the GCSE Year 10 curriculum in preparation to move into Year 11 across <strong className="text-slate-900 font-semibold">Edexcel</strong>, <strong className="text-slate-900 font-semibold">AQA</strong>, and <strong className="text-slate-900 font-semibold">OCR</strong>.
          </p>
        </div>

        {/* Floating Pastel Pill Tags (Reference Match: #drawing, #writing, etc.) */}
        <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-bold">
          <span className="px-3.5 py-1.5 rounded-full bg-[#E9D5FF] text-purple-900 shadow-xs transform -rotate-2">
            #Mathematics
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#BBF7D0] text-emerald-950 shadow-xs transform rotate-1">
            #English Language
          </span>
          <span className="px-3.5 py-1.5 rounded-full bg-[#FEF08A] text-amber-950 shadow-xs transform -rotate-1">
            #English Literature
          </span>
          <span className="px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-medium ml-1">
            Edexcel • AQA • OCR
          </span>
        </div>

        {/* 3 Main Pastel Rounded Subject Cards (Reference Match!) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Mathematics (Vibrant Mint/Emerald) */}
          <div 
            onClick={onEnquireClick}
            className="group cursor-pointer rounded-3xl sm:rounded-[32px] p-6 sm:p-7 bg-[#10B981] text-white flex flex-col justify-between min-h-[320px] shadow-lg shadow-emerald-500/15 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-emerald-950/25 text-emerald-100 backdrop-blur-xs">
                Year 10 ➔ 11
              </span>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:bg-white group-hover:text-emerald-800 transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Middle Title */}
            <div className="my-auto pt-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                GCSE
              </div>
              <div className="font-editorial-italic text-3xl sm:text-4xl leading-tight">
                Mathematics
              </div>
              <p className="text-xs text-emerald-100 mt-2 leading-relaxed">
                Consolidating algebraic proofs, quadratics, ratio, and non-calc foundations before Year 11.
              </p>
            </div>

            {/* Bottom Graphic Accent */}
            <div className="flex items-end justify-between pt-4 border-t border-emerald-400/30">
              <span className="text-[11px] font-bold text-emerald-100 uppercase tracking-wider">
                Edexcel • AQA • OCR
              </span>
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/60 shadow-xs">
                <img 
                  src={TUTOR_DATA.images.mathsStudent} 
                  alt="GCSE Maths" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

          {/* Card 2: English Language (Soft Pastel Lavender) */}
          <div 
            onClick={onEnquireClick}
            className="group cursor-pointer rounded-3xl sm:rounded-[32px] p-6 sm:p-7 bg-[#DDD6FE] text-slate-900 flex flex-col justify-between min-h-[320px] shadow-lg shadow-purple-500/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Background doodle inside card */}
            <svg className="absolute -bottom-10 -right-10 w-44 h-44 text-purple-300/40 pointer-events-none" viewBox="0 0 100 100" fill="none">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="6" strokeDasharray="8 8" />
            </svg>

            {/* Top row */}
            <div className="flex items-center justify-between relative z-10">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-purple-950/10 text-purple-950">
                Year 10 ➔ 11
              </span>
              <div className="w-8 h-8 rounded-full bg-purple-950/10 flex items-center justify-center text-purple-950 group-hover:bg-purple-950 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Center Student Photo Circle (Reference Feature) */}
            <div className="my-auto pt-3 relative z-10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-xs mb-3">
                <img 
                  src={TUTOR_DATA.images.englishStudent} 
                  alt="English Language" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                English
              </div>
              <div className="font-editorial-italic text-3xl sm:text-4xl text-purple-950 leading-tight">
                Language
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                Paper 1 & Paper 2 analysis of writers' craft, viewpoints, and 40-mark writing fluency.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-center justify-between pt-4 border-t border-purple-300/60 relative z-10">
              <span className="text-[11px] font-bold text-purple-900 uppercase tracking-wider">
                Paper 1 & Paper 2
              </span>
              <span className="text-xs font-serif italic text-purple-950 font-bold">
                1-to-1 Intensive
              </span>
            </div>
          </div>

          {/* Card 3: English Literature (Soft Pastel Lime / Light Green) */}
          <div 
            onClick={onEnquireClick}
            className="group cursor-pointer rounded-3xl sm:rounded-[32px] p-6 sm:p-7 bg-[#E2F89A] text-slate-900 flex flex-col justify-between min-h-[320px] shadow-lg shadow-lime-500/10 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {/* Top row */}
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-lime-950/10 text-lime-950">
                Year 10 ➔ 11
              </span>
              <div className="w-8 h-8 rounded-full bg-lime-950/10 flex items-center justify-center text-lime-950 group-hover:bg-lime-950 group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>

            {/* Middle Title */}
            <div className="my-auto pt-4">
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
                English
              </div>
              <div className="font-editorial-italic text-3xl sm:text-4xl text-lime-950 leading-tight">
                Literature
              </div>
              <p className="text-xs text-slate-700 mt-2 leading-relaxed">
                Shakespeare, 19th-century prose, and comparative poetry thesis structure.
              </p>
            </div>

            {/* Bottom Row */}
            <div className="flex items-end justify-between pt-4 border-t border-lime-300/80">
              <span className="text-[11px] font-bold text-lime-950 uppercase tracking-wider">
                Set Texts & Poetry
              </span>
              <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/60 shadow-xs">
                <img 
                  src={TUTOR_DATA.images.literatureStudent} 
                  alt="English Literature" 
                  className="w-full h-full object-cover" 
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
