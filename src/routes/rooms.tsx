import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Phone } from "lucide-react";

import hotelRoomInterior from "@/assets/hotel-room-interior.png";
import { PageHero } from "@/components/PageHero";
import { RoomCard } from "@/components/RoomCard";
import { Button } from "@/components/ui/button";
import {
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  PRICE_RANGE,
  ROOM_TYPES,
  createWhatsAppLink,
} from "@/lib/hotel";

export const Route = createFileRoute("/rooms")({
  component: RoomsPage,
  head: () => ({
    meta: [
      { title: "Rooms & Rates — Hotel Green Snapper By Du Room, Malka Ganj Delhi" },
      {
        name: "description",
        content:
          "Explore reported room categories at Hotel Green Snapper By Du Room: Standard AC Room, Deluxe Non-AC Room and Double Room with Balcony. Enquire about availability and indicative rates in Malka Ganj, Delhi.",
      },
      { property: "og:title", content: "Rooms & Rates — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "Standard AC, Deluxe Non-AC and Double Balcony rooms at a 2-star hotel on Malka Ganj Road, Delhi 110007. Enquire on WhatsApp or by phone.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/rooms" },
    ],
    links: [{ rel: "canonical", href: "/rooms" }],
  }),
});

function RoomsPage() {
  return (
    <>
      <PageHero
        eyebrow="Rooms & Rates"
        title="Room categories at Hotel Green Snapper"
        description="The categories below are reported for the property. Room configuration, in-room facilities and current rates should be confirmed with the hotel before booking."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <figure className="mb-8 grid overflow-hidden rounded-2xl border border-border bg-card shadow-sm lg:grid-cols-[1.15fr_0.85fr]">
          <div className="aspect-[4/3] bg-muted lg:aspect-auto lg:min-h-[360px]">
            <img
              src={hotelRoomInterior}
              alt="Hotel room with a double bed, blue upholstered headboard and bedding, and light walls."
              className="h-full w-full object-cover"
              width={1360}
              height={1020}
              fetchPriority="high"
            />
          </div>
          <figcaption className="flex flex-col justify-center p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Room interior
            </p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-foreground">
              A look inside the hotel
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              This supplied room photo gives a glimpse of the interior. Room category, furnishings,
              configuration and facilities may vary; please confirm details with the hotel before
              booking.
            </p>
          </figcaption>
        </figure>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ROOM_TYPES.map((room) => (
            <RoomCard key={room.id} room={room} detailed />
          ))}
        </div>

        <p className="mt-10 rounded-xl border border-border bg-card px-5 py-4 text-xs leading-relaxed text-muted-foreground sm:text-sm">
          {PRICE_RANGE.note} No availability is displayed in real time on this website — the hotel
          confirms live availability directly.
        </p>

        <div className="hero-pattern mt-10 rounded-2xl p-8 text-primary-foreground sm:p-10">
          <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Not sure which room suits your stay?
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-primary-foreground/80">
            Contact {HOTEL_NAME} and our team will suggest available options for your dates and
            budget.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-background text-foreground hover:bg-background/90">
              <Link to="/booking">Start an Enquiry</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" aria-hidden="true" /> WhatsApp Enquiry
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <a href={HOTEL_PHONE_TEL} aria-label={`Call the hotel at ${HOTEL_PHONE_DISPLAY}`}>
                <Phone className="size-4" aria-hidden="true" /> Call Hotel
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
