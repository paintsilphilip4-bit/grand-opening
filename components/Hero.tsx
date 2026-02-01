import React from 'react';
import Countdown from './Countdown';
import Heartbeat from './Heartbeat';
import { MapPin, CalendarCheck, ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  onOpenRSVP: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenRSVP }) => {
  // Optimized Background Image URL (WebP, Resized, Compressed)
  const bgImage = "https://wsrv.nl/?url=https://raw.githubusercontent.com/paintsilphilip4-bit/adlai-assets/refs/heads/main/adlai-hero.jpg&w=1920&q=70&output=webp";

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden bg-[#f6f8f6]">
      
      {/* Background Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* 0. Base Soft Gradient - Lemon/Lime tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-stone-50 via-[#f4f7f4] to-slate-100 opacity-90"></div>

        {/* 1. Background Image - Clearer Visibility */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center opacity-80 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${bgImage})` }}
        ></div>

        {/* 2. Base Gradient Blobs (Atmosphere) - Lemon Green */}
        <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-lime-100/40 rounded-full mix-blend-multiply animate-blob opacity-60"></div>
        <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-slate-200/40 rounded-full mix-blend-multiply animate-blob animation-delay-2000 opacity-60"></div>
        <div className="absolute -bottom-32 left-[20%] w-[500px] h-[500px] bg-yellow-50/50 rounded-full mix-blend-multiply animate-blob animation-delay-4000 opacity-60"></div>

        {/* 3. Floating Geometric Shapes - Lime/Lemon accents */}
        {/* Circle Outline */}
        <div className="absolute top-1/4 left-[10%] w-20 h-20 rounded-full border-4 border-lime-200/30 animate-float transition-all duration-1000 ease-in-out hover:scale-110"></div>
        
        {/* Square Outline */}
        <div className="absolute bottom-1/3 right-[5%] w-16 h-16 rounded-xl border-4 border-slate-300/30 animate-float animation-delay-2000 rotate-12 transition-all duration-1000"></div>
        
        {/* Solid Dot */}
        <div className="absolute top-1/2 right-[20%] w-4 h-4 bg-lime-300/40 rounded-full animate-pulse"></div>
        
        {/* Large Faint Circle */}
        <div className="absolute -bottom-20 -right-20 w-96 h-96 border border-slate-200/40 rounded-full animate-float animation-delay-4000 opacity-50"></div>

        {/* Small Crosses/Plus signs */}
        <div className="absolute top-32 right-1/3 text-lime-200/50 text-4xl font-light animate-float animation-delay-2000 select-none">+</div>
        <div className="absolute bottom-32 left-1/4 text-slate-300/50 text-6xl font-light animate-float select-none">+</div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="flex flex-col items-center justify-center">
          
          {/* THE CONTENT STACK: Solid background, no blur, neutral tint */}
          <div className="w-full max-w-5xl bg-[#f9fcf9]/95 rounded-[2.5rem] p-8 md:p-14 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-white animate-fade-in-up text-center relative overflow-hidden ring-1 ring-lime-100/50">
            
            {/* Decorative Shine - Lime */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-lime-300/40 to-transparent"></div>
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full bg-white border border-lime-100 shadow-sm animate-fade-in">
                <Star size={14} className="text-lime-500 fill-lime-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-slate-500">Official Launch Event</span>
            </div>

            {/* Typography Stack */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-800 tracking-tight leading-[0.9] mb-4 animate-fade-in delay-100">
              GRAND <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-lime-500">OPENING</span>
            </h1>
            
            <div className="flex items-center justify-center gap-3 mb-8 animate-fade-in delay-200">
              <div className="h-px w-12 bg-slate-300"></div>
              <h2 className="text-xl md:text-2xl text-slate-500 font-medium uppercase tracking-widest">
                Adlai Community Hospital
              </h2>
              <div className="h-px w-12 bg-slate-300"></div>
            </div>

            <p className="text-lg text-slate-500 font-medium mb-10 flex items-center justify-center gap-2 animate-fade-in delay-300">
               <MapPin className="text-lime-500" />
               <span>Nurses Quarters, Kasoa</span>
            </p>

            {/* Countdown Stack */}
            <div className="mb-12 py-8 border-y border-lime-100 animate-fade-in delay-300">
              <Countdown />
            </div>

            {/* Action Stack */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
               <button 
                  onClick={onOpenRSVP}
                  className="w-full sm:w-auto px-10 py-4 bg-slate-800 text-white rounded-xl font-bold text-lg hover:bg-slate-700 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-3"
               >
                  <CalendarCheck size={20} />
                  <span>RSVP Registration</span>
               </button>
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