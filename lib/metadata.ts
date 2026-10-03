import type { Metadata } from "next";
import { getAlternates, site, siteUrl, type Locale } from "@/lib/site";

export function pageMetadata({ locale, path, title, description }: { locale: Locale; path: string; title: string; description: string }): Metadata {
  const fullTitle = title === site.name ? title : `${title} | Coastal Ledger`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: getAlternates(path),
    openGraph: {
      title: fullTitle,
      description,
      url: `${siteUrl}${path}`,
      siteName: site.name,
      locale: locale === "en" ? "en_US" : "es_US",
      type: "website",
      images: [{ url: "/images/hero.webp", width: 1600, height: 1067, alt: "Coastal Ledger Tax & Business Services" }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: ["/images/hero.webp"] },
  };
}
