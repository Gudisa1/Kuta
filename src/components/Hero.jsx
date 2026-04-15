import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden bg-[#fafafa]">
      {/* Background Decor Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-tr from-brand-orange/10 to-orange-400/5 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-slate-300/20 to-transparent rounded-full blur-[80px] transform -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full mt-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">
          
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
              <span className="text-brand-dark text-sm font-semibold tracking-wide uppercase">Empowering The Digital Economy</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.1] text-brand-dark tracking-tight">
              Inspiring the <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-orange-400">Future</span> of Learning
            </h1>
            
            <p className="text-lg sm:text-xl text-slate-600 max-w-xl leading-relaxed font-light">
              A technology-driven Training and Development Center that equips individuals and organizations with skills to succeed in the digital economy.
            </p>
            
            <div className="flex flex-wrap items-center gap-5 pt-4">
              <a href="#services" className="px-8 py-4 rounded-full bg-brand-orange text-white font-medium text-lg hover:bg-orange-600 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-orange-500/25 flex items-center gap-2 group">
                Explore Programs 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#about" className="px-8 py-4 rounded-full bg-white text-brand-dark font-medium text-lg border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 transition-all duration-300 shadow-sm">
                Our Mission
              </a>
            </div>
            
            {/* Quick stats / Trust signals hidden on mobile for cleaner look */}
            <div className="hidden sm:flex items-center gap-8 pt-10 border-t border-slate-200 mt-12">
              <div>
                <p className="text-3xl font-bold text-brand-dark">30+</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Schools Supported</p>
              </div>
              <div className="w-[1px] h-12 bg-slate-200"></div>
              <div>
                <p className="text-3xl font-bold text-brand-dark">100%</p>
                <p className="text-sm text-slate-500 uppercase tracking-wider font-medium">Commitment</p>
              </div>
            </div>
          </div>
          
          {/* Visual Showcase showcasing dynamic masks */}
          <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center">
            
            <div className="absolute top-10 right-4 w-[75%] h-[75%] clip-rounded-rect overflow-hidden shadow-2xl z-20 group">
               <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Students learning" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>
            
            <div className="absolute bottom-4 left-0 w-[55%] h-[55%] clip-circle overflow-hidden shadow-2xl z-30 border-8 border-[#fafafa] group">
               <div className="absolute inset-0 bg-brand-orange/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tech training" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
            </div>

            {/* Floating decorative UI element */}
            <div className="absolute top-1/3 -left-8 bg-white p-4 rounded-2xl shadow-xl z-40 flex items-center gap-4 animate-bounce hover:animate-none transition-all duration-300">
               <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xl">
                 ✓
               </div>
               <div>
                 <p className="text-sm font-bold text-brand-dark">Innovation</p>
                 <p className="text-xs text-slate-500">Driven Learning</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
