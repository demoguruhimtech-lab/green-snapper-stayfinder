# Green Snapper Stayfinder

# Complete Website Development Prompt — Hotel Green Snapper By Du Room

Act as a senior UI/UX designer, React developer, hospitality website specialist, and SEO expert. Build a complete, modern, visually impressive, mobile-responsive hotel website for **Hotel Green Snapper By Du Room**, located in Malka Ganj, Delhi, India.

The website should have a polished, contemporary hotel-booking design with elegant typography, smooth animations, premium layouts, clear room information, and a simple booking enquiry experience. It must look like a genuine hotel website, not a generic template.

## 1. ABSOLUTE RULE: NO JSON IMAGES AND NO AUTOMATIC IMAGES

**Follow this requirement throughout the entire project. Do not ignore it.**

- DO NOT use JSON images.
- DO NOT create `images.json`, `image.json`, `gallery.json`, or any JSON image mapping.
- DO NOT put image paths, image URLs, or image collections inside JSON files.
- DO NOT use Base64 images.
- DO NOT use Unsplash, Pexels, external stock photos, random URLs, or images fetched automatically from the internet.
- DO NOT generate or select hotel images automatically.
- DO NOT use unrelated hotel photographs.
- DO NOT invent filenames or import files that do not exist.
- DO NOT use any photograph unless it has actually been supplied by the website owner.
- Use only the real hotel photos supplied by the owner, imported directly from `src/assets/` using JavaScript ES module imports.
- If no photographs are supplied, build an attractive image-free design using CSS backgrounds, colors, typography, icons, borders, and neutral placeholders.
- Never replace a missing photo with a random image.
- All gallery items must reference actual owner-supplied files imported into the project.

Example implementation:

```jsx
import hotelRoom from "../assets/hotel-room.webp";
import hotelExterior from "../assets/hotel-exterior.webp";

export default function HotelPreview() {
  return (
    <section className="hotel-preview">
      <img src={hotelExterior} alt="Hotel Green Snapper exterior" />
      <img src={hotelRoom} alt="Guest room at Hotel Green Snapper" />
    </section>
  );
}
```

The filenames are examples only. Use them only if those exact files exist. Otherwise, import the real filenames supplied by the owner.

**Final verification:** Search the complete codebase for JSON-based image systems, external image URLs, fabricated file paths, and automatic image loading. Remove any such implementation. No JSON images anywhere in the project.

## 2. Official Hotel Information

Use the following supplied details consistently:

- **Hotel Name:** Hotel Green Snapper By Du Room
- **Category:** 2-star hotel
- **Address:** Valmiki Mandir, 1825, Malka Ganj Road, Balmiki Mandir, Block G, Malka Ganj, Delhi, 110007, India
- **Phone:** +91 91428 51651
- **Reported Rating:** 2.9/5 from 114 reviews
- **Indicative Nightly Price Range:** Approximately ₹837–₹1,888, depending on room category, dates, booking platform, and availability.
- **Check-in / Check-out:** Confirm with the hotel before displaying exact timings.

Room types reported in the supplied information:
- Standard AC Room.
- Deluxe Non-AC Room.
- Double Room with Balcony.

Treat these as room types to confirm with the property before publishing. Do not invent room capacities, bed sizes, room dimensions, views, or facilities.

The hotel name, address, phone number, and map location must be consistent across all pages.

## 3. Design and User Experience

Create an attractive and modern website with a professional hospitality aesthetic.

### Design direction

- Use a refined palette of forest green, warm ivory, white, charcoal, and subtle muted-gold accents.
- Use bold, elegant headings and readable body text.
- Design spacious sections, well-aligned cards, tasteful borders, and subtle shadows.
- Use smooth but lightweight animations.
- Use a premium navigation bar and prominent booking buttons.
- Create a clean, trustworthy visual hierarchy.
- Use icons for amenities and contact information.
- Ensure all sections look excellent on mobile, tablet, laptop, and desktop.
- Avoid clutter, excessive gradients, neon colors, and oversized decorative effects.

Do not force photographs into the design if the owner has not supplied them. Use a strong image-free visual style until actual hotel photographs are available.

## 4. Technology Stack

Use:

- React with Vite.
- JavaScript and JSX.
- Tailwind CSS or a consistent custom CSS design system.
- React Router for navigation if multiple routes are used.
- Reusable React components.
- Lucide React icons or another consistent icon library.
- Semantic HTML and accessible forms.

Suggested project structure:

```text
src/
  assets/
    [only actual hotel photographs supplied by the owner]
  components/
    Navbar.jsx
    Footer.jsx
    BookingForm.jsx
    RoomCard.jsx
    AmenityCard.jsx
    WhatsAppButton.jsx
  pages/
    Home.jsx
    Rooms.jsx
    Amenities.jsx
    Gallery.jsx
    About.jsx
    Contact.jsx
    Booking.jsx
  App.jsx
  main.jsx
  index.css
```

Do not create unnecessary files. Do not create a JSON-driven image system.

## 5. Homepage

Create a beautiful homepage that immediately communicates the hotel name, location, and booking options.

### Header

- Text-based Hotel Green Snapper By Du Room logo or wordmark.
- Navigation: Home, Rooms, Amenities, Gallery, About, Contact.
- Prominent “Check Availability” button.
- Click-to-call phone number.
- Responsive mobile navigation.
- Sticky header with a subtle background or shadow.

### Hero section

Create a striking hero section using the following text:

**Headline:**
“Your Stay in Malka Ganj, Delhi”

**Supporting text:**
“Explore your stay options at Hotel Green Snapper By Du Room. Contact our team for room availability, current rates, and booking assistance.”

**Primary CTA:** Check Room Availability

**Secondary CTA:** Chat on WhatsApp

Use a real hotel photograph only if supplied and imported from `src/assets/`. Otherwise, create an elegant CSS-based hero with forest-green tones, subtle shapes, typography, and a clear call to action.

Do not use external image URLs or automatically generated imagery.

### Quick booking panel

Add a prominent enquiry panel with:

- Check-in date.
- Check-out date.
- Number of adults.
- Number of children.
- Number of rooms.
- Preferred room type.
- Guest name.
- Phone number.
- Optional message.

Validate all required fields and ensure the check-out date is later than the check-in date.

### Hotel overview

Create an informative introduction to the property based on the supplied facts. Do not make unsupported claims about luxury, cleanliness, safety, awards, or guest satisfaction.

### Room previews

Show the reported room categories in attractive cards:
- Standard AC Room.
- Deluxe Non-AC Room.
- Double Room with Balcony.

Each card should have:
- Room name.
- Editable description.
- Price information only if confirmed.
- “Enquire About This Room” CTA.
- WhatsApp booking enquiry button.

Do not invent room photos, bed arrangements, occupancy limits, or facilities. If details are unconfirmed, label them as subject to confirmation.

### Amenities overview

Create an attractive grid of amenities that the hotel owner can confirm and configure. Do not present unverified amenities as guaranteed facilities.

### Location highlights

Show the hotel address and a map section. Keep the location information consistent with the supplied address and Google Maps embed.

### Booking CTA

Finish the homepage with a clear invitation:

“Planning a Stay in Delhi?”

“Contact Hotel Green Snapper By Du Room to enquire about room options, current rates, and availability.”

Buttons:
- Check Availability.
- Call Hotel.
- WhatsApp Enquiry.

## 6. Rooms Page

Build a dedicated room page with a professional layout and clear enquiry options.

Display the reported categories:

### Standard AC Room
Describe it as an AC room option, subject to confirmation of current availability and facilities.

### Deluxe Non-AC Room
Describe it as a non-AC room option, subject to confirmation of current availability and facilities.

### Double Room with Balcony
Describe it as a room category reported in the supplied listing. Confirm balcony availability and exact configuration with the hotel.

Each room card must include:
- Room category.
- Actual owner-supplied photograph if available.
- Concise description.
- Confirmed features only.
- Configurable indicative price, if the owner has approved it.
- “Enquire About This Room” button.
- “Book via WhatsApp” button.

When the user clicks a room enquiry button, prefill the selected room in the booking form and WhatsApp message.

Do not show fabricated availability or a fake “Only 2 rooms left” message.

## 7. Amenities Page

Create a clean amenities page with attractive icon cards and clear descriptions.

Only show amenities that the hotel owner has confirmed. The supplied information does not establish a complete list of hotel facilities, so create an editable amenities section and avoid claiming that Wi-Fi, parking, breakfast, air conditioning, laundry, room service, or accessibility features are available unless verified.

Include a small note inviting guests to contact the property to confirm specific facilities before booking.

## 8. Gallery Page — Owner Images Only

Build a responsive hotel gallery using actual owner-supplied photographs imported directly from `src/assets/`.

Requirements:
- Responsive grid layout.
- Consistent image aspect ratios.
- Optional lightbox to enlarge supplied photographs.
- Descriptive alt text.
- Lazy loading for gallery images.
- Keyboard-accessible controls.

**Do not use JSON to populate the gallery. Do not use external images.**

If the owner has not supplied photographs, display a beautifully designed placeholder state with text such as:

“Hotel photographs will be added here.”

Do not fill the gallery with stock photos or photographs of another hotel.

## 9. About Page

Write natural, professional content introducing Hotel Green Snapper By Du Room as a 2-star accommodation option in Malka Ganj, Delhi.

Explain that guests can contact the hotel directly to enquire about available room categories, rates, facilities, and booking details.

Do not invent:
- The founding year.
- The owner’s name.
- A company history.
- Awards or certifications.
- Unverified facilities.
- Claims that the hotel is the best or highest-rated in Delhi.

## 10. Contact Page

Display:

**Hotel Green Snapper By Du Room**

Valmiki Mandir, 1825, Malka Ganj Road, Balmiki Mandir, Block G, Malka Ganj, Delhi, 110007, India

**Phone:** +91 91428 51651

Include:
- Click-to-call button.
- WhatsApp booking enquiry button.
- Booking enquiry form.
- Google Maps embed.
- Directions button.
- Address and location information.
- A short note encouraging guests to confirm current room availability and facilities.

Use the exact supplied Google Maps embed URL:

```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.4591689250888!2d77.204911011123!3d28.675908175539526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd9b8f42ffff%3A0xac55b2bcedd531b2!2sHotel%20Green%20Snapper%20By%20Du%20Room!5e0!3m2!1sen!2sin!4v1792662604043!5m2!1sen!2sin"
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen
  loading="lazy"
  referrerpolicy="strict-origin-when-cross-origin"
  title="Hotel Green Snapper By Du Room location map">
</iframe>
```

Make the iframe responsive using a suitable container and CSS. Do not change the supplied map location.

## 11. WhatsApp Booking Enquiry Integration

The phone number for WhatsApp is:

`919142851651`

Create a reusable JavaScript function that opens WhatsApp with a prefilled booking enquiry.

Example:

```jsx
const HOTEL_PHONE = "919142851651";

function createWhatsAppLink(booking) {
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
    `Message: ${booking.message || "Please share your current rates and availability."}`
  ].join("\n");

  return `https://wa.me/${HOTEL_PHONE}?text=${encodeURIComponent(message)}`;
}
```

Adapt this function to the actual form state and validate the submitted details.

Add WhatsApp buttons to:
- Homepage hero.
- Room cards.
- Booking form.
- Contact page.
- Floating WhatsApp button.

Ensure the floating button does not obscure form controls or mobile navigation.

The website must open WhatsApp with a prefilled message. Do not claim that a booking is confirmed or a message has been sent automatically.

## 12. Call and Directions Buttons

Use the correct telephone link:

`tel:+919142851651`

Create a directions link:

`https://www.google.com/maps/dir/?api=1&destination=Hotel%20Green%20Snapper%20By%20Do%20Room%2C%201825%20Malka%20Ganj%20Road%2C%20Delhi%20110007`

Add clearly labeled:
- Call Hotel.
- Get Directions.
- Enquire on WhatsApp.

Test all links on desktop and mobile.

## 13. Pricing Display

The supplied information reports a general nightly price range of approximately ₹837–₹1,888, depending on room category, dates, booking platform, and availability.

Show this as indicative pricing only, and only if the hotel owner approves displaying third-party listing rates on the official website.

Requirements:
- Do not guarantee a rate without live pricing integration.
- Do not show fake discounts or fabricated original prices.
- Do not claim that rooms are available without checking.
- Make prices easy for the hotel owner to update.
- Add a note that the final price and availability must be confirmed directly with the hotel.
- Confirm applicable taxes, fees, and booking terms before quoting a final amount.

Do not build fake payment processing or pretend an online payment has been completed.

## 14. Guest Rating and Honest Information

The supplied listing reports a rating of 2.9/5 from 114 reviews.

Do not hide or falsify the supplied rating if you choose to display it. Do not fabricate positive testimonials or review quotes.

Do not make unsupported claims about hygiene, safety, service quality, or guest satisfaction.

Do not copy unverified review allegations into marketing copy as established facts. Instead, make the website transparent and encourage visitors to confirm current room conditions, amenities, and rates before booking.

Do not invent a higher rating or pretend that reviews were independently verified.

## 15. Functional Booking Enquiry Form

Implement a functional enquiry form containing:

- Full name.
- Phone number.
- Check-in date.
- Check-out date.
- Number of adults.
- Number of children.
- Number of rooms.
- Preferred room category.
- Special requests.

Requirements:
- Required-field validation.
- Phone-number validation.
- Check-out date must be later than check-in.
- Prevent past check-in dates.
- Accessible error messages.
- Clear loading and submission states where appropriate.
- WhatsApp handoff containing the entered information.
- A clear explanation that sending an enquiry does not itself confirm a reservation.

If no backend or reservation API is available, do not pretend enquiries have been stored in a database. Use the WhatsApp workflow as the working enquiry channel.

## 16. SEO and Local Search Optimization

Optimize the website for relevant search terms, naturally and without keyword stuffing:

- Hotel in Malka Ganj Delhi.
- Budget hotel in North Delhi.
- Hotel near Malka Ganj Road.
- Hotel Green Snapper By Du Room.
- Accommodation in Delhi 110007.

Implement:
- Unique page titles and meta descriptions.
- One clear H1 per page.
- Logical heading hierarchy.
- Descriptive internal links.
- Open Graph metadata.
- Canonical URLs when the actual domain is known.
- `sitemap.xml`.
- `robots.txt`.
- Appropriate lodging or hotel structured data using only verified facts.
- Accessible navigation.
- Descriptive alt text for real supplied images.

Do not invent a website domain, email address, or social media URLs. Do not promise guaranteed Google rankings.

## 17. Responsive Design and Performance

The complete website must work on mobile, tablet, laptop, and desktop.

Implement:
- Responsive navigation.
- Accessible buttons and forms.
- Proper spacing and typography at all screen sizes.
- No horizontal overflow.
- Fast loading and minimal unnecessary dependencies.
- Lazy loading for real supplied photographs.
- Keyboard-accessible dialogs and lightboxes.
- Visible keyboard focus states.
- Adequate contrast.
- Reduced-motion support.
- Clean, reusable code.

## 18. Final Verification Checklist

Before delivering the website, verify every point:

1. All navigation links work.
2. The design is polished and visually attractive.
3. The phone number opens the correct dialer link.
4. WhatsApp buttons use `919142851651`.
5. WhatsApp messages include the guest’s enquiry details.
6. Booking form validation works.
7. Room selection is passed into the enquiry.
8. The supplied Google Maps iframe loads responsively.
9. The directions button points to the correct address.
10. Pricing is presented as indicative, not guaranteed.
11. No false booking confirmation is shown.
12. No unsupported amenities or room details are presented as confirmed facts.
13. No fake reviews or fabricated ratings are displayed.
14. **NO JSON IMAGES ARE USED ANYWHERE.**
15. **NO `images.json`, `image.json`, OR JSON-BASED IMAGE MAPPINGS EXIST.**
16. No external stock photos, random image URLs, or automatically fetched photographs are used.
17. Every supplied photograph is imported directly from `src/assets/` using ES imports.
18. No imports reference nonexistent image files.
19. If no photographs are supplied, clean CSS-based placeholders are used.
20. The project builds without errors and works on mobile and desktop.

## Final Deliverable

Deliver the complete React website with a premium visual design, responsive pages, room enquiry workflow, WhatsApp integration, click-to-call functionality, Google Maps, directions, and essential SEO.

**NON-NEGOTIABLE FINAL INSTRUCTION: NO JSON IMAGES. NO AUTOMATIC IMAGES. NO RANDOM PHOTOS. ONLY USE THE HOTEL OWNER'S REAL PHOTOGRAPHS, IMPORTED DIRECTLY FROM `src/assets/`. IF NO PHOTOGRAPHS ARE PROVIDED, KEEP THE WEBSITE IMAGE-FREE AND USE BEAUTIFUL CSS-BASED DESIGN ELEMENTS.**

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/60d0c89e-c071-4e46-a8d0-e27dadac66d1).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
