'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Zap,
  Terminal,
  RefreshCw,
  Cpu,
  ArrowRight,
  FileText,
  Building2,
  TrendingUp,
  Download,
  Eye,
  ThumbsUp,
  Sliders,
  Layers,
  ChevronRight,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { siteConfig } from '@/config/site';

export function HeroWorkflowEngine() {
  const [inputText, setInputText] = useState(siteConfig.workflow.defaultInput);
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [viewMode, setViewMode] = useState<'workspace' | 'technical'>('workspace');
  const [approved, setApproved] = useState(false);
  const [activeSlide, setActiveSlide] = useState(1);
  const [result, setResult] = useState<Record<string, unknown> | null>(siteConfig.workflow.sampleResponse);
  const [stepStatus, setStepStatus] = useState({
    firewall: 'VERIFIED',
    inference: '82ms • OpenAI gpt-4o-mini',
    schema: 'PASS • Deterministic Rules',
  });

  const handleExecute = async () => {
    setLoading(true);
    setApproved(false);
    try {
      const res = await fetch('/api/ai/classify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Rightsholder Asset Valuation & Match',
          content: inputText,
        }),
      });

      if (res.ok) {
        const data = await res.json();
        setResult(data);
        setStepStatus({
          firewall: data.firewallStatus?.passed ? 'PASSED (0ms)' : 'SECURITY INTERCEPT (0ms)',
          inference: `${data.latencyMs || 84}ms • ${data.provider} (${data.model || 'gpt-4o-mini'})`,
          schema: 'ENFORCED (1ms)',
        });
      } else {
        setResult(siteConfig.workflow.sampleResponse);
      }
    } catch {
      setResult(siteConfig.workflow.sampleResponse);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (!result) return;
    navigator.clipboard.writeText(JSON.stringify(result, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Extract structured properties safely
  const valuation = (result?.valuationEstimate as string) || (result?.computed_fmv as string) || '$2,480,000 / season';
  const category = (result?.category as string) || (result?.lifecycle_stage as string) || 'Asset Valuation & Brand Match';
  const matchedBrands = Array.isArray(result?.matchedBrands)
    ? (result?.matchedBrands as string[])
    : Array.isArray(result?.recommended_targets)
    ? (result?.recommended_targets as string[])
    : ['Cloudflare', 'Stripe', 'Datadog', 'Snowflake'];
  const summary = (result?.reasoning as string) || (result?.agent_output_summary as string) || 'High-density digital signage and premium hospitality analyzed against comparable market transactions.';
  const recommendation = (result?.suggestedResponse as string) || 'Recommended package ready for commercial director approval and automated outreach.';

  return (
    <Card className="w-full border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs overflow-hidden">
      <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)] bg-[var(--color-panel-subtle)]/50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20 text-[11px] font-mono">
                {siteConfig.workflow.badge}
              </Badge>
              <CardTitle className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
                {siteConfig.workflow.title}
              </CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              {siteConfig.workflow.description}
            </CardDescription>
          </div>
          
          {/* Visual Mode Switcher (Business Workspace vs Technical JSON) */}
          <div className="flex items-center gap-1 bg-[var(--color-surface)] p-1 rounded-[6px] border border-[var(--color-border)] shadow-2xs self-start sm:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setViewMode('workspace')}
              className={`text-xs font-semibold px-3 py-1 rounded-[4px] transition-all cursor-pointer ${
                viewMode === 'workspace'
                  ? 'bg-[#533AFD] text-white shadow-xs'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Workspace View
            </button>
            <button
              type="button"
              onClick={() => setViewMode('technical')}
              className={`text-xs font-mono px-3 py-1 rounded-[4px] transition-all cursor-pointer ${
                viewMode === 'technical'
                  ? 'bg-[#533AFD] text-white shadow-xs'
                  : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
              }`}
            >
              Raw Schema
            </button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4 sm:p-6 space-y-6">
        {/* Input Form Area */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono">
              {siteConfig.workflow.inputLabel}
            </label>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setInputText('Wembley Arena Tier-1 Digital Hospitality & Court-side LED package for Enterprise Cloud Platform ($2.5M Target)')}
                className="text-[11px] text-[#533AFD] dark:text-[#7A68FF] hover:underline font-mono cursor-pointer"
              >
                Preset 1: Arena LED
              </button>
              <span className="text-slate-300">|</span>
              <button
                type="button"
                onClick={() => setInputText('Formula 1 Grand Prix Paddock Club & Trackside LED for Cross-Border FinTech ($4.5M Target)')}
                className="text-[11px] text-[#533AFD] dark:text-[#7A68FF] hover:underline font-mono cursor-pointer"
              >
                Preset 2: Motorsport
              </button>
            </div>
          </div>
          <Textarea
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={2}
            className="text-xs sm:text-sm font-sans resize-none border-[var(--color-border)] bg-[var(--color-panel-subtle)] focus:border-[#533AFD]"
            placeholder={siteConfig.workflow.inputPlaceholder}
          />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
            <span className="text-[11px] text-[var(--color-text-muted)] font-mono">
              Connected Agent Pipeline: Ingest CAD → Compute FMV → Scan Exclusivity → Synthesize Deck
            </span>
            <Button
              onClick={handleExecute}
              disabled={loading}
              className="h-9 px-5 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white shadow-2xs shrink-0 rounded-[4px] cursor-pointer"
            >
              {loading ? (
                <>
                  <RefreshCw className="h-3.5 w-3.5 mr-2 animate-spin" />
                  Agents Orchestrating...
                </>
              ) : (
                <>
                  <Zap className="h-3.5 w-3.5 mr-1.5 text-white" />
                  {siteConfig.workflow.buttonLabel}
                </>
              )}
            </Button>
          </div>
        </div>

        {/* 5-Stage Agent Context Bus Breadcrumb */}
        <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3">
          <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
            {[
              { num: '1', name: 'Asset Ingest', status: 'done' },
              { num: '2', name: 'FMV Valuation', status: 'done' },
              { num: '3', name: 'Brand Match', status: 'done' },
              { num: '4', name: 'Deck Synthesizer', status: 'done' },
              { num: '5', name: 'Human Approval', status: approved ? 'approved' : 'pending' },
            ].map((stage, idx) => (
              <div key={idx} className="flex items-center gap-1.5">
                <span className={`h-5 w-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  stage.status === 'done' || stage.status === 'approved'
                    ? 'bg-[#00D924] text-black font-extrabold'
                    : 'bg-amber-400 text-black font-extrabold animate-pulse'
                }`}>
                  {stage.status === 'done' || stage.status === 'approved' ? '✓' : stage.num}
                </span>
                <span className={`text-[11px] ${stage.status === 'approved' ? 'text-[#057A55] font-bold' : 'text-[var(--color-text-primary)]'}`}>
                  {stage.name}
                </span>
                {idx < 4 && <ChevronRight className="h-3 w-3 text-[var(--color-text-muted)] mx-0.5" />}
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic View: Workspace View (Business Friendly) vs Technical JSON */}
        {viewMode === 'workspace' && result && (
          <div className="space-y-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 shadow-xs">
            {/* Top Status Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-bold">
                  Active Commercial Proposal
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  {category}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                {approved ? (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-emerald-50 dark:bg-emerald-950 text-[#057A55] dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 text-xs font-bold font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Approved by Rightsholder
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[4px] bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 text-xs font-bold font-mono">
                    <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                    Pending Human Approval
                  </span>
                )}
              </div>
            </div>

            {/* 2-Column Visual Commercial Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
              
              {/* Left Column: Valuation & Matched Brands */}
              <div className="lg:col-span-6 space-y-4">
                {/* Valuation Callout Box */}
                <div className="p-4 rounded-[8px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)]">
                    <span>COMPUTED FAIR MARKET VALUE (FMV)</span>
                    <span className="text-[#057A55] font-bold">Gartner Comp Index</span>
                  </div>
                  <div className="text-3xl font-extrabold font-mono text-[#057A55] dark:text-emerald-400">
                    {valuation}
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] opacity-90 pt-1 leading-relaxed">
                    Benchmarked across 14 comparable premier arena &amp; stadium sponsorship transactions with category exclusivity validation.
                  </p>
                </div>

                {/* High-Affinity Matched Brands */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                    High-Affinity Brand Targets (Zero Conflict)
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {matchedBrands.map((brand, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-2.5 rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] shadow-2xs"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <Building2 className="w-4 h-4 text-[#533AFD] shrink-0" />
                          <span className="text-xs font-bold text-[var(--color-text-primary)] truncate">
                            {brand}
                          </span>
                        </div>
                        <span className="text-[10px] font-mono font-bold text-[#057A55] bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                          {96 - i * 2}% Match
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Strategic Commercial Reasoning */}
                <div className="p-3 rounded-[6px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] space-y-1">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-bold">
                    AI Commercial Strategy
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {summary}
                  </p>
                </div>
              </div>

              {/* Right Column: Visual 12-Slide Pitch Deck Generator & Approval */}
              <div className="lg:col-span-6 space-y-4">
                
                {/* Visual Slide Deck Preview Stage */}
                <div className="rounded-[8px] border border-[var(--color-border)] bg-[#0D1738] text-white p-4 shadow-md space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 pb-2 border-b border-white/15">
                    <span className="flex items-center gap-1.5 font-bold">
                      <FileText className="w-3.5 h-3.5 text-[#00D4FF]" />
                      Bespoke Pitch Deck v3.2 (12 Slides)
                    </span>
                    <span>Slide {activeSlide} of 12</span>
                  </div>

                  {/* Dynamic Visual Slide Card */}
                  <div className="rounded-lg bg-gradient-to-br from-[#1A2550] to-[#0A0E24] p-4 border border-white/10 space-y-2 min-h-[140px] flex flex-col justify-between">
                    {activeSlide === 1 && (
                      <>
                        <div>
                          <div className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-wider">Title Sponsorship Package</div>
                          <div className="text-sm font-bold text-white mt-1">Wembley Arena Tier-1 Court-side LED &amp; Executive Suites</div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                          <span>Target: Global Cloud Platform</span>
                          <span className="text-emerald-400 font-bold">$2.48M Valuation</span>
                        </div>
                      </>
                    )}
                    {activeSlide === 2 && (
                      <>
                        <div>
                          <div className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-wider">Audience &amp; Demographics</div>
                          <div className="text-sm font-bold text-white mt-1">2.4M Annual Attendees • 68% C-Suite &amp; Tech Decision Makers</div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                          <span>Broadcast Reach: 18.2M</span>
                          <span className="text-emerald-400 font-bold">38m Screentime</span>
                        </div>
                      </>
                    )}
                    {activeSlide === 3 && (
                      <>
                        <div>
                          <div className="text-[9px] font-mono text-[#00D4FF] uppercase tracking-wider">Deliverable Activation Matrix</div>
                          <div className="text-sm font-bold text-white mt-1">360m LED Ribbon + 400 VIP Passes + 4 Co-Branded Activations</div>
                        </div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-300">
                          <span>Contract SLA Guard Active</span>
                          <span className="text-emerald-400 font-bold">0 Breached Deliverables</span>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Slide Switcher Controls */}
                  <div className="flex items-center justify-between pt-1">
                    <div className="flex gap-1.5">
                      {[1, 2, 3].map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setActiveSlide(s)}
                          className={`text-[10px] font-mono px-2 py-0.5 rounded cursor-pointer ${
                            activeSlide === s
                              ? 'bg-[#533AFD] text-white font-bold'
                              : 'bg-white/10 text-slate-300 hover:bg-white/20'
                          }`}
                        >
                          Slide {s}
                        </button>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[10px] font-mono text-slate-300">
                      <span className="flex items-center gap-1 text-[#00D4FF]">
                        <Eye className="w-3 h-3" /> Preview Ready
                      </span>
                    </div>
                  </div>
                </div>

                {/* Human-in-the-loop Approval Button */}
                <div className="pt-1">
                  {!approved ? (
                    <Button
                      onClick={() => setApproved(true)}
                      className="w-full h-11 text-xs font-bold bg-[#057A55] hover:bg-[#046c4b] text-white shadow-md rounded-[4px] flex items-center justify-center gap-2 cursor-pointer transition-all"
                    >
                      <ThumbsUp className="w-4 h-4" />
                      <span>Approve Proposal &amp; Dispatch to Brand Outreach</span>
                    </Button>
                  ) : (
                    <div className="w-full p-3 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-center space-y-1">
                      <div className="text-xs font-bold text-[#057A55] dark:text-emerald-300 flex items-center justify-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4" />
                        Approved by Rightsholder Commercial Director
                      </div>
                      <div className="text-[11px] font-mono text-[var(--color-text-secondary)]">
                        Handoff dispatched to Contract Obligation Guard &amp; Inngest Event Queue.
                      </div>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </div>
        )}

        {/* Technical JSON / REST Schema Mode */}
        {viewMode === 'technical' && result && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5 text-[#533AFD] dark:text-[#7A68FF]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-primary)] font-mono">
                  Verified Engine Output (REST JSON Payload)
                </span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                className="h-7 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] font-mono"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 mr-1 text-[#057A55]" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 mr-1" />
                    Copy JSON
                  </>
                )}
              </Button>
            </div>
            <pre className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto max-h-72 leading-relaxed">
              {JSON.stringify(result, null, 2)}
            </pre>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
