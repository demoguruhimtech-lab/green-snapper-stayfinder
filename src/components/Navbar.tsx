import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HOTEL_NAME, HOTEL_PHONE_DISPLAY, HOTEL_PHONE_TEL } from "@/lib/hotel";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/rooms", label: "Rooms" },
  { to: "/amenities", label: "Amenities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="block leading-tight" aria-label={`${HOTEL_NAME} — home`}>
      <span
        className={`font-display text-lg font-semibold tracking-tight sm:text-xl ${
          light ? "text-primary-foreground" : "text-foreground"
        }`}
      >
        Hotel Green Snapper
      </span>
      <span
        className={`block text-[0.6rem] font-semibold uppercase tracking-[0.28em] ${
          light ? "text-primary-foreground/70" : "text-primary"
        }`}
      >
        By Du Room · Malka Ganj, Delhi
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/85">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Wordmark />

        <nav aria-label="Main navigation" className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={HOTEL_PHONE_TEL}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-primary"
          >
            <Phone className="size-4 text-primary" aria-hidden="true" />
            {HOTEL_PHONE_DISPLAY}
          </a>
          <Button asChild>
            <Link to="/booking">Check Availability</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/booking">Check Availability</Link>
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display text-lg">Hotel Green Snapper</SheetTitle>
              <SheetDescription className="sr-only">Site navigation menu</SheetDescription>
              <nav aria-label="Mobile navigation" className="mt-6 flex flex-col gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 space-y-3 border-t border-border pt-6">
                <Button asChild className="w-full">
                  <Link to="/booking" onClick={() => setOpen(false)}>
                    Check Availability
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <a href={HOTEL_PHONE_TEL}>
                    <Phone className="size-4" aria-hidden="true" /> Call {HOTEL_PHONE_DISPLAY}
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
