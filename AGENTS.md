<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Site architecture
- All hotel facts (name, address, phone, WhatsApp number, rating, price range, room types, map embed, directions URL) live only in `src/lib/hotel.ts`; pages import from there so facts stay consistent. Why: the brief requires name/address/phone/map consistency across every page.
- The site is intentionally image-free (CSS patterns, icons, typography) because the owner has supplied no photos; real photos must be imported from `src/assets/` when supplied. No JSON image mappings, stock photos, or external image URLs. Why: hard requirement from the owner's brief.
- Enquiries are a WhatsApp handoff (`createWhatsAppLink` in `src/lib/hotel.ts`) with date validation in `src/lib/booking.ts` (covered by `src/test/booking.test.ts`). Never render a booking confirmation or payment step. Why: no booking backend exists.
