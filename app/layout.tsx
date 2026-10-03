import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LangSetter } from "@/components/lang-setter";
import { site, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: site.name, template: "%s | Coastal Ledger" },
  description: "Practical tax, bookkeeping and business support for individuals and small businesses in the Santa Barbara area.",
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#15282e" };

const schema = {
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "AccountingService"],
  name: site.name,
  url: siteUrl,
  telephone: "+1-805-555-0192",
  email: site.email,
  description: "Tax, bookkeeping and business support for individuals and small businesses in the Santa Barbara area.",
  areaServed: ["Santa Barbara", "Goleta", "Montecito", "Carpinteria"],
  availableLanguage: ["English", "Spanish"],
  sameAs: [],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><LangSetter/><Header/><main id="main">{children}</main><Footer/><Script id="business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}/></body></html>;
}
