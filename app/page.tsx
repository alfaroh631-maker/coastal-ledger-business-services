import { HomePage } from "@/components/pages";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  locale: "en",
  path: "/",
  title: "Coastal Ledger Tax & Business Services",
  description: "Clear, organized tax, bookkeeping and business support for individuals and small businesses in Santa Barbara, California.",
});

export default function Page() { return <HomePage locale="en"/>; }
