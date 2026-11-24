import React from 'react';
import { MapPin, Clock, ExternalLink } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function LocationTimetableSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/60">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-xl mx-auto mb-10 space-y-1">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Studio & Timetable
          </h2>
          <div className="font-editorial-italic text-2xl sm:text-3xl text-slate-800">
            Northwood, London HA6
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Location Studio Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <MapPin className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">
                Tuition Studio Location
              </h3>
            </div>

            <address className="not-italic text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900 block font-semibold text-base mb-0.5">
                Hunters Moon
              </strong>
              34 Potter St, Northwood HA6 1QE, United Kingdom
            </address>

            <p className="text-xs text-slate-500 leading-relaxed">
              Quiet residential setting on Potter Street with convenient drop-off and easy access from Northwood, Moor Park, Rickmansworth, and Watford.
            </p>

            <div className="pt-2">
              <a
                href={TUTOR_DATA.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold text-slate-800 hover:text-slate-950 shadow-xs hover:bg-slate-50 transition-all"
              >
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
          </div>

          {/* Operating Hours Card */}
          <div className="bg-[#F8F9FB] rounded-3xl p-6 sm:p-8 border border-slate-200/80 space-y-4">
            <div className="flex items-center gap-2 text-slate-900">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center">
                <Clock className="w-4 h-4 text-amber-400" />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900">
                Weekly Session Hours
              </h3>
            </div>

            <div className="space-y-2 pt-1 text-xs">
              {TUTOR_DATA.hours.map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200/60">
                  <span className="font-bold text-slate-800">{item.day}</span>
                  <span className="font-semibold text-slate-600">{item.time}</span>
                </div>
              ))}
            </div>

            <p className="text-[11px] text-slate-500 italic">
              * Dedicated Revision Summer School sessions scheduled across weekdays during July & August.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
