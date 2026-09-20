'use client';

import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Terminal,
  Copy,
  Check,
  Building2,
  DollarSign,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  Eye,
  Sliders,
} from 'lucide-react';
import { siteConfig, type TableRow as RowType } from '@/config/site';

export function DataTableSection() {
  const [selectedRow, setSelectedRow] = useState<RowType | null>(null);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'workspace' | 'schema'>('workspace');

  const getStatusBadge = (status: RowType['status']) => {
    switch (status) {
      case 'verified':
        return (
          <Badge variant="outline" className="bg-emerald-50 dark:bg-emerald-950/40 text-[#057A55] dark:text-emerald-300 border-emerald-300 dark:border-emerald-800 text-[11px] font-mono font-semibold">
            Verified SLA
          </Badge>
        );
      case 'active':
        return (
          <Badge variant="outline" className="bg-[#533AFD]/8 dark:bg-[#7A68FF]/20 text-[#533AFD] dark:text-[#7A68FF] border-[#533AFD]/20 text-[11px] font-mono font-semibold">
            Active Deal
          </Badge>
        );
      case 'queued':
        return (
          <Badge variant="outline" className="bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border-amber-300 dark:border-amber-800 text-[11px] font-mono font-semibold">
            Agent Queued
          </Badge>
        );
      case 'flagged':
        return (
          <Badge variant="outline" className="bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border-rose-300 dark:border-rose-800 text-[11px] font-mono font-semibold">
            Conflict Intercept
          </Badge>
        );
    }
  };

  const handleCopy = (data: Record<string, unknown>) => {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="w-full border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
      <CardHeader className="p-4 sm:p-6 border-b border-[var(--color-border)]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="bg-[#533AFD]/8 text-[#533AFD] dark:bg-[#7A68FF]/20 dark:text-[#7A68FF] border-[#533AFD]/20 text-[11px] font-mono">
                {siteConfig.table.badge}
              </Badge>
              <CardTitle className="text-base sm:text-lg font-bold tracking-tight text-[var(--color-text-primary)]">
                {siteConfig.table.title}
              </CardTitle>
            </div>
            <CardDescription className="text-xs sm:text-sm text-[var(--color-text-secondary)]">
              {siteConfig.table.description}
            </CardDescription>
          </div>
          <div className="text-xs font-mono text-[var(--color-text-muted)]">
            Click any property to inspect commercial contract &amp; deliverables
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader className="bg-[var(--color-panel-subtle)]">
              <TableRow className="border-b border-[var(--color-border)] hover:bg-transparent">
                {siteConfig.table.columns.map((col) => (
                  <TableHead
                    key={col.key}
                    className="text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-secondary)] font-mono py-3 px-4"
                  >
                    {col.label}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {siteConfig.table.rows.map((row) => (
                <TableRow
                  key={row.id}
                  onClick={() => {
                    setSelectedRow(row);
                    setActiveTab('workspace');
                  }}
                  className="border-b border-[var(--color-border)]/60 cursor-pointer hover:bg-[var(--color-panel-subtle)]/70 transition-colors"
                >
                  <TableCell className="py-3 px-4">
                    <div className="font-semibold text-xs text-[var(--color-text-primary)]">
                      {row.entityName}
                    </div>
                    <div className="text-[11px] text-[var(--color-text-muted)] font-mono">
                      ID: {row.id}
                    </div>
                  </TableCell>
                  <TableCell className="text-xs text-[var(--color-text-secondary)] py-3 px-4">
                    {row.category}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    {getStatusBadge(row.status)}
                  </TableCell>
                  <TableCell className="font-mono text-xs text-[#057A55] dark:text-emerald-400 font-bold py-3 px-4">
                    {row.latency}
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <span className="text-xs font-mono text-[var(--color-text-secondary)]">
                      {row.provider}
                    </span>
                  </TableCell>
                  <TableCell className="py-3 px-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedRow(row);
                        setActiveTab('workspace');
                      }}
                      className="h-7 text-xs font-mono text-[#533AFD] dark:text-[#7A68FF] hover:bg-[#533AFD]/10 p-1 px-2.5 rounded-[4px] cursor-pointer"
                    >
                      Inspect
                      <ChevronRight className="h-3 w-3 ml-1" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>

      {/* Slide-Out Inspection Sheet */}
      <Sheet open={!!selectedRow} onOpenChange={(open) => !open && setSelectedRow(null)}>
        <SheetContent className="w-full sm:max-w-xl bg-[var(--color-surface)] border-l border-[var(--color-border)] p-6 overflow-y-auto">
          {selectedRow && (
            <div className="space-y-6">
              <SheetHeader className="text-left space-y-2 border-b border-[var(--color-border)] pb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[var(--color-panel-subtle)] text-[var(--color-text-primary)] border border-[var(--color-border)]">
                      {selectedRow.id}
                    </span>
                    {getStatusBadge(selectedRow.status)}
                  </div>
                  
                  {/* View Mode Toggle */}
                  <div className="flex items-center gap-1 bg-[var(--color-panel-subtle)] p-1 rounded border border-[var(--color-border)]">
                    <button
                      type="button"
                      onClick={() => setActiveTab('workspace')}
                      className={`text-[11px] font-semibold px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                        activeTab === 'workspace'
                          ? 'bg-[#533AFD] text-white shadow-xs'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      Commercial View
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab('schema')}
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded transition-all cursor-pointer ${
                        activeTab === 'schema'
                          ? 'bg-[#533AFD] text-white shadow-xs'
                          : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]'
                      }`}
                    >
                      JSON Schema
                    </button>
                  </div>
                </div>

                <SheetTitle className="text-xl font-bold text-[var(--color-text-primary)]">
                  {selectedRow.entityName}
                </SheetTitle>
                <SheetDescription className="text-xs font-mono text-[var(--color-text-secondary)]">
                  Active Agent: {selectedRow.provider} • Valuation: {selectedRow.latency}
                </SheetDescription>
              </SheetHeader>

              {/* Tab 1: Visual Commercial Workspace View */}
              {activeTab === 'workspace' && (
                <div className="space-y-5">
                  {/* Top Deal Summary Card */}
                  <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Contracted Commercial Value</span>
                      <span className="text-[#057A55] font-bold">Audited FMV</span>
                    </div>
                    <div className="text-3xl font-extrabold font-mono text-[#057A55] dark:text-emerald-400">
                      {selectedRow.latency}
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs font-mono pt-2 border-t border-[var(--color-border)]/70">
                      <div>
                        <span className="text-[var(--color-text-muted)] block text-[10px]">RIGHTS INVENTORY</span>
                        <span className="font-semibold text-[var(--color-text-primary)]">{selectedRow.category}</span>
                      </div>
                      <div>
                        <span className="text-[var(--color-text-muted)] block text-[10px]">TENURE</span>
                        <span className="font-semibold text-[var(--color-text-primary)]">
                          {(selectedRow.payload.tenure as string) || 'Multi-Season Agreement'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Partner / Brand Status */}
                  <div className="rounded-xl border border-[var(--color-border)] p-4 space-y-2 bg-[var(--color-surface)]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[var(--color-text-muted)] uppercase tracking-wider">Target Brand / Active Partner</span>
                      <span className="text-[#533AFD] font-bold">Zero Category Conflicts</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-[#533AFD]" />
                      <span className="text-sm font-bold text-[var(--color-text-primary)]">
                        {(selectedRow.payload.partner as string) ||
                          (selectedRow.payload.brand_target as string) ||
                          (selectedRow.payload.matched_sponsor as string) ||
                          (selectedRow.payload.brand_partner as string) ||
                          'Enterprise Cloud & FinTech Tier 1'}
                      </span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] pt-1 leading-relaxed">
                      {(selectedRow.payload.exclusivity_check as string) ||
                        (selectedRow.payload.sla_compliance as string) ||
                        (selectedRow.payload.automated_action as string) ||
                        'Full exclusivity confirmed across commercial sponsorship categories.'}
                    </p>
                  </div>

                  {/* Deliverable Obligation Checklist */}
                  <div className="rounded-xl border border-[var(--color-border)] p-4 space-y-3 bg-[var(--color-panel-subtle)]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="font-bold text-[var(--color-text-primary)] uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#057A55]" />
                        Contract Obligation Guard
                      </span>
                      <span className="text-[10px] text-[#057A55] font-bold bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                        100% On-Time SLA
                      </span>
                    </div>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#057A55] shrink-0" />
                        <span className="text-[var(--color-text-primary)]">Digital LED Ribbon Broadcast Screentime Verified</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#057A55] shrink-0" />
                        <span className="text-[var(--color-text-primary)]">VIP Executive Hospitality Suite Passes Issued</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded bg-[var(--color-surface)] border border-[var(--color-border)]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#057A55] shrink-0" />
                        <span className="text-[var(--color-text-primary)]">Social Media Co-Branded Activations Scheduled</span>
                      </div>
                    </div>
                  </div>

                  {/* Quick Executive Actions */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-2">
                    <Button
                      onClick={() => alert(`Generated executive briefing for ${selectedRow.entityName}`)}
                      className="flex-1 h-9 text-xs font-semibold bg-[#533AFD] hover:bg-[#432DE0] text-white rounded-[4px] cursor-pointer"
                    >
                      <FileText className="w-3.5 h-3.5 mr-1.5" />
                      View Generated Pitch Deck
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => alert(`Contract obligations verified for ${selectedRow.id}`)}
                      className="h-9 text-xs font-semibold border-[var(--color-border)] rounded-[4px] cursor-pointer"
                    >
                      <ShieldCheck className="w-3.5 h-3.5 mr-1.5 text-[#057A55]" />
                      Audit Obligations
                    </Button>
                  </div>
                </div>
              )}

              {/* Tab 2: Raw Schema Payload */}
              {activeTab === 'schema' && (
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[var(--color-text-primary)]">
                      <Terminal className="h-3.5 w-3.5 text-[#533AFD]" />
                      <span>Raw JSON Record Payload</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleCopy(selectedRow.payload)}
                      className="h-7 text-xs font-mono"
                    >
                      {copied ? (
                        <>
                          <Check className="h-3 w-3 mr-1 text-[#057A55]" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Copy className="h-3 w-3 mr-1" />
                          Copy Payload
                        </>
                      )}
                    </Button>
                  </div>
                  <pre className="rounded-xl border border-[var(--color-border)] bg-[var(--color-panel-subtle)] p-4 text-xs font-mono text-[var(--color-text-primary)] overflow-x-auto max-h-96 leading-relaxed">
                    {JSON.stringify(selectedRow.payload, null, 2)}
                  </pre>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </Card>
  );
}
