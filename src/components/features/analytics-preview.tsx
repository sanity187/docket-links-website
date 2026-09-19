"use client";

import {
  BarChart3,
  Calendar,
  Filter,
  RefreshCw,
  Map,
  TrendingUp,
  PieChart,
  ChevronDown,
  Activity,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent } from "@/lib/content/features";

interface AnalyticsPreviewProps {
  locale: Locale;
}

export function AnalyticsPreview({ locale }: AnalyticsPreviewProps) {
  const a = featuresContent.analytics;
  const u = a.ui;

  // Top counties data
  const topCounties = [
    { name: "Allegheny", value: 112000, color: "#3b82f6" },
    { name: "Lehigh", value: 98000, color: "#10b981" },
    { name: "Delaware", value: 92000, color: "#f59e0b" },
    { name: "Montgomery", value: 88000, color: "#ef4444" },
    { name: "Lancaster", value: 72000, color: "#8b5cf6" },
    { name: "Bucks", value: 58000, color: "#06b6d4" },
    { name: "Dauphin", value: 52000, color: "#f97316" },
    { name: "Chester", value: 46000, color: "#22c55e" },
    { name: "Luzerne", value: 38000, color: "#ec4899" },
    { name: "York", value: 34000, color: "#6366f1" },
  ];
  const maxCountyValue = topCounties[0].value;

  // Top plaintiffs data
  const topPlaintiffs = [
    { name: "Capital One", pct: 60.5, color: "#3b82f6" },
    { name: "Barclays Delaware", pct: 12.8, color: "#f97316" },
    { name: "Capital Bank", pct: 8.0, color: "#ef4444" },
    { name: "Synchrony Bank", pct: 6.0, color: "#06b6d4" },
    { name: "Citizens Bank", pct: 2.5, color: "#22c55e" },
    { name: "Merrick Bank", pct: 2.4, color: "#f59e0b" },
  ];

  // Most common charges
  const topCharges = [
    { name: "Registration And Certifica...", value: 48000 },
    { name: "Operation of Vehicle Withou...", value: 22000 },
    { name: "Driving While Operating Pr...", value: 18000 },
    { name: "Obedience to Traffic Contr...", value: 14000 },
    { name: "MAXIMUM SPEED LIMITS - ORIE...", value: 12500 },
    { name: "Driver Required to Be Lic...", value: 11000 },
    { name: "780-113 Use/Poss Of Drug Pa...", value: 9500 },
    { name: "DRIVING ON ROADWAYS LANED F...", value: 8000 },
  ];
  const maxChargeValue = topCharges[0].value;

  // Filings trend data
  const trendData = [
    { month: "Jan", traffic: 130000 },
    { month: "Feb", traffic: 125000 },
    { month: "Mar", traffic: 135000 },
    { month: "Apr", traffic: 128000 },
    { month: "May", traffic: 132000 },
    { month: "Jun", traffic: 130000 },
    { month: "Jul", traffic: 138000 },
    { month: "Aug", traffic: 126000 },
    { month: "Sep", traffic: 120000 },
  ];
  const maxTrend = 140000;

  // Case type bar chart
  const caseTypeKeys: (keyof typeof u.caseTypeNames)[] = ["traffic", "civil", "nonTraffic", "criminal", "landlordTenant"];
  const caseTypeValues = [671500, 113517, 96719, 85766, 65032];
  const caseTypeColors = ["#3b82f6", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6"];
  const maxCaseType = caseTypeValues[0];

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-[#090d16] shadow-2xl shadow-black/80 overflow-hidden">
      {/* Window Frame Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1422] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 border border-[#dc2626]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 border border-[#d97706]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/80 border border-[#059669]" />
          </div>
          <span className="ml-3 text-xs font-mono text-muted-foreground/80 hidden sm:inline">
            {t(u.windowTitle, locale)}
          </span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-5 py-3.5 bg-[#0a0f1c] border-b border-white/5 flex items-center justify-between">
        <div>
          <h3 className="text-base font-bold text-white tracking-tight">
            {t(u.pageTitle, locale)}
          </h3>
          <p className="text-[11px] text-muted-foreground">
            {t(u.pageSubtitle, locale)}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:block text-[9px] text-muted-foreground/50 italic">
            {t(u.lastUpdated, locale)}
          </span>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#13192c] border border-white/10 text-xs text-slate-300 hover:bg-[#1a233d] transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span className="hidden sm:inline">{t(u.refreshData, locale)}</span>
          </button>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="p-4 flex flex-col gap-4">
        {/* KPI Cards Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {u.kpis.map((kpi, i) => (
            <div
              key={i}
              className="p-3 rounded-xl bg-[#0d1222] border border-white/5 hover:border-blue-500/20 transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground/80 font-medium">{t(kpi.label, locale)}</span>
                <Activity className="w-3 h-3 text-muted-foreground/30" />
              </div>
              <span className="text-lg sm:text-xl font-bold text-white block mt-1">{kpi.value}</span>
              <span className="text-[9px] text-muted-foreground/50">{t(kpi.sub, locale)}</span>
            </div>
          ))}
        </div>

        {/* Date Filter Bar */}
        <div className="flex items-center gap-2 text-[11px]">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#13192c] border border-white/10 text-slate-300">
            <Calendar className="w-3 h-3 text-muted-foreground" />
            <span>Jan 1 - Sep 19</span>
          </div>
          <button
            type="button"
            className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#13192c] border border-white/10 text-slate-300 hover:bg-[#1a233d] transition-colors"
          >
            <Filter className="w-3 h-3" />
            {t(u.resetFilters, locale)}
          </button>
        </div>

        {/* PA Heatmap */}
        <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <Map className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-white">
                {t(u.heatmapTitle, locale)}
              </span>
            </div>
            <div className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-[#13192c] border border-white/10 text-[10px] text-slate-300">
              <span>{t(u.allCaseTypes, locale)}</span>
              <ChevronDown className="w-3 h-3 text-muted-foreground" />
            </div>
          </div>
          {/* Simplified PA county heatmap visualization */}
          <div className="flex items-center justify-center py-6">
            <div className="relative w-full max-w-md">
              <div className="grid grid-cols-10 gap-0.5 mx-auto w-fit">
                {Array.from({ length: 67 }, (_, i) => {
                  const intensities = [
                    "bg-blue-900/30", "bg-blue-800/40", "bg-blue-700/50", "bg-blue-600/60",
                    "bg-blue-500/70", "bg-blue-400/80", "bg-blue-300/90",
                  ];
                  // Use deterministic pseudo-random based on index
                  const intensity = intensities[((i * 7 + 3) % intensities.length)];
                  return (
                    <div
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 rounded-sm ${intensity} border border-white/5 hover:border-blue-400/50 transition-colors cursor-crosshair`}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[9px] text-muted-foreground">
            <span>{t(u.heatmapLow, locale)}</span>
            <div className="flex gap-0.5">
              <span className="w-3 h-3 rounded-sm bg-blue-900/40" />
              <span className="w-3 h-3 rounded-sm bg-blue-800/50" />
              <span className="w-3 h-3 rounded-sm bg-blue-600/60" />
              <span className="w-3 h-3 rounded-sm bg-blue-400/80" />
              <span className="w-3 h-3 rounded-sm bg-blue-300/90" />
            </div>
            <span>{t(u.heatmapMore, locale)}</span>
          </div>
        </div>

        {/* Filings Over Time + Case Type Bar Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Filings Over Time */}
          <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-xs font-semibold text-white">
                  {t(u.filingsOverTime, locale)}
                </span>
              </div>
              <div className="flex items-center gap-1 text-[10px]">
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
                  {t(u.daily, locale)}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white/5 text-muted-foreground">
                  {t(u.weekly, locale)}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-blue-600/20 text-blue-400 border border-blue-500/30">
                  {t(u.monthly, locale)}
                </span>
              </div>
            </div>
            {/* Simplified bar chart */}
            <div className="flex items-end gap-1 h-32">
              {trendData.map((td, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full flex flex-col gap-px">
                    <div
                      className="w-full bg-amber-400/80 rounded-t-sm"
                      style={{ height: `${(td.traffic / maxTrend) * 100}px` }}
                    />
                  </div>
                  <span className="text-[8px] text-muted-foreground/50">{td.month}</span>
                </div>
              ))}
            </div>
            {/* Legend */}
            <div className="flex items-center gap-3 mt-3 text-[9px] text-muted-foreground flex-wrap">
              {[
                { label: t(u.caseTypeNames.civil, locale), color: "bg-blue-400" },
                { label: t(u.caseTypeNames.criminal, locale), color: "bg-red-400" },
                { label: t(u.caseTypeNames.landlordTenant, locale), color: "bg-purple-400" },
                { label: t(u.caseTypeNames.nonTraffic, locale), color: "bg-emerald-400" },
                { label: t(u.caseTypeNames.traffic, locale), color: "bg-amber-400" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1">
                  <span className={`w-2 h-2 rounded-full ${item.color}`} />
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Filings by Case Type */}
          <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
            <div className="flex items-center gap-2 mb-3">
              <BarChart3 className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-white">
                {t(u.filingsByCaseType, locale)}
              </span>
            </div>
            <div className="flex items-end gap-3 h-32 px-2 justify-center">
              {caseTypeKeys.map((key, i) => (
                <div key={key} className="flex flex-col items-center gap-1">
                  <span className="text-[8px] text-muted-foreground/60 font-mono">
                    {caseTypeValues[i] >= 1000 ? `${Math.round(caseTypeValues[i] / 1000)}K` : caseTypeValues[i]}
                  </span>
                  <div
                    className="w-8 sm:w-10 rounded-t-md"
                    style={{
                      height: `${Math.max(8, (caseTypeValues[i] / maxCaseType) * 100)}px`,
                      backgroundColor: caseTypeColors[i],
                    }}
                  />
                  <span className="text-[8px] text-muted-foreground/50 text-center w-12 truncate">
                    {t(u.caseTypeNames[key], locale)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Counties + Top Plaintiffs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Top Counties */}
          <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
            <span className="text-xs font-semibold text-white mb-3 block">
              {t(u.topCounties, locale)}
            </span>
            <div className="flex flex-col gap-1.5">
              {topCounties.map((county, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="text-[10px] text-muted-foreground w-20 truncate shrink-0 text-right">
                    {county.name}
                  </span>
                  <div className="flex-1 h-3.5 bg-[#13192c] rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: `${(county.value / maxCountyValue) * 100}%`,
                        backgroundColor: county.color,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Plaintiffs Donut */}
          <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
            <div className="flex items-center gap-2 mb-3">
              <PieChart className="w-3.5 h-3.5 text-blue-400" />
              <span className="text-xs font-semibold text-white">
                {t(u.topPlaintiffs, locale)}
              </span>
            </div>
            {/* Simple donut representation */}
            <div className="flex items-center justify-center py-4">
              <div className="relative w-28 h-28">
                <svg viewBox="0 0 36 36" className="w-28 h-28">
                  {topPlaintiffs.reduce<{ elements: React.ReactNode[]; offset: number }>(
                    (acc, plaintiff, i) => {
                      const circumference = 100;
                      const dashLength = (plaintiff.pct / 100) * circumference;
                      acc.elements.push(
                        <circle
                          key={i}
                          cx="18"
                          cy="18"
                          r="15.9155"
                          fill="transparent"
                          stroke={plaintiff.color}
                          strokeWidth="3"
                          strokeDasharray={`${dashLength} ${circumference - dashLength}`}
                          strokeDashoffset={-acc.offset}
                          className="transition-all duration-500"
                        />
                      );
                      acc.offset += dashLength;
                      return acc;
                    },
                    { elements: [], offset: 0 }
                  ).elements}
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] text-muted-foreground font-semibold">100%</span>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-1 justify-center text-[9px] text-muted-foreground">
              {topPlaintiffs.map((p, i) => (
                <div key={i} className="flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: p.color }} />
                  <span>
                    {p.name} ({p.pct}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Most Common Charges */}
        <div className="rounded-xl bg-[#0d1222] border border-white/5 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-semibold text-white">
              {t(u.mostCommonCharges, locale)}
            </span>
            <div className="flex items-center gap-2 text-[10px]">
              <span className="px-2 py-0.5 rounded bg-[#13192c] border border-white/10 text-slate-300">Top 10</span>
              <span className="px-2 py-0.5 rounded bg-[#13192c] border border-white/10 text-slate-300 flex items-center gap-1">
                <Filter className="w-3 h-3" />
                {t(u.caseTypesFilter, locale)}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
            {topCharges.map((charge, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[9px] text-muted-foreground w-36 truncate shrink-0 text-right">
                  {charge.name}
                </span>
                <div className="flex-1 h-3 bg-[#13192c] rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-amber-500/80"
                    style={{ width: `${(charge.value / maxChargeValue) * 100}%` }}
                  />
                </div>
                <span className="text-[8px] text-muted-foreground/60 w-8 shrink-0">
                  {Math.round(charge.value / 1000)}K
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
