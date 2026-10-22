import { Link } from "@tanstack/react-router";
import { MapPin, MessageCircle, Phone } from "lucide-react";

import { Wordmark } from "@/components/Navbar";
import {
  HOTEL_ADDRESS,
  HOTEL_NAME,
  HOTEL_PHONE_DISPLAY,
  HOTEL_PHONE_TEL,
  REPORTED_RATING,
  createWhatsAppLink,
} from "@/lib/hotel";

const QUICK_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
  { to: "/booking", label: "Booking Enquiry" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="hero-pattern text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <Wordmark light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/75">
            A {`2-star`} hotel on Malka Ganj Road, Delhi. Enquire directly with our team for room
            availability, current rates and booking assistance.
          </p>
          <p className="mt-4 text-xs text-primary-foreground/60">
            Reported rating: {REPORTED_RATING.value}/5 · {REPORTED_RATING.reviews} reviews on a
            third-party listing.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
            Explore
          </h2>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
            {QUICK_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-primary-foreground/60">
            Contact
          </h2>
          <address className="mt-4 flex items-start gap-2 text-sm not-italic text-primary-foreground/80">
            <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
            {HOTEL_ADDRESS}
          </address>
          <a
            href={HOTEL_PHONE_TEL}
            className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-gold"
          >
            <Phone className="size-4 text-gold" aria-hidden="true" /> {HOTEL_PHONE_DISPLAY}
          </a>
          <div className="mt-4">
            <a
              href={createWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground transition-colors hover:text-gold"
            >
              <MessageCircle className="size-4 text-gold" aria-hidden="true" /> Enquire on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-6xl px-4 py-5 sm:px-6">
          <p className="text-xs leading-relaxed text-primary-foreground/60">
            © {year} {HOTEL_NAME}. Rates and availability shown anywhere on this site are
            indicative only and must be confirmed directly with the hotel. Sending an enquiry does
            not confirm a reservation.
          </p>
        </div>
      </div>
    </footer>
  );
}
