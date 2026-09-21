"use client";

import { Download, Monitor, Apple, Terminal, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { type Locale } from "@/lib/i18n/config";
import { type PlatformDownloadInfo } from "@/lib/content/download";
import { useDetectedOS } from "./os-detector";
import { Button } from "@/components/ui/button";

interface HeroDownloadButtonProps {
  locale: Locale;
  platforms: PlatformDownloadInfo[];
  version: string;
  className?: string;
}

export function HeroDownloadButton({ locale, platforms, version, className }: HeroDownloadButtonProps) {
  const detectedOS = useDetectedOS();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentPlatform =
    platforms.find((p) => p.id === detectedOS) || platforms[0];

  useEffect(() => {
    const handleOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case "windows":
        return <Monitor className="h-5 w-5 shrink-0" />;
      case "macos":
        return <Apple className="h-5 w-5 shrink-0" />;
      case "linux":
        return <Terminal className="h-5 w-5 shrink-0" />;
      default:
        return <Download className="h-5 w-5 shrink-0" />;
    }
  };

  return (
    <div ref={dropdownRef} className={`relative inline-flex items-center ${className || ""}`}>
      {/* Primary 1-Click Download Button */}
      <a
        href={currentPlatform.primaryUrl}
        className="inline-flex items-center gap-2.5 rounded-l-xl bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] px-6 py-3.5 text-sm sm:text-base font-bold text-primary-foreground shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:bg-right transition-all duration-300 active:scale-[0.99]"
      >
        {getIcon(currentPlatform.id)}
        <div className="flex flex-col text-left">
          <span>
            {locale === "es"
              ? `Descargar para ${currentPlatform.name}`
              : `Download for ${currentPlatform.name}`}
          </span>
          <span className="text-[10px] font-normal opacity-85">
            {currentPlatform.recommendedExt} • v{version}
          </span>
        </div>
      </a>

      {/* Dropdown Toggle for Other Platforms */}
      <button
        type="button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-label="Select alternative platform"
        aria-expanded={dropdownOpen}
        className="inline-flex h-[52px] items-center justify-center rounded-r-xl border-l border-white/20 bg-secondary px-3 text-primary-foreground hover:brightness-110 active:scale-[0.98] transition-all cursor-pointer"
      >
        <ChevronDown
          className={`h-4 w-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""
            }`}
        />
      </button>

      {/* Dropdown Panel */}
      {dropdownOpen && (
        <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-line bg-panel/95 backdrop-blur-xl p-2 shadow-2xl z-50 animate-in fade-in-50 slide-in-from-top-2 duration-150">
          <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-dim">
            {locale === "es" ? "Otros Sistemas Operativos" : "Other Operating Systems"}
          </div>

          <div className="flex flex-col gap-1">
            {platforms.map((platform) => (
              <a
                key={platform.id}
                href={platform.primaryUrl}
                onClick={() => setDropdownOpen(false)}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-foreground hover:bg-muted/70 transition-colors"
              >
                <div className="flex items-center gap-2">
                  {getIcon(platform.id)}
                  <span>{platform.name}</span>
                </div>
                <span className="text-[10px] text-dim">{platform.recommendedExt}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
