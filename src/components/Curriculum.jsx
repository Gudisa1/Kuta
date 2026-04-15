import React from 'react';
import { Compass, BarChart, Shield, LayoutGrid } from 'lucide-react';

const modules = [
  { title: "Leadership", icon: <Compass />, color: "bg-blue-50 text-blue-600", desc: "Guiding teams effectively." },
  { title: "Project Management (Agile)", icon: <LayoutGrid />, color: "bg-brand-orange/10 text-brand-orange", desc: "Delivering value iteratively." },
  { title: "Digital Strategy", icon: <BarChart />, color: "bg-green-50 text-green-600", desc: "Navigating digital transformations." },
  { title: "Cybersecurity", icon: <Shield />, color: "bg-red-50 text-red-600", desc: "Securing modern infrastructure." },
];

export default function Curriculum() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Core Competencies</h2>
          <h3 className="text-3xl md:text-5xl font-bold text-brand-dark">Curriculum Modules</h3>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="group p-8 rounded-3xl border border-slate-100 hover:border-brand-orange/50 hover:shadow-2xl hover:shadow-orange-500/10 transition-all duration-300 bg-slate-50 relative overflow-hidden">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 relative z-10 transition-transform group-hover:scale-110 group-hover:-rotate-3 ${mod.color}`}>
                {React.cloneElement(mod.icon, { size: 32 })}
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 relative z-10">{mod.title}</h4>
              <p className="text-slate-600 text-sm relative z-10">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
