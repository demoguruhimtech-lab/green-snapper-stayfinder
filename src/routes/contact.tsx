import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { BookingForm } from "@/components/BookingForm";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  CHECK_INOUT_NOTE,
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  MAPS_EMBED_SRC,
  createWhatsAppLink,
} from "@/lib/hotel";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — Hotel Green Snapper By Du Room, Malka Ganj Delhi 110007" },
      {
        name: "description",
        content:
          "Contact Hotel Green Snapper By Du Room at Valmiki Mandir, 1825, Malka Ganj Road, Delhi 110007. Call +91 91428 51651, send a WhatsApp enquiry or get directions on Google Maps.",
      },
      { property: "og:title", content: "Contact — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "Call, WhatsApp or visit Hotel Green Snapper By Du Room on Malka Ganj Road, Delhi 110007.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get in touch with the hotel"
        description="Call, message on WhatsApp or send an enquiry — the hotel team will confirm room availability, current rates and facilities directly with you."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid items-start gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <h2 className="font-display text-2xl font-semibold text-foreground">{HOTEL_NAME}</h2>
            <address className="mt-4 flex items-start gap-3 text-sm not-italic leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              {HOTEL_ADDRESS}
            </address>
            <a
              href={HOTEL_PHONE_TEL}
              className="mt-4 flex items-center gap-3 text-sm font-semibold text-foreground transition-colors hover:text-primary"
            >
              <Phone className="size-4 text-primary" aria-hidden="true" /> {HOTEL_PHONE_DISPLAY}
            </a>
            <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
              Please confirm current room availability and facilities with the hotel before
              booking. {CHECK_INOUT_NOTE}
            </p>
            <div className="mt-6 grid gap-2.5 sm:grid-cols-2">
              <Button asChild>
                <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
                  <Phone className="size-4" aria-hidden="true" /> Call Hotel
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp
                </a>
              </Button>
              <Button asChild variant="outline" className="sm:col-span-2">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to the hotel on Google Maps"
                >
                  <MapPin className="size-4" aria-hidden="true" /> Get Directions
                </a>
              </Button>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
            <iframe
              src={MAPS_EMBED_SRC}
              title="Hotel Green Snapper By Du Room location map"
              width="600"
              height="450"
              style={{ border: 0, width: "100%", height: "100%", minHeight: 420 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>

        <div className="mt-14 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-foreground">
            Send a booking enquiry
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Fill in your stay details and WhatsApp will open with your enquiry prefilled for the
            hotel team.
          </p>
          <BookingForm className="mt-6 max-w-3xl" />
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Looking for room options first?{" "}
          <Link to="/rooms" className="font-semibold text-primary underline-offset-4 hover:underline">
            Browse the rooms page
          </Link>
          .
        </p>
      </section>
    </>
  );
}
