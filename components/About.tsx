import React from 'react';
import EventSchedule from '../lib/EventSchedule';
import { Quote, PartyPopper } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="event" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="order-2 lg:order-1">
             <EventSchedule />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-adlai-green font-bold tracking-wider uppercase mb-4">
               <PartyPopper size={20} />
               <span>The Vision</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 leading-tight">
              A Celebration of <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-adlai-blue to-blue-600">Health & Community</span>
            </h2>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We are delighted to invite you to the grand opening of <strong>Adlai Community Hospital</strong>. This facility represents a promise kept to the people of Kasoa—a promise of accessible, dignity-affirming, and world-class healthcare right in our neighborhood.
            </p>

            <div className="bg-slate-50 border-l-4 border-adlai-green p-6 rounded-r-xl mb-8 relative">
               <Quote className="absolute top-4 right-4 text-slate-200" size={40} />
               <p className="text-slate-800 italic font-medium relative z-10">
                 "Our doors open not just to treat illness, but to cultivate wellness, comfort, and peace for every family we serve."
               </p>
               <div className="mt-4 flex items-center gap-3">
                 <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    {/* Founder Image - Optimized via Unsplash params and Lazy Loaded */}
                    <img 
                      src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=100&h=100&fm=webp" 
                      alt="Founder" 
                      className="w-full h-full object-cover" 
                      loading="lazy"
                      width="100"
                      height="100"
                    />
                 </div>
                 <div>
                    <p className="text-sm font-bold text-slate-900">Hospital Administration</p>
                    <p className="text-xs text-slate-500">Adlai Community Hospital</p>
                 </div>
               </div>
            </div>

            <p className="text-slate-600">
              Join us as we cut the ribbon, tour our modern wards and operating theaters, and celebrate the beginning of a healthier future together.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;