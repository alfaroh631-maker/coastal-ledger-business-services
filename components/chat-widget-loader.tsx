"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const WIDGETS = {
  en: "6ac1f78dd2e323137435d0ea",
  es: "6ac1f85482099df3eedd815d",
} as const;

export function ChatWidgetLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const widgetId = pathname.startsWith("/es") ? WIDGETS.es : WIDGETS.en;
    const current = document.querySelector<HTMLScriptElement>("script[data-coastal-ledger-chat]");

    if (current?.dataset.widgetId === widgetId) return;
    if (current && current.dataset.widgetId !== widgetId) {
      window.location.reload();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://widgets.leadconnectorhq.com/loader.js";
    script.dataset.resourcesUrl = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
    script.dataset.widgetId = widgetId;
    script.dataset.coastalLedgerChat = "true";
    document.body.appendChild(script);
  }, [pathname]);

  return null;
}
