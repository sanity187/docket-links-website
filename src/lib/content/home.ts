import { LocalizedFeatureItem, LocalizedWorkflowStep, LocalizedFaqItem, LocalizedStatItem } from "./types";

export const homeContent = {
  hero: {
    eyebrow: {
      en: "PENNSYLVANIA COURT DOCKET INTELLIGENCE",
      es: "INTELIGENCIA DE EXPEDIENTES JUDICIALES DE PENSILVANIA",
    },
    titlePrimary: {
      en: "Automated Court Leads.",
      es: "Casos Judiciales Automatizados.",
    },
    titleSecondary: {
      en: "Raw Desktop Speed.",
      es: "Velocidad Nativa de Escritorio.",
    },
    subtitle: {
      en: "Supercharge your law firm's case acquisition. Continuous docket scraping across Pennsylvania, instant statute & charge classification, and automated USPS presorting—powered by a high-performance native Rust & Tauri desktop application.",
      es: "Potencie la captación de casos de su bufete. Extracción continua de expedientes en Pensilvania, clasificación instantánea de cargos y preclasificación postal USPS con una aplicación nativa en Rust y Tauri.",
    },
    badge: {
      en: "Unlimited Team Members on Every Plan • Built with Rust & Tauri v2",
      es: "Usuarios Ilimitados en Cada Plan • Construido con Rust y Tauri v2",
    },
    statsCallout: {
      en: "Over 2.4M court records indexed with sub-10ms local SQLite query latency.",
      es: "Más de 2.4M de expedientes indexados con latencia de consulta local inferior a 10ms.",
    },
  },
  stats: [
    {
      value: { en: "67", es: "67" },
      label: { en: "PA Counties Covered", es: "Condados de PA Cubiertos" },
      description: { en: "Real-time coverage across all Magisterial District & Common Pleas courts", es: "Cobertura en tribunales de distrito magisterial y tribunales comunes" },
    },
    {
      value: { en: "< 10ms", es: "< 10ms" },
      label: { en: "Local Query Latency", es: "Latencia de Consulta Local" },
      description: { en: "Native SQLite database running directly on your hardware without web lag", es: "Base SQLite nativa ejecutándose en su equipo sin retrasos de navegador" },
    },
    {
      value: { en: "30-50%", es: "30-50%" },
      label: { en: "Direct Mail Savings", es: "Ahorro en Correo Directo" },
      description: { en: "Automated USPS CASS certification and carrier route tray presorting", es: "Certificación CASS y preclasificación postal por rutas de cartero" },
    },
    {
      value: { en: "Unlimited", es: "Ilimitados" },
      label: { en: "Team Members", es: "Miembros de Equipo" },
      description: { en: "No per-seat licensing penalties. Your entire firm collaborates freely", es: "Sin tarifas por usuario. Todo su equipo colabora sin costo adicional" },
    },
  ] as LocalizedStatItem[],
  techSection: {
    eyebrow: {
      en: "BUILT FOR TECHNICAL SUPERIORITY",
      es: "DISEÑADO PARA SUPERIORIDAD TÉCNICA",
    },
    title: {
      en: "Why Modern Law Firms Outgrow Web Apps",
      es: "Por Qué las Firmas Modernas Superan las Aplicaciones Web",
    },
    subtitle: {
      en: "Traditional web-based lead portals crash and throttle when handling hundreds of thousands of docket records. DocketLinks is built as a native desktop application with Rust and Tauri v2, pairing local raw computing power with automated cloud ingestion.",
      es: "Los portales web tradicionales se congelan y limitan cuando manejan cientos de miles de expedientes. DocketLinks es una aplicación nativa de escritorio construida con Rust y Tauri v2.",
    },
    pillars: [
      {
        id: "tauri",
        title: { en: "Rust + Tauri v2 Core", es: "Núcleo en Rust y Tauri v2" },
        description: {
          en: "Under 60MB RAM footprint, instant startup, and zero Electron bloat. Your computer stays fast and responsive even while crunching millions of docket rows.",
          es: "Menos de 60MB de RAM, inicio instantáneo y sin la sobrecarga de Electron. Su equipo responde al instante procesando millones de registros.",
        },
        badge: { en: "High Performance", es: "Alto Rendimiento" },
        iconName: "cpu",
      },
      {
        id: "sqlite",
        title: { en: "Embedded SQLite Engine", es: "Motor SQLite Embebido" },
        description: {
          en: "Every record is indexed locally in a relational SQLite database. Perform complex multi-statute regex searches with zero network latency and offline accessibility.",
          es: "Cada caso se indexa localmente en SQLite. Realice búsquedas complejas con expresiones regulares sin depender de la velocidad de Internet.",
        },
        badge: { en: "< 10ms Search", es: "Búsqueda < 10ms" },
        iconName: "database",
      },
      {
        id: "scrapers",
        title: { en: "Continuous Ingestion Pipeline", es: "Pipeline de Extracción Continua" },
        description: {
          en: "Automated distributed scrapers monitor docket registries 24/7. When a new filing hits a Pennsylvania courthouse, it is parsed and verified within minutes.",
          es: "Scrapers automatizados monitorean registros judiciales 24/7. Nuevos casos radicados en Pensilvania se procesan y validan en minutos.",
        },
        badge: { en: "Real-Time", es: "Tiempo Real" },
        iconName: "zap",
      },
      {
        id: "presort",
        title: { en: "USPS CASS Presort Engine", es: "Motor de Preclasificación CASS" },
        description: {
          en: "Automated address standardization, ZIP+4 enhancement, and postal tray barcode ordering. Qualify for bulk automation rates and cut postage costs by up to 50%.",
          es: "Estandarización de direcciones, código ZIP+4 y código de barras postal por bandejas. Califique para tarifas con descuentos del 30-50%.",
        },
        badge: { en: "30-50% Savings", es: "30-50% Ahorro" },
        iconName: "mail",
      },
    ] as LocalizedFeatureItem[],
  },
  workflow: {
    eyebrow: {
      en: "END-TO-END AUTOMATION",
      es: "AUTOMATIZACIÓN INTEGRAL",
    },
    title: {
      en: "From Court Docket to Retained Client in 4 Steps",
      es: "Del Expediente Judicial al Cliente en 4 Pasos",
    },
    subtitle: {
      en: "DocketLinks handles every step from courthouse scraping to postal barcoding, giving your firm the competitive first-mover advantage.",
      es: "DocketLinks gestiona cada etapa, desde la extracción judicial hasta el código de barras postal, dándole a su firma una ventaja decisiva.",
    },
    steps: [
      {
        step: "01",
        title: { en: "Continuous Docket Ingestion", es: "Extracción Continua de Expedientes" },
        description: {
          en: "Our automated scrapers continuously harvest filings from Pennsylvania MDJ and Common Pleas courts, extracting defendant details, charges, and hearing schedules.",
          es: "Nuestros scrapers extraen continuamente radicaciones de tribunales MDJ y Common Pleas, obteniendo acusados, cargos y audiencias.",
        },
        highlight: { en: "Real-time automated scraper network", es: "Red automatizada en tiempo real" },
        iconName: "download",
      },
      {
        step: "02",
        title: { en: "Statute & Severity Classification", es: "Clasificación por Estatuto y Gravedad" },
        description: {
          en: "DocketLinks automatically categorizes charges into Title 18 (Crimes Code), Title 75 (Vehicle Code), Title 35 (Drug Violations), or Civil/Tenant disputes.",
          es: "Clasificación automática en Título 18 (Código Penal), Título 75 (Tránsito), Título 35 (Sustancias) o litigios de inquilinos y civiles.",
        },
        highlight: { en: "Filter by exact statute and charge grade", es: "Filtro por estatuto exacto y grado" },
        iconName: "scale",
      },
      {
        step: "03",
        title: { en: "Multi-Attorney Lead Claiming", es: "Reclamo y Asignación de Casos" },
        description: {
          en: "Attorneys and staff claim leads with a single click. Our collision lock prevents double solicitation, tracking follow-up notes and assignment history.",
          es: "Los abogados reclaman prospectos con un clic. El bloqueo de colisión evita solicitudes duplicadas y guarda notas de seguimiento.",
        },
        highlight: { en: "Team collision prevention & notes", es: "Prevención de colisiones y notas" },
        iconName: "users",
      },
      {
        step: "04",
        title: { en: "CASS Presort & 1-Click Export", es: "Preclasificación CASS y Exportación" },
        description: {
          en: "Standardize addresses with USPS CASS certification and export pre-sorted recipient lists ready for bulk postage discounts and mail houses.",
          es: "Estandarice direcciones con certificación CASS y exporte listas preclasificadas listas para tarifas postales reducidas de USPS.",
        },
        highlight: { en: "Save 30-50% on every mail piece", es: "Ahorre 30-50% en cada carta enviada" },
        iconName: "mail",
      },
    ] as LocalizedWorkflowStep[],
  },
  faqs: [
    {
      question: {
        en: "What court jurisdictions are covered?",
        es: "¿Qué tribunales y jurisdicciones están cubiertos?",
      },
      answer: {
        en: "DocketLinks currently covers all 67 Pennsylvania counties, including Magisterial District Courts (MDJ), Philadelphia Municipal Court, and Courts of Common Pleas for criminal, traffic, summary, and landlord-tenant filings.",
        es: "DocketLinks cubre actualmente los 67 condados de Pensilvania, incluyendo tribunales de distrito magisterial (MDJ), tribunal municipal de Filadelfia y tribunales de causas comunes (Common Pleas).",
      },
    },
    {
      question: {
        en: "Is direct mail solicitation legal for Pennsylvania attorneys?",
        es: "¿Es legal la correspondencia directa para abogados en Pensilvania?",
      },
      answer: {
        en: "Yes. Direct mail targeted legal advertising is permitted under Pennsylvania Rules of Professional Conduct (Rule 7.2 and 7.3) when complying with required labeling (such as 'ADVERTISEMENT' disclosures) and waiting period regulations.",
        es: "Sí. La publicidad legal por correo directo está permitida bajo las Reglas de Conducta Profesional de Pensilvania (Reglas 7.2 y 7.3) cumpliendo con los avisos obligatorios y períodos reglamentarios.",
      },
    },
    {
      question: {
        en: "How does the desktop application receive updates?",
        es: "¿Cómo recibe actualizaciones la aplicación de escritorio?",
      },
      answer: {
        en: "DocketLinks Browser has a built-in cryptographic updater. Whenever a new version is released, the app detects the update via our high-speed DigitalOcean Spaces feed and applies it seamlessly without manual reinstalls.",
        es: "DocketLinks Browser cuenta con un actualizador criptográfico integrado. Cuando se publica una nueva versión, la app la detecta y aplica automáticamente sin reinstalaciones manuales.",
      },
    },
    {
      question: {
        en: "Can I connect DocketLinks to my current CRM?",
        es: "¿Puedo conectar DocketLinks a mi CRM actual?",
      },
      answer: {
        en: "Yes. Our webhook pipeline allows automatic pushing of claimed leads directly into Zapier, Make, Clio, MyCase, Filevine, or custom API endpoints.",
        es: "Sí. Nuestro sistema de webhooks permite transferir casos reclamados directamente a Zapier, Make, Clio, MyCase, Filevine o sus propias APIs.",
      },
    },
  ] as LocalizedFaqItem[],
};
