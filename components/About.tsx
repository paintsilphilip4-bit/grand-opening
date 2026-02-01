import React, { useRef, useState, useEffect } from 'react';
import EventSchedule from '../lib/EventSchedule';
import { Quote, PartyPopper } from 'lucide-react';

// Hook for scroll animations (local definition to avoid new file creation dependency)
const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const About: React.FC = () => {
  const col1 = useScrollReveal();
  const col2 = useScrollReveal();

  return (
    <section id="event" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div 
            ref={col1.ref} 
            className={`order-2 lg:order-1 transition-all duration-1000 ${col1.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          >
             <EventSchedule />
          </div>

          <div 
            ref={col2.ref} 
            className={`order-1 lg:order-2 transition-all duration-1000 ${col2.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="mb-8">
               <div className="inline-flex items-center justify-center p-1.5 bg-blue-50 rounded-full mb-6 border border-blue-100">
                  <span className="px-4 py-1 bg-white text-adlai-blue rounded-full text-xs font-bold uppercase tracking-widest shadow-sm flex items-center gap-2">
                     <PartyPopper size={14} className="text-adlai-green" />
                     The Event
                  </span>
               </div>
               
               <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
                 A Celebration of <br/>
                 <span className="relative inline-block mt-2">
                   <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-adlai-green to-teal-600">Health & Community</span>
                   {/* Decorative highlight */}
                   <span className="absolute -bottom-1 left-0 w-full h-1/2 bg-yellow-200/40 -rotate-1 -z-0 rounded-lg -translate-y-1"></span>
                 </span>
               </h2>
            </div>
            
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              We are delighted to invite you to the grand opening of <strong>Adlai Community Hospital</strong>. This facility represents a promise kept to the people of Kasoa—a promise of accessible, dignity-affirming, and world-class healthcare right in our neighborhood.
            </p>

            <div className="bg-slate-50 border-l-4 border-adlai-green p-6 rounded-r-2xl mb-8 relative shadow-sm">
               <Quote className="absolute top-4 right-4 text-slate-200" size={40} />
               <p className="text-slate-800 italic font-medium relative z-10 text-lg">
                 "Our doors open not just to treat illness, but to cultivate wellness, comfort, and peace for every family we serve."
               </p>
               <div className="mt-6 flex items-center gap-4">
                 <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-slate-50">
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
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Adlai Community Hospital</p>
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