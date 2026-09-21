"use client";

import { Monitor, Apple, Terminal, Download, ShieldCheck, HardDrive, CheckCircle2 } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { type PlatformDownloadInfo } from "@/lib/content/download";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PlatformDownloadCardsProps {
  locale: Locale;
  platforms: PlatformDownloadInfo[];
}

export function PlatformDownloadCards({ locale, platforms }: PlatformDownloadCardsProps) {
  const getIcon = (id: PlatformDownloadInfo["id"]) => {
    switch (id) {
      case "windows":
        return <Monitor className="h-6 w-6 text-primary" />;
      case "macos":
        return <Apple className="h-6 w-6 text-secondary" />;
      case "linux":
        return <Terminal className="h-6 w-6 text-emerald-400" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full">
      {platforms.map((platform) => (
        <Card
          key={platform.id}
          className="flex flex-col justify-between border-line bg-panel/80 backdrop-blur-sm hover:border-primary/40 hover:shadow-xl transition-all duration-300"
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/60 border border-line">
                {getIcon(platform.id)}
              </div>
              <Badge variant="outline" className="font-mono text-[10px]">
                {platform.architecture}
              </Badge>
            </div>

            <CardTitle className="mt-4 text-xl">
              {platform.name}
            </CardTitle>
            <CardDescription className="text-xs mb-4">
              {t(platform.osLabel, locale)}
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-4 flex-1">
            <div className="flex items-start gap-2 rounded-xl bg-muted/40 p-3 text-xs text-dim grow">
              <HardDrive className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
              <span>{t(platform.requirements, locale)}</span>
            </div>

            {/* Primary Download */}
            <a href={platform.primaryUrl} className="w-full mt-auto">
              <Button variant="default" size="lg" className="w-full gap-2 font-bold justify-center">
                <Download className="h-4 w-4" />
                <span>{t(platform.primaryLabel, locale)}</span>
              </Button>
            </a>

            {/* Secondary Formats */}
            <div className="min-h-[88px] flex flex-col justify-start">
              {platform.secondaryOptions.length > 0 && (
                <div className="flex flex-col gap-2 pt-2 border-t border-line">
                  <span className="text-[11px] font-semibold text-dim">
                    {locale === "es" ? "Instaladores alternativos:" : "Alternative packages:"}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {platform.secondaryOptions.map((opt, idx) => (
                      <a
                        key={idx}
                        href={opt.url}
                        className="inline-flex items-center gap-1.5 rounded-lg border border-line bg-muted/50 px-2.5 py-1 text-xs text-foreground hover:bg-muted hover:border-primary/40 transition-colors"
                      >
                        <Download className="h-3 w-3 text-dim" />
                        <span>{t(opt.label, locale)}</span>
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="pt-2 text-[11px] text-dim flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>
              {locale === "es"
                ? "Firma digital y actualizaciones automáticas"
                : "Digitally signed with automatic updates"}
            </span>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
