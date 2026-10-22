import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera } from "lucide-react";

import hotelExteriorIllustration from "@/assets/hotel-exterior-illustration.png";
import { PageHero } from "@/components/PageHero";
import { Button } from "@/components/ui/button";
import { HOTEL_NAME } from "@/lib/hotel";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: "Gallery — Hotel Green Snapper By Du Room, Malka Ganj Delhi" },
      {
        name: "description",
        content: `View an illustration of ${HOTEL_NAME}'s exterior. Photographs of rooms and common areas will be added when supplied.`,
      },
      { property: "og:title", content: "Gallery — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "An illustration of the hotel exterior, with room and common-area photographs to come.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="A look at the hotel exterior"
        description={`See an illustration of ${HOTEL_NAME}. Photographs of the rooms and common areas will be added when available.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="aspect-square bg-muted">
              <img
                src={hotelExteriorIllustration}
                alt="Illustration of Hotel Green Snapper's multi-storey exterior with its sign and street frontage."
                className="h-full w-full object-contain"
                width={324}
                height={312}
                loading="lazy"
              />
            </div>
            <figcaption className="p-4">
              <h2 className="font-display text-lg font-semibold text-foreground">
                Hotel exterior illustration
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                An illustration of the hotel exterior, not a photograph.
              </p>
            </figcaption>
          </figure>

          {["Room photographs coming soon", "Common-area photographs coming soon"].map((label) => (
            <div
              key={label}
              className="flex min-h-[280px] flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card p-8 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
                <Camera className="size-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-lg font-semibold text-foreground">{label}</h2>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                Photographs will be added when they are supplied for the website.
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/booking">Enquire About Rooms</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
