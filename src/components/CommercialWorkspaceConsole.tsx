'use client';

import React, { useState } from 'react';
import {
  Building2,
  Users,
  ShieldCheck,
  Calendar,
  FileText,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Download,
  Eye,
  Layers,
  ChevronRight,
  Check,
  Clock,
  Tv,
  BadgeCheck,
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

type WorkspaceRole = 'rightsholder' | 'consultant' | 'partner';

export function CommercialWorkspaceConsole() {
  const [role, setRole] = useState<WorkspaceRole>('rightsholder');
  const [scheduled, setScheduled] = useState(false);
  const [partnerApproved, setPartnerApproved] = useState(false);
  const [activePipelineStage, setActivePipelineStage] = useState<'prospect' | 'pitch' | 'contract' | 'active'>('contract');

  return (
    <section id="workspaces" className="scroll-mt-20">
      <div className="mb-4 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#533AFD] dark:text-[#7A68FF]">
            Multi-Tenant Surface Architecture
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-[var(--color-text-primary)]">
            Dedicated Workspaces Across the Sponsorship Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1">
            Simulate the 3 core platform surfaces: In-house rightsholder sales teams, agency advisory consultants, and brand sponsor portals.
          </p>
        </div>

        {/* 3-Way Role Switcher */}
        <div className="flex items-center gap-1 bg-[var(--color-surface)] p-1 rounded-[6px] border border-[var(--color-border)] shadow-xs self-start sm:self-auto shrink-0">
          <button
            type="button"
            onClick={() => setRole('rightsholder')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-[4px] transition-all cursor-pointer flex items-center gap-1.5 ${
              role === 'rightsholder'
                ? 'bg-[#533AFD] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Rightsholder Team</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('consultant')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-[4px] transition-all cursor-pointer flex items-center gap-1.5 ${
              role === 'consultant'
                ? 'bg-[#533AFD] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>Consultant Advisor</span>
          </button>
          <button
            type="button"
            onClick={() => setRole('partner')}
            className={`text-xs font-semibold px-3 py-1.5 rounded-[4px] transition-all cursor-pointer flex items-center gap-1.5 ${
              role === 'partner'
                ? 'bg-[#533AFD] text-white shadow-xs'
                : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Brand Partner Portal</span>
          </button>
        </div>
      </div>

      <Card className="w-full border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs overflow-hidden">
        {/* Surface 1: Rightsholder Team Workspace */}
        {role === 'rightsholder' && (
          <div className="p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
              <div>
                <Badge variant="outline" className="bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20 text-xs font-semibold mb-1">
                  In-House Commercial Workspace
                </Badge>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Wembley Arena &amp; Entertainment District (Client Team)
                </h3>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-secondary)]">
                Active Tier: <strong className="text-[var(--color-text-primary)]">Enterprise Rightsholder License</strong>
              </div>
            </div>

            {/* 3-Column Lifecycle Operations Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Box 1: Document & CAD Intake */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">1. Structured Intake</span>
                  <span className="text-[#057A55] font-bold">14 Files Audited</span>
                </div>
                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[var(--color-text-primary)] font-sans truncate">Wembley_Bowl_LED_Specs.dwg</span>
                    <span className="text-xs font-semibold text-[#057A55]">Parsed</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[var(--color-text-primary)] font-sans truncate">Tier1_Rate_Card_2026.pdf</span>
                    <span className="text-xs font-semibold text-[#057A55]">Indexed</span>
                  </div>
                  <div className="p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-[var(--color-text-primary)] font-sans truncate">Existing_Partners_Exclusivity.json</span>
                    <span className="text-xs font-semibold text-[#057A55]">Verified</span>
                  </div>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  Everything downstream reasons directly from these central audited documents.
                </p>
              </div>

              {/* Box 2: Sponsorship CRM Kanban */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">2. Sponsorship CRM Pipeline</span>
                  <span className="text-[#533AFD] font-bold">$14.2M Pipeline</span>
                </div>
                <div className="space-y-1.5">
                  {[
                    { id: 'prospect', label: '1. AI Prospecting', count: '12 Brands', active: activePipelineStage === 'prospect' },
                    { id: 'pitch', label: '2. Decks Dispatched', count: '6 Pitches', active: activePipelineStage === 'pitch' },
                    { id: 'contract', label: '3. Legal & Contracts', count: '4 Agreements', active: activePipelineStage === 'contract' },
                    { id: 'active', label: '4. Live & Servicing', count: '8 Partners', active: activePipelineStage === 'active' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setActivePipelineStage(s.id as any)}
                      className={`w-full p-2 rounded text-xs flex items-center justify-between transition-all cursor-pointer ${
                        s.active
                          ? 'bg-[#533AFD] text-white font-bold shadow-xs'
                          : 'bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      <span>{s.label}</span>
                      <span className="text-xs font-bold text-[#533AFD]">{s.count}</span>
                    </button>
                  ))}
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed font-medium">
                  Click any stage to filter active negotiations and follow-ups.
                </p>
              </div>

              {/* Box 3: Automated Client Collateral */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">3. Sales Collateral Engine</span>
                  <span className="text-[#057A55] font-bold">Live AI Drafting</span>
                </div>
                <div className="space-y-2">
                  <div className="p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] space-y-1">
                    <div className="flex items-center justify-between text-xs font-bold text-[var(--color-text-primary)]">
                      <span className="flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-[#533AFD]" />
                        Cloudflare Bespoke Pitch Deck
                      </span>
                      <span className="text-xs font-bold text-[#057A55]">v3.2 Ready</span>
                    </div>
                    <p className="text-[11px] text-[var(--color-text-secondary)]">
                      12 slides automatically branded with Cloudflare color palette and Wembley LED 3D placement.
                    </p>
                  </div>
                  <Button
                    onClick={() => alert('Exporting Bespoke Executive Pitch Deck PDF...')}
                    className="w-full h-8 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white rounded-[4px] cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 mr-1" />
                    Download Generated Deck
                  </Button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Surface 2: Consultant Command Center (Back-End Advisory) */}
        {role === 'consultant' && (
          <div className="p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
              <div>
                <Badge variant="outline" className="bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20 text-xs font-semibold mb-1">
                  Consultant Advisory Command Center
                </Badge>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Commercial Consulting Back-End (Agency Oversight)
                </h3>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-secondary)]">
                Supervising: <strong className="text-[var(--color-text-primary)]">84 Rightsholder Properties ($42.8M FMV)</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
              
              {/* Left Column: Properties Supervised */}
              <div className="lg:col-span-7 space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-semibold">
                  Active Client Portfolios &amp; Commercial Health
                </div>
                <div className="space-y-2">
                  {[
                    { name: 'Apex Motorsport GP', type: 'Motorsport Venue', value: '$4.5M', agent: 'Brand Match Complete', status: 'Consultant Review Needed' },
                    { name: 'Metropolitan Arena Group', type: 'Indoor Stadium', value: '$8.2M', agent: 'Obligation Guard Live', status: 'SLA Clean (100%)' },
                    { name: 'Symphony Hall Cultural Trust', type: 'Arts & Culture', value: '$1.8M', agent: 'Pitch Deck Generated', status: 'Awaiting Pricing Signoff' },
                  ].map((p, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                    >
                      <div>
                        <div className="font-bold text-[var(--color-text-primary)]">{p.name}</div>
                        <div className="text-[11px] text-[var(--color-text-secondary)] font-mono">{p.type} • {p.agent}</div>
                      </div>
                      <div className="flex sm:flex-col items-center sm:items-end justify-between">
                        <span className="font-mono font-bold text-[#057A55]">{p.value}</span>
                        <span className="text-xs text-[var(--color-text-secondary)] font-medium">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Consulting Session Scheduler */}
              <div className="lg:col-span-5 p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-4">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold uppercase text-[var(--color-text-primary)] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#533AFD]" />
                    Schedule Commercial Advisory Session
                  </span>
                  <span className="text-xs text-[#533AFD] font-bold">Senior Partner</span>
                </div>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  Rightsholders can book 1-on-1 strategy sessions with commercial consultants to refine rate cards, resolve exclusivity conflicts, or prepare high-stakes pitches.
                </p>

                <div className="space-y-2 text-xs font-mono">
                  <div className="p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-between">
                    <span>Available Slot: Today at 4:30 PM GST</span>
                    <span className="text-[#057A55] font-bold">Open</span>
                  </div>
                  <div className="p-2.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] flex items-center justify-between">
                    <span>Topic: F1 Trackside Exclusivity Resolution</span>
                    <span className="text-[#533AFD]">Strategy</span>
                  </div>
                </div>

                {!scheduled ? (
                  <Button
                    onClick={() => setScheduled(true)}
                    className="w-full h-9 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white rounded-[4px] cursor-pointer"
                  >
                    Confirm 45-Min Advisory Session
                  </Button>
                ) : (
                  <div className="p-3 rounded bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-700 text-center space-y-1">
                    <div className="text-xs font-bold text-[#057A55] dark:text-emerald-300 flex items-center justify-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" />
                      Session Confirmed for 4:30 PM GST
                    </div>
                    <div className="text-[11px] font-mono text-[var(--color-text-secondary)]">
                      Calendar invite &amp; pre-read dossier dispatched to in-house team.
                    </div>
                  </div>
                )}
              </div>

            </div>
          </div>
        )}

        {/* Surface 3: Brand Partner Portal (What Sponsors See) */}
        {role === 'partner' && (
          <div className="p-5 sm:p-6 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[var(--color-border)]">
              <div>
                <Badge variant="outline" className="bg-[#057A55]/10 text-[#057A55] dark:bg-emerald-950/40 dark:text-emerald-300 border-[#057A55]/20 text-xs font-semibold mb-1">
                  Brand Partner Delivery Portal
                </Badge>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
                  Cloudflare Global Infrastructure Partnership
                </h3>
              </div>
              <div className="text-xs font-mono text-[var(--color-text-secondary)]">
                Contract Status: <strong className="text-[#057A55]">Active • 100% SLA Fulfillment</strong>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* Metric 1: Broadcast Telemetry */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Broadcast Exposure</span>
                  <Tv className="w-3.5 h-3.5 text-[#533AFD]" />
                </div>
                <div className="text-2xl font-bold font-mono text-[var(--color-text-primary)]">
                  38m 42s
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  Verified camera-facing LED ribbon screentime across 6 live international broadcast feeds.
                </p>
              </div>

              {/* Metric 2: Hospitality Fulfillment */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--color-text-muted)] uppercase tracking-wider">VIP Suite Passes</span>
                  <BadgeCheck className="w-3.5 h-3.5 text-[#057A55]" />
                </div>
                <div className="text-2xl font-bold font-mono text-[#057A55]">
                  400 / 400
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)]">
                  100% executive passes issued via Apple Wallet with zero admission issues.
                </p>
              </div>

              {/* Metric 3: Partner 1-Click Approval */}
              <div className="p-4 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel-subtle)] space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Signage Approval</span>
                    <span className="text-[#533AFD] font-bold font-mono">Q3 Artwork</span>
                  </div>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1">
                    Review and sign off on court-side 4K LED creative assets for upcoming quarter.
                  </p>
                </div>
                
                {!partnerApproved ? (
                  <Button
                    onClick={() => setPartnerApproved(true)}
                    className="w-full h-8 text-xs font-semibold bg-[#057A55] hover:bg-[#046c4b] text-white rounded-[4px] cursor-pointer"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                    Approve LED Artwork (1-Click)
                  </Button>
                ) : (
                  <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950 text-center text-xs font-bold text-[#057A55] dark:text-emerald-300 font-mono">
                    ✓ Artwork Approved by Brand Partner
                  </div>
                )}
              </div>

            </div>
          </div>
        )}
      </Card>
    </section>
  );
}
