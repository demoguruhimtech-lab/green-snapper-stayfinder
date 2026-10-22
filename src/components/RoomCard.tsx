import { Link } from "@tanstack/react-router";
import { BedDouble, MessageCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PRICE_RANGE, whatsappRoomEnquiry, type RoomType } from "@/lib/hotel";

interface RoomCardProps {
  room: RoomType;
  detailed?: boolean;
}

export function RoomCard({ room, detailed = false }: RoomCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm">
      <div className="hero-pattern flex h-36 items-center justify-center" aria-hidden="true">
        <BedDouble className="size-12 text-primary-foreground/80" />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-semibold text-foreground">{room.name}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
          {room.tagline}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{room.description}</p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {room.reported.map((feature) => (
            <li
              key={feature}
              className="rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              {feature}
            </li>
          ))}
        </ul>

        {detailed ? (
          <p className="mt-4 rounded-md bg-muted px-3 py-2.5 text-xs leading-relaxed text-muted-foreground">
            <span className="font-semibold text-foreground">Rates on request.</span>{" "}
            {PRICE_RANGE.note}
          </p>
        ) : null}

        <div className="mt-auto flex flex-col gap-2 pt-5 sm:flex-row">
          <Button asChild className="flex-1">
            <Link to="/booking" search={{ room: room.id }}>
              Enquire About This Room
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex-1">
            <a
              href={whatsappRoomEnquiry(room.name)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Book the ${room.name} via WhatsApp`}
            >
              <MessageCircle className="size-4" aria-hidden="true" /> Book via WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </article>
  );
}
