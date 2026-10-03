export type Locale = "en" | "es";

export const siteUrl = "https://coastal-ledger-business-services.vercel.app";

export const site = {
  name: "Coastal Ledger Tax & Business Services",
  shortName: "Coastal Ledger",
  phoneDisplay: "(805) 555-0192",
  phoneHref: "tel:+18055550192",
  email: "hello@coastalledger.com",
  serviceArea: "Santa Barbara, Goleta, Montecito, Carpinteria and surrounding communities",
};

export const routePairs = [
  ["/", "/es"],
  ["/services", "/es/servicios"],
  ["/services/personal-tax-preparation", "/es/servicios/preparacion-de-impuestos-personales"],
  ["/services/business-tax-preparation", "/es/servicios/preparacion-de-impuestos-para-negocios"],
  ["/services/tax-planning", "/es/servicios/planificacion-fiscal"],
  ["/services/bookkeeping-accounting", "/es/servicios/contabilidad-bookkeeping"],
  ["/services/payroll-services", "/es/servicios/servicios-de-nomina"],
  ["/services/business-formation", "/es/servicios/formacion-de-negocios"],
  ["/services/irs-representation-tax-resolution", "/es/servicios/representacion-ante-el-irs-y-resolucion-fiscal"],
  ["/who-we-help", "/es/a-quienes-ayudamos"],
  ["/resources", "/es/recursos"],
  ["/about", "/es/nosotros"],
  ["/reviews", "/es/resenas"],
  ["/faq", "/es/preguntas-frecuentes"],
  ["/contact", "/es/contacto"],
  ["/book", "/es/agendar"],
  ["/privacy-policy", "/es/politica-de-privacidad"],
  ["/terms-of-service", "/es/terminos-de-servicio"],
] as const;

export function localePath(pathname: string, target: Locale) {
  const pair = routePairs.find(([en, es]) => en === pathname || es === pathname);
  if (pair) return target === "en" ? pair[0] : pair[1];
  return target === "en" ? "/" : "/es";
}

export function getAlternates(pathname: string) {
  const pair = routePairs.find(([en, es]) => en === pathname || es === pathname) ?? routePairs[0];
  return {
    canonical: `${siteUrl}${pathname}`,
    languages: {
      "en-US": `${siteUrl}${pair[0]}`,
      "es-US": `${siteUrl}${pair[1]}`,
      "x-default": `${siteUrl}${pair[0]}`,
    },
  };
}
