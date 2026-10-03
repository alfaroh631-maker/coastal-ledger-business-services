"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ChevronDown, CloseIcon, MenuIcon } from "@/components/icons";
import { localePath, type Locale } from "@/lib/site";
import { serviceHref, serviceOrder, servicesByLocale } from "@/lib/services";

const labels = {
  en: {
    home: "Home", services: "Services", allServices: "All Services", who: "Who We Help", resources: "Resources", about: "About", faq: "FAQ", contact: "Contact", book: "Book a Consultation", menu: "Open menu",
  },
  es: {
    home: "Inicio", services: "Servicios", allServices: "Todos los Servicios", who: "A Quiénes Ayudamos", resources: "Recursos", about: "Nosotros", faq: "Preguntas", contact: "Contacto", book: "Agenda una Consulta", menu: "Abrir menú",
  },
};

function NavLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  const pathname = usePathname();
  const active = pathname === href;
  return <Link href={href} onClick={onClick} className={active ? "nav-link active" : "nav-link"}>{children}</Link>;
}

export function Header() {
  const pathname = usePathname();
  const locale: Locale = pathname.startsWith("/es") ? "es" : "en";
  const l = labels[locale];
  const prefix = locale === "es" ? "/es" : "";
  const [openForPath, setOpenForPath] = useState<string | null>(null);
  const open = openForPath === pathname;

  const services = serviceOrder.map((key) => servicesByLocale[locale][key]);

  return (
    <>
      <a className="skip-link" href="#main">{locale === "en" ? "Skip to content" : "Saltar al contenido"}</a>
      <header className="site-header">
        <div className="utility-bar">
          <div className="container utility-inner">
            <span>{locale === "en" ? "Serving the Santa Barbara area" : "Sirviendo el área de Santa Barbara"}</span>
            <span className="utility-contact"><a href="tel:+18055550192">(805) 555-0192</a><i aria-hidden="true"/> <a href="mailto:hello@coastalledger.com">hello@coastalledger.com</a></span>
          </div>
        </div>
        <div className="container nav-shell">
          <Link href={prefix || "/"} className="brand" aria-label="Coastal Ledger home">
            <span className="brand-mark" aria-hidden="true"><i/><i/><i/></span>
            <span className="brand-copy"><b>Coastal Ledger</b><small>Tax &amp; Business Services</small></span>
          </Link>

          <nav className="desktop-nav" aria-label={locale === "en" ? "Primary navigation" : "Navegación principal"}>
            <NavLink href={prefix || "/"}>{l.home}</NavLink>
            <div className="nav-dropdown">
              <button type="button" className={pathname.includes(locale === "en" ? "/services" : "/servicios") ? "nav-link active" : "nav-link"} aria-haspopup="true">
                {l.services}<ChevronDown />
              </button>
              <div className="dropdown-panel">
                <div className="dropdown-head"><span>{locale === "en" ? "Find the right support" : "Encuentra el apoyo indicado"}</span><small>{locale === "en" ? "Seven focused services for individuals and businesses." : "Siete servicios para personas y negocios."}</small></div>
                <NavLink href={locale === "en" ? "/services" : "/es/servicios"}>{l.allServices}</NavLink>
                {services.map((service) => <NavLink key={service.key} href={serviceHref(locale, service)}>{service.title}</NavLink>)}
              </div>
            </div>
            <NavLink href={`${prefix}/who-we-help`.replace("/es/who-we-help", "/es/a-quienes-ayudamos")}>{l.who}</NavLink>
            <NavLink href={`${prefix}/resources`.replace("/es/resources", "/es/recursos")}>{l.resources}</NavLink>
            <NavLink href={`${prefix}/about`.replace("/es/about", "/es/nosotros")}>{l.about}</NavLink>
            <NavLink href={`${prefix}/faq`.replace("/es/faq", "/es/preguntas-frecuentes")}>{l.faq}</NavLink>
            <NavLink href={`${prefix}/contact`.replace("/es/contact", "/es/contacto")}>{l.contact}</NavLink>
          </nav>

          <div className="nav-actions">
            <div className="language-switch" aria-label={locale === "en" ? "Language selector" : "Selector de idioma"}>
              <Link className={locale === "en" ? "selected" : ""} href={localePath(pathname, "en")}>EN</Link><span>/</span><Link className={locale === "es" ? "selected" : ""} href={localePath(pathname, "es")}>ES</Link>
            </div>
            <Link className="button button-small nav-cta" href={locale === "en" ? "/book" : "/es/agendar"}>{l.book}</Link>
            <button type="button" className="menu-toggle" onClick={() => setOpenForPath(open ? null : pathname)} aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? (locale === "en" ? "Close menu" : "Cerrar menú") : l.menu}>
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div id="mobile-menu" className={open ? "mobile-menu open" : "mobile-menu"}>
          <nav className="container mobile-nav" aria-label={locale === "en" ? "Mobile navigation" : "Navegación móvil"}>
            <NavLink href={prefix || "/"} onClick={() => setOpenForPath(null)}>{l.home}</NavLink>
            <details>
              <summary>{l.services}<ChevronDown /></summary>
              <div className="mobile-services">
                <NavLink href={locale === "en" ? "/services" : "/es/servicios"}>{l.allServices}</NavLink>
                {services.map((service) => <NavLink key={service.key} href={serviceHref(locale, service)}>{service.title}</NavLink>)}
              </div>
            </details>
            <NavLink href={locale === "en" ? "/who-we-help" : "/es/a-quienes-ayudamos"}>{l.who}</NavLink>
            <NavLink href={locale === "en" ? "/resources" : "/es/recursos"}>{l.resources}</NavLink>
            <NavLink href={locale === "en" ? "/about" : "/es/nosotros"}>{l.about}</NavLink>
            <NavLink href={locale === "en" ? "/faq" : "/es/preguntas-frecuentes"}>{l.faq}</NavLink>
            <NavLink href={locale === "en" ? "/contact" : "/es/contacto"}>{l.contact}</NavLink>
            <Link className="button mobile-book" href={locale === "en" ? "/book" : "/es/agendar"}>{l.book}</Link>
          </nav>
        </div>
      </header>
    </>
  );
}
