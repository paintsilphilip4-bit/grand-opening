import React, { useState, useEffect, useRef } from 'react';
import { SERVICES, CONTACT_INFO } from '../constants';
import { ArrowRight, Sparkles } from 'lucide-react';
import { ServiceItem } from '../types';

// Hook for scroll animations
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
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

const generateTinyUrl = (url: string) => {
  // Helper to generate a tiny, low-quality version of the image for blur-up effect
  if (url.includes('wsrv.nl')) {
    return url.replace(/w=\d+/, 'w=20').replace(/q=\d+/, 'q=20');
  }
  if (url.includes('images.unsplash.com')) {
     if (url.match(/w=\d+/)) {
        return url.replace(/w=\d+/, 'w=20').replace(/q=\d+/, 'q=20');
     }
     return `${url}&w=20&q=20`;
  }
  return `https://wsrv.nl/?url=${encodeURIComponent(url)}&w=20&q=20&output=webp`;
};

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const tinyUrl = generateTinyUrl(service.image);

  return (
    <div 
      ref={ref}
      className={`bg-white rounded-2xl shadow-sm hover:shadow-xl md:hover:shadow-2xl hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 ease-out border border-slate-100 group flex flex-col overflow-hidden h-full z-10 relative will-change-transform backface-hidden ${isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative bg-slate-100">
        
        {!imageError ? (
          <>
             {/* Tiny Placeholder Image (Blur Up Effect) */}
             <img 
               src={tinyUrl} 
               alt=""
               className={`absolute inset-0 w-full h-full object-cover filter blur-xl scale-110 transition-opacity duration-700 ${isLoaded ? 'opacity-0' : 'opacity-100'}`}
               aria-hidden="true"
             />

             {/* Main Image */}
             <img 
               src={service.image} 
               alt={service.title} 
               className={`w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 md:group-hover:scale-110 will-change-transform relative z-10 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
               onLoad={() => setIsLoaded(true)}
               onError={() => setImageError(true)}
               loading="lazy"
               width="600"
               height="400"
               decoding="async"
             />
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden group-hover:bg-blue-50/30 transition-colors duration-500">
              {/* Decorative Background Elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-blue-100/20 to-transparent rounded-bl-full transform translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-slate-100/50 to-transparent"></div>
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: `radial-gradient(#0d3880 0.5px, transparent 0.5px)`, backgroundSize: '12px 12px' }}></div>

              {/* Animated Icon Container */}
              <div className="relative z-10">
                 {/* Pulse Effect */}
                 <div className="absolute inset-0 bg-adlai-blue/5 rounded-full blur-xl transform scale-150 group-hover:scale-125 transition-transform duration-700"></div>
                 
                 <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group-hover:border-blue-100 group-hover:shadow-blue-100/50 transition-all duration-300 transform group-hover:-rotate-3">
                    <service.icon 
                      size={40} 
                      className="text-slate-300 group-hover:text-adlai-blue transition-colors duration-300" 
                      strokeWidth={1.5}
                    />
                 </div>
                 
                 {/* Decorative elements around icon */}
                 <div className="absolute -top-2 -right-2 w-4 h-4 bg-adlai-green/20 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                 <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-adlai-blue/20 rounded-full group-hover:scale-150 transition-transform duration-500 delay-100"></div>
              </div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300 z-20 pointer-events-none"></div>
        
        {/* Icon Badge overlapping image with Tooltip */}
        <div className="absolute bottom-4 left-4 z-30 group/badge transform transition-transform duration-300 ease-out group-hover:-translate-y-1">
            {/* Removed backdrop-blur for mobile performance, increased opacity */}
            <div className="w-12 h-12 bg-white/95 rounded-xl flex items-center justify-center shadow-lg cursor-help">
               <service.icon size={24} className="text-adlai-blue" />
            </div>
            
            {/* Tooltip */}
            <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover/badge:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover/badge:translate-x-0 pointer-events-none hidden md:block">
                <div className="bg-slate-900/95 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl whitespace-nowrap relative">
                    {/* Arrow */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 -ml-1 w-2 h-2 bg-slate-900/95 transform rotate-45"></div>
                    {service.title}
                </div>
            </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-adlai-blue transition-colors duration-300">{service.title}</h4>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{service.description}</p>
        
        <div className="mt-auto pt-4 w-full flex items-center justify-between text-xs font-bold text-adlai-green uppercase tracking-wide border-t border-slate-50">
          <span>View Details</span>
          <div className="bg-green-50 p-1.5 rounded-full group-hover:bg-adlai-green group-hover:text-white transition-colors duration-300 ease-out">
            <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300 ease-out" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const headerReveal = useScrollReveal();
  const nhisReveal = useScrollReveal();
  
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    "name": "Adlai Community Hospital",
    "image": "https://github.com/paintsilphilip4-bit/adlai-assets/blob/main/Adlai%20Community%20Clinic%20Logo.jpg?raw=true",
    "telephone": CONTACT_INFO.phone,
    "email": CONTACT_INFO.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Nurses Quarters",
      "addressLocality": "Kasoa",
      "addressRegion": "Central Region",
      "addressCountry": "Ghana"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 5.5560,
      "longitude": -0.4190
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "00:00",
        "closes": "23:59",
        "description": "24/7 Service for OPD and Emergency"
      }
    ],
    "availableService": SERVICES.map(service => ({
      "@type": "MedicalService",
      "name": service.title,
      "description": service.description,
      "image": service.image,
      "provider": {
        "@type": "Hospital",
        "name": "Adlai Community Hospital"
      }
    }))
  };

  return (
    <section id="tour" className="py-24 bg-slate-50 relative overflow-hidden">
       {/* Structured Data for SEO */}
       <script 
         type="application/ld+json"
         dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
       />

       {/* Decorative Top Border */}
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent z-20"></div>

       {/* Background Pattern */}
       <div className="absolute inset-0 z-0 opacity-[0.03]" 
            style={{ 
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230d3880' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
       ></div>

       {/* Soft Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-transparent to-slate-50/80 z-0 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Animated Header */}
        <div 
          ref={headerReveal.ref}
          className={`text-center mb-16 relative transition-all duration-1000 ${headerReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
        >
          
          <div className="inline-flex items-center justify-center p-2 bg-white rounded-full shadow-sm mb-6 border border-slate-100 group hover:scale-105 transition-transform duration-300">
             <div className="px-4 py-1.5 bg-green-50 text-adlai-green rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                <Sparkles size={14} className="group-hover:animate-spin-slow" />
                <span>Facility Tour</span>
             </div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
            Explore Our <span className="relative inline-block whitespace-nowrap">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-adlai-blue to-blue-600">Departments</span>
              {/* Decorative Curve Underline */}
              <svg className="absolute w-[110%] h-4 -bottom-1 -left-[5%] text-adlai-green/30 z-0" viewBox="0 0 100 10" preserveAspectRatio="none">
                 <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h2>

          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">
            During the Grand Opening, guests will have exclusive access to tour our state-of-the-art facilities in Kasoa. Here is a glimpse of what to expect:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* NHIS Highlight - Animated */}
        <div 
          ref={nhisReveal.ref}
          className={`mt-20 bg-adlai-blue rounded-3xl p-8 md:p-16 relative overflow-hidden text-white shadow-2xl group cursor-default transform hover:scale-[1.01] transition-transform duration-500 ${nhisReveal.isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}
          style={{ transitionDelay: '200ms' }}
        >
           {/* Background Image - African Community Context (Busy street/Market) */}
           <div className="absolute top-0 left-0 w-full h-full opacity-20 bg-[url('https://images.unsplash.com/photo-1565538749842-88849b2c86b3?auto=format&fit=crop&q=75&w=1200&fm=webp')] bg-cover bg-center mix-blend-overlay"></div>
           {/* Gradient Overlay */}
           <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-adlai-blue via-adlai-blue/90 to-transparent z-0"></div>
           
           <div className="relative z-10 flex flex-col items-center text-center">
             <h3 className="text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">Fully Accredited & Ready</h3>
             <p className="text-blue-100 max-w-2xl text-lg mb-8 leading-relaxed">
               We are proud to announce that upon opening, Adlai Community Hospital is fully accepted by the <strong>National Health Insurance Scheme (NHIS)</strong>. Quality healthcare is now within reach for everyone in Ghana.
             </p>
             <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 hover:bg-white/20 transition-colors shadow-lg">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                <span className="font-semibold tracking-wide">Accepting NHIS Cards from Day 1</span>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Services;