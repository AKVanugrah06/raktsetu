# Contributing to RaktSetu

Thanks for wanting to contribute! This guide assumes little to no prior open-source experience — if anything here is unclear, open a [discussion](../../discussions) and we'll improve it.

## Before you start

- RaktSetu handles a sensitive topic (blood donation). Please read [docs/PRIVACY.md](./docs/PRIVACY.md) before touching anything related to donor data, contact flows, or sample data.
- All sample/demo data in this repo must be obviously fake (e.g. "Demo Donor 1", phone `XXXXXXXXXX`). Never add real names, phone numbers, or addresses anywhere in the codebase.

## How to claim an issue

1. Browse [open issues](../../issues), especially ones labelled [`good first issue`](../../labels/good%20first%20issue) or `level: beginner`.
2. Comment **"I'd like to work on this"** on the issue and wait to be assigned. Please don't open a PR before you're assigned — someone else may already be working on it.
3. **One issue per contributor at a time.** Finish (or drop) your current issue before claiming another.
4. If an assigned issue has no activity (no commits, no comments) for **5 days**, it will be unassigned so someone else can pick it up. This isn't personal — it just keeps things moving for everyone.

## Setting up your fork

```bash
# 1. Fork the repo on GitHub, then:
git clone https://github.com/<your-username>/raktsetu.git
cd raktsetu
npm install

# 2. Create a branch
git checkout -b feat/short-description   # or fix/..., docs/...
```

Branch naming: `feat/`, `fix/`, `docs/`, `test/`, `i18n/` followed by a short, hyphenated description (e.g. `feat/dark-mode-toggle`).

## Commit messages

We use [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add dark mode toggle to navbar
fix: correct date validation on request form
docs: clarify donation gap configuration
i18n: add Hindi translations
test: add unit tests for lib/i18n.js
```

## Before you open a PR

```bash
npm run lint
npm run build
```

Both must pass with 0 errors before you open the PR.

## Opening a pull request

- **Fill in every section of the PR template** (`.github/pull_request_template.md`) — Description, Related issues, Type of change, and every checklist item that applies (the UI and Translations sections can be skipped only if they genuinely don't apply to your change). An incomplete template gets sent back before anyone reviews the code.
- **Every PR must link an assigned issue** — use `Closes #123` in the description. PRs without a linked, assigned issue will be closed.
- **PR title format:** `<type>: <short description>. Closes #<issue>`, e.g. `feat: add blood group compatibility page. Closes #6`. Use the same `<type>` prefixes as your commits (`feat`, `fix`, `docs`, `i18n`, `test`, `chore`, ...).
- Write the Description yourself, in your own words. Don't paste an AI tool's generated summary — explain what you changed and why like you'd explain it to a teammate.
- Keep PRs focused on the linked issue. If you spot something unrelated, open a separate issue instead of expanding the PR.

### Draft PRs and re-requesting review

1. **Open a draft PR early**, even before the work is finished. This lets maintainers see your direction and unblock you sooner instead of reviewing a finished surprise.
2. Keep pushing commits to it as you go.
3. When it's actually done and every checklist item is true, click **"Ready for review"** to take it out of draft.
4. If a reviewer asks for changes, make them, push, then click **"Re-request review"** next to their name. Pushing silently and waiting doesn't notify them that it's ready again.
5. Reviews happen within 2–3 days — please don't tag maintainers repeatedly in the meantime.

## What gets closed as spam

To respect everyone's review time, these are closed without discussion:

- README-only PRs that just add your name/profile to a contributors list.
- Whitespace-only or formatting-only PRs with no linked issue.
- Single-character or trivial edits clearly made just to rack up a PR count.
- PRs that don't link an issue at all.

Genuine typo and docs fixes **are** welcome as a first contribution — they just need to either link an issue (open one first describing what's wrong) or fix multiple real errors in one PR. A single-issue typo fix with no linked issue, or a one-character tweak with nothing else behind it, falls under "trivial" above and gets closed.

## Adding a translation

1. Copy `locales/en.json` to `locales/<language-code>.json` (e.g. `hi.json` for Hindi, `kn.json` for Kannada).
2. Translate every string value — keep the keys and any `{{placeholder}}` tokens (like `{{hours}}`) unchanged.
3. Open an issue (or claim the matching translation issue) before submitting the PR so it's tracked.

## Adding demo data

- Add new entries to `data/blood-banks.demo.json` or `data/donors.demo.json` only.
- Names must be obviously fake, e.g. `"Demo Donor 9"` or `"Demo Blood Bank 11"`.
- Never include a real phone number — blood bank entries use the placeholder `"XXXXXXXXXX"`, and donor entries have no phone field at all.

## Code of Conduct

By participating, you agree to follow our [Code of Conduct](./CODE_OF_CONDUCT.md).
