import type { MetadataRoute } from "next";
import { routePairs, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return routePairs.flatMap(([en, es]) => [
    { url: `${siteUrl}${en}`, lastModified: now, changeFrequency: en === "/" ? "weekly" as const : "monthly" as const, priority: en === "/" ? 1 : en.includes("services") ? 0.8 : 0.7, alternates: { languages: { en: `${siteUrl}${en}`, es: `${siteUrl}${es}` } } },
    { url: `${siteUrl}${es}`, lastModified: now, changeFrequency: es === "/es" ? "weekly" as const : "monthly" as const, priority: es === "/es" ? 0.9 : es.includes("servicios") ? 0.8 : 0.7, alternates: { languages: { en: `${siteUrl}${en}`, es: `${siteUrl}${es}` } } },
  ]);
}
