import { I18nString } from "./types";

export interface LocalizedMegaMenuLink {
  title: I18nString;
  description: I18nString;
  href: string;
  badge?: I18nString;
  iconName:
    | "cpu"
    | "database"
    | "shield"
    | "zap"
    | "scale"
    | "mail"
    | "filter"
    | "users"
    | "terminal"
    | "car"
    | "building"
    | "download";
}

export interface LocalizedMegaMenuCategory {
  id: string;
  label: I18nString;
  href?: string;
  featured: {
    tag: I18nString;
    title: I18nString;
    description: I18nString;
    href: string;
    cta: I18nString;
  };
  links: LocalizedMegaMenuLink[];
}

export const megaMenuContent = {
  categories: [
    {
      id: "product",
      label: { en: "Platform", es: "Plataforma" },
      href: "/features",
      featured: {
        tag: { en: "NATIVE TAURI V2 + RUST", es: "NATIVO TAURI V2 + RUST" },
        title: { en: "Engineered for Raw Speed", es: "Diseñado para Máxima Velocidad" },
        description: {
          en: "Sub-10ms queries over 1,000,000+ court cases with native desktop power and continuous docket monitoring.",
          es: "Consultas de menos de 10ms sobre más de 1,000,000 de casos con el poder del software de escritorio instalado y monitoreo continuo.",
        },
        href: "/download",
        cta: { en: "Download v1.14.1", es: "Descargar v1.14.1" },
      },
      links: [
        {
          title: { en: "Daily Docket Feed", es: "Expedientes Actualizados Diariamente" },
          description: {
            en: "Freshly filed cases pulled multiple times daily from all 500+ Magisterial District Courts",
            es: "Casos recién radicados obtenidos varias veces al día de los más de 500 tribunales de distrito magisterial",
          },
          href: "/features",
          iconName: "zap",
          badge: { en: "Live", es: "En Vivo" },
        },
        {
          title: { en: "Statute & Charge Classifier", es: "Clasificador de Delitos y Estatutos" },
          description: {
            en: "Instant sorting by Title 18, Title 75, and charge severity",
            es: "Filtrado automático por Título 18, Título 75 y gravedad",
          },
          href: "/features",
          iconName: "scale",
        },
        {
          title: { en: "Lead Claiming & Collision Guard", es: "Reclamo de Casos y Control de Colisión" },
          description: {
            en: "Multi-attorney team locking so no prospect is double-contacted",
            es: "Bloqueo por equipo para evitar duplicidad de contactos",
          },
          href: "/features",
          iconName: "users",
        },
        {
          title: { en: "USPS CASS Direct Mail Presort", es: "Preclasificación Postal CASS USPS" },
          description: {
            en: "Cut postage costs 30-50% with automated tray and barcode sorting",
            es: "Reduzca 30-50% en franqueo postal con clasificación automática",
          },
          href: "/features",
          iconName: "mail",
          badge: { en: "Save 40%", es: "Ahorro 40%" },
        },
      ],
    },
    {
      id: "practice-areas",
      label: { en: "Practice Areas", es: "Áreas Legales" },
      href: "/features",
      featured: {
        tag: { en: "TARGETED LEGAL MARKETING", es: "MERCADEO LEGAL DIRIGIDO" },
        title: { en: "Reach Clients First", es: "Llegue Primero al Cliente" },
        description: {
          en: "Filter by exact statute and county as freshly filed cases are updated multiple times daily.",
          es: "Filtre por estatuto y condado exacto con casos recién radicados actualizados varias veces al día.",
        },
        href: "/pricing",
        cta: { en: "Explore Plans", es: "Explorar Planes" },
      },
      links: [
        {
          title: { en: "Criminal Defense", es: "Defensa Penal" },
          description: {
            en: "Felonies, Misdemeanors, Title 18 offenses, and preliminary hearings",
            es: "Delitos graves, delitos menores y audiencias preliminares",
          },
          href: "/features",
          iconName: "shield",
        },
        {
          title: { en: "Traffic & DUI Defense", es: "Infracciones de Tránsito y DUI" },
          description: {
            en: "Title 75 moving violations, license suspensions, and DUIs",
            es: "Violaciones del Título 75, suspensiones de licencia y DUI",
          },
          href: "/features",
          iconName: "car",
        },
        {
          title: { en: "Landlord-Tenant & Civil", es: "Desahucios y Litigio Civil" },
          description: {
            en: "Evictions, money judgments, and contract disputes",
            es: "Desahucios, reclamos dinerarios y disputas contractuales",
          },
          href: "/features",
          iconName: "building",
        },
        {
          title: { en: "Solo & High-Volume Firms", es: "Prácticas Individuales y Grandes Firmas" },
          description: {
            en: "Unlimited team seats, shared tenant queues, and webhook triggers",
            es: "Usuarios ilimitados, colas compartidas e integraciones webhook",
          },
          href: "/pricing",
          iconName: "users",
        },
      ],
    },
    {
      id: "technology",
      label: { en: "Technology", es: "Tecnología" },
      href: "/#technology",
      featured: {
        tag: { en: "NATIVE DESKTOP PERFORMANCE", es: "RENDIMIENTO DE ESCRITORIO" },
        title: { en: "Desktop Speed vs Web Apps", es: "Velocidad de Escritorio vs Web" },
        description: {
          en: "Installed desktop software delivers lightning-fast responsiveness and far better performance than browser-based apps.",
          es: "Una aplicación de escritorio instalada ofrece respuesta instantánea y mucho mejor rendimiento que las lentas aplicaciones web.",
        },
        href: "/#technology",
        cta: { en: "See Architecture", es: "Ver Arquitectura" },
      },
      links: [
        {
          title: { en: "Rust & Tauri Core", es: "Núcleo Rust y Tauri" },
          description: {
            en: "Zero-bloat native desktop performance on Windows, macOS, and Linux",
            es: "Rendimiento nativo sin sobrecarga en Windows, macOS y Linux",
          },
          href: "/#technology",
          iconName: "cpu",
        },
        {
          title: { en: "Desktop Performance Power", es: "Poder de Rendimiento Nativo" },
          description: {
            en: "Installed desktop experience provides instant filtering and much better speed than browser tabs",
            es: "La experiencia de escritorio instalada brinda filtros inmediatos y mayor velocidad que las pestañas del navegador",
          },
          href: "/#technology",
          iconName: "zap",
        },
        {
          title: { en: "Tenant-Level Encryption", es: "Cifrado a Nivel de Organización" },
          description: {
            en: "Military-grade encryption keys protecting confidential firm data",
            es: "Claves maestras de cifrado para proteger datos confidenciales",
          },
          href: "/#technology",
          iconName: "shield",
        },
        {
          title: { en: "Webhooks & Automation", es: "Webhooks y Automatización" },
          description: {
            en: "Push claimed leads directly into Zapier, Clio, MyCase, or custom CRMs",
            es: "Envíe prospectos directamente a Zapier, Clio, MyCase o CRM propio",
          },
          href: "/#technology",
          iconName: "terminal",
        },
      ],
    },
  ] as LocalizedMegaMenuCategory[],
};
