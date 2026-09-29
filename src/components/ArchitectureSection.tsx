import React, { useState } from 'react';
import { 
  Cpu, 
  ShieldCheck, 
  Code2, 
  Copy, 
  Check, 
  AlertTriangle,
  ArrowRight,
  GitBranch,
  Lock
} from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const [activeCodeTab, setActiveCodeTab] = useState<number>(0);
  const [copied, setCopied] = useState(false);
  const [activeDiagramNode, setActiveDiagramNode] = useState<string>('vector');

  const architecturePipelines = [
    {
      id: 'rag-grounding',
      title: 'Deterministic RAG & Citation Verifier',
      tech: 'C# ASP.NET Core + pgvector',
      code: `// C# GroundedAgentMiddleware.cs
public class DeterministicGroundingGuard
{
    private readonly IPgVectorRepository _vectorDb;
    private readonly IKnowledgeGraphService _graphService;
    private readonly ICitationValidator _citationValidator;

    public async Task<GroundedResponse> ProcessQueryAsync(
        UserQueryRequest request, 
        CancellationToken ct)
    {
        // 1. Generate 1536-dim dense vector embedding
        var denseVector = await _vectorDb.EmbedQueryAsync(request.QueryText, ct);
        
        // 2. Query pgvector using Cosine Distance (<=>) with relational metadata filter
        var matchedChunks = await _vectorDb.GetTopChunksAsync(
            denseVector, 
            limit: 4, 
            minSimilarity: 0.85f, 
            curriculumId: request.CurriculumId,
            ct: ct);

        if (!matchedChunks.Any())
        {
            return GroundedResponse.RejectUnmatched(
                "Query out of domain bounds. No verified curriculum chunks matched.");
        }

        // 3. Knowledge Graph Entity Disambiguation
        var graphContext = await _graphService.ExpandEntityRelationsAsync(
            matchedChunks.Select(c => c.EntityKeys), ct);

        // 4. Assemble Grounded Context Envelope
        var prompt = PromptBuilder.CreateDeterministicPrompt(
            request.QueryText, matchedChunks, graphContext, strictCitations: true);

        // 5. Enforce Strict AST Citation Verification on LLM Output
        var rawAnswer = await _llmClient.CompleteAsync(prompt, ct);
        return _citationValidator.ValidateAndTagCitations(rawAnswer, matchedChunks);
    }
}`
    },
    {
      id: 'opus-quant',
      title: 'Opus Real-Time Multi-Leg Options Math',
      tech: 'TypeScript / C# Quant Engine',
      code: `// OptionsRiskCalculator.ts (Sanitized Quant Pricing)
export function computeCoveredCallRiskSurface(
  underlyingPrice: number,
  shortCallStrike: number,
  shortCallBid: number,
  shortCallAsk: number,
  daysToExpiration: number
): RiskSurfaceReport {
  const callMid = (shortCallBid + shortCallAsk) / 2;
  const netDebit = underlyingPrice - callMid;
  
  // Downside protection margin
  const downsideBufferPct = ((underlyingPrice - netDebit) / underlyingPrice) * 100;
  
  // Maximum possible profit if assigned
  const maxProfit = shortCallStrike - netDebit;
  const returnOnCapitalPct = (maxProfit / netDebit) * 100;
  
  // Annualized ROC based on 365 days
  const annualizedRocPct = (returnOnCapitalPct * (365 / Math.max(1, daysToExpiration)));
  
  return {
    netDebit: parseFloat(netDebit.toFixed(2)),
    breakEven: parseFloat(netDebit.toFixed(2)),
    downsideBufferPct: parseFloat(downsideBufferPct.toFixed(2)),
    assignedReturnPct: parseFloat(returnOnCapitalPct.toFixed(2)),
    annualizedRocPct: parseFloat(annualizedRocPct.toFixed(2)),
    isAcceptableRisk: downsideBufferPct >= 4.5 && annualizedRocPct >= 25.0
  };
}`
    },
    {
      id: 'event-bot',
      title: 'Event-Driven Bot Trigger & Webhook Engine',
      tech: 'Node.js / Sinch SMS / AES-256',
      code: `// MarketEventDispatcher.ts
export class MarketEventDispatcher {
  public async handleOptionSignal(tick: MarketTick): Promise<ExecutionStatus> {
    // 1. Guard against latency slippage (> 3000ms drop)
    const tickLatency = Date.now() - tick.sourceTimestamp;
    if (tickLatency > 3000) {
      this.logger.warn(\`[LatencyGuard] Dropped stale tick (\${tickLatency}ms)\`);
      return { status: 'DROPPED_STALE_TICK' };
    }

    // 2. Generate Deterministic Idempotency Key
    const idempotencyKey = crypto
      .createHash('sha256')
      .update(\`\${tick.symbol}-\${tick.strike}-\${tick.timestamp}\`)
      .digest('hex');

    if (await this.cache.exists(idempotencyKey)) {
      return { status: 'DUPLICATE_IGNORED' };
    }
    await this.cache.set(idempotencyKey, 'LOCKED', 300);

    // 3. Dispatch to Sinch SMS Gateway with AES Decrypted Credentials
    const decryptedKey = this.vault.decrypt(process.env.ENCRYPTED_SINCH_SECRET!);
    return this.smsGateway.sendPriorityAlphaAlert(tick, decryptedKey);
  }
}`
    }
  ];

  const handleCopyCode = () => {
    navigator.clipboard.writeText(architecturePipelines[activeCodeTab].code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const diagramNodes = [
    {
      id: 'ingest',
      title: '1. Multi-Lens Ingestion',
      subtitle: 'Sliding-Window Chunker',
      tech: 'C# / PDF & AST Parser',
      details: 'Splits raw curriculum into overlapping semantic blocks with structured taxonomy metadata tagging.',
      status: 'Active'
    },
    {
      id: 'vector',
      title: '2. pgvector Vector Store',
      subtitle: '1536-dim Dense Index',
      tech: 'PostgreSQL + pgvector',
      details: 'Fast sub-85ms HNSW/IVFFlat cosine distance indexing with relational SQL metadata constraints.',
      status: 'Warm'
    },
    {
      id: 'graph',
      title: '3. Knowledge Graph Linker',
      subtitle: 'Entity Disambiguation',
      tech: 'Relational Graph Nodes',
      details: 'Traverses multi-leg options terminology links (e.g. ITM Covered Call -> Delta Band -> DTE Rule).',
      status: 'Verified'
    },
    {
      id: 'guard',
      title: '4. Deterministic Guardrail',
      subtitle: 'Zero-Hallucination Gate',
      tech: 'ASP.NET Core Middleware',
      details: 'Enforces exact paragraph-level source citations and rejects any ungrounded assertions.',
      status: '100% Pass'
    }
  ];

  return (
    <section id="architecture" className="py-24 relative bg-slate-950 border-t border-slate-900 overflow-hidden">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>Systems Architecture Deep-Dive</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-100 tracking-tight">
            Deterministic Grounding & Quant Pipelines
          </h2>

          <p className="text-base sm:text-lg text-slate-400 mt-4 leading-relaxed">
            Eliminating AI hallucinations and broker execution slippage through rigorous architectural invariants, strict citation verification, and sub-millisecond quantitative calculations.
          </p>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-slate-800 mb-12 shadow-2xl">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-cyan-400" />
                <span>End-to-End Grounded Ingestion & Inference Topology</span>
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                Click any node below to inspect its operational invariants and data contracts.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Deterministic Mode: ACTIVE</span>
            </div>
          </div>

          {/* Interactive Topology Nodes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            {diagramNodes.map((node) => {
              const isSelected = activeDiagramNode === node.id;
              return (
                <button
                  key={node.id}
                  onClick={() => setActiveDiagramNode(node.id)}
                  className={`text-left p-4 rounded-xl border transition-all relative cursor-pointer ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10 -translate-y-1'
                      : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
                      {node.tech}
                    </span>
                    <span className="text-[10px] font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      {node.status}
                    </span>
                  </div>

                  <div className="font-bold text-sm text-slate-100 mt-1">
                    {node.title}
                  </div>
                  <div className="text-xs text-cyan-400 font-mono">
                    {node.subtitle}
                  </div>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {node.details}
                  </p>

                  {isSelected && (
                    <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-cyan-500 rotate-45 rounded-xs" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Architecture Comparison: Naive RAG vs Keith's Deterministic RAG */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40">
              <div className="flex items-center gap-2 text-red-400 text-xs font-bold font-mono mb-2">
                <AlertTriangle className="w-4 h-4" />
                <span>NAIVE RAG PITFALLS (TYPICAL)</span>
              </div>
              <ul className="text-xs text-slate-400 space-y-1.5">
                <li>• Blind top-k cosine search returns out-of-context chunks.</li>
                <li>• Public LLMs hallucinate strategy parameters when uncertain.</li>
                <li>• No audit trail or source citation verification.</li>
                <li>• Proprietary curriculum leaked to public AI provider logs.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono mb-2">
                <ShieldCheck className="w-4 h-4" />
                <span>KEITH'S DETERMINISTIC RAG INVARIANTS</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li>• <strong className="text-emerald-300">Strict Citation AST Guard:</strong> Answers must cite exact verified source chunks.</li>
                <li>• <strong className="text-emerald-300">Knowledge Graph Traversal:</strong> Disambiguates complex multi-leg options terms.</li>
                <li>• <strong className="text-emerald-300">Zero-Data-Leakage:</strong> Zero data retention agreements + private pgvector.</li>
                <li>• <strong className="text-emerald-300">Fallback Rejection:</strong> Refuses speculative output when threshold &lt; 0.82.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Code Highlights Showcase */}
        <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-2xl">
          
          {/* Code Bar Tabs */}
          <div className="p-4 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {architecturePipelines.map((pipeline, idx) => (
                <button
                  key={pipeline.id}
                  onClick={() => setActiveCodeTab(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    activeCodeTab === idx
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>{pipeline.title}</span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-400 hidden sm:inline">
                {architecturePipelines[activeCodeTab].tech}
              </span>
              <button
                onClick={handleCopyCode}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-mono transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy Code'}</span>
              </button>
            </div>
          </div>

          {/* Syntax Highlighted Code Viewer */}
          <div className="p-5 bg-black/90 font-mono text-xs overflow-x-auto text-slate-200 max-h-[420px]">
            <pre>
              <code>{architecturePipelines[activeCodeTab].code}</code>
            </pre>
          </div>

          {/* Bottom Security Assurance */}
          <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-cyan-400" />
              <span>Sanitized Architecture Representation • Zero Proprietary Trading Keys Exposed</span>
            </div>
            <a href="#contact" className="text-cyan-400 hover:underline flex items-center gap-1 font-semibold">
              <span>Request Full Code Review Session</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
