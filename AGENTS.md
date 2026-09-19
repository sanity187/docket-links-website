# DocketLinks Website Developer & Agent Guidelines

## STRICT CONTENT POLICY: NO HARD-CODED CONTENT IN COMPONENTS

### Absolute Prohibition
**Never create, modify, or extend React components with hard-coded text, inline strings, or inline language ternary checks (`locale === "es" ? ... : ...`).**

**All user-facing content must be defined in the `src/lib/content/` directory. No exceptions.**

### Rules for All Contributors and AI Agents:
1. **Source of Truth**: All text belongs in `src/lib/content/` (`common.ts`, `pricing.ts`, `home.ts`, `download.ts`, `mega-menu.ts`, etc.).
2. **Bilingual Requirement**: Every entry must provide `{ en: string, es: string }` typed with `I18nString`.
3. **Consumption via `t(field, locale)`**: Components must import `t` from `@/lib/i18n/resolve` and pass the localized string and current `locale`.
4. **Lists and Navigation**: Navigation links, practice areas, feature bullets, and FAQs must be defined as arrays of localized objects in `src/lib/content/` and mapped over in the component.

See detailed rules in [`.agents/rules/content-localization.md`](file:///.agents/rules/content-localization.md).
