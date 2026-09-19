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
