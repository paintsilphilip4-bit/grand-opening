import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Phone, MapPin, Mail, Facebook, Instagram, Twitter, Lock } from 'lucide-react';
import Map from './Map';
import Logo from './Logo';

interface ContactProps {
  onOpenAdmin: () => void;
}

const Contact: React.FC<ContactProps> = ({ onOpenAdmin }) => {
  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 relative">
      
      {/* Interactive Map Section */}
      <div className="w-full h-[500px] relative bg-slate-800 group">
        <Map />
        
        {/* Helper overlay */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs px-3 py-1 rounded-full shadow-lg z-[400] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
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
            <button onClick={onOpenAdmin} className="flex items-center gap-2 text-slate-600 hover:text-adlai-green transition-colors text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800/50">
              <Lock size={12} /> Staff Access
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;