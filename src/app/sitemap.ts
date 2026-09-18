import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { locales } from "@/lib/i18n/config";
import { localizedPath } from "@/lib/i18n/paths";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/pricing", "/download"];
  const sitemapEntries: MetadataRoute.Sitemap = [];

  for (const route of routes) {
    for (const locale of locales) {
      sitemapEntries.push({
        url: `${siteConfig.url}${localizedPath(locale, route)}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "daily" : "weekly",
        priority: route === "" ? 1.0 : 0.8,
      });
    }
  }

  return sitemapEntries;
}
