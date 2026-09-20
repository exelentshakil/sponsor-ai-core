'use client';

import React, { useState } from 'react';
import {
  ChevronRight,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Play,
  CheckCircle2,
  RefreshCw,
  Radio,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import { StripeWaveCanvas } from '@/components/StripeWaveCanvas';

export function StripeHero({
  onLaunchCockpit,
  onExploreSchemas,
  onExplore,
}: {
  onLaunchCockpit?: () => void;
  onExploreSchemas?: () => void;
  onExplore?: () => void;
}) {
  const [streamSimulating, setStreamSimulating] = useState(false);
  const [simulatedChunks, setSimulatedChunks] = useState(16);

  const handleSimulateStream = () => {
    setStreamSimulating(true);
    setSimulatedChunks(0);
    const interval = setInterval(() => {
      setSimulatedChunks((prev) => {
        if (prev >= 24) {
          clearInterval(interval);
          setStreamSimulating(false);
          return 24;
        }
        return prev + 4;
      });
    }, 120);
  };

  return (
    <section className="relative isolate overflow-hidden pt-6 pb-12 sm:pt-10 sm:pb-20">
      {/* Stripe Authentic 3D WebGL Iridescent Wave Ribbon Canvas (Anchored to Right Half with Smooth Left Mask) */}
      <div className="pointer-events-none absolute -top-8 right-0 -z-10 w-full lg:w-[54%] xl:w-[50%] h-[480px] sm:h-[600px] lg:h-[700px] opacity-100 overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,transparent_8%,black_36%,black_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,transparent_8%,black_36%,black_100%)]">
        <StripeWaveCanvas />
      </div>

      {/* Stripe Authentic Ambient Radial Glow Aura (Subtle Blurple & Electric Cyan, Zero Muddy Cast) */}
      <div className="pointer-events-none absolute -top-24 right-0 -z-20 h-[550px] w-[550px] rounded-full bg-gradient-to-br from-[#533AFD]/15 via-[#00D4FF]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-20 -z-20 h-[380px] w-[380px] rounded-full bg-gradient-to-tr from-[#533AFD]/8 via-[#7A68FF]/6 to-transparent blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Two-Tone Typography, Value Prop & Direct Action Triggers (100% High-Contrast Clean Background) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Live Telemetry Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/90 px-3 py-1 text-xs font-mono text-[var(--color-text-secondary)] shadow-2xs backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00D924] animate-pulse" />
              <span className="font-semibold text-[var(--color-text-primary)]">Rightsholder Network:</span>
              <span>84 Active Sports &amp; Entertainment Properties</span>
              <ChevronRight className="h-3 w-3 text-[var(--color-text-muted)]" />
            </div>

            {/* Master Stripe Two-Tone Typography Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-bold tracking-[-0.025em] text-[var(--color-text-primary)] leading-[1.08]">
                AI-native platform to run your entire commercial sponsorship programme.
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-[var(--color-text-secondary)] font-normal leading-[1.45] max-w-2xl opacity-90">
                From auditing rights inventory and AI brand matching to automated pitch decks, contract obligation tracking, and partner ROI reporting.
              </p>
            </div>

            {/* Stripe Authentic 4px Radius Button Suite */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                onClick={onLaunchCockpit || onExplore}
                className="h-10 px-5 text-sm font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white shadow-2xs rounded-[4px] transition-all cursor-pointer"
              >
                Launch interactive cockpit
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>

              <Button
                variant="outline"
                onClick={onExploreSchemas || onExplore}
                className="h-10 px-5 text-sm font-semibold border-[var(--color-border)] bg-[var(--color-surface)]/90 hover:bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] rounded-[4px] shadow-2xs cursor-pointer backdrop-blur-xs"
              >
                Explore agent architecture
                <ChevronRight className="h-4 w-4 ml-1 text-[var(--color-text-muted)]" />
              </Button>
            </div>

            {/* Stripe Institutional Enterprise Client Logos Strip */}
            <div className="pt-8 border-t border-[var(--color-border)]/80 max-w-2xl">
              <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-3">
                Powering rights holders across global sports, music festivals &amp; cultural arenas
              </p>
              <div className="flex flex-wrap items-center justify-between gap-5 opacity-80 grayscale hover:grayscale-0 transition-all">
                <span className="text-sm font-bold tracking-tighter text-[var(--color-text-primary)] font-sans">Formula 1</span>
                <span className="text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Premier League</span>
                <span className="text-sm font-semibold tracking-wide text-[var(--color-text-primary)] font-sans">Live Nation</span>
                <span className="text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">ATP Tour</span>
                <span className="text-sm font-semibold tracking-tight text-[var(--color-text-primary)] font-sans">MotoGP</span>
                <span className="text-sm font-bold tracking-tight text-[var(--color-text-primary)] font-sans">Wembley</span>
                <span className="text-sm font-medium tracking-tight text-[var(--color-text-primary)] font-sans">O2 Arena</span>
              </div>
            </div>
          </div>

          {/* Right Column: Floating Interactive Glass Telemetry HUD (Over Wave Canvas, Zero Whitespace) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-md rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/85 backdrop-blur-xl p-5 sm:p-6 shadow-xl space-y-4 relative">
              {/* Card Aura Header */}
              <div className="flex items-center justify-between pb-3 border-b border-[var(--color-border)]/70">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse" />
                  <span className="text-xs font-mono font-bold text-[var(--color-text-primary)]">
                    Edge Engine • Multi-Agent Context Bus
                  </span>
                </div>
                <span className="rounded-[4px] bg-[#533AFD]/10 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] px-2 py-0.5 text-[10px] font-mono font-semibold border border-[#533AFD]/20">
                  Sub-50ms Handoff
                </span>
              </div>

              {/* Real-time Subsystem Status Rows */}
              <div className="space-y-2.5 font-mono text-xs">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70">
                  <div className="space-y-0.5">
                    <div className="text-[10px] text-[var(--color-text-muted)]">ASSET AUDIT &amp; VALUATION</div>
                    <div className="font-bold text-[var(--color-text-primary)]">1,420 Inventory Units</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#057A55] dark:text-emerald-400">$42.8M FMV</div>
                    <div className="text-[10px] text-slate-400">14 comp models</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70">
                  <div className="space-y-0.5">
                    <div className="text-[10px] text-[var(--color-text-muted)]">BRAND MATCHING AGENT</div>
                    <div className="font-bold text-[var(--color-text-primary)]">Category Exclusivity OK</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#533AFD] dark:text-[#7A68FF]">94.8% Affinity</div>
                    <div className="text-[10px] text-slate-400">FinTech &amp; Cloud Tier 1</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--color-panel-subtle)] border border-[var(--color-border)]/70">
                  <div className="space-y-0.5">
                    <div className="text-[10px] text-[var(--color-text-muted)]">CONTRACT OBLIGATION GUARD</div>
                    <div className="font-bold text-[var(--color-text-primary)]">218 Verified Deliverables</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-bold text-[#057A55] dark:text-emerald-400">99.4% SLA</div>
                    <div className="text-[10px] text-slate-400">0 breached perks</div>
                  </div>
                </div>
              </div>

              {/* Interactive Multi-Agent Context Stream Simulator */}
              <div className="pt-2">
                <div className="rounded-lg bg-[#0A0D14] text-slate-200 p-3 font-mono text-[11px] space-y-2 border border-slate-800">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 pb-1 border-b border-slate-800">
                    <span className="flex items-center gap-1.5">
                      <Radio className="w-3 h-3 text-[#00D4FF] animate-pulse" />
                      Agent Handoff Pipeline
                    </span>
                    <span>{simulatedChunks} / 24 Tasks Synced</span>
                  </div>

                  {/* Buffer Progress Bar */}
                  <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-[#533AFD] via-[#00D4FF] to-emerald-400 h-full rounded-full transition-all duration-300"
                      style={{ width: `${(simulatedChunks / 24) * 100}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[10px] text-slate-400">
                      Context Sync: <strong className="text-emerald-400">Audit → Deck → SLA</strong>
                    </span>
                    <button
                      type="button"
                      disabled={streamSimulating}
                      onClick={handleSimulateStream}
                      className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#00D4FF] hover:text-white transition-colors cursor-pointer disabled:opacity-50"
                    >
                      {streamSimulating ? (
                        <>
                          <RefreshCw className="w-2.5 h-2.5 animate-spin" />
                          Handoff Running...
                        </>
                      ) : (
                        <>
                          <Play className="w-2.5 h-2.5" />
                          Simulate Handoff
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Status Pill Footer */}
              <div className="flex items-center justify-between text-[10px] font-mono text-[var(--color-text-muted)] pt-1">
                <span className="flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-[#00D924]" />
                  Human-in-the-Loop Signoff Active
                </span>
                <span>Inngest Multi-Agent Queue</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
