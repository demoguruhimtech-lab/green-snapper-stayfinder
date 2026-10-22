import { createFileRoute, Link } from "@tanstack/react-router";
import { Camera, Image as ImageIcon } from "lucide-react";

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
        content:
          "Photographs of Hotel Green Snapper By Du Room will be added here, supplied directly by the hotel owner. Meanwhile, enquire about rooms and availability in Malka Ganj, Delhi.",
      },
      { property: "og:title", content: "Gallery — Hotel Green Snapper By Du Room" },
      {
        property: "og:description",
        content:
          "Real hotel photographs, supplied by the owner, coming soon. Enquire about rooms at Hotel Green Snapper By Du Room.",
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
        title="Hotel photographs will be added here"
        description={`This gallery will feature real photographs of ${HOTEL_NAME}, supplied directly by the hotel owner. No stock or placeholder photography is used on this website.`}
      />

      <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="rounded-2xl border border-dashed border-border bg-card p-10 text-center shadow-sm sm:p-16">
          <span className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-secondary text-secondary-foreground">
            <ImageIcon className="size-8" aria-hidden="true" />
          </span>
          <h2 className="mt-6 font-display text-2xl font-semibold text-foreground">
            Hotel photographs will be added here.
          </h2>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Once the owner supplies photos of the rooms, exterior and common areas, they will
            appear in this gallery with descriptive captions.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3" aria-hidden="true">
          {["Room photo coming soon", "Exterior photo coming soon", "Common area photo coming soon"].map(
            (label) => (
              <div
                key={label}
                className="hero-pattern flex h-40 items-center justify-center rounded-xl text-primary-foreground/70"
              >
                <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest">
                  <Camera className="size-4" aria-hidden="true" /> {label}
                </span>
              </div>
            ),
          )}
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
