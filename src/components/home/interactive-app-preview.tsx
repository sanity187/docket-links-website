"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  CheckCircle,
  Clock,
  Shield,
  Layers,
  FileSpreadsheet,
  ChevronRight,
  Database,
  Terminal,
  BarChart3,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { homeContent } from "@/lib/content/home";

interface InteractiveAppPreviewProps {
  locale: Locale;
}

export function InteractiveAppPreview({ locale }: InteractiveAppPreviewProps) {
  const [filterMode, setFilterMode] = useState<"all" | "criminal" | "traffic">("all");
  const [claimedIds, setClaimedIds] = useState<number[]>([101]);

  const p = homeContent.appPreview;

  const mockLeads = [
    {
      id: 101,
      docket: "MJ-05202-CR-0000214-2026",
      defendant: "R. Miller",
      county: "Allegheny",
      charge: "75 § 3802 §§ A1 - DUI: Gen Imp/Inc of Driving Safely",
      grade: "M",
      type: "traffic",
      date: "14 mins ago",
    },
    {
      id: 102,
      docket: "MJ-23101-CR-0000318-2026",
      defendant: "J. Kowalski",
      county: "Berks",
      charge: "18 § 3929 §§ A1 - Retail Theft - Take Merchandise",
      grade: "M1",
      type: "criminal",
      date: "32 mins ago",
    },
    {
      id: 103,
      docket: "MJ-38104-CR-0000098-2026",
      defendant: "D. Vance",
      county: "Montgomery",
      charge: "18 § 2701 §§ A - Simple Assault / Harassment",
      grade: "M2",
      type: "criminal",
      date: "1 hr ago",
    },
    {
      id: 104,
      docket: "MJ-07101-TR-0001552-2026",
      defendant: "M. Henderson",
      county: "Bucks",
      charge: "75 § 3362 §§ A2 - Exceed Max Speed Limit (31+ MPH)",
      grade: "S",
      type: "traffic",
      date: "2 hrs ago",
    },
  ];

  const filtered = mockLeads.filter(
    (l) => filterMode === "all" || l.type === filterMode
  );

  const toggleClaim = (id: number) => {
    if (claimedIds.includes(id)) {
      setClaimedIds(claimedIds.filter((item) => item !== id));
    } else {
      setClaimedIds([...claimedIds, id]);
    }
  };

  return (
    <div className="relative mx-auto max-w-5xl rounded-3xl border border-line-strong bg-panel/90 shadow-2xl backdrop-blur-2xl overflow-hidden font-sans">
      {/* Desktop Window Titlebar */}
      <div className="flex items-center justify-between border-b border-line bg-panel-muted/70 px-4 py-3">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-amber-500/80" />
          <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 font-mono text-[11px] font-semibold text-dim">
            {t(p.windowTitle, locale)}
          </span>
        </div>

        <div className="flex items-center gap-2 font-mono text-[11px] text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>{t(p.titlebarStatus, locale)}</span>
        </div>
      </div>

      {/* Live App Analytics Ribbon (Real Data from DocketLinks Browser) */}
      <div className="border-b border-line bg-panel-muted/30 p-3 sm:px-6">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-1.5 text-xs font-bold text-foreground">
            <BarChart3 className="h-3.5 w-3.5 text-primary" />
            <span>{t(p.analyticsTitle, locale)}</span>
          </div>
          <span className="text-[10px] text-dim hidden sm:inline">
            {t(p.analyticsSubtitle, locale)}
          </span>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
          {p.metricsStrip.map((metric, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-line bg-panel/60 p-2 text-left transition-colors hover:border-line-strong"
            >
              <div className="text-xs sm:text-sm font-black text-foreground tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] font-semibold text-primary truncate">
                {t(metric.label, locale)}
              </div>
              <div className="text-[9px] text-dim truncate">
                {t(metric.sub, locale)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* App Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line p-3 sm:px-6 bg-panel/50">
        <div className="flex items-center gap-2">
          <div className="inline-flex rounded-lg border border-line bg-muted/60 p-0.5 text-xs">
            <button
              type="button"
              onClick={() => setFilterMode("all")}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === "all" ? "bg-panel text-primary shadow-xs font-bold" : "text-dim hover:text-foreground"
              }`}
            >
              {t(p.tabs.all, locale)}
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("traffic")}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === "traffic" ? "bg-panel text-primary shadow-xs font-bold" : "text-dim hover:text-foreground"
              }`}
            >
              {t(p.tabs.traffic, locale)}
            </button>
            <button
              type="button"
              onClick={() => setFilterMode("criminal")}
              className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
                filterMode === "criminal" ? "bg-panel text-primary shadow-xs font-bold" : "text-dim hover:text-foreground"
              }`}
            >
              {t(p.tabs.criminal, locale)}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs text-dim">
            {claimedIds.length} {t(p.actions.claimed, locale)}
          </span>
          <button
            type="button"
            className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-primary/10 px-3 py-1 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors cursor-pointer"
          >
            <FileSpreadsheet className="h-3.5 w-3.5" />
            <span>{t(p.actions.exportCass, locale)}</span>
          </button>
        </div>
      </div>

      {/* App Leads Table Simulation */}
      <div className="overflow-x-auto p-4 sm:p-6">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="border-b border-line text-dim text-[11px] uppercase tracking-wider">
              <th className="pb-3 font-semibold">{t(p.tableHeaders.docketNumber, locale)}</th>
              <th className="pb-3 font-semibold">{t(p.tableHeaders.county, locale)}</th>
              <th className="pb-3 font-semibold">{t(p.tableHeaders.primaryCharges, locale)}</th>
              <th className="pb-3 font-semibold text-center">{t(p.tableHeaders.grade, locale)}</th>
              <th className="pb-3 font-semibold text-right">{t(p.tableHeaders.firmAction, locale)}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-line/60">
            {filtered.map((lead) => {
              const isClaimed = claimedIds.includes(lead.id);
              return (
                <tr key={lead.id} className="hover:bg-muted/40 transition-colors group">
                  <td className="py-3.5 font-mono font-medium text-foreground">
                    <div className="flex flex-col">
                      <span className="text-primary group-hover:underline cursor-pointer">
                        {lead.docket}
                      </span>
                      <span className="text-[10px] text-dim">{lead.defendant} • {lead.date}</span>
                    </div>
                  </td>
                  <td className="py-3.5 font-medium text-foreground">{lead.county}</td>
                  <td className="py-3.5 max-w-xs sm:max-w-md text-dim truncate">
                    {lead.charge}
                  </td>
                  <td className="py-3.5 text-center">
                    <span
                      className={`inline-flex rounded px-1.5 py-0.5 text-[10px] font-mono font-bold ${
                        lead.grade.startsWith("F")
                          ? "bg-red-500/15 text-red-400"
                          : lead.grade.startsWith("M")
                          ? "bg-amber-500/15 text-amber-400"
                          : "bg-blue-500/15 text-blue-400"
                      }`}
                    >
                      {lead.grade}
                    </span>
                  </td>
                  <td className="py-3.5 text-right">
                    <button
                      type="button"
                      onClick={() => toggleClaim(lead.id)}
                      className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all ${
                        isClaimed
                          ? "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30"
                          : "bg-primary text-primary-foreground hover:brightness-110 shadow-xs"
                      }`}
                    >
                      {isClaimed ? (
                        <>
                          <CheckCircle className="h-3 w-3" />
                          <span>{t(p.actions.claimedButton, locale)}</span>
                        </>
                      ) : (
                        <span>{t(p.actions.claimButton, locale)}</span>
                      )}
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* App Status Bar */}
      <div className="flex items-center justify-between border-t border-line bg-panel-muted/50 px-4 py-2 font-mono text-[10px] text-dim">
        <div className="flex items-center gap-3">
          <span>PA UJS Portal Sync: Active</span>
          <span>•</span>
          <span>Encryption: AES-256</span>
        </div>
        <span>RAM Usage: 48 MB</span>
      </div>
    </div>
  );
}
