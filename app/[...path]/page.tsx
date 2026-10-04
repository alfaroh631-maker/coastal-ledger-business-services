import { notFound } from "next/navigation";
import { AboutPage, BookPage, ContactPage, FaqPage, HomePage, LegalPage, ResourcesPage, ReviewsPage, ServicesPage, WhoWeHelpPage } from "@/components/pages";
import { ServicePage } from "@/components/service-page";
import { pageMetadata } from "@/lib/metadata";
import { getServiceBySlug } from "@/lib/services";
import { routePairs, type Locale } from "@/lib/site";

type Props = { params: Promise<{ path: string[] }> };

const staticPages: Record<string, { locale: Locale; kind: string; title: string; description: string }> = {
  "services": { locale: "en", kind: "services", title: "Tax & Business Services", description: "Explore personal tax, business tax, tax planning, bookkeeping, payroll, business formation and IRS support in Santa Barbara." },
  "who-we-help": { locale: "en", kind: "who", title: "Who We Help", description: "Tax and business support for individuals, families, contractors, new businesses and growing small businesses." },
  "resources": { locale: "en", kind: "resources", title: "Tax & Business Resources", description: "Practical demonstration checklists for tax preparation, recordkeeping, bookkeeping and consultations." },
  "about": { locale: "en", kind: "about", title: "About", description: "Learn about the clear, organized and bilingual approach behind Coastal Ledger Tax & Business Services." },
  "reviews": { locale: "en", kind: "reviews", title: "Sample Reviews", description: "Demonstration testimonials showing the organized, professional and approachable client experience." },
  "faq": { locale: "en", kind: "faq", title: "Frequently Asked Questions", description: "Answers about documents, tax planning, bookkeeping, payroll, business formation, IRS notices, Spanish service and pricing." },
  "contact": { locale: "en", kind: "contact", title: "Contact", description: "Contact Coastal Ledger Tax & Business Services in Santa Barbara by form, phone or email." },
  "book": { locale: "en", kind: "book", title: "Book a Consultation", description: "Prepare to schedule a tax or business services consultation with Coastal Ledger in Santa Barbara." },
  "privacy-policy": { locale: "en", kind: "privacy", title: "Privacy Policy", description: "Demonstration privacy policy for Coastal Ledger Tax & Business Services." },
  "terms-of-service": { locale: "en", kind: "terms", title: "Terms of Service", description: "Demonstration website terms for Coastal Ledger Tax & Business Services." },
  "es": { locale: "es", kind: "home", title: "Coastal Ledger — Impuestos y Servicios para Negocios", description: "Apoyo claro y organizado en impuestos, contabilidad y servicios empresariales para personas y pequeños negocios de Santa Barbara." },
  "es/servicios": { locale: "es", kind: "services", title: "Servicios de Impuestos y Negocios", description: "Explora impuestos personales y de negocios, planificación fiscal, contabilidad, nómina, formación y apoyo ante el IRS." },
  "es/a-quienes-ayudamos": { locale: "es", kind: "who", title: "A Quiénes Ayudamos", description: "Apoyo fiscal y de negocios para personas, familias, contratistas y pequeños negocios." },
  "es/recursos": { locale: "es", kind: "resources", title: "Recursos de Impuestos y Negocios", description: "Listas prácticas de demostración para impuestos, registros, contabilidad y consultas." },
  "es/nosotros": { locale: "es", kind: "about", title: "Nosotros", description: "Conoce el enfoque claro, organizado y bilingüe de Coastal Ledger Tax & Business Services." },
  "es/resenas": { locale: "es", kind: "reviews", title: "Testimonios de Ejemplo", description: "Testimonios demostrativos sobre una experiencia organizada, profesional y accesible." },
  "es/preguntas-frecuentes": { locale: "es", kind: "faq", title: "Preguntas Frecuentes", description: "Respuestas sobre documentos, planificación, contabilidad, nómina, formación, avisos del IRS, español y precios." },
  "es/contacto": { locale: "es", kind: "contact", title: "Contacto", description: "Ponte en contacto con Coastal Ledger en Santa Barbara por formulario, teléfono o email." },
  "es/agendar": { locale: "es", kind: "book", title: "Agenda una Consulta", description: "Prepárate para agendar una consulta de impuestos o servicios para negocios con Coastal Ledger." },
  "es/politica-de-privacidad": { locale: "es", kind: "privacy", title: "Política de Privacidad", description: "Política de privacidad demostrativa de Coastal Ledger Tax & Business Services." },
  "es/terminos-de-servicio": { locale: "es", kind: "terms", title: "Términos de Servicio", description: "Términos demostrativos del sitio web de Coastal Ledger Tax & Business Services." },
};

function resolve(path: string[]) {
  const joined = path.join("/");
  if (staticPages[joined]) return staticPages[joined];
  if (path[0] === "services" && path.length === 2) {
    const service = getServiceBySlug("en", path[1]);
    if (service) return { locale: "en" as const, kind: "service", title: service.title, description: service.summary, service };
  }
  if (path[0] === "es" && path[1] === "servicios" && path.length === 3) {
    const service = getServiceBySlug("es", path[2]);
    if (service) return { locale: "es" as const, kind: "service", title: service.title, description: service.summary, service };
  }
  return null;
}

export function generateStaticParams() {
  const paths = routePairs.flatMap(([en, es]) => [en, es]).filter((path) => path !== "/");
  return paths.map((path) => ({ path: path.slice(1).split("/") }));
}

export async function generateMetadata({ params }: Props) {
  const { path } = await params;
  const page = resolve(path);
  if (!page) return {};
  return pageMetadata({ locale: page.locale, path: `/${path.join("/")}`, title: page.title, description: page.description });
}

export default async function DynamicPage({ params }: Props) {
  const { path } = await params;
  const page = resolve(path);
  if (!page) notFound();
  if (page.kind === "home") return <HomePage locale={page.locale}/>;
  if (page.kind === "services") return <ServicesPage locale={page.locale}/>;
  if (page.kind === "service" && "service" in page) return <ServicePage locale={page.locale} service={page.service}/>;
  if (page.kind === "who") return <WhoWeHelpPage locale={page.locale}/>;
  if (page.kind === "resources") return <ResourcesPage locale={page.locale}/>;
  if (page.kind === "about") return <AboutPage locale={page.locale}/>;
  if (page.kind === "reviews") return <ReviewsPage locale={page.locale}/>;
  if (page.kind === "faq") return <FaqPage locale={page.locale}/>;
  if (page.kind === "contact") return <ContactPage locale={page.locale}/>;
  if (page.kind === "book") return <BookPage locale={page.locale}/>;
  if (page.kind === "privacy") return <LegalPage locale={page.locale} type="privacy"/>;
  if (page.kind === "terms") return <LegalPage locale={page.locale} type="terms"/>;
  notFound();
}
