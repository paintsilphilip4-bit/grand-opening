import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenRSVP: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenRSVP }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'The Event', href: '#event' },
    { name: 'Facility Tour', href: '#tour' },
    { name: 'Location', href: '#contact' },
  ];

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className={`flex-shrink-0 flex items-center transition-all duration-300 ${!isScrolled ? 'scale-110 origin-left' : ''}`}>
            <a href="#home" className="block hover:opacity-80 transition-opacity">
              <Logo className="h-12 md:h-14 w-auto" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-bold uppercase tracking-wide text-xs transition-colors px-3 py-2 rounded-lg hover:bg-white/50 ${isScrolled ? 'text-slate-600' : 'text-slate-800'}`}
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={onOpenRSVP}
              className="flex items-center gap-2 bg-adlai-green hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md uppercase text-xs tracking-widest"
            >
              <CalendarCheck size={16} />
              <span>RSVP Info</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-slate-800 bg-white/50 p-2 rounded-md backdrop-blur-sm"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-bold text-slate-700 hover:text-adlai-blue hover:bg-blue-50 rounded-lg uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsOpen(false);
                onOpenRSVP();
              }}
              className="block w-full text-center mt-4 bg-adlai-blue text-white py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg"
            >
              RSVP Info
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;