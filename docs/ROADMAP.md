# Roadmap

## Phase 1 — Static demo (done)

- Next.js (JS, App Router) + Tailwind scaffold.
- Pages: home, blood bank search over demo JSON, urgent request form (demo mode), donor sign-up form (demo mode), donor listing with masked "Request Contact" (demo mode), about, privacy.
- Site-wide demo-mode banner, i18n-ready strings, ESLint + Prettier, CI (lint + build).
- No backend — nothing submitted through a form is persisted.

## Phase 2 — Real data and contact (planned)

- **Auth**: Supabase Auth (email/phone sign-up and sign-in).
- **Donor registration**: donor sign-up form writes to a real `donors` table; availability toggle persists; auto-pause after donation enforced server-side using the configurable donation gap.
- **Urgent requests**: requests persist to a real `requests` table; server-side expiry job (not just client-side hiding) enforces the configurable expiry window.
- **Masked contact / realtime chat**: Supabase Realtime-backed chat so a requester and an accepting donor can message without either side ever seeing the other's phone number.
- **Moderation**: a way to report a request or donor profile as spam, a scam, or abusive.

## Phase 3 — Reach and polish (planned)

- **Maps**: Leaflet + OpenStreetMap for blood bank / camp locations and distance-based search.
- **Notifications**: email/push notification when a nearby donor's blood group matches an urgent request.
- **Multi-language UI**: ship additional `/locales/*.json` translations (Hindi, Kannada, ... ) with a language switcher.
- **Accessibility audit**: full keyboard-navigation and screen-reader pass, Lighthouse accessibility score tracked in CI.
- **Anti-scam reporting**: a dedicated flow for reporting suspected "pay for blood" scams, feeding a basic moderation queue.

## Out of scope (for now)

- Scraping or mirroring e-RaktKosh's live stock data — we link to it instead (see [docs/PRIVACY.md](./PRIVACY.md), principle 4).
- Any feature that imports donor data in bulk from an external source (social media, WhatsApp, etc.) — opt-in only (principle 1).
