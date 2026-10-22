import { describe, expect, it } from "vitest";

import { isCheckoutAfterCheckin, isPastDate, todayISO } from "@/lib/booking";
import { WHATSAPP_NUMBER, createWhatsAppLink, whatsappRoomEnquiry } from "@/lib/hotel";

describe("WhatsApp enquiry links", () => {
  it("target the hotel's WhatsApp number", () => {
    expect(WHATSAPP_NUMBER).toBe("919142851651");
    expect(createWhatsAppLink().startsWith("https://wa.me/919142851651?text=")).toBe(true);
  });

  it("include the guest's enquiry details in the prefilled message", () => {
    const link = createWhatsAppLink({
      name: "Asha",
      checkIn: "2026-10-25",
      checkOut: "2026-10-27",
      adults: 2,
      children: 1,
      rooms: 1,
      roomType: "Standard AC Room",
      message: "Late arrival around 10 pm.",
    });
    const message = decodeURIComponent(link.split("?text=")[1]!);
    expect(message).toContain("Name: Asha");
    expect(message).toContain("Check-in: 2026-10-25");
    expect(message).toContain("Check-out: 2026-10-27");
    expect(message).toContain("Adults: 2");
    expect(message).toContain("Children: 1");
    expect(message).toContain("Rooms: 1");
    expect(message).toContain("Preferred room: Standard AC Room");
    expect(message).toContain("Message: Late arrival around 10 pm.");
  });

  it("fall back to sensible defaults when details are missing", () => {
    const message = decodeURIComponent(createWhatsAppLink().split("?text=")[1]!);
    expect(message).toContain("Adults: 2");
    expect(message).toContain("Children: 0");
    expect(message).toContain("Rooms: 1");
    expect(message).toContain("Preferred room: Please suggest available options");
  });

  it("prefill the selected room from a room card", () => {
    const link = whatsappRoomEnquiry("Double Room with Balcony");
    const message = decodeURIComponent(link.split("?text=")[1]!);
    expect(message).toContain("Preferred room: Double Room with Balcony");
  });
});

describe("booking date validation", () => {
  it("rejects past check-in dates", () => {
    expect(isPastDate("2000-01-01")).toBe(true);
  });

  it("accepts today and future check-in dates", () => {
    expect(isPastDate(todayISO())).toBe(false);
    expect(isPastDate("2099-01-01")).toBe(false);
  });

  it("requires check-out to be after check-in", () => {
    expect(isCheckoutAfterCheckin("2026-10-25", "2026-10-27")).toBe(true);
    expect(isCheckoutAfterCheckin("2026-10-27", "2026-10-25")).toBe(false);
    expect(isCheckoutAfterCheckin("2026-10-25", "2026-10-25")).toBe(false);
  });
});
