export interface SuiteApplication {
  id: string;
  name: string;
  repoName: string;
  domain: string;
  category: 'Personal Wealth & Family' | 'Live Trading & Bots' | 'Research & Backtesting' | 'AI & Ecosystem';
  tagline: string;
  personalMission: string; // How Keith uses it personally
  technicalHighlights: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  architectureSummary: string;
  codeSnippet: {
    title: string;
    language: string;
    code: string;
  };
  demoType: 'rag' | 'options' | 'bot' | 'dividend' | 'screener';
  badge: string;
}

export interface EnterpriseMilestone {
  era: string;
  role: string;
  organization: string;
  title: string;
  summary: string;
  scaleMetric: string;
  details: string[];
  technologies: string[];
  impactBadges: string[];
}

export interface TechCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: string; experience: string }[];
}

export interface GroundedRAGQuery {
  id: string;
  question: string;
  category: string;
  retrievedChunks: {
    source: string;
    section: string;
    similarity: number;
    text: string;
  }[];
  knowledgeGraphNodes: string[];
  groundedResponse: string;
  citations: string[];
  verificationScore: number;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Keith Thompson',
    title: 'Principal Systems & AI Integration Architect',
    subtitle: 'High-Availability Enterprise Systems Meets Modern AI Engineering',
    experienceYears: '25+',
    bio: '25+ years architecting mission-critical platforms at Susquehanna International Group (SIG, LLP), now channeling deep quantitative trading roots into AI-assisted development—engineering a cohesive 10-application financial software ecosystem under MyTradingToolbox.com.',
    personalStory: 'I personally build and use every single application in the MyTradingToolbox suite daily: from managing our household expenses and compounding Custodial Roth IRAs for my children and grandchild, to conducting fundamental company due diligence, running automated options execution bots, and backtesting options strategy ideas.',
    location: 'Lancaster, PA (Hybrid / Remote)',
    email: 'thompsok35@gmail.com',
    github: 'https://github.com/thompsok35',
    linkedin: 'https://linkedin.com/in/keith-thompson-36b758',
    calendarUrl: 'https://cal.com/keith-thompson-dev/15min',
    hubUrl: 'https://mytradingtoolbox.com',
    coreBadges: [
      '25+ Years Quantitative Trading Systems at SIG, LLP',
      'Creator of 10 Interconnected Financial & AI Applications',
      '100% Deterministic RAG & Knowledge Graph Architect',
      'Dogfooding: Used Daily for Family Wealth & Live Options Trading'
    ]
  },

  heroMetrics: [
    {
      value: '10 Apps',
      label: 'Integrated Financial Suite',
      detail: 'Complete personal wealth, options execution, and AI research ecosystem'
    },
    {
      value: '25+ Years',
      label: 'Quantitative Systems at SIG',
      detail: 'Floor-trader terminals, 20k CRON migration & FINRA telemetry'
    },
    {
      value: '100%',
      label: 'Deterministic AI Grounding',
      detail: 'Zero-hallucination RAG with strict AST paragraph-level citations'
    },
    {
      value: 'Daily Use',
      label: 'Production Dogfooding',
      detail: 'Live personal cash flow, options trades, and children\'s Custodial Roth IRAs'
    }
  ],

  // Full 10 Applications in the MyTradingToolbox Suite
  suiteApplications: [
    {
      id: 'opus-trader',
      name: 'Opus Options Analysis & Execution Engine',
      repoName: 'entropic-solstice',
      domain: 'opus.mytradingtoolbox.com',
      category: 'Live Trading & Bots',
      tagline: 'High-speed multi-leg options execution, real-time probability scanning, and automated risk analysis across active brokerage accounts.',
      personalMission: 'I use Opus to execute my personal live options trades, analyze real-time straddle-implied volatility bounds, monitor cash allocations, and generate steady monthly income through ITM Covered Calls and credit spreads.',
      badge: 'Flagship Quant Engine',
      techStack: ['React', 'TypeScript', 'ASP.NET Core', 'Tradier Brokerage REST & WS', 'Docker', 'WebSockets'],
      technicalHighlights: [
        'Live option chain streaming and sub-millisecond Greeks aggregation (Delta, Gamma, Theta, Vega) via Tradier Brokerage API.',
        'Real-time Straddle Implied Move calculation normalizing 1-sigma expected volatility bands.',
        'Annualized Return On Capital (ROC) & Downside Protection Optimizer for In-The-Money (ITM) covered calls.',
        'Multi-account position monitor with automated P&L mark-to-market and configurable stop-loss safety triggers.'
      ],
      metrics: [
        { label: 'Update Latency', value: '100ms WS' },
        { label: 'Calculation Speed', value: '< 1.2ms' },
        { label: 'Execution Rules', value: '14 Safeguards' },
        { label: 'Multi-Leg Support', value: 'Spreads/Collars' }
      ],
      architectureSummary: 'High-throughput ASP.NET Core backend brokers secure API tokens to Tradier REST & Streaming endpoints. Client React workstation calculates live annualized yield, breakevens, and risk bands with zero UI stutter.',
      codeSnippet: {
        title: 'Opus Options Pricing & ROC Math Engine (TypeScript / C#)',
        language: 'typescript',
        code: `// OptionsMathEngine.ts (Sanitized Quant Pricing Engine)
export function calculateITMCoveredCallMetrics(
  stockPrice: number,
  strikePrice: number,
  callBid: number,
  callAsk: number,
  putBid: number,
  dte: number
): ITMStrategyMetrics {
  const premium = (callBid + callAsk) / 2; // Midpoint pricing
  const netDebit = stockPrice - premium;
  const breakEven = netDebit;
  const downsideBufferPct = ((stockPrice - breakEven) / stockPrice) * 100;
  const maxProfit = strikePrice - netDebit;
  const assignedReturnPct = (maxProfit / netDebit) * 100;
  const annualizedRocPct = dte > 0 ? (assignedReturnPct * (365 / dte)) : 0;
  const straddleImpliedMove = (premium + putBid) * 0.85;

  return {
    stockPrice,
    strikePrice,
    optionPremium: premium,
    daysToExpiration: dte,
    breakEven: parseFloat(breakEven.toFixed(2)),
    downsideBufferPct: parseFloat(downsideBufferPct.toFixed(2)),
    assignedReturnPct: parseFloat(assignedReturnPct.toFixed(2)),
    annualizedRocPct: parseFloat(annualizedRocPct.toFixed(2)),
    straddleImpliedMove: parseFloat(straddleImpliedMove.toFixed(2))
  };
}`
      },
      demoType: 'options'
    },
    {
      id: 'payitforward-rothira',
      name: 'PayItForward: Custodial Roth IRA & Dividend Engine',
      repoName: 'mytradingtoolbox-payitforward',
      domain: 'payitforward.mytradingtoolbox.com',
      category: 'Personal Wealth & Family',
      tagline: 'Income Bucket Portfolio Engine (70% Core / 30% Satellite) compounding generational wealth and dividend snowballs for children and grandchildren.',
      personalMission: 'I built PayItForward to invest for my children and grandchild. Instead of family members gifting plastic toys that break, they gift compounding dividend shares (SPYI, QQQI, BNDI) with automated IRS contribution limit tracking and 6-step anti-yield-trap filters.',
      badge: 'Family Wealth Engine',
      techStack: ['ASP.NET Core (.NET 10)', 'React 18+', 'PostgreSQL (EF Core)', 'Resend REST Email', 'AES-256-GCM', 'Recharts'],
      technicalHighlights: [
        'Income Bucket Model (70% Core / 30% Satellite) orchestrating high-distribution collar ETFs (SPYI, QQQI, IWMI, BNDI, INHI, GLDI).',
        '6-Step Anti-Yield-Trap Engine programmatically verifying underlying asset transparency, distribution sustainability, and NAV preservation.',
        'Automated 6-Month Portfolio Drift Detector & 1-Click Rebalancer restoring target allocations.',
        'Family Gifting Portal (`/gift/{token}`) with the "Compounding Gift Pitch" ($100 toy vs $100 dividend ETF compounding into $1,400+ by age 18) and celebratory Wall of Gratitude.',
        'Zero-SSN compliance and AES-256-GCM envelope encryption for brokerage credentials.'
      ],
      metrics: [
        { label: 'Target Portfolio Yield', value: '11.8% DRIP' },
        { label: 'Anti-Yield-Trap Checks', value: '6 Steps' },
        { label: 'IRS Annual Cap Track', value: '$7,000/yr' },
        { label: 'SSN Storage', value: '0 (Zero Plaintext)' }
      ],
      architectureSummary: 'Full-stack .NET 10 Web API and React client managing multi-child custodial ledgers, automated dividend projection curves, and secure occasion-based gift invitations dispatched via Resend API.',
      codeSnippet: {
        title: '6-Step Anti-Yield-Trap Evaluator & Snowball Engine (.NET 10 C#)',
        language: 'csharp',
        code: `// AntiYieldTrapScorer.cs
public class AntiYieldTrapEngine
{
    public AntiYieldTrapResult EvaluateEtfDistribution(EtfProfile profile, DistributionHistory history)
    {
        // Step 1: Asset Transparency Check
        bool transparentUnderlying = profile.HasDirectSp500OrNdxCollar;
        
        // Step 2: Income Sustainability (Organic Premium vs Destructive ROC)
        decimal returnOfCapitalRatio = history.CalculateDestructiveRocRatio();
        bool sustainableYield = returnOfCapitalRatio < 0.15m;
        
        // Step 3 & 4: NAV Stability (Guarding against reverse splits)
        decimal navErosion5Yr = history.CalculateNavDrift(years: 3);
        bool navPreserved = navErosion5Yr > -0.05m;
        
        // Step 5: Total Return Score (Distributions + Price Appreciation)
        decimal totalReturn3Yr = history.GetTotalCompoundReturn(reinvestDividends: true);
        
        return new AntiYieldTrapResult {
            Ticker = profile.Ticker,
            PassesCriteria = transparentUnderlying && sustainableYield && navPreserved && totalReturn3Yr > 0.08m,
            CompoundingScore = profile.YieldRate * (1.0m - returnOfCapitalRatio)
        };
    }
}`
      },
      demoType: 'dividend'
    },
    {
      id: 'cashmap-planner',
      name: 'CashMap: Income & Expense Flow Planner',
      repoName: 'portfolio-tools',
      domain: 'cashmap.mytradingtoolbox.com',
      category: 'Personal Wealth & Family',
      tagline: 'Specialized cash flow and monthly expense planner synchronizing live options premiums and dividend distributions against foundational family expenses.',
      personalMission: 'I use CashMap to manage my personal living expenses, mapping incoming options cash flow from Opus and dividend payouts from PayItForward directly against fixed household costs to maintain complete net monthly surplus visibility.',
      badge: 'Personal Budget & Cash Flow',
      techStack: ['ASP.NET Core Web API', 'React (TypeScript)', 'PostgreSQL', 'TanStack Query', 'Tailwind CSS'],
      technicalHighlights: [
        'Direct synchronization with Opus and PayItForward to automatically import expected option premiums and quarterly dividend clusters.',
        'Dynamic Net Monthly Summary computing real-time surplus/deficit against fixed (mortgage, healthcare, taxes) and variable expenses.',
        'Multi-frequency amortization mapping bi-monthly, monthly, quarterly, and annual cash flows into granular timeline buckets.',
        'Secure tokenized account access ensuring 100% private financial planning.'
      ],
      metrics: [
        { label: 'Cash Flow Visibility', value: '100% Granular' },
        { label: 'Timeframe Filters', value: 'Month/Quarter/Year' },
        { label: 'Data Sync', value: 'Opus + Dividend feeds' },
        { label: 'Privacy', value: 'Tokenized & Isolated' }
      ],
      architectureSummary: 'Clean ASP.NET Core REST API persisting income/expense matrices to PostgreSQL, synchronized via TanStack Query on React with instant cash flow reconciliation.',
      codeSnippet: {
        title: 'Multi-Frequency Cash Flow Aggregator (.NET C#)',
        language: 'csharp',
        code: `// CashFlowSummaryService.cs
public MonthlyCashFlowReport CalculateMonthlySummary(Guid userId, int month, int year)
{
    var incomes = _incomeRepo.GetActiveSources(userId);
    var expenses = _expenseRepo.GetFoundationalExpenses(userId);

    decimal totalMonthlyIncome = incomes.Sum(i => i.Frequency switch {
        Frequency.Monthly => i.Amount,
        Frequency.Quarterly when i.IsDueInMonth(month) => i.Amount,
        Frequency.BiMonthly => i.Amount * 2,
        Frequency.Yearly when i.IsDueInMonth(month) => i.Amount,
        _ => 0m
    });

    decimal totalFixedExpenses = expenses.Where(e => e.IsFixed).Sum(e => e.PlannedAmount);
    decimal netSurplus = totalMonthlyIncome - totalFixedExpenses;

    return new MonthlyCashFlowReport(month, year, totalMonthlyIncome, totalFixedExpenses, netSurplus);
}`
      },
      demoType: 'dividend'
    },
    {
      id: 'dataservices-platform',
      name: 'DataServicesPlatform: Due Diligence & Health Screener',
      repoName: 'DataServicesPlatform',
      domain: 'dataservices.mytradingtoolbox.com',
      category: 'Research & Backtesting',
      tagline: 'Enterprise market data ingestion, company fundamental due diligence, S&P 500 / Sector health benchmarking, and shared watchlist data feeds.',
      personalMission: 'Before I ever risk capital or put on a new options trade, I run the company through DataServicesPlatform to perform deep fundamental due diligence, check balance sheet health scores vs industry peers, and evaluate DCF valuations.',
      badge: 'Fundamental Due Diligence',
      techStack: ['ASP.NET Core Web API', 'React', 'FinViz Data Feeds', 'PostgreSQL', 'DCF Valuation Models', 'Node.js Workers'],
      technicalHighlights: [
        'Daily automated ingestion of all publicly traded equities with health scores evaluated against S&P 500, Sector, and Industry peer cohorts.',
        'Deep fundamental screening: P/E, PEG, Debt-to-Equity, Free Cash Flow margins, and institutional ownership shifts.',
        'Intrinsic valuation engine calculating automated Discounted Cash Flow (DCF) fair values.',
        'Shared watchlist and market health API powering scanner lists across Opus, Alerts, and the ITM Bot.'
      ],
      metrics: [
        { label: 'Equities Tracked', value: '4,500+ Daily' },
        { label: 'Health Score Models', value: '3 Cohort Levels' },
        { label: 'Valuation Engine', value: 'Automated DCF' },
        { label: 'Ecosystem API', value: 'Shared Data Feeds' }
      ],
      architectureSummary: 'Robust data ingestion worker pipeline extracting financial metrics, normalizing CSV/REST data feeds into PostgreSQL, and serving high-speed query APIs to client frontends.',
      codeSnippet: {
        title: 'Cohort Health Scoring & DCF Evaluator (.NET C#)',
        language: 'csharp',
        code: `// StockHealthScoreService.cs
public HealthScoreCard ComputeStockHealth(StockFundamentals stock, SectorCohort sector)
{
    // Financial Health Sub-scores
    double balanceSheetScore = ComputeSolvencyScore(stock.CurrentRatio, stock.DebtToEquity);
    double profitabilityScore = ComputeMarginScore(stock.OperatingMargin, stock.Roe);
    double valuationScore = ComputeValuationScore(stock.PeRatio, sector.MedianPeRatio);

    // Intrinsic DCF Valuation
    decimal dcfFairValue = _dcfCalculator.ComputeFairValue(
        stock.FreeCashFlow, stock.GrowthRate5Yr, discountRate: 0.09m, terminalMultiple: 15m);

    double compositeScore = (balanceSheetScore * 0.4) + (profitabilityScore * 0.35) + (valuationScore * 0.25);

    return new HealthScoreCard {
        Ticker = stock.Ticker,
        CompositeScore = Math.Round(compositeScore, 1),
        DcfFairValue = dcfFairValue,
        IsUndervalued = stock.CurrentPrice < dcfFairValue
    };
}`
      },
      demoType: 'screener'
    },
    {
      id: 'backtest-vault',
      name: 'Market Data Vault & Quantitative Backtester',
      repoName: 'mytradingtoolbox-backtest',
      domain: 'backtest.mytradingtoolbox.com',
      category: 'Research & Backtesting',
      tagline: '$0/month perpetual EOD market data harvester, historical option chain vault, and high-performance ITM Covered Call strategy backtesting engine.',
      personalMission: 'I built the Backtester to rigorously stress-test my options trading ideas over years of real historical option chain data with full Greeks—verifying exit triggers, win rates, and drawdowns before committing my own capital.',
      badge: 'Historical Quant Vault',
      techStack: ['.NET 10', 'Quartz.NET Scheduler', 'React 18+', 'Tradier & ThetaData APIs', 'PostgreSQL', 'Recharts'],
      technicalHighlights: [
        '$0/Month Perpetual EOD Harvester: Automated Quartz background cron running M-F at 4:05 PM ET pulling daily closing option chains and OHLCV bars.',
        'Multi-Source Historical Seeder bridging Tradier, ThetaData, and CBOE bulk historical flat files.',
        'High-Performance ITM Covered Call Backtesting Engine: Mark-to-market simulation with dynamic delta targets (0.60–0.80 Δ), profit target rolling, and assignment modeling.',
        'Quantitative Performance Analytics: CAGR %, Sharpe Ratio, Sortino Ratio, Max Drawdown %, Win Rate, and Alpha vs S&P 500 Buy & Hold benchmark.',
        'Data Integrity & Auto-Repair Center detecting calendar gaps, missing Greeks, and inverted quotes with a GitHub-style coverage heatmap.'
      ],
      metrics: [
        { label: 'Harvester Cost', value: '$0/Month Perpetual' },
        { label: 'Backtest Speed', value: '< 2.5s / 3-Yr Run' },
        { label: 'Analytics Reported', value: 'Sharpe/Sortino/CAGR' },
        { label: 'Time-Travel UI', value: 'Historical Payoff Curves' }
      ],
      architectureSummary: 'Centralized market data repository powered by .NET 10 Web API and Quartz background schedulers, streaming historical backtest equity curves and volatility smile diagrams to React terminal.',
      codeSnippet: {
        title: 'ITM Covered Call Day-by-Day Mark-to-Market Engine (.NET 10 C#)',
        language: 'csharp',
        code: `// CoveredCallBacktestEngine.cs
public BacktestRunResult ExecuteSimulation(BacktestConfig config, List<HistoricalDailyOptionChain> history)
{
    var tradeLog = new List<BacktestTrade>();
    decimal accountEquity = config.InitialCapital;

    foreach (var day in history)
    {
        if (ActivePosition == null && ShouldOpenPosition(day, config))
        {
            var targetOption = day.Options.FindTargetDeltaOption(minDelta: 0.65f, maxDelta: 0.80f, targetDte: 30);
            ActivePosition = Position.OpenCoveredCall(day.StockPrice, targetOption);
        }
        else if (ActivePosition != null)
        {
            ActivePosition.MarkToMarket(day.StockPrice, day.GetOptionQuote(ActivePosition.OptionSymbol));
            
            // Check Profit Target (e.g. 65% profit on short call) or Stop Loss
            if (ActivePosition.UnrealizedProfitPct >= config.ProfitTargetPct || ActivePosition.IsExpired(day.Date))
            {
                accountEquity += ActivePosition.Close(day.StockPrice);
                tradeLog.Add(ActivePosition.ToTradeRecord());
                ActivePosition = null;
            }
        }
    }
    return QuantitativeMetricsCalculator.ComputeReport(tradeLog, accountEquity, config.InitialCapital);
}`
      },
      demoType: 'options'
    },
    {
      id: 'itm-covered-call-bot',
      name: 'ITM Covered Call Strategy Bot',
      repoName: 'mytradingtoolbox-itmCCbot',
      domain: 'itmbot.mytradingtoolbox.com',
      category: 'Live Trading & Bots',
      tagline: 'Semi-automated execution bot guiding options traders through delta drift monitoring, position risk analysis, and paper/live order placement.',
      personalMission: 'I use this strategy bot to continuously monitor my live In-The-Money Covered Call positions, calculating delta drift and alerting me the second a position reaches its optimal roll window for consistent monthly income.',
      badge: 'Automated Strategy Daemon',
      techStack: ['Node.js', 'TypeScript', 'ASP.NET Core', 'Tradier OAuth', 'PostgreSQL', 'Docker'],
      technicalHighlights: [
        'Semi-automated strategy bot guiding traders through capital allocation, risk bounds, and bracket stops.',
        'Continuous delta monitor alerting on short call breaches (when delta shifts beyond optimal 0.65–0.80 band).',
        '100% risk-free paper trading mode for testing strategy adjustments before staging real brokerage capital.',
        'Direct Tradier OAuth token integration with AES-256 encrypted credential storage.'
      ],
      metrics: [
        { label: 'Scan Frequency', value: 'Continuous Ticks' },
        { label: 'Delta Target Band', value: '0.65 – 0.80 Δ' },
        { label: 'Paper Trading', value: 'Zero Risk Sandbox' },
        { label: 'Credential Security', value: 'AES-256-GCM' }
      ],
      architectureSummary: 'Node/TypeScript background daemon polling order books, evaluating position Greeks, and staging automated bracket orders via secure ASP.NET Core gateway.',
      codeSnippet: {
        title: 'Delta Drift Monitor & Auto-Roll Stager (TypeScript)',
        language: 'typescript',
        code: `// DeltaDriftWatcher.ts
export class DeltaDriftWatcher {
  public evaluatePositionGreeks(position: CoveredCallPosition, liveGreeks: OptionGreeks): PositionAction {
    // Target Delta Range: 0.65 to 0.80
    if (liveGreeks.delta > 0.85) {
      return {
        action: 'ROLL_OUT_AND_UP',
        reason: \`Deep ITM Delta (\${liveGreeks.delta}) - Roll to capture extrinsic premium\`,
        priority: 'HIGH'
      };
    } else if (liveGreeks.delta < 0.50) {
      return {
        action: 'DEFENSIVE_ROLL_DOWN',
        reason: \`Delta fell to \${liveGreeks.delta} - Downside cushion thinning\`,
        priority: 'CRITICAL'
      };
    }
    return { action: 'HOLD', reason: 'Position within optimal 0.65-0.80 delta boundary', priority: 'NORMAL' };
  }
}`
      },
      demoType: 'bot'
    },
    {
      id: 'alerts-engine',
      name: 'Opus Alerting Engine & SMS Gateway',
      repoName: 'mytradingtoolbox-alerts',
      domain: 'alerts.mytradingtoolbox.com',
      category: 'Live Trading & Bots',
      tagline: 'Event-driven market trigger daemon and high-priority SMS gateway delivering sub-second alpha signals to subscriber phones.',
      personalMission: 'I rely on the Alerting Engine to monitor market volatility deviations across my watchlists so I never miss an optimal covered call entry or earnings expected move, receiving SMS alerts wherever I am.',
      badge: 'Real-Time SMS Dispatcher',
      techStack: ['Node.js', 'TypeScript', 'PostgreSQL', 'Sinch SMS Gateway', 'Encrypted Vault', 'Docker'],
      technicalHighlights: [
        'Sub-second SMS delivery via Sinch Gateway with exponential retry algorithms.',
        'Market Insights Expected Move scanner identifying options pricing misalignments.',
        'Latency guard dropping any stale tick > 3,000ms to eliminate slippage.',
        'SHA-256 idempotency locks preventing duplicate alert dispatches during market spikes.'
      ],
      metrics: [
        { label: 'Dispatch Latency', value: '< 240ms' },
        { label: 'SLA Uptime', value: '99.98%' },
        { label: 'Carrier Route', value: 'Sinch Tier-1 Direct' },
        { label: 'Daily Market Scans', value: '150,000+' }
      ],
      architectureSummary: 'Event-driven Node.js microservice maintaining persistent Tradier market sockets, caching SHA-256 idempotency locks in PostgreSQL, and firing priority SMS packets via Sinch REST endpoints.',
      codeSnippet: {
        title: 'Priority Sinch Carrier Dispatcher (TypeScript)',
        language: 'typescript',
        code: `// SinchAlertDispatcher.ts
export class SinchAlertDispatcher {
  public async dispatchAlphaAlert(signal: MarketSignal, subscriber: SubscriberProfile): Promise<boolean> {
    const payload = {
      from: 'MYTRADINGTBX',
      to: [subscriber.phoneNumber],
      body: \`⚡ [MTT ALPHA] \${signal.ticker} ITM CC | Strike: $\${signal.strike} | Ann. ROC: \${signal.annualizedRoc}% | Buffer: \${signal.downsideBuffer}%\`
    };
    const response = await this.sinchClient.sms.send(payload);
    return response.status === 'Queued' || response.status === 'Sent';
  }
}`
      },
      demoType: 'bot'
    },
    {
      id: 'coach-rag-ai',
      name: 'Grounded AI Options Trading Coach',
      repoName: 'mytradingtoolbox-coach',
      domain: 'coach.mytradingtoolbox.com',
      category: 'AI & Ecosystem',
      tagline: 'Zero-data-leakage deterministic RAG engine and domain-specific knowledge graph for multi-strategy options curriculum.',
      personalMission: 'I built the AI Coach as a conversational knowledge mentor for subscribers and myself—curating hundreds of pages of options strategies without hallucinating parameters or leaking proprietary rules to public LLMs.',
      badge: 'Deterministic RAG & Graph',
      techStack: ['PostgreSQL + pgvector', 'C# ASP.NET Core', 'React', 'Docker', 'Google Gemini API', 'Railway'],
      technicalHighlights: [
        'Multi-lens embedding with dense vector similarity (pgvector cosine distance) paired with structured keyword and relational metadata filters.',
        'Knowledge graph entity linkage disambiguating complex multi-leg options terminology (e.g. ITM Covered Calls vs Synthetic Longs).',
        'Deterministic Agent Gatekeeper: Sanitizes inputs and enforces strict AST citation validation against ground-truth chunks.',
        'Zero Data Retention compliance ensuring full isolation of proprietary curriculum.'
      ],
      metrics: [
        { label: 'Hallucination Rate', value: '0.0%' },
        { label: 'Vector Query Latency', value: '< 85ms' },
        { label: 'Grounding Parity', value: '100% Cited' },
        { label: 'Domain Entities', value: '1,400+ Linked' }
      ],
      architectureSummary: 'Client React app dispatches authenticated queries to C# ASP.NET Core API gateway. The orchestration layer performs hybrid vector retrieval via pgvector, runs knowledge graph relational scoring, builds an immutable grounded context envelope, and streams validated responses.',
      codeSnippet: {
        title: 'Deterministic Grounding & Citation Verifier (C# ASP.NET Core)',
        language: 'csharp',
        code: `// GroundedContextBuilder.cs
public async Task<GroundedSynthesisResult> GenerateGroundedAnswerAsync(string userQuery, CancellationToken ct)
{
    float[] queryVector = await _embeddingService.GetDenseVectorAsync(userQuery, ct);
    var matchedChunks = await _pgVectorRepository.GetTopKSimilarChunksAsync(queryVector, limit: 5, threshold: 0.82f, ct);
    
    if (!matchedChunks.Any()) return GroundedSynthesisResult.FallbackUnmatched("No verified curriculum citation found.");

    var graphEntities = await _knowledgeGraph.TraverseEntitiesAsync(matchedChunks.Select(c => c.ChunkId), ct);
    var prompt = PromptTemplates.BuildDeterministicPrompt(userQuery, matchedChunks, graphEntities);
    
    var rawAnswer = await _llmClient.ExecuteGroundedPromptAsync(prompt, ct);
    return _citationValidator.EnforceExactCitationMatches(rawAnswer, matchedChunks);
}`
      },
      demoType: 'rag'
    },
    {
      id: 'trading-toolbox-hub',
      name: 'Trading Toolbox Hub: Central Ecosystem Portal',
      repoName: 'trading-toolbox-hub',
      domain: 'mytradingtoolbox.com',
      category: 'AI & Ecosystem',
      tagline: 'Single-pane-of-glass launchpad, unified token gateway, member portal, and navigation hub uniting the entire 10-app ecosystem.',
      personalMission: 'The Hub is the command center tying our whole ecosystem together—allowing users and myself to log in once and seamlessly transition between Opus, CashMap, PayItForward, Alerts, and the AI Coach.',
      badge: 'Unified Ecosystem Portal',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'JWT Token Bridge', 'Docker'],
      technicalHighlights: [
        'Centralized authentication gateway issuing cross-application single sign-on tokens across the entire suite.',
        'Member Portal and Lead Capture funnel with automated customer tier onboarding.',
        'High-converting interactive showcases for the 6 consumer suite apps and partner integrations (Tradier Brokerage, FinViz).',
        'Responsive glassmorphic UI with dynamic session persistence.'
      ],
      metrics: [
        { label: 'Integrated Apps', value: 'All 10 Connected' },
        { label: 'SSO Protocol', value: 'JWT Cross-Domain' },
        { label: 'UI Architecture', value: 'Framer Motion SPA' },
        { label: 'Partner Feeds', value: 'Tradier & FinViz' }
      ],
      architectureSummary: 'Centralized React/TypeScript single-page portal with JWT session management, linking users seamlessly across subdomains with uniform telemetry and theme consistency.',
      codeSnippet: {
        title: 'Cross-Domain SSO Token Bridge (TypeScript)',
        language: 'typescript',
        code: `// SsoTokenBridge.ts
export class CrossAppTokenBridge {
  public static launchSuiteApplication(appDomain: string, sessionToken: string): void {
    const targetUrl = new URL(appDomain);
    targetUrl.searchParams.set('auth_handshake', sessionToken);
    targetUrl.searchParams.set('source_hub', 'mytradingtoolbox.com');
    window.location.href = targetUrl.toString();
  }
}`
      },
      demoType: 'bot'
    },
    {
      id: 'keiththompson-portfolio',
      name: 'Executive Technical Showcase & Architecture Portfolio',
      repoName: 'keiththompson.dev',
      domain: 'keiththompson.dev',
      category: 'AI & Ecosystem',
      tagline: 'High-converting digital portfolio showcasing 25+ years of high-stakes enterprise systems at SIG, LLP and the modern 10-app AI financial engineering suite.',
      personalMission: 'This application is the public window into my engineering career—giving prospective employers, technical contract houses, and consulting clients an interactive, zero-barrier glimpse into the system architectures I build and run.',
      badge: 'Executive Technical Portfolio',
      techStack: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'Docker', 'NGINX Alpine', 'Railway'],
      technicalHighlights: [
        'Zero Authentication Barrier: 100% public, frictionless exploration for hiring managers and recruiters.',
        'Interactive 5-in-1 Client-Side Sandboxes: RAG Grounding, Options Math, Dividend Snowball, Due Diligence, and SMS Dispatcher.',
        'Deep enterprise storytelling: 25+ years at SIG (PHLX/CBOE floor systems, 20k CRON migration, FINRA telemetry).',
        'Railway-ready multi-stage Docker container with production NGINX SPA routing.'
      ],
      metrics: [
        { label: 'Authentication Barrier', value: '0 (100% Open)' },
        { label: 'Interactive Sandboxes', value: '5 Live Demos' },
        { label: 'Container Build', value: 'Multi-stage NGINX' },
        { label: 'Lighthouse Performance', value: '100% Optimized' }
      ],
      architectureSummary: 'High-performance React 19 single-page application containerized via Alpine NGINX on Railway, featuring interactive quant math engines and responsive scheduling.',
      codeSnippet: {
        title: 'Railway Multi-Stage Dockerfile Blueprint',
        language: 'dockerfile',
        code: `# Multi-Stage Docker Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
      },
      demoType: 'rag'
    }
  ] as SuiteApplication[],

  enterpriseLegacy: {
    company: 'Susquehanna International Group (SIG, LLP)',
    tenure: '25+ Years of High-Stakes Scale',
    overview: 'Pioneered, scaled, and hardened mission-critical quantitative trading infrastructure, floor-trader server farms, enterprise task automation, and global compliance telemetry across global financial exchanges.',
    milestones: [
      {
        era: '1998 – Early 2000s',
        organization: 'Susquehanna International Group (SIG, LLP)',
        role: 'Systems & Infrastructure Architect',
        title: 'Floor-Trader Market Making Pivot (PHLX / CBOE / AMEX)',
        summary: 'Pioneered server-side multi-user application hosting using Citrix WinFrame/MetaFrame, transitioning trading floor specialists from fragile local hardware to resilient datacenter server farms.',
        scaleMetric: 'Sub-second failovers across 3 major US Options Exchanges',
        details: [
          'Engineered low-latency terminal infrastructure for proprietary market-making desks at Philadelphia Stock Exchange (PHLX), Chicago Board Options Exchange (CBOE), and American Stock Exchange (AMEX).',
          'Eliminated floor-hardware points of failure by centralizing quantitative pricing engines in redundant datacenter server clusters.',
          'Maintained 99.999% uptime during historic market volatility events, ensuring floor traders never lost pricing feeds.'
        ],
        technologies: ['Citrix WinFrame/MetaFrame', 'Windows NT Enterprise', 'Multi-User Server Architecture', 'Trading Floor Terminal Systems'],
        impactBadges: ['Market Making Infrastructure', 'Zero Trading Halts', 'Sub-second Failover']
      },
      {
        era: 'Mid Career',
        organization: 'Susquehanna International Group (SIG, LLP)',
        role: 'Enterprise Automation SWAT Lead',
        title: '20,000+ Mission-Critical UNIX CRON Migration',
        summary: 'Technical core lead on an elite SWAT team tasked with auditing, standardizing, and migrating over 20,000 unmanaged UNIX CRON jobs to an Enterprise Task Scheduling platform.',
        scaleMetric: '20,000+ Critical Jobs Migrated with 0 Production Disruptions',
        details: [
          'Audited opaque, distributed shell scripts across thousands of Sun Solaris, Linux, and AIX nodes executing overnight risk, settle, and clearing batches.',
          'Re-architected execution pipelines with strict dependency graphs, automated failover routing, and real-time SLA breach alerting.',
          'Replaced uncoordinated cron collisions with deterministic priority queues, eliminating race conditions in end-of-day market risk reconciliations.'
        ],
        technologies: ['Enterprise Task Scheduler', 'UNIX / Linux / Solaris', 'Perl / Shell / Python', 'Risk Batch Automation', 'Distributed Scheduling'],
        impactBadges: ['Zero Downtime Migration', '20k+ Automated Pipelines', 'Global Risk Batch Hardening']
      },
      {
        era: 'Senior / Principal Era',
        organization: 'Susquehanna International Group (SIG, LLP)',
        role: 'Principal Systems & Telemetry Architect',
        title: 'Enterprise Telemetry, Session Monitoring & FINRA Compliance',
        summary: 'Architected enterprise-wide monitoring platforms in C# and ASP.NET Core tracking 4,000+ applications, 8,000+ concurrent sessions worldwide, and automated regulatory audit pipelines.',
        scaleMetric: '4,000+ Applications & 8,000+ Global Sessions Monitored in Real-Time',
        details: [
          'Built high-performance C# Windows Services and ASP.NET Core dashboards streaming live heartbeat, resource utilization, and crash telemetry across global offices (Bala Cynwyd, Dublin, Sydney, Shanghai).',
          'Automated FINRA and internal compliance audit reporting pipelines, ensuring 100% cryptographic traceability for trade execution and system access events.',
          'Established enterprise logging standards and automated remediation workflows that reduced P1 production incidents by over 65%.'
        ],
        technologies: ['C# .NET / ASP.NET Core', 'SQL Server / Telemetry Pipelines', 'Distributed Service Bus', 'FINRA Regulatory Data Vaults', 'WCF / Microservices'],
        impactBadges: ['8,000+ Concurrent Sessions', 'FINRA Audit Automated', 'Global Infrastructure Visibility']
      }
    ] as EnterpriseMilestone[]
  },

  skillsHierarchy: [
    {
      category: 'AI Engineering & Modern RAG',
      iconName: 'Brain',
      skills: [
        { name: 'PostgreSQL + pgvector', level: 'Expert', experience: 'Production' },
        { name: 'Deterministic Grounding & Citations', level: 'Architect', experience: 'Production' },
        { name: 'Knowledge Graph Traversal', level: 'Advanced', experience: 'Production' },
        { name: 'Semantic Chunking & Embedding Pipelines', level: 'Architect', experience: 'Production' },
        { name: 'Google Gemini LLM Orchestration', level: 'Architect', experience: 'Production' },
        { name: 'Zero Data Retention Compliance', level: 'Expert', experience: 'Production' }
      ]
    },
    {
      category: 'Backend & High-Concurrency Systems',
      iconName: 'Server',
      skills: [
        { name: 'C# / ASP.NET Core (.NET 8/10)', level: 'Master / 20+ Yrs', experience: 'Enterprise' },
        { name: 'TypeScript / Node.js', level: 'Expert', experience: 'Production' },
        { name: 'Distributed Task Scheduling (Quartz)', level: 'Master', experience: 'Enterprise' },
        { name: 'Event-Driven Architectures & Webhooks', level: 'Architect', experience: 'Production' },
        { name: 'PostgreSQL / SQL Server / Redis', level: 'Master', experience: 'Enterprise' },
        { name: 'REST APIs & High-Throughput WebSockets', level: 'Master', experience: 'Enterprise' }
      ]
    },
    {
      category: 'Quantitative FinTech & Execution',
      iconName: 'TrendingUp',
      skills: [
        { name: 'Tradier Brokerage REST & Streaming API', level: 'Expert', experience: 'Production' },
        { name: 'Multi-Leg Options Pricing (Greeks, IV, ROC)', level: 'Advanced', experience: 'Production' },
        { name: 'Custodial Roth IRA & Dividend Snowball Models', level: 'Architect', experience: 'Production' },
        { name: 'Automated Bot Execution & Bracket Orders', level: 'Architect', experience: 'Production' },
        { name: 'Intrinsic DCF Valuation & Solvency Screening', level: 'Expert', experience: 'Production' },
        { name: 'Sinch SMS Gateway Integration', level: 'Expert', experience: 'Production' }
      ]
    },
    {
      category: 'Frontend & Modern UX',
      iconName: 'Layout',
      skills: [
        { name: 'React 18 / 19 & TypeScript', level: 'Expert', experience: 'Production' },
        { name: 'Tailwind CSS v4 & Modern Dark Design', level: 'Expert', experience: 'Production' },
        { name: 'Interactive Quant Simulators & Recharts', level: 'Advanced', experience: 'Production' },
        { name: 'State Machines & Resilient WebSockets', level: 'Expert', experience: 'Production' },
        { name: 'SPA Optimization & Accessible UI', level: 'Expert', experience: 'Production' }
      ]
    },
    {
      category: 'DevOps & Containerization',
      iconName: 'Cpu',
      skills: [
        { name: 'Docker & Multi-Stage Builds', level: 'Expert', experience: 'Production' },
        { name: 'Railway Cloud Deployment', level: 'Expert', experience: 'Production' },
        { name: 'NGINX High-Efficiency Reverse Proxy', level: 'Master', experience: 'Production' },
        { name: 'UNIX / Linux / Bash Automation', level: 'Master / 25+ Yrs', experience: 'Enterprise' },
        { name: 'CI/CD Pipelines & Automated Testing', level: 'Advanced', experience: 'Production' }
      ]
    }
  ] as TechCategory[],

  mockGroundedQueries: [
    {
      id: 'query-itm-cc',
      question: 'What are the exact entry criteria and downside buffer calculations for an In-The-Money Covered Call?',
      category: 'Options Strategy Rules',
      retrievedChunks: [
        {
          source: 'Mastery_Curriculum_Vol2.pdf',
          section: 'Section 4.2: In-The-Money Covered Call Architecture',
          similarity: 0.94,
          text: 'Entry Rule: Select high-liquidity underlying assets with earnings > 21 days out. Target a delta between 0.65 and 0.80 on the short call. The downside protection buffer is defined strictly as: Downside Buffer % = ((Stock Price - BreakEven) / Stock Price) * 100, where BreakEven = Stock Purchase Price - Midpoint Call Premium.'
        },
        {
          source: 'Risk_Management_Protocol.pdf',
          section: 'Rule 11: Minimum Downside Margin',
          similarity: 0.89,
          text: 'Never execute an ITM covered call position if the calculated downside buffer is less than 4.5% unless annualized return on capital (assigned) exceeds 32% on a 30-day DTE basis.'
        }
      ],
      knowledgeGraphNodes: ['Delta 0.70 Target', 'BreakEven Net Debit', '30-Day DTE Horizon', 'Downside Buffer Threshold >= 4.5%'],
      groundedResponse: 'According to **Mastery Curriculum Vol 2 (§4.2)** and **Risk Management Protocol (Rule 11)**, the verified entry criteria are:\n\n1. **Asset Filter:** High liquidity underlying with no binary earnings events within 21 days.\n2. **Delta Selection:** Target short call delta between **0.65 and 0.80** (deep ITM to moderate ITM).\n3. **Break-Even Formula:** `BreakEven = Stock Price - Midpoint Call Premium`\n4. **Downside Buffer Rule:** `Downside Buffer % = ((Stock Price - BreakEven) / Stock Price) * 100`.\n5. **Risk Gate:** Minimum required downside buffer is **≥ 4.5%**, unless the 30-day annualized ROC exceeds **32.0%**.',
      citations: ['Mastery_Curriculum_Vol2.pdf #Section-4.2', 'Risk_Management_Protocol.pdf #Rule-11'],
      verificationScore: 100
    },
    {
      id: 'query-straddle-iv',
      question: 'How does the Straddle Cost Implied Move formula calculate expected market deviation?',
      category: 'Quantitative Volatility Math',
      retrievedChunks: [
        {
          source: 'Quant_Analytics_Handbook.pdf',
          section: 'Chapter 7: Real-Time Volatility Approximation',
          similarity: 0.96,
          text: 'The market-implied 1-standard-deviation move through expiration is derived directly from the front-month At-The-Money (ATM) straddle price. The formula is: Implied Move ($) = (ATM Call Mid + ATM Put Mid) * 0.85. This provides an 85% rule-of-thumb approximation for one standard deviation normal distribution under Black-Scholes assumptions.'
        },
        {
          source: 'Opus_Execution_Engine_Specs.pdf',
          section: 'Specification 3.1: Risk Band Bounds',
          similarity: 0.88,
          text: 'The upper and lower boundaries for strike selection in multi-leg spreads are set at Current Underlying Price ± Straddle Implied Move. Positions outside these bounds carry a historical probability of expiring worthless > 68.2%.'
        }
      ],
      knowledgeGraphNodes: ['ATM Straddle Cost', '0.85 Standard Deviation Factor', '68.2% 1-Sigma Probability', 'Tradier Live Bid/Ask Midpoint'],
      groundedResponse: 'Per **Quant Analytics Handbook (Ch. 7)** and **Opus Execution Specs (§3.1)**:\n\n• **Core Formula:** `Implied Move ($) = (ATM Call Midpoint + ATM Put Midpoint) × 0.85`\n• **Mathematical Basis:** The 0.85 multiplier normalizes the straddle premium into an expected 1-standard-deviation (1-sigma) price boundary under Black-Scholes distribution.\n• **Execution Application:** Staged options wings placed beyond `Stock Price ± Implied Move` demonstrate a verified **> 68.2%** probability of profit at expiration.',
      citations: ['Quant_Analytics_Handbook.pdf #Ch-7', 'Opus_Execution_Engine_Specs.pdf #Spec-3.1'],
      verificationScore: 100
    },
    {
      id: 'query-dividend-snowball',
      question: 'How does the PayItForward 70/30 Income Bucket model prevent destructive Return of Capital in Custodial Roth IRAs?',
      category: 'Dividend Snowball & Anti-Yield-Trap',
      retrievedChunks: [
        {
          source: 'PayItForward_Architecture_Blueprint.pdf',
          section: 'Section 2.1: 6-Step Anti-Yield-Trap Rules',
          similarity: 0.95,
          text: 'The 70/30 bucket model allocates 70% to broad index collar ETFs (SPYI 30%, QQQI 25%, IWMI 15%) and 30% to defensive satellites (BNDI 12%, INHI 10%, GLDI 8%). The Anti-Yield-Trap engine evaluates Return of Capital (ROC) classifications on form 19a-1 notices, distinguishing tax-advantaged return of basis from destructive NAV decay.'
        }
      ],
      knowledgeGraphNodes: ['70% Core / 30% Satellite', 'SPYI / QQQI / BNDI Collar', 'Form 19a-1 ROC Audit', 'Tax-Free DRIP Compounding'],
      groundedResponse: 'Based on **PayItForward Architecture Blueprint (§2.1)**:\n\n1. **Structured 70/30 Asset Allocation:** 70% in high-liquidity index collar engines (SPYI, QQQI, IWMI) + 30% in defensive stability dampeners (BNDI, INHI, GLDI).\n2. **Algorithmic ROC Filter:** Differentiates healthy tax-advantaged option collar distributions from destructive capital erosion.\n3. **100% Tax-Free DRIP:** Automatically reinvests monthly cash distributions back into shares, compounding the lifetime dividend snowball within Custodial Roth IRAs.',
      citations: ['PayItForward_Architecture_Blueprint.pdf #Section-2.1'],
      verificationScore: 100
    }
  ] as GroundedRAGQuery[]
};
