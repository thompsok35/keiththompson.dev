import React, { useState } from 'react';
import { 
  Calendar, 
  Mail, 
  MapPin, 
  Send, 
  CheckCircle2, 
  ExternalLink, 
  Clock, 
  ArrowRight,
  Copy,
  Check
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

// Custom Crisp Brand Icons
const GitHubIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const ContactScheduler: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [schedulerMode, setSchedulerMode] = useState<'embed' | 'form'>('embed');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'AI / RAG Architecture',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-t from-cyan-500/10 via-blue-600/10 to-transparent blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Zero-Friction Direct Scheduling</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Schedule an Architectural Intro
          </h2>

          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Ready to explore enterprise RAG integration, quantitative trading automation, or fractional principal architecture leadership? Book a 30-minute introductory strategy session below.
          </p>
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact & Social Links */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Direct Cards */}
            <div className="glass-panel rounded-2xl p-6 border border-slate-800 space-y-4">
              <h3 className="font-bold text-slate-100 text-base flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Direct Contact Channels</span>
              </h3>

              {/* Email Card with Copy button */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between">
                <div className="overflow-hidden mr-2">
                  <div className="text-[11px] font-mono text-slate-400">Direct Email</div>
                  <a 
                    href={`mailto:${PORTFOLIO_DATA.profile.email}`} 
                    className="text-xs sm:text-sm font-semibold text-cyan-300 hover:underline truncate block"
                  >
                    {PORTFOLIO_DATA.profile.email}
                  </a>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-700/80 transition-colors shrink-0 cursor-pointer"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn Card */}
              <a
                href={PORTFOLIO_DATA.profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <LinkedInIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">LinkedIn Profile</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      keith-thompson-36b758
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* GitHub Card */}
              <a
                href={PORTFOLIO_DATA.profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 hover:border-cyan-500/40 flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300">
                    <GitHubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-400">GitHub Open Source</div>
                    <div className="text-xs sm:text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                      github.com/thompsok35
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
              </a>

              {/* Location Card */}
              <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-200">
                    {PORTFOLIO_DATA.profile.location}
                  </div>
                </div>
              </div>

            </div>

            {/* Engagement Availability Note */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 font-semibold">
                <Clock className="w-4 h-4" />
                <span>Consulting & Advisory Scope</span>
              </div>
              <p className="leading-relaxed">
                Available for high-impact technical advisory, AI RAG audits, zero-data-leakage system blueprints, and full-stack quant platform consulting.
              </p>
            </div>

          </div>

          {/* Right Column: Embedded Cal.com / Direct Scheduler & Form */}
          <div className="lg:col-span-8">
            <div className="glass-panel rounded-2xl border border-slate-800 shadow-2xl overflow-hidden">
              
              {/* Top Navigation */}
              <div className="p-4 bg-slate-950/90 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSchedulerMode('embed')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      schedulerMode === 'embed'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Cal.com Live Calendar</span>
                  </button>

                  <button
                    onClick={() => setSchedulerMode('form')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                      schedulerMode === 'form'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Send className="w-4 h-4" />
                    <span>Direct Message Form</span>
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="hidden sm:inline">30-Min Strategy Slot Ready</span>
                </div>
              </div>

              {/* Mode 1: Cal.com Live Interactive Container & Iframe */}
              {schedulerMode === 'embed' && (
                <div className="p-4 sm:p-6 space-y-4">
                  
                  {/* Top action bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        Live Booking Engine
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-100 mt-0.5">
                        Keith Thompson | 30-Minute Architecture Consultation
                      </h4>
                      <p className="text-xs text-slate-400 mt-0.5 flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-cyan-400" />
                        <span>30 mins • Automatic Google Meet link generated upon booking</span>
                      </p>
                    </div>

                    <a
                      href={PORTFOLIO_DATA.profile.calendarUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/20 transition-all shrink-0 cursor-pointer"
                    >
                      <span>Open Full Page in Cal.com</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Cal.com Embedded Iframe */}
                  <div className="w-full rounded-xl overflow-hidden border border-slate-800 bg-slate-950/90 shadow-inner">
                    <iframe
                      src={`${PORTFOLIO_DATA.profile.calendarUrl}?embed=true`}
                      className="w-full h-[620px] border-0"
                      title="Schedule a 30-Min Intro with Keith Thompson"
                      loading="lazy"
                    />
                  </div>

                  {/* Fallback & Custom Inquiries */}
                  <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                    <span className="text-slate-400">
                      Need an immediate off-hours slot or custom NDA discussion?
                    </span>
                    <a 
                      href={`mailto:${PORTFOLIO_DATA.profile.email}?subject=Executive%20Intro%20Meeting%20Request`}
                      className="text-cyan-400 hover:underline font-semibold flex items-center gap-1"
                    >
                      <span>Email Direct Priority Request</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                </div>
              )}

              {/* Mode 2: Direct Message Form */}
              {schedulerMode === 'form' && (
                <div className="p-6 sm:p-8">
                  {formSubmitted ? (
                    <div className="p-8 rounded-xl bg-slate-950 border border-emerald-800/60 text-center space-y-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-100">
                        Inquiry Received
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                        Thank you for reaching out. Keith will review your architectural inquiry and respond directly to <span className="text-cyan-300 font-mono">{formData.email}</span> within 24 hours.
                      </p>
                      <button
                        onClick={() => {
                          setFormSubmitted(false);
                          setFormData({ name: '', email: '', topic: 'AI / RAG Architecture', message: '' });
                        }}
                        className="px-4 py-2 rounded-lg text-xs font-mono text-cyan-400 hover:underline cursor-pointer"
                      >
                        Send another note
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-mono text-slate-300 block mb-1">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Sarah Jenkins"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-hidden focus:border-cyan-500"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-mono text-slate-300 block mb-1">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="e.g. s.jenkins@enterprise.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-hidden focus:border-cyan-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Inquiry Focus</label>
                        <select
                          value={formData.topic}
                          onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-hidden focus:border-cyan-500"
                        >
                          <option value="AI / RAG Architecture">Enterprise RAG & Zero-Hallucination Grounding</option>
                          <option value="FinTech & Quant Automation">Quant Options Trading & Tradier Automation</option>
                          <option value="High-Throughput Concurrency">High-Availability Systems & Concurrency Architecture</option>
                          <option value="Fractional Leadership">Principal / Fractional Advisory Role</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-xs font-mono text-slate-300 block mb-1">Message / Scope Description</label>
                        <textarea
                          rows={4}
                          required
                          placeholder="Briefly describe your project, technical bottlenecks, or team requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-100 focus:outline-hidden focus:border-cyan-500"
                        />
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <div className="text-[11px] font-mono text-slate-500">
                          Direct encrypted dispatch • Zero spam
                        </div>
                        <button
                          type="submit"
                          className="flex items-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-md transition-all hover:scale-105 cursor-pointer"
                        >
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
