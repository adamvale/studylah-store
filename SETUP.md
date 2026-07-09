  # StudyLah — run it on any machine

The **live site runs on Railway**. This repo is the source you edit; pushing to
`main` on GitHub makes Railway redeploy. You can clone and run it on any Mac in
a few minutes — and **for normal code work you need no secrets and no real
PDFs.** With the example `.env`, Stripe runs in mock mode and email is written
to a local folder, so the whole flow is testable offline.

## Prerequisites

- **Node 20+** (this project is built on Node 22). Install from
  <https://nodejs.org> (LTS) or, if you use nvm: `nvm install 22`.
  Verify: `node -v`.
- **Git**. Verify: `git -v`.

## First-time setup on a new machine

```bash
git clone https://github.com/adamvale/studylah-store.git
cd studylah-store
cp .env.example .env     # placeholders are enough for local dev
npm install              # installs deps (also runs `prisma generate`)
npm run db:setup         # creates the local SQLite db + placeholder PDFs
npm run dev              # http://localhost:3000
```

That is the whole setup. With the example `.env`:

- **Stripe → mock mode** — checkout creates paid orders with no real payment,
  clearly labelled, so you can test the full purchase → download flow.
- **Email → `data/outbox/`** — order emails are written to files, not sent.
- **PDFs → placeholders** — the catalogue shows generated placeholder PDFs.
  Real content lives only on production and on your product-suite drive.

## Everyday workflow

```bash
npm run dev                          # develop with hot reload
npm run lint                         # check before committing
git add -A && git commit -m "…"      # commit
git push                             # (or GitHub Desktop → Push) → Railway auto-deploys
```

## The two things git does NOT carry

You rarely need these. Keep them somewhere safe (password manager / backup
drive) and only drop them into the clone when a specific task needs them:

- **A real `.env`** — only to talk to the *real* Stripe/Resend from your
  machine, which you normally never do. Production secrets live in Railway's
  dashboard, not in any file here.
- **`private/pdfs/` real PDFs** — only when re-staging content to upload to
  production. Originals are on the product-suite drive; the live copies are on
  Railway. For UI/code work the seeded placeholders are fine.

## Never commit

`.env`, `private/`, and `data/` are gitignored — they hold secrets, licensed
PDFs, and the local database. Never force them into git.

## One working copy only

Don't develop from two copies (e.g. an internal folder *and* an external
drive). Editing and pushing from divergent copies loses work and causes
conflicts. Clone fresh on each machine; GitHub is the single source of truth.

## Deploy & ops

Railway setup, the persistent volume, and going live are documented in
[DEPLOY.md](./DEPLOY.md).
