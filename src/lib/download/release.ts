import { siteConfig } from "@/lib/site-config";
import { downloadContent, type PlatformDownloadInfo } from "@/lib/content/download";
import { type Locale } from "@/lib/i18n/config";

/** How long (seconds) the cached feed is served before Next.js rebuilds the HTML. */
const REVALIDATE_SECONDS = 1800;

export interface UpdateFeedPlatform {
    signature: string;
    url: string;
}

export interface UpdateFeed {
    version: string;
    notes: string;
    pub_date: string;
    platforms: Record<string, UpdateFeedPlatform>;
}

export interface ResolvedDownloadContent {
    version: string;
    releaseDate: string;
    platforms: PlatformDownloadInfo[];
    /** True when values come from the live update feed, false when falling back to static content. */
    isLive: boolean;
}

/**
 * Fetches the Tauri update feed (`latest.json`). The response is cached and
 * revalidated on the server, so the page HTML is rebuilt when a new version ships.
 */
export async function getLatestRelease(): Promise<UpdateFeed | null> {
    try {
        const res = await fetch(siteConfig.release.updateFeedUrl, {
            next: { revalidate: REVALIDATE_SECONDS },
        });
        if (!res.ok) return null;

        const data = (await res.json()) as Partial<UpdateFeed>;
        if (!data.version || !data.platforms) return null;

        return data as UpdateFeed;
    } catch {
        return null;
    }
}

function formatReleaseDate(pubDate: string, locale: Locale): string {
    const date = new Date(pubDate);
    if (Number.isNaN(date.getTime())) return downloadContent.releaseDate;
    return new Intl.DateTimeFormat(locale === "es" ? "es-ES" : "en-US", {
        year: "numeric",
        month: "long",
    }).format(date);
}

/**
 * Merges the live update feed into the static download content, overriding the
 * version, release date, and platform URLs. Falls back to static values when the
 * feed is unavailable so the page always renders.
 */
export function resolveDownloadContent(
    release: UpdateFeed | null,
    locale: Locale,
): ResolvedDownloadContent {
    if (!release) {
        return {
            version: downloadContent.version,
            releaseDate: downloadContent.releaseDate,
            platforms: downloadContent.platforms,
            isLive: false,
        };
    }

    const platforms = downloadContent.platforms.map((platform) => {
        const primaryUrl =
            (platform.feedKey && release.platforms[platform.feedKey]?.url) || platform.primaryUrl;

        const secondaryOptions = platform.secondaryOptions.map((opt) => ({
            ...opt,
            url: (opt.feedKey && release.platforms[opt.feedKey]?.url) || opt.url,
        }));

        return { ...platform, primaryUrl, secondaryOptions };
    });

    return {
        version: release.version,
        releaseDate: formatReleaseDate(release.pub_date, locale),
        platforms,
        isLive: true,
    };
}
