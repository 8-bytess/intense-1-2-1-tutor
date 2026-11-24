import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import ReviewSection from './components/ReviewSection';
import LocationTimetableSection from './components/LocationTimetableSection';
import WhatsAppContactForm from './components/WhatsAppContactForm';
import Footer from './components/Footer';
import { Phone, MessageSquare } from 'lucide-react';
import { TUTOR_DATA } from './data/tuitionData';

export default function App() {
  const scrollToContact = () => {
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FB] text-slate-900 flex flex-col font-sans selection:bg-purple-200 selection:text-purple-950 pb-16 sm:pb-0">
      
      {/* Sticky Clean Header */}
      <Header />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Hero Section (Matching Reference Design) */}
        <HeroSection onEnquireClick={scrollToContact} />

        {/* Why Choose 3 Pillars */}
        <WhyChooseSection />

        {/* Real Google Review Spotlight */}
        <ReviewSection />

        {/* Studio Location & Timetable */}
        <LocationTimetableSection />

        {/* Direct WhatsApp Query Form (User requested) */}
        <WhatsAppContactForm />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Sticky Mobile Action Bar (90% Mobile Users) */}
      <aside aria-label="Quick contact" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 p-2.5 flex items-center justify-between gap-2 shadow-lg">
        <a
          href={`tel:${TUTOR_DATA.phone}`}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full border border-slate-200 bg-slate-50 text-slate-800 text-xs font-bold active:bg-slate-100"
        >
          <Phone className="w-3.5 h-3.5 text-emerald-600" />
          <span>Call Tutor</span>
        </a>

        <button
          onClick={scrollToContact}
          className="flex-1 flex items-center justify-center gap-1.5 py-3 rounded-full bg-[#25D366] text-white text-xs font-extrabold shadow-sm active:scale-95 transition-transform"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Query</span>
        </button>
      </aside>

    </div>
  );
}
