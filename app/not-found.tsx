import Link from "next/link";

export default function NotFound() {
  return <section className="not-found"><div className="container"><span>404</span><p className="eyebrow"><i/>Page not found · Página no encontrada</p><h1>This page is not in the ledger.</h1><p>No pudimos encontrar esta página. Puedes regresar al inicio en inglés o español.</p><div><Link className="button" href="/">English Home</Link><Link className="button button-secondary" href="/es">Inicio en Español</Link></div></div></section>;
}
