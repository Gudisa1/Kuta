import React from 'react';
import { Building, Award, LineChart } from 'lucide-react';

export default function Partnerships() {
  return (
    <section id="partners" className="py-24 bg-brand-dark relative overflow-hidden text-white">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-orange/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Network & Impact</h2>
            <h3 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Strategic Partnerships</h3>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              We collaborate with premier institutions to amplify our impact and deliver world-class capacity building.
            </p>
            
            <div className="space-y-6">
              {[
                { name: "Oromia State University", desc: "Collaborative education frameworks." },
                { name: "BCDA", desc: "Successfully trained 30+ students." },
                { name: "Ziway Roses", desc: "Corporate employee capacity building & AI-driven productivity training." }
              ].map((partner, idx) => (
                <div key={idx} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center flex-shrink-0">
                    <Building size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white">{partner.name}</h4>
                    <p className="text-sm text-slate-400 mt-1">{partner.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center transform translate-y-8 hover:scale-105 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-4 -mt-4"></div>
              <Award size={48} className="text-white/80 mb-4" />
              <h4 className="text-5xl font-bold text-white mb-2">30+</h4>
              <p className="text-orange-100 font-medium font-sm uppercase tracking-wider text-xs">Students Trained</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl shadow-2xl flex flex-col justify-center items-center text-center backdrop-blur-md hover:bg-white/10 transition-colors duration-300 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-32 h-32 bg-brand-orange/10 rounded-br-full -ml-4 -mt-4"></div>
              <LineChart size={48} className="text-brand-orange mb-4" />
              <h4 className="text-5xl font-bold text-white mb-2">100%</h4>
              <p className="text-slate-400 font-medium font-sm uppercase tracking-wider text-xs">Success Rate</p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
