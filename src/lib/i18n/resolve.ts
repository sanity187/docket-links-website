import { defaultLocale, type Locale } from "./config";
import { type I18nString, type I18nField } from "@/lib/content/types";

// Resolves a localized string or value for the active locale, falling back to English (en).
export function t(field: I18nString | undefined | null, locale: Locale): string {
  if (!field) return "";
  return field[locale] ?? field[defaultLocale] ?? "";
}

// Resolves generic I18nField<T>
export function tValue<T>(field: I18nField<T> | undefined | null, locale: Locale): T {
  if (!field) return undefined as unknown as T;
  return (field[locale] ?? field[defaultLocale]) as T;
}

// Resolves an array of localized strings
export function tList(items: I18nString[] | undefined | null, locale: Locale): string[] {
  if (!items) return [];
  return items.map((item) => t(item, locale));
}
