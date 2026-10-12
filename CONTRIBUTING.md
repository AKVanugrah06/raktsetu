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

Both must pass. Also check the box on the PR template confirming you checked mobile layout for UI changes.

## Opening the PR

- **Every PR must link an issue** — use `Closes #123` in the description. PRs without a linked issue will be closed.
- Fill in the PR template, including screenshots for any UI change.
- Keep PRs focused on the linked issue. If you spot something unrelated, open a separate issue instead of expanding the PR.

## What gets closed as spam

To respect everyone's review time, these are closed without discussion:

- README-only PRs that just add your name/profile to a contributors list.
- Whitespace-only, formatting-only, or typo-fix PRs with no linked issue.
- PRs that don't link an issue at all.

If you want to fix a genuine typo or formatting issue, open an issue first describing it so it can be assigned like any other task.

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
