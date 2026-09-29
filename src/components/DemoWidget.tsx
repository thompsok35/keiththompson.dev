import React, { useState, useMemo } from 'react';
import { 
  Brain, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Database, 
  CheckCircle2, 
  Sliders, 
  Send, 
  Lock, 
  GitGraph,
  Heart,
  Activity,
  Gift
} from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface DemoWidgetProps {
  initialTab?: 'rag' | 'options' | 'bot' | 'dividend' | 'screener';
}

export const DemoWidget: React.FC<DemoWidgetProps> = ({ initialTab = 'rag' }) => {
  const [activeTab, setActiveTab] = useState<'rag' | 'options' | 'bot' | 'dividend' | 'screener'>(initialTab);

  // RAG Simulator State
  const [selectedQueryId, setSelectedQueryId] = useState<string>(PORTFOLIO_DATA.mockGroundedQueries[0].id);

  // Options Calculator State
  const [stockPrice, setStockPrice] = useState<number>(185.50);
  const [strikePrice, setStrikePrice] = useState<number>(180.00);
  const [callBid, setCallBid] = useState<number>(9.80);
  const [callAsk, setCallAsk] = useState<number>(10.20);
  const [putBid] = useState<number>(4.40);
  const [dte, setDte] = useState<number>(32);
  const [contractCount, setContractCount] = useState<number>(5);

  // Dividend Snowball Simulator State (PayItForward)
  const [childStartingAge, setChildStartingAge] = useState<number>(2);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(150);
  const [portfolioYield, setPortfolioYield] = useState<number>(11.8); // 70/30 Bucket Yield

  // Screener / Due Diligence Simulator State (DataServicesPlatform)
  const [screenerTicker, setScreenerTicker] = useState<string>('AAPL');
  const [screenerPrice, setScreenerPrice] = useState<number>(225.00);
  const [screenerPe, setScreenerPe] = useState<number>(28.5);
  const [screenerFcfGrowth, setScreenerFcfGrowth] = useState<number>(12.0);
  const [screenerDebtEquity, setScreenerDebtEquity] = useState<number>(1.2);

  // Bot Simulator State
  const [botLogs, setBotLogs] = useState<Array<{ timestamp: string; type: string; message: string }>>([
    { timestamp: '14:32:01.102', type: 'SYS', message: 'Market stream listener active on WebSocket (Tradier API)' },
    { timestamp: '14:32:01.850', type: 'SCAN', message: 'Scanning 48 option chains across SPY, QQQ, AAPL, NVDA, TSLA' },
    { timestamp: '14:32:02.320', type: 'VAULT', message: 'AES-256-GCM Credential Envelope verified (Sinch SMS Gateway)' },
  ]);
  const [lastDispatchedAlert, setLastDispatchedAlert] = useState<{
    ticker: string;
    strike: number;
    netDebit: number;
    roc: number;
    buffer: number;
    timestamp: string;
  } | null>({
    ticker: 'NVDA',
    strike: 120.00,
    netDebit: 112.40,
    roc: 38.4,
    buffer: 7.2,
    timestamp: 'Just now'
  });
  const [isBotTriggering, setIsBotTriggering] = useState<boolean>(false);

  // Active Grounded Query
  const activeRAGData = useMemo(() => {
    return PORTFOLIO_DATA.mockGroundedQueries.find(q => q.id === selectedQueryId) || PORTFOLIO_DATA.mockGroundedQueries[0];
  }, [selectedQueryId]);

  // Options Math Calculations
  const optionsMetrics = useMemo(() => {
    const callMid = (callBid + callAsk) / 2;
    const netDebit = stockPrice - callMid;
    const breakEven = netDebit;
    const downsideBufferPct = ((stockPrice - breakEven) / stockPrice) * 100;
    const maxProfitPerShare = strikePrice - netDebit;
    const totalMaxProfit = maxProfitPerShare * 100 * contractCount;
    const assignedReturnPct = (maxProfitPerShare / netDebit) * 100;
    const annualizedRocPct = dte > 0 ? (assignedReturnPct * (365 / dte)) : 0;
    const straddleImpliedMove = (callMid + putBid) * 0.85;
    const straddleImpliedPct = (straddleImpliedMove / stockPrice) * 100;
    const capitalDeployed = netDebit * 100 * contractCount;

    return {
      callMid: parseFloat(callMid.toFixed(2)),
      netDebit: parseFloat(netDebit.toFixed(2)),
      breakEven: parseFloat(breakEven.toFixed(2)),
      downsideBufferPct: parseFloat(downsideBufferPct.toFixed(2)),
      maxProfitPerShare: parseFloat(maxProfitPerShare.toFixed(2)),
      totalMaxProfit: parseFloat(totalMaxProfit.toFixed(2)),
      assignedReturnPct: parseFloat(assignedReturnPct.toFixed(2)),
      annualizedRocPct: parseFloat(annualizedRocPct.toFixed(2)),
      straddleImpliedMove: parseFloat(straddleImpliedMove.toFixed(2)),
      straddleImpliedPct: parseFloat(straddleImpliedPct.toFixed(2)),
      capitalDeployed: parseFloat(capitalDeployed.toFixed(2)),
      isHighProbability: downsideBufferPct >= 4.5 && annualizedRocPct >= 25.0
    };
  }, [stockPrice, strikePrice, callBid, callAsk, putBid, dte, contractCount]);

  // Dividend Snowball Calculations (PayItForward)
  const dividendSnowballMetrics = useMemo(() => {
    const yearsToCompound = Math.max(1, 18 - childStartingAge);
    let totalPortfolioValue = 0;
    let totalPrincipalInvested = 0;
    const monthlyRate = (portfolioYield / 100) / 12;

    for (let m = 1; m <= yearsToCompound * 12; m++) {
      totalPrincipalInvested += monthlyContribution;
      totalPortfolioValue = (totalPortfolioValue + monthlyContribution) * (1 + monthlyRate);
    }

    const projectedAnnualDividendAt18 = totalPortfolioValue * (portfolioYield / 100);
    const monthlyPassiveIncomeAt18 = projectedAnnualDividendAt18 / 12;
    const compoundMultiplier = totalPortfolioValue / Math.max(1, totalPrincipalInvested);

    return {
      yearsToCompound,
      totalPrincipalInvested: Math.round(totalPrincipalInvested),
      totalPortfolioValue: Math.round(totalPortfolioValue),
      projectedAnnualDividendAt18: Math.round(projectedAnnualDividendAt18),
      monthlyPassiveIncomeAt18: Math.round(monthlyPassiveIncomeAt18),
      compoundMultiplier: parseFloat(compoundMultiplier.toFixed(2))
    };
  }, [childStartingAge, monthlyContribution, portfolioYield]);

  // Screener / Due Diligence DCF Calculation (DataServicesPlatform)
  const screenerMetrics = useMemo(() => {
    const baseFcfPerShare = screenerPrice / Math.max(5, screenerPe);
    const terminalMultiple = 16.0;
    const growthFactor = 1 + (screenerFcfGrowth / 100);
    const dcfFairValue = (baseFcfPerShare * growthFactor * terminalMultiple);
    const undervaluationPct = ((dcfFairValue - screenerPrice) / screenerPrice) * 100;
    
    // Balance sheet health score out of 10
    const solvencyScore = Math.min(10, Math.max(1, 10 - (screenerDebtEquity * 2.5)));
    const compositeHealth = Math.round((solvencyScore * 0.4 + (undervaluationPct > 0 ? 8.5 : 5.0) * 0.6) * 10) / 10;

    return {
      dcfFairValue: parseFloat(dcfFairValue.toFixed(2)),
      undervaluationPct: parseFloat(undervaluationPct.toFixed(1)),
      compositeHealth,
      isAttractive: undervaluationPct > 5.0 && compositeHealth >= 6.5
    };
  }, [screenerPrice, screenerPe, screenerFcfGrowth, screenerDebtEquity]);

  // Bot Trigger simulation
  const handleTriggerBotSignal = (ticker: string) => {
    setIsBotTriggering(true);

    const time = new Date().toLocaleTimeString();
    const newLogs = [
      ...botLogs,
      { timestamp: time, type: 'TICK', message: `High alpha signal detected on ${ticker} ITM Covered Call` },
      { timestamp: time, type: 'GUARD', message: `Latency check: 142ms < 3000ms threshold (PASSED)` },
      { timestamp: time, type: 'IDEM', message: `SHA-256 Lock: [${ticker}-ITM-0x${Math.floor(Math.random()*100000).toString(16)}] verified unique` },
      { timestamp: time, type: 'SINCH', message: `Sinch SMS Gateway: Dispatched priority carrier envelope to subscribers` }
    ];

    setBotLogs(newLogs.slice(-6));
    setLastDispatchedAlert({
      ticker,
      strike: ticker === 'NVDA' ? 120 : ticker === 'AAPL' ? 220 : 540,
      netDebit: ticker === 'NVDA' ? 112.40 : ticker === 'AAPL' ? 208.50 : 518.00,
      roc: ticker === 'NVDA' ? 38.4 : ticker === 'AAPL' ? 29.8 : 34.1,
      buffer: ticker === 'NVDA' ? 7.2 : ticker === 'AAPL' ? 5.8 : 6.4,
      timestamp: time
    });

    setTimeout(() => {
      setIsBotTriggering(false);
    }, 400);
  };

  return (
    <section id="demos" className="py-24 relative bg-slate-950/90 border-t border-slate-900">
      
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[400px] bg-cyan-500/10 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>Interactive Multi-Application Sandboxes</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Live Ecosystem Execution Sandboxes
          </h2>

          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Test the real mathematical engines behind the 10 applications: options Greeks, 70/30 custodial dividend compounding, fundamental DCF screening, deterministic RAG, and SMS bot alerts.
          </p>
        </div>

        {/* Master Sandbox Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setActiveTab('rag')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'rag'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Brain className="w-4 h-4" />
            <span>1. Vector RAG AI Coach</span>
          </button>

          <button
            onClick={() => setActiveTab('options')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'options'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>2. Opus Options Risk & ROC</span>
          </button>

          <button
            onClick={() => setActiveTab('dividend')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'dividend'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span>3. PayItForward Roth IRA Snowball</span>
          </button>

          <button
            onClick={() => setActiveTab('screener')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'screener'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Activity className="w-4 h-4" />
            <span>4. Due Diligence DCF Screener</span>
          </button>

          <button
            onClick={() => setActiveTab('bot')}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'bot'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25 scale-105'
                : 'bg-slate-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>5. Sinch SMS Alert Dispatcher</span>
          </button>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* TAB 1: RAG GROUNDING SIMULATOR */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'rag' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Brain className="w-5 h-5 text-cyan-400" />
                  <span>Deterministic Vector Retrieval & Knowledge Graph Traversal</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Watch pgvector cosine matching, entity extraction, and strict citation enforcement in action. (Powered by <span className="text-cyan-300 font-mono">mytradingtoolbox-coach</span>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Grounding Parity: 100% Verified</span>
                </span>
              </div>
            </div>

            {/* Query Selector */}
            <div className="space-y-2">
              <label className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Select Strategy Query:
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {PORTFOLIO_DATA.mockGroundedQueries.map((q) => (
                  <button
                    key={q.id}
                    onClick={() => setSelectedQueryId(q.id)}
                    className={`text-left p-3.5 rounded-xl border text-xs transition-all cursor-pointer ${
                      selectedQueryId === q.id
                        ? 'bg-slate-900 border-cyan-500/80 text-slate-100 shadow-md shadow-cyan-500/10'
                        : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-300'
                    }`}
                  >
                    <div className="text-[10px] font-mono text-cyan-400 font-semibold mb-1">
                      {q.category}
                    </div>
                    <div className="font-medium line-clamp-2">
                      {q.question}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Visualization Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                      <Database className="w-3.5 h-3.5" />
                      <span>pgvector Retrieved Chunks (Cosine Distance)</span>
                    </span>
                    <span className="text-slate-500">Threshold &ge; 0.82</span>
                  </div>

                  <div className="space-y-2.5">
                    {activeRAGData.retrievedChunks.map((chunk, cIdx) => (
                      <div key={cIdx} className="p-3 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
                        <div className="flex items-center justify-between font-mono text-[11px] mb-1.5">
                          <span className="text-slate-300 font-semibold">{chunk.source}</span>
                          <span className="px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/60">
                            Sim: {(chunk.similarity * 100).toFixed(1)}%
                          </span>
                        </div>
                        <div className="text-[11px] font-mono text-slate-400 mb-1">
                          {chunk.section}
                        </div>
                        <p className="text-slate-300 text-[11px] leading-relaxed italic bg-black/40 p-2 rounded border border-slate-800/80">
                          "{chunk.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 font-bold mb-2.5">
                    <GitGraph className="w-3.5 h-3.5" />
                    <span>Knowledge Graph Linked Entities</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {activeRAGData.knowledgeGraphNodes.map((node, nIdx) => (
                      <span key={nIdx} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-indigo-950/60 text-indigo-300 border border-indigo-800/50">
                        {node}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6 space-y-4">
                <div className="p-5 rounded-xl bg-slate-950/90 border border-cyan-500/30 h-full flex flex-col justify-between shadow-lg shadow-cyan-500/5">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                      <div className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider">
                          Zero-Hallucination Synthesized Output
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                        Strict AST Verification
                      </span>
                    </div>

                    <div className="prose prose-invert prose-xs text-slate-200 text-xs sm:text-sm leading-relaxed whitespace-pre-line font-sans">
                      {activeRAGData.groundedResponse}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <div className="text-[11px] font-mono text-slate-400 mb-1.5 font-bold uppercase tracking-wider">
                      Strict Audit Citations:
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {activeRAGData.citations.map((cite, cIdx) => (
                        <div key={cIdx} className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 border border-emerald-800/60 text-emerald-300 text-xs font-mono">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                          <span>{cite}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 2: OPUS OPTIONS RISK & ROC ENGINE */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'options' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-cyan-400" />
                  <span>Opus Options Risk & Annualized Return on Capital (ROC) Simulator</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Real-time multi-leg options math calculating breakevens, downside buffers, and annualized ROC. (Powered by <span className="text-cyan-300 font-mono">entropic-solstice / Opus</span>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-cyan-950 text-cyan-300 border border-cyan-800 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" />
                  <span>Tradier Pricing Logic</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold flex items-center gap-2 mb-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Interactive Option Leg Inputs</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Stock Price ($):</span>
                    <span className="text-cyan-300 font-bold">${stockPrice.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="0.5"
                    value={stockPrice}
                    onChange={(e) => setStockPrice(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Short Call Strike ($):</span>
                    <span className="text-cyan-300 font-bold">${strikePrice.toFixed(2)}</span>
                  </div>
                  <input
                    type="range"
                    min={stockPrice * 0.7}
                    max={stockPrice * 1.05}
                    step="0.5"
                    value={strikePrice}
                    onChange={(e) => setStrikePrice(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Call Bid ($)</label>
                    <input
                      type="number"
                      step="0.10"
                      value={callBid}
                      onChange={(e) => setCallBid(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Call Ask ($)</label>
                    <input
                      type="number"
                      step="0.10"
                      value={callAsk}
                      onChange={(e) => setCallAsk(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">DTE (Days to Exp)</label>
                    <input
                      type="number"
                      min="1"
                      max="180"
                      value={dte}
                      onChange={(e) => setDte(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Contracts (#)</label>
                    <input
                      type="number"
                      min="1"
                      max="50"
                      value={contractCount}
                      onChange={(e) => setContractCount(parseInt(e.target.value) || 1)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  optionsMetrics.isHighProbability
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                    : 'bg-amber-950/30 border-amber-800/60 text-amber-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 shrink-0" />
                    <div>
                      <div className="font-bold text-xs font-mono uppercase tracking-wider">
                        Strategy Risk Assessment
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        {optionsMetrics.isHighProbability 
                          ? 'Optimal Risk Profile: High Downside Protection & Yield' 
                          : 'Sub-Optimal: Buffer or Yield below target thresholds'}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-black/40 border border-current">
                    {optionsMetrics.isHighProbability ? 'STAGED FOR ORDER' : 'REVIEW SLIPPAGE'}
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Break-Even Point</div>
                    <div className="text-xl font-bold text-slate-100 mt-1">${optionsMetrics.breakEven}</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">Net Debit Basis</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Downside Buffer</div>
                    <div className="text-xl font-bold text-emerald-400 mt-1">{optionsMetrics.downsideBufferPct}%</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Safety margin vs spot</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-cyan-500/40 bg-cyan-950/20">
                    <div className="text-[11px] text-cyan-300 font-bold">Annualized ROC</div>
                    <div className="text-xl font-bold text-cyan-300 mt-1">{optionsMetrics.annualizedRocPct}%</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">365-day basis ({dte} DTE)</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Assigned Max Profit</div>
                    <div className="text-xl font-bold text-slate-100 mt-1">${optionsMetrics.totalMaxProfit}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">+{optionsMetrics.assignedReturnPct}% on capital</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Capital Deployed</div>
                    <div className="text-xl font-bold text-slate-100 mt-1">${optionsMetrics.capitalDeployed.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">{contractCount * 100} Shares Total</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Straddle Implied Move</div>
                    <div className="text-xl font-bold text-blue-400 mt-1">&plusmn;${optionsMetrics.straddleImpliedMove}</div>
                    <div className="text-[10px] text-blue-300 mt-0.5">&plusmn;{optionsMetrics.straddleImpliedPct}% (1-Sigma)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 3: PAYITFORWARD DIVIDEND SNOWBALL SIMULATOR */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'dividend' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Heart className="w-5 h-5 text-emerald-400" />
                  <span>PayItForward: Custodial Roth IRA & 70/30 Dividend Snowball Engine</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Simulate compounding lifetime dividend cash flow for children and grandchildren using the 70% Core / 30% Satellite model. (Powered by <span className="text-cyan-300 font-mono">mytradingtoolbox-payitforward</span>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-300 border border-emerald-800 flex items-center gap-1.5">
                  <Gift className="w-3.5 h-3.5" />
                  <span>100% Tax-Free DRIP</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2 mb-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Custodial Compounding Controls</span>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Child's Current Age:</span>
                    <span className="text-emerald-300 font-bold">{childStartingAge} Years Old ({18 - childStartingAge} yrs to age 18)</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="16"
                    step="1"
                    value={childStartingAge}
                    onChange={(e) => setChildStartingAge(parseInt(e.target.value) || 0)}
                    className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Monthly Family Gift ($/mo):</span>
                    <span className="text-emerald-300 font-bold">${monthlyContribution}/mo (${(monthlyContribution * 12).toLocaleString()}/yr)</span>
                  </div>
                  <input
                    type="range"
                    min="25"
                    max="583"
                    step="25"
                    value={monthlyContribution}
                    onChange={(e) => setMonthlyContribution(parseInt(e.target.value) || 25)}
                    className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-500 font-mono mt-0.5">
                    IRS Annual Custodial Roth IRA Limit: $7,000/yr ($583/mo)
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">70/30 Bucket Model Yield:</span>
                    <span className="text-cyan-300 font-bold">{portfolioYield}% Annual DRIP</span>
                  </div>
                  <input
                    type="range"
                    min="6.0"
                    max="14.0"
                    step="0.2"
                    value={portfolioYield}
                    onChange={(e) => setPortfolioYield(parseFloat(e.target.value))}
                    className="w-full accent-cyan-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                  <div className="text-[10px] text-slate-400 font-mono mt-0.5">
                    Core: SPYI (30%), QQQI (25%), IWMI (15%) | Satellite: BNDI (12%), INHI (10%), GLDI (8%)
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/50 via-teal-950/40 to-slate-900 border border-emerald-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-emerald-400 shrink-0" />
                    <div>
                      <div className="font-bold text-xs font-mono uppercase tracking-wider text-emerald-300">
                        The Compounding Dividend Snowball at Age 18
                      </div>
                      <div className="text-base font-bold text-slate-100 mt-0.5">
                        ${dividendSnowballMetrics.totalPortfolioValue.toLocaleString()} Total Wealth Generated
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-black/50 border border-emerald-500 text-emerald-300">
                    {dividendSnowballMetrics.compoundMultiplier}x Multiplier
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Family Cash Gifted</div>
                    <div className="text-xl font-bold text-slate-100 mt-1">${dividendSnowballMetrics.totalPrincipalInvested.toLocaleString()}</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Over {dividendSnowballMetrics.yearsToCompound} years</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-emerald-500/40 bg-emerald-950/20">
                    <div className="text-[11px] text-emerald-300 font-bold">Lifetime Value @ 18</div>
                    <div className="text-xl font-bold text-emerald-300 mt-1">${dividendSnowballMetrics.totalPortfolioValue.toLocaleString()}</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">Tax-Free in Roth IRA</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Annual Dividend @ 18</div>
                    <div className="text-xl font-bold text-cyan-300 mt-1">${dividendSnowballMetrics.projectedAnnualDividendAt18.toLocaleString()}</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">${dividendSnowballMetrics.monthlyPassiveIncomeAt18.toLocaleString()}/mo passive</div>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] font-mono text-slate-400 space-y-1">
                  <div className="text-slate-300 font-bold">// The "Toy vs Compounding Asset" Reality:</div>
                  <div>• $100 plastic toy &rarr; broken/depreciated in 6 months ($0 residual value).</div>
                  <div>• $100 gifted into SPYI/QQQI at age 2 &rarr; <strong className="text-emerald-400">${Math.round(100 * Math.pow(1 + portfolioYield/100, 16)).toLocaleString()}</strong> cash-flow generating asset at age 18.</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 4: DATASERVICES DUE DILIGENCE SCREENER */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'screener' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-blue-400" />
                  <span>DataServicesPlatform: Fundamental Due Diligence & DCF Valuation Engine</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Screen stock balance sheet health scores vs sector cohorts and calculate automated Discounted Cash Flow (DCF) fair values before placing positions. (Powered by <span className="text-cyan-300 font-mono">DataServicesPlatform</span>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-blue-950 text-blue-300 border border-blue-800 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5" />
                  <span>4,500+ Equities Filter</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-4 p-5 rounded-xl bg-slate-950/80 border border-slate-800">
                <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2 mb-2">
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Fundamental Due Diligence Inputs</span>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Stock Ticker</label>
                    <input
                      type="text"
                      value={screenerTicker}
                      onChange={(e) => setScreenerTicker(e.target.value.toUpperCase())}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300 font-bold"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-mono text-slate-400 block mb-1">Market Spot Price ($)</label>
                    <input
                      type="number"
                      step="1.0"
                      value={screenerPrice}
                      onChange={(e) => setScreenerPrice(parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-xs font-mono text-slate-200"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">P/E Ratio (vs Sector Median 24x):</span>
                    <span className="text-slate-200 font-bold">{screenerPe}x</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="65"
                    step="0.5"
                    value={screenerPe}
                    onChange={(e) => setScreenerPe(parseFloat(e.target.value))}
                    className="w-full accent-blue-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">5-Yr Free Cash Flow Growth:</span>
                    <span className="text-emerald-300 font-bold">+{screenerFcfGrowth}%/yr</span>
                  </div>
                  <input
                    type="range"
                    min="-5"
                    max="35"
                    step="1"
                    value={screenerFcfGrowth}
                    onChange={(e) => setScreenerFcfGrowth(parseFloat(e.target.value))}
                    className="w-full accent-emerald-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-mono mb-1">
                    <span className="text-slate-400">Debt-to-Equity Ratio:</span>
                    <span className="text-slate-200 font-bold">{screenerDebtEquity}x</span>
                  </div>
                  <input
                    type="range"
                    min="0.1"
                    max="4.0"
                    step="0.1"
                    value={screenerDebtEquity}
                    onChange={(e) => setScreenerDebtEquity(parseFloat(e.target.value))}
                    className="w-full accent-blue-400 bg-slate-800 h-1.5 rounded-lg cursor-pointer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className={`p-4 rounded-xl border flex items-center justify-between ${
                  screenerMetrics.isAttractive
                    ? 'bg-emerald-950/40 border-emerald-800/80 text-emerald-300'
                    : 'bg-slate-900 border-slate-800 text-slate-300'
                }`}>
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="w-5 h-5 shrink-0 text-cyan-400" />
                    <div>
                      <div className="font-bold text-xs font-mono uppercase tracking-wider">
                        Due Diligence Solvency & Valuation Score
                      </div>
                      <div className="text-sm font-semibold text-slate-100">
                        {screenerMetrics.isAttractive 
                          ? `${screenerTicker}: High Solvency & Undervalued vs DCF Benchmark` 
                          : `${screenerTicker}: Premium Valuation vs Growth Profile`}
                      </div>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-black/40 border border-current">
                    Score: {screenerMetrics.compositeHealth}/10
                  </span>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono">
                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">DCF Fair Value</div>
                    <div className="text-xl font-bold text-cyan-300 mt-1">${screenerMetrics.dcfFairValue}</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">Intrinsic Model</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Margin of Safety</div>
                    <div className={`text-xl font-bold mt-1 ${screenerMetrics.undervaluationPct > 0 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {screenerMetrics.undervaluationPct > 0 ? `+${screenerMetrics.undervaluationPct}%` : `${screenerMetrics.undervaluationPct}%`}
                    </div>
                    <div className="text-[10px] text-slate-400 mt-0.5">vs Spot Price (${screenerPrice})</div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
                    <div className="text-[11px] text-slate-400">Shared Watchlist</div>
                    <div className="text-xl font-bold text-slate-100 mt-1">Tier-1</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Synced across suite</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* TAB 5: EVENT BOT & SMS GATEWAY DISPATCHER */}
        {/* ------------------------------------------------------------- */}
        {activeTab === 'bot' && (
          <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-cyan-400" />
                  <span>High-Frequency Alert & Sinch SMS Carrier Dispatcher</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Test sub-3000ms latency guards, AES-256 decrypted carrier envelopes, and mobile alpha delivery. (Powered by <span className="text-cyan-300 font-mono">mytradingtoolbox-alerts & itmCCbot</span>).
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-emerald-950 text-emerald-400 border border-emerald-800 flex items-center gap-1.5">
                  <Lock className="w-3.5 h-3.5" />
                  <span>AES-256-GCM Vault: SECURE</span>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7 space-y-4">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                    Inject Simulated Market Tick Opportunity:
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {['NVDA', 'AAPL', 'SPY', 'QQQ', 'MSFT'].map((ticker) => (
                      <button
                        key={ticker}
                        onClick={() => handleTriggerBotSignal(ticker)}
                        disabled={isBotTriggering}
                        className="px-4 py-2 rounded-xl text-xs font-mono font-bold bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-500/60 text-slate-200 transition-all flex items-center gap-2 cursor-pointer"
                      >
                        <Zap className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Fire {ticker} Signal</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/90 border border-slate-800 font-mono text-xs space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-500 border-b border-slate-900 pb-2">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      <span>STREAMING EVENT DAEMON // DAEMON_PID_4812</span>
                    </span>
                    <span>Tradier WS + Sinch</span>
                  </div>

                  <div className="space-y-1.5 max-h-48 overflow-y-auto pt-1">
                    {botLogs.map((log, lIdx) => (
                      <div key={log.timestamp + lIdx} className="flex items-start gap-2 text-[11px]">
                        <span className="text-slate-500 shrink-0">[{log.timestamp}]</span>
                        <span className={`px-1 rounded text-[10px] font-bold ${
                          log.type === 'TICK' ? 'bg-cyan-950 text-cyan-300' :
                          log.type === 'GUARD' ? 'bg-emerald-950 text-emerald-300' :
                          log.type === 'SINCH' ? 'bg-blue-950 text-blue-300' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {log.type}
                        </span>
                        <span className="text-slate-300 leading-tight">{log.message}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 text-[11px] font-mono text-slate-400 grid grid-cols-2 gap-2">
                  <div>• Latency SLA: <strong className="text-emerald-400">&lt; 240ms</strong></div>
                  <div>• Idempotency: <strong className="text-cyan-400">SHA-256 Lock</strong></div>
                  <div>• Uptime: <strong className="text-emerald-400">99.98%</strong></div>
                  <div>• Carrier Routing: <strong className="text-cyan-400">Sinch REST API</strong></div>
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="w-[300px] sm:w-[320px] rounded-[36px] bg-slate-900 border-4 border-slate-700 p-3 shadow-2xl relative overflow-hidden">
                  <div className="w-24 h-4 bg-slate-800 rounded-full mx-auto mb-3" />

                  <div className="rounded-[24px] bg-slate-950 border border-slate-800 p-4 min-h-[380px] flex flex-col justify-between font-sans">
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 border-b border-slate-900 pb-2 mb-3">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-400" />
                          <span className="font-bold text-slate-200">Sinch SMS Gateway</span>
                        </div>
                        <span>9:41 AM</span>
                      </div>

                      {lastDispatchedAlert && (
                        <div className="p-3.5 rounded-2xl rounded-tl-sm bg-gradient-to-br from-cyan-950/90 to-blue-950/90 border border-cyan-700/50 text-slate-100 text-xs shadow-lg space-y-1 font-mono">
                          <div className="text-cyan-300 font-bold flex items-center gap-1">
                            <span>⚡ [ALPHA ALERT] {lastDispatchedAlert.ticker} ITM COVERED CALL</span>
                          </div>
                          <div className="text-slate-300 text-[11px]">
                            Strike: ${lastDispatchedAlert.strike.toFixed(2)} | Net Debit: ${lastDispatchedAlert.netDebit.toFixed(2)}
                          </div>
                          <div className="text-emerald-300 text-[11px] font-bold">
                            Ann. ROC: {lastDispatchedAlert.roc}% | Buffer: {lastDispatchedAlert.buffer}%
                          </div>
                          <div className="text-cyan-400 text-[10px] pt-1">
                            Action: BTO 100 Shares + STO Call Leg (Instant Roll Ready)
                          </div>
                          <div className="text-right text-[9px] text-slate-500 pt-1">
                            Delivered via Sinch • {lastDispatchedAlert.timestamp}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="pt-3 border-t border-slate-900 flex items-center gap-2">
                      <div className="flex-1 bg-slate-900 rounded-full px-3 py-1.5 text-[11px] text-slate-500">
                        Reply 'ROLL' or 'STOP'...
                      </div>
                      <div className="w-7 h-7 rounded-full bg-cyan-500 flex items-center justify-center text-slate-950 font-bold">
                        <Send className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
