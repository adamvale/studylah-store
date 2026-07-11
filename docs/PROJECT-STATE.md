# StudyLah — Project State & Institutional Knowledge

> The onboarding document for any developer or AI agent working on this repo.
> It captures what the code cannot say about itself. Update it when facts here
> go stale — it is the single source of tribal knowledge. NO SECRETS in this
> file, ever.

## What this is

**StudyLah** (www.studylah.education) is a LIVE, revenue-generating Singapore
exam-prep business: data-driven 2026 exam forecasts + original practice
content for O-Level (G3) and N(A)-Level (G2), sold as per-subject PDF packs,
with **Study HQ** — a full gamifiable study system — included with every
purchase. Owner is a non-developer; agents do the engineering, the owner does
dashboards (Railway/Stripe/store accounts) and content review.

## Architecture (all cloud)

- **App**: Next.js 16 App Router + Tailwind v4, TypeScript. Read
  `node_modules/next/dist/docs/` before assuming Next conventions (see
  AGENTS.md — this Next version has breaking changes vs. training data).
- **DB**: Prisma 7 + SQLite via `@prisma/adapter-better-sqlite3`. Hand-written
  SQL migrations in `prisma/migrations/`; `scripts/start-prod.sh` runs
  `migrate deploy` + idempotent seed on boot.
- **Hosting**: Railway (Dockerfile build, single replica — SQLite forbids 2+),
  volume at `/data` (`DATABASE_URL=file:/data/prod.db`,
  `PDF_STORAGE_DIR=/data/pdfs`). GitHub repo `adamvale/studylah-store`; the
  owner pushes via GitHub Desktop (agents have no push credentials).
- **Email**: Resend (falls back to a `data/outbox/` file stub in dev).
- **Payments**: Stripe LIVE (PayNow + cards + Alipay/WeChat Pay). Mock mode
  when no `sk_` key — full flows testable without payment.
- **Storage**: Cloudflare R2 bucket `studylah-master` (S3-compatible) —
  nightly DB backups (`/api/cron/backup-db`) and master content mirror under
  `product-pdfs/`. Client lib: `src/lib/server/r2.ts`.
- **Scheduled jobs** (cron-job.org hits these; all gated by `CRON_SECRET`):
  hourly `/api/cron/diagnostic-followup`, hourly `/api/cron/streak-reminder`
  (only acts 19:00–22:59 SG), daily `/api/cron/parent-digest`, daily
  `/api/cron/backup-db`.
- **Mobile**: PWA is live (manifest, `public/sw.js`, web push). Native
  Capacitor shell for App Store/Play is the current roadmap (built via
  Codemagic cloud CI — this repo is connected; local Mac cannot build iOS).

## The product catalogue

22 subjects (14 O-Level, 8 N(A)) × 4 products each: Exam Forecast, a
subject-specific **companion** (name varies per subject — see
`SUBJECT_SPECS` in `src/lib/catalogue.ts`), Sure Questions Vault, Final
Rehearsal (2–3 PDFs; paper numbers vary by subject). Tiers
Essential/Strategic/Master; Mega-Bundle (3 subjects), All-In (5–6). Slugs are
FROZEN (they live in URLs and in every `ProductFile.filePath`).

## Study HQ (the portal, `/account`)

Tabs: **Today** (computed daily mission + daily-3 quiz + compact risk),
Study plan (tiered topic checklist + pacing + grade goals + exam dates),
Progress (marks-at-risk meters, calibration, score history), Practice
(subject drills), Mistakes (错题本 with spaced resurrection), Timer
(rehearsal + pomodoro), Orders, Add subjects, Referrals, Settings (email
change, streak push, parent digest). Key engines:

- **Marks at Risk** (`src/lib/server/risk.ts`): tier-weighted topic marks
  (VH6/H4/M2/W1 normalised to /100) × study-status risk + unresolved-mistake
  penalty. Every display carries the model-not-prediction caveat.
- **Daily three** (`src/lib/server/study.ts`): deterministic per
  (customer, SG-day); resurrections of due mistakes ride the FIRST attempt
  only (day-stable so render and grading agree). Misses seed MistakeEntry;
  2 consecutive correct re-tests auto-resolve.
- **Diagnostic "Predict your mark"** (`/diagnostic`): 10 Qs × 22 subjects,
  7-min timer, server-side grading (correct keys NEVER reach the client
  pre-submit), bands danger/warning/pass (≤50/≤80/>80), indicative grade
  estimate + verbatim caveat.
- **Auth**: passwordless magic links, HMAC-signed stateless tokens
  (`customer-session.ts`), fail-closed without `CUSTOMER_AUTH_SECRET`.

## Deployment gotchas (each cost real debugging — do not relearn)

1. **Railway service variables override Dockerfile ENV**, and relative paths
   silently landed data on ephemeral disk once. `start-prod.sh` now refuses
   to boot with relative `DATABASE_URL`/`PDF_STORAGE_DIR`.
2. **`NEXT_PUBLIC_*` env vars are inlined at BUILD time**, and Dockerfile
   builds only receive Railway variables as **declared `ARG`s** (see the
   Dockerfile's VAPID block). New client-side env var ⇒ new ARG+ENV pair, or
   it ships as an empty string. Byte-identical rebuilds keep old chunk
   hashes, so verify by grepping `/_next/static/chunks/` for the value.
3. **Prisma `not:` excludes NULL rows** (SQL semantics). Nullable-field
   inequality filters need an explicit `OR: [{ field: null }, …]`.
4. Prisma 7.8 panics on concurrent identical `findUnique` (dataloader
   batching) — use `findFirst` for idempotency pre-checks.
5. The bare domain 301s to www and DROPS the path — always print
   `https://www.studylah.education/...` URLs.
6. Deleting a route leaves stale `.next/types` — remove the folder and
   rebuild rather than chasing ghost type errors.

## Content & notation rules

- **Chemistry notation**: `topic`/`misconceptionTag` fields are syllabus
  codes (C4, T10 — ASCII, never subscripted); `stem`/`options`/
  `workedSolution` use real Unicode (`(NH₄)₂SO₄`, `Fe²⁺`). Never apply a
  blanket regex — use explicit molecule maps.
- Question banks and practice-drill content authored by agents are marked
  `FOR OWNER REVIEW` — the owner is the content authority.
- Real product PDFs live on the volume and in R2, never in git
  (`private/` is gitignored; seed generates placeholders in dev).

## Compliance (non-negotiable, from the owner's own brief)

- Banned words anywhere customer-visible: guaranteed, 100%, confirmed,
  leaked, insider, sure-win. Probabilistic language only; hits AND misses
  published on `/accuracy`.
- `STANDARD_DISCLAIMER` (src/lib/compliance.ts) verbatim on product pages,
  results, emails.
- Grade outputs only as "indicative estimate … not a promise", with the
  caveat line on every surface.
- PDPA: explicit unticked-by-default consent + timestamp; unsubscribe in
  every marketing-ish email; payout handles and parent emails are
  admin-eyes-only.
- Referral cash (S$15/S$15) is disbursed MANUALLY by the owner — the app
  never moves money. Never surface cash rewards inside the iOS app
  (App Store rules).
- Gamification (roadmap): XP rewards effort, never grades; no loot boxes,
  currencies, or paid boosts — the audience is minors.

## Verification culture

Every change is verified end-to-end before handoff: build green + eslint
(the repo runs strict react-hooks rules: no sync setState in effects — use
`useSyncExternalStore` for client-only values; no `Date.now()` in render),
banned-words grep on new copy, and a real browser/API pass (log in as
`test@example.com` locally; magic-link tokens print to `data/outbox/`).
Clean up test rows from `prisma/dev.db` afterwards. An upload's HTTP 200
proves nothing about persistence — snapshot ids/hashes, redeploy, re-compare.

## The game layer ("Clear the Fog") — SHIPPED, web-first

XP ledger (`XpEvent`, unique per-action sourceKeys = farm-proof; levels/titles
derived in `src/lib/game.ts`), badges (`Achievement`), evolving ghost
companion, quest-framed Today, fog-of-war hex campaign maps on Study plan
(`campaign-map.tsx`, always-visible section), the bestiary (mistakes as
monsters with HP + respawn), and **Adventure mode** (`/account/adventure`):
a canvas GB-style overworld — walk the ghost, wild battles in tall grass,
subject gyms — all questions server-graded (`/api/account/game/*`,
ownership-gated, wild XP capped 15/day, gym clear 25 XP once).

## The native shell (Capacitor) — code complete, stores pending owner setup

`capacitor.config.ts` loads the LIVE site (features ship server-side, no
store re-review). `android/` + `ios/` scaffolds committed (iOS uses SPM, no
CocoaPods). Push: Android→FCM (`fcm.ts`), iOS→direct APNs over node http2
(`apns.ts`), orchestrated per-token in `native-push.ts`; device tokens in
`NativePushToken` via `/api/account/push/native`; streak cron sends to web +
native. **6-digit code login** (stateless HMAC windows,
`currentLoginCode`/`verifyLoginCode`, throttled `/api/account/verify-code`,
code included in the login email) because magic links break in webviews;
`REVIEW_EMAIL`/`REVIEW_CODE` env pair = store-reviewer demo login.
**Reader-app gating**: `src/lib/native.ts` (`useNativePlatform`, dev
override `localStorage.studylah_native`), header/account-nav hide all
commerce in-shell, `CommerceGate` wraps add-subjects + referrals pages.
**Game shell**: inside the native app the account area renders as a game
app, not a website — an inline root-layout script stamps `html[data-native]`
pre-paint, `AccountChrome` (`account-chrome.tsx`) swaps the web dashboard
for a HUD (ghost/level/XP/streak) + bottom tab bar (Missions/World/Battle/
Bestiary/More), the site header returns null on `/account*` in-shell, the
footer is CSS-hidden, `/account/more` is the fifth tab (campaign/stats/
timer/loot/settings/blog + legal + sign out), and the dashboard `template.tsx`
gives game-style screen transitions. Web rendering is untouched.
Builds run on **Codemagic** (`codemagic.yaml`, manual workflows; iOS needs
the `studylah-asc` integration, Android the `studylah_keystore`).
**`DEPLOY-APP.md` is the complete store playbook** — Firebase, APNs key,
listings, review notes, release runbook.

## Next

**Scanned question-bank ingestion**: R2 for scans, Claude-vision OCR into
structured questions, owner review queue in admin.

## Quiet backlog (raise only when the owner asks "what's pending")

- Biology (Science) companion PDF page 2 still shows Pure Biology's Paper 3
  spec; Vault covers vs site question counts mismatch (owner to confirm).
- Referral terms + refund policy await real lawyer review.
- Homepage legacy "87%" figure decision; SEAB 2026 dates pre-fill when
  published; Google Search Console setup.
