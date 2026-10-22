import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accessibility,
  Car,
  Coffee,
  ConciergeBell,
  PlugZap,
  Shirt,
  Snowflake,
  Wifi,
} from "lucide-react";

import { AmenityCard } from "@/components/AmenityCard";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { createWhatsAppLink } from "@/lib/hotel";

export const Route = createFileRoute("/amenities")({
  component: AmenitiesPage,
  head: () => ({
    meta: [
      { title: "Amenities — Hotel Green Snapper By Du Room, Malka Ganj Delhi" },
      {
        name: "description",
        content:
          "Facilities at Hotel Green Snapper By Du Room are being confirmed with the property. Contact the hotel in Malka Ganj, Delhi to verify Wi-Fi, parking, breakfast and other amenities before booking.",
      },
      { property: "og:title", content: "Amenities — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "Confirm facilities such as Wi-Fi, parking and breakfast directly with the hotel before your stay in Malka Ganj, Delhi.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/amenities" },
    ],
    links: [{ rel: "canonical", href: "/amenities" }],
  }),
});

const AMENITY_ENQUIRIES = [
  { icon: Wifi, title: "Wi-Fi", note: "Availability and charges to be confirmed" },
  { icon: Car, title: "Parking", note: "Availability to be confirmed" },
  { icon: Coffee, title: "Breakfast", note: "Whether served, and timings, to be confirmed" },
  { icon: Snowflake, title: "Air conditioning", note: "Depends on the room category — confirm with us" },
  { icon: ConciergeBell, title: "Room service", note: "Availability to be confirmed" },
  { icon: Shirt, title: "Laundry", note: "Availability to be confirmed" },
  { icon: PlugZap, title: "Power backup", note: "Availability to be confirmed" },
  { icon: Accessibility, title: "Lift & accessibility", note: "Availability to be confirmed" },
];

function AmenitiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Amenities"
        title="Facilities, confirmed rather than promised"
        description="The supplied listing does not establish a complete facilities list for the property, so we do not present unverified amenities as guaranteed. Below are the facilities guests most often ask about."
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {AMENITY_ENQUIRIES.map((amenity) => (
            <AmenityCard
              key={amenity.title}
              icon={amenity.icon}
              title={amenity.title}
              note={amenity.note}
            />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-gold/40 bg-card p-6 shadow-sm sm:p-8">
          <h2 className="font-display text-xl font-semibold text-foreground sm:text-2xl">
            Please confirm specific facilities before booking
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Facilities can change, and some may depend on the room category or season. Contact the
            property directly and we will confirm exactly what is available for your dates — no
            assumptions, no surprises at check-in.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <a href={createWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                Ask on WhatsApp
              </a>
            </Button>
            <Button asChild variant="outline">
              <Link to="/contact">Contact the Hotel</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
