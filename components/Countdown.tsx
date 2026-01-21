import React, { useState, useEffect } from 'react';
import { GRAND_OPENING_DATE } from '../constants';
import { CountdownTime } from '../types';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventStarted, setIsEventStarted] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(GRAND_OPENING_DATE) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
        setIsEventStarted(false);
      } else {
        setIsEventStarted(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  const TimeUnit: React.FC<{ value: number; label: string }> = ({ value, label }) => (
    <div className="flex flex-col items-center mx-3 md:mx-6 group">
      <div className="w-20 h-20 md:w-28 md:h-28 bg-white shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-slate-100 rounded-2xl flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
        {/* Subtle Shine */}
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-transparent"></div>
        <span className="text-3xl md:text-5xl font-black text-slate-800 tabular-nums relative z-10">{value < 10 ? `0${value}` : value}</span>
      </div>
      <span className="text-xs md:text-sm text-slate-500 uppercase tracking-widest mt-4 font-bold">{label}</span>
    </div>
  );

  const eventDate = new Date(GRAND_OPENING_DATE);
  const dateString = eventDate.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const timeString = eventDate.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });

  if (isEventStarted) {
    return (
      <div className="py-8 animate-bounce">
         <span className="text-4xl md:text-6xl font-black text-adlai-green drop-shadow-sm uppercase tracking-wider">Grand Opening!</span>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center w-full">
      
      {/* Date & Time Display */}
      <div className="flex flex-col items-center mb-8 text-center animate-fade-in">
        <h3 className="text-2xl md:text-4xl font-bold text-slate-800 mb-2">
          {dateString}
        </h3>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-slate-100 rounded-full text-slate-600 font-semibold text-sm md:text-base tracking-wide">
          <span>at {timeString}</span>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="flex flex-wrap justify-center items-center py-4">
        <TimeUnit value={timeLeft.days} label="Days" />
        <span className="text-3xl md:text-5xl text-slate-300 font-light -mt-10 pb-1">:</span>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <span className="text-3xl md:text-5xl text-slate-300 font-light -mt-10 pb-1">:</span>
        <TimeUnit value={timeLeft.minutes} label="Mins" />
        <span className="text-3xl md:text-5xl text-slate-300 font-light -mt-10 pb-1">:</span>
        <TimeUnit value={timeLeft.seconds} label="Secs" />
      </div>
    </div>
  );
};

export default Countdown;