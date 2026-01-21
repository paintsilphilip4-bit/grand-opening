import React, { useState, useEffect } from 'react';
import { Menu, X, CalendarCheck } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
  onOpenRSVP: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenRSVP }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Nav items mapped to specific section IDs
  const navLinks = [
    { name: 'Facility Tour', href: '#tour' }, // Maps to Facility Showcase
    { name: 'The Event', href: '#event' },    // Maps to Order of Events
    { name: 'Location', href: '#contact' },   // Maps to Map/Location
  ];

  // Robust scroll handler to ensure precise positioning
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate offset to account for fixed navbar
      // Navbar is roughly 64px (h-16) + padding. We use 100px for breathing room.
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      setIsOpen(false);
    } else if (href === '#home') {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // 1. Handle Navbar Background
      setIsScrolled(window.scrollY > 20);

      // 2. Handle Active Section (Scroll Spy)
      const sections = ['home', 'tour', 'event', 'contact'];
      
      // Default to home
      let current = 'home';
      
      // Find the current section
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the top of the viewport (with offset)
          // or if we are well within the section
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo Section */}
          <div className={`flex-shrink-0 flex items-center transition-all duration-300 ${!isScrolled ? 'scale-105' : ''}`}>
            <a 
              href="#home" 
              onClick={(e) => handleScrollTo(e, '#home')}
              className="block group"
            >
              {/* Floating Title Design Container */}
              <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-100 p-2 md:p-3 flex items-center justify-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.18)] transition-shadow">
                 <Logo className="h-10 md:h-14 w-auto" />
              </div>
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`
                    font-bold uppercase tracking-wide text-xs transition-all px-4 py-2 rounded-full cursor-pointer
                    ${isActive 
                      ? 'text-adlai-blue bg-blue-50 shadow-sm' 
                      : isScrolled ? 'text-slate-600 hover:bg-slate-50' : 'text-slate-800 hover:bg-white/50'
                    }
                  `}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pl-4">
              <button 
                onClick={onOpenRSVP}
                className="flex items-center gap-2 bg-adlai-green hover:bg-green-600 text-white px-6 py-2.5 rounded-full font-bold transition-all transform hover:scale-105 shadow-md hover:shadow-lg uppercase text-xs tracking-widest"
              >
                <CalendarCheck size={16} />
                <span>RSVP Info</span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none text-slate-800 bg-white/80 p-2 rounded-lg backdrop-blur-sm shadow-sm"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute w-full left-0 top-full border-t border-slate-100 animate-fade-in">
          <div className="px-4 pt-4 pb-8 space-y-2">
            <a 
              href="#home"
              onClick={(e) => handleScrollTo(e, '#home')}
              className={`block px-4 py-3 text-base font-bold rounded-xl uppercase tracking-wide cursor-pointer ${activeSection === 'home' ? 'bg-blue-50 text-adlai-blue' : 'text-slate-700 hover:bg-slate-50'}`}
            >
              Home
            </a>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`
                  block px-4 py-3 text-base font-bold rounded-xl uppercase tracking-wide cursor-pointer
                  ${activeSection === link.href.substring(1) ? 'bg-blue-50 text-adlai-blue' : 'text-slate-700 hover:bg-slate-50'}
                `}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-4 border-t border-slate-100">
              <button 
                onClick={() => {
                  setIsOpen(false);
                  onOpenRSVP();
                }}
                className="flex items-center justify-center gap-2 w-full bg-adlai-blue text-white py-4 rounded-xl font-bold uppercase tracking-wide shadow-lg active:scale-95 transition-transform"
              >
                <CalendarCheck size={20} />
                <span>RSVP Registration</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;