import { createFileRoute, Link } from "@tanstack/react-router";
import { BedDouble, CalendarCheck, MapPin, MessageCircle, Phone, Star } from "lucide-react";

import hotelExteriorIllustration from "@/assets/hotel-exterior-illustration.png";
import { BookingForm } from "@/components/BookingForm";
import { AmenityCard } from "@/components/AmenityCard";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import {
  CHECK_INOUT_NOTE,
  DIRECTIONS_URL,
  HOTEL_ADDRESS,
  HOTEL_CATEGORY,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  MAPS_EMBED_SRC,
  PRICE_RANGE,
  REPORTED_RATING,
  ROOM_TYPES,
  createWhatsAppLink,
} from "@/lib/hotel";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Hotel Green Snapper By Du Room — Hotel in Malka Ganj, Delhi 110007",
      },
      {
        name: "description",
        content:
          "Hotel Green Snapper By Du Room is a 2-star hotel on Malka Ganj Road, Delhi 110007. Enquire about Standard AC, Deluxe Non-AC and Double Balcony rooms, indicative rates and availability.",
      },
      {
        property: "og:title",
        content: "Hotel Green Snapper By Du Room — Hotel in Malka Ganj, Delhi 110007",
      },
      {
        property: "og:description",
        content:
          "Budget hotel accommodation in Malka Ganj, North Delhi. Contact the hotel for room availability, current rates and booking assistance.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: HOTEL_NAME,
          starRating: { "@type": "Rating", ratingValue: "2" },
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Valmiki Mandir, 1825, Malka Ganj Road, Balmiki Mandir, Block G, Malka Ganj",
            addressLocality: "Delhi",
            postalCode: "110007",
            addressCountry: "IN",
          },
          telephone: "+919142851651",
          priceRange: "₹837–₹1,888 (indicative, per night)",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: String(REPORTED_RATING.value),
            reviewCount: String(REPORTED_RATING.reviews),
          },
        }),
      },
    ],
  }),
});

function HeroSection() {
  return (
    <section className="hero-pattern text-primary-foreground">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:pb-24 lg:pt-20">
        <div className="animate-rise">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
            {HOTEL_CATEGORY} · Malka Ganj, Delhi 110007
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Your Stay in Malka Ganj, Delhi
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85">
            Explore your stay options at {HOTEL_NAME}. Contact our team for room availability,
            current rates, and booking assistance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
              <Link to="/booking">Check Room Availability</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" /> Chat on WhatsApp
              </a>
            </Button>
          </div>
          <p className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-3.5 py-1.5 text-xs text-primary-foreground/80">
            <Star className="size-3.5 text-gold" aria-hidden="true" />
            Reported rating {REPORTED_RATING.value}/5 · {REPORTED_RATING.reviews} reviews on a
            third-party listing
          </p>
        </div>

        <figure className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-primary-foreground/25 bg-background/10 shadow-xl">
          <img
            src={hotelExteriorIllustration}
            alt="Illustration of Hotel Green Snapper's multi-storey exterior and street frontage."
            className="block h-auto w-full"
            width={324}
            height={312}
            fetchPriority="high"
          />
          <figcaption className="px-4 py-3 text-center text-xs text-primary-foreground/80">
            Illustration of the hotel exterior
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

function QuickBookingPanel() {
  return (
    <section aria-label="Booking enquiry" className="relative z-10 mx-auto -mt-10 max-w-6xl px-4 sm:px-6">
      <div className="rounded-2xl border border-border bg-card p-6 shadow-lg sm:p-8">
        <h2 className="font-display text-2xl font-semibold text-foreground">Plan your stay</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Share your dates and preferences — we will confirm availability and current rates with
          you on WhatsApp.
        </p>
        <BookingForm className="mt-6" />
      </div>
    </section>
  );
}

function OverviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Hotel overview
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
            A straightforward stay on Malka Ganj Road
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {HOTEL_NAME} is a {HOTEL_CATEGORY} located at Valmiki Mandir, 1825, Malka Ganj Road, in
            the Malka Ganj area of North Delhi (PIN 110007). Guests can contact the hotel directly
            to enquire about available room categories, current rates, facilities and booking
            details.
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Category
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">{HOTEL_CATEGORY}</dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Location
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                Malka Ganj, Delhi 110007
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Booking
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                Enquiry-based via call or WhatsApp
              </dd>
            </div>
            <div className="rounded-xl border border-border bg-card p-4">
              <dt className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Check-in / check-out
              </dt>
              <dd className="mt-1 text-sm font-semibold text-foreground">
                To be confirmed with the hotel
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
          <h3 className="font-display text-xl font-semibold text-foreground">
            Ratings, stated plainly
          </h3>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-5xl font-semibold text-foreground">
              {REPORTED_RATING.value}
            </span>
            <span className="text-sm text-muted-foreground">/ 5 · {REPORTED_RATING.reviews} reviews</span>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            This is the rating reported on a third-party listing. We publish it as reported rather
            than hiding it, and it has not been independently verified by the hotel.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Every guest is encouraged to confirm current room conditions, facilities and rates with
            the hotel directly before booking.
          </p>
        </div>
      </div>
    </section>
  );
}

function RoomsPreviewSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              Room categories
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
              Rooms reported at the property
            </h2>
          </div>
          <Link
            to="/rooms"
            className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
          >
            View all rooms →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOM_TYPES.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
        <p className="mt-8 rounded-xl border border-border bg-card px-4 py-3 text-xs leading-relaxed text-muted-foreground">
          {PRICE_RANGE.note}
        </p>
      </div>
    </section>
  );
}

function AmenitiesPreviewSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Facilities</p>
      <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
        Confirmed with the hotel, before you book
      </h2>
      <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
        The property's complete facilities list is being finalised with the hotel owner. Rather
        than promising unverified amenities, we invite you to ask us directly about any facility
        that matters to your stay.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <AmenityCard icon={CalendarCheck} title="Check-in & check-out times" />
        <AmenityCard icon={BedDouble} title="In-room facilities" />
        <AmenityCard icon={MessageCircle} title="Wi-Fi & connectivity" />
        <AmenityCard icon={Phone} title="Front desk services" />
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Button asChild variant="outline">
          <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="size-4" aria-hidden="true" /> Ask about a facility
          </a>
        </Button>
        <Button asChild variant="ghost" className="text-primary hover:text-primary">
          <Link to="/amenities">See the amenities page</Link>
        </Button>
      </div>
    </section>
  );
}

function LocationSection() {
  return (
    <section className="bg-secondary/60">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">Location</p>
        <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-foreground">
          Find us on Malka Ganj Road
        </h2>
        <div className="mt-8 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden="true" />
              <address className="text-sm not-italic leading-relaxed text-foreground">
                {HOTEL_ADDRESS}
              </address>
            </div>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{CHECK_INOUT_NOTE}</p>
            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <Button asChild className="flex-1">
                <a
                  href={DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get directions to the hotel on Google Maps"
                >
                  Get Directions
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1">
                <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
                  <Phone className="size-4" aria-hidden="true" /> Call Hotel
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
              style={{ border: 0, width: "100%", height: "100%", minHeight: 320 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingCtaSection() {
  return (
    <section className="hero-pattern text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold tracking-tight sm:text-4xl">
          Planning a Stay in Delhi?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-primary-foreground/80 sm:text-base">
          Contact {HOTEL_NAME} to enquire about room options, current rates, and availability.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-background text-foreground hover:bg-background/90">
            <Link to="/booking">Check Availability</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
              <Phone className="size-4" aria-hidden="true" /> Call Hotel
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
          >
            <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp Enquiry
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <HeroSection />
      <QuickBookingPanel />
      <OverviewSection />
      <RoomsPreviewSection />
      <AmenitiesPreviewSection />
      <LocationSection />
      <ClosingCtaSection />
    </>
  );
}
