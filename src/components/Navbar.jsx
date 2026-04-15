import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getLinkClass = ({ isActive }) => 
    `text-sm uppercase tracking-wider font-medium transition-colors ${isActive ? 'text-brand-orange' : 'text-slate-600 hover:text-brand-orange'}`;

  const getMobileLinkClass = ({ isActive }) => 
    `block px-4 py-3 text-base font-semibold rounded-xl transition-colors ${isActive ? 'text-brand-orange bg-orange-50' : 'text-slate-700 hover:text-brand-orange hover:bg-orange-50'}`;

  return (
    <nav className="fixed top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-orange to-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/30">
              <BookOpen size={22} className="text-white" />
            </div>
            <span className="font-bold text-2xl text-brand-dark tracking-tight leading-none">KUTA</span>
          </Link>
          
          <div className="hidden md:flex space-x-8 items-center bg-white/50 px-6 py-2 rounded-full border border-slate-100 shadow-sm">
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/about" className={getLinkClass}>About</NavLink>
            <NavLink to="/services" className={getLinkClass}>Services</NavLink>
            <NavLink to="/partners" className={getLinkClass}>Partners</NavLink>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="#contact" className="px-6 py-2.5 bg-brand-dark text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 text-sm">Contact Us</a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 hover:text-brand-orange focus:outline-none p-2 bg-slate-100 rounded-full">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full pb-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="px-6 pt-4 space-y-2 flex flex-col">
            <NavLink to="/" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>About</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>Services</NavLink>
            <NavLink to="/partners" onClick={() => setIsOpen(false)} className={getMobileLinkClass}>Partners</NavLink>
            <div className="pt-4 mt-2 border-t border-slate-100">
               <a href="#contact" onClick={() => setIsOpen(false)} className="block w-full text-center px-4 py-3 bg-brand-orange text-white rounded-xl font-medium shadow-md shadow-orange-500/20">Contact Us</a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
