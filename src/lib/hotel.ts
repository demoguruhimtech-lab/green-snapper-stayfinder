export const HOTEL_NAME = "Hotel Green Snapper By Du Room";
export const HOTEL_CATEGORY = "2-star hotel";
export const HOTEL_ADDRESS =
  "Valmiki Mandir, 1825, Malka Ganj Road, Balmiki Mandir, Block G, Malka Ganj, Delhi, 110007, India";
export const HOTEL_PHONE_DISPLAY = "+91 91428 51651";
export const HOTEL_PHONE_TEL = "tel:+919142851651";
export const WHATSAPP_NUMBER = "919142851651";

export const REPORTED_RATING = {
  value: 2.9,
  reviews: 114,
  note: "Rating as reported on a third-party listing. It has not been independently verified.",
};

export const PRICE_RANGE = {
  min: 837,
  max: 1888,
  currency: "₹",
  note: "Indicative nightly range of approximately ₹837–₹1,888, depending on room category, dates, booking platform and availability. Final rates, taxes and fees must be confirmed directly with the hotel.",
};

export const CHECK_INOUT_NOTE =
  "Check-in and check-out times are to be confirmed with the hotel before your stay.";

export const MAPS_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4591689250888!2d77.204911011123!3d28.675908175539526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9b8f42ffff%3A0xac55b2bcedd531b2!2sHotel%20Green%20Snapper%20By%20Du%20Room!5e0!3m2!1sen!2sin!4v1792662604043!5m2!1sen!2sin";

export const DIRECTIONS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=Hotel%20Green%20Snapper%20By%20Do%20Room%2C%201825%20Malka%20Ganj%20Road%2C%20Delhi%20110007";

export interface RoomType {
  id: string;
  name: string;
  tagline: string;
  description: string;
  reported: string[];
}

export const ROOM_TYPES: RoomType[] = [
  {
    id: "standard-ac",
    name: "Standard AC Room",
    tagline: "Air-conditioned option",
    description:
      "An air-conditioned room category reported for this property. Exact bed configuration, room size and in-room facilities are subject to confirmation with the hotel before booking.",
    reported: ["Air conditioning (reported)", "Subject to confirmation"],
  },
  {
    id: "deluxe-non-ac",
    name: "Deluxe Non-AC Room",
    tagline: "Non-AC option",
    description:
      "A non-AC room category reported for this property. Confirm the current configuration, cooling arrangement and in-room facilities directly with the hotel before booking.",
    reported: ["Non-AC (reported)", "Subject to confirmation"],
  },
  {
    id: "double-balcony",
    name: "Double Room with Balcony",
    tagline: "Balcony category",
    description:
      "A double room category with a balcony, as reported in the supplied listing. Balcony availability and the exact room configuration should be confirmed with the hotel.",
    reported: ["Balcony (reported)", "Double room (reported)"],
  },
];

export function roomNameById(id: string | undefined): string | undefined {
  return ROOM_TYPES.find((room) => room.id === id)?.name;
}

export interface BookingEnquiry {
  name?: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number;
  children?: number;
  rooms?: number;
  roomType?: string;
  message?: string;
}

export function createWhatsAppLink(booking: BookingEnquiry = {}): string {
  const message = [
    "Hello Hotel Green Snapper By Du Room,",
    "I would like to enquire about room availability.",
    `Name: ${booking.name || "Not provided"}`,
    `Check-in: ${booking.checkIn || "Not selected"}`,
    `Check-out: ${booking.checkOut || "Not selected"}`,
    `Adults: ${booking.adults ?? 2}`,
    `Children: ${booking.children ?? 0}`,
    `Rooms: ${booking.rooms ?? 1}`,
    `Preferred room: ${booking.roomType || "Please suggest available options"}`,
    `Message: ${booking.message || "Please share your current rates and availability."}`,
  ].join("\n");

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function whatsappRoomEnquiry(roomName: string): string {
  return createWhatsAppLink({
    roomType: roomName,
    message: `Please share availability and current rates for the ${roomName}.`,
  });
}
