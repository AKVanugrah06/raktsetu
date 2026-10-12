<!-- Logo placeholder — drop a logo at public/logo.png and reference it here -->
<h1 align="center">RaktSetu</h1>
<p align="center"><strong>Privacy-first blood donor &amp; recipient connect platform.</strong></p>

<p align="center">
  <a href="./LICENSE"><img alt="License: MIT" src="https://img.shields.io/badge/license-MIT-c62828.svg"></a>
  <a href="./CONTRIBUTING.md"><img alt="PRs Welcome" src="https://img.shields.io/badge/PRs-welcome-c62828.svg"></a>
  <img alt="Nexus Spring of Code" src="https://img.shields.io/badge/Nexus%20Spring%20of%20Code-2026-c62828.svg">
</p>

<p align="center">
  <!-- Update this once deployed: -->
  <a href="https://raktsetu.vercel.app">Live Demo</a> ·
  <a href="#quick-start">Quick Start</a> ·
  <a href="./CONTRIBUTING.md">Contribute</a> ·
  <a href="./docs/ROADMAP.md">Roadmap</a>
</p>

---

## The problem

Blood availability information in India is scattered across government portals, hospital lists and WhatsApp forwards. In emergencies, families waste precious time, donor phone numbers get exposed publicly, and fake "urgent blood" money scams are common.

## The solution

RaktSetu is one clean platform to:

1. **Find** nearby blood banks and donation camps.
2. **Post** verified urgent blood requests.
3. **Connect** with opt-in donors through masked, in-app contact.

## Screenshots

<!-- Add screenshots here once the UI is deployed, e.g.: -->
<!-- ![Home page](./docs/screenshots/home.png) -->

_Screenshots coming soon._

## Privacy principles

RaktSetu is built around six non-negotiable rules. The full detail is in [docs/PRIVACY.md](./docs/PRIVACY.md); in short:

1. **Opt-in donors only** — never scraped or imported from social media, WhatsApp, or third-party lists.
2. **No public phone numbers** — contact only via in-app chat / masked contact, after the donor accepts.
3. **Verified, auto-expiring requests** — hospital name + city required, requests expire automatically, never ask for money.
4. **Official stock data, not scraping** — we link to [e-RaktKosh](https://www.eraktkosh.in/) instead of scraping it.
5. **Obviously fake demo data** — every sample in this repo is clearly labelled "Demo".
6. **Configurable donation gaps** — donors auto-pause after donating until a configurable minimum gap has passed.

## Features

### Phase 1 (done)

- Landing page, blood bank search/filter over demo data, urgent request form (demo mode), donor sign-up form (demo mode), donor listing with masked contact, about & privacy pages.
- i18n-ready UI strings (`/locales/en.json`).
- Demo-mode banner on every page — no data is sent or stored yet.

### Planned

- See [docs/ROADMAP.md](./docs/ROADMAP.md) for Phase 2 (Supabase auth, real donor registration, masked chat, request expiry jobs) and Phase 3 (maps, notifications, multi-language, accessibility audit, anti-scam reporting).

## Tech stack

- [Next.js](https://nextjs.org) (App Router), plain JavaScript (no TypeScript)
- [Tailwind CSS](https://tailwindcss.com)
- Static JSON data in `/data` for Phase 1 (no backend yet)
- ESLint + Prettier, GitHub Actions CI, deployed on [Vercel](https://vercel.com)
- Phase 2 (planned): [Supabase](https://supabase.com), [Leaflet](https://leafletjs.com) + OpenStreetMap

## Quick start

```bash
git clone https://github.com/saisiddi/raktsetu.git
cd raktsetu
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Node version is pinned in [.nvmrc](./.nvmrc).

```bash
npm run lint      # ESLint
npm run format    # Prettier
npm run build     # production build
```

## Project structure

```
app/            Next.js App Router pages
components/     Reusable UI components
data/           Static demo JSON (Phase 1 "database")
lib/            Helpers: i18n.js, config.js
locales/        UI strings (en.json — add hi.json, kn.json, ... to translate)
public/         Static assets
docs/           Project docs (privacy, roadmap, architecture, starter issues)
.github/        Issue/PR templates, CI, labels
```

## How to contribute

RaktSetu is a beginner-friendly project built for [Nexus Spring of Code](#), a 45-day student open-source program, and welcomes contributors from every domain:

| Domain      | Example tasks                                            |
| ----------- | -------------------------------------------------------- |
| Frontend    | New pages, UI polish, responsive fixes, dark mode        |
| Backend     | Phase 2 API routes, Supabase integration                 |
| UI/UX       | Design review, accessibility audit, empty/loading states |
| Docs        | README improvements, FAQ, architecture notes             |
| Translation | Add `hi.json`, `kn.json`, ... to `/locales`              |
| Testing     | Unit tests, Lighthouse checks, manual QA                 |

Start with [docs/STARTER_ISSUES.md](./docs/STARTER_ISSUES.md) (once Task 3 lands) or any issue labelled [`good first issue`](https://github.com/saisiddi/raktsetu/labels/good%20first%20issue). Full process, branch naming and commit conventions are in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Roadmap

See [docs/ROADMAP.md](./docs/ROADMAP.md).

## Maintainer

**Sai** — [github.com/saisiddi](https://github.com/saisiddi), Project Admin for Nexus Spring of Code.

## License

[MIT](./LICENSE)
