import React, { useState } from 'react';
import { 
  X, 
  Layers, 
  CheckCircle2, 
  Code2, 
  Copy, 
  Check, 
  ShieldCheck, 
  ArrowRight,
  Heart
} from 'lucide-react';
import type { SuiteApplication } from '../data/portfolioData';

interface ArchitectureModalProps {
  app: SuiteApplication | null;
  onClose: () => void;
  onOpenDemo: (demoType: 'rag' | 'options' | 'bot' | 'dividend' | 'screener') => void;
}

export const ArchitectureModal: React.FC<ArchitectureModalProps> = ({
  app,
  onClose,
  onOpenDemo
}) => {
  const [activeTab, setActiveTab] = useState<'blueprint' | 'code' | 'mission'>('blueprint');
  const [copied, setCopied] = useState(false);

  if (!app) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(app.codeSnippet.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      
      {/* Backdrop click */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Dialog Container */}
      <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden z-10 my-8">
        
        {/* Header Bar */}
        <div className="p-5 sm:p-6 border-b border-slate-800 flex items-start justify-between bg-slate-950/70">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                {app.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                repo: {app.repoName}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono text-emerald-400 bg-emerald-950 border border-emerald-800">
                {app.domain}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-100 mt-2">
              {app.name}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              {app.tagline}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="px-6 py-2.5 bg-slate-950/90 border-b border-slate-800 flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('blueprint')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'blueprint'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Architecture Specs</span>
            </button>

            <button
              onClick={() => setActiveTab('code')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'code'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Code2 className="w-4 h-4" />
              <span>Sanitized Code Implementation</span>
            </button>

            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                activeTab === 'mission'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              <Heart className="w-4 h-4" />
              <span>Personal Dogfooding Story</span>
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenDemo(app.demoType);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-emerald-950 text-emerald-300 border border-emerald-700/60 hover:bg-emerald-900 transition-colors cursor-pointer"
          >
            <span>Launch Live Sandbox</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[70vh] overflow-y-auto space-y-6">
          
          {/* TAB 1: Architecture Blueprint */}
          {activeTab === 'blueprint' && (
            <div className="space-y-6">
              
              {/* Architecture Summary */}
              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 font-bold">
                  System Architecture Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {app.architectureSummary}
                </p>
              </div>

              {/* Technical Highlights Checklist */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                  Engineered Invariants & Features
                </h4>
                <div className="space-y-2.5">
                  {app.technicalHighlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-950/60 border border-slate-800/60 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Metrics */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 font-bold">
                  Verified Production Metrics
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {app.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/80 border border-slate-800">
                      <div className="text-[11px] text-slate-400">{m.label}</div>
                      <div className="text-base font-bold text-cyan-300 font-mono mt-1">{m.value}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: Sanitized Code Implementation */}
          {activeTab === 'code' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-slate-400">{app.codeSnippet.title}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-800">
                    Sanitized Production Logic
                  </span>
                </div>

                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1.5 px-3 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Code'}</span>
                </button>
              </div>

              <div className="relative rounded-xl overflow-hidden border border-slate-800 bg-black/90 font-mono text-xs">
                <pre className="p-4 overflow-x-auto text-slate-200 leading-relaxed">
                  <code>{app.codeSnippet.code}</code>
                </pre>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>Production IP Sanitized: Standard interfaces and clean data models used for review.</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: Personal Dogfooding Story */}
          {activeTab === 'mission' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-cyan-500/30 space-y-3">
                <div className="flex items-center gap-2 text-cyan-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  <span>Personal Dogfooding Reality & Practical Utility</span>
                </div>
                <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                  "{app.personalMission}"
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="font-bold text-slate-100">Why Dogfooding Matters to Engineering Quality:</div>
                <p className="leading-relaxed text-slate-400">
                  When you run your own family finances, options income, and children's Roth IRAs on your software, production bugs and architectural sloppiness are intolerable. Every data contract, failover guard, and calculation is built to institutional standards.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            {app.techStack.map((tech) => (
              <span key={tech} className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-900 border border-slate-800 text-slate-300">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-medium text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenDemo(app.demoType);
              }}
              className="px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md cursor-pointer"
            >
              Open Interactive Simulator
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
