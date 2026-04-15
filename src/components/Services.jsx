import React from 'react';
import { BookOpen, Users, Cpu, Briefcase, GraduationCap, Code, HeadphonesIcon } from 'lucide-react';

const services = [
  { id: '01', title: 'Curriculum Design', icon: <BookOpen />, desc: 'Custom tech education programs.' },
  { id: '02', title: 'Instructor Training', icon: <Users />, desc: 'Empowering educators.' },
  { id: '03', title: 'Technical Support', icon: <HeadphonesIcon />, desc: 'Reliable system maintenance.' },
  { id: '04', title: 'Corporate Training', icon: <Briefcase />, desc: 'Upskilling employee teams.' },
  { id: '05', title: 'AI Productivity', icon: <Cpu />, desc: 'Leveraging AI tools for efficiency.' },
  { id: '06', title: 'Student Programs', icon: <GraduationCap />, desc: 'Youth digital literacy.' },
  { id: '07', title: 'Dev Bootcamps', icon: <Code />, desc: 'Intensive coding experiences.' },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold text-brand-orange uppercase tracking-wider mb-2">What We Do</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-brand-dark tracking-tight">Our Services</h3>
          </div>
          <p className="text-slate-600 max-w-sm text-lg border-l-2 border-brand-orange pl-4">
            Comprehensive solutions designed to elevate human capital in the tech sector.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:border-brand-orange/50 hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-orange-50 text-brand-orange flex flex-col items-center justify-center group-hover:scale-110 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300">
                  {React.cloneElement(service.icon, { size: 24, strokeWidth: 1.5 })}
                </div>
                <span className="text-xs font-bold text-slate-300 group-hover:text-orange-200 text-right">{service.id}</span>
              </div>
              <h4 className="text-xl font-bold text-brand-dark mb-3 group-hover:text-brand-orange transition-colors">{service.title}</h4>
              <p className="text-slate-500 text-sm">{service.desc}</p>
            </div>
          ))}
          
          {/* Aesthetic Filler Card */}
          <div className="bg-brand-dark p-8 rounded-2xl flex flex-col justify-center items-center text-center sm:col-span-2 lg:col-span-1 xl:col-span-1 shadow-xl relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay group-hover:opacity-40 transition-opacity"></div>
            <p className="text-white font-bold text-xl relative z-10 mb-4">Ready to level up?</p>
            <a href="#contact" className="inline-flex items-center text-brand-orange font-semibold hover:text-white transition-colors relative z-10 bg-white/10 px-6 py-2 rounded-full backdrop-blur-sm border border-white/20 hover:bg-brand-orange hover:border-brand-orange">
              Get Started →
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
