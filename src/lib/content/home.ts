import { LocalizedFeatureItem, LocalizedWorkflowStep, LocalizedFaqItem, LocalizedStatItem } from "./types";

export const homeContent = {
  hero: {
    eyebrow: {
      en: "PENNSYLVANIA COURT DOCKET INTELLIGENCE",
      es: "INTELIGENCIA DE EXPEDIENTES JUDICIALES DE PENSILVANIA",
    },
    titlePrimary: {
      en: "Marketing Leads for Law Firms.",
      es: "Prospectos de Mercadeo para Bufetes.",
    },
    titleSecondary: {
      en: "Raw Desktop Speed.",
      es: "Velocidad Nativa de Escritorio.",
    },
    subtitle: {
      en: "DocketLinks delivers high-intent marketing leads for law firms by monitoring Pennsylvania court dockets multiple times daily. We capture defendant filings and enrich that data with verified mailing addresses, phone numbers, and emails—allowing attorneys to download targeted lead lists and launch high-converting direct-mail and email solicitation campaigns.",
      es: "DocketLinks entrega prospectos de mercadeo de alta intención para bufetes monitoreando expedientes de Pensilvania varias veces al día. Capturamos las radicaciones de acusados y enriquecemos esos datos con direcciones, teléfonos y correos verificados, permitiendo a los abogados descargar listas específicas y lanzar campañas de correo directo y captación con alta conversión.",
    },
    badge: {
      en: "Unlimited Team Members on Every Plan • Built with Rust & Tauri v2",
      es: "Usuarios Ilimitados en Cada Plan • Construido con Rust y Tauri v2",
    },
    statsCallout: {
      en: "Over 1,031,000+ court cases monitored this year (~4,000 new filings daily across 500+ courts).",
      es: "Más de 1,031,000 casos judiciales monitoreados este año (~4,000 radicaciones diarias en más de 500 cortes).",
    },
  },
  stats: [
    {
      value: { en: "1,031,000+", es: "1,031,000+" },
      label: { en: "Cases Monitored This Year", es: "Casos Monitoreados Este Año" },
      description: { en: "Over 28,300 freshly filed cases captured weekly across Pennsylvania", es: "Más de 28,300 casos recién radicados capturados semanalmente en Pensilvania" },
    },
    {
      value: { en: "~4,000", es: "~4,000" },
      label: { en: "New Filings Daily", es: "Nuevas Radicaciones al Día" },
      description: { en: "Daily averages: 3,072 traffic, 398 civil, and 346 criminal cases", es: "Promedios diarios: 3,072 de tránsito, 398 civiles y 346 penales" },
    },
    {
      value: { en: "500+", es: "500+" },
      label: { en: "Magisterial District Courts", es: "Tribunales de Distrito Magisterial" },
      description: { en: "Continuous monitoring across 500+ Pennsylvania courts—impossible to track manually", es: "Monitoreo continuo en más de 500 tribunales de Pensilvania, imposible de rastrear manualmente" },
    },
    {
      value: { en: "30-50%", es: "30-50%" },
      label: { en: "Direct Mail Savings", es: "Ahorro en Correo Directo" },
      description: { en: "Automated USPS CASS certification and carrier route tray presorting", es: "Certificación CASS y preclasificación postal por rutas de cartero" },
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
      en: "Traditional web-based lead portals crash and throttle when handling large case volumes. DocketLinks gives law firms an installed desktop application to filter, enrich, and export legal marketing leads with raw computing speed.",
      es: "Los portales web tradicionales se congelan cuando manejan grandes volúmenes de casos. DocketLinks brinda a los bufetes una aplicación de escritorio instalada para filtrar, enriquecer y exportar prospectos de mercadeo legal con máxima velocidad.",
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
        id: "desktop-performance",
        title: { en: "Installed Desktop Speed", es: "Velocidad de Escritorio Instalado" },
        description: {
          en: "An installed desktop experience delivers far superior performance, immediate responsiveness, and zero browser tab bloat compared to sluggish web apps.",
          es: "Una experiencia de escritorio instalada ofrece un rendimiento muy superior, respuesta inmediata y sin la lentitud de las aplicaciones web en el navegador.",
        },
        badge: { en: "< 10ms Response", es: "Respuesta < 10ms" },
        iconName: "zap",
      },
      {
        id: "docket-monitoring",
        title: { en: "Continuous Docket Monitoring", es: "Monitoreo Continuo de Expedientes" },
        description: {
          en: "Automated monitoring continuously tracks court registries 24/7, pulling in freshly filed cases multiple times daily so your firm never misses incoming legal filings.",
          es: "Sistemas automatizados monitorean registros judiciales 24/7, obteniendo casos recién radicados varias veces al día para que su bufete nunca pierda nuevas radicaciones.",
        },
        badge: { en: "Multiple Times Daily", es: "Varias Veces al Día" },
        iconName: "clock",
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
      en: "HOW LAW FIRMS WIN CASES",
      es: "CÓMO LAS FIRMAS CAPTAN CASOS",
    },
    title: {
      en: "From Court Docket to Direct-Mail Campaign in 4 Steps",
      es: "Del Expediente Judicial a la Campaña en 4 Pasos",
    },
    subtitle: {
      en: "DocketLinks handles docket monitoring and contact enrichment so your firm can easily filter, download, and launch targeted direct-mail and email outreach campaigns.",
      es: "DocketLinks gestiona el monitoreo de expedientes y el enriquecimiento de contactos para que su bufete pueda filtrar, descargar y lanzar fácilmente campañas de correo directo y captación.",
    },
    steps: [
      {
        step: "01",
        title: { en: "Daily Docket Monitoring", es: "Monitoreo Diario de Expedientes" },
        description: {
          en: "We monitor all 500+ Pennsylvania Magisterial District Courts multiple times daily, capturing freshly filed criminal, traffic, civil, and landlord-tenant dockets with defendant names and charges.",
          es: "Monitoreamos más de 500 tribunales de distrito magisterial de Pensilvania varias veces al día, capturando expedientes penales, de tránsito, civiles y de inquilinato recién radicados con nombres de acusados y cargos.",
        },
        highlight: { en: "Updated multiple times daily", es: "Actualizado varias veces al día" },
        iconName: "clock",
      },
      {
        step: "02",
        title: { en: "Contact Enrichment", es: "Enriquecimiento de Contactos" },
        description: {
          en: "Raw court records lack contact details. Our proprietary software cross-references multiple public record sources to uncover verified mailing addresses, phone numbers, and emails for defendants in need of counsel.",
          es: "Los expedientes judiciales públicos carecen de datos de contacto. Nuestro software propietario cruza múltiples registros públicos para descubrir direcciones postales, teléfonos y correos verificados de acusados que necesitan representación.",
        },
        highlight: { en: "Verified addresses & contact info", es: "Direcciones y contactos verificados" },
        iconName: "search",
      },
      {
        step: "03",
        title: { en: "Filter & Download in Desktop App", es: "Filtre y Descargue en la Aplicación" },
        description: {
          en: "Browse leads inside the high-speed desktop app. Filter by statute, charge grade, or county, and claim the exact cases you want with team collision locks to prevent duplicate solicitations.",
          es: "Explore prospectos dentro de la aplicación de escritorio de alta velocidad. Filtre por estatuto, gravedad de cargo o condado, y reclame los casos exactos que desea con bloqueo de colisión para evitar contactos duplicados.",
        },
        highlight: { en: "Claim & download only what you need", es: "Reclame y descargue solo lo que necesita" },
        iconName: "users",
      },
      {
        step: "04",
        title: { en: "Launch Direct-Mail & Email Campaigns", es: "Lance Campañas de Correo y Email" },
        description: {
          en: "Export USPS CASS-certified recipient lists pre-sorted for 30-50% postal discounts, or export clean CSV spreadsheets ready for your direct-mail print house and marketing outreach.",
          es: "Exporte listas certificadas por CASS de USPS preclasificadas con ahorros del 30-50% en franqueo, o descargue archivos CSV listos para su imprenta de correo directo y campañas de mercadeo.",
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
        en: "DocketLinks monitors all 500+ Magisterial District Courts (MDJ) across Pennsylvania for criminal, traffic, non-traffic, and landlord-tenant filings.",
        es: "DocketLinks monitorea los más de 500 tribunales de distrito magisterial (MDJ) de Pensilvania para casos penales, de tránsito, no de tránsito e inquilinato.",
      },
    },
    {
      question: {
        en: "What is the difference between a lead and an enrichment?",
        es: "¿Cuál es la diferencia entre un prospecto (lead) y un enriquecimiento (enrichment)?",
      },
      answer: {
        en: "A lead is the raw court case filing (docket number, defendant name, charges, filing date, and court jurisdiction). Raw court records do not include verified defendant addresses, phone numbers, or email contact details. This is where DocketLinks proprietary software shines: we cross-reference multiple public record sources to determine verified mailing addresses, phone numbers, and email contact info for the defendant. Attorneys can then download these enriched leads and use them for direct-mail letters or email solicitation to individuals facing active legal proceedings with high buyer intent.",
        es: "Un prospecto (lead) representa los datos crudos del expediente judicial (número de caso, nombre del demandado o imputado, cargos, fecha y juzgado). Los registros judiciales no incluyen direcciones postales, teléfonos ni correos electrónicos. Aquí es donde nuestro software propietario se destaca: cruzamos múltiples registros públicos para determinar direcciones postales, teléfonos y correos verificados del acusado. Los abogados pueden descargar estos prospectos enriquecidos y utilizarlos en cartas de correo directo o correos de captación dirigidos a personas que enfrentan procesos judiciales con alta intención de contratación.",
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
  appPreview: {
    titlebarStatus: { en: "Native Engine Active (3ms)", es: "Motor Nativo Activo (3ms)" },
    windowTitle: {
      en: "DocketLinks Browser v1.14.1 — [PA Unified Judicial System Database]",
      es: "DocketLinks Browser v1.14.1 — [Base de Datos Judicial Unificada de PA]",
    },
    tabs: {
      all: { en: "All Leads (4)", es: "Todos los Casos (4)" },
      traffic: { en: "Traffic & DUI", es: "Tránsito y DUI" },
      criminal: { en: "Crimes (Title 18)", es: "Penal (Título 18)" },
    },
    actions: {
      claimed: { en: "claimed", es: "reclamados" },
      exportCass: { en: "USPS CASS Presort", es: "Exportar CASS USPS" },
      claimButton: { en: "Claim Lead", es: "Reclamar Caso" },
      claimedButton: { en: "Claimed", es: "Reclamado" },
    },
    tableHeaders: {
      docketNumber: { en: "Docket Number", es: "No. Expediente" },
      county: { en: "County", es: "Condado" },
      primaryCharges: { en: "Primary Charges", es: "Cargos Principales" },
      grade: { en: "Grade", es: "Grado" },
      firmAction: { en: "Firm Action", es: "Acción de la Firma" },
    },
    analyticsTitle: {
      en: "Live Pennsylvania Docket Monitor",
      es: "Monitoreo en Vivo de Expedientes en Pensilvania",
    },
    analyticsSubtitle: {
      en: "Year-to-date filing volume aggregated across 500+ Magisterial District Courts",
      es: "Volumen acumulado del año agregado en más de 500 tribunales de distrito magisterial",
    },
    metricsStrip: [
      {
        value: "1,031,126",
        label: { en: "Filed This Year", es: "Radicados Este Año" },
        sub: { en: "Year to date", es: "Año acumulado" },
      },
      {
        value: "28,300",
        label: { en: "Filed This Week", es: "Esta Semana" },
        sub: { en: "Past 7 days", es: "Últimos 7 días" },
      },
      {
        value: "3,072 / day",
        label: { en: "Avg Daily Traffic", es: "Tránsito Diario" },
        sub: { en: "671,500 YTD", es: "671,500 este año" },
      },
      {
        value: "398 / day",
        label: { en: "Avg Daily Civil", es: "Civil Diario" },
        sub: { en: "113,517 YTD", es: "113,517 este año" },
      },
      {
        value: "346 / day",
        label: { en: "Avg Daily Criminal", es: "Penal Diario" },
        sub: { en: "85,766 YTD", es: "85,766 este año" },
      },
      {
        value: "65,032",
        label: { en: "Landlord / Tenant", es: "Inquilinato / Desahucio" },
        sub: { en: "Filings YTD", es: "Radicaciones este año" },
      },
    ],
  },
};
