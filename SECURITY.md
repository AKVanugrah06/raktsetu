# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in RaktSetu — for example, something
that could expose donor contact details, bypass the masked-contact flow, or
leak data — **please do not open a public issue.**

Instead, report it privately using GitHub's [private vulnerability
reporting](https://github.com/saisiddi/raktsetu/security/advisories/new):

1. Go to the **Security** tab of this repository.
2. Click **Report a vulnerability**.
3. Describe the issue, how to reproduce it, and its potential impact.

We'll acknowledge your report as soon as possible and keep you updated as we
work on a fix. Please give us a reasonable amount of time to address the
issue before any public disclosure.

## Scope

Since Phase 1 is a static demo (no backend, no real user data, no
authentication), the main things in scope right now are:

- Any client-side bug that could make it look like real personal data is
  being collected or stored.
- Any issue in how demo data is structured that could set a bad precedent for
  Phase 2 (e.g. a flow that would leak a phone number once a backend exists).

As Phase 2 (Supabase auth, real donor data, chat) lands, this policy will be
updated to cover authentication, data access, and messaging.
