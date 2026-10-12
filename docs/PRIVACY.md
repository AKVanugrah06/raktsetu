# Privacy Principles

These six principles are **non-negotiable**. Every feature, PR, and design decision in RaktSetu is checked against them. If a proposed change conflicts with one of these, the principle wins — open an issue to discuss before building it.

## 1. Opt-in donors only

RaktSetu never scrapes, imports, or displays personal data from social media, WhatsApp, or any third-party list. Every donor who appears on the platform chose to sign up themselves. No feature may import donor data in bulk from an external source.

## 2. Donor phone numbers are never shown publicly

Donor phone numbers must never appear in the UI, in an API response, in demo data, or in logs. Contact between a requester and a donor happens only through in-app chat or a masked-contact mechanism, and only after the donor has explicitly accepted the request. Phase 1 reflects this by not even including a phone field in `data/donors.demo.json`.

## 3. Verified, auto-expiring requests

Every urgent blood request must include a hospital name and a city. Requests automatically expire a fixed number of hours after posting — the default is 48 hours, configurable via `REQUEST_EXPIRY_HOURS` in `lib/config.js`, never hardcoded into UI copy. RaktSetu never asks for money to arrange blood, and an anti-scam notice is shown wherever a request can be posted or viewed.

## 4. Official stock data, not scraping

For real-time blood bank stock, RaktSetu links out to the Government of India's official [e-RaktKosh](https://www.eraktkosh.in/) portal rather than scraping or re-hosting that data. Any blood-bank listing feature should treat e-RaktKosh as the authoritative, live source and our own data as a directory/demo layer on top.

## 5. All sample data is obviously fake

Every piece of demo data committed to this repository must be unmistakably fake:

- Donor and blood bank names follow the pattern `"Demo Donor N"` / `"Demo Blood Bank N"`.
- Phone numbers (where present, e.g. for blood banks) use the placeholder `"XXXXXXXXXX"`.
- Every page that displays demo data carries a visible "Demo" badge or site-wide demo banner.

Never commit a real name, phone number, email, or address anywhere in the codebase — including in commit messages, test fixtures, or screenshots.

## 6. Configurable donation gaps

After a donor donates, they are automatically paused (marked unavailable) until the minimum medically-required gap between donations has passed. That gap is a configuration value (`DONATION_GAP_DAYS` in `lib/config.js`), not a number hardcoded into UI copy or component logic — so it can be corrected by someone with medical authority without a code review of every page that mentions it.

---

## Phase 2 data-handling plan

Phase 1 has no backend — nothing typed into a form is persisted anywhere. When Phase 2 introduces Supabase, the following will apply:

- **Auth**: Supabase Auth with email/phone verification; passwords and tokens are never logged.
- **Donor records**: phone numbers stored server-side only, never returned in any API response consumed by another user's client. Contact is brokered through a server-side masked-contact or chat relay.
- **Requests**: expiry enforced server-side via a scheduled job (not just client-side hiding), so an expired request's details stop being servable at all.
- **Access control**: row-level security policies so a donor's raw contact info is never queryable by anyone other than the platform's own contact-brokering logic.
- **Data retention**: expired requests and paused donor contact details get a defined retention/deletion policy (to be finalized in a Phase 2 design doc — see [docs/ROADMAP.md](./ROADMAP.md)).

Any Phase 2 PR that touches auth, donor data, or messaging must be checked against this section before merge.
