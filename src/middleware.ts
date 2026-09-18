import { NextRequest, NextResponse } from "next/server";
import { defaultLocale, isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localeFromPath, stripLocalePrefix } from "@/lib/i18n/paths";

// Parse Accept-Language header to detect supported locale
function detectLocale(request: NextRequest): Locale {
  const header = request.headers.get("accept-language");
  if (!header) return defaultLocale;

  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: q ? Number(q) : 1 };
    })
    .sort((a, b) => b.q - a.q);

  for (const { tag } of ranked) {
    const base = tag.split("-")[0];
    const match = locales.find((locale) => locale === base);
    if (match) return match;
  }
  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 1. Check if path starts with explicit default locale prefix (/en/...)
  // Clean English URLs: Redirect /en/... -> /...
  const pathLocale = localeFromPath(pathname);
  if (pathLocale === defaultLocale) {
    const url = request.nextUrl.clone();
    const cleanPath = stripLocalePrefix(pathname, defaultLocale);
    url.pathname = cleanPath === "" ? "/" : cleanPath;
    return NextResponse.redirect(url);
  }

  // 2. If path has non-default locale (e.g. /es or /es/pricing), pass through
  if (pathLocale && pathLocale !== defaultLocale) {
    return NextResponse.next();
  }

  // 3. Clean path without locale prefix (e.g. / or /pricing or /download):
  // Check cookie or header to see if visitor prefers Spanish
  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const preferred = isLocale(cookieLocale) ? cookieLocale : detectLocale(request);

  if (preferred === defaultLocale) {
    // English users keep clean URL via internal rewrite to /en/[path]
    const url = request.nextUrl.clone();
    url.pathname = `/en${pathname === "/" ? "" : pathname}`;
    return NextResponse.rewrite(url);
  }

  // Spanish users visiting clean URL get redirected to /es/[path]
  const url = request.nextUrl.clone();
  url.pathname = `/${preferred}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next.js internal files, api routes, static assets, and favicon
  matcher: ["/((?!_next|api|favicon\\.ico|icon\\.svg|.*\\..*).*)"],
};
