"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Folder,
  Save,
  X,
  Calendar,
  ChevronDown,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  CheckSquare,
  Square,
  Sparkles,
  ArrowUpDown,
  Lock,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent, MockExplorerLead } from "@/lib/content/features";

interface LeadExplorerPreviewProps {
  locale: Locale;
}

export function LeadExplorerPreview({ locale }: LeadExplorerPreviewProps) {
  const f = featuresContent.leadExplorer.ui;
  const adv = f.advanced;
  const allLeads = featuresContent.leadExplorer.mockLeads;

  // State
  const [selectedCaseType, setSelectedCaseType] = useState<string>("criminal");
  const [searchQuery, setSearchQuery] = useState("");
  const [hideClaimed, setHideClaimed] = useState(true);
  const [showAdvanced, setShowAdvanced] = useState(true);
  const [statutesOpen, setStatutesOpen] = useState(true);
  const [statuteSearch, setStatuteSearch] = useState("");
  const [selectedStatutes, setSelectedStatutes] = useState<string[]>(["18 § 2501 §§ A"]);
  const [activeDatePreset, setActiveDatePreset] = useState<string>("allTime");
  const [selectedIds, setSelectedIds] = useState<number[]>([21, 23]);
  const [claimedIds, setClaimedIds] = useState<number[]>([]);
  const [claimedCountTotal, setClaimedCountTotal] = useState(4049);

  // Determine category family
  const isCriminalLike =
    selectedCaseType === "criminal" ||
    selectedCaseType === "traffic" ||
    selectedCaseType === "nonTraffic";

  // Map case type value to lead type
  const typeMap: Record<string, string> = {
    civil: "Civil",
    landlordTenant: "Landlord / Tenant",
    criminal: "Criminal",
    traffic: "Traffic",
    nonTraffic: "Non-Traffic",
  };

  const currentTypeLabel = typeMap[selectedCaseType] || "Criminal";

  // Filter leads based on selected case type, search query, and claimed status
  const visibleLeads = allLeads.filter((lead) => {
    // Match case type
    if (lead.type !== currentTypeLabel) {
      return false;
    }
    // Filter claimed if toggle is active
    if (hideClaimed && claimedIds.includes(lead.id)) {
      return false;
    }
    // Search query filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchDocket = lead.docket.toLowerCase().includes(q);
      const matchDefendant = lead.defendant.toLowerCase().includes(q);
      const matchPlaintiff = lead.plaintiff?.toLowerCase().includes(q) || false;
      const matchCharges = lead.charges?.toLowerCase().includes(q) || false;
      const matchCounty = lead.county.toLowerCase().includes(q);
      return matchDocket || matchDefendant || matchPlaintiff || matchCharges || matchCounty;
    }
    return true;
  });

  const allVisibleSelected =
    visibleLeads.length > 0 &&
    visibleLeads.every((lead) => selectedIds.includes(lead.id));

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(visibleLeads.map((l) => l.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleClaimSelected = () => {
    if (selectedIds.length === 0) return;
    const newClaimed = Array.from(new Set([...claimedIds, ...selectedIds]));
    setClaimedIds(newClaimed);
    setClaimedCountTotal((prev) => prev + selectedIds.length);
    setSelectedIds([]);
  };

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-[#090d16] shadow-2xl shadow-black/80 overflow-hidden">
      {/* Desktop App Window Frame */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1422] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 border border-[#dc2626]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 border border-[#d97706]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/80 border border-[#059669]" />
          </div>
          <span className="ml-3 text-xs font-mono text-muted-foreground/80 hidden sm:inline">
            {t(f.appWindowHeader.windowTitle, locale)} — [{currentTypeLabel}]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-mono text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t(f.appWindowHeader.engineStatus, locale)}</span>
          </div>
        </div>
      </div>

      {/* Main Workspace (Left Sidebar + Table Area) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Filter Sidebar */}
        <div className="lg:col-span-3 border-b lg:border-b-0 lg:border-r border-white/5 bg-[#0a0e19] p-4 flex flex-col gap-3.5 text-sm overflow-y-auto max-h-[800px]">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between pb-2 border-b border-white/5">
            <span className="font-semibold text-white tracking-wide">
              {t(f.filtersTitle, locale)}
            </span>
            <div className="flex items-center gap-1 text-muted-foreground">
              <button
                type="button"
                className="p-1 rounded hover:bg-white/5 hover:text-white transition-colors"
                title="Saved Filters"
              >
                <Folder className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="p-1 rounded hover:bg-white/5 hover:text-white transition-colors"
                title="Save Filter Preset"
              >
                <Save className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                className="p-1 rounded hover:bg-white/5 hover:text-white transition-colors"
                title="Clear Filters"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Case Type Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-300">
              {t(f.caseTypeLabel, locale)}
            </label>
            <div className="relative">
              <select
                value={selectedCaseType}
                onChange={(e) => setSelectedCaseType(e.target.value)}
                className="w-full bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-500/50"
              >
                <option value="criminal">{t(f.caseTypes.criminal, locale)}</option>
                <option value="traffic">{t(f.caseTypes.traffic, locale)}</option>
                <option value="nonTraffic">{t(f.caseTypes.nonTraffic, locale)}</option>
                <option value="civil">{t(f.caseTypes.civil, locale)}</option>
                <option value="landlordTenant">{t(f.caseTypes.landlordTenant, locale)}</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-muted-foreground absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </div>

          {/* Search Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-300">
              {t(f.searchLabel, locale)}
            </label>
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t(f.searchPlaceholder, locale)}
                className="w-full bg-[#111726] border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>

          {/* Case Status Filter */}
          <div className="flex flex-col gap-1">
            <label className="text-xs font-medium text-slate-300">
              {t(f.caseStatusLabel, locale)}
            </label>
            <div className="relative">
              <button
                type="button"
                className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-white hover:border-white/20 transition-colors"
              >
                <span>{t(f.caseStatusSelected, locale)}</span>
                <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Toggle Advanced Filters Button */}
          <div className="pt-1">
            <button
              type="button"
              onClick={() => setShowAdvanced(!showAdvanced)}
              className="flex items-center gap-1.5 text-xs text-blue-500 hover:text-blue-400 font-medium transition-colors"
            >
              {showAdvanced ? (
                <>
                  <ChevronUp className="w-3.5 h-3.5 text-blue-500" />
                  <span>{t(f.hideAdvancedFilters, locale)}</span>
                </>
              ) : (
                <>
                  <ChevronDown className="w-3.5 h-3.5 text-blue-500" />
                  <span>{t(f.showAdvancedFilters, locale)}</span>
                </>
              )}
            </button>
          </div>

          {/* Advanced Filters Area */}
          {showAdvanced && (
            <div className="flex flex-col gap-3 pt-2 border-t border-white/5 animate-in fade-in duration-200">
              {/* Counties Filter (Shared) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-300">
                  {t(adv.counties, locale)}
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:border-white/20 transition-colors"
                  >
                    <span>{t(adv.selectPlaceholder, locale)}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* CRIMINAL / TRAFFIC / NON-TRAFFIC: Statutes, Arresting Agency, Township */}
              {isCriminalLike && (
                <>
                  {/* Statutes with Expanded Popover Menu */}
                  <div className="flex flex-col gap-1 relative">
                    <label className="text-xs font-medium text-slate-300">
                      {t(adv.statutes, locale)}
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setStatutesOpen(!statutesOpen)}
                        className={`w-full flex items-center justify-between bg-[#111726] border rounded-lg px-3 py-2 text-xs transition-colors ${
                          statutesOpen
                            ? "border-blue-500 text-white shadow-sm shadow-blue-500/20"
                            : "border-white/10 text-muted-foreground hover:border-white/20"
                        }`}
                      >
                        <span className="truncate">
                          {selectedStatutes.length === 0
                            ? t(adv.selectStatutesPlaceholder, locale)
                            : selectedStatutes.length === 1
                            ? selectedStatutes[0]
                            : `${selectedStatutes.length} ${t(f.selectedCountText, locale)}`}
                        </span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 text-muted-foreground transition-transform ${
                            statutesOpen ? "rotate-180 text-blue-400" : ""
                          }`}
                        />
                      </button>

                      {/* Expanded Statute Popover Menu */}
                      {statutesOpen && (
                        <div className="absolute left-0 top-full mt-1.5 w-72 sm:w-80 bg-[#121829] border border-white/15 rounded-xl shadow-2xl shadow-black z-40 overflow-hidden animate-in fade-in zoom-in-95 duration-150">
                          {/* Search Statutes Input */}
                          <div className="p-2 border-b border-white/10 bg-[#0e1322]">
                            <div className="relative">
                              <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
                              <input
                                type="text"
                                value={statuteSearch}
                                onChange={(e) => setStatuteSearch(e.target.value)}
                                placeholder={t(adv.searchStatutesPlaceholder, locale)}
                                className="w-full bg-[#182035] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50"
                              />
                            </div>
                          </div>

                          {/* Statute List Items */}
                          <div className="max-h-56 overflow-y-auto divide-y divide-white/5 py-1">
                            {adv.statuteOptions
                              .filter((opt) => {
                                if (!statuteSearch.trim()) return true;
                                const q = statuteSearch.toLowerCase();
                                return (
                                  opt.code.toLowerCase().includes(q) ||
                                  t(opt.name, locale).toLowerCase().includes(q)
                                );
                              })
                              .map((opt) => {
                                const isChecked = selectedStatutes.includes(opt.code);
                                return (
                                  <div
                                    key={opt.code}
                                    onClick={() => {
                                      if (isChecked) {
                                        setSelectedStatutes(
                                          selectedStatutes.filter((s) => s !== opt.code)
                                        );
                                      } else {
                                        setSelectedStatutes([...selectedStatutes, opt.code]);
                                      }
                                    }}
                                    className={`flex items-start gap-2.5 px-3 py-2 cursor-pointer transition-colors ${
                                      isChecked
                                        ? "bg-blue-600/15"
                                        : "hover:bg-white/[0.04]"
                                    }`}
                                  >
                                    <div className="mt-0.5 shrink-0">
                                      {isChecked ? (
                                        <CheckSquare className="w-3.5 h-3.5 text-blue-400" />
                                      ) : (
                                        <Square className="w-3.5 h-3.5 text-white/30" />
                                      )}
                                    </div>
                                    <div className="flex flex-col min-w-0">
                                      <span className="text-xs font-mono font-semibold text-white tracking-tight">
                                        {opt.code}
                                      </span>
                                      <span className="text-[11px] text-muted-foreground truncate">
                                        {t(opt.name, locale)}
                                      </span>
                                    </div>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Arresting Agency */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      {t(adv.arrestingAgency, locale)}
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:border-white/20 transition-colors"
                      >
                        <span>{t(adv.selectPlaceholder, locale)}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>

                  {/* Township */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      {t(adv.township, locale)}
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:border-white/20 transition-colors"
                      >
                        <span>{t(adv.selectPlaceholder, locale)}</span>
                        <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* CIVIL & LANDLORD-TENANT: Plaintiff Names & Claim Amount Range ($) */}
              {!isCriminalLike && (
                <>
                  {/* Plaintiff Names with Keyword helper */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      {t(adv.plaintiffNames, locale)}
                    </label>
                    <input
                      type="text"
                      placeholder={t(adv.typeAndPressEnterPlaceholder, locale)}
                      className="w-full bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50"
                    />
                    <span className="text-[10px] text-muted-foreground/70 leading-tight">
                      {t(adv.plaintiffTagHelper, locale)}
                    </span>
                  </div>

                  {/* Claim Amount Range ($) */}
                  <div className="flex flex-col gap-1">
                    <label className="text-xs font-medium text-slate-300">
                      {t(adv.claimAmountRange, locale)}
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="text"
                        placeholder={t(adv.minPlaceholder, locale)}
                        className="w-full bg-[#111726] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50 font-mono"
                      />
                      <span className="text-muted-foreground text-xs font-mono">-</span>
                      <input
                        type="text"
                        placeholder={t(adv.maxPlaceholder, locale)}
                        className="w-full bg-[#111726] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50 font-mono"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Court (Shared) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-300">
                  {t(adv.court, locale)}
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:border-white/20 transition-colors"
                  >
                    <span>{t(adv.selectPlaceholder, locale)}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                  </button>
                </div>
              </div>

              {/* Filing Date Filter (Shared) */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-medium text-slate-300">
                  {t(adv.filingDate, locale)}
                </label>
                {/* Date Presets */}
                <div className="grid grid-cols-2 gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveDatePreset("last3Days")}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors border ${
                      activeDatePreset === "last3Days"
                        ? "bg-blue-600/30 border-blue-500/50 text-white"
                        : "bg-[#111726] border-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    {t(adv.datePresets.last3Days, locale)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDatePreset("last7Days")}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors border ${
                      activeDatePreset === "last7Days"
                        ? "bg-blue-600/30 border-blue-500/50 text-white"
                        : "bg-[#111726] border-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    {t(adv.datePresets.last7Days, locale)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDatePreset("last30Days")}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors border ${
                      activeDatePreset === "last30Days"
                        ? "bg-blue-600/30 border-blue-500/50 text-white"
                        : "bg-[#111726] border-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    {t(adv.datePresets.last30Days, locale)}
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveDatePreset("allTime")}
                    className={`px-2 py-1.5 rounded-md text-[11px] font-medium transition-colors border ${
                      activeDatePreset === "allTime"
                        ? "bg-[#192238] border-blue-500/50 text-white"
                        : "bg-[#111726] border-white/5 text-muted-foreground hover:text-white"
                    }`}
                  >
                    {t(adv.datePresets.allTime, locale)}
                  </button>
                </div>

                {/* Calendar Start / End Date */}
                <div className="flex flex-col gap-1.5 mt-1">
                  <div className="flex items-center gap-2 bg-[#111726] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{t(adv.sampleDates.start, locale)}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#111726] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-slate-200">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{t(adv.sampleDates.end, locale)}</span>
                  </div>
                </div>
              </div>

              {/* Next Hearing (Shared for all case types) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-300">
                  {t(adv.nextHearing, locale)}
                </label>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 bg-[#111726] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{t(adv.fromPlaceholder, locale)}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#111726] border border-white/10 rounded-lg px-3 py-1.5 text-xs text-muted-foreground">
                    <Calendar className="w-3.5 h-3.5 text-muted-foreground" />
                    <span>{t(adv.toPlaceholder, locale)}</span>
                  </div>
                </div>
              </div>

              {/* Defendant Name (Shared for all case types) */}
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-slate-300">
                  {t(adv.defendantName, locale)}
                </label>
                <input
                  type="text"
                  placeholder={t(adv.searchDefendantPlaceholder, locale)}
                  className="w-full bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50"
                />
              </div>

              {/* Charge Grade (Criminal, Traffic, Non-Traffic only) */}
              {isCriminalLike && (
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-medium text-slate-300">
                    {t(adv.chargeGrade, locale)}
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between bg-[#111726] border border-white/10 rounded-lg px-3 py-2 text-xs text-muted-foreground hover:border-white/20 transition-colors"
                    >
                      <span>{t(adv.selectPlaceholder, locale)}</span>
                      <ChevronDown className="w-3.5 h-3.5 text-muted-foreground" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Information box at sidebar bottom */}
          <div className="mt-auto p-3 rounded-lg bg-blue-950/20 border border-blue-500/20 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5 text-blue-400 font-medium mb-1">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span>PA Unified Court System</span>
            </div>
            <p className="text-[11px] leading-relaxed text-slate-300">
              {locale === "es"
                ? "Filtros en tiempo real sincronizados nativamente con expedientes judiciales de Pensilvania."
                : "Real-time filters synced natively with Pennsylvania court dockets."}
            </p>
          </div>
        </div>

        {/* Right Main Table Area */}
        <div className="lg:col-span-9 flex flex-col bg-[#070a12]">
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 bg-[#0d121f] border-b border-white/5 text-xs">
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-sm transition-colors"
              >
                <Filter className="w-3.5 h-3.5" />
                <span>{t(f.filtersBadge, locale)}</span>
              </button>
              <span className="text-muted-foreground font-mono">
                {f.leadsCounts[selectedCaseType as keyof typeof f.leadsCounts] || "30,370"}{" "}
                {t(f.leadsFound, locale)}
              </span>
            </div>

            <div className="flex items-center gap-4">
              {/* Toggle: Hide Claimed Leads */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setHideClaimed(!hideClaimed)}
                  className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                    hideClaimed ? "bg-blue-600" : "bg-white/20"
                  }`}
                  aria-pressed={hideClaimed}
                >
                  <div
                    className={`w-4 h-4 rounded-full bg-white transition-transform ${
                      hideClaimed ? "translate-x-4" : "translate-x-0"
                    }`}
                  />
                </button>
                <div className="flex flex-col">
                  <span className="text-xs text-slate-200 font-medium select-none">
                    {t(f.hideClaimedToggle, locale)}
                  </span>
                  <span className="text-[10px] text-muted-foreground font-mono">
                    {claimedCountTotal} {t(f.claimedHiddenText, locale).replace(/^\d+\s*/, "")}
                  </span>
                </div>
              </div>

              {/* Claim Selected Button */}
              <button
                type="button"
                onClick={handleClaimSelected}
                disabled={selectedIds.length === 0}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg font-semibold transition-all ${
                  selectedIds.length > 0
                    ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-950/50 cursor-pointer"
                    : "bg-emerald-600/40 text-emerald-200/50 cursor-not-allowed"
                }`}
              >
                <CheckSquare className="w-3.5 h-3.5" />
                <span>
                  {t(f.claimSelectedButton, locale)}
                  {selectedIds.length > 0 && ` (${selectedIds.length})`}
                </span>
              </button>
            </div>
          </div>

          {/* Table Container with Horizontal Scroll */}
          <div className="flex-1 overflow-x-auto">
            <table className="w-full text-left text-xs whitespace-nowrap border-collapse">
              <thead>
                <tr className="bg-[#0c101b] border-b border-white/5 text-[11px] font-medium text-muted-foreground uppercase tracking-wider select-none">
                  <th className="py-2.5 px-3 w-8">
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="text-muted-foreground hover:text-white transition-colors"
                    >
                      {allVisibleSelected ? (
                        <CheckSquare className="w-4 h-4 text-blue-400" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.docketNumber, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.defendant, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.plaintiff, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.county, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.type, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.status, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3">
                    <div className="flex items-center gap-1">
                      <span>{t(f.tableHeaders.filingDate, locale)}</span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                  <th className="py-2.5 px-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <span>
                        {isCriminalLike
                          ? t(f.tableHeaders.primaryCharge, locale)
                          : t(f.tableHeaders.claimAmount, locale)}
                      </span>
                      <ArrowUpDown className="w-3 h-3 text-muted-foreground/60" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {visibleLeads.map((lead) => {
                  const isSelected = selectedIds.includes(lead.id);
                  const isClaimed = claimedIds.includes(lead.id);
                  const plaintiffDisplay =
                    lead.plaintiff ||
                    (isCriminalLike ? t(f.commonwealthOfPA, locale) : "—");

                  const typeBadgeClass =
                    lead.type === "Criminal"
                      ? "bg-[#3b1822] text-[#fca5a5] border-[#f87171]/40"
                      : lead.type === "Traffic"
                      ? "bg-[#182a44] text-sky-300 border-sky-500/40"
                      : lead.type === "Non-Traffic"
                      ? "bg-[#27193b] text-purple-300 border-purple-500/40"
                      : "bg-[#16233b] text-blue-300 border-blue-500/40";

                  return (
                    <tr
                      key={lead.id}
                      onClick={() => toggleSelectRow(lead.id)}
                      className={`cursor-pointer transition-colors ${
                        isSelected
                          ? "bg-blue-950/30 hover:bg-blue-950/40"
                          : "hover:bg-white/[0.02]"
                      }`}
                    >
                      <td className="py-2.5 px-3">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleSelectRow(lead.id);
                          }}
                          className="text-muted-foreground hover:text-white"
                        >
                          {isSelected ? (
                            <CheckSquare className="w-4 h-4 text-blue-400" />
                          ) : (
                            <Square className="w-4 h-4 text-white/30" />
                          )}
                        </button>
                      </td>
                      <td className="py-2.5 px-3">
                        <span className="text-blue-400 hover:underline font-medium">
                          {lead.docket}
                        </span>
                      </td>
                      <td className="py-2.5 px-3 font-sans font-medium text-white">
                        {lead.defendant}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-muted-foreground max-w-[220px] truncate">
                        {plaintiffDisplay}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-slate-300">
                        {lead.county}
                      </td>
                      <td className="py-2.5 px-3">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium border ${typeBadgeClass}`}
                        >
                          {lead.type}
                        </span>
                      </td>
                      <td className="py-2.5 px-3">
                        {isClaimed ? (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
                            <Lock className="w-2.5 h-2.5" />
                            {t(f.claimedBadge, locale)}
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            {lead.status}
                          </span>
                        )}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-muted-foreground">
                        {lead.date}
                      </td>
                      <td className="py-2.5 px-3 text-right font-sans text-slate-300 max-w-[240px] truncate">
                        {isCriminalLike ? lead.charges || "—" : lead.amount}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Table Pagination Footer */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-2.5 bg-[#0a0e19] border-t border-white/5 text-xs text-muted-foreground select-none">
            <div className="flex items-center gap-4">
              <span>{t(f.pagination.showingText, locale)}</span>
              <span className="px-2 py-1 rounded bg-[#111726] border border-white/10 text-white font-mono text-[11px]">
                {t(f.pagination.rowsText, locale)}
              </span>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px]">
                {t(f.pagination.pageText, locale)}
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled
                  className="px-2 py-1 rounded bg-[#111726] border border-white/10 text-muted-foreground opacity-50 cursor-not-allowed text-[11px]"
                >
                  <ChevronLeft className="w-3.5 h-3.5 inline mr-1" />
                  {t(f.pagination.previous, locale)}
                </button>
                <button
                  type="button"
                  className="px-2 py-1 rounded bg-[#111726] border border-white/10 text-white hover:bg-white/5 text-[11px]"
                >
                  {t(f.pagination.next, locale)}
                  <ChevronRight className="w-3.5 h-3.5 inline ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
