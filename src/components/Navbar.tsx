import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Calendar, 
  Menu, 
  X, 
  Code2, 
  Sparkles
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '10-App Financial Suite', href: '#suite', icon: Layers },
    { name: 'Architecture', href: '#architecture', icon: Cpu },
    { name: 'Enterprise Scale (SIG)', href: '#enterprise', icon: ShieldCheck },
    { name: 'Live Sandboxes (5)', href: '#demos', icon: Sparkles },
    { name: 'Tech Stack', href: '#stack', icon: Code2 },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <Terminal className="w-5 h-5 text-slate-950" strokeWidth={2.5} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg text-slate-100 tracking-tight group-hover:text-cyan-400 transition-colors">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-cyan-950/80 text-cyan-400 border border-cyan-800/50">
                  Principal Architect
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono hidden md:block">
                Creator of MyTradingToolbox (10 Apps) • 25+ Yrs SIG Veteran
              </p>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-900/80 transition-all"
                >
                  <Icon className="w-4 h-4 opacity-70" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </nav>

          {/* Persistent CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="#contact"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <Calendar className="w-4 h-4 text-slate-950" />
              <span>Schedule 15-Min Intro</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-900 border border-slate-800 cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-800 bg-slate-950/95 backdrop-blur-xl px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-base font-medium text-slate-200 hover:text-cyan-400 hover:bg-slate-900 transition-colors"
              >
                <Icon className="w-5 h-5 text-cyan-400" />
                <span>{link.name}</span>
              </a>
            );
          })}
          <div className="pt-4 border-t border-slate-800 space-y-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule 15-Min Intro</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
