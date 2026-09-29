import React from 'react';
import { 
  Code2, 
  Brain, 
  Server, 
  TrendingUp, 
  Layout, 
  Cpu, 
  ShieldCheck
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain': return Brain;
      case 'Server': return Server;
      case 'TrendingUp': return TrendingUp;
      case 'Layout': return Layout;
      default: return Cpu;
    }
  };

  return (
    <section id="stack" className="py-24 relative bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Code2 className="w-3.5 h-3.5" />
            <span>Technical Mastery Matrix</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Enterprise & AI Architecture Stack
          </h2>

          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Battle-tested across 25+ years of high-stakes financial scale and cutting-edge deterministic AI engineering.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.skillsHierarchy.map((category, idx) => {
            const Icon = getIcon(category.iconName);
            return (
              <div 
                key={idx}
                className="glass-panel rounded-2xl p-6 border border-slate-800/90 glass-panel-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-slate-100">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {category.skills.map((skill, sIdx) => (
                      <div 
                        key={sIdx}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/50 border border-slate-800/60 text-xs"
                      >
                        <span className="font-medium text-slate-200">{skill.name}</span>
                        <div className="flex items-center gap-1.5 font-mono">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-semibold ${
                            skill.level.includes('Master') || skill.level.includes('Architect')
                              ? 'bg-cyan-950 text-cyan-300 border border-cyan-800/60'
                              : 'bg-slate-900 text-slate-300 border border-slate-800'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/60 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Production Verified</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
