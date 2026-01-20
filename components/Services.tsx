import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

const ServiceCard: React.FC<{ service: ServiceItem; index: number }> = ({ service, index }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div 
      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-slate-100 group flex flex-col overflow-hidden h-full z-10 relative animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Section */}
      <div className="h-48 overflow-hidden relative bg-slate-100">
        {!imageError ? (
          <img 
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            onError={() => setImageError(true)}
            loading="lazy"
            width="600"
            height="400"
            decoding="async"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-50 relative overflow-hidden group-hover:bg-slate-100 transition-colors">
              {/* Pattern Background */}
              <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h2v2H1V1zm4 0h2v2H5V1zm4 0h2v2H9V1zM1 5h2v2H1V5zm4 0h2v2H5V5zm4 0h2v2H9V5zM1 9h2v2H1V9zm4 0h2v2H5V9zm4 0h2v2H9V9z' fill='%230d3880' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")` }}></div>
              
              {/* Center Icon with Glass effect */}
              <div className="w-20 h-20 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg border border-white relative z-10">
                 <service.icon size={36} className="text-slate-400 group-hover:text-adlai-blue transition-colors duration-300" />
              </div>
              
              {/* Bottom branded strip */}
              <div className="absolute bottom-0 w-full h-1 bg-gradient-to-r from-adlai-green via-adlai-blue to-adlai-green opacity-50"></div>
          </div>
        )}
        
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
        
        {/* Icon Badge overlapping image */}
        <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform translate-y-0 group-hover:-translate-y-1 transition-transform z-10">
           <service.icon size={24} className="text-adlai-blue" />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-grow">
        <h4 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-adlai-blue transition-colors">{service.title}</h4>
        <p className="text-slate-500 text-sm mb-6 leading-relaxed line-clamp-3">{service.description}</p>
        
        <div className="mt-auto pt-4 w-full flex items-center justify-between text-xs font-bold text-adlai-green uppercase tracking-wide border-t border-slate-50">
          <span>View Details</span>
          <div className="bg-green-50 p-1.5 rounded-full group-hover:bg-adlai-green group-hover:text-white transition-colors">
            <ArrowRight size={14} className="transform -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="tour" className="py-24 bg-slate-50 relative overflow-hidden">
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
        <div className="text-center mb-16">
          <h2 className="text-adlai-green font-bold tracking-wider uppercase mb-3 animate-fade-in">Facility Showcase</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 animate-fade-in delay-100">Tour Our Departments</h3>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg animate-fade-in delay-200">
            During the Grand Opening, guests will have exclusive access to tour our state-of-the-art facilities in Kasoa. Here is a glimpse of what to expect:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {SERVICES.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        {/* NHIS Highlight */}
        <div className="mt-20 bg-adlai-blue rounded-3xl p-8 md:p-16 relative overflow-hidden text-white shadow-2xl group cursor-default transform hover:scale-[1.01] transition-transform duration-500 animate-fade-in-up delay-300">
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