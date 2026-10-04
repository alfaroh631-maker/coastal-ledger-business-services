"use client";

import Script from "next/script";
import type { Locale } from "@/lib/site";

const calendarUrl = "https://link.mganexusgo.com/widget/booking/3hACV4crXn29Tlqv0Q7S";

export function BookingCalendar({ locale }: { locale: Locale }) {
  const es = locale === "es";

  return <div className="booking-calendar">
    <div className="booking-calendar-heading">
      <span>{es ? "RESERVA EN LÍNEA" : "ONLINE BOOKING"}</span>
      <p>{es ? "Selecciona una fecha y hora disponibles." : "Choose an available date and time."}</p>
    </div>
    <iframe
      src={calendarUrl}
      allow="payment"
      scrolling="no"
      id={`3hACV4crXn29Tlqv0Q7S-${locale}`}
      title={es ? "Calendario para agendar una consulta" : "Consultation booking calendar"}
    />
    <Script src="https://link.mganexusgo.com/js/form_embed.js" strategy="afterInteractive"/>
  </div>;
}
