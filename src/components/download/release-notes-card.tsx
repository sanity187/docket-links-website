import { Sparkles, Check, Cloud, ArrowUpRight } from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { t } from "@/lib/i18n/resolve";
import { downloadContent } from "@/lib/content/download";
import { siteConfig } from "@/lib/site-config";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ReleaseNotesCardProps {
  locale: Locale;
  version: string;
  releaseDate: string;
}

export function ReleaseNotesCard({ locale, version, releaseDate }: ReleaseNotesCardProps) {
  return (
    <Card className="border-primary/20 bg-gradient-to-br from-panel via-panel to-primary/5 p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-line pb-6">
        <div>
          <div className="flex items-center gap-2">
            <Badge variant="default" className="gap-1">
              <Sparkles className="h-3 w-3" />
              v{version}
            </Badge>
            <span className="text-xs text-dim">
              {releaseDate}
            </span>
          </div>
          <h3 className="mt-2 text-xl font-bold text-foreground">
            {t(downloadContent.releaseNotesHeading, locale)} v{version}
          </h3>
        </div>

        <a
          href={siteConfig.release.updateFeedUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
        >
          <Cloud className="h-3.5 w-3.5" />
          <span>{locale === "es" ? "Feed de Actualizaciones JSON" : "Live JSON Update Feed"}</span>
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>

      <CardContent className="p-0 pt-6">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs text-dim">
          {downloadContent.releaseNotes.map((note, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check className="h-3 w-3" />
              </div>
              <span className="leading-relaxed text-foreground/90">
                {t(note, locale)}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
