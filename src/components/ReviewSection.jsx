import React from 'react';
import { Star, Quote, ExternalLink } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function ReviewSection() {
  return (
    <section id="review" className="py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB]">
      <div className="max-w-4xl mx-auto">
        
        <div className="relative bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/80 shadow-sm text-center overflow-hidden">
          
          {/* Subtle quote watermark */}
          <Quote className="w-12 h-12 text-slate-100 mx-auto mb-4" />

          {/* 5-Star Rating Pill */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/60 mb-6">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-amber-900 ml-1">5.0 Star Rating</span>
            <span className="text-[10px] text-amber-700 font-medium">• Verified Google Maps Review</span>
          </div>

          {/* The Real Review Text */}
          <blockquote className="font-editorial-italic text-2xl sm:text-3xl lg:text-4xl text-slate-900 leading-snug max-w-2xl mx-auto">
            "{TUTOR_DATA.review.text}"
          </blockquote>

          {/* Author Details */}
          <div className="mt-6 flex flex-col items-center justify-center space-y-1">
            <div className="font-extrabold text-sm text-slate-900 tracking-tight">
              {TUTOR_DATA.review.author}
            </div>
            <div className="text-xs text-slate-500 font-medium">
              {TUTOR_DATA.review.role}
            </div>
          </div>

          {/* Google Maps Link */}
          <div className="mt-6 pt-6 border-t border-slate-100">
            <a
              href={TUTOR_DATA.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-950 transition-colors"
            >
              <span>View live on Google Maps</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
