import { I18nString, LocalizedFeatureItem } from "./types";

export interface MockExplorerLead {
  id: number;
  docket: string;
  defendant: string;
  plaintiff?: string;
  charges?: string;
  grade?: string;
  county: string;
  type: "Civil" | "Criminal" | "Traffic" | "Non-Traffic" | "Landlord / Tenant";
  status: string;
  date: string;
  amount?: string;
}

export interface MockClaimedLead {
  id: number;
  leadId: string;
  docket: string;
  county: string;
  filedDate: string;
  claimedDate: string;
  enrichedDate?: string;
  defendant: string;
  plaintiff: string;
  judge: string;
  amount: string;
  isEnriched: boolean;
  isCassValidated: boolean;
  phone?: string;
  docketAddress?: string;
  enrichedAddress?: string;
  upcomingHearing?: string;
  caption: string;
  notes?: string;
}

export const featuresContent = {
  hero: {
    eyebrow: {
      en: "PLATFORM ARCHITECTURE & CAPABILITIES",
      es: "ARQUITECTURA Y CAPACIDADES DE LA PLATAFORMA",
    },
    title: {
      en: "Deep Dive into DocketLinks Features",
      es: "Exploración a Fondo de las Funcionalidades",
    },
    subtitle: {
      en: "Discover how DocketLinks turns raw Pennsylvania court filings into enriched, high-converting legal marketing leads for law practices. Explore our native desktop workflows, real-time docket monitoring, and automated postal presorting.",
      es: "Descubra cómo DocketLinks convierte las radicaciones judiciales de Pensilvania en prospectos de mercadeo legal enriquecidos y de alta conversión. Explore nuestros flujos de escritorio nativos, monitoreo en tiempo real y preclasificación postal automatizada.",
    },
    badge: {
      en: "Installed Native Desktop Application • 500+ Courts Monitored",
      es: "Aplicación de Escritorio Instalada • Más de 500 Tribunales Monitoreados",
    },
  },

  leadExplorer: {
    badge: {
      en: "Feature Spotlight: Step 1 in Your Marketing Pipeline",
      es: "Funcionalidad Destacada: Paso 1 en su Proceso de Mercadeo",
    },
    title: {
      en: "Lead Explorer: Filter, Search & Claim Court Leads",
      es: "Explorador de Prospectos: Filtre, Busque y Reclame Casos",
    },
    description: {
      en: "The Lead Explorer is where legal marketing begins. Filter freshly filed court dockets across all 500+ Pennsylvania Magisterial District Courts by case type, status, county, or claim amount. Inspect defendant and plaintiff details, and claim selected leads into your firm's private queue with instant collision prevention.",
      es: "El Explorador de Prospectos es donde comienza el mercadeo legal. Filtre expedientes recién radicados en más de 500 tribunales de distrito magisterial de Pensilvania por tipo de caso, estado, condado o monto reclamado. Inspeccione detalles de partes y reclame prospectos seleccionados con prevención inmediata de colisiones.",
    },
    workflowNote: {
      en: "How it works: Once you claim a lead from the Explorer, it moves into your firm's private Claimed Leads list. From there, you trigger on-demand enrichment to obtain verified defendant mailing addresses, phone numbers, and emails for attorney solicitation.",
      es: "Cómo funciona: Una vez que reclama un prospecto en el Explorador, se traslada a la lista privada de Casos Reclamados de su bufete. Desde allí, ejecuta el enriquecimiento bajo demanda para obtener direcciones postales, teléfonos y correos verificados para la captación de clientes.",
    },
    highlights: [
      {
        id: "coverage",
        title: { en: "500+ Courts Monitored Daily", es: "Más de 500 Tribunales Diarios" },
        description: {
          en: "Fresh filings ingested multiple times daily across all 500+ Pennsylvania Magisterial District Courts.",
          es: "Radicaciones frescas ingresadas varias veces al día en más de 500 tribunales de distrito magisterial de Pensilvania.",
        },
      },
      {
        id: "filters",
        title: { en: "Granular Multi-Filters", es: "Filtros Múltiples Granulares" },
        description: {
          en: "Filter by Civil, Criminal, Traffic, Non-Traffic, Landlord/Tenant, county, filing date range, and claim amount.",
          es: "Filtre por Civil, Penal, Tránsito, No de Tránsito, Inquilinato, condado, rango de fechas y monto reclamado.",
        },
      },
      {
        id: "claim-lock",
        title: { en: "One-Click Claim Lock", es: "Bloqueo de Reclamo con un Clic" },
        description: {
          en: "Claim leads to lock them exclusively to your firm, instantly preventing coworker duplication or redundant outreach.",
          es: "Reclame casos para bloquearlos exclusivamente para su firma, evitando duplicidad de contacto entre compañeros.",
        },
      },
      {
        id: "pipeline",
        title: { en: "Direct-to-Enrichment Flow", es: "Flujo Directo al Enriquecimiento" },
        description: {
          en: "Seamlessly pass claimed leads to the real-time public record enrichment engine for verified contact details.",
          es: "Transfiera los casos reclamados al motor de enriquecimiento de registros públicos para obtener contactos verificados.",
        },
      },
    ],

    ui: {
      filtersTitle: { en: "Filters", es: "Filtros" },
      caseTypeLabel: { en: "Case Type", es: "Tipo de Caso" },
      caseTypes: {
        civil: { en: "Civil", es: "Civil" },
        criminal: { en: "Criminal", es: "Penal" },
        traffic: { en: "Traffic", es: "Tránsito" },
        nonTraffic: { en: "Non-Traffic", es: "No de Tránsito" },
        landlordTenant: { en: "Landlord / Tenant", es: "Inquilinato" },
      },
      searchLabel: { en: "Search", es: "Búsqueda" },
      searchPlaceholder: { en: "Docket #, caption...", es: "No. Expediente, carátula..." },
      caseStatusLabel: { en: "Case Status (1)", es: "Estado del Caso (1)" },
      caseStatusSelected: { en: "1 selected", es: "1 seleccionado" },
      showAdvancedFilters: { en: "Show Advanced Filters", es: "Mostrar Filtros Avanzados" },
      hideAdvancedFilters: { en: "Hide Advanced Filters", es: "Ocultar Filtros Avanzados" },
      filtersBadge: { en: "Filters", es: "Filtros" },
      leadsFound: { en: "leads found", es: "prospectos encontrados" },
      leadsCounts: {
        criminal: "30,370",
        traffic: "24,180",
        nonTraffic: "8,950",
        civil: "47,909",
        landlordTenant: "65,032",
      },
      commonwealthOfPA: {
        en: "Commonwealth of Pennsylvania",
        es: "Mancomunidad de Pensilvania",
      },
      hideClaimedToggle: { en: "Hide claimed leads", es: "Ocultar casos reclamados" },
      claimedHiddenText: { en: "4049 claimed leads hidden", es: "4049 casos reclamados ocultos" },
      claimSelectedButton: { en: "Claim Selected", es: "Reclamar Seleccionados" },
      claimedBadge: { en: "Claimed", es: "Reclamado" },
      selectedCountText: { en: "selected", es: "seleccionados" },

      advanced: {
        counties: { en: "Counties", es: "Condados" },
        statutes: { en: "Statutes", es: "Estatutos" },
        arrestingAgency: { en: "Arresting Agency", es: "Agencia de Arresto" },
        township: { en: "Township", es: "Municipio" },
        court: { en: "Court", es: "Tribunal" },
        filingDate: { en: "Filing Date", es: "Fecha de Radicación" },
        nextHearing: { en: "Next Hearing", es: "Próxima Audiencia" },
        defendantName: { en: "Defendant Name", es: "Nombre del Acusado" },
        chargeGrade: { en: "Charge Grade", es: "Grado del Cargo" },
        claimAmount: { en: "Claim Amount", es: "Monto Reclamado" },
        claimAmountRange: { en: "Claim Amount Range ($)", es: "Rango del Monto Reclamado ($)" },
        plaintiffName: { en: "Plaintiff Name", es: "Nombre del Demandante" },
        plaintiffNames: { en: "Plaintiff Names", es: "Nombres de Demandantes" },
        plaintiffTagHelper: {
          en: "Press Enter, Tab, or comma to add. Matches any keyword.",
          es: "Presione Enter, Tab o coma para agregar. Coincide con cualquier palabra clave.",
        },

        selectPlaceholder: { en: "Select...", es: "Seleccionar..." },
        selectStatutesPlaceholder: { en: "Select statutes...", es: "Seleccionar estatutos..." },
        searchStatutesPlaceholder: { en: "Search statutes...", es: "Buscar estatutos..." },
        searchDefendantPlaceholder: { en: "Search defendant...", es: "Buscar demandado..." },
        searchPlaintiffPlaceholder: { en: "Search plaintiff...", es: "Buscar demandante..." },
        typeAndPressEnterPlaceholder: { en: "Type and press Enter...", es: "Escriba y presione Enter..." },
        minPlaceholder: { en: "Min", es: "Mín" },
        maxPlaceholder: { en: "Max", es: "Máx" },
        minAmountPlaceholder: { en: "Min $", es: "Mín $" },
        maxAmountPlaceholder: { en: "Max $", es: "Máx $" },
        fromPlaceholder: { en: "From", es: "Desde" },
        toPlaceholder: { en: "To", es: "Hasta" },

        statuteOptions: [
          {
            code: "18 § 2501 §§ A",
            name: { en: "A H1 Criminal Homicide", es: "A H1 Homicidio Criminal" },
          },
          {
            code: "18 § 2502 §§ A",
            name: { en: "A H1 Murder Of The First Degree", es: "A H1 Asesinato en Primer Grado" },
          },
          {
            code: "18 § 2502 §§ C",
            name: { en: "Murder Of The Third Degree", es: "Asesinato en Tercer Grado" },
          },
          {
            code: "18 § 2504 §§ A",
            name: { en: "Involuntary Manslaughter", es: "Homicidio Involuntario" },
          },
          {
            code: "18 § 2505 §§ B",
            name: { en: "Aiding Suicide", es: "Instigación o Ayuda al Suicidio" },
          },
          {
            code: "75 § 3802 §§ A1",
            name: { en: "DUI: Gen Imp/Inc of Driving Safely", es: "DUI: Incapacidad para Conducir" },
          },
          {
            code: "18 § 3929 §§ A1",
            name: { en: "Retail Theft - Take Merchandise", es: "Hurto en Tiendas" },
          },
          {
            code: "18 § 2701 §§ A",
            name: { en: "Simple Assault / Harassment", es: "Agresión Simple / Acoso" },
          },
        ],

        datePresets: {
          last3Days: { en: "Last 3 Days", es: "Últimos 3 Días" },
          last7Days: { en: "Last 7 Days", es: "Últimos 7 Días" },
          last30Days: { en: "Last 30 Days", es: "Últimos 30 Días" },
          allTime: { en: "All Time", es: "Todo el Tiempo" },
        },
        sampleDates: {
          start: { en: "June 1st, 2026", es: "1 de Junio de 2026" },
          end: { en: "September 19th, 2026", es: "19 de Septiembre de 2026" },
        },
      },

      tableHeaders: {
        docketNumber: { en: "Docket #", es: "No. Expediente" },
        defendant: { en: "Defendant", es: "Demandado / Acusado" },
        plaintiff: { en: "Plaintiff", es: "Demandante" },
        charges: { en: "Charges", es: "Cargos" },
        primaryCharge: { en: "Primary Charge", es: "Cargo Principal" },
        grade: { en: "Grade", es: "Grado" },
        county: { en: "County", es: "Condado" },
        type: { en: "Type", es: "Tipo" },
        status: { en: "Status", es: "Estado" },
        filingDate: { en: "Filing Date", es: "Fecha Radicación" },
        claimAmount: { en: "Claim Amount", es: "Monto Reclamado" },
      },

      pagination: {
        showingText: { en: "Showing 1 - 10 of 217", es: "Mostrando 1 - 10 de 217" },
        rowsText: { en: "Rows: 25", es: "Filas: 25" },
        pageText: { en: "Page 1 of 9 (217 total)", es: "Página 1 de 9 (217 total)" },
        previous: { en: "Previous", es: "Anterior" },
        next: { en: "Next", es: "Siguiente" },
      },

      appWindowHeader: {
        windowTitle: {
          en: "DocketLinks Browser — [Lead Explorer]",
          es: "DocketLinks Browser — [Explorador de Prospectos]",
        },
        engineStatus: {
          en: "Rust Engine: 2ms • Live Sync Active",
          es: "Motor Rust: 2ms • Sincronización en Vivo",
        },
      },
    },

    mockLeads: [
      // Civil Leads
      {
        id: 1,
        docket: "MJ-50101-CV-0000184-2026",
        defendant: "Robert Vance",
        plaintiff: "Apex Financial Recovery, LLC",
        county: "Butler",
        type: "Civil",
        status: "Active",
        date: "Jul 21, 2026",
        amount: "$1,324.04",
      },
      {
        id: 2,
        docket: "MJ-24302-CV-0000322-2026",
        defendant: "Eleanor Campbell",
        plaintiff: "Keystone Credit Management Inc",
        county: "Blair",
        type: "Civil",
        status: "Active",
        date: "Jul 21, 2026",
        amount: "$1,270.00",
      },
      {
        id: 3,
        docket: "MJ-43302-CV-0000465-2026",
        defendant: "Marcus Holloway",
        plaintiff: "Horizon Capital Systems LLC",
        county: "Monroe",
        type: "Civil",
        status: "Active",
        date: "Jul 21, 2026",
        amount: "$2,057.23",
      },
      {
        id: 4,
        docket: "MJ-56301-CV-0000302-2026",
        defendant: "David Miller",
        plaintiff: "Summit Asset Portfolio, LLC",
        county: "Carbon",
        type: "Civil",
        status: "Active",
        date: "Jul 21, 2026",
        amount: "$2,473.08",
      },
      {
        id: 5,
        docket: "MJ-05207-CV-0000410-2026",
        defendant: "Sarah Jenkins",
        plaintiff: "Galaxy Credit Holdings, LLC",
        county: "Allegheny",
        type: "Civil",
        status: "Active",
        date: "Jul 21, 2026",
        amount: "$5,470.94",
      },

      // Landlord / Tenant Leads
      {
        id: 11,
        docket: "MJ-05202-LT-0000112-2026",
        defendant: "Gregory Hayes",
        plaintiff: "Penn Commons Apartments LP",
        county: "Allegheny",
        type: "Landlord / Tenant",
        status: "Active",
        date: "Jul 20, 2026",
        amount: "$2,850.00",
      },
      {
        id: 12,
        docket: "MJ-38104-LT-0000089-2026",
        defendant: "Victoria Sterling",
        plaintiff: "Montgomery Property Group LLC",
        county: "Montgomery",
        type: "Landlord / Tenant",
        status: "Active",
        date: "Jul 19, 2026",
        amount: "$1,920.50",
      },
      {
        id: 13,
        docket: "MJ-23101-LT-0000067-2026",
        defendant: "Brian Callahan",
        plaintiff: "Reading Residential Ventures",
        county: "Berks",
        type: "Landlord / Tenant",
        status: "Active",
        date: "Jul 18, 2026",
        amount: "$3,140.00",
      },

      // Criminal Leads
      {
        id: 21,
        docket: "MJ-05202-CR-0000214-2026",
        defendant: "Ryan Gallagher",
        charges: "75 § 3802 §§ A1 - DUI: Gen Imp/Inc of Driving Safely",
        grade: "M",
        county: "Allegheny",
        type: "Criminal",
        status: "Active",
        date: "Jul 21, 2026",
      },
      {
        id: 22,
        docket: "MJ-23101-CR-0000318-2026",
        defendant: "James Kowalski",
        charges: "18 § 3929 §§ A1 - Retail Theft - Take Merchandise",
        grade: "M1",
        county: "Berks",
        type: "Criminal",
        status: "Active",
        date: "Jul 21, 2026",
      },
      {
        id: 23,
        docket: "MJ-38104-CR-0000098-2026",
        defendant: "Derek Vance",
        charges: "18 § 2701 §§ A - Simple Assault / Harassment",
        grade: "M2",
        county: "Montgomery",
        type: "Criminal",
        status: "Active",
        date: "Jul 20, 2026",
      },
      {
        id: 24,
        docket: "MJ-07101-CR-0000441-2026",
        defendant: "Anthony Morales",
        charges: "35 § 780-113 §§ A16 - Int Poss Contr Subst By Per Not Reg",
        grade: "M",
        county: "Bucks",
        type: "Criminal",
        status: "Active",
        date: "Jul 20, 2026",
      },

      // Traffic Leads
      {
        id: 31,
        docket: "MJ-07101-TR-0001552-2026",
        defendant: "Melissa Henderson",
        charges: "75 § 3362 §§ A2 - Exceed Max Speed Limit (31+ MPH)",
        grade: "S",
        county: "Bucks",
        type: "Traffic",
        status: "Active",
        date: "Jul 21, 2026",
      },
      {
        id: 32,
        docket: "MJ-50101-TR-0002104-2026",
        defendant: "Keith Daniels",
        charges: "75 § 1543 §§ A - Driv While Oper Priv Susp Or Revoked",
        grade: "S",
        county: "Butler",
        type: "Traffic",
        status: "Active",
        date: "Jul 20, 2026",
      },
      {
        id: 33,
        docket: "MJ-24302-TR-0000983-2026",
        defendant: "Samantha Brooks",
        charges: "75 § 3714 §§ A - Careless Driving",
        grade: "S",
        county: "Blair",
        type: "Traffic",
        status: "Active",
        date: "Jul 20, 2026",
      },

      // Non-Traffic Leads
      {
        id: 41,
        docket: "MJ-56301-NT-0000078-2026",
        defendant: "Tyler Ward",
        charges: "18 § 2709 §§ A1 - Harassment - Strike, Shove, Kick",
        grade: "S",
        county: "Carbon",
        type: "Non-Traffic",
        status: "Active",
        date: "Jul 21, 2026",
      },
      {
        id: 42,
        docket: "MJ-43302-NT-0000114-2026",
        defendant: "Jordan Ellis",
        charges: "18 § 5503 §§ A1 - Disorderly Conduct Hazardous/Physi Off",
        grade: "S",
        county: "Monroe",
        type: "Non-Traffic",
        status: "Active",
        date: "Jul 20, 2026",
      },
      {
        id: 43,
        docket: "MJ-24102-NT-0000092-2026",
        defendant: "Brandon Reed",
        charges: "18 § 5505 - Public Drunkenness And Misconduct",
        grade: "S",
        county: "Blair",
        type: "Non-Traffic",
        status: "Active",
        date: "Jul 19, 2026",
      },
    ] as MockExplorerLead[],
  },

  claimedLeads: {
    badge: {
      en: "Feature Spotlight: Step 2 & 3 in Your Pipeline",
      es: "Funcionalidad Destacada: Pasos 2 y 3 en su Flujo",
    },
    title: {
      en: "Claimed Leads: Contact Enrichment, USPS CASS & Outreach CRM",
      es: "Casos Reclamados: Enriquecimiento, CASS Postal y CRM de Captación",
    },
    description: {
      en: "Your private law practice command center. Review claimed court filings, run on-demand public records enrichment for verified defendant phone numbers and addresses, validate deliverability with integrated USPS CASS certification, and track marketing outcomes from initial contact to retained client.",
      es: "El centro de control privado de su bufete. Revise radicaciones reclamadas, ejecute enriquecimiento bajo demanda para obtener teléfonos y direcciones verificadas, valide entregabilidad con certificación CASS de USPS y rastree resultados de captación.",
    },
    highlights: [
      {
        id: "enrichment",
        title: { en: "On-Demand Public Records Search", es: "Búsqueda en Registros Públicos" },
        description: {
          en: "Trigger real-time contact discovery on claimed leads to uncover verified mailing addresses, phone numbers, and emails.",
          es: "Ejecute el descubrimiento de contactos en tiempo real para obtener direcciones, teléfonos y correos verificados.",
        },
      },
      {
        id: "cass-cert",
        title: { en: "Integrated USPS CASS Certification", es: "Certificación CASS USPS Integrada" },
        description: {
          en: "Standardize addresses, verify ZIP+4 deliverability, and qualify for commercial postal automation discounts.",
          es: "Estandarice direcciones, valide entregabilidad con ZIP+4 y califique para descuentos postales comerciales.",
        },
      },
      {
        id: "crm-tracking",
        title: { en: "Outreach & Retainer CRM", es: "CRM de Captación y Contratación" },
        description: {
          en: "Track mailings, emails, and texts, record custom notes, and mark outcomes (Responded, Hired) to calculate legal ROI.",
          es: "Rastree envíos de correo, emails y SMS, guarde notas y registre resultados (Respondió, Contratado) para medir el ROI.",
        },
      },
      {
        id: "bulk-export",
        title: { en: "Direct Mail & CSV Export", es: "Exportación Directa a CSV" },
        description: {
          en: "Export clean recipient lists pre-formatted for commercial print houses or internal mail merges with one click.",
          es: "Descargue listas depuradas preparadas para imprentas de correo directo o combinación de correspondencia.",
        },
      },
    ],
    ui: {
      title: { en: "Claimed Leads", es: "Casos Reclamados" },
      subtitle: {
        en: "History of all leads you've claimed and downloaded",
        es: "Historial de todos los prospectos reclamados y descargados",
      },
      searchPlaceholder: {
        en: "Search by docket number...",
        es: "Buscar por número de expediente...",
      },
      filters: {
        allLeads: { en: "All Leads", es: "Todos los Casos" },
        notEnriched: { en: "Not Enriched", es: "No Enriquecidos" },
        enriched: { en: "Enriched", es: "Enriquecidos" },
        downloadsAll: { en: "All", es: "Todos" },
        claimedAll: { en: "Claimed: All", es: "Reclamado: Todo" },
        filedAll: { en: "Filed: All", es: "Radicado: Todo" },
        clearFilters: { en: "Clear Filters", es: "Limpiar Filtros" },
      },
      actions: {
        claimedCount: { en: "4,049 claimed leads", es: "4,049 casos reclamados" },
        enrichSelected: { en: "Enrich Selected", es: "Enriquecer Seleccionados" },
        validateAddresses: { en: "Validate Addresses", es: "Validar Direcciones" },
        exportCsv: { en: "Export CSV", es: "Exportar CSV" },
        selectedText: { en: "selected", es: "seleccionados" },
        clearText: { en: "Clear", es: "Limpiar" },
      },
      tableHeaders: {
        county: { en: "COUNTY", es: "CONDADO" },
        filed: { en: "FILED", es: "RADICADO" },
        defendant: { en: "DEFENDANT", es: "DEMANDADO" },
        plaintiff: { en: "PLAINTIFF", es: "DEMANDANTE" },
        judge: { en: "JUDGE", es: "JUEZ" },
        claimAmount: { en: "CLAIM AMOUNT", es: "MONTO RECLAMADO" },
        status: { en: "STATUS", es: "ESTADO" },
      },
      drawer: {
        claimInfo: { en: "Claim Information", es: "Información del Reclamo" },
        leadId: { en: "Lead ID", es: "ID del Caso" },
        claimed: { en: "Claimed", es: "Reclamado" },
        enriched: { en: "Enriched", es: "Enriquecido" },
        notEnriched: { en: "Not Enriched", es: "No Enriquecido" },
        notes: { en: "Notes", es: "Notas" },
        notesPlaceholder: { en: "Add notes about this lead...", es: "Agregar notas sobre este caso..." },
        outreachOutcome: { en: "Outreach & Outcome", es: "Contacto y Resultado" },
        outreach: { en: "OUTREACH", es: "CONTACTO" },
        mailed: { en: "Mailed", es: "Carta Enviada" },
        emailed: { en: "Emailed", es: "Correo Enviado" },
        texted: { en: "Texted", es: "SMS Enviado" },
        outcome: { en: "OUTCOME", es: "RESULTADO" },
        responded: { en: "Responded", es: "Respondió" },
        hired: { en: "Hired", es: "Contratado" },
        caseInfo: { en: "Case Information", es: "Información del Caso" },
        caption: { en: "Caption", es: "Carátula" },
        type: { en: "Type", es: "Tipo" },
        status: { en: "Status", es: "Estado" },
        county: { en: "County", es: "Condado" },
        court: { en: "Court", es: "Juzgado" },
        filingDate: { en: "Filing Date", es: "Fecha Radicación" },
        docketSheet: { en: "Docket Sheet", es: "Expediente Judicial" },
        defendant: { en: "Defendant", es: "Demandado" },
        name: { en: "Name", es: "Nombre" },
        docketAddress: {
          en: "Docket Address (from court records)",
          es: "Dirección del Expediente (de registros judiciales)",
        },
        enrichedAddress: { en: "Enriched Address", es: "Dirección Enriquecida" },
        availableBadge: { en: "Available", es: "Disponible" },
        validatedAddress: { en: "Validated Address", es: "Dirección Validada" },
        cassCertified: { en: "CASS-Certified™", es: "Certificado CASS™" },
        upcomingEvents: { en: "Upcoming Events", es: "Próximos Eventos" },
        civilHearing: { en: "Civil Action Hearing", es: "Audiencia de Acción Civil" },
      },
      modal: {
        title: { en: "Enrich Selected Leads", es: "Enriquecer Casos Seleccionados" },
        desc: {
          en: "Enrich selected leads with contact information. Already-enriched leads will be skipped automatically.",
          es: "Enriquezca los casos seleccionados con información de contacto. Los casos ya enriquecidos se omitirán automáticamente.",
        },
        subtext: {
          en: "This will attempt to find current contact information (phone, email, address) for your selected leads.",
          es: "Esto intentará encontrar información de contacto actual (teléfono, correo, dirección) para sus prospectos seleccionados.",
        },
        usageNoteTitle: { en: "Usage Note", es: "Nota de Uso" },
        usageNoteText: {
          en: "Each enrichment counts against your monthly quota. Leads where no match is found will still count against the quota as the quota is based on usage, not results.",
          es: "Cada enriquecimiento cuenta para su cuota mensual. Los casos donde no se encuentre coincidencia aún contarán para la cuota, ya que esta se basa en el uso y no en los resultados.",
        },
        alsoCassCheckbox: {
          en: "Also CASS-Certify addresses after enrichment",
          es: "También certificar direcciones con CASS después del enriquecimiento",
        },
        alsoCassSubtext: {
          en: "Validate addresses for deliverability immediately after enrichment",
          es: "Validar entregabilidad de direcciones inmediatamente tras el enriquecimiento",
        },
        cancelButton: { en: "Cancel", es: "Cancelar" },
        confirmButton: { en: "Enrich Leads", es: "Enriquecer Casos" },
      },
    },
    mockClaimedLeads: [
      {
        id: 1,
        leadId: "3389921",
        docket: "MJ-07104-CV-0000258-2026",
        county: "Bucks",
        filedDate: "Jul 9, 2026",
        claimedDate: "Jul 10, 2026, 9:59 AM",
        enrichedDate: "Jul 10, 2026, 9:59 AM",
        defendant: "Thomas Herman",
        plaintiff: "LVNV FUNDING LLC",
        judge: "Terrence Hughes",
        amount: "$2,029.74",
        isEnriched: true,
        isCassValidated: true,
        phone: "(215) 945-7124",
        docketAddress: "Levittown, PA 19055",
        enrichedAddress: "24 South Ln, Levittown, PA 19055",
        upcomingHearing: "Aug 10, 2026 at 8:45 am",
        caption: "LVNV FUNDING LLC v. Herman, Thomas",
        notes: "Direct mail sent. Client called asking about debt settlement options.",
      },
      {
        id: 2,
        leadId: "3389945",
        docket: "MJ-01101-CV-0000142-2026",
        county: "Adams",
        filedDate: "Jul 9, 2026",
        claimedDate: "Jul 10, 2026, 10:15 AM",
        enrichedDate: "Jul 10, 2026, 10:15 AM",
        defendant: "Dwight Bynaker",
        plaintiff: "JEFFERSON CAPITAL SYSTEMS LLC",
        judge: "Tony Little",
        amount: "$1,694.61",
        isEnriched: true,
        isCassValidated: true,
        phone: "(717) 334-8891",
        docketAddress: "Gettysburg, PA 17325",
        enrichedAddress: "142 Baltimore St, Gettysburg, PA 17325",
        upcomingHearing: "Aug 14, 2026 at 10:00 am",
        caption: "JEFFERSON CAPITAL SYSTEMS LLC v. Bynaker, Dwight",
      },
      {
        id: 3,
        leadId: "1335376",
        docket: "MJ-08201-CV-0000176-2026",
        county: "Northumberland",
        filedDate: "Jun 19, 2026",
        claimedDate: "Jun 22, 2026, 10:11 PM",
        defendant: "Abigail Cryts",
        plaintiff: "Jefferson Capital Systems, LLC",
        judge: "William Cole",
        amount: "$1,131.53",
        isEnriched: false,
        isCassValidated: false,
        docketAddress: "Mount Carmel, PA 17851",
        caption: "Jefferson Capital Systems, LLC v. Cryts, Abigail",
      },
      {
        id: 4,
        leadId: "1335389",
        docket: "MJ-08201-CV-0000179-2026",
        county: "Northumberland",
        filedDate: "Jun 19, 2026",
        claimedDate: "Jun 22, 2026, 10:11 PM",
        defendant: "Felicia Kitko",
        plaintiff: "Capital One",
        judge: "James Glass",
        amount: "$9,100.34",
        isEnriched: false,
        isCassValidated: false,
        docketAddress: "Shamokin, PA 17872",
        caption: "Capital One v. Kitko, Felicia",
      },
      {
        id: 5,
        leadId: "1335402",
        docket: "MJ-08201-CV-0000185-2026",
        county: "Northumberland",
        filedDate: "Jun 19, 2026",
        claimedDate: "Jun 22, 2026, 10:11 PM",
        defendant: "Teri Williams",
        plaintiff: "Barclays Delaware",
        judge: "Jacqueline Leister",
        amount: "$8,046.04",
        isEnriched: false,
        isCassValidated: false,
        docketAddress: "Sunbury, PA 17801",
        caption: "Barclays Delaware v. Williams, Teri",
      },
      {
        id: 6,
        leadId: "3389978",
        docket: "MJ-56301-CV-0000302-2026",
        county: "Carbon",
        filedDate: "Jul 9, 2026",
        claimedDate: "Jul 10, 2026, 11:30 AM",
        enrichedDate: "Jul 10, 2026, 11:30 AM",
        defendant: "Gabriel Henry",
        plaintiff: "Capital One",
        judge: "William Kissner",
        amount: "$1,705.32",
        isEnriched: true,
        isCassValidated: true,
        phone: "(570) 325-4419",
        docketAddress: "Jim Thorpe, PA 18229",
        enrichedAddress: "88 Broadway, Jim Thorpe, PA 18229",
        caption: "Capital One v. Henry, Gabriel",
      },
      {
        id: 7,
        leadId: "3390012",
        docket: "MJ-26101-CV-0000219-2026",
        county: "Columbia",
        filedDate: "Jul 9, 2026",
        claimedDate: "Jul 10, 2026, 11:45 AM",
        defendant: "Rubin Chen",
        plaintiff: "Midland Credit Management",
        judge: "Russell Lawton",
        amount: "$8,402.87",
        isEnriched: false,
        isCassValidated: false,
        docketAddress: "Bloomsburg, PA 17815",
        caption: "Midland Credit Management v. Chen, Rubin",
      },
      {
        id: 8,
        leadId: "3390045",
        docket: "MJ-50101-CV-0000184-2026",
        county: "Butler",
        filedDate: "Jul 9, 2026",
        claimedDate: "Jul 10, 2026, 1:00 PM",
        enrichedDate: "Jul 10, 2026, 1:00 PM",
        defendant: "Gavin Young",
        plaintiff: "Jefferson Capital Systems LLC",
        judge: "Kevin O'Donnell",
        amount: "$3,416.29",
        isEnriched: true,
        isCassValidated: true,
        phone: "(724) 287-9032",
        docketAddress: "Butler, PA 16001",
        enrichedAddress: "310 Main St, Butler, PA 16001",
        caption: "Jefferson Capital Systems LLC v. Young, Gavin",
      },
    ] as MockClaimedLead[],
  },

  rulesEngine: {
    badge: {
      en: "Exclusive Innovation: Automated Export Transforms",
      es: "Innovación Exclusiva: Transformaciones Automáticas de Exportación",
    },
    title: {
      en: "Dynamic Export Calculation & Regex Rules Engine",
      es: "Motor Dinámico de Cálculos y Reglas Regex para Exportación",
    },
    description: {
      en: "To our knowledge, no other lead engine or PA court aggregator provides an integrated formula and regex transformation pipeline. Automatically compute custom attorney retainer fees with min/max clamps, round to clean marketing figures, and classify debt collector plaintiffs with regex—injecting mail-merge ready columns straight into your direct mail export.",
      es: "Hasta donde sabemos, ninguna otra plataforma de prospectos o agregador judicial en PA ofrece un motor integrado de fórmulas y regex. Calcule honorarios de retención con límites mínimos/máximos, redondee a cifras comerciales y clasifique demandantes de cobranza con regex, inyectando columnas listas para correo directo.",
    },
    highlights: [
      {
        id: "math-formulas",
        title: { en: "Custom Fee Math Calculations", es: "Cálculos Matemáticos de Honorarios" },
        description: {
          en: "Calculate variable attorney fees directly from claim amounts (e.g. 20% retainer) or compute custom court cost buffers.",
          es: "Calcule honorarios variables directamente desde los montos reclamados (ej. 20% de retención) o estime costos judiciales.",
        },
      },
      {
        id: "clamps-rounding",
        title: { en: "Floors, Ceilings & Nearest Rounding", es: "Pisos, Techos y Redondeo al Más Cercano" },
        description: {
          en: "Enforce minimum floors ($400 min) and maximum caps ($1,800 max), and round up to the nearest $50 or $100 for professional marketing mailers.",
          es: "Aplique pisos mínimos ($400) y topes máximos ($1,800), y redondee al $50 o $100 más cercano para cartas de captación profesionales.",
        },
      },
      {
        id: "regex-pattern",
        title: { en: "Regex & Pattern Matching", es: "Regex y Coincidencia de Patrones" },
        description: {
          en: "Match institutional plaintiffs (Midland, LVNV, Portfolio Recovery) or specific statutes to route distinct letter copy.",
          es: "Detecte demandantes institucionales (Midland, LVNV) o artículos de ley con regex para asignar redacciones específicas.",
        },
      },
      {
        id: "live-sandbox",
        title: { en: "Interactive Sandbox & Rule Tester", es: "Banco de Pruebas y Simulador en Vivo" },
        description: {
          en: "Test formulas instantly against pre-loaded civil claims, debt collection filings, and criminal dockets with real-time feedback.",
          es: "Pruebe fórmulas al instante con casos civiles, cobranzas de deudas y expedientes penales con resultados en tiempo real.",
        },
      },
    ],

    ui: {
      settingsNav: {
        settingsTitle: { en: "Settings", es: "Configuración" },
        general: { en: "General", es: "General" },
        exportRules: { en: "Export Rules", es: "Reglas de Exportación" },
        integrations: { en: "Integrations", es: "Integraciones" },
        team: { en: "Team", es: "Equipo" },
        tenantAccount: { en: "Tenant Account", es: "Cuenta del Bufete" },
        userAccount: { en: "User Account", es: "Cuenta de Usuario" },
        about: { en: "About", es: "Acerca de" },
      },
      windowTitle: {
        en: "DocketLinks Browser — Settings [Export Rules]",
        es: "DocketLinks Browser — Configuración [Reglas de Exportación]",
      },
      pageHeader: {
        title: {
          en: "Export Calculation & Transform Rules",
          es: "Reglas de Cálculo y Transformación de Exportación",
        },
        subtitle: {
          en: "Configure custom headers, fee calculations, and conditional transformations applied when exporting claimed leads to CSV, Cloud Storage, or Direct Mail.",
          es: "Configure encabezados personalizados, cálculos de tarifas y transformaciones condicionales al exportar prospectos a CSV, nube o correo directo.",
        },
        addRuleButton: { en: "+ Add Export Rule", es: "+ Agregar Regla" },
        totalRules: { en: "Total Rules", es: "Reglas Totales" },
        configuredHeader: { en: "Configured Export Rules", es: "Reglas de Exportación Configuradas" },
        configuredSubtext: {
          en: "Rules are evaluated in top-to-bottom priority order. The first matching rule produces the export value.",
          es: "Las reglas se evalúan en orden de arriba a abajo. La primera regla coincidente produce el valor exportado.",
        },
      },
      modal: {
        title: { en: "Edit Export Rule", es: "Editar Regla de Exportación" },
        subtitle: {
          en: "Define conditional calculations and transformations applied to exported leads.",
          es: "Defina cálculos condicionales y transformaciones aplicadas a prospectos exportados.",
        },
        ruleActive: { en: "Rule Active", es: "Regla Activa" },
        ruleNameLabel: { en: "RULE NAME *", es: "NOMBRE DE REGLA *" },
        targetColumnLabel: { en: "TARGET COLUMN HEADER *", es: "ENCABEZADO DE COLUMNA DESTINO *" },
        targetColumnSubtext: { en: "appears as csv column header", es: "aparece como encabezado de columna csv" },
        descriptionLabel: { en: "DESCRIPTION (OPTIONAL)", es: "DESCRIPCIÓN (OPCIONAL)" },
        step1Title: { en: "1  When Lead Matches Condition", es: "1  Cuando el Caso Cumple la Condición" },
        conditionModeLabel: { en: "Condition Mode:", es: "Modo de Condición:" },
        matchAll: { en: "Match ALL Conditions (AND)", es: "Cumplir TODAS las Condiciones (AND)" },
        matchAny: { en: "Match ANY Condition (OR)", es: "Cumplir CUALQUIER Condición (OR)" },
        ifLabel: { en: "IF", es: "SI" },
        andLabel: { en: "AND", es: "Y" },
        exactCaseBadge: { en: "AA (Exact Case)", es: "AA (Caso Exacto)" },
        addCondition: { en: "+ Add Condition Clause", es: "+ Agregar Cláusula" },
        step2Title: { en: "2  Calculate or Produce Value", es: "2  Calcular o Producir Valor" },
        tabs: {
          math: { en: "Math Calculation", es: "Cálculo Matemático" },
          fixed: { en: "Set Fixed Value", es: "Establecer Valor Fijo" },
          copy: { en: "Copy Field", es: "Copiar Campo" },
          template: { en: "Template String", es: "Cadena de Plantilla" },
        },
        sourceFieldLabel: { en: "Source Number Field", es: "Campo Numérico de Origen" },
        operationLabel: { en: "Operation", es: "Operación" },
        operandLabel: { en: "Operand (e.g., 0.2 for 20%)", es: "Operando (ej., 0.2 para 20%)" },
        minClampLabel: { en: "Min Clamp (Floor)", es: "Límite Mínimo (Piso)" },
        maxClampLabel: { en: "Max Clamp (Cap)", es: "Tope Máximo (Techo)" },
        optionalBadge: { en: "Optional", es: "Opcional" },
        outputFormatLabel: { en: "Output Format", es: "Formato de Salida" },
        decimalPlacesLabel: { en: "Decimal Places", es: "Decimales" },
        roundingModeLabel: { en: "Nearest Unit Rounding Mode", es: "Modo de Redondeo" },
        roundingTargetLabel: { en: "Nearest Unit Target", es: "Objetivo de Redondeo" },
        rawCentsToggle: {
          en: "Input field is stored in raw cents / pennies (automatically divides by 100 before calculation)",
          es: "El campo de entrada está en centavos crudos (divide entre 100 antes del cálculo automáticamente)",
        },
        step3Title: {
          en: "3  Otherwise (Fallback when conditions do NOT match)",
          es: "3  En Caso Contrario (Reserva cuando NO coinciden las condiciones)",
        },
        fallbackOptions: {
          leaveBlank: { en: "Leave Blank / Empty Cell", es: "Dejar en Blanco / Celda Vacía" },
          setZero: { en: "Set to $0.00 / Zero", es: "Establecer en $0.00 / Cero" },
        },
        liveTester: {
          title: { en: "Live Rule Tester", es: "Probador de Reglas en Vivo" },
          loadPreset: { en: "Load Preset:", es: "Cargar Preajuste:" },
          sampleFieldsHeader: { en: "SAMPLE TEST LEAD FIELDS", es: "CAMPOS DE PRUEBA DEL CASO" },
          evaluationResultHeader: { en: "Evaluation Result:", es: "Resultado de Evaluación:" },
          matchedBadge: { en: "Matched Condition", es: "Condición Cumplida" },
          unmatchedBadge: { en: "Fallback Applied", es: "Reserva Aplicada" },
          targetColumnLabel: { en: "TARGET COLUMN:", es: "COLUMNA DESTINO:" },
          matchedNotice: {
            en: "Conditions matched successfully. Output calculated for column:",
            es: "Condiciones cumplidas con éxito. Salida calculada para columna:",
          },
          unmatchedNotice: {
            en: "Conditions did not match. Fallback applied: cell left blank.",
            es: "Las condiciones no coincidieron. Reserva aplicada: celda en blanco.",
          },
        },
        cancelButton: { en: "Cancel", es: "Cancelar" },
        updateRuleButton: { en: "Update Rule", es: "Actualizar Regla" },
      },
      presets: [
        {
          id: "civil-dauphin",
          label: { en: "Civil Claim ($5,000 in Dauphin)", es: "Demanda Civil ($5,000 en Dauphin)" },
          county: "Dauphin",
          caseType: "Civil Action",
          caseStatus: "Active",
          claimAmount: "5000.00",
          plaintiff: "Midland Credit Management",
          defendant: "John Doe",
        },
        {
          id: "lvnv-debt",
          label: { en: "LVNV Debt Collection", es: "Cobranza de Deuda LVNV" },
          county: "Allegheny",
          caseType: "Civil Action",
          caseStatus: "Active",
          claimAmount: "1850.00",
          plaintiff: "LVNV Funding LLC",
          defendant: "Jane Smith",
        },
        {
          id: "criminal-dui",
          label: { en: "Criminal Lead (DUI)", es: "Expediente Penal (DUI)" },
          county: "Bucks",
          caseType: "Criminal",
          caseStatus: "Active",
          claimAmount: "0.00",
          plaintiff: "Commonwealth of Pennsylvania",
          defendant: "Mark Wilson",
        },
      ],
      configuredRulesList: [
        {
          id: "rule-1",
          name: "Dauphin Civil Claim Fee (20% with min/max)",
          targetColumn: "Calculated_Fee",
          description: "Multiplies Claim Amount by 20% with min $400 and max $1,800 for Dauphin County Civil Actions",
          conditionSummary: "if: county is_one_of 'Dauphin, Westmoreland, Allegheny' AND case_type contains 'Civil'",
          isActive: true,
        },
      ],
    },
  },

  analytics: {
    badge: {
      en: "Data Intelligence: Know Your Market",
      es: "Inteligencia de Datos: Conozca Su Mercado",
    },
    title: {
      en: "Robust Analytics & Statewide Filing Intelligence",
      es: "Analíticas Robustas e Inteligencia de Radicaciones Estatal",
    },
    description: {
      en: "Monitor over 1 million annual Pennsylvania court filings with real-time dashboards. Interactive county heatmaps, filings-over-time trend lines, top counties and courts breakdowns, most common charges analysis, and top plaintiff tracking give your practice the data-driven edge to identify high-yield marketing regions before competitors.",
      es: "Monitoree más de 1 millón de radicaciones judiciales anuales de Pensilvania con paneles en tiempo real. Mapas de calor por condado, tendencias de radicaciones, desglose de condados y tribunales principales, análisis de cargos más comunes y seguimiento de demandantes principales le dan a su firma la ventaja basada en datos.",
    },
    highlights: [
      {
        id: "heatmap",
        title: { en: "Interactive PA County Heatmap", es: "Mapa de Calor Interactivo de Condados" },
        description: {
          en: "Visualize filing density across all 67 Pennsylvania counties with color-coded intensity mapping. Filter by case type to reveal geographic hotspots.",
          es: "Visualice la densidad de radicaciones en los 67 condados de PA con mapeo de intensidad por color. Filtre por tipo de caso para revelar zonas activas.",
        },
      },
      {
        id: "trends",
        title: { en: "Filings Over Time Trends", es: "Tendencias de Radicaciones en el Tiempo" },
        description: {
          en: "Daily, weekly, and monthly trend lines broken down by case type. Spot seasonal patterns and identify when to ramp up your direct mail campaigns.",
          es: "Líneas de tendencia diarias, semanales y mensuales por tipo de caso. Detecte patrones estacionales y determine cuándo intensificar sus campañas.",
        },
      },
      {
        id: "top-courts",
        title: { en: "Top Courts & Plaintiff Tracking", es: "Tribunales y Demandantes Principales" },
        description: {
          en: "Ranked breakdowns of the busiest MDJ courts, most common charges, and top institutional plaintiffs (Capital One, Barclays, Synchrony, LVNV).",
          es: "Rankings de los tribunales MDJ más activos, cargos más comunes y demandantes institucionales principales (Capital One, Barclays, Synchrony, LVNV).",
        },
      },
      {
        id: "kpis",
        title: { en: "Real-Time KPI Summary Cards", es: "Tarjetas KPI en Tiempo Real" },
        description: {
          en: "At-a-glance stats: 28,300 filed this week, 87,483 this month, 1,031,126 year-to-date, plus average daily breakdowns for Criminal (346), Traffic (3,072), and Civil (398).",
          es: "Estadísticas instantáneas: 28,300 esta semana, 87,483 este mes, 1,031,126 en el año, más promedios diarios para Penal (346), Tránsito (3,072) y Civil (398).",
        },
      },
    ],
    ui: {
      windowTitle: {
        en: "DocketLinks Browser — [Analytics]",
        es: "DocketLinks Browser — [Analíticas]",
      },
      pageTitle: { en: "Analytics", es: "Analíticas" },
      pageSubtitle: {
        en: "Analyze case filings, trends, and statistics across your data",
        es: "Analice radicaciones, tendencias y estadísticas de su data",
      },
      lastUpdated: { en: "Last updated Sep 19, 1:24 PM", es: "Última act. Sep 19, 1:24 PM" },
      refreshData: { en: "Refresh Data", es: "Actualizar Datos" },
      resetFilters: { en: "Reset Filters", es: "Restablecer Filtros" },
      heatmapTitle: { en: "Pennsylvania Filing Heatmap", es: "Mapa de Calor de Radicaciones de Pennsylvania" },
      allCaseTypes: { en: "All Case Types", es: "Todos los Tipos" },
      heatmapLow: { en: "Low", es: "Bajo" },
      heatmapMore: { en: "More", es: "Alto" },
      filingsOverTime: { en: "Filings Over Time", es: "Radicaciones en el Tiempo" },
      daily: { en: "Daily", es: "Diario" },
      weekly: { en: "Weekly", es: "Semanal" },
      monthly: { en: "Monthly", es: "Mensual" },
      filingsByCaseType: { en: "Filings by Case Type", es: "Radicaciones por Tipo" },
      topCounties: { en: "Top 10 Counties", es: "Top 10 Condados" },
      topPlaintiffs: { en: "Top Plaintiffs", es: "Demandantes Principales" },
      mostCommonCharges: { en: "Most Common Charges", es: "Cargos Más Comunes" },
      caseTypesFilter: { en: "Case Types", es: "Tipos de Caso" },
      kpis: [
        { label: { en: "Filed This Week", es: "Radicados Esta Semana" }, value: "28,300", sub: { en: "Past 7 days", es: "Últimos 7 días" } },
        { label: { en: "Filed This Month", es: "Radicados Este Mes" }, value: "87,483", sub: { en: "Month to date", es: "Mes a la fecha" } },
        { label: { en: "Filed This Year", es: "Radicados Este Año" }, value: "1,031,126", sub: { en: "Year to date", es: "Año a la fecha" } },
        { label: { en: "Avg Daily Criminal", es: "Promedio Diario Penal" }, value: "346", sub: { en: "Past 30 days", es: "Últimos 30 días" } },
        { label: { en: "Avg Daily Traffic", es: "Promedio Diario Tránsito" }, value: "3,072", sub: { en: "Past 30 days", es: "Últimos 30 días" } },
        { label: { en: "Avg Daily Civil", es: "Promedio Diario Civil" }, value: "398", sub: { en: "Past 30 days", es: "Últimos 30 días" } },
      ],
      caseTypeNames: {
        traffic: { en: "Traffic", es: "Tránsito" },
        civil: { en: "Civil", es: "Civil" },
        nonTraffic: { en: "Non-Traffic", es: "No Tránsito" },
        criminal: { en: "Criminal", es: "Penal" },
        landlordTenant: { en: "Landlord/Tenant", es: "Inquilino" },
      },
    },
  },

  cloudStorage: {
    badge: {
      en: "Secure Cloud Infrastructure",
      es: "Infraestructura Segura en la Nube",
    },
    title: {
      en: "Integrated Cloud Storage & File Management",
      es: "Almacenamiento en la Nube y Gestión de Archivos Integrado",
    },
    description: {
      en: "Every DocketLinks subscription includes dedicated cloud storage for your firm. Automatically sync exported leads, generated letters, and CASS-certified address files to organized cloud folders. Access exports from any device, share with team members, and maintain a complete audit trail of all marketing campaign files.",
      es: "Cada suscripción de DocketLinks incluye almacenamiento dedicado en la nube para su bufete. Sincronice automáticamente exportaciones, cartas generadas y archivos de direcciones certificados CASS. Acceda desde cualquier dispositivo, comparta con el equipo y mantenga un historial completo de archivos de campaña.",
    },
    highlights: [
      {
        id: "sync",
        title: { en: "Automatic Export Sync", es: "Sincronización Automática de Exportaciones" },
        description: {
          en: "CSV exports, letter templates, and CASS-validated address files sync directly to your cloud storage with zero manual upload steps.",
          es: "Exportaciones CSV, plantillas de cartas y archivos CASS se sincronizan directamente a su almacenamiento en la nube sin pasos manuales.",
        },
      },
      {
        id: "organization",
        title: { en: "Organized File Structure", es: "Estructura Organizada de Archivos" },
        description: {
          en: "Pre-configured folders for documents, exports, uploads, and user files. Create custom folders for campaign-specific organization.",
          es: "Carpetas preconfiguradas para documentos, exportaciones, cargas y archivos de usuario. Cree carpetas personalizadas para campañas.",
        },
      },
      {
        id: "quota",
        title: { en: "Generous Storage Quotas", es: "Cuotas Generosas de Almacenamiento" },
        description: {
          en: "Up to 5 GB of included cloud storage with real-time usage tracking. Storage dashboard shows exactly how much space remains.",
          es: "Hasta 5 GB de almacenamiento incluido con seguimiento de uso en tiempo real. El panel muestra exactamente cuánto espacio queda.",
        },
      },
      {
        id: "access",
        title: { en: "Cross-Device Access", es: "Acceso Multi-Dispositivo" },
        description: {
          en: "Access your exported files from any workstation in your office. All team members on the same tenant see the same synced file library.",
          es: "Acceda a sus archivos exportados desde cualquier estación de trabajo. Todos los miembros del equipo ven la misma biblioteca sincronizada.",
        },
      },
    ],
  },

  aiLetterGenerator: {
    badge: {
      en: "AI-Powered Marketing: Mail-Merge Ready",
      es: "Marketing con IA: Listo para Combinación de Correspondencia",
    },
    title: {
      en: "AI Letter Generator with Microsoft Word Mail-Merge Placeholders",
      es: "Generador de Cartas con IA y Marcadores para Combinación de Correspondencia de Word",
    },
    description: {
      en: "Generate professionally crafted solicitation letters for DUI defense, debt collection response, landlord/tenant disputes, and more—instantly. The AI produces polished legal marketing copy with embedded Microsoft Word mail-merge fields ({{first_name}}, {{county}}, {{charge_code}}) so you can drop the template directly into Word, connect your enriched CSV, and print personalized letters at scale.",
      es: "Genere cartas de captación profesionales para defensa de DUI, respuesta a cobranzas, disputas de arrendamiento y más—al instante. La IA produce textos de mercadeo legal pulidos con campos de combinación de correspondencia de Word ({{nombre}}, {{condado}}, {{cargo}}) para que pueda insertar la plantilla en Word, conectar su CSV enriquecido e imprimir cartas personalizadas a escala.",
    },
    highlights: [
      {
        id: "letter-types",
        title: { en: "Specialized Letter Types", es: "Tipos de Carta Especializados" },
        description: {
          en: "Pre-configured templates for DUI Defense, Traffic Violations, Civil Debt Response, and Custom letters. Each tuned for the specific legal context.",
          es: "Plantillas preconfiguradas para Defensa de DUI, Infracciones de Tránsito, Respuesta a Deudas Civiles y Cartas Personalizadas, cada una adaptada al contexto legal.",
        },
      },
      {
        id: "mail-merge",
        title: { en: "Word Mail-Merge Fields", es: "Campos de Combinación de Correspondencia" },
        description: {
          en: "All generated letters include {{placeholder}} tokens for first_name, last_name, street_address, county, filing_date, charge_code, judge, court, and more.",
          es: "Todas las cartas incluyen tokens {{marcador}} para nombre, apellido, dirección, condado, fecha_radicación, código_cargo, juez, tribunal y más.",
        },
      },
      {
        id: "customization",
        title: { en: "Custom AI Prompts", es: "Instrucciones Personalizadas de IA" },
        description: {
          en: "Toggle on custom prompt mode to fine-tune tone, add firm-specific language, emphasize practice areas, or adjust the call-to-action for your target audience.",
          es: "Active el modo de instrucciones personalizadas para ajustar el tono, agregar lenguaje específico de su firma o modificar el llamado a la acción.",
        },
      },
      {
        id: "history",
        title: { en: "Generation History & Quota", es: "Historial de Generaciones y Cuota" },
        description: {
          en: "Track all generated letters with timestamps and status. Included AI generation quota (10,000 generations) with real-time usage counter.",
          es: "Rastree todas las cartas generadas con fechas y estado. Cuota incluida de generación IA (10,000 generaciones) con contador de uso en tiempo real.",
        },
      },
    ],
    ui: {
      windowTitle: {
        en: "DocketLinks Browser — [AI Letter Generator]",
        es: "DocketLinks Browser — [Generador de Cartas IA]",
      },
      pageHeader: {
        title: { en: "AI Letter Generator", es: "Generador de Cartas con IA" },
        subtitle: {
          en: "Generate mail merge templates for Microsoft Word using AI",
          es: "Genere plantillas de combinación de correspondencia para Microsoft Word con IA",
        },
      },
      quotaBadge: {
        en: "10,000 / 10,000 generations",
        es: "10,000 / 10,000 generaciones",
      },
      generatePanel: {
        title: { en: "Generate Letter", es: "Generar Carta" },
        letterTypeLabel: { en: "Letter Type", es: "Tipo de Carta" },
        customPromptLabel: { en: "Customize Prompt", es: "Personalizar Instrucciones" },
        customPromptSubtext: {
          en: "Edit the default prompt to customize the letter",
          es: "Edite la instrucción predeterminada para personalizar la carta",
        },
        generateButton: { en: "Generate Letter", es: "Generar Carta" },
        placeholdersTitle: { en: "Available Placeholders", es: "Marcadores Disponibles" },
        placeholdersSubtext: {
          en: "These merge fields will be replaced with lead data in Word",
          es: "Estos campos se reemplazarán con datos del caso en Word",
        },
      },
      previewPanel: {
        title: { en: "Generated Letter", es: "Carta Generada" },
        downloadButton: { en: "Download", es: "Descargar" },
        copyButton: { en: "Copy", es: "Copiar" },
        copyNotice: {
          en: "Copy this content and paste it into Microsoft Word. Use Mail Merge to replace the placeholders with your lead data.",
          es: "Copie este contenido y péguelo en Microsoft Word. Use Combinación de Correspondencia para reemplazar los marcadores con sus datos.",
        },
      },
      recentPanel: {
        title: { en: "Recent Generations", es: "Generaciones Recientes" },
        completed: { en: "Completed", es: "Completado" },
      },
      letterTypes: [
        { id: "dui", label: { en: "DUI Defense", es: "Defensa de DUI" }, description: { en: "Letter template for individuals charged with DUI", es: "Plantilla para personas acusadas de DUI" } },
        { id: "traffic", label: { en: "Traffic Letter", es: "Carta de Tránsito" }, description: { en: "Letter template for traffic violations", es: "Plantilla para infracciones de tránsito" } },
        { id: "civil", label: { en: "Civil Defense", es: "Defensa Civil" }, description: { en: "Letter template for civil action defendants", es: "Plantilla para demandados en acciones civiles" } },
        { id: "custom", label: { en: "Custom Letter", es: "Carta Personalizada" }, description: { en: "Fully customizable letter template", es: "Plantilla de carta completamente personalizable" } },
      ],
      placeholders: [
        "{{first_name}}", "{{last_name}}", "{{filing_date}}", "{{county}}", "{{judge}}",
        "{{court}}", "{{charge_code}}", "{{docket_number}}", "{{next_hearing_date}}", "{{street_address}}",
      ],
      recentGenerations: [
        { id: "r1", name: "Custom Letter", date: "4/28/2026, 3:11:31 PM" },
        { id: "r2", name: "DUI Letter", date: "2/12/26, 6:32:50 PM" },
        { id: "r3", name: "Traffic Letter", date: "1/19/2026, 4:28:55 AM" },
        { id: "r4", name: "DUI Letter", date: "1/16/2026, 4:25:24 AM" },
      ],
      sampleLetterContent: [
        "**[Law Firm Letterhead]**",
        "[Law Firm Name]",
        "[Street Address]",
        "[City, State ZIP]",
        "Phone: (XXX) XXX-XXXX Fax: (XXX) XXX-XXXX",
        "email: info@[lawfirm].com",
        "",
        "{{filing_date}}",
        "",
        "{{first_name}} {{last_name}}",
        "[Street Address]",
        "[City, State ZIP]",
        "",
        "Dear {{first_name}} {{last_name}},",
        "",
        "We understand that receiving notice of a **{{charge_code}}** DUI charge can be stressful and confusing. Our team is dedicated to providing the support and skilled representation you deserve during this challenging time.",
        "",
        "According to the records we have received, you were arrested by **{{arresting_agency}}** in **{{township}}, {{county}} County** on **{{filing_date}}**. Your case is currently scheduled before **Judge {{judge}}** in **{{court}}**.",
        "",
        "**How We Can Help**",
      ],
    },
  },

  upcomingFeatures: {
    eyebrow: {
      en: "COMPLETE DESKTOP ECOSYSTEM",
      es: "ECOSISTEMA COMPLETO DE ESCRITORIO",
    },
    title: {
      en: "Built for High-Yield Law Practice Marketing",
      es: "Diseñado para el Mercadeo Jurídico de Alto Rendimiento",
    },
    subtitle: {
      en: "Lead Explorer is only the beginning. Discover the other built-in capabilities that power legal direct-mail and outreach campaigns.",
      es: "El Explorador de Prospectos es solo el comienzo. Descubra las demás herramientas integradas que potencian sus campañas de captación.",
    },
    cards: [
      {
        id: "enrichment",
        badge: { en: "Step 2: Enrichment Engine", es: "Paso 2: Motor de Enriquecimiento" },
        title: { en: "Claimed Leads & On-Demand Enrichment", es: "Casos Reclamados y Enriquecimiento Bajo Demanda" },
        description: {
          en: "Raw court records never include contact information. After claiming leads in the Explorer, run real-time public record queries to find verified defendant mailing addresses, phone numbers, and emails.",
          es: "Los expedientes judiciales crudos nunca incluyen datos de contacto. Tras reclamar casos en el Explorador, ejecute búsquedas en registros públicos para encontrar direcciones postales, teléfonos y correos verificados.",
        },
        icon: "search",
      },
      {
        id: "cass",
        badge: { en: "Step 3: Postal Optimization", es: "Paso 3: Optimización Postal" },
        title: { en: "USPS CASS Presort & Barcoding", es: "Preclasificación CASS y Código de Barras USPS" },
        description: {
          en: "Automatically validate recipient addresses, append ZIP+4 codes, and sort mailpieces into postal tray order—qualifying your firm for 30-50% commercial automation postage discounts.",
          es: "Valide automáticamente direcciones, agregue códigos ZIP+4 y clasifique cartas por bandejas postales, calificando a su firma para descuentos comerciales del 30-50% en franqueo.",
        },
        icon: "mail",
      },
      {
        id: "collaboration",
        badge: { en: "Team Management", es: "Gestión de Equipos" },
        title: { en: "Team Collision Locks & Unlimited Seats", es: "Bloqueos de Colisión y Asientos Ilimitados" },
        description: {
          en: "Equip your entire office without per-seat licenses. Collision locks prevent two attorneys or marketing staff from claiming or mailing the same defendant twice.",
          es: "Equipe a toda su oficina sin licencias por usuario. Los bloqueos de colisión impiden que dos abogados o asistentes reclamen o envíen correspondencia al mismo demandado.",
        },
        icon: "users",
      },
      {
        id: "desktop-native",
        badge: { en: "Architecture", es: "Arquitectura" },
        title: { en: "Rust & Tauri v2 Desktop Engine", es: "Motor Nativo en Rust y Tauri v2" },
        description: {
          en: "Installed desktop architecture delivers instant search across millions of filings, ultra-low memory usage (<60MB), and complete insulation from browser freezes.",
          es: "La arquitectura de escritorio instalada ofrece búsquedas instantáneas en millones de radicaciones, consumo mínimo de memoria (<60MB) y cero bloqueos de navegador.",
        },
        icon: "cpu",
      },
    ],
  },
};

