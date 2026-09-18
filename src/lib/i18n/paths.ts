import { defaultLocale, isLocale, type Locale } from "./config";

/**
 * Map an application path to its localized URL.
 * English ('en') is clean (no prefix in the URL).
 * Spanish ('es') has the '/es' prefix.
 */
export function localizedPath(locale: Locale, path: string): string {
  const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
  if (locale === defaultLocale) {
    return normalized === "" ? "/" : normalized;
  }
  return `/${locale}${normalized}`;
}

/**
 * Remove any locale prefix from a pathname, returning the clean base path.
 */
export function stripLocalePrefix(pathname: string, active: Locale): string {
  if (active === defaultLocale) {
    // If somehow a path starts with /en/, clean it
    return pathname.replace(/^\/en(?=\/|$)/, "") || "/";
  }
  const stripped = pathname.replace(new RegExp(`^/${active}(?=/|$)`), "");
  return stripped === "" ? "/" : stripped;
}

/**
 * Extracts the first segment if it is a valid non-default locale.
 */
export function localeFromPath(pathname: string): Locale | null {
  const segment = pathname.split("/")[1];
  if (isLocale(segment) && segment !== defaultLocale) {
    return segment;
  }
  if (segment === defaultLocale) {
    return defaultLocale;
  }
  return null;
}
