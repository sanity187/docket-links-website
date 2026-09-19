# Content & Localization Rules (NO HARDCODED CONTENT)

## Core Directive
**Components MUST NEVER contain hard-coded text, inline strings, or ternary translations.**
All user-facing copy, labels, titles, descriptions, button labels, badges, alerts, link labels, and table cells must originate from the `src/lib/content/` folder.

**There are NO EXCEPTIONS.**

---

## 1. Content Organization

All text content belongs in `src/lib/content/`:
- `src/lib/content/common.ts`: Global navigation, site meta, common actions, and footer content.
- `src/lib/content/pricing.ts`: Pricing plans, add-on calculators, comparison matrices, FAQs, and card badges.
- `src/lib/content/home.ts`: Hero sections, statistics, tech pillars, and feature summaries.
- `src/lib/content/download.ts`: App release notes, platform requirements, and download badges.
- `src/lib/content/mega-menu.ts`: Desktop header navigation panels and featured callouts.
- `src/lib/content/types.ts`: TypeScript types for localized strings (`I18nString = { en: string; es: string }`).

---

## 2. Localized String Structure

Every piece of user-facing text must be structured as an `I18nString`:

```typescript
export interface I18nString {
  en: string;
  es: string;
}
```

Example in `src/lib/content/example.ts`:
```typescript
export const exampleContent = {
  heroTitle: {
    en: "Real-Time Court Docket Intelligence",
    es: "Inteligencia de Expedientes Judiciales en Tiempo Real",
  },
  ctaButton: {
    en: "Download App",
    es: "Descargar Aplicación",
  },
};
```

---

## 3. Strict Component Usage

### FORBIDDEN PATTERNS ❌
```tsx
// NEVER DO THIS: Hardcoded English
<span>Download App v1.14.1</span>

// NEVER DO THIS: Inline ternary check in component
<span>{locale === "es" ? "Descargar" : "Download"}</span>

// NEVER DO THIS: Inline const isEs
const isEs = locale === "es";
<span>{isEs ? "Plataforma" : "Platform"}</span>
```

### REQUIRED PATTERN ✅
Import `t` from `@/lib/i18n/resolve` and the respective content object:

```tsx
import { t } from "@/lib/i18n/resolve";
import { commonActions } from "@/lib/content/common";

export function ExampleComponent({ locale }: { locale: Locale }) {
  return (
    <Button>
      <span>{t(commonActions.downloadNow, locale)}</span>
    </Button>
  );
}
```

---

## 4. Pre-Commit Verification Checklist
Before finishing any component or feature:
1. Search the component for raw quotes (`"..."` or `'...'`) containing human-readable sentences or phrases.
2. Search for `locale === "es"` or `isEs ?`. If found, refactor immediately to `t(contentObject.field, locale)`.
3. Verify that both English (`en`) and Spanish (`es`) keys are populated in the relevant `src/lib/content/` file.
4. Run `npx tsc --noEmit` to ensure proper type checking.
