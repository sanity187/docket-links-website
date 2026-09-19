"use client";

import { useState, useMemo } from "react";
import {
  Settings,
  FileOutput,
  Plug,
  Users,
  Building2,
  User,
  Info,
  Plus,
  ChevronDown,
  Trash2,
  Calculator,
  Hash,
  Copy,
  FileText,
  ToggleRight,
  ToggleLeft,
  Play,
  Check,
  X,
  Pencil,
  Power,
  GripVertical,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent } from "@/lib/content/features";

interface ExportRulesPreviewProps {
  locale: Locale;
}

export function ExportRulesPreview({ locale }: ExportRulesPreviewProps) {
  const r = featuresContent.rulesEngine.ui;

  // Modal state
  const [modalOpen, setModalOpen] = useState(true);
  const [activeTab, setActiveTab] = useState<"math" | "fixed" | "copy" | "template">("math");

  // Live tester state
  const [activePreset, setActivePreset] = useState("civil-dauphin");
  const [showResult, setShowResult] = useState(true);

  // Form field state (visual only)
  const [ruleName] = useState("Dauphin Civil Claim Fee (20% with min/max)");
  const [targetColumn] = useState("Calculated_Fee");
  const [description] = useState(
    "Multiplies Claim Amount by 20% with min $400 and max $1,800 for Dauphin County Civil Actions"
  );
  const [operand] = useState("0.2");
  const [minClamp] = useState("400");
  const [maxClamp] = useState("1800");
  const [decimalPlaces] = useState("2");
  const [rawCentsEnabled, setRawCentsEnabled] = useState(true);

  // Get active preset data
  const activePresetData = useMemo(() => {
    return r.presets.find((p) => p.id === activePreset) || r.presets[0];
  }, [activePreset, r.presets]);

  // Calculate result
  const calculatedResult = useMemo(() => {
    const amount = parseFloat(activePresetData.claimAmount);
    if (activePresetData.caseType !== "Civil Action") return null;
    const counties = ["Dauphin", "Westmoreland", "Allegheny"];
    if (!counties.includes(activePresetData.county)) return null;

    let result = amount * 0.2;
    result = Math.max(400, Math.min(1800, result));
    // Round to nearest 100
    result = Math.ceil(result / 100) * 100;
    return result;
  }, [activePresetData]);

  const isMatched = calculatedResult !== null;

  // Settings nav items
  const navItems = [
    { key: "general", label: r.settingsNav.general, icon: Settings, active: false },
    { key: "exportRules", label: r.settingsNav.exportRules, icon: FileOutput, active: true },
    { key: "integrations", label: r.settingsNav.integrations, icon: Plug, active: false },
    { key: "team", label: r.settingsNav.team, icon: Users, active: false },
    { key: "tenantAccount", label: r.settingsNav.tenantAccount, icon: Building2, active: false },
    { key: "userAccount", label: r.settingsNav.userAccount, icon: User, active: false },
    { key: "about", label: r.settingsNav.about, icon: Info, active: false },
  ];

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
            {t(r.windowTitle, locale)}
          </span>
        </div>
      </div>

      {/* Main Layout: Settings Sidebar + Content */}
      <div className="flex min-h-[680px]">
        {/* Settings Sidebar */}
        <div className="hidden md:flex flex-col w-48 bg-[#0a0f1a] border-r border-white/5 py-3 px-2 shrink-0">
          <div className="flex items-center gap-2 px-3 py-2 mb-2">
            <Settings className="w-4.5 h-4.5 text-slate-400" />
            <span className="text-sm font-bold text-white tracking-tight">
              {t(r.settingsNav.settingsTitle, locale)}
            </span>
          </div>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.key}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium cursor-default transition-colors ${
                  item.active
                    ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                    : "text-slate-400 hover:text-slate-300 hover:bg-white/5"
                }`}
              >
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span>{t(item.label, locale)}</span>
              </div>
            );
          })}
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col relative overflow-hidden">
          {/* Page Header */}
          <div className="p-5 bg-[#0a0f1c] border-b border-white/5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-bold text-white tracking-tight">
                  {t(r.pageHeader.title, locale)}
                </h3>
                <p className="text-xs text-muted-foreground mt-1 max-w-xl leading-relaxed">
                  {t(r.pageHeader.subtitle, locale)}
                </p>
              </div>
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors"
              >
                <Plus className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{t(r.pageHeader.addRuleButton, locale)}</span>
              </button>
            </div>
          </div>

          {/* Stats + Configured Rules */}
          <div className="p-5 flex flex-col gap-4">
            {/* Total Rules Badge */}
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <span className="text-[11px] text-muted-foreground uppercase tracking-wider">
                  {t(r.pageHeader.totalRules, locale)}
                </span>
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              {/* Template toggles */}
              <div className="flex items-center gap-3 ml-auto text-[11px] text-muted-foreground">
                <span className="hidden lg:inline">Templates:</span>
                <span className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
                  <ToggleLeft className="w-3 h-3" /> Civil 20% Fee
                </span>
                <span className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded bg-white/5 border border-white/10">
                  <ToggleLeft className="w-3 h-3" /> LVNV Matcher
                </span>
              </div>
            </div>

            {/* Configured Rules Section */}
            <div>
              <h4 className="text-sm font-semibold text-white mb-1">
                {t(r.pageHeader.configuredHeader, locale)}
              </h4>
              <p className="text-[11px] text-muted-foreground mb-3">
                {t(r.pageHeader.configuredSubtext, locale)}
              </p>

              {/* Rule Card */}
              {r.configuredRulesList.map((rule) => (
                <div
                  key={rule.id}
                  className="flex items-center gap-3 p-3 rounded-xl bg-[#0d1222] border border-white/10 hover:border-blue-500/30 transition-colors cursor-pointer group"
                  onClick={() => setModalOpen(true)}
                >
                  <GripVertical className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0 hidden sm:block" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold text-white truncate">
                        {rule.name}
                      </span>
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                        Active
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground mt-0.5 truncate">
                      {rule.description}
                    </p>
                    <p className="text-[10px] text-slate-500 mt-0.5 truncate font-mono">
                      ⤷ {rule.conditionSummary}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="w-9 h-5 rounded-full bg-blue-600 relative">
                      <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                    </div>
                    <Pencil className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                    <Trash2 className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ========== MODAL OVERLAY ========== */}
          {modalOpen && (
            <div className="absolute inset-0 z-30 flex items-start justify-center bg-black/60 backdrop-blur-sm overflow-y-auto py-4">
              <div className="w-full max-w-2xl mx-4 bg-[#0e1422] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 overflow-hidden">
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/5">
                  <div>
                    <h3 className="text-sm font-bold text-white">{t(r.modal.title, locale)}</h3>
                    <p className="text-[11px] text-muted-foreground mt-0.5">
                      {t(r.modal.subtitle, locale)}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 text-[11px] text-muted-foreground">
                      <span>{t(r.modal.ruleActive, locale)}</span>
                      <div className="w-9 h-5 rounded-full bg-blue-600 relative cursor-pointer">
                        <div className="absolute right-0.5 top-0.5 w-4 h-4 rounded-full bg-white" />
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={() => setModalOpen(false)}
                      className="p-1 rounded-lg hover:bg-white/10 text-muted-foreground hover:text-white transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-4 flex flex-col gap-4">
                  {/* Rule Name & Target Column */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        {t(r.modal.ruleNameLabel, locale)}
                      </label>
                      <input
                        readOnly
                        value={ruleName}
                        className="w-full bg-[#13192c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                        {t(r.modal.targetColumnLabel, locale)}
                      </label>
                      <input
                        readOnly
                        value={targetColumn}
                        className="w-full bg-[#13192c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white font-mono"
                      />
                      <span className="text-[10px] text-muted-foreground/60 italic mt-0.5 block">
                        {t(r.modal.targetColumnSubtext, locale)}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
                      {t(r.modal.descriptionLabel, locale)}
                    </label>
                    <input
                      readOnly
                      value={description}
                      className="w-full bg-[#13192c] border border-white/10 rounded-lg px-3 py-2 text-xs text-slate-300"
                    />
                  </div>

                  {/* ── Step 1: When Lead Matches Condition ── */}
                  <div className="pt-2 border-t border-white/5">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="text-xs font-bold text-white">
                        {t(r.modal.step1Title, locale)}
                      </h4>
                      <div className="flex items-center gap-2 text-[11px]">
                        <span className="text-muted-foreground">{t(r.modal.conditionModeLabel, locale)}</span>
                        <span className="px-2 py-0.5 rounded bg-[#13192c] border border-white/10 text-white font-medium">
                          {t(r.modal.matchAll, locale)}
                        </span>
                      </div>
                    </div>

                    {/* Condition Row 1: County */}
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 py-0.5 rounded w-7 text-center shrink-0">
                        {t(r.modal.ifLabel, locale)}
                      </span>
                      <select className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white appearance-none cursor-default min-w-[80px]">
                        <option>County</option>
                      </select>
                      <select className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white appearance-none cursor-default min-w-[130px]">
                        <option>Is One Of (comma-sep)</option>
                      </select>
                      <input
                        readOnly
                        value="Dauphin, Westmoreland, Allegheny"
                        className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white flex-1 min-w-[140px]"
                      />
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground shrink-0 hidden sm:inline">
                        {t(r.modal.exactCaseBadge, locale)}
                      </span>
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0 cursor-pointer hover:text-red-400" />
                    </div>

                    {/* Condition Row 2: Case Type */}
                    <div className="flex items-center gap-2 mb-3 flex-wrap">
                      <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded shrink-0">
                        {t(r.modal.andLabel, locale)}
                      </span>
                      <select className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white appearance-none cursor-default min-w-[80px]">
                        <option>Case Type</option>
                      </select>
                      <select className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white appearance-none cursor-default min-w-[80px]">
                        <option>Contains</option>
                      </select>
                      <input
                        readOnly
                        value="Civil"
                        className="bg-[#13192c] border border-white/10 rounded-lg px-2 py-1.5 text-xs text-white flex-1 min-w-[80px]"
                      />
                      <span className="text-[9px] px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-muted-foreground shrink-0 hidden sm:inline">
                        {t(r.modal.exactCaseBadge, locale)}
                      </span>
                      <Trash2 className="w-3.5 h-3.5 text-muted-foreground/40 shrink-0 cursor-pointer hover:text-red-400" />
                    </div>

                    <button
                      type="button"
                      className="text-[11px] text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" />
                      {t(r.modal.addCondition, locale)}
                    </button>
                  </div>

                  {/* ── Step 2: Calculate or Produce Value ── */}
                  <div className="pt-2 border-t border-white/5">
                    <h4 className="text-xs font-bold text-white mb-3">
                      {t(r.modal.step2Title, locale)}
                    </h4>

                    {/* Tabs */}
                    <div className="flex gap-1 mb-4">
                      {(["math", "fixed", "copy", "template"] as const).map((tab) => {
                        const icons = {
                          math: Calculator,
                          fixed: Hash,
                          copy: Copy,
                          template: FileText,
                        };
                        const labels = {
                          math: r.modal.tabs.math,
                          fixed: r.modal.tabs.fixed,
                          copy: r.modal.tabs.copy,
                          template: r.modal.tabs.template,
                        };
                        const Icon = icons[tab];
                        return (
                          <button
                            key={tab}
                            type="button"
                            onClick={() => setActiveTab(tab)}
                            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-medium transition-all ${
                              activeTab === tab
                                ? "bg-[#1a233d] border border-blue-500/30 text-white"
                                : "bg-[#13192c] border border-white/10 text-muted-foreground hover:text-white"
                            }`}
                          >
                            <Icon className="w-3 h-3" />
                            <span className="hidden sm:inline">{t(labels[tab], locale)}</span>
                          </button>
                        );
                      })}
                    </div>

                    {/* Math Calculation Fields */}
                    {activeTab === "math" && (
                      <div className="flex flex-col gap-3">
                        {/* Row 1: Source, Operation, Operand */}
                        <div className="grid grid-cols-3 gap-3">
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.sourceFieldLabel, locale)}
                            </label>
                            <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1.5">
                              <span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded text-[10px] font-medium">
                                Claim Amount
                              </span>
                              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.operationLabel, locale)}
                            </label>
                            <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1.5">
                              <span>Multiply (×)</span>
                              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.operandLabel, locale)}
                            </label>
                            <input
                              readOnly
                              value={operand}
                              className="w-full bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                            />
                          </div>
                        </div>

                        {/* Row 2: Min Clamp, Max Clamp, Output Format, Decimal Places */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.minClampLabel, locale)}
                              <span className="text-[9px] ml-1 text-muted-foreground/50">
                                {t(r.modal.optionalBadge, locale)}
                              </span>
                            </label>
                            <input
                              readOnly
                              value={minClamp}
                              className="w-full bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.maxClampLabel, locale)}
                              <span className="text-[9px] ml-1 text-muted-foreground/50">
                                {t(r.modal.optionalBadge, locale)}
                              </span>
                            </label>
                            <input
                              readOnly
                              value={maxClamp}
                              className="w-full bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                            />
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.outputFormatLabel, locale)}
                            </label>
                            <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1">
                              <span className="bg-blue-500/20 text-blue-400 px-1.5 py-0.5 rounded text-[10px]">
                                Currency ($1,234.56)
                              </span>
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.decimalPlacesLabel, locale)}
                            </label>
                            <input
                              readOnly
                              value={decimalPlaces}
                              className="w-full bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white"
                            />
                          </div>
                        </div>

                        {/* Row 3: Rounding Mode, Rounding Target */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.roundingModeLabel, locale)}
                            </label>
                            <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1.5">
                              <span>Round UP / Ceil (Always Round Up)</span>
                              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
                            </div>
                          </div>
                          <div>
                            <label className="text-[10px] text-muted-foreground block mb-1">
                              {t(r.modal.roundingTargetLabel, locale)}
                            </label>
                            <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1.5">
                              <span>Nearest 100 ($100, $200, $300…)</span>
                              <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
                            </div>
                          </div>
                        </div>

                        {/* Raw Cents Toggle */}
                        <div className="flex items-center gap-2.5">
                          <button
                            type="button"
                            onClick={() => setRawCentsEnabled(!rawCentsEnabled)}
                            className={`w-9 h-5 rounded-full relative transition-colors shrink-0 ${
                              rawCentsEnabled ? "bg-blue-600" : "bg-slate-600"
                            }`}
                          >
                            <div
                              className={`absolute top-0.5 w-4 h-4 rounded-full bg-white transition-all ${
                                rawCentsEnabled ? "right-0.5" : "left-0.5"
                              }`}
                            />
                          </button>
                          <span className="text-[11px] text-muted-foreground leading-tight">
                            {t(r.modal.rawCentsToggle, locale)}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* ── Step 3: Otherwise (Fallback) ── */}
                  <div className="pt-2 border-t border-white/5">
                    <h4 className="text-xs font-bold text-white mb-3">
                      {t(r.modal.step3Title, locale)}
                    </h4>
                    <div className="bg-[#13192c] border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white flex items-center gap-1.5 max-w-xs">
                      <span>{t(r.modal.fallbackOptions.leaveBlank, locale)}</span>
                      <ChevronDown className="w-3 h-3 text-muted-foreground ml-auto" />
                    </div>
                  </div>

                  {/* ── Live Rule Tester ── */}
                  <div className="pt-3 border-t border-white/5">
                    <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
                      <div className="flex items-center gap-2">
                        <Play className="w-3.5 h-3.5 text-emerald-400" />
                        <h4 className="text-xs font-bold text-white">
                          {t(r.modal.liveTester.title, locale)}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] text-muted-foreground">
                          {t(r.modal.liveTester.loadPreset, locale)}
                        </span>
                        {r.presets.map((preset) => (
                          <button
                            key={preset.id}
                            type="button"
                            onClick={() => {
                              setActivePreset(preset.id);
                              setShowResult(true);
                            }}
                            className={`px-2 py-1 rounded text-[10px] font-medium transition-all ${
                              activePreset === preset.id
                                ? "bg-blue-600/20 text-blue-400 border border-blue-500/30"
                                : "bg-[#13192c] text-slate-300 border border-white/10 hover:border-blue-500/30"
                            }`}
                          >
                            {t(preset.label, locale)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Test Fields + Result */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {/* Sample Lead Fields */}
                      <div className="bg-[#0a0f1a] rounded-xl border border-white/5 p-3">
                        <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-2">
                          {t(r.modal.liveTester.sampleFieldsHeader, locale)}
                        </span>
                        <div className="grid grid-cols-2 gap-2">
                          {[
                            { label: "county", value: activePresetData.county },
                            { label: "case_type", value: activePresetData.caseType },
                            { label: "case_status", value: activePresetData.caseStatus },
                            { label: "claim_amount", value: `$${activePresetData.claimAmount}` },
                            { label: "plaintiff", value: activePresetData.plaintiff },
                            { label: "defendant", value: activePresetData.defendant },
                          ].map((field) => (
                            <div key={field.label}>
                              <span className="text-[9px] text-muted-foreground/60 block">{field.label}</span>
                              <div className="bg-[#13192c] border border-white/10 rounded px-2 py-1 text-[11px] text-white font-mono truncate">
                                {field.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Evaluation Result */}
                      <div className="bg-[#0a0f1a] rounded-xl border border-white/5 p-3 flex flex-col">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-semibold text-muted-foreground">
                            {t(r.modal.liveTester.evaluationResultHeader, locale)}
                          </span>
                          {showResult && (
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                                isMatched
                                  ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                                  : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                              }`}
                            >
                              {isMatched
                                ? `✓ ${t(r.modal.liveTester.matchedBadge, locale)}`
                                : `⚠ ${t(r.modal.liveTester.unmatchedBadge, locale)}`}
                            </span>
                          )}
                        </div>
                        {showResult && (
                          <div className="flex-1 flex flex-col items-center justify-center gap-1">
                            {isMatched ? (
                              <>
                                <span className="text-[10px] text-muted-foreground uppercase tracking-wider">
                                  {t(r.modal.liveTester.targetColumnLabel, locale)} {targetColumn}
                                </span>
                                <span className="text-2xl font-bold text-emerald-400">
                                  ${calculatedResult?.toFixed(2)}
                                </span>
                                <span className="text-[10px] text-muted-foreground mt-2 text-center leading-relaxed">
                                  {t(r.modal.liveTester.matchedNotice, locale)} {targetColumn}.
                                </span>
                              </>
                            ) : (
                              <span className="text-[11px] text-muted-foreground text-center leading-relaxed">
                                {t(r.modal.liveTester.unmatchedNotice, locale)}
                              </span>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="flex items-center justify-between p-4 border-t border-white/5">
                  <button
                    type="button"
                    onClick={() => setModalOpen(false)}
                    className="text-xs text-muted-foreground hover:text-white transition-colors"
                  >
                    {t(r.modal.cancelButton, locale)}
                  </button>
                  <button
                    type="button"
                    className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold transition-colors"
                  >
                    {t(r.modal.updateRuleButton, locale)}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
