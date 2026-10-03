import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return { name: "Coastal Ledger Tax & Business Services", short_name: "Coastal Ledger", description: "Clear numbers. Confident decisions.", start_url: "/", display: "standalone", background_color: "#f7f3ea", theme_color: "#15282e", icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }] };
}
