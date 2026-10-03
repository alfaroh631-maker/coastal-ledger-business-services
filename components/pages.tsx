import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarIcon, FolderIcon, LedgerIcon, MailIcon, PhoneIcon, PinIcon, ShieldIcon } from "@/components/icons";
import { ButtonLink, CheckList, Eyebrow, FaqList, FinalCta, ImageFeature, InnerHero, SectionHead, ServiceCard, TextLink } from "@/components/ui";
import { serviceHref, serviceOrder, servicesByLocale, type ServiceKey } from "@/lib/services";
import { site, type Locale } from "@/lib/site";

const audienceIcons = ["01", "02", "03", "04", "05", "06"];

export function HomePage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const services = servicesByLocale[locale];
  const featured: ServiceKey[] = ["personal", "business", "planning", "bookkeeping"];
  const audiences = es ? [
    ["Personas y Familias", "Preparación y planificación organizadas alrededor de tu situación personal."],
    ["Dueños de Pequeños Negocios", "Impuestos, registros y apoyo operativo conectados con tu negocio."],
    ["Contratistas Independientes", "Ayuda para organizar ingresos, registros y próximos pasos fiscales."],
    ["Negocios Nuevos", "Un comienzo más claro para la configuración, bookkeeping y nómina."],
    ["Negocios en Crecimiento", "Sistemas recurrentes que pueden adaptarse a operaciones más activas."],
    ["Empresarios Bilingües", "Servicio profesional en inglés o español, sin depender de traducciones literales."],
  ] : [
    ["Individuals & Families", "Organized preparation and planning built around your personal situation."],
    ["Small Business Owners", "Tax, records and operational support connected to your business."],
    ["Independent Contractors", "Help organizing income, records and practical tax next steps."],
    ["New Businesses", "A clearer start for setup, bookkeeping and payroll."],
    ["Growing Businesses", "Recurring systems that can adapt to more active operations."],
    ["Bilingual Business Owners", "Professional service in English or Spanish without relying on literal translations."],
  ];
  const homeFaqs = es ? [
    { q: "¿Trabajan con personas y negocios?", a: "Sí. Coastal Ledger ofrece servicios para personas, familias, trabajadores independientes y pequeños negocios." },
    { q: "¿Ofrecen atención durante todo el año?", a: "Sí. La planificación fiscal, bookkeeping, nómina y otros servicios pueden continuar durante el año según el alcance acordado." },
    { q: "¿Puedo recibir el servicio en español?", a: "Sí. El website y la experiencia de servicio están disponibles en inglés y español." },
    { q: "¿Cuánto cuestan los servicios?", a: "El precio depende del servicio y de la complejidad del trabajo. Una consulta ayuda a determinar el alcance apropiado." },
  ] : [
    { q: "Do you work with individuals and businesses?", a: "Yes. Coastal Ledger offers services for individuals, families, independent contractors and small businesses." },
    { q: "Do you offer support throughout the year?", a: "Yes. Tax planning, bookkeeping, payroll and other services may continue throughout the year based on the agreed scope." },
    { q: "Are services available in Spanish?", a: "Yes. The website and service experience are available in English and Spanish." },
    { q: "How much do services cost?", a: "Pricing depends on the service and complexity of the work. A consultation can help determine the appropriate scope of service." },
  ];

  return <>
    <section className="home-hero">
      <div className="hero-image"><Image src="/images/hero.webp" alt={es ? "Una dueña de negocio revisando documentos con una asesora en una oficina luminosa" : "A small-business owner reviewing organized documents with an advisor in a bright office"} fill priority sizes="100vw"/></div>
      <div className="hero-overlay" aria-hidden="true"/>
      <div className="container hero-content">
        <div className="hero-copy">
          <Eyebrow>{es ? "Impuestos · Contabilidad · Servicios para Negocios" : "Tax · Accounting · Business Services"}</Eyebrow>
          <h1>{es ? <>Números claros.<br/><em>Decisiones seguras.</em></> : <>Clear numbers.<br/><em>Confident decisions.</em></>}</h1>
          <p>{es ? "Apoyo práctico en impuestos, bookkeeping y negocios para personas y pequeños negocios del área de Santa Barbara." : "Practical tax, bookkeeping and business support for individuals and small businesses in the Santa Barbara area."}</p>
          <div className="hero-actions"><ButtonLink href={es ? "/es/agendar" : "/book"}>{es ? "Agenda una Consulta" : "Book a Consultation"}</ButtonLink><ButtonLink href={es ? "/es/servicios" : "/services"} secondary>{es ? "Explora los Servicios" : "Explore Our Services"}</ButtonLink></div>
          {!es && <Link className="spanish-link" href="/es">Habla Español <ArrowRight/></Link>}
        </div>
      </div>
      <div className="hero-ledger" aria-hidden="true"><span>CL</span><i/><i/><i/></div>
    </section>

    <section className="trust-strip"><div className="container"><p>{es ? "Apoyo profesional, humano y bilingüe para organizar lo importante." : "Professional, human and bilingual support for organizing what matters."}</p><div><span>{es ? "Santa Barbara" : "Santa Barbara"}</span><i/><span>Goleta</span><i/><span>Montecito</span><i/><span>Carpinteria</span></div></div></section>

    <section className="section intro-section"><div className="container intro-grid"><Eyebrow>{es ? "Claridad antes que complejidad" : "Clarity before complexity"}</Eyebrow><div><h2>{es ? "Tus números deben ayudarte a entender el siguiente paso." : "Your numbers should help you understand the next step."}</h2><p>{es ? "Coastal Ledger organiza la preparación fiscal, los registros y el apoyo para negocios con un proceso claro y comunicación accesible. Sin promesas exageradas. Sin lenguaje innecesariamente complicado." : "Coastal Ledger organizes tax preparation, financial records and business support with a clear process and approachable communication. No exaggerated promises. No unnecessarily complicated language."}</p><TextLink href={es ? "/es/nosotros" : "/about"}>{es ? "Conoce nuestro enfoque" : "Learn about our approach"}</TextLink></div></div></section>

    <section className="section section-stone audiences-section"><div className="container"><SectionHead eyebrow={es ? "A quiénes ayudamos" : "Who we help"} title={es ? "Apoyo diseñado alrededor de tu realidad" : "Support shaped around your reality"} body={es ? "No necesitas conocer el nombre exacto de un servicio para comenzar." : "You do not need to know the exact name of a service to get started."}/><div className="audience-grid">{audiences.map((item, index) => <article key={item[0]}><span>{audienceIcons[index]}</span><h3>{item[0]}</h3><p>{item[1]}</p></article>)}</div><TextLink href={es ? "/es/a-quienes-ayudamos" : "/who-we-help"}>{es ? "Encuentra el apoyo indicado" : "Find the right support"}</TextLink></div></section>

    <section className="section services-preview"><div className="container"><div className="section-title-row"><SectionHead eyebrow={es ? "Servicios destacados" : "Featured services"} title={es ? "Organiza hoy. Planifica lo que sigue." : "Organize today. Plan for what comes next."}/><TextLink href={es ? "/es/servicios" : "/services"}>{es ? "Ver los siete servicios" : "View all seven services"}</TextLink></div><div className="service-grid four">{featured.map((key) => <ServiceCard key={key} service={services[key]} locale={locale}/>)}</div></div></section>

    <section className="section split-feature tax-feature"><div className="container"><div className="split-feature-copy"><Eyebrow>{es ? "Preparación de impuestos" : "Tax preparation"}</Eyebrow><h2>{es ? "Un proceso organizado para personas y negocios." : "An organized process for individuals and businesses."}</h2><p>{es ? "La preparación comienza antes de llenar formularios. Reunimos la información, identificamos preguntas y conectamos los registros con el alcance correcto." : "Preparation begins before forms are completed. We gather information, identify questions and connect the records with the right scope of work."}</p><div className="dual-links"><TextLink href={serviceHref(locale, services.personal)}>{services.personal.title}</TextLink><TextLink href={serviceHref(locale, services.business)}>{services.business.title}</TextLink></div></div><div className="tax-comparison"><article><span>01</span><h3>{services.personal.shortTitle}</h3><p>{services.personal.summary}</p></article><article><span>02</span><h3>{services.business.shortTitle}</h3><p>{services.business.summary}</p></article></div></div></section>

    <section className="section"><div className="container"><ImageFeature image="/images/bookkeeping.webp" alt={services.bookkeeping.alt} eyebrow={es ? "Bookkeeping y apoyo" : "Bookkeeping & support"} title={es ? "Registros que trabajan contigo durante todo el año." : "Records that work with you throughout the year."} body={es ? "Bookkeeping, nómina y planificación convierten las tareas recurrentes en un sistema más claro para tu negocio." : "Bookkeeping, payroll and planning turn recurring responsibilities into a clearer system for your business."} reverse><div className="feature-links"><TextLink href={serviceHref(locale, services.bookkeeping)}>{services.bookkeeping.title}</TextLink><TextLink href={serviceHref(locale, services.payroll)}>{services.payroll.title}</TextLink></div></ImageFeature></div></section>

    <section className="section why-section"><div className="container why-grid"><div><Eyebrow light>{es ? "Por qué Coastal Ledger" : "Why Coastal Ledger"}</Eyebrow><h2>{es ? "Profesional no tiene que sentirse distante." : "Professional does not have to feel distant."}</h2></div><div className="why-items"><article><b>01</b><h3>{es ? "Comunicación clara" : "Clear communication"}</h3><p>{es ? "Explicaciones directas y preguntas concretas." : "Direct explanations and focused questions."}</p></article><article><b>02</b><h3>{es ? "Proceso organizado" : "Organized process"}</h3><p>{es ? "Pasos definidos para saber qué sigue." : "Defined steps so you know what comes next."}</p></article><article><b>03</b><h3>{es ? "Acceso bilingüe" : "Bilingual access"}</h3><p>{es ? "Servicio natural en inglés o español." : "Natural service in English or Spanish."}</p></article></div></div></section>

    <section className="section process-home"><div className="container"><SectionHead eyebrow={es ? "Cómo trabajamos" : "How we work"} title={es ? "Tres pasos. Una dirección clara." : "Three steps. One clear direction."} align="center"/><div className="three-step"><article><span>1</span><CalendarIcon/><h3>{es ? "Agenda" : "Schedule"}</h3><p>{es ? "Elige una consulta para explicar lo que necesitas." : "Choose a consultation to explain what you need."}</p></article><article><span>2</span><FolderIcon/><h3>{es ? "Organiza" : "Organize"}</h3><p>{es ? "Reunimos la información y definimos el alcance." : "We gather information and define the scope."}</p></article><article><span>3</span><LedgerIcon/><h3>{es ? "Avanza" : "Move forward"}</h3><p>{es ? "Trabajamos con próximos pasos y comunicación claros." : "We work with clear next steps and communication."}</p></article></div></div></section>

    <section className="bilingual-feature"><div className="container bilingual-grid"><div><span className="language-large">EN <i>/</i> ES</span><Eyebrow light>{es ? "Servicio bilingüe" : "Bilingual service"}</Eyebrow><h2>{es ? "Habla de tu negocio en el idioma que prefieras." : "Talk about your business in the language you prefer."}</h2><p>{es ? "El contenido en español está escrito para ser profesional, natural y fácil de entender." : "Our Spanish experience is written to feel professional, natural and easy to understand—not like a literal translation."}</p><TextLink href={es ? "/" : "/es"}>{es ? "View the website in English" : "Ver el website en Español"}</TextLink></div><div className="bilingual-ledger" aria-hidden="true"><span><b>{es ? "Claridad" : "Clarity"}</b><i/></span><span><b>{es ? "Organización" : "Organization"}</b><i/></span><span><b>{es ? "Confianza" : "Confidence"}</b><i/></span></div></div></section>

    <section className="section resources-preview"><div className="container"><div className="section-title-row"><SectionHead eyebrow={es ? "Recursos prácticos" : "Practical resources"} title={es ? "Comienza con información organizada." : "Start with organized information."}/><TextLink href={es ? "/es/recursos" : "/resources"}>{es ? "Ver todos los recursos" : "View all resources"}</TextLink></div><div className="resource-grid">{(es ? [["Lista para Preparar Impuestos", "Documentos y categorías para comenzar."], ["Registros para Pequeños Negocios", "Hábitos para mantener información útil."], ["Antes de tu Consulta", "Preguntas e información que puedes preparar."]] : [["Tax Preparation Checklist", "Documents and categories to help you begin."], ["Small Business Recordkeeping", "Habits for maintaining useful information."], ["Before Your Consultation", "Questions and information you can prepare."]]).map((item, index) => <Link href={es ? "/es/recursos" : "/resources"} key={item[0]}><span>0{index + 1}</span><div><h3>{item[0]}</h3><p>{item[1]}</p></div><ArrowRight/></Link>)}</div></div></section>

    <section className="section reviews-preview"><div className="container"><div className="sample-label">{es ? "Testimonios de ejemplo utilizados únicamente para demostración." : "Sample testimonials for demonstration purposes."}</div><div className="reviews-home"><SectionHead eyebrow={es ? "Experiencia del cliente" : "Client experience"} title={es ? "Cómo debe sentirse un proceso claro" : "What a clear process should feel like"}/><blockquote><p>“{es ? "El proceso se sintió organizado desde la primera conversación. Siempre supimos qué información hacía falta y cuál era el siguiente paso." : "The process felt organized from the first conversation. We always knew what information was needed and what the next step would be."}”</p><footer>{es ? "Ejemplo — Dueño de pequeño negocio" : "Sample — Small-business owner"}</footer></blockquote></div><TextLink href={es ? "/es/resenas" : "/reviews"}>{es ? "Ver testimonios de ejemplo" : "View sample testimonials"}</TextLink></div></section>

    <section className="section faq-section"><div className="container faq-grid"><SectionHead eyebrow={es ? "Preguntas frecuentes" : "Frequently asked questions"} title={es ? "Respuestas directas para comenzar" : "Straight answers to help you begin"} body={es ? "Si tu pregunta depende de una situación específica, una consulta puede ayudar a definir el siguiente paso." : "If your question depends on a specific situation, a consultation can help define the next step."}/><FaqList items={homeFaqs}/></div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function ServicesPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const s = servicesByLocale[locale];
  const groups: { title: string; text: string; keys: ServiceKey[] }[] = es ? [
    { title: "Preparar y declarar", text: "Organiza la información necesaria para declaraciones personales o de negocio.", keys: ["personal", "business"] },
    { title: "Planificar y mantener", text: "Crea procesos más claros durante todo el año.", keys: ["planning", "bookkeeping", "payroll"] },
    { title: "Comenzar y resolver", text: "Recibe apoyo al iniciar un negocio o responder a un asunto fiscal.", keys: ["formation", "irs"] },
  ] : [
    { title: "Prepare & file", text: "Organize the information needed for individual or business filings.", keys: ["personal", "business"] },
    { title: "Plan & maintain", text: "Build clearer processes throughout the year.", keys: ["planning", "bookkeeping", "payroll"] },
    { title: "Start & resolve", text: "Get support when starting a business or responding to a tax matter.", keys: ["formation", "irs"] },
  ];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Siete servicios enfocados" : "Seven focused services"} title={es ? "Apoyo para cada etapa de tu vida financiera o negocio." : "Support for each stage of your financial life or business."} intro={es ? "Explora por necesidad, no por términos complicados. Cada servicio tiene su propio proceso, preguntas y próximos pasos." : "Explore by need, not by complicated terminology. Every service has its own process, questions and practical next steps."} breadcrumbs={[{ label: es ? "Servicios" : "Services" }]}/>
    {groups.map((group, index) => <section className={`section service-group ${index % 2 ? "section-stone" : ""}`} key={group.title}><div className="container group-grid"><div className="group-intro"><span>0{index + 1}</span><h2>{group.title}</h2><p>{group.text}</p></div><div className={`service-grid ${group.keys.length === 3 ? "three" : "two"}`}>{group.keys.map((key) => <ServiceCard service={s[key]} locale={locale} key={key}/>)}</div></div></section>)}
    <section className="section service-matcher"><div className="container"><div><Eyebrow>{es ? "¿No sabes cuál elegir?" : "Not sure where to begin?"}</Eyebrow><h2>{es ? "Cuéntanos qué está pasando." : "Tell us what is happening."}</h2><p>{es ? "No necesitas diagnosticar tu propia necesidad. Una consulta puede ayudar a identificar el servicio y el alcance apropiados." : "You do not need to diagnose your own service need. A consultation can help identify the appropriate service and scope."}</p></div><ButtonLink href={es ? "/es/agendar" : "/book"}>{es ? "Agenda una Consulta" : "Book a Consultation"}</ButtonLink></div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function WhoWeHelpPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const s = servicesByLocale[locale];
  const groups: { title: string; text: string; needs: string[]; links: ServiceKey[] }[] = es ? [
    { title: "Personas y Familias", text: "Cuando quieres ordenar la preparación de impuestos y entender qué información necesitas.", needs: ["Declaración personal", "Cambios importantes durante el año", "Planificación anticipada"], links: ["personal", "planning"] },
    { title: "Dueños de Pequeños Negocios", text: "Cuando los impuestos, registros y tareas recurrentes necesitan trabajar juntos.", needs: ["Declaración del negocio", "Bookkeeping organizado", "Nómina recurrente"], links: ["business", "bookkeeping", "payroll"] },
    { title: "Contratistas Independientes", text: "Cuando tus ingresos y gastos necesitan una estructura más clara.", needs: ["Organización de registros", "Preparación fiscal", "Pagos y planificación"], links: ["personal", "planning", "bookkeeping"] },
    { title: "Negocios Nuevos", text: "Cuando estás convirtiendo una idea en una operación organizada.", needs: ["Pasos iniciales", "Sistema de registros", "Preparación para nómina"], links: ["formation", "bookkeeping", "payroll"] },
    { title: "Negocios en Crecimiento", text: "Cuando más actividad requiere mejores rutinas y coordinación.", needs: ["Procesos mensuales", "Coordinación fiscal", "Planificación durante el año"], links: ["bookkeeping", "business", "planning"] },
    { title: "Empresarios Bilingües", text: "Cuando prefieres conversar y revisar los próximos pasos en español.", needs: ["Comunicación natural", "Contenido bilingüe", "Acceso a todos los servicios"], links: ["personal", "business", "formation"] },
  ] : [
    { title: "Individuals & Families", text: "When you want to organize tax preparation and understand what information is needed.", needs: ["Individual filing", "Major changes during the year", "Proactive planning"], links: ["personal", "planning"] },
    { title: "Small Business Owners", text: "When taxes, records and recurring responsibilities need to work together.", needs: ["Business filing", "Organized bookkeeping", "Recurring payroll"], links: ["business", "bookkeeping", "payroll"] },
    { title: "Independent Contractors", text: "When income and expenses need a clearer structure.", needs: ["Record organization", "Tax preparation", "Payments and planning"], links: ["personal", "planning", "bookkeeping"] },
    { title: "New Businesses", text: "When you are turning an idea into an organized operation.", needs: ["Initial setup steps", "Recordkeeping system", "Payroll readiness"], links: ["formation", "bookkeeping", "payroll"] },
    { title: "Growing Businesses", text: "When more activity requires better routines and coordination.", needs: ["Monthly processes", "Tax coordination", "Year-round planning"], links: ["bookkeeping", "business", "planning"] },
    { title: "Bilingual Business Owners", text: "When you prefer to discuss information and next steps in Spanish.", needs: ["Natural communication", "Bilingual content", "Access to every service"], links: ["personal", "business", "formation"] },
  ];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "A quiénes ayudamos" : "Who we help"} title={es ? "Tu situación primero. El servicio después." : "Your situation first. The service second."} intro={es ? "Comenzamos por entender qué necesitas organizar, decidir o resolver. Después conectamos esa necesidad con el servicio apropiado." : "We begin by understanding what you need to organize, decide or resolve. Then we connect that need with the appropriate service."} breadcrumbs={[{ label: es ? "A Quiénes Ayudamos" : "Who We Help" }]}/>
    <section className="section"><div className="container client-grid">{groups.map((group, index) => <article key={group.title} className="client-card"><span>0{index + 1}</span><h2>{group.title}</h2><p>{group.text}</p><CheckList items={group.needs}/><div className="client-links">{group.links.map((key) => <Link href={serviceHref(locale, s[key])} key={key}>{s[key].shortTitle}<ArrowRight/></Link>)}</div></article>)}</div></section>
    <FinalCta locale={locale} title={es ? "No tienes que elegir solo." : "You do not have to choose alone."} body={es ? "Explícanos tu situación y podremos conversar sobre el servicio que mejor corresponde." : "Tell us about your situation and we can discuss which service is the best fit."}/>
  </>;
}

export function ResourcesPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const resources = es ? [
    { title: "Lista para Preparar Impuestos", summary: "Categorías comunes que puedes reunir antes de comenzar.", items: ["Documentos de ingresos", "Registros de gastos aplicables", "Información sobre cambios personales o del negocio", "Declaración anterior si está disponible"] },
    { title: "Registros para Pequeños Negocios", summary: "Hábitos sencillos para mantener información más útil.", items: ["Separar actividad personal y del negocio", "Guardar documentos fuente", "Revisar transacciones regularmente", "Anotar preguntas mientras están recientes"] },
    { title: "Conceptos Básicos de Pagos Estimados", summary: "Preguntas para una conversación de planificación.", items: ["Qué ingresos han cambiado", "Qué pagos ya se realizaron", "Qué decisiones se aproximan", "Cuándo volver a revisar"] },
    { title: "Lista de Bookkeeping", summary: "Un punto de partida para el cierre mensual.", items: ["Estados de cuenta", "Recibos y facturas", "Actividad de nómina", "Transacciones que requieren contexto"] },
    { title: "Prepárate para tu Consulta", summary: "Aprovecha mejor la conversación inicial.", items: ["Describe lo que necesitas", "Reúne avisos o documentos relevantes", "Anota fechas importantes", "Prepara tus preguntas principales"] },
  ] : [
    { title: "Tax Preparation Checklist", summary: "Common categories you can gather before getting started.", items: ["Income documents", "Applicable expense records", "Information about personal or business changes", "A prior return when available"] },
    { title: "Small Business Recordkeeping", summary: "Simple habits for maintaining more useful information.", items: ["Separate personal and business activity", "Keep source documents", "Review transactions regularly", "Note questions while they are current"] },
    { title: "Estimated Tax Basics", summary: "Questions to support a planning conversation.", items: ["What income has changed", "Which payments have been made", "What decisions are approaching", "When to review again"] },
    { title: "Bookkeeping Checklist", summary: "A starting point for a monthly close.", items: ["Account statements", "Receipts and invoices", "Payroll activity", "Transactions that need context"] },
    { title: "Preparing for Your Consultation", summary: "Make the initial conversation more useful.", items: ["Describe what you need", "Gather relevant notices or documents", "Note important dates", "Prepare your main questions"] },
  ];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Centro de recursos" : "Resource center"} title={es ? "Información práctica para llegar más preparado." : "Practical information to help you arrive prepared."} intro={es ? "Estos recursos de demostración ofrecen un punto de partida educativo. No sustituyen orientación adaptada a tu situación." : "These demonstration resources offer an educational starting point. They do not replace guidance tailored to your situation."} image="/images/resources.webp" alt={es ? "Una profesional independiente organizando registros en una mesa de trabajo" : "An independent business owner organizing records at a work table"} breadcrumbs={[{ label: es ? "Recursos" : "Resources" }]}/>
    <section className="section"><div className="container resources-list"><div className="resource-disclaimer"><ShieldIcon/><p>{es ? "Contenido general de demostración. No constituye asesoría fiscal, legal o financiera para una situación específica." : "General demonstration content. It is not tax, legal or financial advice for a specific situation."}</p></div>{resources.map((resource, index) => <article key={resource.title} id={`resource-${index + 1}`}><div className="resource-number">0{index + 1}</div><div className="resource-copy"><h2>{resource.title}</h2><p>{resource.summary}</p></div><CheckList items={resource.items}/></article>)}</div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function AboutPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Sobre Coastal Ledger" : "About Coastal Ledger"} title={es ? "Una firma moderna construida alrededor de la claridad." : "A modern advisory firm built around clarity."} intro={es ? "Coastal Ledger es una firma ficticia de demostración diseñada para mostrar cómo los servicios fiscales y de negocios pueden sentirse profesionales, humanos y fáciles de entender." : "Coastal Ledger is a fictional demonstration firm designed to show how tax and business services can feel professional, human and easy to understand."} image="/images/about.webp" alt={es ? "Un equipo asesor diverso conversando en una oficina de Santa Barbara" : "A diverse advisory team in conversation in a Santa Barbara office"} breadcrumbs={[{ label: es ? "Nosotros" : "About" }]}/>
    <section className="section intro-section"><div className="container intro-grid"><Eyebrow>{es ? "Nuestra filosofía" : "Our philosophy"}</Eyebrow><div><h2>{es ? "La organización crea espacio para mejores conversaciones." : "Organization creates room for better conversations."}</h2><p>{es ? "Cuando los documentos, preguntas y próximos pasos están ordenados, las conversaciones pueden enfocarse en lo que importa. Nuestro enfoque combina estructura profesional con comunicación accesible." : "When documents, questions and next steps are organized, conversations can focus on what matters. Our approach combines professional structure with approachable communication."}</p></div></div></section>
    <section className="section section-stone values-section"><div className="container"><SectionHead eyebrow={es ? "Cómo queremos trabajar" : "How we aim to work"} title={es ? "Principios sencillos para una experiencia más clara" : "Simple principles for a clearer experience"}/><div className="value-grid"><article><span>01</span><h3>{es ? "Escuchar primero" : "Listen first"}</h3><p>{es ? "El servicio comienza con tu situación, no con una lista de soluciones predeterminadas." : "Service begins with your situation, not a predetermined list of solutions."}</p></article><article><span>02</span><h3>{es ? "Organizar con intención" : "Organize with intention"}</h3><p>{es ? "Cada paso debe ayudar a entender qué hace falta y por qué." : "Every step should help explain what is needed and why."}</p></article><article><span>03</span><h3>{es ? "Hablar con claridad" : "Speak clearly"}</h3><p>{es ? "Preferimos explicaciones útiles sobre lenguaje innecesariamente complicado." : "We prefer useful explanations over unnecessarily complicated language."}</p></article><article><span>04</span><h3>{es ? "Mantener límites honestos" : "Keep honest boundaries"}</h3><p>{es ? "No inventamos credenciales, resultados ni promesas que no pueden confirmarse." : "We do not invent credentials, outcomes or promises that cannot be confirmed."}</p></article></div></div></section>
    <section className="section local-section"><div className="container local-grid"><div><PinIcon/><Eyebrow>{es ? "En el área de Santa Barbara" : "In the Santa Barbara area"}</Eyebrow><h2>{es ? "Servicio local con una perspectiva accesible." : "Local service with an approachable perspective."}</h2></div><div><p>{es ? "El website está diseñado para personas y negocios en Santa Barbara, Goleta, Montecito, Carpinteria y comunidades cercanas." : "The website is designed for individuals and businesses in Santa Barbara, Goleta, Montecito, Carpinteria and surrounding communities."}</p><TextLink href={es ? "/es/a-quienes-ayudamos" : "/who-we-help"}>{es ? "Conoce a quiénes ayudamos" : "See who we help"}</TextLink></div></div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function ReviewsPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const reviews = es ? [
    ["El proceso fue fácil de seguir y las preguntas llegaron en el momento correcto. Nunca sentimos que estábamos adivinando el siguiente paso.", "Ejemplo — Persona y familia"],
    ["Por primera vez, bookkeeping y preparación fiscal se sintieron como partes del mismo sistema.", "Ejemplo — Dueño de pequeño negocio"],
    ["Poder conversar en español hizo que fuera mucho más fácil explicar lo que necesitaba mi negocio.", "Ejemplo — Empresaria bilingüe"],
    ["El tono fue tranquilo y directo cuando recibí correspondencia que no entendía.", "Ejemplo — Cliente de apoyo fiscal"],
  ] : [
    ["The process was easy to follow and questions arrived at the right time. We never felt like we were guessing about the next step.", "Sample — Individual and family"],
    ["For the first time, bookkeeping and tax preparation felt like parts of the same system.", "Sample — Small-business owner"],
    ["Being able to talk in Spanish made it much easier to explain what my business needed.", "Sample — Bilingual business owner"],
    ["The tone was calm and direct when I received correspondence I did not understand.", "Sample — Tax support client"],
  ];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Experiencia del cliente" : "Client experience"} title={es ? "Claridad que se siente en cada paso." : "Clarity you can feel at every step."} intro={es ? "Esta página muestra cómo podría presentarse la experiencia del cliente en el diseño final." : "This page demonstrates how client experience could be presented in the final design."} breadcrumbs={[{ label: es ? "Reseñas" : "Reviews" }]}/>
    <section className="section"><div className="container"><div className="sample-banner"><ShieldIcon/><p><b>{es ? "Aviso:" : "Notice:"}</b> {es ? "Testimonios de ejemplo utilizados únicamente para demostración. No representan clientes reales." : "Sample testimonials for demonstration purposes only. They do not represent real clients."}</p></div><div className="reviews-grid">{reviews.map((review, index) => <blockquote key={review[0]}><span>“</span><p>{review[0]}</p><footer>{review[1]} · 0{index + 1}</footer></blockquote>)}</div></div></section>
    <section className="section section-stone"><div className="container experience-grid"><SectionHead eyebrow={es ? "La experiencia que buscamos" : "The experience we aim for"} title={es ? "Organizado. Profesional. Humano." : "Organized. Professional. Human."}/><CheckList items={es ? ["Saber qué información hace falta", "Entender el siguiente paso", "Poder hacer preguntas con confianza", "Recibir servicio en el idioma preferido"] : ["Know what information is needed", "Understand the next step", "Feel comfortable asking questions", "Receive service in the preferred language"]}/></div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function FaqPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const faqs = es ? [
    { q: "¿Qué documentos debo llevar para preparar impuestos?", a: "La lista depende de tu situación. Normalmente incluye documentos de ingresos, registros relevantes de gastos, identificación e información sobre cambios importantes. Una declaración anterior también puede ayudar." },
    { q: "¿Trabajan con personas y negocios?", a: "Sí. Los servicios están diseñados para personas, familias, contratistas independientes, negocios nuevos y pequeños negocios." },
    { q: "¿Ofrecen planificación fiscal durante todo el año?", a: "Sí. La planificación puede incluir revisiones periódicas, pagos estimados y conversaciones sobre cambios personales o del negocio." },
    { q: "¿Pueden ayudar con bookkeeping?", a: "Sí. El servicio puede incluir organización de transacciones, conciliación, registros financieros y reportes según el alcance acordado." },
    { q: "¿Ofrecen servicios de nómina?", a: "Sí. La nómina se organiza como un servicio recurrente según las necesidades y el calendario del negocio." },
    { q: "¿Pueden ayudarme a iniciar un negocio?", a: "Podemos ayudar con pasos organizativos y fiscales dentro de nuestro alcance. Este servicio no es asesoría legal y puede ser necesario consultar a un abogado." },
    { q: "¿Pueden ayudar con un aviso del IRS?", a: "Podemos revisar el aviso, organizar la información relacionada y conversar sobre el alcance apropiado. No se garantizan resultados." },
    { q: "¿Ofrecen servicios en español?", a: "Sí. El contenido y la experiencia de servicio están disponibles en inglés y español." },
    { q: "¿Cómo agendo una consulta?", a: "Visita la página Agenda una Consulta. Por ahora, el calendario está marcado como demostración y se conectará en una fase posterior." },
    { q: "¿Cuánto cuestan los servicios?", a: "El precio depende del servicio y de la complejidad del trabajo. Una consulta puede ayudar a determinar el alcance apropiado." },
  ] : [
    { q: "What documents should I bring for tax preparation?", a: "The list depends on your situation. It commonly includes income documents, relevant expense records, identification and information about major changes. A prior return may also be helpful." },
    { q: "Do you work with individuals and businesses?", a: "Yes. Services are designed for individuals, families, independent contractors, new businesses and small businesses." },
    { q: "Do you offer year-round tax planning?", a: "Yes. Planning may include periodic reviews, estimated payments and conversations about personal or business changes." },
    { q: "Can you help with bookkeeping?", a: "Yes. Service may include transaction organization, reconciliation, financial records and reporting based on the agreed scope." },
    { q: "Do you provide payroll services?", a: "Yes. Payroll is organized as a recurring service based on the business needs and schedule." },
    { q: "Can you help me start a business?", a: "We can assist with organizational and tax-related steps within our scope. This service is not legal advice, and consultation with an attorney may be appropriate." },
    { q: "Can you help with an IRS notice?", a: "We can review the notice, organize related information and discuss an appropriate scope of assistance. Outcomes are not guaranteed." },
    { q: "Do you offer services in Spanish?", a: "Yes. Website content and the service experience are available in English and Spanish." },
    { q: "How do I schedule a consultation?", a: "Visit the Book a Consultation page. The calendar is currently marked as a demonstration and will be connected in a later phase." },
    { q: "How much do services cost?", a: "Pricing depends on the service and complexity of the work. A consultation can help determine the appropriate scope of service." },
  ];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Preguntas frecuentes" : "Frequently asked questions"} title={es ? "Respuestas claras antes de comenzar." : "Clear answers before you begin."} intro={es ? "Encuentra información general sobre servicios, documentos, precios y consultas." : "Find general information about services, documents, pricing and consultations."} breadcrumbs={[{ label: es ? "Preguntas Frecuentes" : "FAQ" }]}/>
    <section className="section"><div className="container faq-page-grid"><aside><Eyebrow>{es ? "Diez respuestas" : "Ten answers"}</Eyebrow><h2>{es ? "¿Todavía tienes una pregunta?" : "Still have a question?"}</h2><p>{es ? "Una consulta puede ayudar cuando la respuesta depende de tus documentos o circunstancias." : "A consultation can help when the answer depends on your documents or circumstances."}</p><TextLink href={es ? "/es/contacto" : "/contact"}>{es ? "Ponte en contacto" : "Get in touch"}</TextLink></aside><FaqList items={faqs}/></div></section>
    <FinalCta locale={locale}/>
  </>;
}

export function ContactPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const s = servicesByLocale[locale];
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Contacto" : "Contact"} title={es ? "Comienza con una conversación clara." : "Start with a clear conversation."} intro={es ? "Cuéntanos de forma general qué necesitas. No incluyas números de Seguro Social, identificaciones fiscales, números de cuenta ni información confidencial." : "Tell us generally what you need. Do not include Social Security numbers, tax IDs, account numbers or confidential information."} breadcrumbs={[{ label: es ? "Contacto" : "Contact" }]}/>
    <section className="section"><div className="container contact-grid"><div className="contact-panel"><Eyebrow light>{es ? "Información directa" : "Direct information"}</Eyebrow><h2>{es ? "Estamos aquí para ayudarte a encontrar el siguiente paso." : "We are here to help you find the next step."}</h2><ul><li><PhoneIcon/><div><span>{es ? "Teléfono" : "Phone"}</span><a href={site.phoneHref}>{site.phoneDisplay}</a></div></li><li><MailIcon/><div><span>Email</span><a href={`mailto:${site.email}`}>{site.email}</a></div></li><li><PinIcon/><div><span>{es ? "Área de servicio" : "Service area"}</span><p>{es ? "Santa Barbara, Goleta, Montecito, Carpinteria y comunidades cercanas" : site.serviceArea}</p></div></li></ul><p className="demo-fineprint">{es ? "Coastal Ledger es un negocio ficticio creado para demostración." : "Coastal Ledger is a fictional business created for demonstration."}</p></div><form className="demo-form"><div className="demo-notice"><ShieldIcon/><div><b>{es ? "Formulario de demostración" : "Demonstration form"}</b><p>{es ? "Este formulario todavía no transmite información. Se conectará a GoHighLevel en una fase posterior." : "This form does not transmit information yet. It will be connected to GoHighLevel in a later phase."}</p></div></div><div className="field-row"><label>{es ? "Nombre completo" : "Full Name"}<input type="text" name="name" autoComplete="name"/></label><label>{es ? "Teléfono" : "Phone"}<input type="tel" name="phone" autoComplete="tel"/></label></div><label>Email<input type="email" name="email" autoComplete="email"/></label><div className="field-row"><label>{es ? "Servicio de interés" : "Service Interested In"}<select name="service" defaultValue=""><option value="" disabled>{es ? "Selecciona un servicio" : "Select a service"}</option>{serviceOrder.map((key) => <option key={key}>{s[key].title}</option>)}</select></label><label>{es ? "Persona o negocio" : "Individual or Business"}<select name="client-type" defaultValue=""><option value="" disabled>{es ? "Selecciona una opción" : "Select one"}</option><option>{es ? "Persona / Familia" : "Individual / Family"}</option><option>{es ? "Negocio" : "Business"}</option></select></label></div><label>{es ? "Idioma preferido" : "Preferred Language"}<select name="language" defaultValue="English"><option>English</option><option>Español</option></select></label><label>{es ? "Mensaje" : "Message"}<textarea name="message" rows={5}/></label><button className="button" type="button" disabled>{es ? "Demo — No envía información" : "Demo — Does not submit"}</button></form></div></section>
  </>;
}

export function BookPage({ locale }: { locale: Locale }) {
  const es = locale === "es";
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Tu siguiente paso" : "Your next step"} title={es ? "Agenda una Consulta" : "Book a Consultation"} intro={es ? "Reserva un espacio para explicar lo que necesitas y conversar sobre un alcance apropiado." : "Reserve time to explain what you need and discuss an appropriate scope of service."} breadcrumbs={[{ label: es ? "Agenda una Consulta" : "Book a Consultation" }]}/>
    <section className="section booking-section"><div className="container booking-grid"><div className="booking-info"><Eyebrow>{es ? "Antes de agendar" : "Before you schedule"}</Eyebrow><h2>{es ? "Una consulta enfocada comienza con contexto básico." : "A focused consultation begins with basic context."}</h2><CheckList items={es ? ["El servicio o asunto que quieres conversar", "Si la necesidad es personal o de negocio", "Cualquier fecha importante que conozcas", "Tu idioma preferido"] : ["The service or issue you want to discuss", "Whether the need is personal or business", "Any important date you already know", "Your preferred language"]}/><div className="privacy-reminder"><ShieldIcon/><p>{es ? "No compartas información confidencial en una solicitud inicial." : "Do not share confidential information in an initial scheduling request."}</p></div></div><div className="calendar-placeholder"><div className="demo-pill">{es ? "CALENDARIO DEMO" : "DEMO CALENDAR"}</div><CalendarIcon/><h2>{es ? "El calendario se conectará aquí." : "The calendar will be connected here."}</h2><p>{es ? "Esta página está preparada para recibir el calendario de GoHighLevel en una fase posterior. No se ha creado un sistema alternativo de reservaciones." : "This page is prepared for a GoHighLevel calendar in a later phase. No alternative booking system has been created."}</p><div className="calendar-lines" aria-hidden="true"><i/><i/><i/></div><Link className="text-link" href={es ? "/es/contacto" : "/contact"}>{es ? "Usa la página de contacto" : "Use the contact page"}<ArrowRight/></Link></div></div></section>
  </>;
}

export function LegalPage({ locale, type }: { locale: Locale; type: "privacy" | "terms" }) {
  const es = locale === "es";
  const privacy = type === "privacy";
  const title = privacy ? (es ? "Política de Privacidad" : "Privacy Policy") : (es ? "Términos de Servicio" : "Terms of Service");
  const sections = privacy ? (es ? [
    ["Sitio de demostración", "Este website representa un negocio ficticio. Los formularios y el calendario no transmiten información mientras estén marcados como demostración."],
    ["Información de contacto", "Los enlaces de teléfono y correo se muestran para fines de demostración. No envíes números de Seguro Social, identificaciones fiscales, números de cuenta u otra información confidencial."],
    ["Uso futuro de formularios", "Si los formularios se conectan en una fase posterior, esta política deberá actualizarse para describir qué información se recopila, cómo se utiliza y cómo se protege."],
    ["Servicios externos", "El hosting, análisis o futuras integraciones pueden utilizar proveedores externos. La versión final deberá identificar prácticas aplicables cuando esas herramientas estén confirmadas."],
    ["Cambios", "Esta política demostrativa puede cambiar cuando el website se adapte a un negocio real o incorpore servicios conectados."],
  ] : [
    ["Demonstration website", "This website represents a fictional business. Forms and scheduling do not transmit information while marked as demonstrations."],
    ["Contact information", "Phone and email links are shown for demonstration. Do not send Social Security numbers, tax IDs, account numbers or other confidential information."],
    ["Future form use", "If forms are connected in a later phase, this policy must be updated to describe what information is collected, how it is used and how it is protected."],
    ["External services", "Hosting, analytics or future integrations may use external providers. A final version should identify applicable practices when those tools are confirmed."],
    ["Changes", "This demonstration policy may change if the website is adapted to a real business or connected services are added."],
  ]) : (es ? [
    ["Propósito demostrativo", "Coastal Ledger Tax & Business Services es un negocio ficticio. Este website es un modelo de diseño y contenido."],
    ["Sin relación profesional", "El uso de este website no crea una relación profesional, de representación, contable, fiscal o legal."],
    ["Información general", "El contenido es únicamente informativo y no sustituye asesoría fiscal, legal, contable o financiera adaptada a una situación específica."],
    ["Sin garantías", "No se prometen ahorros, resultados ante el IRS, reembolsos ni otros resultados específicos."],
    ["Formación de negocios", "El contenido sobre formación de negocios no constituye asesoría legal. Consulta a un abogado calificado para preguntas legales."],
  ] : [
    ["Demonstration purpose", "Coastal Ledger Tax & Business Services is a fictional business. This website is a design and content model."],
    ["No professional relationship", "Use of this website does not create a professional, representation, accounting, tax or legal relationship."],
    ["General information", "Content is informational only and does not replace tax, legal, accounting or financial advice tailored to a specific situation."],
    ["No guarantees", "No tax savings, IRS outcomes, refunds or other specific results are promised."],
    ["Business formation", "Business formation content is not legal advice. Consult a qualified attorney for legal questions."],
  ]);
  return <>
    <InnerHero locale={locale} eyebrow={es ? "Información legal" : "Legal information"} title={title} intro={es ? "Contenido preparado para un website ficticio de demostración. Debe revisarse antes de adaptarlo a un negocio real." : "Content prepared for a fictional demonstration website. It should be reviewed before adaptation to a real business."} breadcrumbs={[{ label: title }]}/>
    <section className="section"><div className="container legal-content"><div className="legal-updated">{es ? "Versión de demostración · Octubre 2026" : "Demonstration version · October 2026"}</div>{sections.map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}<section><h2>{es ? "Contacto" : "Contact"}</h2><p>{es ? "Las preguntas generales sobre esta página pueden dirigirse a" : "General questions about this page may be directed to"} <a href={`mailto:${site.email}`}>{site.email}</a>.</p></section></div></section>
  </>;
}
