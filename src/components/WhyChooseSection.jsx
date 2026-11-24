import React from 'react';
import { WHY_CHOOSE } from '../data/tuitionData';

export default function WhyChooseSection() {
  return (
    <section id="why-choose" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 bg-white">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header (Reference Style) */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why choose
          </h2>
          <div className="font-editorial-italic text-4xl sm:text-5xl text-slate-900">
            Intense 1-2-1?
          </div>
          <p className="text-sm sm:text-base text-slate-600 pt-2 leading-relaxed font-normal">
            Individual, focused attention to consolidate key Year 10 modules before Year 11 mock exams.
          </p>
        </div>

        {/* 3 Pillars (Reference Style Match: Pastel flower icon, bold title, short text) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 text-center">
          {WHY_CHOOSE.map((pillar, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-3">
              <div className={`w-14 h-14 rounded-full ${pillar.iconBg} ${pillar.iconColor} flex items-center justify-center text-2xl font-black shadow-xs mb-1`}>
                ✱
              </div>

              <h3 className="text-xl font-extrabold text-slate-900 tracking-tight">
                {pillar.title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed max-w-xs">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
