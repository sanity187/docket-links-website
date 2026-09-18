"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  ChevronDown,
  Cpu,
  Database,
  Shield,
  Zap,
  Scale,
  Mail,
  Filter,
  Users,
  Terminal,
  Car,
  Building,
  Download,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { type Locale } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";
import { t } from "@/lib/i18n/resolve";
import { megaMenuContent, LocalizedMegaMenuLink } from "@/lib/content/mega-menu";

interface MegaMenuProps {
  locale: Locale;
}

function getMenuIcon(name: LocalizedMegaMenuLink["iconName"]) {
  const props = { className: "h-4 w-4 shrink-0 text-primary" };
  switch (name) {
    case "cpu":
      return <Cpu {...props} />;
    case "database":
      return <Database {...props} />;
    case "shield":
      return <Shield {...props} />;
    case "zap":
      return <Zap {...props} />;
    case "scale":
      return <Scale {...props} />;
    case "mail":
      return <Mail {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "users":
      return <Users {...props} />;
    case "terminal":
      return <Terminal {...props} />;
    case "car":
      return <Car {...props} />;
    case "building":
      return <Building {...props} />;
    case "download":
      return <Download {...props} />;
    default:
      return <Zap {...props} />;
  }
}

export function MegaMenu({ locale }: MegaMenuProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (categoryId: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveCategory(categoryId);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveCategory(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setActiveCategory(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative" onMouseLeave={handleMouseLeave}>
      {/* Category Triggers */}
      <div className="flex items-center gap-1">
        {megaMenuContent.categories.map((cat) => {
          const isOpen = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onMouseEnter={() => handleMouseEnter(cat.id)}
              onClick={() => setActiveCategory(isOpen ? null : cat.id)}
              aria-expanded={isOpen}
              className={`inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer ${
                isOpen
                  ? "bg-primary/10 text-primary"
                  : "text-dim hover:text-foreground hover:bg-muted/70"
              }`}
            >
              {t(cat.label, locale)}
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform duration-200 ${
                  isOpen ? "rotate-180 text-primary" : "text-dim"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Floating Mega Dropdown Panel */}
      {activeCategory && (
        <div
          onMouseEnter={() => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[720px] max-w-[90vw] rounded-2xl border border-line bg-panel/95 backdrop-blur-xl shadow-2xl p-6 z-50 animate-in fade-in-50 slide-in-from-top-2 duration-200"
        >
          {(() => {
            const category = megaMenuContent.categories.find(
              (c) => c.id === activeCategory
            );
            if (!category) return null;

            return (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Links Column (7 cols) */}
                <div className="md:col-span-7 grid grid-cols-1 gap-2">
                  {category.links.map((link, idx) => (
                    <Link
                      key={idx}
                      href={localizedPath(locale, link.href)}
                      onClick={() => setActiveCategory(null)}
                      className="group flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-muted/70"
                    >
                      <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line bg-panel shadow-xs group-hover:border-primary/40 group-hover:bg-primary/5 transition-colors">
                        {getMenuIcon(link.iconName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                            {t(link.title, locale)}
                          </span>
                          {link.badge && (
                            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                              {t(link.badge, locale)}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-dim line-clamp-2 mt-0.5 leading-relaxed">
                          {t(link.description, locale)}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Featured Spotlight Card (5 cols) */}
                <div className="md:col-span-5 flex flex-col justify-between rounded-xl border border-primary/20 bg-gradient-to-br from-primary/10 via-panel to-secondary/10 p-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3 w-3" />
                      {t(category.featured.tag, locale)}
                    </div>
                    <h4 className="mt-3 text-base font-bold text-foreground">
                      {t(category.featured.title, locale)}
                    </h4>
                    <p className="mt-1.5 text-xs text-dim leading-relaxed">
                      {t(category.featured.description, locale)}
                    </p>
                  </div>

                  <Link
                    href={localizedPath(locale, category.featured.href)}
                    onClick={() => setActiveCategory(null)}
                    className="mt-4 inline-flex items-center justify-between rounded-lg bg-primary px-3.5 py-2 text-xs font-semibold text-primary-foreground shadow-sm hover:brightness-110 transition-all group"
                  >
                    <span>{t(category.featured.cta, locale)}</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            );
          })()}
        </div>
      )}
    </div>
  );
}
