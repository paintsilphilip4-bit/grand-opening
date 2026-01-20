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
    <footer id="contact" className="bg-slate-900 text-slate-300">
      
      {/* Interactive Map Section */}
      <div className="w-full h-96 relative bg-slate-800 border-b-4 border-adlai-green">
        <Map />
        {/* Helper overlay for mobile users to know it's a map */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-slate-900 text-xs px-3 py-1 rounded-full shadow-lg z-[400] pointer-events-none">
          Use two fingers to move map
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <div className="flex items-center gap-3 mb-6 bg-white w-fit p-2 rounded-lg">
               <Logo className="h-12 w-auto" />
            </div>
            <p className="mb-6 opacity-80">
              Providing quality healthcare services to the Kasoa community and beyond. Your health is our priority.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green transition-colors"><Facebook size={20}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green transition-colors"><Instagram size={20}/></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-adlai-green transition-colors"><Twitter size={20}/></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="text-adlai-green mt-1" size={20} />
                <span>{CONTACT_INFO.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="text-adlai-green" size={20} />
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="hover:text-white transition-colors">{CONTACT_INFO.phone}</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="text-adlai-green" size={20} />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">{CONTACT_INFO.email}</a>
              </li>
            </ul>
          </div>

          <div>
             <h4 className="text-lg font-bold text-white mb-6">Opening Hours</h4>
             <ul className="space-y-3">
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>General OPD</span>
                 <span className="text-adlai-green font-semibold">24/7</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Emergency</span>
                 <span className="text-adlai-green font-semibold">24/7</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Pharmacy</span>
                 <span className="text-adlai-green font-semibold">24/7</span>
               </li>
               <li className="flex justify-between border-b border-slate-800 pb-2">
                 <span>Laboratory</span>
                 <span className="text-white">Mon-Sat (24h)</span>
               </li>
             </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center text-sm opacity-50">
          <p>&copy; {new Date().getFullYear()} Adlai Community Hospital. All rights reserved.</p>
          <button onClick={onOpenAdmin} className="flex items-center gap-2 hover:text-white transition-colors text-xs">
            <Lock size={12} /> Staff Access
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Contact;