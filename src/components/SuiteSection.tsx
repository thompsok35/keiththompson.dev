import React, { useState } from 'react';
import { 
  Layers, 
  ShieldCheck, 
  ArrowRight,
  GitBranch
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import type { SuiteApplication } from '../data/portfolioData';
import { SuiteCard } from './SuiteCard';

interface SuiteSectionProps {
  onOpenModal: (app: SuiteApplication) => void;
  onOpenDemo: (demoType: 'rag' | 'options' | 'bot' | 'dividend' | 'screener') => void;
}

export const SuiteSection: React.FC<SuiteSectionProps> = ({
  onOpenModal,
  onOpenDemo
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Personal Wealth & Family',
    'Live Trading & Bots',
    'Research & Backtesting',
    'AI & Ecosystem'
  ];

  const filteredApps = selectedCategory === 'All'
    ? PORTFOLIO_DATA.suiteApplications
    : PORTFOLIO_DATA.suiteApplications.filter(app => app.category === selectedCategory);

  return (
    <section id="suite" className="py-24 relative bg-slate-950/60 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Full Suite Ecosystem (10 Applications)</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
              The MyTradingToolbox Ecosystem
            </h2>
            
            <p className="text-base text-slate-400 mt-3 max-w-3xl leading-relaxed">
              10 specialized, interconnected platforms engineered for production personal finance, generational dividend compounding, live options execution, market backtesting, and deterministic AI coaching.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat === 'All' ? 'All 10 Apps' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Cohesive Ecosystem Flow Infographic Banner */}
        <div className="mb-14 p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 border border-cyan-500/30 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <GitBranch className="w-5 h-5 text-cyan-400" />
              <h3 className="font-bold text-slate-100 text-base sm:text-lg">
                How Keith Thompson Orchestrates the 10-App Capital Pipeline
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-800/60 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Closed-Loop Personal Capital System</span>
            </span>
          </div>

          {/* Pipeline Flow Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mt-6">
            {[
              {
                step: '01',
                title: 'Due Diligence & Health',
                app: 'DataServicesPlatform',
                desc: 'Screen 4,500+ equities, check balance sheet scores & DCF fair values vs sector peers.'
              },
              {
                step: '02',
                title: 'Strategy Backtest',
                app: 'Market Data Vault',
                desc: 'Backtest ITM covered call rules, delta rolls & Sortino ratios over multi-year EOD Greeks.'
              },
              {
                step: '03',
                title: 'Live Execution & Bots',
                app: 'Opus + ITM Bot + Alerts',
                desc: 'Execute multi-leg trades on Tradier, stream 100ms chains & receive Sinch SMS alpha.'
              },
              {
                step: '04',
                title: 'Cash Flow Integration',
                app: 'CashMap Planner',
                desc: 'Map incoming options premiums directly against fixed living expenses for net surplus.'
              },
              {
                step: '05',
                title: 'Generational Wealth',
                app: 'PayItForward (Roth IRA)',
                desc: 'Compound 70/30 dividend snowballs (SPYI/QQQI) for children and grandchild with zero SSN leak.'
              }
            ].map((node) => (
              <div key={node.step} className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="text-cyan-400 font-bold">Step {node.step}</span>
                    <span className="text-slate-500 text-[10px]">Active Pipeline</span>
                  </div>
                  <div className="font-bold text-slate-200 text-xs sm:text-sm">{node.title}</div>
                  <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{node.app}</div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 10 Applications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredApps.map((app) => (
            <SuiteCard
              key={app.id}
              app={app}
              onOpenModal={onOpenModal}
              onOpenDemo={onOpenDemo}
            />
          ))}
        </div>

        {/* High-Impact Enterprise Callout Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
                Proven Engineering Velocity & Enterprise Scale
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-100">
              Looking for an AI Integration Architect or Principal Systems Engineer?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
              From architecting 20,000+ task migrations at SIG to engineering 10 full-stack financial and AI applications from scratch, I bring battle-tested rigor, high development velocity, and complete ownership.
            </p>
          </div>

          <a
            href="#contact"
            className="shrink-0 flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition-all hover:scale-105 cursor-pointer"
          >
            <span>Book Introductory Discussion</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
