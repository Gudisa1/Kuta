import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-24 mb-16">
          
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-orange to-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/20">
                <BookOpen size={24} />
              </div>
              <span className="font-bold text-3xl text-white tracking-tight">KUTA</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-sm">
              A technology-driven Training and Development Center that equips individuals and organizations with skills to succeed in the digital economy.
            </p>
            <div className="flex gap-4 pt-2">
              {['fb', 'tw', 'in'].map((social, i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors cursor-pointer text-slate-300 uppercase text-xs font-bold shadow-md">
                  {social}
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="hover:text-brand-orange transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span> Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-orange transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span> About Us</Link></li>
              <li><Link to="/services" className="hover:text-brand-orange transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span> Services</Link></li>
              <li><Link to="/partners" className="hover:text-brand-orange transition-colors flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-slate-700"></span> Partners</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6 tracking-wide">Contact Details</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center shrink-0 text-brand-orange">
                   <Phone size={18} />
                </div>
                <div className="mt-2 text-sm text-white">
                  +251 968 331 095
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center shrink-0 text-brand-orange">
                   <MapPin size={18} />
                </div>
                <div className="mt-1 text-sm text-slate-300">
                  Batu, Oromia<br/>Ethiopia
                </div>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-slate-800 text-sm text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500">&copy; {new Date().getFullYear()} Kuta Learning Institute. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-semibold text-slate-600 uppercase tracking-wider">
            <span>Excellence</span> <span>Inclusive Access</span> <span>Innovation</span> <span>Adaptability</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
