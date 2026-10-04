"use client";

import { useState } from "react";
import { ShieldIcon } from "@/components/icons";
import { serviceOrder, servicesByLocale } from "@/lib/services";
import type { Locale } from "@/lib/site";

export function ContactForm({ locale }: { locale: Locale }) {
  const es = locale === "es";
  const services = servicesByLocale[locale];
  const canonicalServices = servicesByLocale.en;
  const [submitted, setSubmitted] = useState(false);

  return <>
    <iframe className="form-submit-target" name="coastal-ledger-form-target" title="" aria-hidden="true"/>
    <form className="demo-form" action="/api/contact-received" method="post" target="coastal-ledger-form-target" onSubmit={() => setSubmitted(true)}>
      <div className="form-intro"><ShieldIcon/><div><b>{es ? "Solicitud segura" : "Secure request"}</b><p>{es ? "Comparte solamente información general. No incluyas números de identificación, cuentas ni documentos confidenciales." : "Share general information only. Do not include identification numbers, account details or confidential documents."}</p></div></div>
      <div className="field-row">
        <label>{es ? "Nombre completo" : "Full Name"}<input type="text" name="name" autoComplete="name" required/></label>
        <label>{es ? "Teléfono" : "Phone"}<input type="tel" name="phone" autoComplete="tel" required/></label>
      </div>
      <label>Email<input type="email" name="email" autoComplete="email" required/></label>
      <div className="field-row">
        <label>{es ? "Servicio de interés" : "Service Interested In"}<select name="Service Interested In" defaultValue="" required><option value="" disabled>{es ? "Selecciona un servicio" : "Select a service"}</option>{serviceOrder.map((key) => <option key={key} value={canonicalServices[key].title}>{services[key].title}</option>)}</select></label>
        <label>{es ? "Persona o negocio" : "Individual or Business"}<select name="Client Type" defaultValue="" required><option value="" disabled>{es ? "Selecciona una opción" : "Select one"}</option><option value="Individual">{es ? "Persona / Familia" : "Individual / Family"}</option><option value="Business">{es ? "Negocio" : "Business"}</option></select></label>
      </div>
      <input type="hidden" name="Preferred Language" value={es ? "Spanish" : "English"}/>
      <label>{es ? "Tema de la consulta / Mensaje" : "Consultation Topic / Message"}<textarea name="Consultation Topic" rows={5} required/></label>
      <button className="button" type="submit" disabled={submitted}>{submitted ? (es ? "Solicitud enviada" : "Request sent") : (es ? "Enviar Solicitud" : "Send Request")}</button>
      {submitted && <p className="form-success" role="status" aria-live="polite">{es ? "Gracias. Recibimos tu solicitud y nuestro equipo puede dar seguimiento." : "Thank you. We received your request and our team can follow up."}</p>}
    </form>
  </>;
}
