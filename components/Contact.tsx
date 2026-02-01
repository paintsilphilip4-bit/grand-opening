import React, { useState } from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Lock, Loader2, CheckCircle } from 'lucide-react';
import Map from './Map';
import Logo from './Logo';

interface ContactProps {
  onOpenAdmin: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenAdmin }) => {
  const [accessState, setAccessState] = useState<'idle' | 'verifying' | 'granted'>('idle');

  const handleAdminClick = () => {
    if (accessState !== 'idle') return;

    setAccessState('verifying');
    
    // Simulate verification delay
    setTimeout(() => {
      setAccessState('granted');
      
      // Open dashboard after short success message display
      setTimeout(() => {
        onOpenAdmin();
        // Reset state after modal opens
        setTimeout(() => setAccessState('idle'), 500);
      }, 800);
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative">
      
      {/* Interactive Map Section */}
      <div className="w-full h-[500px] relative bg-slate-800 group overflow-hidden">
        
        {/* Title Overlay */}
        <div className="absolute top-0 left-0 w-full p-6 pointer-events-none z-[400] flex justify-center">
             <div className="bg-white/95 backdrop-blur-xl px-10 py-5 rounded-2xl shadow-[0_15px_40px_-10px_rgba(0,0,0,0.3)] border border-white/50 transform translate-y-4 md:translate-y-8 flex flex-col items-center">
                <div className="flex items-center gap-2 mb-1">
                   <div className="h-px w-8 bg-slate-300"></div>
                   <span className="block text-xs font-bold text-adlai-blue uppercase tracking-[0.2em]">Find Us</span>
                   <div className="h-px w-8 bg-slate-300"></div>
                </div>
                <h2 className="text-3xl font-black text-slate-900">Our Location</h2>
             </div>
        </div>

        <Map />
        
        {/* Helper overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs px-3 py-1 rounded-full shadow-lg z-[400] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-20 md:mt-0">
          Use two fingers to move map
        </div>

        {/* Gradient Blend - Seamless transition to footer */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent pointer-events-none z-[400]"></div>
      </div>

      {/* Contact Content - Floating card effect */}
      <div className="container mx-auto px-4 pb-12 relative z-10 -mt-20">
        
        <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-slate-700/50 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 w-fit p-4 rounded-xl">
                 <Logo className="h-24 w-auto" lightMode={true} />
              </div>
              <p className="text-slate-400 leading-relaxed">
                Providing quality healthcare services to the Kasoa community and beyond. where healthcare feels humane
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green hover:text-white transition-all duration-300 hover:scale-110 border border-slate-700 group">
                    <Facebook size={20} className="group-hover:animate-bounce" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green hover:text-white transition-all duration-300 hover:scale-110 border border-slate-700 group">
                    <Instagram size={20} className="group-hover:animate-pulse" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green hover:text-white transition-all duration-300 hover:scale-110 border border-slate-700 group">
                    <Twitter size={20} className="group-hover:animate-spin-slow" />
                </a>
              </div>
            </div>

            {/* Contact Info Column */}
            <div>
              <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-6 bg-adlai-green rounded-full"></span>
                Contact Info
              </h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-adlai-green group-hover:text-white transition-colors duration-300 shadow-md">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-1 group-hover:text-adlai-green transition-colors">Visit Us</span>
                    <span className="text-slate-400 text-sm leading-snug">{CONTACT_INFO.location}</span>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-adlai-green group-hover:text-white transition-colors duration-300 shadow-md">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-1 group-hover:text-adlai-green transition-colors">Call Us</span>
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-slate-400 text-sm hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
                  </div>
                </li>
                <li className="flex items-start gap-4 group">
                  <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-adlai-green group-hover:text-white transition-colors duration-300 shadow-md">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="block text-white font-bold mb-1 group-hover:text-adlai-green transition-colors">Email Us</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-slate-400 text-sm hover:text-white transition-colors">{CONTACT_INFO.email}</a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Hours Column */}
            <div>
               <h4 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                  <span className="w-1 h-6 bg-adlai-green rounded-full"></span>
                  Opening Hours
               </h4>
               <div className="bg-slate-800/40 rounded-2xl p-6 border border-slate-700/50 hover:border-adlai-green/30 transition-colors">
                 <ul className="space-y-4">
                   <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                     <span className="text-slate-300 font-medium">General OPD</span>
                     <span className="text-adlai-green font-bold text-xs bg-adlai-green/10 px-2 py-1 rounded border border-adlai-green/20">24/7</span>
                   </li>
                   <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                     <span className="text-slate-300 font-medium">Emergency</span>
                     <span className="text-adlai-green font-bold text-xs bg-adlai-green/10 px-2 py-1 rounded border border-adlai-green/20">24/7</span>
                   </li>
                   <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                     <span className="text-slate-300 font-medium">Pharmacy</span>
                     <span className="text-adlai-green font-bold text-xs bg-adlai-green/10 px-2 py-1 rounded border border-adlai-green/20">24/7</span>
                   </li>
                   <li className="flex justify-between items-center border-b border-slate-700/50 pb-3 last:border-0 last:pb-0">
                     <span className="text-slate-300 font-medium">Laboratory</span>
                     <span className="text-white font-bold text-xs bg-slate-700 px-2 py-1 rounded">Mon-Sat</span>
                   </li>
                 </ul>
               </div>
            </div>
          </div>

          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm">
            <p className="text-slate-500 hover:text-slate-400 transition-colors">&copy; {new Date().getFullYear()} Adlai Community Hospital. All rights reserved.</p>
            
            <div className="relative">
              <button 
                onClick={handleAdminClick} 
                disabled={accessState !== 'idle'}
                className={`flex items-center gap-2 text-xs font-medium px-4 py-2 rounded-full transition-all duration-300 ${
                  accessState === 'granted' 
                    ? 'text-green-400 bg-green-900/20 ring-1 ring-green-900/50' 
                    : accessState === 'verifying'
                    ? 'text-amber-400 bg-amber-900/20 ring-1 ring-amber-900/50 cursor-wait'
                    : 'text-slate-600 hover:text-adlai-green hover:bg-slate-800/50'
                }`}
              >
                {accessState === 'verifying' ? (
                  <Loader2 size={12} className="animate-spin" />
                ) : accessState === 'granted' ? (
                  <CheckCircle size={12} />
                ) : (
                  <Lock size={12} />
                )}
                
                {accessState === 'verifying' ? 'Verifying...' : accessState === 'granted' ? 'Success' : 'Staff Access'}
              </button>

              {/* Feedback Message Below Button */}
              {accessState === 'granted' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 whitespace-nowrap animate-fade-in z-20">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-green-400 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700 shadow-xl flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Access Granted
                    {/* Tiny arrow pointing up */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 border-t border-l border-slate-700 transform rotate-45"></div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;