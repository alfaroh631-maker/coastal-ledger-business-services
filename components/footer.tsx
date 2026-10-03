"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import { serviceHref, serviceOrder, servicesByLocale } from "@/lib/services";
import { site, type Locale } from "@/lib/site";

export function Footer({ locale: requestedLocale }: { locale?: Locale }) {
  const pathname = usePathname();
  const locale: Locale = requestedLocale ?? (pathname.startsWith("/es") ? "es" : "en");
  const es = locale === "es";
  const services = serviceOrder.map((key) => servicesByLocale[locale][key]);
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand brand-light">
            <span className="brand-mark" aria-hidden="true"><i/><i/><i/></span>
            <span className="brand-copy"><b>Coastal Ledger</b><small>Tax &amp; Business Services</small></span>
          </div>
          <p>{es ? "Apoyo claro y organizado para personas y pequeños negocios del área de Santa Barbara." : "Clear, organized tax and business support for individuals and small businesses in the Santa Barbara area."}</p>
          <Link className="text-link light" href={es ? "/es/agendar" : "/book"}>{es ? "Agenda una Consulta" : "Book a Consultation"} <span>↗</span></Link>
        </div>
        <div>
          <h2>{es ? "Servicios" : "Services"}</h2>
          <ul>{services.map((service) => <li key={service.key}><Link href={serviceHref(locale, service)}>{service.shortTitle}</Link></li>)}</ul>
        </div>
        <div>
          <h2>{es ? "Explora" : "Explore"}</h2>
          <ul>
            <li><Link href={es ? "/es/a-quienes-ayudamos" : "/who-we-help"}>{es ? "A Quiénes Ayudamos" : "Who We Help"}</Link></li>
            <li><Link href={es ? "/es/recursos" : "/resources"}>{es ? "Recursos" : "Resources"}</Link></li>
            <li><Link href={es ? "/es/nosotros" : "/about"}>{es ? "Nosotros" : "About"}</Link></li>
            <li><Link href={es ? "/es/resenas" : "/reviews"}>{es ? "Reseñas" : "Reviews"}</Link></li>
            <li><Link href={es ? "/es/preguntas-frecuentes" : "/faq"}>{es ? "Preguntas Frecuentes" : "FAQ"}</Link></li>
          </ul>
        </div>
        <div>
          <h2>{es ? "Contacto" : "Contact"}</h2>
          <ul className="contact-list">
            <li><PhoneIcon/><a href={site.phoneHref}>{site.phoneDisplay}</a></li>
            <li><MailIcon/><a href={`mailto:${site.email}`}>{site.email}</a></li>
            <li><PinIcon/><span>Santa Barbara, California</span></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Coastal Ledger. {es ? "Sitio de demostración con información ficticia." : "Demonstration website with fictional information."}</p>
        <div><Link href={es ? "/es/politica-de-privacidad" : "/privacy-policy"}>{es ? "Privacidad" : "Privacy"}</Link><Link href={es ? "/es/terminos-de-servicio" : "/terms-of-service"}>{es ? "Términos" : "Terms"}</Link></div>
      </div>
    </footer>
  );
}
