import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Cpu, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Layers, 
  Activity, 
  Database,
  Lock,
  Sparkles,
  Heart,
  TrendingUp,
  Wallet
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ecosystem' | 'telemetry'>('ecosystem');

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-blue-600/15 to-emerald-500/10 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-[350px] h-[350px] bg-blue-500/10 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top availability & personal dogfooding pills */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/95 border border-cyan-500/40 text-cyan-300 text-xs font-medium shadow-md backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span className="w-2 h-2 rounded-full bg-cyan-400 -ml-4" />
            <span className="font-mono font-bold">25+ Yrs SIG Veteran • Principal AI & Systems Architect</span>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/80 border border-emerald-800 text-emerald-300 text-xs font-mono">
            <Heart className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/20" />
            <span>Daily Dogfooding: Personal Finances & Live Options Trading</span>
          </div>
        </div>

        {/* Main Headline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-[1.12]">
              High-Availability <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
                Quantitative Systems
              </span>{' '}
              <br />
              Meets Modern AI Engineering.
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal">
              <strong className="text-slate-100 font-semibold">25+ years</strong> architecting mission-critical trading platforms at <strong className="text-cyan-300 font-semibold">Susquehanna International Group (SIG, LLP)</strong>. Now channeling deep market-making discipline and AI-assisted development into a unified <strong className="text-slate-100 font-semibold">10-application financial software ecosystem</strong> under <span className="text-cyan-400 font-mono font-bold">MyTradingToolbox.com</span>.
            </p>

            {/* Personal Mission Callout */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed space-y-1.5 shadow-inner">
              <div className="font-mono text-cyan-400 font-bold uppercase tracking-wider text-[11px] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Engineered for Real-World Personal Capital</span>
              </div>
              <p className="text-slate-300 italic">
                "{PORTFOLIO_DATA.profile.personalStory}"
              </p>
            </div>

            {/* Core Capability Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {PORTFOLIO_DATA.profile.coreBadges.map((badge, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#suite"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 active:scale-95 group cursor-pointer"
              >
                <Layers className="w-5 h-5 text-slate-950" />
                <span>Explore 10-App Financial Suite</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#demos"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold bg-slate-900/90 text-slate-200 hover:text-cyan-300 hover:bg-slate-800 border border-slate-700/80 shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>5 Interactive Sandboxes</span>
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-slate-400 hover:text-slate-100 hover:bg-slate-900/50 transition-all text-xs sm:text-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span>Book 15-Min Intro</span>
              </a>
            </div>

            {/* Verified Tech Highlights */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
              <span className="text-slate-500 uppercase tracking-wider text-[11px] mr-1">Ecosystem Tech:</span>
              {['C# / ASP.NET Core (.NET 10)', 'PostgreSQL + pgvector', 'React 19 & TypeScript', 'Tradier WebSocket API', 'Quartz.NET Scheduler', 'Sinch SMS'].map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-md bg-slate-900/90 border border-slate-800 text-slate-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Right Hero: Executive Ecosystem & Telemetry Card */}
          <div className="lg:col-span-5">
            <div className="glass-panel rounded-2xl p-5 sm:p-6 border border-slate-800 shadow-2xl relative overflow-hidden group">
              
              {/* Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  </div>
                  <span className="text-xs font-mono text-slate-400 ml-2">MYTRADINGTOOLBOX // SUITE_v4.2</span>
                </div>

                <div className="flex items-center gap-1 bg-slate-900 rounded-lg p-0.5 border border-slate-800 text-xs font-mono">
                  <button
                    onClick={() => setActiveTab('ecosystem')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'ecosystem' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    10 Apps
                  </button>
                  <button
                    onClick={() => setActiveTab('telemetry')}
                    className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                      activeTab === 'telemetry' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    Telemetry
                  </button>
                </div>
              </div>

              {/* Tab Content: 10 Suite Apps Overview */}
              {activeTab === 'ecosystem' && (
                <div className="space-y-3 font-mono text-xs">
                  <div className="text-slate-400 text-xs flex items-center justify-between">
                    <span>10 Interconnected Applications:</span>
                    <span className="text-cyan-400 font-bold">100% Operational</span>
                  </div>

                  <div className="space-y-1.5 max-h-[310px] overflow-y-auto pr-1">
                    {[
                      { name: 'Opus Analysis Engine', role: 'Live Options Execution & Greeks', icon: TrendingUp, color: 'text-cyan-400 border-cyan-800/60' },
                      { name: 'PayItForward (Roth IRA)', role: 'Custodial Dividend Snowball (SPYI/QQQI)', icon: Heart, color: 'text-emerald-400 border-emerald-800/60' },
                      { name: 'CashMap Planner', role: 'Monthly Income & Expense Balancing', icon: Wallet, color: 'text-amber-400 border-amber-800/60' },
                      { name: 'DataServicesPlatform', role: 'Company Due Diligence & DCF Screener', icon: Database, color: 'text-blue-400 border-blue-800/60' },
                      { name: 'Market Data Vault & Backtest', role: '$0/mo EOD Harvester & Quant Backtest', icon: Activity, color: 'text-indigo-400 border-indigo-800/60' },
                      { name: 'ITM Covered Call Bot', role: 'Delta Drift Monitor & Paper Execution', icon: Cpu, color: 'text-teal-400 border-teal-800/60' },
                      { name: 'Opus Alerting Engine', role: 'Sinch SMS Alpha Dispatcher', icon: Sparkles, color: 'text-sky-400 border-sky-800/60' },
                      { name: 'AI Options Coach', role: 'Deterministic RAG & Knowledge Graph', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-800/60' },
                      { name: 'Trading Toolbox Hub', role: 'Central Portal & SSO Token Bridge', icon: Layers, color: 'text-purple-400 border-purple-800/60' },
                      { name: 'Executive Showcase', role: 'Architecture & Technical Portfolio', icon: CheckCircle2, color: 'text-cyan-400 border-cyan-800/60' }
                    ].map((app, idx) => {
                      const Icon = app.icon;
                      return (
                        <div key={idx} className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/80 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Icon className={`w-3.5 h-3.5 ${app.color.split(' ')[0]}`} />
                            <div>
                              <div className="font-semibold text-slate-200 text-xs">{app.name}</div>
                              <div className="text-slate-400 text-[10px]">{app.role}</div>
                            </div>
                          </div>
                          <span className="text-[9px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-300">
                            v1.0
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  <div className="text-center pt-1">
                    <a href="#suite" className="text-[11px] text-cyan-400 hover:underline flex items-center justify-center gap-1 font-semibold">
                      <span>View full 10-application deep dive</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              )}

              {/* Tab Content: Telemetry */}
              {activeTab === 'telemetry' && (
                <div className="space-y-4 font-mono text-xs">
                  
                  {/* Status Banner */}
                  <div className="p-3 rounded-xl bg-slate-900/90 border border-slate-800/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-emerald-400 animate-pulse" />
                      <div>
                        <div className="text-slate-200 font-semibold">SIG Core System Reliability</div>
                        <div className="text-slate-400 text-[11px]">25+ Yrs Enterprise Production</div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800 text-[11px] font-bold">
                      99.999% SLA
                    </span>
                  </div>

                  {/* System Metrics Grid */}
                  <div className="grid grid-cols-2 gap-2.5">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Database className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Vector Latency</span>
                      </div>
                      <div className="text-xl font-bold text-slate-100 mt-1">&lt; 85ms</div>
                      <div className="text-[10px] text-cyan-400">pgvector Cosine Search</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Grounding Parity</span>
                      </div>
                      <div className="text-xl font-bold text-emerald-400 mt-1">100.0%</div>
                      <div className="text-[10px] text-slate-400">Zero Hallucination Gate</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span>Tradier Stream</span>
                      </div>
                      <div className="text-xl font-bold text-slate-100 mt-1">100ms</div>
                      <div className="text-[10px] text-blue-400">WebSocket Option Chains</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <div className="text-slate-400 text-[11px] flex items-center gap-1">
                        <Lock className="w-3.5 h-3.5 text-amber-400" />
                        <span>Credential Vault</span>
                      </div>
                      <div className="text-xl font-bold text-slate-100 mt-1">AES-256</div>
                      <div className="text-[10px] text-slate-400">In-Memory Decryption</div>
                    </div>
                  </div>

                  {/* Terminal Log Stream preview */}
                  <div className="p-3 rounded-xl bg-black/70 border border-slate-800/90 text-slate-300 space-y-1 text-[11px]">
                    <div className="text-slate-500">// Real-time Suite Orchestration Trace</div>
                    <div className="text-emerald-400">✓ PayItForward: 70/30 DRIP model active • $7k cap ok</div>
                    <div className="text-cyan-300">✓ Opus: Tradier streaming socket connected (0 dropped)</div>
                    <div className="text-blue-300">✓ Backtest Harvester: Quartz cron scheduled 4:05 PM ET</div>
                    <div className="text-slate-400">✓ Coach RAG: 1,420 domain chunks mapped to knowledge graph</div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Bottom Big Metric Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {PORTFOLIO_DATA.heroMetrics.map((metric, idx) => (
            <div 
              key={idx} 
              className="glass-panel rounded-2xl p-5 border border-slate-800/90 glass-panel-hover"
            >
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent font-mono">
                {metric.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1 leading-relaxed">
                {metric.detail}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
