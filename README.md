# DocketLinks Website

Official marketing and product website for **DocketLinks**—the real-time court docket intelligence and automated direct-mail legal leads desktop platform.

Built with **Next.js 15 (App Router)**, **React 19**, **TailwindCSS v4**, and **shadcn/ui** patterns.

## Features

- **Side-by-side Bilingual Content (i18n)**: English (default, clean URLs without `/en/` prefix) and Spanish (`/es/...`).
- **Tech-Savvy Mega Menu**: Categorized navigation (Platform, Practice Areas, Technology) with spotlight feature cards.
- **Value-Based Pricing Hub**: 5 tiers (Free, Starter, Professional, Scale, Enterprise) derived from the $0.65 down to $0.55/lead cost formula, featuring unlimited team members on every plan.
- **Smart OS-Detecting Downloads**: Client-side operating system detection providing 1-click downloads for Windows (`.exe` / `.msi`), macOS (`.app.tar.gz`), and Linux (`.AppImage`, `.deb`, `.rpm`) sourced from DigitalOcean Spaces.
- **Centralized JSON Configuration**: [`src/config/site-config.json`](src/config/site-config.json) storing corporate details, contact numbers, and release asset feeds.
- **Hyper-Organized Architecture**: Strict separation of concerns, modular primitive components, and localized text in `src/lib/content/`.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Library**: React 19
- **Styling**: TailwindCSS v4
- **Icons**: Lucide React
- **Theming**: Next Themes (Dark & Light modes)
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
   ```bash
   yarn install
   ```

2. Run the development server:
   ```bash
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the website.

3. Build for production:
   ```bash
   yarn build
   ```

4. Start production server:
   ```bash
   yarn start
   ```

## Project Structure

```
src/
├── app/
│   ├── [lang]/              # Bilingual App Router localized pages
│   │   ├── layout.tsx       # Root layout with Theme & Locale Providers
│   │   ├── page.tsx         # Home page (Hero, Tech Architecture, Workflow, FAQ)
│   │   ├── pricing/page.tsx # Pricing page (Toggle, Cards, Comparison, FAQ)
│   │   └── download/page.tsx# Downloads hub (OS detection, Platform grid)
│   ├── globals.css          # Tailwind v4 theme tokens & glassmorphism
│   ├── icon.svg             # Brand SVG icon
│   ├── robots.ts            # Robots.txt generator
│   └── sitemap.ts           # Bilingual XML sitemap generator
├── components/
│   ├── download/            # OS detector hook & download buttons/cards
│   ├── home/                # Hero, tech architecture, workflow, app preview
│   ├── layout/              # Header, mega menu, footer, language switcher
│   ├── pricing/             # Pricing cards, billing toggle, comparison table
│   ├── primitives/          # PageShell, SectionHeading, Eyebrow
│   ├── theme/               # ThemeProvider & ThemeToggle
│   └── ui/                  # Button, Card, Badge
├── config/
│   └── site-config.json     # Corporate info, addresses, release feeds
├── lib/
│   ├── content/             # Centralized bilingual content files
│   ├── i18n/                # Config, paths, resolve, locale context
│   ├── site-config.ts       # Typed accessor for site-config.json
│   └── utils.ts             # Tailwind merge & formatting utilities
└── middleware.ts            # Clean English URLs & Spanish locale routing
```

## License

Proprietary © DocketLinks LLC. All rights reserved.
