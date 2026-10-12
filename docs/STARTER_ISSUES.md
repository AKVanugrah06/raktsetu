# Starter Issues

25 scoped issues for contributors, mixed across difficulty and domain. `scripts/create-issues.sh` creates all of these on GitHub with the right labels — this file is the source of truth if you want to read, edit, or hand-pick before running it.

Legend: **Domain** labels are `domain: *`, **Difficulty** labels are `level: *`. Beginner issues also get `good first issue`.

---

## Beginner

### 1. Add Hindi translation

- **Domain:** translation · **Difficulty:** beginner
- **Context:** UI strings live in `locales/en.json` and are read through the `t()` helper in `lib/i18n.js`. Hindi is the first non-English locale we want.
- **Acceptance criteria:**
  - [ ] `locales/hi.json` exists with exactly the same keys as `locales/en.json`
  - [ ] Every `{{placeholder}}` token (e.g. `{{hours}}`, `{{days}}`) is preserved unchanged
  - [ ] `npm run lint` and `npm run build` pass
- **Files to touch:** `locales/hi.json` (new)

### 2. Add Kannada translation

- **Domain:** translation · **Difficulty:** beginner
- **Context:** Same as #1, for Kannada — Karnataka is where the maintainer is based and several demo entries are already set there.
- **Acceptance criteria:**
  - [ ] `locales/kn.json` exists with exactly the same keys as `locales/en.json`
  - [ ] Every `{{placeholder}}` token is preserved unchanged
  - [ ] `npm run lint` and `npm run build` pass
- **Files to touch:** `locales/kn.json` (new)

### 3. Build a custom 404 page

- **Domain:** frontend · **Difficulty:** beginner
- **Context:** Unmatched routes currently show Next.js's generic fallback. RaktSetu should show a branded not-found page.
- **Acceptance criteria:**
  - [ ] `app/not-found.js` exists and renders inside the normal layout (navbar/footer)
  - [ ] Shows a friendly message and a link back to `/`
  - [ ] Copy comes from `locales/en.json` via `t()`, not a hardcoded string
  - [ ] `npm run lint` and `npm run build` pass
- **Files to touch:** `app/not-found.js` (new), `locales/en.json`

### 4. Add loading skeletons for Blood Banks and Donors

- **Domain:** frontend · **Difficulty:** beginner
- **Context:** Pages render instantly today since data is static JSON, but Phase 2 will fetch from Supabase — these routes need a loading state ready ahead of time.
- **Acceptance criteria:**
  - [ ] `components/Skeleton.js` — a small reusable placeholder block
  - [ ] `app/blood-banks/loading.js` and `app/donors/loading.js` using Next's `loading.js` convention
  - [ ] Skeleton shape matches the real card layout closely enough that there's no layout shift when real content appears
- **Files to touch:** `components/Skeleton.js` (new), `app/blood-banks/loading.js` (new), `app/donors/loading.js` (new)

### 5. Add an FAQ page

- **Domain:** docs, frontend · **Difficulty:** beginner
- **Context:** Contributors and users will ask the same questions repeatedly ("Is this free?", "Is my number ever public?"). A static FAQ reduces that load.
- **Acceptance criteria:**
  - [ ] New route `/faq` with at least 6 Q&A pairs sourced from a new `faq` section in `locales/en.json`
  - [ ] Linked from the navbar or footer
  - [ ] Answers don't contradict anything in `docs/PRIVACY.md`
- **Files to touch:** `app/faq/page.js` (new), `locales/en.json`, `components/Navbar.js` or `components/Footer.js`

### 6. Blood group compatibility chart page

- **Domain:** frontend · **Difficulty:** beginner
- **Context:** A common emergency question is "which groups can this patient receive from?" A static reference page answers it without any backend.
- **Acceptance criteria:**
  - [ ] New route `/compatibility` with a table of all 8 blood groups and what each can donate to / receive from
  - [ ] Compatibility data lives in `lib/bloodCompatibility.js`, not hardcoded inline in JSX
  - [ ] Table is usable on a mobile-width screen (stacked cards or horizontal scroll)
- **Files to touch:** `app/compatibility/page.js` (new), `lib/bloodCompatibility.js` (new)

### 7. Donation eligibility info page

- **Domain:** docs, frontend · **Difficulty:** beginner
- **Context:** "Can I donate blood?" is a frequent question. RaktSetu should point to authoritative sources rather than giving medical advice itself.
- **Acceptance criteria:**
  - [ ] New route `/eligibility` with general, non-prescriptive eligibility pointers and a clear "this is not medical advice — consult a doctor or your nearest blood bank" disclaimer
  - [ ] Links to at least one official source (e.g. e-RaktKosh)
  - [ ] No specific medical threshold (age, weight, gap) is stated as a RaktSetu rule — keep it general public information with the disclaimer
- **Files to touch:** `app/eligibility/page.js` (new), `locales/en.json`

### 8. Fix accessibility / color-contrast issues

- **Domain:** ui-ux · **Difficulty:** beginner
- **Context:** Run Lighthouse or the axe browser extension against every page and fix what's flagged.
- **Acceptance criteria:**
  - [ ] Accessibility score ≥ 95 on `/`, `/blood-banks`, `/donors`, `/request`, `/donate`
  - [ ] PR description lists what was found and fixed (contrast, missing labels/alt text, etc.)
  - [ ] `npm run lint` and `npm run build` still pass
- **Files to touch:** depends on findings — likely `components/*.js`, `app/**/page.js`

### 9. Add favicon, app icons, and Open Graph metadata

- **Domain:** frontend · **Difficulty:** beginner
- **Context:** `app/layout.js` only sets `title`/`description` today. Social shares and browser tabs deserve a proper icon and preview card.
- **Acceptance criteria:**
  - [ ] A proper app icon added under `public/` (beyond the default `app/favicon.ico`)
  - [ ] `metadata` in `app/layout.js` extended with `openGraph` and `twitter` card fields
  - [ ] Verified the tags actually render (e.g. via "view source" or a social-preview debugger)
- **Files to touch:** `app/layout.js`, `public/` (new icon asset)

### 10. "Copy request summary" button

- **Domain:** frontend · **Difficulty:** beginner
- **Context:** After submitting the demo request form, it would help to see a tangible result — a button that copies a formatted summary to the clipboard.
- **Acceptance criteria:**
  - [ ] After a valid submit, a "Copy summary" button appears next to the demo-mode message
  - [ ] Copies a plain-text summary (blood group, units, hospital, city, needed-by) via the Clipboard API
  - [ ] Shows a brief inline "Copied!" confirmation — no `window.alert`
- **Files to touch:** `app/request/page.js`

---

## Intermediate

### 11. Dark mode toggle

- **Domain:** frontend · **Difficulty:** intermediate
- **Context:** The app is light-only today (see `app/globals.css`). Add an opt-in dark theme.
- **Acceptance criteria:**
  - [ ] A toggle in the navbar switches a `data-theme` attribute on `<html>` between light/dark
  - [ ] Preference persists via `localStorage` (wrapped in try/catch)
  - [ ] Brand red (`#C62828`) keeps at least 4.5:1 contrast in both themes
  - [ ] Every existing page stays readable in both themes
- **Files to touch:** `components/Navbar.js`, `app/globals.css`, `app/layout.js`

### 12. Improve request form validation

- **Domain:** frontend · **Difficulty:** intermediate
- **Context:** `app/request/page.js` only validates on submit today. Add on-blur feedback and tighten the "needed by" date rule.
- **Acceptance criteria:**
  - [ ] Each field shows its own error on blur, not only on submit
  - [ ] Past "needed by" dates are rejected with a specific message; errors clear as soon as a field becomes valid
  - [ ] Existing submit-time behavior (demo-mode message on a fully valid submit) is unchanged
- **Files to touch:** `app/request/page.js`

### 13. Anti-scam "Report" button

- **Domain:** ui-ux, frontend · **Difficulty:** intermediate
- **Context:** `docs/PRIVACY.md` principle 3 calls for an anti-scam posture. Add a visible (demo-mode) way to report a suspicious request or donor listing.
- **Acceptance criteria:**
  - [ ] A "Report" control on each `DonorCard` and on the request page
  - [ ] Clicking opens an inline form (reason: scam / spam / abuse, optional details) — no `alert()`/`confirm()` dialogs
  - [ ] Submitting shows "Demo mode — reports aren't sent yet.", consistent with other forms
- **Files to touch:** `components/DonorCard.js`, `app/request/page.js`, `components/ReportButton.js` (new)

### 14. Language switcher

- **Domain:** frontend · **Difficulty:** intermediate
- **Context:** `lib/i18n.js` already accepts a `locale` parameter, but nothing in the UI lets a visitor choose one. Pairs well with issues #1/#2 once a non-English locale exists.
- **Acceptance criteria:**
  - [ ] A language dropdown in the navbar lists the locales actually present under `/locales`
  - [ ] Selecting a language re-renders visible text in that language
  - [ ] Any missing key still falls back to English (don't break that behavior in `lib/i18n.js`)
- **Files to touch:** `components/Navbar.js`, `lib/i18n.js`

### 15. Debounced free-text search on Blood Banks

- **Domain:** frontend · **Difficulty:** intermediate
- **Context:** `components/BloodBankSearch.js` only filters by state/city dropdowns. Add a free-text box for name/address.
- **Acceptance criteria:**
  - [ ] A text input filters by name/address substring, debounced (~250ms)
  - [ ] Combines with the existing state/city filters (all narrow the same list together)
  - [ ] Input has a proper accessible label
- **Files to touch:** `components/BloodBankSearch.js`

### 16. Unit tests for `lib/i18n.js`

- **Domain:** testing · **Difficulty:** intermediate
- **Context:** No test runner is configured yet. `t()` (dot-notation lookup + `{{var}}` interpolation + array/object recursion) is a good first thing to cover.
- **Acceptance criteria:**
  - [ ] A lightweight test runner added (Vitest recommended) with an `npm run test` script
  - [ ] Tests cover: plain lookup, missing-key fallback, string interpolation, interpolation inside an array of strings, interpolation inside an array of objects (like `privacy.principles`), and unknown-locale fallback to English
  - [ ] `npm run test` passes
- **Files to touch:** `package.json`, new `lib/i18n.test.js`

### 17. Unit tests for request/donate form validation

- **Domain:** testing, frontend · **Difficulty:** intermediate
- **Context:** `validate(form)` is currently defined inline in both `app/request/page.js` and `app/donate/page.js`. Extract each into a pure, testable function.
- **Acceptance criteria:**
  - [ ] Logic moved to `lib/validateRequest.js` and `lib/validateDonor.js` (no React/DOM dependency)
  - [ ] Pages use the extracted functions with no visible behavior change
  - [ ] Tests cover valid input, each missing/invalid field, and boundary cases (units = 0 vs 1, today vs yesterday)
- **Files to touch:** `lib/validateRequest.js` (new), `lib/validateDonor.js` (new), `app/request/page.js`, `app/donate/page.js`, matching test files

### 18. Lighthouse CI check

- **Domain:** devops, testing · **Difficulty:** intermediate
- **Context:** `.github/workflows/ci.yml` runs lint + build only. Add an automated Lighthouse check so regressions are caught in PRs.
- **Acceptance criteria:**
  - [ ] CI builds and serves the app, then runs Lighthouse CI (e.g. `@lhci/cli`) against at least `/`, `/blood-banks`, `/donors`
  - [ ] A documented minimum score threshold is configured, so CI actually fails on a real regression
  - [ ] Any issues the first run finds are fixed in this PR or filed as linked follow-up issues
- **Files to touch:** `.github/workflows/ci.yml`, new `lighthouserc.json`, `package.json`

### 19. Extract shared form-field components

- **Domain:** frontend · **Difficulty:** intermediate
- **Context:** `app/request/page.js` and `app/donate/page.js` duplicate the same label+input+error markup per field.
- **Acceptance criteria:**
  - [ ] `components/form/TextField.js` and `components/form/SelectField.js` encapsulate label/input/error/aria wiring
  - [ ] Both forms refactored to use them with no visual or behavioral change
  - [ ] `aria-invalid`, `aria-describedby`, and label/`id` pairing are preserved
- **Files to touch:** `components/form/TextField.js` (new), `components/form/SelectField.js` (new), `app/request/page.js`, `app/donate/page.js`

### 20. Empty-state components

- **Domain:** ui-ux · **Difficulty:** intermediate
- **Context:** An empty filtered result on `/blood-banks` currently shows a plain text line. Make empty states consistent and a little more helpful app-wide.
- **Acceptance criteria:**
  - [ ] Reusable `components/EmptyState.js` (icon/illustration slot, message, optional action link)
  - [ ] Used for the blood-banks "no results" case and the donors page
  - [ ] Matches the existing red/white visual language
- **Files to touch:** `components/EmptyState.js` (new), `components/BloodBankSearch.js`, `app/donors/page.js`

---

## Advanced

### 21. Design doc: masked-contact / in-app chat flow

- **Domain:** backend, docs · **Difficulty:** advanced
- **Context:** `docs/ARCHITECTURE.md` sketches a `messages` table for Phase 2 but doesn't specify the actual contact flow.
- **Acceptance criteria:**
  - [ ] New `docs/design/masked-contact-flow.md` covering the full request → accept → chat sequence, what each party can see at each step, how a donor ends/revokes contact, and how it stays consistent with `docs/PRIVACY.md` principle 2
  - [ ] Includes a sequence diagram (Mermaid, fenced code block — renders on GitHub)
  - [ ] Cross-checked against the `requests`/`messages` tables in `docs/ARCHITECTURE.md`, with proposed edits to that doc if needed
- **Files to touch:** `docs/design/masked-contact-flow.md` (new), possibly `docs/ARCHITECTURE.md`

### 22. Supabase auth scaffolding

- **Domain:** backend · **Difficulty:** advanced
- **Context:** Phase 2 calls for Supabase Auth. This adds the scaffolding without wiring it into the live demo pages — Phase 1 stays demo-only.
- **Acceptance criteria:**
  - [ ] `@supabase/supabase-js` added; `lib/supabaseClient.js` reads the env vars already stubbed in `.env.example`
  - [ ] New `/sign-in` and `/sign-up` pages, only rendered when the env vars are present (otherwise show "Coming in Phase 2")
  - [ ] Does **not** touch `/donate`, `/request`, or `/donors` — those stay demo-mode until a later, separate issue
  - [ ] README and `.env.example` updated with setup instructions
- **Files to touch:** `lib/supabaseClient.js` (new), `app/sign-in/page.js` (new), `app/sign-up/page.js` (new), `package.json`, `.env.example`, `README.md`

### 23. Request auto-expiry logic (design + prototype)

- **Domain:** backend · **Difficulty:** advanced
- **Context:** Phase 1 shows a static "auto-expires after 48 hours" notice with nothing enforcing it. Design how real expiry will work once requests persist.
- **Acceptance criteria:**
  - [ ] `docs/design/request-expiry.md` describing the approach (e.g. scheduled job vs. computed-on-read) with tradeoffs
  - [ ] A prototype pure function in `lib/requestExpiry.js` that, given `created_at` and `REQUEST_EXPIRY_HOURS`, returns whether a request is expired — with unit tests
  - [ ] Uses the existing `REQUEST_EXPIRY_HOURS` constant from `lib/config.js`, not a new hardcoded number
- **Files to touch:** `docs/design/request-expiry.md` (new), `lib/requestExpiry.js` (new, with tests)

### 24. Leaflet + OpenStreetMap map prototype

- **Domain:** frontend, backend · **Difficulty:** advanced
- **Context:** `docs/ROADMAP.md` lists maps as Phase 3. Build an early, opt-in prototype against the existing demo data to evaluate the approach first.
- **Acceptance criteria:**
  - [ ] `react-leaflet` + `leaflet` added as dependencies
  - [ ] `components/BloodBankMap.js` renders demo blood banks as pins (add a `lat`/`lng` field to a handful of entries in `data/blood-banks.demo.json`)
  - [ ] Shown on `/blood-banks` behind a "List view" / "Map view" toggle, so the existing list isn't disrupted
  - [ ] Handles Next.js SSR correctly (Leaflet needs a client-only dynamic import)
- **Files to touch:** `components/BloodBankMap.js` (new), `app/blood-banks/page.js`, `components/BloodBankSearch.js`, `data/blood-banks.demo.json`, `package.json`

### 25. Full accessibility audit + automated a11y testing

- **Domain:** testing, ui-ux · **Difficulty:** advanced
- **Context:** Issue #8 fixes individually flagged problems; this issue makes regressions structurally hard to reintroduce.
- **Acceptance criteria:**
  - [ ] `axe-core` wired into an automated check (e.g. via the test runner chosen in #16) covering every route
  - [ ] CI fails on any new critical/serious axe violation
  - [ ] A written summary added under `docs/` covering what was checked, what was found, and what's deliberately deferred
- **Files to touch:** new test files, `.github/workflows/ci.yml`, `docs/ACCESSIBILITY_AUDIT.md` (new)
