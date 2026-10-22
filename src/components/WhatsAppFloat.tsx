import { MessageCircle } from "lucide-react";

import { createWhatsAppLink } from "@/lib/hotel";

export function WhatsAppFloat() {
  return (
    <a
      href={createWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with the hotel on WhatsApp"
      className="fixed bottom-4 right-4 z-40 flex size-12 items-center justify-center rounded-full bg-forest text-primary-foreground shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-forest"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}
