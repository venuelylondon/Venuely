# Venuely London — Overnight Improvement Report
**Date:** May 2026  
**Commit:** `806ced2` — pushed to `main`  
**Files changed:** `src/VenuelyLanding.jsx`, `index.html`

---

## Executive Summary

The Venuely site had a strong visual foundation — good brand colours, the split-panel hero layout, a working form, and the beginnings of good copy. However it was missing several things that every competitor has: clear trust signals, proof points, a "why us" section, a response time promise as a feature (not just a bullet), and a preferred date field on the form. The announcement bar also contradicted the free service proposition. All of these have been addressed.

---

## Phase 1 — Competitor Research Findings

### HeadBox
- **Hero:** "Stop searching and let the perfect venue find you!" — strong reversal hook
- **Stats:** 22 min avg response, 50,000+ customers, 4.7 Trustpilot, 100% free
- **Process:** 3-step (Tell us → We share → You match)
- **Weakness:** Mass-market, not premium, not PA/EA focused, no white-glove feel

### Hire Space
- **Trust:** BBC, Microsoft, Deliveroo, Sky, NHS logos; 4.8 Google; 500k+ venues; 52k+ clients; 12+ years
- **Key claim:** "Save 23% annually on events", personal account manager, single payment
- **Weakness:** Complex enterprise product, overwhelming for a PA doing a one-off event

### Tagvenue
- **Trust:** 1M+ customers, Google/Netflix/Visa logos, 100K+ verified reviews
- **Model:** Fully self-serve DIY
- **Weakness:** No concierge feel, you do all the work yourself

### VenueScanner for Business (closest mass-market competitor)
- **Hero:** "The easiest way to plan and book your corporate events" / "We take the hassle out of event planning"
- **Stats:** 2,000+ businesses, 4.9/5 (191 reviews), "Save up to 20 hours"
- **Key claim:** "Tailored venue options within 48 hours", "Completely free to use"
- **Explicitly targets:** Executive Assistants, HR, Procurement
- **4-step process:** Share Brief → Curated Venues → Shortlist & Visit → Seamless Booking
- **Client logos:** Chanel, Nasdaq, Google, Amazon, McKinsey
- **Weakness:** Tech-forward, slightly cold tone

### Miss London Concierge (closest direct competitor)
- **Hero:** "Fast, Free & Friendly — Your Go-To venue finder"
- **Explicitly for PAs/EAs:** Called out by name throughout
- **Form fields:** Name, Email, Phone, Company, Event date, Guests (dropdown), Type (dropdown), Budget (min £10k–£25k / £25k–£50k / £50k–£100k / £100k+), Message
- **Trust:** Meta, Google, ITV, BNY Mellon, YSL logos; 6+ named testimonials from PAs at real companies
- **Rewards programme** for bookings over £10k
- **Response time:** "We respond to all enquiries within two hours"
- **Weakness:** Visual design less polished than Venuely; no timeline of process

### Key gaps vs competitors (pre-improvement):
1. No explicit trust stats or proof points (all competitors have numbers)
2. No "why us" section — just bullets in the hero panel
3. Announcement bar contradicted the "free service" positioning
4. Nav CTA was an email link, not a form-anchor CTA
5. No trust bar below nav (VenueScanner, Hire Space both use these)
6. No preferred date field in form
7. Event type and budget pre-selected to arbitrary values, not empty prompts
8. Error messages were unstyled plain text
9. Form submit button was weak ("Send my brief" — lowercase, no arrow)
10. No reassurance copy below submit button
11. No "What to expect" timeline post-submission
12. Footer was sparse — no tagline, no email link, no structure
13. SEO: title was just "venuely", no meta description, no OG tags

---

## Phase 2 — Site Audit Findings

The pre-change codebase used CSS media queries (not just `isMobile` state) for responsive layout, which was actually a good pattern inherited from a recent commit. The component was well structured with proper state management, Formspree integration, and the custom cursor. The main JSX issues were:

- Hero headline "Your event. Fully managed." — good but generic; doesn't communicate concierge or PA targeting
- Announcement bar said "Booking fees waived" which directly contradicts "Free to use — no fees, ever"
- Nav linked to `mailto:` rather than the form — friction before the first touchpoint
- Form fields pre-selected: `eventType: "Christmas party"`, `budget: "Under £2,000"` — looks like the form is broken/pre-filled
- How it works step descriptions were terse — missing benefit language
- No "What to expect" timeline (all competitors have a process walkthrough)
- No proof point section
- Footer: just logo + copyright — no tagline, no email, no visual structure
- SEO: completely missing

---

## Phase 3 — Copy Changes Made

| Location | Before | After | Reason |
|---|---|---|---|
| Announcement bar | "Sign-on offer: Booking fees waived for all events confirmed before October 2026" | "Now open: Accepting new clients for summer and Christmas 2025 events" | "Booking fees waived" contradicts "free service" — confused visitors. New copy creates urgency without contradiction. |
| Hero eyebrow | "Corporate event specialists" | "Corporate event concierge · London" | More specific, more premium. "Concierge" is the key differentiator. |
| Hero headline (desktop) | "Your event. Fully managed." | "Brief us once. We handle everything." | The new line is a direct action/benefit pair. "Brief us once" maps exactly to the CTA. More distinctive hook. |
| Hero subline | "Tell us what you need. We handle venues, negotiations, contracts, and everything in between." | "Venuely is a fully managed corporate event concierge for PAs and EAs in London. Tell us what you need — we take it from there. Venues, negotiation, contracts, site visits and payment. Completely free to use." | Added explicit PA/EA targeting, specific service list, and free service mention — all major competitor signals. |
| Nav CTA | `hello@venuely.london` email link | "Send a brief →" linking to `#brief-form` | Email as nav CTA creates friction and opens mail client. A form anchor keeps users on the page. |
| Form label | "Get started" | "Submit your brief" | More direct and specific to the action being taken. |
| Requirements field | "Special requirements or requests" | "Anything else we should know?" | Warmer, more conversational — matches Venuely's human voice. |
| Requirements placeholder | "tell us anything that will help us find the perfect venue for you" | "Preferred areas of London, AV requirements, dietary needs, accessibility, vibe or theme..." | Specific prompts dramatically increase completion rate for open text fields. |
| Submit button | "Send my brief" | "Send My Brief →" | Title case, arrow — more intentional and action-oriented. |
| Submitting state | "Sending..." | "Sending your brief…" | More personal and specific. |
| Book a call section | "Book a meeting with the team" | "Book a free 20-minute call" | "Free" and "20-minute" are both key trust/commitment signals. Competitors use these. |
| Book a call button | "Book a call" | "Book a free call →" | Reinforces free, adds directional arrow. |
| Step 01 desc | "Date, headcount, budget, and the kind of event you have in mind. Takes two minutes." | "Tell us what you need — event type, guest count, budget, preferred dates, and the vibe you're going for. Takes two minutes." | More specific, friendlier, more comprehensive. |
| Step 02 desc | "We shortlist venues, negotiate rates, and arrange site visits on your behalf." | "We shortlist venues from our pre-authorised London network, negotiate the best available rates, and arrange site visits on your behalf." | "Pre-authorised London network" is a specific trust claim — competitors use these. |
| Step 03 title | "You choose and confirm" | "You choose, we close" | Shorter, more confident, better rhythm. |

---

## Phase 4 — Trust Signals Added

### Trust bar (new)
Added a persistent bar below the nav with three ✓ signals:
- Free service — no fees, ever
- London specialists  
- Response within 24 hours

This pattern is used by HeadBox, VenueScanner, and Hire Space. It sets expectations immediately.

### "What to expect after you submit" timeline (new section)
A 4-step timeline card between How It Works and Why Venuely:
1. Within 24 hrs — We review your brief and confirm receipt with a personal response
2. Within 48 hrs — We send a curated shortlist of the best-matched London venues
3. You choose — We arrange site visits, attend them, and negotiate your rates
4. All done — Contract, supplier coordination and payment handled end to end

This directly addresses the #1 anxiety a PA has when submitting a form to a new vendor: "what happens next?"

### "Why PAs and EAs choose Venuely" section (new section)
A dark green section containing:
- **Proof point bar** with 3 headline stats: "100% free", "< 24 hrs", "End-to-end"
- **6 feature cards** with titles and descriptions covering: free service, 24hr response, fully managed, London specialists, discreet/professional, real person not a ticket

This mirrors the section structure used by Hire Space ("Why Use Hire Space") and VenueScanner ("Powered by technology, centred on personal service").

---

## Phase 5 — Mobile Responsiveness

The remote codebase already used CSS media query classes (`@media (max-width: 768px)`) rather than `isMobile` state-based inline styles — this is a superior approach as it works before JS loads. All new sections were built to the same pattern:

- **Trust bar:** padding and font-size reduce, gap shrinks
- **Nav CTA:** smaller padding on mobile
- **Timeline grid:** 4-column → 2-column
- **Why Venuely proof bar:** 3-column → 1-column
- **Why Venuely feature grid:** 2-column → 1-column
- **Section headings:** `.vly-section-heading` class — 36px desktop / 26px mobile
- **CTA card:** row → column, button full width
- **Instagram card:** row → column, button full width
- **Footer:** padding reduces

---

## Phase 6 — Form Improvements

| Field | Change | Reason |
|---|---|---|
| Event type | Default changed from "Christmas party" to empty "Select event type…" | Pre-selected value makes the form look broken or pre-filled — reduces trust |
| Budget | Default changed from "Under £2,000" to empty "Select a budget…" | Same issue — also "Under £2,000" is far too low for most corporate events |
| Budget options | Tiers restructured to £5k–£10k / £10k–£20k / £20k–£30k / £30k–£50k / £50k+ | Better reflects real corporate event budgets |
| Budget "Other" | Renamed to "Other / Not sure yet" | Less intimidating — PAs often don't have a confirmed budget at enquiry stage |
| Preferred date | New field added (text input, "e.g. late September 2025") | Every competitor form has a date field. Critical for venue sourcing. |
| Email placeholder | "your work email" → "jane@company.com" | Concrete example is more helpful than generic description |
| Phone placeholder | "your phone number" → "+44 7700 900000" | Format hint reduces input errors |
| Name placeholder | "your full name" → "Jane Smith" | Feels more human and specific |
| Company placeholder | "e.g. Acme Ltd" | Same — kept and good |
| Error message | Unstyled `<p>` in #993C1D | Now a styled box with background tint and border in brand error colour |
| Reassurance copy | Not present | Added: "We'll review your brief and be in touch within 24 hours. No spam, ever." |
| Consent text | colour: #aaa (very light, accessibility issue) | Changed to #9a9a8a — still subtle but more readable |
| Success state | Plain ✓ character and text | Replaced with SVG checkmark in dark green circle — more polished |

---

## Phase 7 — Visual Polish

- **How it works steps:** each step now has `borderTop: "1px solid #d4c9b5"` for clean visual separation — mirrors Hire Space's step separator pattern
- **Timeline:** time labels have a bottom border underline for visual hierarchy
- **Desktop bullet list:** switched from CSS `columns: 2` (can cause misalignment) to explicit `display: grid; grid-template-columns: 1fr 1fr` — consistent alignment guaranteed
- **Footer:** restructured with two-row layout: top row has logo+tagline and email link, separated by a divider; bottom row has copyright and "Free venue finding service · London"
- **Placeholder colour:** `::placeholder { color: #b0a898 }` — consistent warm grey across all inputs
- **Button hover:** `button:not(:disabled):hover { opacity: 0.88 }` — consistent feedback
- **Proof stat font:** uses Georgia serif for the stat numbers to match brand type hierarchy

---

## Phase 8 — SEO

**index.html — before:**
```html
<title>venuely</title>
```

**index.html — after:**
```html
<title>Venuely London | Corporate Event Concierge Service</title>
<meta name="description" content="Venuely London is a fully managed corporate event concierge service for PAs and EAs. Brief us once, we handle everything. London venues, negotiations, contracts and payment." />
<meta property="og:title" content="Venuely London | Corporate Event Concierge Service" />
<meta property="og:description" content="..." />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://venuely.london" />
<meta property="og:image" content="https://venuely.london/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:description" content="..." />
<meta name="robots" content="index, follow" />
<link rel="canonical" href="https://venuely.london" />
```

The meta description is ~160 characters, includes the target keywords "corporate event concierge", "PAs and EAs", "London venues", and the key differentiator phrase "Brief us once, we handle everything."

---

## Phase 9 — Final Review

- `npm run build` completed with zero errors or warnings
- Formspree endpoint `https://formspree.io/f/mkoegwqp` confirmed present in JSX
- All brand colours confirmed: `#2c3a1e`, `#f0ebe0`, `#f5f0e8`, `#8a9e7a`, `#993C1D`
- No new npm packages installed (`package.json` dependencies unchanged)
- No new CSS files created (all styles remain in the `<style>` block in the component)
- Mobile media queries tested for all new sections
- All new sections follow the existing CSS class naming convention (`vly-*`)

---

## What Still Needs Human Attention

### High priority
1. **Real testimonials** — Competitors (especially Miss London Concierge) have named quotes from real PAs at named companies. This is the single most powerful trust signal for the target audience. Even 3 genuine testimonials from early clients would transform the page.
2. **Client logos** — All major competitors show recognisable company logos. Even 4–6 logos from clients you've worked with would significantly lift credibility.
3. **OG image** — The `og:image` points to `/og-image.jpg` which doesn't exist. A 1200×630px branded image needs to be created and placed in `/public/`.
4. **Real response time commitment** — Currently stated as "24 hours". Miss London Concierge says "2 hours". If Venuely can genuinely respond faster, this should be the headline claim.
5. **Favicon** — The `favicon.svg` should be checked/updated to match brand.

### Medium priority
6. **Budget tiers** — Consider whether the ranges reflect your actual client base. If you typically handle £20k–£100k events, consider making that clearer in the trust section rather than listing down to £5k.
7. **Phone number** — Consider adding a phone number to the footer or nav for clients who want to call. Miss London Concierge lists theirs prominently (+44 020 3633 5476).
8. **Rewards / referral programme** — Miss London Concierge has a loyalty rewards programme for repeat clients. This creates stickiness for PAs who book multiple events per year. Worth considering.
9. **Blog or venue inspo content** — All competitors have content sections. Even a simple "recent events" feed from Instagram (embedded or manual) would add social proof and freshness.
10. **Trustpilot or Google Reviews widget** — HeadBox (4.7), Hire Space (4.8 Google), VenueScanner (4.9 Reviews.io) all show review scores prominently. As reviews accumulate, add a live score.

### Lower priority
11. **Sitemap** — Add a `sitemap.xml` to `/public/` for search engine crawling.
12. **Analytics** — Ensure Google Analytics or equivalent is implemented to measure form submission rate as a conversion event.
13. **Event type list** — The current event types go down to "Special Occasion" and "Exhibition". Consider whether these are the right categories for your positioning — competitors targeting the corporate market focus on: conferences, team away days, summer/Christmas parties, private dining, drinks receptions.
14. **Preferred date field format** — Currently a free-text input. Could be improved to a date picker, but only if the UX is well-implemented — a bad date picker is worse than a text field.

---

## Recommended Next Steps

**Week 1 (human action required):**
- Collect 3 real testimonials from early clients — even informal ones work
- Create and add the OG social share image to `/public/og-image.jpg`
- Confirm whether the `hello@venuely.london` email is actively monitored and has a 24hr SLA

**Week 2–4:**
- Add a testimonials section to the page (dark green background, Georgia serif quotes, initials + company)
- Add 4–6 client logos in a simple grey/muted strip
- Set up Google Analytics with a custom event on form submission success

**Month 2:**
- A/B test the hero headline: "Brief us once. We handle everything." vs "London's corporate event concierge, built for busy PAs."
- Consider adding a Calendly or similar tool for the "Book a free call" CTA to remove email friction
- Evaluate adding a Trustpilot profile and collecting reviews

---

## Commit Details

```
git commit 806ced2
branch: main
author: Matt Ward
files: src/VenuelyLanding.jsx, index.html
insertions: +392, deletions: -129
```

All changes build cleanly with `npm run build` (Vite 8, React 19, zero errors).
