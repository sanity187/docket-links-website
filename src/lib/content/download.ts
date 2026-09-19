import { I18nString } from "./types";

export interface PlatformDownloadInfo {
  id: "windows" | "macos" | "linux";
  name: string;
  osLabel: I18nString;
  recommendedExt: string;
  primaryUrl: string;
  primaryLabel: I18nString;
  secondaryOptions: {
    label: I18nString;
    format: string;
    url: string;
  }[];
  architecture: string;
  requirements: I18nString;
  iconName: "windows" | "apple" | "linux";
}

export const downloadContent = {
  eyebrow: {
    en: "CROSS-PLATFORM DESKTOP APP",
    es: "APLICACIÓN DE ESCRITORIO MULTIPLATAFORMA",
  },
  title: {
    en: "Download",
    es: "Descargar",
  },
  subtitle: {
    en: "Built with Rust and Tauri v2 for native desktop speed, instant search responsiveness, and far better performance than web apps. Free forever tier included.",
    es: "Construido con Rust y Tauri v2 para máxima velocidad nativa, búsqueda instantánea y un rendimiento muy superior al de las aplicaciones web. Incluye nivel gratuito de por vida.",
  },
  detectingBadge: {
    en: "Auto-detected for your operating system",
    es: "Detectado automáticamente para su sistema operativo",
  },
  securityNote: {
    en: "Digitally signed release hosted on high-availability DigitalOcean Spaces CDN.",
    es: "Versión firmada digitalmente y alojada en la red CDN de DigitalOcean Spaces.",
  },
  version: "1.14.1",
  releaseDate: "August 2026",
  platforms: [
    {
      id: "windows",
      name: "Windows",
      osLabel: { en: "Windows 10 / 11 (64-bit)", es: "Windows 10 / 11 (64 bits)" },
      recommendedExt: ".exe",
      primaryUrl:
        "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_1.14.1_x64-setup.exe",
      primaryLabel: { en: "Download", es: "Descargar" },
      secondaryOptions: [
        {
          label: { en: "Enterprise MSI Package (.msi)", es: "Paquete Empresarial MSI (.msi)" },
          format: "MSI Installer",
          url: "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_1.14.1_x64_en-US.msi",
        },
      ],
      architecture: "x86_64",
      requirements: {
        en: "Windows 10 or 11 (64-bit), 4GB RAM minimum, 200MB free disk space",
        es: "Windows 10 u 11 (64 bits), mínimo 4GB de RAM, 200MB de espacio en disco",
      },
      iconName: "windows",
    },
    {
      id: "macos",
      name: "macOS",
      osLabel: { en: "macOS 11+ (Apple Silicon & Intel)", es: "macOS 11+ (Apple Silicon e Intel)" },
      recommendedExt: ".app.tar.gz",
      primaryUrl:
        "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_aarch64.app.tar.gz",
      primaryLabel: { en: "Download", es: "Descargar" },
      secondaryOptions: [
        {
          label: { en: "macOS Intel 64-bit (.app.tar.gz)", es: "macOS Intel 64 bits (.app.tar.gz)" },
          format: "Intel x86_64",
          url: "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_x64.app.tar.gz",
        },
      ],
      architecture: "Universal / ARM64 & x64",
      requirements: {
        en: "macOS Big Sur 11.0 or higher, 4GB RAM, 200MB disk space",
        es: "macOS Big Sur 11.0 o superior, 4GB de RAM, 200MB de espacio",
      },
      iconName: "apple",
    },
    {
      id: "linux",
      name: "Linux",
      osLabel: { en: "Linux x86_64 (AppImage, DEB, RPM)", es: "Linux x86_64 (AppImage, DEB, RPM)" },
      recommendedExt: ".AppImage",
      primaryUrl:
        "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_1.14.1_amd64.AppImage",
      primaryLabel: { en: "Download", es: "Descargar" },
      secondaryOptions: [
        {
          label: { en: "Debian / Ubuntu (.deb)", es: "Debian / Ubuntu (.deb)" },
          format: "DEB Package",
          url: "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_1.14.1_amd64.deb",
        },
        {
          label: { en: "Fedora / RedHat (.rpm)", es: "Fedora / RedHat (.rpm)" },
          format: "RPM Package",
          url: "https://docket-links-browser.nyc3.digitaloceanspaces.com/updates/v1.14.1/DocketLinks.Browser_1.14.1-1.x86_64.rpm",
        },
      ],
      architecture: "x86_64",
      requirements: {
        en: "glibc 2.31+, WebKit2GTK 4.1, 4GB RAM \n",
        es: "glibc 2.31+, WebKit2GTK 4.1, 4GB de RAM \n",
      },
      iconName: "linux",
    },
  ] as PlatformDownloadInfo[],
  releaseNotesHeading: {
    en: "What's New in v1.14.1",
    es: "Novedades en la Versión 1.14.1",
  },
  releaseNotes: [
    {
      en: "Enhanced USPS CASS presort calculations with automated tray sequence barcoding.",
      es: "Cálculos de preclasificación USPS CASS optimizados con códigos de barras de bandeja.",
    },
    {
      en: "Added multi-attorney lead lock notifications to prevent duplicate contact attempts.",
      es: "Notificaciones de bloqueo de caso entre abogados para evitar contactos duplicados.",
    },
    {
      en: "Optimized native query pipeline for instantaneous filtering across 2,000,000+ court records.",
      es: "Canal de consultas nativo optimizado para filtrado instantáneo en más de 2,000,000 de casos.",
    },
    {
      en: "Support for automated encrypted cloud backup synchronization.",
      es: "Soporte para copias de seguridad cifradas automáticas en DigitalOcean Spaces.",
    },
  ],
};
