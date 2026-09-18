import { LocalizedNavItem, I18nString } from "./types";

export const siteMeta = {
  descriptor: {
    en: "Real-Time Court Docket Intelligence & Lead Automation",
    es: "Inteligencia de Expedientes Judiciales y Automatización de Clientes en Tiempo Real",
  },
  description: {
    en: "Empower your law firm with automated court docket scraping, instant lead qualification, CASS-certified USPS presorting, and high-performance native desktop speed.",
    es: "Potencie su bufete de abogados con extracción automatizada de expedientes, calificación instantánea de clientes potenciales, preclasificación postal USPS certificada por CASS y rendimiento nativo de escritorio.",
  },
};

export const navItems: LocalizedNavItem[] = [
  {
    key: "features",
    label: { en: "Features", es: "Funcionalidades" },
    href: "/#features",
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
    en: "The lightning-fast court docket intelligence and automated direct-mail lead platform for forward-thinking law practices.",
    es: "La plataforma ultrarrápida de inteligencia de expedientes judiciales y correspondencia directa para bufetes de abogados innovadores.",
  },
  unlimitedSeatsBadge: {
    en: "Unlimited team members on every plan",
    es: "Miembros de equipo ilimitados en cada plan",
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
