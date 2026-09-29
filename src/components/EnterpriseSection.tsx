import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Building2, 
  CheckCircle2, 
  Zap, 
  ChevronRight,
  Activity
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const EnterpriseSection: React.FC = () => {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(0);

  const { enterpriseLegacy } = PORTFOLIO_DATA;

  return (
    <section id="enterprise" className="py-24 relative bg-slate-950/70 border-t border-slate-900 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
              <Building2 className="w-3.5 h-3.5" />
              <span>Enterprise Track Record</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              Decades of High-Stakes Scale at SIG
            </h2>

            <p className="text-base sm:text-lg text-slate-400 mt-3 max-w-3xl">
              25+ years hardening mission-critical trading infrastructure at <strong className="text-slate-200">Susquehanna International Group (SIG)</strong>, managing global exchange connectivity, 20,000+ task migrations, and enterprise telemetry across world markets.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-center gap-4 shrink-0">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">Institution</div>
              <div className="text-sm font-bold text-slate-100">Susquehanna Int. Group (SIG)</div>
              <div className="text-xs text-cyan-400 font-mono">25+ Year Tenure</div>
            </div>
          </div>
        </div>

        {/* Interactive Milestones & Scale Deep-Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Milestone Selector Tabs (Left Col) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider px-1 mb-2">
              Career Scale Epochs
            </div>

            {enterpriseLegacy.milestones.map((milestone, idx) => {
              const isSelected = selectedMilestone === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-200 relative cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-950/80 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs mb-1.5">
                    <span className="font-mono text-cyan-400 font-bold">{milestone.era}</span>
                    <span className="text-[11px] text-slate-400 font-mono">{milestone.role}</span>
                  </div>

                  <h3 className="font-bold text-sm sm:text-base text-slate-100 mt-1 leading-snug">
                    {milestone.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                    {milestone.summary}
                  </p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs font-mono text-emerald-400 font-semibold">
                    <Zap className="w-3.5 h-3.5" />
                    <span>{milestone.scaleMetric}</span>
                  </div>

                  {isSelected && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-400 hidden sm:block">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Milestone Details Card (Right Col) */}
          <div className="lg:col-span-8">
            {(() => {
              const active = enterpriseLegacy.milestones[selectedMilestone];
              return (
                <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6 shadow-2xl relative">
                  
                  {/* Header */}
                  <div className="border-b border-slate-800 pb-5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-bold font-mono bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                        {active.era} • {active.organization}
                      </span>
                      <span className="text-xs font-mono text-slate-400">
                        Role: {active.role}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 mt-3">
                      {active.title}
                    </h3>

                    {/* Big Scale Metric Callout */}
                    <div className="mt-4 p-4 rounded-xl bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-slate-900 border border-cyan-800/50 flex items-center gap-3">
                      <Activity className="w-5 h-5 text-cyan-400 shrink-0" />
                      <div>
                        <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider font-bold">
                          Impact & Scale Delivered
                        </div>
                        <div className="text-sm sm:text-base font-bold text-slate-100 mt-0.5">
                          {active.scaleMetric}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Strategic Objective & Execution
                    </h4>
                    <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                      {active.summary}
                    </p>
                  </div>

                  {/* Bullet Details */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Key Technical Achievements & Invariants
                    </h4>
                    {active.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Impact Badges */}
                  <div className="pt-2">
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Verified Capabilities
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {active.impactBadges.map((badge, bIdx) => (
                        <span 
                          key={bIdx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-950/80 text-emerald-300 border border-emerald-800/60 flex items-center gap-1.5"
                        >
                          <ShieldCheck className="w-3.5 h-3.5" />
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technology Chips */}
                  <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-slate-500 mr-2">Technologies Used:</span>
                    {active.technologies.map((t, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
};
