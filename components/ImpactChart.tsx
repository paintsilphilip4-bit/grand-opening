import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', patients: 120, satisfaction: 80 },
  { month: 'Feb', patients: 200, satisfaction: 85 },
  { month: 'Mar', patients: 350, satisfaction: 88 }, // Grand Opening boost
  { month: 'Apr', patients: 450, satisfaction: 92 },
  { month: 'May', patients: 580, satisfaction: 95 },
  { month: 'Jun', patients: 700, satisfaction: 96 },
];

const ImpactChart: React.FC = () => {
  return (
    <div className="w-full h-[400px] bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-adlai-blue">Projected Community Impact</h3>
        <p className="text-sm text-slate-500">Estimated patient care capacity growth post-opening</p>
      </div>
      <ResponsiveContainer width="100%" height="80%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b'}} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#fff', borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
          />
          <Area 
            type="monotone" 
            dataKey="patients" 
            stroke="#0d3880" 
            fill="url(#colorPatients)" 
            strokeWidth={3}
          />
          <defs>
            <linearGradient id="colorPatients" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0d3880" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#0d3880" stopOpacity={0}/>
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ImpactChart;
