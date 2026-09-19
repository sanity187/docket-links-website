"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Download,
  Sparkles,
  Shield,
  Calendar,
  ChevronDown,
  Check,
  CheckSquare,
  Square,
  X,
  Phone,
  MapPin,
  ExternalLink,
  Mail,
  MessageSquare,
  FileText,
  BadgeCheck,
  Clock,
  AlertCircle,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent, MockClaimedLead } from "@/lib/content/features";

interface ClaimedLeadsPreviewProps {
  locale: Locale;
}

export function ClaimedLeadsPreview({ locale }: ClaimedLeadsPreviewProps) {
  const f = featuresContent.claimedLeads.ui;
  const initialLeads = featuresContent.claimedLeads.mockClaimedLeads;

  // State
  const [leads, setLeads] = useState<MockClaimedLead[]>(initialLeads);
  const [selectedIds, setSelectedIds] = useState<number[]>([3, 4, 5]);
  const [activeLeadId, setActiveLeadId] = useState<number | null>(1);
  const [enrichModalOpen, setEnrichModalOpen] = useState(false);
  const [enrichmentFilter, setEnrichmentFilter] = useState<"all" | "notEnriched" | "enriched">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [alsoCass, setAlsoCass] = useState(true);

  // Outreach tracking checkboxes state per lead
  const [outreachState, setOutreachState] = useState<Record<number, {
    mailed: boolean;
    emailed: boolean;
    texted: boolean;
    responded: boolean;
    hired: boolean;
  }>>({
    1: { mailed: true, emailed: false, texted: false, responded: true, hired: false },
    2: { mailed: true, emailed: true, texted: false, responded: false, hired: false },
  });

  const activeLead = leads.find((l) => l.id === activeLeadId) || leads[0];

  const filteredLeads = leads.filter((lead) => {
    if (enrichmentFilter === "notEnriched" && lead.isEnriched) return false;
    if (enrichmentFilter === "enriched" && !lead.isEnriched) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        lead.docket.toLowerCase().includes(q) ||
        lead.defendant.toLowerCase().includes(q) ||
        lead.plaintiff.toLowerCase().includes(q) ||
        lead.county.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const allVisibleSelected =
    filteredLeads.length > 0 &&
    filteredLeads.every((l) => selectedIds.includes(l.id));

  const toggleSelectAll = () => {
    if (allVisibleSelected) {
      setSelectedIds([]);
    } else {
      setSelectedIds(filteredLeads.map((l) => l.id));
    }
  };

  const toggleSelectRow = (id: number) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleEnrichSubmit = () => {
    setLeads((prev) =>
      prev.map((lead) => {
        if (selectedIds.includes(lead.id)) {
          return {
            ...lead,
            isEnriched: true,
            isCassValidated: alsoCass,
            enrichedDate: "Jul 10, 2026, 12:00 PM",
            phone: lead.phone || "(570) 555-0192",
            enrichedAddress: lead.enrichedAddress || `${lead.defendant} Residence, ${lead.county}, PA`,
          };
        }
        return lead;
      })
    );
    setEnrichModalOpen(false);
  };

  const toggleOutreach = (field: "mailed" | "emailed" | "texted" | "responded" | "hired") => {
    if (!activeLead) return;
    const current = outreachState[activeLead.id] || {
      mailed: false,
      emailed: false,
      texted: false,
      responded: false,
      hired: false,
    };
    setOutreachState({
      ...outreachState,
      [activeLead.id]: {
        ...current,
        [field]: !current[field],
      },
    });
  };

  const currentOutreach = activeLead
    ? outreachState[activeLead.id] || {
        mailed: false,
        emailed: false,
        texted: false,
        responded: false,
        hired: false,
      }
    : { mailed: false, emailed: false, texted: false, responded: false, hired: false };

  return (
    <div className="w-full rounded-2xl border border-border/80 bg-[#090d16] shadow-2xl shadow-black/80 overflow-hidden relative">
      {/* Window Frame Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-[#0e1422] border-b border-white/5 select-none">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#ef4444]/80 border border-[#dc2626]" />
            <span className="w-3 h-3 rounded-full bg-[#f59e0b]/80 border border-[#d97706]" />
            <span className="w-3 h-3 rounded-full bg-[#10b981]/80 border border-[#059669]" />
          </div>
          <span className="ml-3 text-xs font-mono text-muted-foreground/80 hidden sm:inline">
            DocketLinks Browser — [{t(f.title, locale)}]
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[11px] font-mono text-blue-400">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Rust Engine: 1ms • 4,049 Claimed Sync Active</span>
          </div>
        </div>
      </div>

      {/* Main Container: Claimed Leads Table + Slide-over Drawer */}
      <div className="flex flex-col lg:flex-row min-h-[640px]">
        {/* Left / Center Table Workspace */}
        <div className={`flex-1 flex flex-col transition-all duration-200 ${activeLeadId !== null ? "lg:max-w-[65%]" : "w-full"}`}>
          {/* Header Title Banner */}
          <div className="px-5 py-3.5 bg-[#0a0f1c] border-b border-white/5">
            <h3 className="text-base font-bold text-white tracking-tight">
              {t(f.title, locale)}
            </h3>
            <p className="text-xs text-muted-foreground">
              {t(f.subtitle, locale)}
            </p>
          </div>

          {/* Search, Filter & Action Bar */}
          <div className="p-3 bg-[#0d1222] border-b border-white/5 flex flex-wrap items-center justify-between gap-2.5 text-xs">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="relative">
                <Search className="w-3.5 h-3.5 text-muted-foreground absolute left-2.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={t(f.searchPlaceholder, locale)}
                  className="bg-[#13192c] border border-white/10 rounded-lg pl-8 pr-3 py-1.5 text-xs text-white placeholder:text-muted-foreground/60 w-44 sm:w-56 focus:outline-none focus:border-blue-500/50"
                />
              </div>

              {/* Enrichment Filter Dropdown */}
              <div className="relative">
                <select
                  value={enrichmentFilter}
                  onChange={(e) => setEnrichmentFilter(e.target.value as any)}
                  className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-slate-200 appearance-none pr-7 cursor-pointer focus:outline-none"
                >
                  <option value="all">{t(f.filters.allLeads, locale)}</option>
                  <option value="notEnriched">{t(f.filters.notEnriched, locale)}</option>
                  <option value="enriched">{t(f.filters.enriched, locale)}</option>
                </select>
                <ChevronDown className="w-3 h-3 text-muted-foreground absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Actions: Enrich Selected, Validate, Export CSV */}
            <div className="flex items-center gap-2">
              {selectedIds.length > 0 && (
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-muted-foreground mr-1">
                  <span className="text-blue-400 font-semibold">{selectedIds.length}</span>
                  <span>{t(f.actions.selectedText, locale)}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedIds([])}
                    className="text-slate-400 hover:text-white underline ml-1"
                  >
                    {t(f.actions.clearText, locale)}
                  </button>
                </div>
              )}

              {/* Enrich Selected Button */}
              <button
                type="button"
                onClick={() => setEnrichModalOpen(true)}
                disabled={selectedIds.length === 0}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedIds.length > 0
                    ? "bg-purple-600 hover:bg-purple-500 text-white shadow-lg shadow-purple-950/50 cursor-pointer"
                    : "bg-purple-600/40 text-purple-200/50 cursor-not-allowed"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t(f.actions.enrichSelected, locale)}</span>
              </button>

              {/* Validate Addresses Button */}
              <button
                type="button"
                className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-[#151c30] border border-white/10 hover:bg-[#1a233d] text-slate-200 text-xs transition-colors"
              >
                <BadgeCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>{t(f.actions.validateAddresses, locale)}</span>
              </button>

              {/* Export CSV Button */}
              <button
                type="button"
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t(f.actions.exportCsv, locale)}</span>
              </button>
            </div>
          </div>

          {/* Claimed Leads Table */}
          <div className="flex-1 overflow-x-auto bg-[#070a12]">
            <table className="w-full text-left text-xs whitespace-nowrap border-collapse">
              <thead>
                <tr className="bg-[#0b0f1a] border-b border-white/5 text-[10px] font-medium text-muted-foreground uppercase tracking-wider select-none">
                  <th className="py-2.5 px-3 w-8">
                    <button
                      type="button"
                      onClick={toggleSelectAll}
                      className="text-muted-foreground hover:text-white"
                    >
                      {allVisibleSelected ? (
                        <CheckSquare className="w-4 h-4 text-purple-400" />
                      ) : (
                        <Square className="w-4 h-4" />
                      )}
                    </button>
                  </th>
                  <th className="py-2.5 px-3">{t(f.tableHeaders.county, locale)}</th>
                  <th className="py-2.5 px-3">{t(f.tableHeaders.filed, locale)}</th>
                  <th className="py-2.5 px-3">{t(f.tableHeaders.defendant, locale)}</th>
                  <th className="py-2.5 px-3">{t(f.tableHeaders.plaintiff, locale)}</th>
                  <th className="py-2.5 px-3">{t(f.tableHeaders.judge, locale)}</th>
                  <th className="py-2.5 px-3 text-right">{t(f.tableHeaders.claimAmount, locale)}</th>
                  <th className="py-2.5 px-3 text-center">{t(f.tableHeaders.status, locale)}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 font-mono">
                {filteredLeads.map((lead) => {
                  const isChecked = selectedIds.includes(lead.id);
                  const isActive = activeLeadId === lead.id;

                  return (
                    <tr
                      key={lead.id}
                      onClick={() => setActiveLeadId(lead.id)}
                      className={`cursor-pointer transition-colors ${
                        isActive
                          ? "bg-purple-950/40 border-y border-purple-500/40 text-white"
                          : isChecked
                          ? "bg-blue-950/20 hover:bg-blue-950/30"
                          : "hover:bg-white/[0.03]"
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
                          {isChecked ? (
                            <CheckSquare className="w-4 h-4 text-purple-400" />
                          ) : (
                            <Square className="w-4 h-4 text-white/30" />
                          )}
                        </button>
                      </td>
                      <td className="py-2.5 px-3 font-sans text-slate-300 font-medium">
                        {lead.county}
                      </td>
                      <td className="py-2.5 px-3 text-muted-foreground">
                        {lead.filedDate}
                      </td>
                      <td className="py-2.5 px-3 font-sans font-semibold text-white">
                        {lead.defendant}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-muted-foreground max-w-[180px] truncate">
                        {lead.plaintiff}
                      </td>
                      <td className="py-2.5 px-3 font-sans text-slate-400">
                        {lead.judge}
                      </td>
                      <td className="py-2.5 px-3 text-right font-medium text-white">
                        {lead.amount}
                      </td>
                      <td className="py-2.5 px-3 text-center">
                        <div className="inline-flex items-center gap-1.5">
                          {lead.isEnriched ? (
                            <span
                              className="w-5 h-5 rounded-full bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[10px] text-emerald-400 font-bold"
                              title="Enriched"
                            >
                              #
                            </span>
                          ) : (
                            <span
                              className="w-5 h-5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[10px] text-amber-400 font-bold"
                              title="Not Enriched"
                            >
                              #
                            </span>
                          )}
                          {lead.isCassValidated && (
                            <span
                              className="w-5 h-5 rounded-full bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-[10px] text-blue-400"
                              title="CASS Validated"
                            >
                              <Check className="w-3 h-3" />
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Right Slide-over Lead Detail Drawer (Lead Inspector) */}
        {activeLead && activeLeadId !== null && (
          <div className="w-full lg:w-[35%] bg-[#0c111e] border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col max-h-[750px] overflow-y-auto">
            {/* Drawer Header */}
            <div className="p-4 border-b border-white/5 flex items-center justify-between sticky top-0 bg-[#0c111e] z-10">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs text-blue-400 font-bold">
                  {activeLead.docket}
                </span>
                {activeLead.isEnriched ? (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    <Check className="w-2.5 h-2.5" />
                    {t(f.drawer.enriched, locale)}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
                    {t(f.drawer.notEnriched, locale)}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActiveLeadId(null)}
                className="p-1 rounded hover:bg-white/5 text-muted-foreground hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Drawer Body Sections */}
            <div className="p-4 flex flex-col gap-4 text-xs">
              {/* 1. Claim Information */}
              <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-2">
                <span className="font-semibold text-slate-200">
                  {t(f.drawer.claimInfo, locale)}
                </span>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>{t(f.drawer.leadId, locale)}:</span>
                  <span className="font-mono text-white">{activeLead.leadId}</span>
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>{t(f.drawer.claimed, locale)}:</span>
                  <span className="text-slate-300">{activeLead.claimedDate}</span>
                </div>
                {activeLead.enrichedDate && (
                  <div className="flex justify-between text-[11px] text-muted-foreground">
                    <span>{t(f.drawer.enriched, locale)}:</span>
                    <span className="text-emerald-400">{activeLead.enrichedDate}</span>
                  </div>
                )}
              </div>

              {/* 2. Notes Section */}
              <div className="flex flex-col gap-1.5">
                <span className="font-semibold text-slate-200">
                  {t(f.drawer.notes, locale)}
                </span>
                <textarea
                  rows={2}
                  defaultValue={activeLead.notes || ""}
                  placeholder={t(f.drawer.notesPlaceholder, locale)}
                  className="w-full bg-[#111728] border border-white/10 rounded-lg p-2.5 text-xs text-white placeholder:text-muted-foreground/60 focus:outline-none focus:border-blue-500/50"
                />
              </div>

              {/* 3. Outreach & Outcome Tracking */}
              <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-3">
                <span className="font-semibold text-slate-200">
                  {t(f.drawer.outreachOutcome, locale)}
                </span>

                {/* Outreach toggles */}
                <div className="flex flex-col gap-1.5">
                  <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    {t(f.drawer.outreach, locale)}
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      type="button"
                      onClick={() => toggleOutreach("mailed")}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded text-[11px] border transition-colors ${
                        currentOutreach.mailed
                          ? "bg-blue-600/30 border-blue-500/50 text-white"
                          : "bg-[#0d1220] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Mail className="w-3 h-3" />
                      <span>{t(f.drawer.mailed, locale)}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleOutreach("emailed")}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded text-[11px] border transition-colors ${
                        currentOutreach.emailed
                          ? "bg-blue-600/30 border-blue-500/50 text-white"
                          : "bg-[#0d1220] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Mail className="w-3 h-3" />
                      <span>{t(f.drawer.emailed, locale)}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleOutreach("texted")}
                      className={`flex items-center gap-1.5 px-2 py-1 rounded text-[11px] border transition-colors ${
                        currentOutreach.texted
                          ? "bg-blue-600/30 border-blue-500/50 text-white"
                          : "bg-[#0d1220] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <MessageSquare className="w-3 h-3" />
                      <span>{t(f.drawer.texted, locale)}</span>
                    </button>
                  </div>
                </div>

                {/* Outcome toggles */}
                <div className="flex flex-col gap-1.5 pt-2 border-t border-white/5">
                  <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">
                    {t(f.drawer.outcome, locale)}
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => toggleOutreach("responded")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] border transition-colors ${
                        currentOutreach.responded
                          ? "bg-amber-500/20 border-amber-500/40 text-amber-300"
                          : "bg-[#0d1220] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{t(f.drawer.responded, locale)}</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => toggleOutreach("hired")}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-[11px] border transition-colors ${
                        currentOutreach.hired
                          ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-300"
                          : "bg-[#0d1220] border-white/10 text-muted-foreground"
                      }`}
                    >
                      <Check className="w-3 h-3" />
                      <span>{t(f.drawer.hired, locale)}</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* 4. Case Information */}
              <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">
                    {t(f.drawer.caseInfo, locale)}
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-1 text-[11px] text-blue-400 hover:text-blue-300"
                  >
                    <span>{t(f.drawer.docketSheet, locale)}</span>
                    <ExternalLink className="w-3 h-3" />
                  </button>
                </div>
                <div className="text-[11px] text-slate-300 font-medium">
                  {activeLead.caption}
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground pt-1">
                  <span>{t(f.drawer.county, locale)}:</span>
                  <span className="text-white">{activeLead.county}</span>
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>{t(f.drawer.court, locale)}:</span>
                  <span className="text-white">{activeLead.judge}</span>
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground">
                  <span>{t(f.drawer.filingDate, locale)}:</span>
                  <span className="text-white">{activeLead.filedDate}</span>
                </div>
              </div>

              {/* 5. Defendant & Contact Details */}
              <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-200">
                    {t(f.drawer.defendant, locale)}
                  </span>
                  <span className="text-white font-medium">{activeLead.defendant}</span>
                </div>
                {activeLead.phone && (
                  <div className="flex items-center gap-2 text-blue-400 font-mono text-[11px]">
                    <Phone className="w-3.5 h-3.5" />
                    <span className="hover:underline cursor-pointer">{activeLead.phone}</span>
                  </div>
                )}
              </div>

              {/* 6. Addresses: Docket vs Enriched */}
              <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-3">
                {/* Court Record Address */}
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">
                    {t(f.drawer.docketAddress, locale)}
                  </span>
                  <div className="flex items-center gap-2 text-slate-300 text-[11px]">
                    <MapPin className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                    <span>{activeLead.docketAddress || "—"}</span>
                  </div>
                </div>

                {/* Enriched Address */}
                {activeLead.isEnriched && activeLead.enrichedAddress && (
                  <div className="flex flex-col gap-1 pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider">
                        {t(f.drawer.enrichedAddress, locale)}
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] bg-emerald-500/20 text-emerald-400 font-bold">
                        {t(f.drawer.availableBadge, locale)}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-white font-medium text-[11px]">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{activeLead.enrichedAddress}</span>
                    </div>
                  </div>
                )}

                {/* CASS Validation Badge */}
                {activeLead.isCassValidated && (
                  <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px]">
                    <span className="text-muted-foreground">{t(f.drawer.validatedAddress, locale)}:</span>
                    <span className="px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-bold">
                      {t(f.drawer.cassCertified, locale)}
                    </span>
                  </div>
                )}
              </div>

              {/* 7. Upcoming Events */}
              {activeLead.upcomingHearing && (
                <div className="p-3 rounded-xl bg-[#111728] border border-white/5 flex flex-col gap-1">
                  <span className="font-semibold text-slate-200">
                    {t(f.drawer.upcomingEvents, locale)}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-amber-400 mt-1">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span className="font-medium">{t(f.drawer.civilHearing, locale)}:</span>
                    <span>{activeLead.upcomingHearing}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Modal Dialog: Enrich Selected Leads */}
      {enrichModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="w-full max-w-md rounded-2xl bg-[#111628] border border-white/15 shadow-2xl p-5 flex flex-col gap-4">
            {/* Modal Title */}
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">
                    {t(f.modal.title, locale)}
                  </h4>
                  <p className="text-[11px] text-muted-foreground">
                    {t(f.modal.desc, locale)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setEnrichModalOpen(false)}
                className="text-muted-foreground hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {t(f.modal.subtext, locale)}
            </p>

            {/* Amber Usage Note Callout */}
            <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200/90 leading-relaxed">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-amber-300">
                  {t(f.modal.usageNoteTitle, locale)}
                </span>
                <span className="text-[11px]">
                  {t(f.modal.usageNoteText, locale)}
                </span>
              </div>
            </div>

            {/* Checkbox: Also CASS Certify */}
            <div
              onClick={() => setAlsoCass(!alsoCass)}
              className="p-3 rounded-xl bg-[#0d1220] border border-white/10 hover:border-white/20 cursor-pointer flex items-start gap-2.5 transition-colors"
            >
              <div className="mt-0.5">
                {alsoCass ? (
                  <CheckSquare className="w-4 h-4 text-emerald-400" />
                ) : (
                  <Square className="w-4 h-4 text-white/30" />
                )}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-white">
                  {t(f.modal.alsoCassCheckbox, locale)}
                </span>
                <span className="text-[11px] text-muted-foreground">
                  {t(f.modal.alsoCassSubtext, locale)}
                </span>
              </div>
            </div>

            {/* Modal Buttons */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-white/10">
              <button
                type="button"
                onClick={() => setEnrichModalOpen(false)}
                className="px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white text-xs font-medium transition-colors"
              >
                {t(f.modal.cancelButton, locale)}
              </button>
              <button
                type="button"
                onClick={handleEnrichSubmit}
                className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-lg shadow-purple-950/50 transition-all"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t(f.modal.confirmButton, locale)}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
