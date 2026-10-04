import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarIcon, CheckIcon, FolderIcon, LedgerIcon, ShieldIcon } from "@/components/icons";
import { type Locale } from "@/lib/site";
import { serviceHref, type Service } from "@/lib/services";

export function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return <p className={light ? "eyebrow light" : "eyebrow"}><span aria-hidden="true"/>{children}</p>;
}

export function SectionHead({ eyebrow, title, body, align = "left" }: { eyebrow?: string; title: string; body?: string; align?: "left" | "center" }) {
  return <div className={`section-head ${align}`}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2>{title}</h2>
    {body && <p>{body}</p>}
  </div>;
}

export function ButtonLink({ href, children, secondary = false, light = false }: { href: string; children: React.ReactNode; secondary?: boolean; light?: boolean }) {
  const className = secondary ? `button button-secondary${light ? " light" : ""}` : "button";
  return <Link className={className} href={href}>{children}<ArrowUpRight/></Link>;
}

export function TextLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="text-link" href={href}>{children}<ArrowRight/></Link>;
}

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  const home = locale === "en" ? "Home" : "Inicio";
  return <nav className="breadcrumbs" aria-label={locale === "en" ? "Breadcrumb" : "Migas de pan"}>
    <Link href={locale === "en" ? "/" : "/es"}>{home}</Link>
    {items.map((item, index) => <span key={`${item.label}-${index}`}><i aria-hidden="true">/</i>{item.href ? <Link href={item.href}>{item.label}</Link> : <b aria-current="page">{item.label}</b>}</span>)}
  </nav>;
}

export function InnerHero({ locale, eyebrow, title, intro, image, alt, breadcrumbs }: { locale: Locale; eyebrow: string; title: string; intro: string; image?: string; alt?: string; breadcrumbs?: { label: string; href?: string }[] }) {
  return <section className={`inner-hero ${image ? "with-image" : ""}`}>
    <div className="container">
      {breadcrumbs && <Breadcrumbs locale={locale} items={breadcrumbs}/>} 
      <div className="inner-hero-grid">
        <div className="inner-hero-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{intro}</p></div>
        {image && <div className="inner-hero-image"><Image src={image} alt={alt ?? ""} fill priority sizes="(max-width: 800px) 100vw, 46vw"/></div>}
      </div>
    </div>
  </section>;
}

export function ServiceCard({ service, locale, featured = false }: { service: Service; locale: Locale; featured?: boolean }) {
  const ServiceIcon = service.key === "planning" || service.key === "payroll"
    ? CalendarIcon
    : service.key === "irs"
      ? ShieldIcon
      : service.key === "bookkeeping" || service.key === "business"
        ? LedgerIcon
        : FolderIcon;

  return <article className={`service-card ${featured ? "featured" : ""}`}>
    <div className="service-card-top"><span className="service-card-icon"><ServiceIcon/></span><span>{service.accent}</span><span className="service-line"/></div>
    <h3>{service.title}</h3><p>{service.summary}</p>
    <TextLink href={serviceHref(locale, service)}>{locale === "en" ? "Explore this service" : "Conoce este servicio"}</TextLink>
  </article>;
}

export function FaqList({ items }: { items: { q: string; a: string }[] }) {
  return <div className="faq-list">{items.map((item, index) => <details key={item.q} open={index === 0}>
    <summary><span>{item.q}</span><i aria-hidden="true">+</i></summary><div><p>{item.a}</p></div>
  </details>)}</div>;
}

export function CheckList({ items }: { items: string[] }) {
  return <ul className="check-list">{items.map((item) => <li key={item}><CheckIcon/><span>{item}</span></li>)}</ul>;
}

export function FinalCta({ locale, title, body }: { locale: Locale; title?: string; body?: string }) {
  const es = locale === "es";
  return <section className="final-cta">
    <div className="container final-cta-inner">
      <div><Eyebrow light>{es ? "El siguiente paso" : "Your next step"}</Eyebrow><h2>{title ?? (es ? "Hablemos de lo que necesitas." : "Let’s talk about what you need.")}</h2><p>{body ?? (es ? "Una consulta nos permite entender tu situación y definir un alcance apropiado." : "A consultation helps us understand your situation and define an appropriate scope of service.")}</p></div>
      <div className="cta-actions"><ButtonLink href={es ? "/es/agendar" : "/book"}>{es ? "Agenda una Consulta" : "Book a Consultation"}</ButtonLink><ButtonLink href={es ? "/es/contacto" : "/contact"} secondary light>{es ? "Ponte en Contacto" : "Get in Touch"}</ButtonLink></div>
    </div>
  </section>;
}

export function ImageFeature({ image, alt, eyebrow, title, body, reverse = false, children }: { image: string; alt: string; eyebrow: string; title: string; body: string; reverse?: boolean; children?: React.ReactNode }) {
  return <div className={`image-feature ${reverse ? "reverse" : ""}`}>
    <div className="image-feature-media"><Image src={image} alt={alt} fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
    <div className="image-feature-copy"><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2><p>{body}</p>{children}</div>
  </div>;
}
