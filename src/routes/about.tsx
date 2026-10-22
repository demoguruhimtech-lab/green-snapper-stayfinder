import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone, ShieldQuestion } from "lucide-react";

import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import {
  CHECK_INOUT_NOTE,
  HOTEL_ADDRESS,
  HOTEL_CATEGORY,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  REPORTED_RATING,
  createWhatsAppLink,
} from "@/lib/hotel";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Hotel Green Snapper By Du Room, Malka Ganj Delhi" },
      {
        name: "description",
        content:
          "About Hotel Green Snapper By Du Room, a 2-star hotel on Malka Ganj Road in North Delhi 110007. Learn what we confirm openly — room categories, rates, facilities and reported ratings.",
      },
      { property: "og:title", content: "About — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "A 2-star accommodation option in Malka Ganj, Delhi. Contact the hotel directly to enquire about rooms, rates, facilities and booking details.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const CONFIRM_BEFORE_BOOKING = [
  "Available room categories for your dates",
  "Current nightly rates, taxes and fees",
  "Which facilities are available during your stay",
  "Check-in and check-out timings",
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About the hotel"
        title="A 2-star hotel in Malka Ganj, North Delhi"
        description={`${HOTEL_NAME} offers accommodation on Malka Ganj Road in the heart of North Delhi.`}
      />

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-16">
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          Where we are
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {HOTEL_NAME} is a {HOTEL_CATEGORY} located at {HOTEL_ADDRESS} The hotel sits on Malka
          Ganj Road, one of the well-known streets of North Delhi, and guests can reach the
          property easily by road.
        </p>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          How booking works here
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          This website is an enquiry channel, not a live booking engine. Guests contact the hotel
          directly — by phone or WhatsApp — to ask about available room categories, current rates,
          facilities and booking details. The hotel confirms availability, final pricing and terms
          personally, so there are no surprises between what you read here and what you are told at
          the front desk.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Room categories reported for the property include a Standard AC Room, a Deluxe Non-AC
          Room and a Double Room with Balcony. Indicative nightly rates range from approximately
          ₹837 to ₹1,888 depending on the room category, dates, booking platform and availability.
        </p>

        <div className="mt-10 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <div className="flex items-start gap-3">
            <ShieldQuestion className="mt-1 size-6 shrink-0 text-primary" aria-hidden="true" />
            <div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Ratings and information, stated openly
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A third-party listing reports a rating of {REPORTED_RATING.value}/5 from{" "}
                {REPORTED_RATING.reviews} reviews. We publish that figure exactly as reported —
                neither inflated nor hidden — and it has not been independently verified by the
                hotel. We do not publish guest testimonials, and we encourage every visitor to
                confirm current room conditions, amenities and rates with the hotel before booking.
              </p>
            </div>
          </div>
        </div>

        <h2 className="mt-12 font-display text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          What to confirm before you book
        </h2>
        <ul className="mt-5 space-y-3">
          {CONFIRM_BEFORE_BOOKING.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-foreground sm:text-base">
              <span
                className="mt-2 size-1.5 shrink-0 rounded-full bg-gold"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{CHECK_INOUT_NOTE}</p>

        <div className="mt-12 flex flex-wrap gap-3">
          <Button asChild>
            <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" /> Enquire on WhatsApp
            </a>
          </Button>
          <Button asChild variant="outline">
            <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
              <Phone className="size-4" aria-hidden="true" /> Call {HOTEL_PHONE_DISPLAY}
            </a>
          </Button>
          <Button asChild variant="ghost" className="text-primary hover:text-primary">
            <Link to="/rooms">Browse rooms →</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
