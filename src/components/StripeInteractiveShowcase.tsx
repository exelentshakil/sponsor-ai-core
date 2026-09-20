'use client';

import React, { useState } from 'react';
import {
  Layers,
  Sparkles,
  Search,
  FileText,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Cpu,
  Zap,
  RefreshCw,
  Sliders,
  DollarSign,
  Radio,
  Lock,
  ArrowRight,
  TrendingUp,
  Share2,
} from 'lucide-react';
import { siteConfig } from '@/config/site';

export function StripeInteractiveShowcase() {
  // Interactive State for Card 1: Asset Intake & Valuation Selector
  const [selectedAsset, setSelectedAsset] = useState<'led' | 'naming' | 'jersey' | 'hospitality'>('led');
  const [valuing, setValuing] = useState(false);

  // Interactive State for Card 2: Brand Match Category Filter
  const [brandCategory, setBrandCategory] = useState<'fintech' | 'automotive' | 'telco' | 'beverage'>('fintech');

  // Interactive State for Card 3: Pitch Deck Generator
  const [deckFormat, setDeckFormat] = useState<'presentation' | 'rate-card' | 'executive'>('presentation');
  const [generatingDeck, setGeneratingDeck] = useState(false);
  const [deckReady, setDeckReady] = useState(true);

  // Interactive State for Card 4: CRM Pipeline Stage
  const [crmStage, setCrmStage] = useState<'audit' | 'pitch' | 'contract' | 'active'>('contract');

  // Interactive State for Card 5: Obligation Checklist
  const [checkedDeliverables, setCheckedDeliverables] = useState<number[]>([1, 2, 3]);

  // Interactive State for Card 6: Partner Portal View
  const [partnerFilter, setPartnerFilter] = useState<'broadcast' | 'hospitality' | 'digital'>('broadcast');

  const assetValues = {
    led: { name: '360° Courtside LED Ribbon', fmv: '$1,850,000 / season', comps: '14 UK Arena comps' },
    naming: { name: 'Arena Main Naming Rights', fmv: '$6,400,000 / yr', comps: '8 European Tier-1 Comps' },
    jersey: { name: 'Front-of-Kit Primary Partner', fmv: '$4,200,000 / yr', comps: 'Premier League Matrix' },
    hospitality: { name: 'VIP Executive Box Suite (x4)', fmv: '$950,000 / season', comps: 'Corporate Hospitality Index' },
  };

  const brandMatches = {
    fintech: { target: 'Cloudflare & Stripe', affinity: '96.4%', exclusivity: 'Clear • Zero Conflicts' },
    automotive: { target: 'Porsche & Audi EV', affinity: '92.1%', exclusivity: 'Clear • Zero Conflicts' },
    telco: { target: 'Aether 5G & Vodafone', affinity: '94.8%', exclusivity: 'Clear • Zero Conflicts' },
    beverage: { target: 'Red Bull & Liquid Death', affinity: '91.3%', exclusivity: 'Pouring Rights Open' },
  };

  const handleToggleDeliverable = (id: number) => {
    setCheckedDeliverables((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section className="py-16 sm:py-24 border-t border-[var(--color-border)] relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Stripe Two-Tone Category Eyebrow & Master Title */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#533AFD]/20 bg-[#533AFD]/8 px-3 py-1 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Connected Multi-Agent Platform</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-tight">
            Six connected AI agents.{' '}
            <span className="text-[var(--color-text-secondary)] opacity-75 font-normal">
              One unified commercial sponsorship lifecycle from asset audit to contract fulfillment.
            </span>
          </h2>
        </div>

        {/* 6-Card Interactive Moving Elements Grid (Stripe Section 2 Architecture) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Asset Intake & Valuation Store */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden relative">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 1: Asset Audit &amp; Intake
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Layers className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Structured inventory valuation
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Ingest CADs, past contracts, and rate cards to compute real-time fair market value (FMV).
              </p>
            </div>

            {/* Interactive Asset Selector Mockup */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-2 gap-1.5">
                {(['led', 'naming', 'jersey', 'hospitality'] as const).map((key) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => {
                      setSelectedAsset(key);
                      setValuing(true);
                      setTimeout(() => setValuing(false), 300);
                    }}
                    className={`text-[11px] font-mono py-1.5 px-2 rounded-[4px] text-left border transition-all cursor-pointer ${
                      selectedAsset === key
                        ? 'bg-[#533AFD]/10 border-[#533AFD] text-[#533AFD] font-bold dark:bg-[#7A68FF]/20 dark:text-[#7A68FF]'
                        : 'border-[var(--color-border)] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {key === 'led' && 'LED Ribbon'}
                    {key === 'naming' && 'Naming Rights'}
                    {key === 'jersey' && 'Jersey Kit'}
                    {key === 'hospitality' && 'VIP Suites'}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] bg-[var(--color-panel-subtle)] border border-[var(--color-border)] p-3 space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                  <span>AUDITED FMV BENCHMARK</span>
                  <span>{valuing ? 'Calculating...' : 'Gartner Sports Index'}</span>
                </div>
                <div className="text-xl font-bold font-mono text-[#057A55] dark:text-emerald-400">
                  {valuing ? '---' : assetValues[selectedAsset].fmv}
                </div>
                <div className="text-[10px] text-[var(--color-text-secondary)]">
                  {assetValues[selectedAsset].comps}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Auto-Ingested: 1,420 Units</span>
                <span className="text-emerald-500 font-semibold">98.6% Accuracy</span>
              </div>
            </div>
          </div>

          {/* Card 2: Brand Match & Prospecting Agent */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 2: Brand Matcher
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Search className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Brand affinity &amp; exclusivity
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Scan marketing budgets, decision-maker contacts, and resolve category exclusivity conflicts.
              </p>
            </div>

            {/* Interactive Brand Matcher Control */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-4 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['fintech', 'automotive', 'telco', 'beverage'] as const).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setBrandCategory(cat)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      brandCategory === cat
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono">
                  <span className="text-[var(--color-text-muted)]">Target Match</span>
                  <span className="font-bold text-[#533AFD] dark:text-[#7A68FF]">
                    {brandMatches[brandCategory].affinity} Fit
                  </span>
                </div>
                <div className="text-xs font-bold text-[var(--color-text-primary)]">
                  {brandMatches[brandCategory].target}
                </div>
                <div className="flex items-center gap-1.5 text-[10px] text-[#057A55] dark:text-emerald-400 font-mono">
                  <CheckCircle2 className="w-3 h-3" />
                  {brandMatches[brandCategory].exclusivity}
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Scraped Contacts: 48 CMOs</span>
                <span className="text-[#057A55] font-bold">1-Click Outreach</span>
              </div>
            </div>
          </div>

          {/* Card 3: Autonomous Deck & Pitch Synthesizer */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 3: Proposal Synthesizer
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <FileText className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Automated pitch deck generation
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Generate partner-branded presentations, executive one-pagers, and tiered rate card bundles in seconds.
              </p>
            </div>

            {/* Deck Generator Stage */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['presentation', 'rate-card', 'executive'] as const).map((fmt) => (
                  <button
                    key={fmt}
                    type="button"
                    onClick={() => {
                      setDeckFormat(fmt);
                      setGeneratingDeck(true);
                      setTimeout(() => setGeneratingDeck(false), 400);
                    }}
                    className={`text-[9px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      deckFormat === fmt
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {fmt.replace('-', ' ')}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] bg-[#0A0D14] text-slate-200 p-3 font-mono text-[11px] space-y-1.5 border border-slate-800">
                <div className="flex items-center justify-between text-slate-400 text-[10px] pb-1 border-b border-slate-800">
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Bespoke Pitch Deck v3.4
                  </span>
                  <span>{generatingDeck ? 'Compiling...' : '12 Slides Ready'}</span>
                </div>
                <div className="text-slate-300 text-[10px]">
                  {deckFormat === 'presentation' && '12-Slide Partner Pitch • Custom Mockups'}
                  {deckFormat === 'rate-card' && 'Tier 1 / 2 / 3 Rate Cards & Inventory Splits'}
                  {deckFormat === 'executive' && 'C-Suite Summary • ROI Projections & Reach'}
                </div>
                <div className="text-emerald-400 text-[10px] flex items-center justify-between">
                  <span>Export: PDF + Interactive Link</span>
                  <span>4.8 min build</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Brand Colors Auto-Injected</span>
                <span className="text-[#533AFD] font-bold">User Signoff Ready</span>
              </div>
            </div>
          </div>

          {/* Card 4: Sponsorship CRM & Pipeline Stage-Gate */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 4: Commercial CRM
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Briefcase className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Sponsorship CRM &amp; pipeline
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Stage-gate deals, track sales activity, and route approvals between rightsholders and consultants.
              </p>
            </div>

            {/* Interactive Pipeline Stage Toggle */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-4 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['audit', 'pitch', 'contract', 'active'] as const).map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setCrmStage(stage)}
                    className={`text-[9px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      crmStage === stage
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[10px] text-[var(--color-text-muted)]">
                  <span>ACTIVE DEALS IN STAGE</span>
                  <span className="font-bold text-[#533AFD] dark:text-[#7A68FF]">
                    {crmStage === 'audit' && '28 Deals ($18.4M)'}
                    {crmStage === 'pitch' && '34 Deals ($12.8M)'}
                    {crmStage === 'contract' && '14 Deals ($8.2M)'}
                    {crmStage === 'active' && '8 Deals ($3.4M)'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="font-bold truncate max-w-[130px]">Apex Motorsport</span>
                  <span className="text-[#057A55] font-bold">$4,500,000</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-text-primary)]">
                  <span className="font-bold truncate max-w-[130px]">Metro Arena Naming</span>
                  <span className="text-[#057A55] font-bold">$8,200,000</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Stage-Gate Approval: User</span>
                <span className="text-emerald-500 font-semibold">Inngest Sync</span>
              </div>
            </div>
          </div>

          {/* Card 5: Contract Obligation Guard */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 5: Obligation Guard
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <ShieldCheck className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Zero missed contractual deliverables
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Extract deliverables into an operational calendar and eliminate SLA penalties or make-goods.
              </p>
            </div>

            {/* Obligation Checklist Mockup */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-2.5">
              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-2.5 space-y-2 text-xs font-mono">
                {[
                  { id: 1, text: 'Courtside LED: 24 mins broadcast' },
                  { id: 2, text: 'VIP Hospitality: 400 passes issued' },
                  { id: 3, text: 'Social Co-Branding: 4x IG posts' },
                ].map((item) => (
                  <div
                    key={item.id}
                    onClick={() => handleToggleDeliverable(item.id)}
                    className="flex items-center justify-between p-1.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] cursor-pointer hover:border-[#533AFD] transition-colors"
                  >
                    <span className={`text-[11px] truncate ${checkedDeliverables.includes(item.id) ? 'line-through text-slate-400' : 'text-[var(--color-text-primary)] font-bold'}`}>
                      {item.text}
                    </span>
                    <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${checkedDeliverables.includes(item.id) ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400' : 'bg-amber-100 text-amber-700'}`}>
                      {checkedDeliverables.includes(item.id) ? 'FULFILLED' : 'PENDING'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>99.4% Historical Delivery</span>
                <span className="text-[#057A55] font-bold">0 Breached SLAs</span>
              </div>
            </div>
          </div>

          {/* Card 6: Partner Portal & ROI Wrap-up */}
          <div className="rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-2xs hover:shadow-xs transition-all flex flex-col justify-between group overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Agent 6: Partner Portal
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Share2 className="w-4 h-4" />
                </span>
              </div>
              <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                Partner portal &amp; ROI reports
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] opacity-85 leading-relaxed">
                Brand partners verify deliverable execution in real-time with automated post-event wrap-up decks.
              </p>
            </div>

            {/* Partner Portal Telemetry Box */}
            <div className="mt-6 pt-4 border-t border-[var(--color-border)]/70 space-y-3">
              <div className="grid grid-cols-3 gap-1 bg-[var(--color-panel-subtle)] p-1 rounded-[6px] border border-[var(--color-border)]">
                {(['broadcast', 'hospitality', 'digital'] as const).map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setPartnerFilter(filter)}
                    className={`text-[10px] font-mono py-1 rounded-[4px] capitalize font-medium transition-all cursor-pointer ${
                      partnerFilter === filter
                        ? 'bg-[var(--color-surface)] text-[#533AFD] dark:text-[#7A68FF] shadow-xs font-bold'
                        : 'text-[var(--color-text-secondary)]'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>

              <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-3 space-y-1.5 text-xs font-mono">
                <div className="flex justify-between text-[10px] text-[var(--color-text-muted)]">
                  <span>TELEMETRY FEED</span>
                  <span className="font-bold text-[#057A55] dark:text-emerald-400">Live Verified</span>
                </div>
                <div className="flex justify-between text-[var(--color-text-primary)]">
                  <span>Broadcast Screen Time:</span>
                  <span className="font-bold text-[#533AFD]">38m 42s</span>
                </div>
                <div className="flex justify-between text-[var(--color-text-primary)]">
                  <span>Social Engagements:</span>
                  <span className="font-bold text-[#057A55]">1.84M reach</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)]">
                <span>Self-Service Portal</span>
                <span className="text-[#533AFD] font-bold">Automated PDF Wrap-up</span>
              </div>
            </div>
          </div>

        </div>

        {/* Section 6 Architecture Connectivity Graphic: "Connect to existing systems" */}
        <div className="mt-14 rounded-[8px] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xs relative overflow-hidden">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-8">
            <div className="max-w-xl">
              <div className="text-xs font-mono uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF] font-semibold mb-1">
                Systems Orchestration &amp; Integrations
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
                Connect to existing systems with zero downtime
              </h3>
              <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] opacity-85 mt-1.5 leading-relaxed">
                Orchestrate multi-agent context across rights documents, CRM webhooks, and live broadcast feeds with automated Inngest queues and human-in-the-loop approvals.
              </p>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs">
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-[#533AFD]/8 text-[#533AFD] border border-[#533AFD]/20">
                <Zap className="w-3.5 h-3.5" />
                Multi-Tenant Isolated
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[4px] bg-emerald-50 dark:bg-emerald-950/40 text-[#057A55] dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5" />
                Zero-Loss Context Bus
              </span>
            </div>
          </div>

          {/* Visual Animated SVG Architecture Node Diagram */}
          <div className="w-full bg-[var(--color-panel-subtle)] rounded-[6px] border border-[var(--color-border)] p-6 sm:p-8 relative">
            <div className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 text-center font-mono">
              
              {/* Left Ingestion Sources */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Document Store &amp; OCR
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Salesforce / CRM
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Broadcast Telemetry
                </div>
              </div>

              {/* Animated Conduits Left -> Center */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-slate-300 via-[#533AFD] to-[#533AFD] relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#533AFD] animate-ping" />
                </div>
                <span className="text-[10px] text-[#533AFD] font-bold mt-1">mTLS Context Bus</span>
              </div>

              {/* Core Cockpit Engine (Center Node) */}
              <div className="p-5 rounded-[8px] bg-gradient-to-br from-[#0D1738] to-[#1E2954] text-white shadow-lg border border-[#533AFD]/40 space-y-2">
                <div className="inline-flex p-2 rounded-md bg-[#533AFD] text-white">
                  <Cpu className="w-5 h-5" />
                </div>
                <div className="font-bold text-sm tracking-tight">
                  SponsorOS AI Core
                </div>
                <div className="text-[10px] text-slate-300">Multi-Agent State Machine</div>
                <div className="pt-1 flex items-center justify-center gap-1 text-[9px] text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  14.2ms P99 • DLQ Active
                </div>
              </div>

              {/* Animated Conduits Center -> Right */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="w-full h-0.5 bg-gradient-to-r from-[#533AFD] via-[#057A55] to-emerald-400 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                </div>
                <span className="text-[10px] text-[#057A55] dark:text-emerald-400 font-bold mt-1">Lifecycle Bus</span>
              </div>

              {/* Right Output Destinations */}
              <div className="space-y-2">
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Deck Synthesizer
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Obligation Inngest Queue
                </div>
                <div className="p-2.5 rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] shadow-2xs text-xs font-bold text-[var(--color-text-primary)]">
                  Partner Portal Sync
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
