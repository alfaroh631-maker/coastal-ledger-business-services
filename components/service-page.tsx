import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarIcon, CheckIcon, FolderIcon, ShieldIcon } from "@/components/icons";
import { Breadcrumbs, ButtonLink, CheckList, Eyebrow, FaqList, FinalCta, SectionHead, ServiceCard } from "@/components/ui";
import { servicesByLocale, type Service } from "@/lib/services";
import type { Locale } from "@/lib/site";

function SignatureModule({ service, locale }: { service: Service; locale: Locale }) {
  const es = locale === "es";

  if (service.key === "bookkeeping") {
    return <div className="ledger-module">
      <div className="ledger-head"><span>{es ? "Periodo" : "Period"}</span><span>{es ? "Enfoque" : "Focus"}</span><span>{es ? "Estado" : "Status"}</span></div>
      {service.signatureItems.map((item, index) => <div className="ledger-row" key={item.label}><b>{item.label}</b><span>{item.text}</span><em><CheckIcon/>{index < 3 ? (es ? "En proceso" : "In rhythm") : (es ? "Listo para revisar" : "Ready to review")}</em></div>)}
    </div>;
  }

  if (service.key === "planning") {
    return <div className="planning-timeline">{service.signatureItems.map((item, index) => <div key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><i/><h3>{item.label}</h3><p>{item.text}</p></div>)}</div>;
  }

  if (service.key === "payroll") {
    return <div className="cycle-module"><div className="cycle-center"><CalendarIcon/><span>{es ? "Cada ciclo" : "Every cycle"}</span></div>{service.signatureItems.map((item, index) => <article key={item.label} style={{ "--i": index } as React.CSSProperties}><b>{index + 1}</b><h3>{item.label}</h3><p>{item.text}</p></article>)}</div>;
  }

  if (service.key === "formation") {
    return <div className="formation-module">{service.signatureItems.map((item, index) => <article key={item.label}><span>{index + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div>;
  }

  if (service.key === "irs") {
    return <div className="notice-module"><div className="notice-icon"><ShieldIcon/></div><div className="notice-content">{service.signatureItems.map((item, index) => <article key={item.label}><span>{index + 1}</span><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div></div>;
  }

  if (service.key === "business") {
    return <div className="flow-module">{service.signatureItems.map((item, index) => <article key={item.label}><span>{index + 1}</span><FolderIcon/><h3>{item.label}</h3><p>{item.text}</p>{index < service.signatureItems.length - 1 && <ArrowRight className="flow-arrow"/>}</article>)}</div>;
  }

  return <div className="checklist-module">{service.signatureItems.map((item, index) => <article key={item.label}><span>{String(index + 1).padStart(2, "0")}</span><CheckIcon/><div><h3>{item.label}</h3><p>{item.text}</p></div></article>)}</div>;
}

export function ServicePage({ service, locale }: { service: Service; locale: Locale }) {
  const es = locale === "es";
  const indexHref = es ? "/es/servicios" : "/services";
  const related = service.related.map((key) => servicesByLocale[locale][key]);
  return <>
    <section className={`service-hero service-${service.key}`}>
      <div className="container">
        <Breadcrumbs locale={locale} items={[{ label: es ? "Servicios" : "Services", href: indexHref }, { label: service.title }]}/>
        <div className="service-hero-grid">
          <div className="service-hero-copy">
            <Eyebrow>{service.eyebrow}</Eyebrow>
            <span className="service-number">{service.accent}</span>
            <h1>{service.title}</h1><p>{service.intro}</p>
            <div className="hero-actions"><ButtonLink href={es ? "/es/agendar" : "/book"}>{es ? "Agenda una Consulta" : "Book a Consultation"}</ButtonLink><Link className="text-link" href="#process">{es ? "Cómo funciona" : "How it works"}<ArrowRight/></Link></div>
          </div>
          <div className="service-hero-media"><Image src={service.image} alt={service.alt} fill priority sizes="(max-width: 800px) 100vw, 48vw"/><span className="image-corner" aria-hidden="true"/></div>
        </div>
      </div>
    </section>

    <section className="section service-overview">
      <div className="container overview-grid">
        <div><Eyebrow>{es ? "Apoyo enfocado" : "Focused support"}</Eyebrow><h2>{es ? "Claridad sobre lo que sigue." : "Clarity about what comes next."}</h2></div>
        <CheckList items={service.benefits}/>
      </div>
    </section>

    <section className="section section-stone" id="process">
      <div className="container">
        <SectionHead eyebrow={es ? "Nuestro proceso" : "Our process"} title={es ? "Un proceso definido y fácil de seguir" : "A defined process that is easy to follow"} body={es ? "El alcance exacto depende de tu situación. Estos pasos muestran cómo organizamos el trabajo." : "The exact scope depends on your situation. These steps show how we organize the work."}/>
        <div className="process-grid">{service.steps.map((step, index) => <article key={step.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
      </div>
    </section>

    <section className={`section signature-section signature-${service.key}`}>
      <div className="container">
        <div className="signature-heading"><div><Eyebrow>{es ? "Un enfoque diferente" : "A distinct approach"}</Eyebrow><h2>{service.signatureTitle}</h2></div><p>{service.signatureIntro}</p></div>
        <SignatureModule service={service} locale={locale}/>
      </div>
    </section>

    {service.key === "formation" && <section className="legal-note"><div className="container"><ShieldIcon/><p><b>{es ? "Nota importante:" : "Important note:"}</b> {es ? "El apoyo para formación de negocios no constituye asesoría legal. Para preguntas legales, consulta con un abogado calificado." : "Business formation support is not legal advice. Consult a qualified attorney for legal questions."}</p></div></section>}
    {service.key === "irs" && <section className="legal-note"><div className="container"><ShieldIcon/><p><b>{es ? "Sin promesas de resultados:" : "No outcome promises:"}</b> {es ? "Cada asunto depende de sus hechos, documentos y del proceso de la agencia. No se garantizan resultados específicos." : "Every matter depends on its facts, records and the agency process. Specific outcomes are not guaranteed."}</p></div></section>}

    <section className="section faq-section">
      <div className="container faq-grid">
        <SectionHead eyebrow={es ? "Preguntas comunes" : "Common questions"} title={es ? `Preguntas sobre ${service.shortTitle.toLowerCase()}` : `${service.shortTitle} questions`}/>
        <FaqList items={service.faqs}/>
      </div>
    </section>

    <section className="section section-ink related-section">
      <div className="container"><SectionHead eyebrow={es ? "Servicios relacionados" : "Related services"} title={es ? "Conecta las piezas de tu situación" : "Connect the pieces of your situation"} body={es ? "Estos servicios suelen relacionarse con el trabajo descrito en esta página." : "These services often connect with the work described on this page."}/><div className="service-grid three">{related.map((item) => <ServiceCard key={item.key} service={item} locale={locale}/>)}</div></div>
    </section>
    <FinalCta locale={locale}/>
  </>;
}
