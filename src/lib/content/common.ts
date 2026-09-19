import { LocalizedNavItem, I18nString } from "./types";

export const siteMeta = {
  descriptor: {
    en: "Court Docket Monitoring & Legal Marketing Leads",
    es: "Monitoreo de Expedientes Judiciales y Prospectos de Mercadeo Legal",
  },
  description: {
    en: "Empower your law firm with court docket monitoring across 500+ Pennsylvania courts, freshly filed cases pulled multiple times daily, verified contact enrichment, CASS-certified USPS presorting, and high-performance native desktop speed.",
    es: "Potencie su bufete de abogados con monitoreo de expedientes en más de 500 tribunales de Pensilvania, casos recién radicados obtenidos varias veces al día, enriquecimiento de contactos verificados, preclasificación postal USPS certificada por CASS y rendimiento nativo de escritorio.",
  },
};

export const navItems: LocalizedNavItem[] = [
  {
    key: "features",
    label: { en: "Features", es: "Funcionalidades" },
    href: "/features",
  },
  {
    key: "tech",
    label: { en: "Technology", es: "Tecnología" },
    href: "/#technology",
  },
  {
    key: "pricing",
    label: { en: "Pricing", es: "Precios" },
    href: "/pricing",
  },
  {
    key: "workflow",
    label: { en: "How It Works", es: "Cómo Funciona" },
    href: "/#workflow",
  },
  {
    key: "download",
    label: { en: "Download App", es: "Descargar App" },
    href: "/download",
    badge: { en: "v1.14.1", es: "v1.14.1" },
  },
];

export const commonActions = {
  downloadNow: {
    en: "Download DocketLinks",
    es: "Descargar DocketLinks",
  },
  viewPricing: {
    en: "View Pricing Plans",
    es: "Ver Planes de Precios",
  },
  getStartedFree: {
    en: "Start Free (25 Leads/mo)",
    es: "Comenzar Gratis (25 Casos/mes)",
  },
  scheduleDemo: {
    en: "Contact Enterprise",
    es: "Contactar a Ventas",
  },
  exploreFeatures: {
    en: "Explore Features",
    es: "Explorar Funcionalidades",
  },
  latestRelease: {
    en: "Latest Version 1.14.1 Available",
    es: "Última Versión 1.14.1 Disponible",
  },
};

export const footerContent = {
  tagline: {
    en: "The lightning-fast court docket intelligence and marketing lead platform for forward-thinking law practices.",
    es: "La plataforma ultrarrápida de inteligencia de expedientes judiciales y prospectos de mercadeo para bufetes de abogados innovadores.",
  },
  unlimitedSeatsBadge: {
    en: "Unlimited team members on every plan",
    es: "Miembros de equipo ilimitados en cada plan",
  },
  platformHeading: {
    en: "Platform",
    es: "Plataforma",
  },
  platformLinks: [
    {
      title: { en: "Real-Time Docket Feed", es: "Expedientes en Tiempo Real" },
      href: "/features",
    },
    {
      title: { en: "Native Rust Architecture", es: "Arquitectura Nativa Rust" },
      href: "/#technology",
    },
    {
      title: { en: "Pricing & Volume Rates", es: "Planes y Precios" },
      href: "/pricing",
    },
    {
      title: { en: "Download Native App", es: "Descargar Aplicación" },
      href: "/download",
    },
  ],
  practiceAreasHeading: {
    en: "Practice Areas",
    es: "Áreas de Práctica",
  },
  practiceAreasLinks: [
    {
      title: { en: "Criminal Defense (Title 18)", es: "Defensa Penal (Título 18)" },
      href: "/features",
    },
    {
      title: { en: "Traffic & DUI (Title 75)", es: "Tránsito y DUI (Título 75)" },
      href: "/features",
    },
    {
      title: { en: "Landlord-Tenant & Civil Claims", es: "Desahucios y Reclamos Civiles" },
      href: "/features",
    },
    {
      title: { en: "USPS CASS Direct Mail", es: "Preclasificación Postal CASS" },
      href: "/#technology",
    },
  ],
  contactHeading: {
    en: "Contact & Support",
    es: "Contacto y Soporte",
  },
  githubReleases: {
    en: "GitHub Releases",
    es: "Lanzamientos en GitHub",
  },
  copyright: {
    en: `© ${new Date().getFullYear()} DocketLinks LLC. All rights reserved.`,
    es: `© ${new Date().getFullYear()} DocketLinks LLC. Todos los derechos reservados.`,
  },
  complianceNotice: {
    en: "DocketLinks processes publicly available court records in accordance with Pennsylvania court access guidelines and USPS postal regulations.",
    es: "DocketLinks procesa registros judiciales públicos conforme a las directrices de acceso a tribunales de Pensilvania y regulaciones de USPS.",
  },
};
