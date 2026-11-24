import React, { useState } from 'react';
import { MessageSquare, Phone, CheckCircle2 } from 'lucide-react';
import { TUTOR_DATA } from '../data/tuitionData';

export default function WhatsAppContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'All Three (Maths & English)',
    query: ''
  });

  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedMessage = `Hello, I have an enquiry about Intense 1-2-1 GCSE Tuition (Northwood):%0A%0A` +
      `*Name:* ${encodeURIComponent(formData.name || 'Parent')}%0A` +
      (formData.phone ? `*Contact Number:* ${encodeURIComponent(formData.phone)}%0A` : '') +
      `*Subject:* ${encodeURIComponent(formData.subject)}%0A` +
      `*Enquiry:* ${encodeURIComponent(formData.query || 'Enquiring about Year 10 Revision Summer School slots.')}%0A%0A` +
      `Looking forward to hearing from you.`;

    const whatsappUrl = `https://wa.me/447976264403?text=${formattedMessage}`;
    
    // Open WhatsApp in new tab / app
    window.open(whatsappUrl, '_blank');
    setSent(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FB] border-t border-slate-200/60">
      <div className="max-w-2xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold mb-1">
            <MessageSquare className="w-3.5 h-3.5 fill-current" />
            <span>Direct WhatsApp Enquiry</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Have a Question?
          </h2>
          <div className="font-editorial-italic text-3xl sm:text-4xl text-slate-800">
            Send a message directly on WhatsApp
          </div>

          <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto pt-1">
            Fill in your details below and click Send. It will open directly in WhatsApp with your message pre-filled to <strong>{TUTOR_DATA.phoneDisplay}</strong>.
          </p>
        </div>

        {/* Form Container (Soft rounded pebble card) */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Name */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Your Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Sarah Jenkins"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FB] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                placeholder="e.g. 07976 123456"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FB] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            {/* Subject Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Subject of Interest
              </label>
              <select
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FB] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              >
                <option value="GCSE Mathematics">GCSE Mathematics (Edexcel / AQA / OCR)</option>
                <option value="GCSE English Language">GCSE English Language</option>
                <option value="GCSE English Literature">GCSE English Literature</option>
                <option value="All Three (Maths & English)">All Three (Year 10 Summer Consolidation)</option>
              </select>
            </div>

            {/* Message / Query */}
            <div>
              <label className="block text-xs font-bold text-slate-800 uppercase tracking-wider mb-1.5">
                Your Message / Query *
              </label>
              <textarea
                required
                rows={3}
                placeholder="e.g. Hi, I would like to check availability for Year 10 summer school revision slots..."
                value={formData.query}
                onChange={(e) => setFormData({ ...formData, query: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-[#F8F9FB] border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-emerald-500 focus:bg-white transition-all"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md shadow-emerald-500/20 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <MessageSquare className="w-5 h-5 fill-current" />
                <span>Send Query on WhatsApp</span>
              </button>
            </div>

            {sent && (
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-center text-xs text-emerald-800 font-semibold flex items-center justify-center gap-1.5 animate-in fade-in">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp opened! You can also call directly anytime.</span>
              </div>
            )}

            {/* Call Option */}
            <div className="pt-2 text-center">
              <span className="text-xs text-slate-500">Or prefer a quick call? </span>
              <a 
                href={`tel:${TUTOR_DATA.phone}`} 
                className="text-xs font-bold text-slate-900 hover:text-emerald-700 underline inline-flex items-center gap-1"
              >
                <Phone className="w-3 h-3 inline" />
                <span>Call {TUTOR_DATA.phoneDisplay}</span>
              </a>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}
