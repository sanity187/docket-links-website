"use client";

import { useState } from "react";
import {
  Sparkles,
  Download,
  Copy,
  ChevronDown,
  ToggleLeft,
  ToggleRight,
  ClipboardCopy,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { featuresContent } from "@/lib/content/features";

interface AILetterPreviewProps {
  locale: Locale;
}

export function AILetterPreview({ locale }: AILetterPreviewProps) {
  const ai = featuresContent.aiLetterGenerator.ui;
  const [selectedType, setSelectedType] = useState("dui");
  const [customPromptEnabled, setCustomPromptEnabled] = useState(false);

  const selectedTypeData = ai.letterTypes.find((lt) => lt.id === selectedType) || ai.letterTypes[0];

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
            {t(ai.windowTitle, locale)}
          </span>
        </div>
      </div>

      {/* Page Header */}
      <div className="px-5 py-3.5 bg-[#0a0f1c] border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-white tracking-tight">
              {t(ai.pageHeader.title, locale)}
            </h3>
            <p className="text-[11px] text-muted-foreground">
              {t(ai.pageHeader.subtitle, locale)}
            </p>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-mono text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          {t(ai.quotaBadge, locale)}
        </div>
      </div>

      {/* 3-Column Layout */}
      <div className="flex flex-col lg:flex-row min-h-[520px]">
        {/* Left Panel: Generate Letter */}
        <div className="lg:w-[260px] shrink-0 border-r border-white/5 p-4 flex flex-col gap-4 bg-[#0a0f1a]">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span className="text-xs font-bold text-white">{t(ai.generatePanel.title, locale)}</span>
          </div>

          {/* Letter Type Selector */}
          <div>
            <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1.5">
              {t(ai.generatePanel.letterTypeLabel, locale)}
            </label>
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full bg-[#13192c] border border-white/10 rounded-lg px-3 py-2 text-xs text-white appearance-none cursor-pointer focus:outline-none focus:border-blue-500/50"
              >
                {ai.letterTypes.map((lt) => (
                  <option key={lt.id} value={lt.id}>
                    {t(lt.label, locale)}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-3 h-3 text-muted-foreground absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
            <p className="text-[10px] text-muted-foreground/60 mt-1">
              {t(selectedTypeData.description, locale)}
            </p>
          </div>

          {/* Custom Prompt Toggle */}
          <div>
            <label className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider block mb-1">
              {t(ai.generatePanel.customPromptLabel, locale)}
            </label>
            <div className="flex items-center justify-between">
              <span className="text-[10px] text-muted-foreground/60">
                {t(ai.generatePanel.customPromptSubtext, locale)}
              </span>
              <button
                type="button"
                onClick={() => setCustomPromptEnabled(!customPromptEnabled)}
                className={`w-8 h-4.5 rounded-full relative transition-colors shrink-0 ml-2 ${
                  customPromptEnabled ? "bg-blue-600" : "bg-slate-600"
                }`}
              >
                <div
                  className={`absolute top-0.5 w-3.5 h-3.5 rounded-full bg-white transition-all ${
                    customPromptEnabled ? "right-0.5" : "left-0.5"
                  }`}
                />
              </button>
            </div>
          </div>

          {/* Generate Button */}
          <button
            type="button"
            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-xs font-semibold shadow-lg shadow-blue-950/50 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            {t(ai.generatePanel.generateButton, locale)}
          </button>

          {/* Available Placeholders */}
          <div className="pt-3 border-t border-white/5">
            <h4 className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1">
              {t(ai.generatePanel.placeholdersTitle, locale)}
            </h4>
            <p className="text-[9px] text-muted-foreground/50 mb-2">
              {t(ai.generatePanel.placeholdersSubtext, locale)}
            </p>
            <div className="flex flex-col gap-1">
              {ai.placeholders.map((ph) => (
                <div
                  key={ph}
                  className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#13192c] border border-white/5 text-[11px] font-mono text-blue-300 group hover:border-blue-500/30 transition-colors"
                >
                  <span>{ph}</span>
                  <ClipboardCopy className="w-3 h-3 text-muted-foreground/40 group-hover:text-blue-400 transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Panel: Generated Letter Preview */}
        <div className="flex-1 flex flex-col p-4 bg-[#0c1120]">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xs font-bold text-white">{t(ai.previewPanel.title, locale)}</h4>
            <div className="flex items-center gap-2">
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#13192c] border border-white/10 text-[11px] text-slate-300 hover:border-blue-500/30 transition-colors"
              >
                <Download className="w-3 h-3" />
                {t(ai.previewPanel.downloadButton, locale)}
              </button>
              <button
                type="button"
                className="flex items-center gap-1 px-2 py-1 rounded-lg bg-[#13192c] border border-white/10 text-[11px] text-slate-300 hover:border-blue-500/30 transition-colors"
              >
                <Copy className="w-3 h-3" />
                {t(ai.previewPanel.copyButton, locale)}
              </button>
            </div>
          </div>

          {/* Letter Content */}
          <div className="flex-1 rounded-xl bg-[#0a0f1a] border border-white/5 p-5 overflow-y-auto font-mono text-[11px] leading-relaxed text-slate-300">
            {ai.sampleLetterContent.map((line, i) => {
              if (line === "") return <br key={i} />;
              // Highlight {{placeholders}} in blue
              const parts = line.split(/(\{\{[^}]+\}\})/g);
              // Highlight **bold** text in white
              return (
                <p key={i} className="mb-0.5">
                  {parts.map((part, j) => {
                    if (part.startsWith("{{") && part.endsWith("}}")) {
                      return (
                        <span key={j} className="text-emerald-400 bg-emerald-500/10 px-0.5 rounded">
                          {part}
                        </span>
                      );
                    }
                    // Handle bold markers
                    const boldParts = part.split(/(\*\*[^*]+\*\*)/g);
                    return boldParts.map((bp, k) => {
                      if (bp.startsWith("**") && bp.endsWith("**")) {
                        return (
                          <span key={`${j}-${k}`} className="text-white font-semibold">
                            {bp.slice(2, -2)}
                          </span>
                        );
                      }
                      return <span key={`${j}-${k}`}>{bp}</span>;
                    });
                  })}
                </p>
              );
            })}
          </div>

          {/* Copy Notice */}
          <p className="text-[10px] text-muted-foreground/50 mt-2 italic">
            {t(ai.previewPanel.copyNotice, locale)}
          </p>
        </div>

        {/* Right Panel: Recent Generations */}
        <div className="lg:w-[200px] shrink-0 border-l border-white/5 p-4 bg-[#0a0f1a]">
          <h4 className="text-xs font-bold text-white mb-3">{t(ai.recentPanel.title, locale)}</h4>
          <div className="flex flex-col gap-2">
            {ai.recentGenerations.map((gen) => (
              <div
                key={gen.id}
                className="p-2.5 rounded-lg bg-[#13192c] border border-white/5 hover:border-blue-500/30 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 mb-1">
                  <Sparkles className="w-3 h-3 text-purple-400" />
                  <span className="text-[11px] font-semibold text-white truncate">{gen.name}</span>
                </div>
                <p className="text-[9px] text-muted-foreground/60 mb-1.5">{gen.date}</p>
                <span className="text-[9px] px-1.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-medium">
                  {t(ai.recentPanel.completed, locale)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
