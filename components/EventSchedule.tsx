import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

const EventSchedule: React.FC = () => {
  const schedule = [
    { time: "09:00 AM", event: "Health Screening", desc: "Free vitals check (Ends at 2:00 PM)" },
    { time: "03:00 PM", event: "Arrival of Guests", desc: "Welcome refreshments served" },
    { time: "04:00 PM", event: "Ribbon Cutting", desc: "Official opening ceremony" },
    { time: "04:45 PM", event: "Facility Tour", desc: "Guided walk-through of departments" },
    { time: "05:30 PM", event: "Refreshments & Networking", desc: "Celebratory dinner and closing" }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-blue-50 p-6 md:p-8 rounded-3xl shadow-2xl border border-blue-100 h-full relative overflow-hidden">
      
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-adlai-green/5 rounded-full blur-2xl -mr-10 -mt-10"></div>

      <div className="mb-8 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-adlai-blue rounded-full text-xs font-bold uppercase tracking-wider mb-2">
           <Calendar size={14} /> 
           <span>March 14, 2026</span>
        </div>
        <h3 className="text-2xl font-bold text-slate-900">Order of Events</h3>
        <p className="text-slate-500">Join us for a day of celebration and community.</p>
      </div>

      <div className="space-y-6 relative z-10">
        {schedule.map((item, index) => (
          <div key={index} className="flex items-start gap-4 group">
            <div className="flex-shrink-0 w-20 text-right">
              <span className="text-sm font-bold text-adlai-blue block">{item.time}</span>
            </div>
            
            <div className="relative flex-grow pb-6 border-l-2 border-slate-200 pl-6 group-last:border-l-0 group-last:pb-0">
               {/* Timeline Dot */}
               <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-adlai-green group-hover:scale-125 transition-transform shadow-sm"></div>
               
               <h4 className="font-bold text-slate-800 text-lg leading-none mb-1 group-hover:text-adlai-blue transition-colors">{item.event}</h4>
               <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-center gap-2 text-adlai-green font-bold text-sm bg-white/50 p-4 rounded-xl">
        <Sparkles size={16} />
        <span>Don't miss the Grand Unveiling!</span>
      </div>
    </div>
  );
};

export default EventSchedule;