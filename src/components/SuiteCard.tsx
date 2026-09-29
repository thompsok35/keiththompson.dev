import React from 'react';
import { 
  Layers, 
  Sparkles, 
  Heart, 
  TrendingUp, 
  Activity, 
  Cpu
} from 'lucide-react';
import type { SuiteApplication } from '../data/portfolioData';

interface SuiteCardProps {
  app: SuiteApplication;
  onOpenModal: (app: SuiteApplication) => void;
  onOpenDemo: (demoType: 'rag' | 'options' | 'bot' | 'dividend' | 'screener') => void;
}

export const SuiteCard: React.FC<SuiteCardProps> = ({
  app,
  onOpenModal,
  onOpenDemo,
}) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Personal Wealth & Family': return Heart;
      case 'Live Trading & Bots': return TrendingUp;
      case 'Research & Backtesting': return Activity;
      default: return Cpu;
    }
  };

  const CategoryIcon = getCategoryIcon(app.category);

  return (
    <div className="glass-panel rounded-2xl p-6 sm:p-7 border border-slate-800/90 glass-panel-hover flex flex-col justify-between group relative overflow-hidden">
      
      {/* Subtle top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 opacity-60 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Card Header: Category & Repo Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/80 text-cyan-300 border border-cyan-800/60 flex items-center gap-1.5">
            <CategoryIcon className="w-3.5 h-3.5" />
            <span>{app.category}</span>
          </span>

          <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono bg-slate-900 text-slate-400 border border-slate-800">
            {app.repoName}
          </span>
        </div>

        {/* Title & Domain */}
        <div className="flex items-start justify-between gap-2 mt-1">
          <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
            {app.name}
          </h3>
        </div>

        <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-400 mt-1">
          <span>{app.domain}</span>
          <span className="text-slate-600">•</span>
          <span className="text-emerald-400 font-bold">{app.badge}</span>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
          {app.tagline}
        </p>

        {/* "How Keith Uses It Personally" Dogfooding Box */}
        <div className="mt-4 p-3.5 rounded-xl bg-gradient-to-br from-slate-950 to-slate-900/90 border border-cyan-500/20 text-xs text-slate-300 space-y-1">
          <div className="font-mono text-[10px] text-cyan-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
            <Heart className="w-3 h-3 text-cyan-400 fill-cyan-400/20" />
            <span>Personal Dogfooding Reality:</span>
          </div>
          <p className="italic text-slate-300 leading-relaxed text-[11px]">
            "{app.personalMission}"
          </p>
        </div>

        {/* Key Technical Highlights Checklist */}
        <div className="mt-4 space-y-1.5">
          <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 font-bold">
            Key Architecture Invariants:
          </div>
          {app.technicalHighlights.slice(0, 2).map((th, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-cyan-400 shrink-0 font-bold">✓</span>
              <span className="text-[11px] leading-relaxed line-clamp-2">{th}</span>
            </div>
          ))}
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 gap-2 mt-4">
          {app.metrics.map((metric, idx) => (
            <div key={idx} className="p-2 rounded-lg bg-slate-900/70 border border-slate-800/60">
              <div className="text-[10px] text-slate-400 truncate">{metric.label}</div>
              <div className="text-xs sm:text-sm font-bold text-cyan-300 font-mono mt-0.5">{metric.value}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Area: Tech Stack & CTAs */}
      <div className="mt-5 pt-4 border-t border-slate-800/80">
        
        {/* Tech Stack Chips */}
        <div className="flex flex-wrap items-center gap-1.5 mb-3.5">
          {app.techStack.map((tech) => (
            <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-900/90 border border-slate-800 text-slate-300">
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onOpenModal(app)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700/80 transition-all hover:border-cyan-500/40 cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Architecture Specs</span>
          </button>

          <button
            onClick={() => onOpenDemo(app.demoType)}
            className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 text-cyan-300 border border-cyan-500/40 transition-all shadow-sm cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launch Live Sandbox</span>
          </button>
        </div>

      </div>

    </div>
  );
};
