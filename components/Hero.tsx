import React from 'react';
import Countdown from './Countdown';
import Heartbeat from './Heartbeat';
import { MapPin, CalendarCheck, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenRSVP: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRSVP }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-slate-50">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 1. Base Gradient Blobs (Atmosphere) */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-adlai-blue/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob"></div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-adlai-green/10 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-[20%] w-[500px] h-[500px] bg-indigo-100/40 rounded-full mix-blend-multiply filter blur-[80px] animate-blob animation-delay-4000"></div>

        {/* 2. Floating Geometric Shapes (Abstract Particles) */}
        {/* Circle Outline */}
        <div className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border-4 border-slate-200/40 animate-float"></div>
        
        {/* Square Outline */}
        <div className="absolute bottom-1/3 right-[5%] w-16 h-16 rounded-xl border-4 border-slate-200/40 animate-float animation-delay-2000 rotate-12"></div>
        
        {/* Solid Dot */}
        <div className="absolute top-1/2 right-[20%] w-4 h-4 bg-adlai-green/20 rounded-full animate-pulse"></div>
        
        {/* Large Faint Circle */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-slate-200/30 rounded-full animate-float animation-delay-4000"></div>

        {/* Small Crosses/Plus signs for medical motif (Abstract) */}
        <div className="absolute top-32 right-1/3 text-slate-200/50 text-4xl font-light animate-float animation-delay-2000">+</div>
        <div className="absolute bottom-32 left-1/4 text-slate-200/50 text-6xl font-light animate-float">+</div>

        {/* 3. Subtle Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.4]" 
             style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")` }}>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center">
          
          {/* THE CONTENT STACK: A floating glass card containing all hero elements */}
          <div className="w-full max-w-5xl bg-white/70 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] border border-white/80 animate-fade-in-up text-center relative overflow-hidden ring-1 ring-white/50">
            
            {/* Decorative Shine */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-adlai-blue/20 to-transparent"></div>
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm">
                <Star size={14} className="text-orange-400 fill-orange-400" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Official Launch Event</span>
            </div>

            {/* Typography Stack */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tight leading-[0.9] mb-4">
              GRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-adlai-blue to-slate-600">OPENING</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="h-px w-12 bg-slate-300"></div>
              <h2 className="text-xl md:text-2xl text-slate-600 font-medium uppercase tracking-widest">
                Adlai Community Hospital
              </h2>
              <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <p className="text-lg text-slate-500 font-medium mb-10 flex items-center justify-center gap-2">
               <MapPin className="text-adlai-green" />
               <span>Nurses Quarters, Kasoa</span>
            </p>

            {/* Countdown Stack */}
            <div className="mb-12 py-8 border-y border-slate-200/60">
              <Countdown />
            </div>

            {/* Action Stack */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
               <button 
                  onClick={onOpenRSVP}
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white rounded-xl font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
               >
                  <CalendarCheck size={20} />
                  <span>RSVP Registration</span>
               </button>
               
               <a 
                  href="#tour"
                  className="w-full sm:w-auto px-10 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
               >
                  <span>Explore Facility</span>
                  <ArrowRight size={18} />
               </a>
            </div>

            {/* Decor */}
            <div className="absolute -bottom-10 -right-10 opacity-5 pointer-events-none scale-150">
               <Heartbeat />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;