'use client';

import React, { useState, useEffect } from 'react';
import {
  Activity,
  ShieldCheck,
  Cpu,
  ArrowUpRight,
  Zap,
  CheckCircle2,
  Radio,
  Lock,
  Sparkles,
  Layers,
} from 'lucide-react';
import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import { siteConfig } from '@/config/site';

// 4 Distinct Micro Sparkline Datasets for High-Signal Sponsorship Visual Diversity
const inventoryValuationTrend = [
  { t: 'Jan', v: 26.4 },
  { t: 'Mar', v: 29.8 },
  { t: 'May', v: 33.2 },
  { t: 'Jul', v: 36.5 },
  { t: 'Sep', v: 39.1 },
  { t: 'Nov', v: 41.2 },
  { t: 'Dec', v: 42.8 },
];

const sponsorshipCategoryData = [
  { domain: 'Naming Rights', v: 98.4 },
  { domain: 'LED Ribbons', v: 99.2 },
  { domain: 'Kit Patches', v: 97.8 },
  { domain: 'VIP Suites', v: 99.6 },
  { domain: 'Pouring Rights', v: 98.9 },
  { domain: 'Digital Reach', v: 99.5 },
];

const obligationDeliveryVelocity = [
  { day: 'Mon', v: 98.8 },
  { day: 'Tue', v: 99.1 },
  { day: 'Wed', v: 99.2 },
  { day: 'Thu', v: 99.4 },
  { day: 'Fri', v: 99.4 },
  { day: 'Sat', v: 99.5 },
  { day: 'Sun', v: 99.4 },
];

const subsystemAgentData = [
  { node: 'Asset Audit', v: 100 },
  { node: 'Brand Match', v: 100 },
  { node: 'Deck Synth', v: 100 },
  { node: 'CRM Sync', v: 100 },
  { node: 'Obligation Guard', v: 100 },
  { node: 'Partner Portal', v: 100 },
  { node: 'Inngest Bus', v: 100 },
];

const telemetryStream = [
  { time: '09:00', ops: 3820, latency: 14.1 },
  { time: '10:00', ops: 4210, latency: 13.8 },
  { time: '11:00', ops: 5120, latency: 14.6 },
  { time: '12:00', ops: 5040, latency: 14.2 },
  { time: '13:00', ops: 5690, latency: 13.9 },
  { time: '14:00', ops: 6240, latency: 13.5 },
  { time: '15:00', ops: 5910, latency: 13.8 },
  { time: '16:00', ops: 6450, latency: 13.2 },
  { time: '17:00', ops: 6180, latency: 13.6 },
];

export function MetricsGrid() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const icons = [Layers, Sparkles, ShieldCheck, Cpu];
  const badgeStyles = [
    'bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/15 dark:text-[#7A68FF] border-[#533AFD]/20 dark:border-[#7A68FF]/30',
    'bg-emerald-50/80 dark:bg-emerald-950/30 text-[#057A55] dark:text-emerald-300 border-emerald-200/80 dark:border-emerald-800/40',
    'bg-amber-50/80 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300 border-amber-200/80 dark:border-amber-800/40',
    'bg-teal-50/80 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/40',
  ];

  // Dynamic grid: 4 columns for 4 metrics on desktop
  const gridColsClass =
    siteConfig.metrics.length === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : siteConfig.metrics.length === 2
      ? 'grid-cols-1 sm:grid-cols-2'
      : 'grid-cols-1 md:grid-cols-3';

  // Render varied, custom micro-visualizations per card index
  const renderCardChart = (idx: number) => {
    if (!mounted) return null;

    if (idx === 0) {
      // Card 0: Inventory FMV growth curve (Stripe Blurple gradient area)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={inventoryValuationTrend} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="fmvGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#533AFD" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#533AFD" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                      <span className="font-bold text-[#533AFD] dark:text-[#7A68FF]">${payload[0].value}M</span> FMV
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#533AFD"
              strokeWidth={1.75}
              fill="url(#fmvGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    if (idx === 1) {
      // Card 1: Pipeline Fulfillment by Rights Category (Sleek thin progressive emerald bars)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sponsorshipCategoryData} margin={{ top: 2, right: 2, left: 2, bottom: 0 }} barCategoryGap={4}>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                      {data.domain}: <span className="font-bold text-[#057A55] dark:text-emerald-400">{data.v}%</span>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Bar dataKey="v" radius={[2, 2, 0, 0]} barSize={9}>
              {sponsorshipCategoryData.map((_, barIdx) => (
                <Cell
                  key={`cell-${barIdx}`}
                  fill="#057A55"
                  fillOpacity={0.45 + (barIdx / sponsorshipCategoryData.length) * 0.55}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      );
    }

    if (idx === 2) {
      // Card 2: Contract Obligation Delivery SLA (Amber area curve)
      return (
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={obligationDeliveryVelocity} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
            <defs>
              <linearGradient id="slaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#D97706" stopOpacity={0.28} />
                <stop offset="100%" stopColor="#D97706" stopOpacity={0.0} />
              </linearGradient>
            </defs>
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                      {data.day}: <span className="font-bold text-amber-600 dark:text-amber-400">{data.v}%</span> SLA
                    </div>
                  );
                }
                return null;
              }}
            />
            <Area
              type="monotone"
              dataKey="v"
              stroke="#D97706"
              strokeWidth={1.75}
              fill="url(#slaGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      );
    }

    // Card 3: 100% Connected Multi-Agent Pipeline Health
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={subsystemAgentData} margin={{ top: 2, right: 2, left: 2, bottom: 0 }}>
          <defs>
            <linearGradient id="agentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#0d9488" stopOpacity={0.28} />
              <stop offset="100%" stopColor="#0d9488" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload;
                return (
                  <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-0.5 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                    {data.node}: <span className="font-bold text-teal-600 dark:text-teal-400">{data.v}%</span> Healthy
                  </div>
                );
              }
              return null;
            }}
          />
          <Area
            type="stepAfter"
            dataKey="v"
            stroke="#0d9488"
            strokeWidth={1.75}
            fill="url(#agentGrad)"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="space-y-6">
      {/* 4-Column High-Density KPI Cards */}
      <div className={`grid ${gridColsClass} gap-4`}>
        {siteConfig.metrics.map((metric, idx) => {
          const Icon = icons[idx % icons.length];
          const badgeStyle = badgeStyles[idx % badgeStyles.length];

          return (
            <div
              key={metric.id}
              className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className={`inline-flex items-center gap-1 rounded-[4px] px-2 py-0.5 text-[10px] font-mono font-semibold border ${badgeStyle}`}>
                  {metric.badge}
                </span>
                <span className="p-1 rounded-[4px] bg-[var(--color-panel-subtle)] text-[var(--color-text-secondary)]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
              </div>

              <div>
                <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] font-medium">
                  {metric.title}
                </div>
                <div className="flex items-baseline gap-2 mt-1">
                  <span className="text-2xl font-bold font-mono tracking-tight text-[var(--color-text-primary)]">
                    {metric.value}
                  </span>
                  <span className="inline-flex items-center text-xs font-mono font-semibold text-[#057A55] dark:text-emerald-400">
                    <ArrowUpRight className="h-3 w-3 mr-0.5" />
                    {metric.change}
                  </span>
                </div>
                <p className="text-[11px] text-[var(--color-text-secondary)] opacity-80 mt-1 leading-snug">
                  {metric.subtext}
                </p>
              </div>

              {/* Distinct Micro Sparkline */}
              <div className="h-10 w-full pt-1">
                {renderCardChart(idx)}
              </div>
            </div>
          );
        })}
      </div>

      {/* Real-time Sub-50ms Telemetry Stream Strip */}
      <div className="rounded-[6px] border border-[var(--color-border)] bg-[var(--color-surface)] p-4 shadow-2xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3 pb-3 border-b border-[var(--color-border)]">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#00D924] animate-pulse" />
            <span className="text-xs font-mono font-bold text-[var(--color-text-primary)]">
              Multi-Agent Context Bus • Sub-50ms Handoff Telemetry
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono text-[var(--color-text-secondary)]">
            <span>Throughput: <strong className="text-[var(--color-text-primary)]">6,450 handoffs/min</strong></span>
            <span>P99: <strong className="text-[#057A55] dark:text-emerald-400">13.2ms</strong></span>
          </div>
        </div>

        {/* Detailed Horizontal Telemetry Bar */}
        <div className="h-14 w-full">
          {mounted && (
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={telemetryStream} margin={{ top: 2, right: 0, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="telemetryGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#533AFD" stopOpacity={0.22} />
                    <stop offset="100%" stopColor="#533AFD" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <Tooltip
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="rounded-[4px] bg-[var(--color-surface)] border border-[var(--color-border)] px-2 py-1 text-[10px] font-mono shadow-xs text-[var(--color-text-primary)]">
                          <div>Time: {data.time}</div>
                          <div>Ops: <strong className="text-[#533AFD]">{data.ops}</strong></div>
                          <div>P99: <strong className="text-[#057A55]">{data.latency}ms</strong></div>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="ops"
                  stroke="#533AFD"
                  strokeWidth={1.5}
                  fill="url(#telemetryGrad)"
                />
              </AreaChart>
            </ResponsiveContainer>
          )}
        </div>
      </div>
    </div>
  );
}
