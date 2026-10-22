import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  CHECK_INOUT_NOTE,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  PRICE_RANGE,
  ROOM_TYPES,
  createWhatsAppLink,
} from "@/lib/hotel";

interface BookingSearch {
  room?: string;
}

export const Route = createFileRoute("/booking")({
  validateSearch: (search: Record<string, unknown>): BookingSearch => {
    const room = typeof search.room === "string" ? search.room : undefined;
    return { room: room && ROOM_TYPES.some((r) => r.id === room) ? room : undefined };
  },
  component: BookingPage,
  head: () => ({
    meta: [
      { title: "Booking Enquiry — Hotel Green Snapper By Du Room, Malka Ganj Delhi" },
      {
        name: "description",
        content:
          "Send a booking enquiry to Hotel Green Snapper By Du Room in Malka Ganj, Delhi. Share your dates, guests and preferred room — the hotel confirms availability and current rates on WhatsApp.",
      },
      { property: "og:title", content: "Booking Enquiry — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "Enquire about room availability and current rates at Hotel Green Snapper By Du Room, Malka Ganj, Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/booking" },
    ],
    links: [{ rel: "canonical", href: "/booking" }],
  }),
});

function BookingPage() {
  const { room } = Route.useSearch() as BookingSearch;

  return (
    <>
      <PageHero
        eyebrow="Booking enquiry"
        title="Check room availability"
        description="Share your stay details below. WhatsApp will open with your enquiry prefilled — the hotel team will reply to confirm availability, current rates and booking terms."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">Your stay details</h2>
            <BookingForm defaultRoom={room} className="mt-6" />
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                Prefer to talk?
              </h3>
              <div className="mt-4 flex flex-col gap-2.5">
                <Button asChild variant="outline" className="justify-start">
                  <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
                    <Phone className="size-4" aria-hidden="true" /> Call {HOTEL_PHONE_DISPLAY}
                  </a>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp the hotel
                  </a>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                About rates
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{PRICE_RANGE.note}</p>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                What happens next
              </h3>
              <ol className="mt-3 space-y-3 text-xs leading-relaxed text-muted-foreground">
                <li>
                  <span className="font-semibold text-foreground">1.</span> Your enquiry opens in
                  WhatsApp, addressed to the hotel.
                </li>
                <li>
                  <span className="font-semibold text-foreground">2.</span> The hotel team replies
                  with availability and current rates for your dates.
                </li>
                <li>
                  <span className="font-semibold text-foreground">3.</span> Any reservation is
                  confirmed only by the hotel directly — sending this enquiry does not confirm a
                  booking and no payment is taken on this website.
                </li>
              </ol>
              <p className="mt-4 border-t border-border pt-3 text-xs leading-relaxed text-muted-foreground">
                {CHECK_INOUT_NOTE}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
