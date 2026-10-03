import type { Locale } from "@/lib/site";

export type ServiceKey =
  | "personal"
  | "business"
  | "planning"
  | "bookkeeping"
  | "payroll"
  | "formation"
  | "irs";

export type Service = {
  key: ServiceKey;
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  summary: string;
  intro: string;
  image: string;
  alt: string;
  accent: string;
  benefits: string[];
  steps: { title: string; text: string }[];
  signatureTitle: string;
  signatureIntro: string;
  signatureItems: { label: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: ServiceKey[];
};

const en: Record<ServiceKey, Service> = {
  personal: {
    key: "personal", slug: "personal-tax-preparation", title: "Personal Tax Preparation", shortTitle: "Personal Taxes", eyebrow: "For individuals & families",
    summary: "A clear, organized approach to preparing your individual tax return.",
    intro: "Tax preparation starts with understanding your situation and organizing the right information. We help you move from scattered documents to a clear filing process, with straightforward communication at every step.",
    image: "/images/personal-tax.webp", alt: "An individual organizing personal tax documents in a bright home office", accent: "01",
    benefits: ["Organized document intake", "Review of your filing information", "Clear questions and next steps", "Support for common individual filing needs"],
    steps: [
      { title: "Gather", text: "Bring the tax documents and personal information relevant to your filing." },
      { title: "Organize", text: "We identify what is present, what may be missing and which questions need clarification." },
      { title: "Prepare", text: "Your filing information is prepared and reviewed within the agreed scope of service." },
      { title: "Move forward", text: "You receive clear next steps and practical reminders for the year ahead." },
    ],
    signatureTitle: "Your preparation checklist", signatureIntro: "The exact documents vary, but these categories are a useful place to begin.",
    signatureItems: [
      { label: "Income", text: "Wage, contract, investment and other applicable income records." },
      { label: "Deductions", text: "Relevant expense, contribution and qualifying payment records." },
      { label: "Life changes", text: "Information about major household, work or residency changes." },
      { label: "Prior filing", text: "A prior return can provide helpful context when available." },
    ],
    faqs: [
      { q: "What should I bring?", a: "Bring the tax documents you received, relevant income and expense records, identification information and a prior return if available. Your exact list depends on your situation." },
      { q: "Can you help if I am missing a document?", a: "A consultation can help identify what may be missing and the practical next step for obtaining it." },
      { q: "Do you also offer tax planning?", a: "Yes. Tax planning is available as a separate year-round service when proactive review would be helpful." },
    ], related: ["planning", "irs"],
  },
  business: {
    key: "business", slug: "business-tax-preparation", title: "Business Tax Preparation", shortTitle: "Business Taxes", eyebrow: "For business owners",
    summary: "Business tax preparation grounded in organized records and practical coordination.",
    intro: "A strong business tax process depends on clear records, timely questions and coordination with the way your business actually operates. We help organize the preparation process without making promises about outcomes.",
    image: "/images/business-tax.webp", alt: "A small-business owner reviewing organized records with an advisor", accent: "02",
    benefits: ["Review of available business records", "Coordination with bookkeeping information", "Preparation based on the agreed filing scope", "Clear follow-up questions and deadlines"],
    steps: [
      { title: "Scope", text: "We clarify the business, filing needs and available records." },
      { title: "Reconcile", text: "Records are organized and open questions are identified before preparation." },
      { title: "Prepare", text: "Business filing information is prepared within the confirmed scope." },
      { title: "Coordinate", text: "Next steps connect the filing process with bookkeeping and future planning." },
    ],
    signatureTitle: "From records to a prepared filing", signatureIntro: "Business tax work is easier to navigate when the supporting information is connected.",
    signatureItems: [
      { label: "Business activity", text: "Understand how the business operated during the filing period." },
      { label: "Financial records", text: "Review the available income, expense and bookkeeping information." },
      { label: "Open questions", text: "Resolve gaps or classification questions before preparation advances." },
      { label: "Year ahead", text: "Identify where bookkeeping or planning may support a smoother next cycle." },
    ],
    faqs: [
      { q: "Do my books need to be complete first?", a: "Accurate, current records support a smoother preparation process. We can discuss whether bookkeeping work is needed before tax preparation begins." },
      { q: "Do you work with new businesses?", a: "Yes. A consultation can clarify the business stage, records available and the appropriate scope of support." },
      { q: "Can tax preparation coordinate with bookkeeping?", a: "Yes. Connecting these services can reduce avoidable gaps and create a more organized workflow." },
    ], related: ["bookkeeping", "planning", "payroll"],
  },
  planning: {
    key: "planning", slug: "tax-planning", title: "Tax Planning", shortTitle: "Tax Planning", eyebrow: "Year-round perspective",
    summary: "Proactive conversations that connect tax considerations with decisions throughout the year.",
    intro: "Tax planning is not a guarantee of savings. It is a structured way to review changing circumstances, estimated payments and business decisions before the filing deadline is close.",
    image: "/images/tax-planning.webp", alt: "A business owner and advisor discussing a year-round tax planning calendar", accent: "03",
    benefits: ["Periodic review of relevant changes", "Estimated-payment conversations", "Planning around business decisions", "A clearer view of upcoming milestones"],
    steps: [
      { title: "Baseline", text: "Begin with current information and the decisions already on the horizon." },
      { title: "Review", text: "Consider relevant income, payment and business changes during the year." },
      { title: "Discuss", text: "Explore practical options and questions without promising a specific result." },
      { title: "Revisit", text: "Update the plan as circumstances change." },
    ],
    signatureTitle: "A year-round planning rhythm", signatureIntro: "Planning is most useful when it follows the decisions and changes that occur throughout the year.",
    signatureItems: [
      { label: "Winter", text: "Review the prior year and establish a starting point." },
      { label: "Spring", text: "Connect filing insights with current-year decisions." },
      { label: "Summer", text: "Revisit business activity, payments and significant changes." },
      { label: "Fall", text: "Prepare for year-end actions and the next filing cycle." },
    ],
    faqs: [
      { q: "Is tax planning only for businesses?", a: "No. Individuals and business owners may both benefit when their circumstances warrant proactive review." },
      { q: "Does planning guarantee tax savings?", a: "No. Planning supports informed decisions, but no particular tax result or amount of savings can be guaranteed." },
      { q: "How often should a plan be reviewed?", a: "The right timing depends on the complexity and pace of change. We can determine an appropriate cadence during a consultation." },
    ], related: ["personal", "business", "bookkeeping"],
  },
  bookkeeping: {
    key: "bookkeeping", slug: "bookkeeping-accounting", title: "Bookkeeping & Accounting", shortTitle: "Bookkeeping", eyebrow: "Clearer business records",
    summary: "Organized financial records that help business owners understand what is happening in the business.",
    intro: "Consistent bookkeeping creates a usable financial record—not just a stack of transactions. Our approach emphasizes organization, reconciliation and reporting that can support tax preparation and business conversations.",
    image: "/images/bookkeeping.webp", alt: "A small-business owner reconciling receipts and financial records", accent: "04",
    benefits: ["Transaction organization", "Account reconciliation", "Consistent financial records", "Practical reporting for business clarity"],
    steps: [
      { title: "Collect", text: "Bring together the records and source information needed for the period." },
      { title: "Organize", text: "Transactions are categorized within the agreed bookkeeping scope." },
      { title: "Reconcile", text: "Records are compared and exceptions or questions are identified." },
      { title: "Report", text: "Receive organized information and clear follow-up items." },
    ],
    signatureTitle: "The monthly ledger", signatureIntro: "A repeatable monthly rhythm helps keep records useful instead of waiting for year-end.",
    signatureItems: [
      { label: "Week 1", text: "Collect statements, receipts and source records." },
      { label: "Week 2", text: "Organize activity and identify missing context." },
      { label: "Week 3", text: "Reconcile accounts and review exceptions." },
      { label: "Month-end", text: "Close the period with organized reporting and follow-up questions." },
    ],
    faqs: [
      { q: "Can you clean up prior bookkeeping?", a: "A consultation can determine the condition of the records and whether a cleanup project is appropriate before recurring service." },
      { q: "How often is bookkeeping completed?", a: "Cadence depends on the business and agreed scope. Recurring monthly support is a common approach." },
      { q: "Can bookkeeping support tax preparation?", a: "Organized records can make the preparation process more efficient and reduce unanswered questions." },
    ], related: ["business", "payroll", "planning"],
  },
  payroll: {
    key: "payroll", slug: "payroll-services", title: "Payroll Services", shortTitle: "Payroll", eyebrow: "Recurring operational support",
    summary: "A dependable payroll process built around organized information and recurring deadlines.",
    intro: "Payroll is a repeating operational responsibility. We help establish an organized process for employee payment information and related reporting support within the agreed service scope.",
    image: "/images/payroll.webp", alt: "A small-business manager reviewing a payroll calendar on a tablet", accent: "05",
    benefits: ["Organized payroll information", "Recurring processing support", "Employee payment workflow", "Reporting and deadline coordination"],
    steps: [
      { title: "Set up", text: "Confirm business and worker information needed for the payroll process." },
      { title: "Review", text: "Collect and check current-period payroll details." },
      { title: "Process", text: "Complete the recurring workflow within the agreed schedule." },
      { title: "Report", text: "Maintain organized records and identify follow-up items." },
    ],
    signatureTitle: "A dependable payroll cycle", signatureIntro: "Clear handoffs and recurring checkpoints keep payroll work predictable.",
    signatureItems: [
      { label: "Cutoff", text: "Current payroll information is collected by the agreed deadline." },
      { label: "Review", text: "Hours, changes and other inputs are checked for completeness." },
      { label: "Payday", text: "The payment process follows the established schedule." },
      { label: "Records", text: "Reports and follow-up items are kept organized for the next cycle." },
    ],
    faqs: [
      { q: "Is payroll available as a recurring service?", a: "Yes. Payroll is designed around a recurring schedule appropriate to the business and agreed scope." },
      { q: "Can payroll coordinate with bookkeeping?", a: "Yes. Coordinated records can help keep payroll activity reflected consistently in the books." },
      { q: "Can you help a new business establish a payroll process?", a: "A consultation can identify setup needs and whether payroll support is appropriate for the business." },
    ], related: ["bookkeeping", "formation", "business"],
  },
  formation: {
    key: "formation", slug: "business-formation", title: "Business Formation", shortTitle: "Business Formation", eyebrow: "A more organized beginning",
    summary: "Practical organizational support as you prepare to establish a new business.",
    intro: "Starting a business involves connected administrative, tax and recordkeeping decisions. We help organize the setup process and identify practical next steps. This service is not legal advice.",
    image: "/images/business-formation.webp", alt: "A new entrepreneur organizing folders in a newly opened workspace", accent: "06",
    benefits: ["Initial business setup organization", "Tax and recordkeeping considerations", "Coordination of practical next steps", "Connection to bookkeeping and payroll needs"],
    steps: [
      { title: "Clarify", text: "Discuss the planned business activity, owners and current stage." },
      { title: "Organize", text: "Map the administrative and tax-related setup items within our scope." },
      { title: "Coordinate", text: "Identify when legal or other professional guidance may be appropriate." },
      { title: "Launch", text: "Begin with a recordkeeping and operating structure that is easier to maintain." },
    ],
    signatureTitle: "Your launch sequence", signatureIntro: "Formation is more than a filing. A coordinated start creates a clearer path for ongoing records and obligations.",
    signatureItems: [
      { label: "Foundation", text: "Define the business activity and questions that need professional input." },
      { label: "Setup", text: "Organize tax and administrative steps within the agreed scope." },
      { label: "Systems", text: "Prepare bookkeeping, payroll and document routines as needed." },
      { label: "First cycle", text: "Establish recurring checkpoints for the months ahead." },
    ],
    faqs: [
      { q: "Is this legal advice?", a: "No. Business formation support on this website is not legal advice. We may recommend consulting an attorney for legal questions." },
      { q: "Can you help with bookkeeping after formation?", a: "Yes. Bookkeeping and payroll can be discussed as separate ongoing services." },
      { q: "When should I schedule a consultation?", a: "It is helpful to begin when you can describe the planned activity and key owners, even if every decision has not been made." },
    ], related: ["bookkeeping", "payroll", "business"],
  },
  irs: {
    key: "irs", slug: "irs-representation-tax-resolution", title: "IRS Representation & Tax Resolution", shortTitle: "IRS Support", eyebrow: "Calm, structured next steps",
    summary: "Organized support for IRS notices, correspondence and tax issues—without alarmist language or promised outcomes.",
    intro: "An IRS notice can feel urgent, but the first useful step is to understand what was received and what deadline applies. We help review the situation, organize correspondence and define the appropriate scope of support.",
    image: "/images/irs-support.webp", alt: "An advisor calmly helping a client review tax correspondence", accent: "07",
    benefits: ["Review of notices and correspondence", "Organization of relevant records", "Representation when included in the engagement", "Clear explanation of practical next steps"],
    steps: [
      { title: "Read", text: "Review the full notice, the issue described and any stated response date." },
      { title: "Gather", text: "Organize prior filings, correspondence and supporting records." },
      { title: "Assess", text: "Determine the issue and define the appropriate scope of assistance." },
      { title: "Respond", text: "Take the agreed next step without guaranteeing a particular outcome." },
    ],
    signatureTitle: "When a notice arrives", signatureIntro: "A measured response begins with the document itself—not assumptions about what it means.",
    signatureItems: [
      { label: "Keep everything", text: "Retain the complete notice, envelope and related correspondence." },
      { label: "Note the date", text: "Identify the stated response date without delaying review." },
      { label: "Avoid guessing", text: "Gather the relevant records before drawing conclusions." },
      { label: "Request review", text: "Use a consultation to clarify the issue and available next steps." },
    ],
    faqs: [
      { q: "Should I ignore an IRS notice if I think it is wrong?", a: "No. Keep the notice and have it reviewed promptly so the issue and response date can be understood." },
      { q: "Can you guarantee the issue will be resolved?", a: "No. Outcomes depend on the facts, records and agency process. No result can be guaranteed." },
      { q: "What should I bring to a consultation?", a: "Bring the complete notice, related correspondence, applicable prior returns and any records connected to the issue." },
    ], related: ["personal", "business", "bookkeeping"],
  },
};

const es: Record<ServiceKey, Service> = {
  personal: {
    ...en.personal, slug: "preparacion-de-impuestos-personales", title: "Preparación de Impuestos Personales", shortTitle: "Impuestos Personales", eyebrow: "Para personas y familias",
    summary: "Un proceso claro y organizado para preparar tu declaración de impuestos personal.",
    intro: "La preparación comienza por entender tu situación y organizar la información correcta. Te ayudamos a pasar de documentos dispersos a un proceso claro, con comunicación sencilla en cada etapa.",
    alt: "Una persona organizando documentos fiscales en una oficina en casa",
    benefits: ["Recepción organizada de documentos", "Revisión de la información para declarar", "Preguntas y próximos pasos claros", "Apoyo para necesidades fiscales personales comunes"],
    steps: [
      { title: "Reúne", text: "Trae los documentos fiscales y la información personal relacionada con tu declaración." },
      { title: "Organiza", text: "Identificamos qué está completo, qué podría faltar y qué preguntas debemos aclarar." },
      { title: "Prepara", text: "La información se prepara y revisa de acuerdo con el alcance acordado." },
      { title: "Avanza", text: "Recibes próximos pasos claros y recordatorios prácticos para el año." },
    ],
    signatureTitle: "Tu lista de preparación", signatureIntro: "Los documentos exactos cambian según cada caso, pero estas categorías ayudan a comenzar.",
    signatureItems: [
      { label: "Ingresos", text: "Registros de salarios, trabajo independiente, inversiones y otros ingresos aplicables." },
      { label: "Deducciones", text: "Comprobantes relevantes de gastos, contribuciones y pagos que correspondan." },
      { label: "Cambios personales", text: "Información sobre cambios importantes en el hogar, trabajo o residencia." },
      { label: "Declaración anterior", text: "Una declaración previa puede aportar contexto cuando está disponible." },
    ],
    faqs: [
      { q: "¿Qué documentos debo llevar?", a: "Trae los documentos fiscales recibidos, registros relevantes de ingresos y gastos, identificación y una declaración anterior si está disponible. La lista exacta depende de tu situación." },
      { q: "¿Pueden ayudarme si me falta un documento?", a: "Una consulta puede ayudar a identificar lo que falta y el siguiente paso práctico para obtenerlo." },
      { q: "¿También ofrecen planificación fiscal?", a: "Sí. La planificación fiscal es un servicio separado disponible durante el año cuando una revisión anticipada puede ser útil." },
    ],
  },
  business: {
    ...en.business, slug: "preparacion-de-impuestos-para-negocios", title: "Preparación de Impuestos para Negocios", shortTitle: "Impuestos para Negocios", eyebrow: "Para dueños de negocios",
    summary: "Preparación fiscal basada en registros organizados y una coordinación práctica.",
    intro: "Un buen proceso fiscal para negocios depende de registros claros, preguntas oportunas y coordinación con la operación real del negocio. Ayudamos a organizar la preparación sin prometer resultados específicos.",
    alt: "Un dueño de negocio revisando registros organizados con un asesor",
    benefits: ["Revisión de registros disponibles", "Coordinación con la información de bookkeeping", "Preparación según el alcance acordado", "Preguntas y fechas de seguimiento claras"],
    steps: [
      { title: "Alcance", text: "Aclaramos el tipo de negocio, las necesidades fiscales y los registros disponibles." },
      { title: "Conciliación", text: "Organizamos los registros e identificamos preguntas antes de preparar." },
      { title: "Preparación", text: "La información fiscal se prepara dentro del alcance confirmado." },
      { title: "Coordinación", text: "Conectamos los próximos pasos con bookkeeping y planificación futura." },
    ],
    signatureTitle: "De los registros a la declaración", signatureIntro: "La preparación es más fácil cuando la información que la respalda está conectada.",
    signatureItems: [
      { label: "Actividad", text: "Entender cómo operó el negocio durante el periodo fiscal." },
      { label: "Registros", text: "Revisar ingresos, gastos e información contable disponible." },
      { label: "Preguntas", text: "Resolver datos faltantes o dudas de clasificación antes de avanzar." },
      { label: "Próximo año", text: "Identificar dónde bookkeeping o planificación pueden mejorar el siguiente ciclo." },
    ],
    faqs: [
      { q: "¿Mis libros deben estar completos primero?", a: "Registros actuales y precisos facilitan la preparación. Podemos conversar si hace falta trabajo de bookkeeping antes de comenzar." },
      { q: "¿Trabajan con negocios nuevos?", a: "Sí. Una consulta permite entender la etapa del negocio, los registros disponibles y el apoyo adecuado." },
      { q: "¿Pueden coordinar impuestos y bookkeeping?", a: "Sí. Conectar estos servicios puede reducir información faltante y crear un proceso más organizado." },
    ],
  },
  planning: {
    ...en.planning, slug: "planificacion-fiscal", title: "Planificación Fiscal", shortTitle: "Planificación Fiscal", eyebrow: "Perspectiva durante todo el año",
    summary: "Conversaciones anticipadas que conectan los impuestos con las decisiones del año.",
    intro: "La planificación fiscal no garantiza ahorros. Es una manera estructurada de revisar cambios, pagos estimados y decisiones del negocio antes de que se acerque la fecha de declarar.",
    alt: "Una empresaria y un asesor conversando sobre un calendario de planificación fiscal",
    benefits: ["Revisión periódica de cambios relevantes", "Conversaciones sobre pagos estimados", "Planificación alrededor de decisiones del negocio", "Mayor claridad sobre fechas próximas"],
    steps: [
      { title: "Punto de partida", text: "Comenzamos con la información actual y las decisiones que se aproximan." },
      { title: "Revisión", text: "Consideramos cambios en ingresos, pagos y actividad del negocio." },
      { title: "Conversación", text: "Exploramos opciones prácticas sin prometer un resultado específico." },
      { title: "Seguimiento", text: "Actualizamos el plan cuando cambian las circunstancias." },
    ],
    signatureTitle: "Un ritmo de planificación anual", signatureIntro: "La planificación funciona mejor cuando acompaña las decisiones y cambios de todo el año.",
    signatureItems: [
      { label: "Invierno", text: "Revisar el año anterior y establecer el punto de partida." },
      { label: "Primavera", text: "Conectar lo aprendido al declarar con las decisiones del año actual." },
      { label: "Verano", text: "Revisar actividad, pagos y cambios importantes." },
      { label: "Otoño", text: "Preparar acciones de fin de año y el próximo ciclo fiscal." },
    ],
    faqs: [
      { q: "¿La planificación es solo para negocios?", a: "No. Tanto personas como dueños de negocios pueden beneficiarse cuando sus circunstancias requieren revisión anticipada." },
      { q: "¿Garantiza ahorros de impuestos?", a: "No. La planificación apoya decisiones informadas, pero no puede garantizar resultados ni cantidades de ahorro." },
      { q: "¿Con qué frecuencia debe revisarse?", a: "Depende de la complejidad y los cambios. En una consulta podemos definir una frecuencia apropiada." },
    ],
  },
  bookkeeping: {
    ...en.bookkeeping, slug: "contabilidad-bookkeeping", title: "Contabilidad y Bookkeeping", shortTitle: "Contabilidad y Bookkeeping", eyebrow: "Registros más claros",
    summary: "Registros financieros organizados para entender mejor lo que ocurre en el negocio.",
    intro: "El bookkeeping constante crea un registro financiero útil, no solo una lista de transacciones. Nuestro enfoque prioriza organización, conciliación y reportes que pueden apoyar los impuestos y las decisiones del negocio.",
    alt: "Una dueña de negocio conciliando recibos y registros financieros",
    benefits: ["Organización de transacciones", "Conciliación de cuentas", "Registros financieros consistentes", "Reportes prácticos para mayor claridad"],
    steps: [
      { title: "Recopilar", text: "Reunimos los registros y documentos fuente necesarios para el periodo." },
      { title: "Organizar", text: "Clasificamos transacciones dentro del alcance acordado." },
      { title: "Conciliar", text: "Comparamos registros e identificamos excepciones o preguntas." },
      { title: "Reportar", text: "Recibes información organizada y pendientes claros." },
    ],
    signatureTitle: "El ciclo mensual", signatureIntro: "Un ritmo mensual repetible mantiene los registros útiles y evita esperar hasta fin de año.",
    signatureItems: [
      { label: "Semana 1", text: "Reunir estados de cuenta, recibos y documentos fuente." },
      { label: "Semana 2", text: "Organizar la actividad e identificar información faltante." },
      { label: "Semana 3", text: "Conciliar cuentas y revisar excepciones." },
      { label: "Cierre", text: "Cerrar el periodo con reportes y preguntas de seguimiento." },
    ],
    faqs: [
      { q: "¿Pueden ordenar registros anteriores?", a: "Una consulta permite evaluar los registros y decidir si se necesita un proyecto de limpieza antes del servicio recurrente." },
      { q: "¿Con qué frecuencia se realiza?", a: "La frecuencia depende del negocio y del alcance. El apoyo mensual es una opción común." },
      { q: "¿El bookkeeping ayuda con los impuestos?", a: "Los registros organizados pueden hacer la preparación fiscal más eficiente y reducir preguntas pendientes." },
    ],
  },
  payroll: {
    ...en.payroll, slug: "servicios-de-nomina", title: "Servicios de Nómina", shortTitle: "Nómina", eyebrow: "Apoyo operativo recurrente",
    summary: "Un proceso de nómina confiable basado en información organizada y fechas recurrentes.",
    intro: "La nómina es una responsabilidad operativa constante. Ayudamos a establecer un proceso organizado para pagos a empleados y reportes relacionados dentro del alcance acordado.",
    alt: "Un dueño de negocio revisando un calendario de nómina en una tableta",
    benefits: ["Información de nómina organizada", "Apoyo en procesos recurrentes", "Flujo para pagos a empleados", "Coordinación de reportes y fechas"],
    steps: [
      { title: "Configurar", text: "Confirmamos la información del negocio y trabajadores necesaria para el proceso." },
      { title: "Revisar", text: "Recopilamos y verificamos los datos del periodo actual." },
      { title: "Procesar", text: "Completamos el flujo recurrente según el calendario acordado." },
      { title: "Registrar", text: "Mantenemos reportes organizados e identificamos pendientes." },
    ],
    signatureTitle: "Un ciclo de nómina confiable", signatureIntro: "Entregas claras y puntos de revisión recurrentes ayudan a mantener un proceso predecible.",
    signatureItems: [
      { label: "Fecha límite", text: "Se reúne la información actual antes de la fecha acordada." },
      { label: "Revisión", text: "Se verifican horas, cambios y otros datos." },
      { label: "Día de pago", text: "El proceso sigue el calendario establecido." },
      { label: "Registros", text: "Reportes y pendientes quedan organizados para el siguiente ciclo." },
    ],
    faqs: [
      { q: "¿La nómina es un servicio recurrente?", a: "Sí. Se organiza con un calendario apropiado para el negocio y el alcance acordado." },
      { q: "¿Puede coordinarse con bookkeeping?", a: "Sí. La coordinación ayuda a reflejar de forma consistente la actividad de nómina en los registros." },
      { q: "¿Ayudan a negocios nuevos?", a: "Una consulta puede identificar necesidades de configuración y si el servicio es apropiado." },
    ],
  },
  formation: {
    ...en.formation, slug: "formacion-de-negocios", title: "Formación de Negocios", shortTitle: "Formación de Negocios", eyebrow: "Un comienzo más organizado",
    summary: "Apoyo práctico para organizar los primeros pasos de un negocio nuevo.",
    intro: "Iniciar un negocio implica decisiones administrativas, fiscales y de registros. Ayudamos a organizar el proceso e identificar próximos pasos. Este servicio no constituye asesoría legal.",
    alt: "Una emprendedora organizando carpetas en un espacio de trabajo nuevo",
    benefits: ["Organización inicial del negocio", "Consideraciones fiscales y de registros", "Coordinación de próximos pasos", "Conexión con bookkeeping y nómina"],
    steps: [
      { title: "Aclarar", text: "Conversamos sobre la actividad, los propietarios y la etapa actual." },
      { title: "Organizar", text: "Trazamos los pasos administrativos y fiscales dentro de nuestro alcance." },
      { title: "Coordinar", text: "Identificamos cuándo puede ser apropiada la orientación legal u otra ayuda profesional." },
      { title: "Comenzar", text: "Iniciamos con una estructura de registros más fácil de mantener." },
    ],
    signatureTitle: "Tu secuencia de lanzamiento", signatureIntro: "La formación es más que un trámite. Un comienzo coordinado facilita las obligaciones futuras.",
    signatureItems: [
      { label: "Base", text: "Definir la actividad y las preguntas que requieren orientación profesional." },
      { label: "Configuración", text: "Organizar pasos fiscales y administrativos dentro del alcance." },
      { label: "Sistemas", text: "Preparar rutinas de bookkeeping, nómina y documentos según sea necesario." },
      { label: "Primer ciclo", text: "Establecer puntos de revisión para los siguientes meses." },
    ],
    faqs: [
      { q: "¿Esto es asesoría legal?", a: "No. El apoyo de formación presentado aquí no es asesoría legal. Podemos recomendar consultar a un abogado para preguntas legales." },
      { q: "¿Pueden ayudar con bookkeeping después?", a: "Sí. Bookkeeping y nómina pueden contratarse como servicios separados." },
      { q: "¿Cuándo debo agendar una consulta?", a: "Es útil comenzar cuando puedes describir la actividad planeada y los propietarios, aunque todavía no hayas tomado todas las decisiones." },
    ],
  },
  irs: {
    ...en.irs, slug: "representacion-ante-el-irs-y-resolucion-fiscal", title: "Representación ante el IRS y Resolución Fiscal", shortTitle: "Apoyo ante el IRS", eyebrow: "Próximos pasos claros y tranquilos",
    summary: "Apoyo organizado para avisos, correspondencia y problemas fiscales sin alarmismo ni resultados prometidos.",
    intro: "Un aviso del IRS puede sentirse urgente, pero el primer paso útil es entender qué recibiste y qué fecha corresponde. Ayudamos a revisar la situación, organizar la correspondencia y definir el alcance apropiado.",
    alt: "Una asesora ayudando con calma a un cliente a revisar correspondencia fiscal",
    benefits: ["Revisión de avisos y correspondencia", "Organización de registros relevantes", "Representación cuando se incluya en el acuerdo", "Explicación clara de próximos pasos"],
    steps: [
      { title: "Leer", text: "Revisamos el aviso completo, el asunto y la fecha indicada." },
      { title: "Reunir", text: "Organizamos declaraciones, correspondencia y documentos relacionados." },
      { title: "Evaluar", text: "Determinamos el asunto y el alcance apropiado de ayuda." },
      { title: "Responder", text: "Tomamos el siguiente paso acordado sin garantizar un resultado particular." },
    ],
    signatureTitle: "Cuando llega un aviso", signatureIntro: "Una respuesta medida comienza con el documento, no con suposiciones sobre lo que significa.",
    signatureItems: [
      { label: "Conserva todo", text: "Guarda el aviso completo, el sobre y la correspondencia relacionada." },
      { label: "Anota la fecha", text: "Identifica la fecha de respuesta sin retrasar la revisión." },
      { label: "No adivines", text: "Reúne los documentos relevantes antes de sacar conclusiones." },
      { label: "Solicita revisión", text: "Usa una consulta para aclarar el asunto y los próximos pasos." },
    ],
    faqs: [
      { q: "¿Debo ignorar un aviso si creo que está equivocado?", a: "No. Conserva el aviso y solicita una revisión para entender el asunto y la fecha de respuesta." },
      { q: "¿Pueden garantizar que se resolverá?", a: "No. El resultado depende de los hechos, registros y proceso de la agencia. No se puede garantizar." },
      { q: "¿Qué debo llevar a la consulta?", a: "Lleva el aviso completo, correspondencia relacionada, declaraciones aplicables y documentos conectados con el asunto." },
    ],
  },
};

export const servicesByLocale: Record<Locale, Record<ServiceKey, Service>> = { en, es };
export const serviceOrder: ServiceKey[] = ["personal", "business", "planning", "bookkeeping", "payroll", "formation", "irs"];

export function getServiceBySlug(locale: Locale, slug: string) {
  return Object.values(servicesByLocale[locale]).find((service) => service.slug === slug);
}

export function serviceHref(locale: Locale, service: Service) {
  return locale === "en" ? `/services/${service.slug}` : `/es/servicios/${service.slug}`;
}
