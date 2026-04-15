import React from 'react';
import { Target, Eye } from 'lucide-react';

export default function VisionMission() {
  return (
    <section id="about" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">Our Core Identity</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-brand-dark">Driving Inclusive Growth</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Vision */}
          <div className="group p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-brand-orange mb-8 relative z-10">
              <Eye size={32} />
            </div>
            <h4 className="text-2xl font-bold text-brand-dark mb-4 relative z-10">Our Vision</h4>
            <p className="text-slate-600 text-lg leading-relaxed relative z-10">
              To inspire and equip learners with digital skills to thrive in a technology-driven world.
            </p>
          </div>

          {/* Mission */}
          <div className="group p-8 md:p-12 bg-slate-50 rounded-3xl border border-slate-100 hover:border-brand-orange/30 hover:shadow-2xl hover:shadow-orange-500/5 transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-slate-200 rounded-bl-[100px] -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-700 mb-8 relative z-10">
              <Target size={32} />
            </div>
            <h4 className="text-2xl font-bold text-brand-dark mb-4 relative z-10">Our Mission</h4>
            <p className="text-slate-600 text-lg leading-relaxed relative z-10">
              To create an inclusive future where individuals succeed in the digital economy.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20 pt-16 border-t border-slate-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Excellence', desc: 'Highest quality in delivery' },
              { label: 'Inclusive Access', desc: 'Opportunities for everyone' },
              { label: 'Innovation', desc: 'Forward-thinking approach' },
              { label: 'Adaptability', desc: 'Evolving with technology' }
            ].map((value, i) => (
              <div key={i} className="space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-orange-50 flex items-center justify-center text-brand-orange font-bold text-xl">
                  {i + 1}
                </div>
                <h5 className="text-lg font-bold text-brand-dark">{value.label}</h5>
                <p className="text-sm text-slate-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
