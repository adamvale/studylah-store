# StudyLah, Project State & Institutional Knowledge

> The onboarding document for any developer or AI agent working on this repo.
> It captures what the code cannot say about itself. Update it when facts here
> go stale, it is the single source of tribal knowledge. NO SECRETS in this
> file, ever.

## What this is

**StudyLah** (www.studylah.education) is a LIVE, revenue-generating Singapore
exam-prep business: data-driven 2026 exam forecasts + original practice
content for O-Level (G3) and N(A)-Level (G2), sold as per-subject PDF packs,
with **Study HQ**, a full gamifiable study system, included with every
purchase. Owner is a non-developer; agents do the engineering, the owner does
dashboards (Railway/Stripe/store accounts) and content review.

## Architecture (all cloud)

- **App**: Next.js 16 App Router + Tailwind v4, TypeScript. Read
  `node_modules/next/dist/docs/` before assuming Next conventions (see
  AGENTS.md, this Next version has breaking changes vs. training data).
- **DB**: Prisma 7 + SQLite via `@prisma/adapter-better-sqlite3`. Hand-written
  SQL migrations in `prisma/migrations/`; `scripts/start-prod.sh` runs
  `migrate deploy` + idempotent seed on boot.
- **Hosting**: Railway (Dockerfile build, single replica, SQLite forbids 2+),
  volume at `/data` (`DATABASE_URL=file:/data/prod.db`,
  `PDF_STORAGE_DIR=/data/pdfs`). GitHub repo `adamvale/studylah-store`; the
  owner pushes via GitHub Desktop (agents have no push credentials).
  GOTCHA: because we build via Dockerfile, EVERY `NEXT_PUBLIC_*` var the app
  reads must be declared as an `ARG`+`ENV` in the Dockerfile, or it ships as
  an empty string no matter what the Railway service variable says (they are
  inlined at BUILD time, and Docker only sees build args that are declared).
  Setting the Railway variable alone does nothing. The pixel/GA ids
  (`NEXT_PUBLIC_META_PIXEL_ID`, `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_TIKTOK_PIXEL_ID`)
  and `NEXT_PUBLIC_VAPID_PUBLIC_KEY` are declared there; add new ones the same way.
- **Email**: Resend (falls back to a `data/outbox/` file stub in dev).
- **Payments**: Stripe LIVE (PayNow + cards + Alipay/WeChat Pay). Mock mode
  when no `sk_` key, full flows testable without payment.
- **Storage**: Cloudflare R2 bucket `studylah-master` (S3-compatible), 
  nightly DB backups (`/api/cron/backup-db`) and master content mirror under
  `product-pdfs/`. Client lib: `src/lib/server/r2.ts`.
- **Scheduled jobs** (cron-job.org hits these; all gated by `CRON_SECRET`):
  hourly `/api/cron/diagnostic-followup`, hourly `/api/cron/streak-reminder`
  (only acts 19:00-22:59 SG), hourly `/api/cron/tutor-sessions` (Guru's
  standing weekly tuition-slot reminders, OWNER: add this one), daily
  `/api/cron/parent-digest`, daily `/api/cron/backup-db`.
- **Diagnostic nurture ladder** (`diagnostic.ts` `SEQUENCE` + the hourly
  `diagnostic-followup` cron): Day 0 is the immediate result email; Days 1-6
  are six follow-ups (open loop, authority, narrative, product, risk
  reversal, countdown+anchor). `DiagnosticAttempt.followUpStep` is the cursor
  (0-6), `followUpAt` holds the next step's due time. The cron sends every due
  step and advances; a paid order for that email ends the ladder immediately.
  Copy is compliance-bound (probabilistic, no grade promises, real numbers).
  The v2.20 migration backfilled pre-existing follow-ups to step 6 so the
  switch never re-emailed an already-contacted lead.
- **Mobile**: PWA is live (manifest, `public/sw.js`, web push). Native
  Capacitor shell for App Store/Play is the current roadmap (built via
  Codemagic cloud CI, this repo is connected; local Mac cannot build iOS).

## The product catalogue

22 subjects (14 O-Level, 8 N(A)) × 4 products each: Exam Forecast, a
subject-specific **companion** (name varies per subject, see
`SUBJECT_SPECS` in `src/lib/catalogue.ts`), Sure Questions Vault, Final
Rehearsal (2-3 PDFs; paper numbers vary by subject). Tiers display as
**Starter/Plus/Ultra** since v2.20 (renamed from Essential/Strategic/Master;
internal `Tier` keys stay `essential/strategic/master`). CRITICAL:
`OrderItem.tier` stores the DISPLAY name at checkout, so pre-rename orders
hold "Master" forever; every stored-string entitlement check must use
`ULTRA_DB_TIERS` from catalogue.ts (matches "Ultra" AND "Master"), never the
literal current name. Mega-Bundle (3 subjects), All-In (5-6). Slugs are
FROZEN (they live in URLs and in every `ProductFile.filePath`).

**Pricing narrative (owner decision, v2.20):** a tier's OFFICIAL original
price is its a la carte parts value (Ultra = the sum of its products, S$116
for O-Level sciences), permanently discounted to the tier price (S$68);
bundles discount further. Every savings display (`PricedCart.baseline` /
`.savings`, /pricing, /bundles, cart, builder) measures against parts value
via `tierValue` / `bundleLadder`, NEVER against the sum of tier prices, and
the cart summary itemises "Pack discount" + bundle discount so the column
sums to the total. Charging maths (`priceCart` internals) still composes
from tier prices and is unchanged.

**"See inside" pack preview** (`src/components/pack-preview.tsx`, wired into
`SubjectView` above the tier selector). A flippable, image-only viewer showing a
few real pages of each of the 4 products, with the sellable content (2026 calls,
questions, answer keys) Gaussian-blurred and a PREVIEW watermark baked in. The
images live in `public/previews/<level>/<slug>/` and are rendered OFFLINE by
`scripts/gen-pack-preview.py` (needs `pypdfium2` + `Pillow`; reads from
`private/pdfs/…`), so **no source PDF is ever served to the browser**. To add a
subject: render its previews (forecast inner pages FULL-blur to protect the
prediction table; other products keep a thin title strip sharp), eyeball each
image, then add a manifest entry to `PACK_PREVIEWS` in `src/lib/pack-previews.ts`.
Currently populated for `o-level/chemistry-pure` only.

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

## FastTrack (StudyLand, `/account/fasttrack`) — answer like the examiner

The technique layer for students stuck below ~60%: they usually KNOW the
material but lose marks at the point of writing (missing keywords, vague
phrasing, wrong format, incomplete logic). FastTrack teaches the writing per
QUESTION ARCHETYPE (a "Play"), for Chemistry, Physics, Biology first (parks
here now; the plan is to fold each Play into the game later as a trainable
"technique"). Master-gated, in the Study nav after Study plan.

- **Content**: `src/lib/fasttrack.ts` (client-safe, no imports). ~10 Plays per
  family (30 total). Each Play has the 5 parts that map 1:1 to the four leaks:
  RECOGNISE (trigger words, what it tests, marks→points), SKELETON (the 3-4
  step answer shape), KEYWORDS (vague ✗ → exact ✓ contrast pairs), MODEL
  (full-mark answer + crediting points), DRILL (a fresh question). Authored by
  FAMILY so Pure + Science + N(A) rows share one playbook
  (`familyForSubject` maps catalogue family → Play family). Compliance: no
  banned words, no em/en dashes, molecules in real Unicode.
- **Marking**: the drill reuses the existing AI marker (`/api/account/tutor`
  mode `structured`, which returns `Score: X/Y` + per-point ✓/✗). No new AI
  surface. The client parses the score and posts the pct to FastTrack.
- **Progress/mastery**: rides the shared SRS engine, `kind: "fasttrack"`
  (`src/lib/server/srs.ts` ReviewKind extended). A good drill (≥60% of marks)
  advances the box; two consecutive good drills reach box 3 = MASTERED; a
  poor drill lapses to box 1. itemKey = the Play id. Small once-per-SG-day XP
  through the farm-proof ledger. Server module
  `src/lib/server/fasttrack.ts`; API `GET/POST /api/account/fasttrack`
  (Master-gated; the pct is bounded so a dishonest client gains only a few
  daily XP, never a grade).
- **UI**: `src/components/fasttrack-hub.tsx` — family tabs with
  "N/M plays mastered", the four-leaks framing, the Play list, the 5-part Play
  detail, the AI-marked drill, and the **Classifier game** ("The 5-second
  read": flash a real stem, tap its archetype, 10 rounds, scored) which trains
  recognition under time pressure.
- **Discovery**: the Mistakes-page Diagnosis panel surfaces a FastTrack nudge
  when ≥2 open concept/method mistakes are in a FastTrack subject (those are
  writing leaks). See `mistake-notebook.tsx` `showFastTrack`.
- **To extend**: add Plays to the family arrays in `fasttrack.ts` (ids are
  stable = mastery keys). Adding families later means adding to `PLAYBOOKS`,
  `FAMILY_META`, and `familyForSubject`.

## Admin Mail tab (v2.18): hello@ inside the panel

/admin/mail mirrors the hello@studylah.education mailbox (hosted on
SiteGround) and replies from the panel. Facts:

- `src/lib/server/mail.ts`: IMAP sync via imapflow/mailparser into the
  EmailMessage table. READ-ONLY against the host, nothing is deleted or
  flagged there, webmail stays the backup and source of truth. Sync runs on
  page load (throttled to every 2 min) plus a "Check mail now" button.
  Cursor = Setting keys mail.lastUid / mail.uidValidity / mail.lastSyncAt.
  HTML bodies are converted to text server-side and NEVER rendered raw (XSS).
- Replies send via the existing Resend pipeline as MAIL_FROM (default
  "StudyLah <hello@studylah.education>") with In-Reply-To/References headers,
  and are stored direction="out" in the thread. Local dev = data/outbox stub.
- Env: MAIL_IMAP_HOST / MAIL_IMAP_PORT / MAIL_IMAP_USER / MAIL_IMAP_PASSWORD
  (+ optional MAIL_FROM). Unset = the tab shows setup instructions.
- Threads group by counterpart address, unread badges, archive/unarchive.
  UI follows the WhatsApp inbox pattern.
- Local gotcha discovered here: `prisma migrate dev`/`deploy` hang or error
  while ANY server holds the SQLite file, and the local Prisma 7.8 schema
  engine errored on this DB; migrations in this repo are hand-written SQL
  (see prisma/migrations naming) applied with sqlite3 + a matching-checksum
  row in _prisma_migrations, so Railway's `migrate deploy` still applies them
  cleanly in prod.

## Tests (`npm test`)

Zero-dependency unit tests via Node's built-in runner + the existing `tsx`
loader (`node --import tsx --test "src/**/*.test.ts"`). Coverage is deliberately
on the pure, high-blast-radius logic where a silent regression costs money or
makes a false claim to parents: the bundle ladder (3/6/8 prices, savings,
percents, per-subject monotonicity), tier price points and cart invariants
(`pricing`), tier config (`catalogue`), and compliance-copy invariants (no
em/en dashes, no result guarantees). Prisma-bound modules are not covered (they
can't import standalone here). Run before pushing pricing or compliance edits.

## Deploy awareness (v2.17): updates never eat a student's quiz

Reality on Railway with the SQLite volume: while a push BUILDS, the old app
serves normally (no downtime, so do NOT turn on maintenance mode for routine
deploys); the visible gap is the container swap, about a minute, and the app
cannot serve its own maintenance page during it. The system that handles it:

- `/api/version` beacon (returns the commit sha / deployment id, no-store).
  Also the Railway healthcheckPath (railway.json), so traffic only switches
  once the new container actually serves.
- `UpdateWatcher` (mounted in AccountChrome): polls the beacon every 45s and
  on tab focus. Two failed polls in a row = swap in progress, shows a quiet
  glass toast "System and content updating" (non-blocking). A successful
  poll with a NEW version = "StudyLand just got an update, finish your quiz,
  then refresh" with a Refresh button. Never auto-refreshes.
- Daily-quiz submit retries up to 3 times, 4s apart, on network failure/5xx,
  so an answer sent during the swap lands instead of erroring.
- The manual maintenance mode (flag file + proxy rewrite, /admin) stays for
  BIG jobs only: schema migrations, content restructures, anything where the
  site must actually close.

Owner workflow for normal updates: just push. No maintenance toggle needed.

## SEO / AI-search layer (v2.16)

Focused on "O Level / N Level Chemistry Physics Biology" queries. When
touching public pages, keep this layer intact:

- `src/lib/subject-seo.ts` is the single source for subject-page search copy:
  `subjectSeoMeta()` (keyword titles like "O Level Chemistry Pure (6092)
  2026: Predicted Topics & Practice", descriptions, keywords, OG) and
  `subjectFaqEntries()`/`subjectFaqSchema()` (the on-page FAQ + FAQPage
  JSON-LD in `subject-view.tsx`; sciences get extra revision/marking Qs).
  All answers are compliance-audited: probabilistic language, "never leaked",
  no banned words, no dashes.
- Home has an ABSOLUTE keyword title; /subjects carries the catalogue
  ItemList JSON-LD + keyword metadata; FAQ/diagnostic/accuracy titles are
  keyword-front-loaded. ORG_SCHEMA in layout.tsx lists knowsAbout (syllabus
  codes 6091/6092/6093, 5086-5088, 5105-5107).
- Sitemap: /o-level and /na-level 301 to /subjects so the map lists
  /subjects + subject detail pages, never the redirects.
- Three evergreen blog guides target the science keywords (slugs
  o-level-chemistry-2026-topic-guide, o-level-physics-2026-revision-plan,
  o-n-level-biology-marks-guide). Blog posts are typed modules in
  src/lib/blog.ts; slugs are permanent.
- public/llms.txt is the AI-search manifest (StudyLand naming, FastTrack,
  per-science deep links with codes, the guides). Update it when products,
  pricing, or naming change. robots.ts deliberately welcomes AI crawlers.

## Site-wide theme (v2.15): the purple glass design IS the site theme

As of v2.15 the StudyLand palette is the WHOLE site's theme, not a scoped
skin. Facts that matter when editing:

- v2.15.1 storefront glass pass: the gradient (body::before) and blueprint
  grid (body::after) are global; `.sl-bg` is a display:none no-op. Scoped
  overrides under `#main-content` make `bg-night` / `bg-night-2` translucent
  so marketing bands read as glass (no backdrop-filter there, it caused
  compositing artifacts on page-height wrappers). Header/footer/mobile menu
  are translucent blur chrome.
- `globals.css` `@theme` tokens are the purple palette (night `#0c0920`,
  night-2 `#140f31`, translucent surface/hairline, lavender ink/body) and
  `--font-display` / `--font-sans` are BOTH Plus Jakarta Sans. The gradient
  backdrop is painted globally by `body::before`; `.sl-bg` now adds only the
  blueprint grid accent inside StudyLand. The `.studyland` wrapper class
  still exists (same values) but is no longer what makes things purple.
- **No emoji anywhere** (owner rule, alongside the no-dashes rule). Every
  glyph is a stroke SVG from `src/components/icons.tsx` (`NamedIcon` +
  `NAMED_ICONS` for data-driven cards). Data files that used `emoji:` fields
  (game badges/starters/monsters, Learn/More/feature cards, FastTrack
  families, subject-family maps) now hold ICON NAMES in those fields and
  every render site draws `<NamedIcon/>`. Do not add emoji to copy, data,
  or chat strings.
- **Point form for all answers and teachings** (owner rule). Every teaching,
  feedback, or worked-solution surface in StudyLand and StudyLah Legends
  renders through `src/components/teach-text.tsx` (`TeachText`): "- " lines
  become bulleted points, "Step 1:" / "1." lines become numbered calculation
  steps, ✓/✗ lines tint, "Label:" lead-ins bold, and unstructured prose is
  sentence-split into points (abbreviation-guarded, display-only, source text
  never mutated). The AI tutor prompts (`api/account/tutor`) mandate point
  form and Step 1/2/3 calculation layout with plain-text maths symbols. New
  answer/teaching surfaces must render via TeachText, not raw `<p>`.
- **One chrome for web + native** (`account-chrome.tsx`): the old pixel
  GameHud/GameTabs native branch is deleted; the Capacitor shell renders the
  same glass header and Today/Learn/Progress/Legends/Account bottom bar as
  the web app (FxLayer stays mounted for XP fly-ups). The header is ONE
  merged row (ghost + StudyLand wordmark + Lv chip + title + XP bar + Sign
  out); the separate email row, PlayerHeader block and dashboard
  "StudyLand" chip were removed as redundant repeats.
  `home-base.tsx` is deleted. The "Every PDF is watermarked" footer is gone
  everywhere; the dashboard footer now says "iOS and Android app coming".
- **Gugu is storefront-only**: `gugu-chat.tsx` returns null on `/account*`
  (checked at render, so client-side nav toggles it correctly) and on native.
- Today page: HomeBase card removed; the week XP chart and the two stat
  tiles were merged into ONE `glass-deep` card (counters inline under the
  bars).

## StudyLand app redesign (purple glass theme, mobile-app-first)

StudyLand was re-skinned + partially restructured to an app-reference design
(owner-supplied mockups: purple gradients, glassmorphism, Plus Jakarta Sans,
pill chips, icon orbs, bottom tab bar). Key facts:

- **Theme system**: `.studyland` wrapper class (set in `account-chrome.tsx`)
  scopes CSS-variable OVERRIDES of the site tokens (surface/hairline/body/
  night...), so every existing dashboard component re-themes without edits.
  Utilities in `globals.css`: `.sl-bg` (fixed gradient backdrop + grid),
  `.glass` / `.glass-deep`, `.chip`, `.icon-orb`, `.sl-btn`, `.sl-grad-text`,
  `.sl-strip` (horizontal snap strip). Font: Plus Jakarta Sans
  (`--font-jakarta`, root layout), applied by `.studyland`.
- **Chrome** (`account-chrome.tsx` web branch): glass header (ghost orb +
  email + Sign out chip), PlayerHeader, and a **phone bottom tab bar**
  (Today / Learn / Progress / Legends / Account; non-Master collapses to
  Account + Unlock), hidden from md up where the top nav pills show. Native
  shell renders the same chrome (see v2.15 section above).
- **Nav IA**: the 10-item Study dropdown is gone. Top nav = Today, Learn,
  Progress, Account(dropdown), Beta. **/account/learn** is the hub page: a
  2/3-col grid of tinted glass tool cards (FastTrack, Drills, Practice,
  Study plan, Mistakes, Timer, Rescue, War Room, Legends).
- **Today dashboard** (reference layout): "Hey {name}!" gradient greeting,
  week XP glass card (7 gradient bars from XpEvent aggregated per SG day) +
  2 stat tiles (quests done, reviews due), Priority tasks checklist card
  (replaced QuestBoard on web; quest-board.tsx still exists for native),
  subject strip of ring gauges (replaced the old bottom risk list).
- **Today hero (Query reference, v2.16.1)**: the dashboard greeting follows
  Panze UX Studio's "Query" AI-companion layout the owner picked: `.sl-bloom`
  soft glow behind the hero, a small "StudyLand" sparkle chip, the gradient
  name, then exactly TWO primary glass action cards (daily three + either
  Clear mistakes or the Learn hub, whichever matters). Keep the two-action
  rule: the home screen asks for one decision, it is not a menu.
- **Bite-sized rule** (owner): learning activities show ONE part per screen.
  FastTrack's play detail is now a 5-step wizard (Recognise → Shape →
  Keywords → Model → Drill) with progress segments + Next/Back
  (`fasttrack-hub.tsx`). Apply the same pattern when reworking Practice/
  study surfaces later.
- **Progress**: `RiskMeterSection` is a worst-first 2-col grid of compact
  ring-gauge cards with ONE next action each (was five stacked red bars).
- **De-stack pass complete** (all ten problem pages restructured):
  Practice's stacked drills use a shared one-at-a-time `Deck`
  (`practice-tools.tsx`: keyword precision, SBQ ladder, POA formats; the
  flashcard/QA decks already were). Mistakes entries are compact expandable
  `<details>` rows (monster orb summary, question + actions behind the tap).
  The Rescue questionnaire is three balanced step bands with chip choices
  and a subject chip grid (still a plain GET form, answers in the URL), and
  its day list is a dense 2/3-col grid with days 4+ folded behind a
  disclosure. The study-plan campaign shows ONE hex map with subject chips
  above it and a single legend (was one map + legend per subject).

## Master-tier gating (StudyLand + StudyLah Legends are a Master perk)

The whole site now sells StudyLand (the `/account` dashboard) and StudyLah
Legends (the game) as **Master-tier-only** perks, so the app enforces it, no
grandfathering. A customer "has access" once they own **at least one**
Master-tier subject (`OrderItem.tier === "Master"`). Single source of truth:
`src/lib/server/entitlements.ts`.

- **`hasMasterAccess(customerId)`** — boolean, one Prisma lookup for any
  Master order item.
- **`requireMaster(customerId)`** — page guard; non-Master → `redirect("/account/unlock")`.
  Applied after the login redirect in every StudyLand page under
  `src/app/account/(dashboard)/`: page (Today), study, practice, progress,
  mistakes, rescue, timer, adventure, more.
- **`masterApiGate(customerId)`** — API guard; returns a `NextResponse`
  (401 not signed in / 403 not Master) or `null` to proceed. Wired into every
  StudyLand write/read route: `daily-quiz/submit`, `mistakes`, `goals`,
  `topic-progress`, `xp/focus`, and all `game/*` routes (answer, quest, gym,
  duel, duel/take, story, guru, questions).
- **`/account/unlock`** — the upsell page non-Master buyers land on: "StudyLand
  is a Master-tier perk", **Upgrade to Master** (→ `/subjects`) and
  **Re-download my PDFs** (→ `/account/orders`).
- **Nav** — `(dashboard)/layout.tsx` computes `isMaster` and passes it to
  `AccountChrome`. Non-Master: the native game shell (HUD + tab bar) is
  suppressed (`native && isMaster`) and they get the plain web shell;
  `AccountNav` hides every locked tab (`MASTER_ONLY` set) and leads with an
  **Unlock StudyLand** link.
- **Always open to every buyer** (never gated): re-downloading PDFs
  (`/account/orders`, the download routes), `/account/settings`,
  `/account/add-subjects`, `/account/referrals`, and auth. The promise is
  "your PDFs are always yours"; only the study/game layer is the Master perk.

### Admin comp grants (`/admin/access`)

Admins grant a customer pack access without a purchase from the **Access** tab.
A grant is just a **S$0 order** whose `stripeSessionId` is prefixed `grant_`, so
it reuses the entire order pipeline: entitlement (a Master grant flips
`hasMasterAccess` → StudyLand + game unlock), the download page, and order
history all work with zero extra plumbing. `src/lib/server/access-grants.ts`:
`grantAccess({ email, items, notify })` (builds a comped `CheckoutQuote`
directly, so the public 6-subject cart cap does NOT apply, and calls
`createOrderFromCheckout` with the `comp: true` flag — which skips the referral
reward + the "thanks for your order" email), `listGrants`,
`revokeGrantsForEmail`. Admin-gated routes: `/api/admin/access/{grant,revoke}`.

- **One subject or a bundle**: the Subject dropdown offers single subjects and
  bundles (`all::<level>` for a whole level, `all::all` for every subject); a
  bundle grant is one order holding all those subjects.
- **One row per customer**: each grant is its own `grant_` order, but
  `listGrants` groups by email, so granting the same customer more subjects
  adds to their existing row (deduped by subject+tier) instead of a new entry.
  **Revoke is per-customer**: `revokeGrantsForEmail` deletes every `grant_`
  order for that email (+ items + download tokens) in one txn, scoped to
  `grant_` orders so a real purchase can never be deleted.
- **Optional email**: a "notify" checkbox (default on) sends the customer a
  "Your StudyLah access is ready" email with a one-time sign-in link
  (`sendGrantEmail`, best-effort, never fails the grant). Untick it for a quiet
  comp. Either way they sign in with that email to get their PDFs + dashboard.
- **Customer directory**: the Access page also lists every customer
  (`listCustomers`) with their purchased subjects, total spend, order count,
  and an access badge (StudyLand = Master, "PDFs only" = Essential/Strategic,
  "Comp" = has a grant, "—" = no orders). Handy for deciding who to grant.

## Visitor journey analytics (`/admin/visitors`)

First-party, anonymous, no-PII tracker, own-DB (same philosophy as the
diagnostic funnel), so no third-party pixel needed for basic web analytics.

- **Model** (`VisitorSession` + `VisitorEvent`, migration
  `20260714040000_visitor_analytics`): a session per visit (random `visitorId`
  in localStorage + `sessionId` in sessionStorage), with pageview/click events.
  Stores landing path, UTM, device, referrer **hostname only**. No PII.
- **Client** `src/components/visitor-tracker.tsx` (mounted in `layout.tsx`):
  records a pageview on every route change and clicks via one delegated
  capture-listener (label = `data-track` attr, else aria-label / text). Batches
  and flushes to `/api/track` every 5s + on `pagehide` (`sendBeacon`).
  **Self-excludes `/admin`** so the owner's own browsing isn't tracked.
- **Ingest** `POST /api/track` (public, defensive: caps 50 events/batch + field
  lengths, whitelists types) upserts the session and bulk-inserts events.
- **Admin** `src/lib/server/visitor-metrics.ts` → `/admin/visitors`: overview
  (visitors 24h/7d/all, pageviews, clicks, avg pages/visit, returning %,
  mobile %), top pages / most-clicked / referrers / devices, and **Recent
  journeys** (each visit expands to a click-by-click, timestamped replay).
- **Link-in-bio + UTM attribution** (`/start`, noindex): the single link behind
  every social bio. Reads `utm_source/medium/campaign` from its own URL and
  forwards them onto its outgoing links; the tracker also persists first-touch
  UTM to `sessionStorage("sl_utm")` on session start, and the diagnostic quiz
  falls back to it at submit when the URL has no UTM, so bio-link attribution
  survives in-site navigation. UTM convention: `utm_source` =
  tiktok|instagram|facebook, `utm_medium` = organic|paid|bio,
  `utm_campaign` = free-form (e.g. `launch`). Bio URLs:
  `/start?utm_source=tiktok&utm_medium=bio` etc.
- Volume note: writes on every pageview/click. Fine at current scale; add
  sampling / a retention prune if traffic gets large.

## Deployment gotchas (each cost real debugging, do not relearn)

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
   batching), use `findFirst` for idempotency pre-checks.
5. The bare domain 301s to www and DROPS the path, always print
   `https://www.studylah.education/...` URLs.
6. Deleting a route leaves stale `.next/types`, remove the folder and
   rebuild rather than chasing ghost type errors.
7. **iOS TestFlight rejects re-used build numbers** ("The bundle version must
   be higher than the previously uploaded version"). `CFBundleVersion` comes
   from `CURRENT_PROJECT_VERSION`, which the Capacitor template left at `1`.
   The `ios-release` Codemagic workflow now **auto-stamps** it with the Unix
   timestamp (`sed` on both pbxproj build configs, after `cap sync`) so every
   upload is strictly higher, build numbers are never bumped by hand. Only
   the user-facing `MARKETING_VERSION` (and Android `versionCode`) stay manual.
8. **`ANTHROPIC_API_KEY` (Railway server var) powers the Gugu chatbot's
   free-text answers.** Missing/unset ⇒ the bot silently degrades to
   scripted-fallback mode (quick replies still work, no error). Server-side
   only, not `NEXT_PUBLIC_`. See the Gugu chatbot section for the full flow +
   compliance guardrails.

## Content & notation rules

- **Chemistry notation**: `topic`/`misconceptionTag` fields are syllabus
  codes (C4, T10, ASCII, never subscripted); `stem`/`options`/
  `workedSolution` use real Unicode (`(NH₄)₂SO₄`, `Fe²⁺`). Never apply a
  blanket regex, use explicit molecule maps.
- Question banks and practice-drill content authored by agents are marked
  `FOR OWNER REVIEW`, the owner is the content authority.
- Real product PDFs live on the volume and in R2, never in git
  (`private/` is gitignored; seed generates placeholders in dev).
- **No dashes as punctuation** (owner rule, 2026-07-13): never use em dashes
  (`—`) or en dashes (`–`) in ANY user-facing copy, website or StudyLah
  Legends game (code strings, JSX text, and `content/game-bank/*.md`). Use
  commas, colons, periods, or parentheses instead. Hyphens in words/codes
  ("O-Level", "money-back", "5086/5088") are fine.

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
- Referral cash (S$15/S$15) is disbursed MANUALLY by the owner, the app
  never moves money. Never surface cash rewards inside the iOS app
  (App Store rules).
- Gamification (roadmap): XP rewards effort, never grades; no loot boxes,
  currencies, or paid boosts, the audience is minors.

## Verification culture

Every change is verified end-to-end before handoff: build green + eslint
(the repo runs strict react-hooks rules: no sync setState in effects, use
`useSyncExternalStore` for client-only values; no `Date.now()` in render),
banned-words grep on new copy, and a real browser/API pass (log in as
`test@example.com` locally; magic-link tokens print to `data/outbox/`).
Clean up test rows from `prisma/dev.db` afterwards. An upload's HTTP 200
proves nothing about persistence, snapshot ids/hashes, redeploy, re-compare.

## StudyLah Legends, the season pack (all 4 waves shipped)

The commissioned season design pack (owner's drive, `claude_code_handoff
1.1/design_docs`) is implemented as data in `src/lib/game/season.ts`:
province lore names + d100 encounter tables per subject family (the table
IS the pedagogy), balance pass (monster HP by stage 3/4/5, stage from
player level bands L1-6/7-13/14+, breather = shield-next-miss, missed
heavy heals the monster, wild XP = 10/attempt +10/win capped 150/day,
mistakeCleared 25), 10 side quests with the pack's scripts (client step
tracking in localStorage `ff_quest_state`, notebook quests server-verified
in `/api/account/game/quest`), quest log (📜 top bar). Zones: per-province
**Undercroft** (echo-stone order puzzle from the entrance tablet →
keystone set-battle, +1 ❤ on miss, persists `under:<key>`), **Saltwind
Steps** (mixed-subject breather zone, unlocks at 2 gyms), **Old Campus**
(post-championship; fog-bank tiles are non-respawning S3 battles persisted
`campus:<x>-<y>`; Murk's diary unlocks by progress; the ninth-lamp beat).
Weekly **Fog Front** (weakest subject via risk engine, landmark named on
the hub notice board, 50 XP once per ISO week `front:<week>`), mini-bosses
**Whisper/Hurry/Blank** with battle modifiers (server-safe fog-hint hides
one WRONG option; soft timer is VISUAL-ONLY per the pack's approved
fallback; jab-lock rounds 1-2 + composure bonus) + their bark pools.
Retention: wipe letters (worked-solution recap overlay on 0 hearts),
notebook echoes (25% of route encounters use the subject's latest
uncleared mistake species), shield morning line in Home Base. **Exam Week
Mode** (any ExamDate within 7 days): −50% encounters, Front paused, quiet
greetings. Deferred pending owner sign-off: keepsake poster (share-safety),
festival (needs calendar anchor), companion chores beyond the Home Base
line. Murk battle barks + Q4 moving marker downgraded per pack fallbacks.

## StudyLah Legends, the Lightbearer Saga (story + expansion zones)

`docs/STORY-CODEX.md` is the game's original, copyright-free narrative spine
("the Fog is the hush before a paper"), written to ABSORB every existing
element rather than replace it. Implemented zones (all Singapore-named, wired
in `world2.ts`, districts in `singapore.ts`):

- **The Sunken Cells, Fort Canning** (`cells`): Act III dungeon off the hub
  spine's south end (portal locked until 2 gyms; test-unlock opens). Cave
  serpentine, three name-plaque signs with relit LANTERN tiles, two Fog Order
  battles (beats `cells1`/`cells2`), and the Murk reveal, a dialogue-only NPC
  (`murkcells`, special-cased in handleA) that posts beat `cells` on finish.
- **The Lantern Walk, Sentosa/Southern Isles** (`lantern`): five sand islets
  joined by plank bridges off the Saltwind shore; wind-warden battle (beat
  `walk`); the silent Examiner (`finalpaper`, 5-question perfect-score battle,
  dialogue "…") appears ONLY once all Three Hushes are beaten.
- **The Reading Room, Bras Basah** (`reading`): post-game New Game+ hearth
  (interior tiles + campfire + lanterns) off the hub's south-east lane, locked
  until `championship`; Maple/Kai/Rin/Sage epilogue dialogue.

New beats whitelisted in the story route: cells1/cells2/cells/walk/finalpaper.
LANTERN + SIGN tiles draw zone-aware bases (cave/sand/wood). Verified: the
Cells fully in-browser (zone, art, NPCs, minimap→Fort Canning); all 5 beats
accepted server-side; Reading Room/Lantern Walk registered via the same
proven portal mechanics, worth an on-device walkthrough.

## StudyLah Legends, the Academy (Subject Gurus, teach + check)

`🎓 Sage of the Academy` (`guru` NPC, Haven Hollow (8,12), sprite
`examiner_sage`) opens **The Academy** (`src/components/subject-guru.tsx`):
one Guru per subject the student is ENROLLED in. Each Guru teaches a short
lesson (2-3 beats) then sets one check-question from that subject's own bank.
Content: the lesson deck is `src/lib/game/guru.ts` (`guruLesson(family,
level)`), which maps every subject family to level-appropriate teaching
beats drawn from the **original** in-house library `practice-content.ts`
(definitions, marker's-phrasing precision cards, chem qualitative-analysis,
maths careless-error checklists, humanities SBQ ladder + command words, POA
formats), never scraped from any paper. The check-question comes from the
exact `level`+`slug` diagnostic set, so O-Level Pure, O-Level Science and
N(A)-Level each stay at their own depth (verified: a student owning O-Level
Physics (Pure) + N(A)-Level Physics + N(A)-Level Biology sees exactly those
three Gurus with correct level badges; a non-owned subject 403s).

Server route `src/app/api/account/game/guru/route.ts`: GET lists the
student's Gurus (gated by `ownedSubjects`); PUT starts a lesson (beats + one
SEALED check-question, no answer key); POST grades the check, reveals the
worked solution, and awards effort XP (`guru:<day>:<n>`, ATTEMPT 8 + PASS 8,
daily cap 80). Compliance-safe: answer keys never leave the server pre-grade,
XP rewards effort not grades, no cross-subject/level bleed.

**Author content bank (DATABASE-BACKED):** the PDF author exports each
subject's questions + teaching as Markdown (`content/game-bank/<level>__<slug>.md`:
frontmatter + fenced ```yaml blocks, `type:` mcq|short questions with answer
key + worked solution, `kind:` teaching cards), this stays the git-tracked
source of truth. `scripts/game-bank-parse.mjs` parses it; **`seedGameBank()`
in `prisma/seed.ts` upserts into the `GameQuestion` + `GameTeachingCard`
tables** (indexed by level+slug), so `npm run db:seed` / `db:setup` (deploy)
populates it idempotently, each subject's rows are replaced wholesale, so
edits/additions/removals all take on re-seed. **ALL 22 subjects: 2,640
questions (100 MCQ + 20 short each) + 1,100 teaching cards.** Question ids are
level-qualified `<level>-<slug>-g<n>` (a-math/e-math/POA share a slug across
levels, so the PK must include level).

Runtime reads go through the **server-only** `src/lib/server/question-bank.ts`
(`getQuestionSet` / `getTeachingCards`, in-process per-subject cache, falls
back to the hand-authored `diagnostic-questions.ts` sets if a subject is
unseeded). Because that module imports prisma it can never enter a client
bundle, **answer keys physically cannot leak to the browser** (verified: zero
`correctKey`/worked-solution content in `.next/static/chunks`). The old 2.7 MB
generated `IMPORTED_SETS` module and the dead client import are gone; the ~13
`getDiagnosticSet` call sites (all already async) now call `getQuestionSet`;
`guruLesson(family, level, cards?)` takes DB teaching cards passed by the
route. Audited clean (answer indices in range, worked solutions present,
short-answer `accepted` ASCII, no banned words, essay subjects are MCQ/short
recall). Verified E2E: battles/guru/grading read DB `<level>-<slug>-g*`.
**To update content:** replace the `.md`, run `npm run db:seed`, restart.

## StudyLah Legends, Duel Hall + playable heroes

Two additions on top of the season pack:

**Three playable heroes.** Onboarding has a "Choose your researcher"
step (`HEROES` in `src/lib/game.ts`: `jun` Jun / `mei` Mei / `agent`
Agent X) before the companion pick. The choice persists as achievement
`hero:<id>` (written by the story route's `hero` beat, whitelisted to those
three ids) and is passed into the game via the `hero` prop. Heroes render
from the commissioned **`heroes.png`** sheet (144×96, 3 blocks of 48px, same
16×24 walker layout as npcs, `heroBlockX` + `HERO_ORDER` in `sheets.ts`);
`drawHero` in `adventure-game.tsx` is now the procedural FALLBACK only.
Purely cosmetic, all three walk the same roads with the same weapon
(correct answers). Existing users who onboarded before this ship get a
one-time hero-only picker (`initialStory.includes("starter") && !initialHero`).
The ghost companion, **Gugu**, trails one step behind the hero (breadcrumb
`trailRef`, drawn from `player_ghost.png` at `trail[-2]` with the same scarf
+ accessory overlays), not the player character. Art drop
`claude_code_handoff v2` also refreshed `guardians/monsters/portraits/ui.png`
(same dims + manifest order, art only).

**The Duel Hall.** Async 1-v-1 by share code, no matchmaking, no chat, no
leaderboard (a deliberate rejection of grade-adjacent social pressure).
Model `Duel` (`prisma/schema.prisma`); routes `duel/route.ts` (create deals
a SEALED set of 5 MCQs behind an 8-char code + lists your recent duels) and
`duel/take/route.ts` (PUT fetch-by-code, POST submit, server-graded, each
side answers once). Both players earn the same `DUEL_XP` 20 for finishing,
win or lose (`duel:<id>:<role>` source key); the only prize is a cosmetic
laurel on the result screen, shown only when your score is strictly higher
and the duel is complete. Question keys never leave the server pre-grade;
worked solutions are revealed only in the post-submit results. UI is
`src/components/duel-hall.tsx`, opened by talking to **Rin the Duel Warden**
(`duelwarden`, Haven Hollow (14,12)). Verified E2E: create → 5/5 graded →
sealed; a second real customer took the code → challenger graded 0/5 →
duel complete → both sides got 20 XP → laurel to the higher score.

## StudyLah Legends, the full creature-collecting RPG (native game shell)

`/account/adventure` is a complete original-IP RPG (`adventure-game.tsx` +
`src/lib/game/world2.ts`), portalled to `document.body` for a true full-screen
canvas with PUBG-style overlay controls (floating D-pad + A/B, safe-area
padded). **The battle IS the exam question**, a wild encounter shows a
strike menu (Quick Jab 1 dmg / Power Strike 2 dmg / Take a Breath heal, each
graded by a real server question via `/api/account/game/answer`); wrong
answers cost hearts, three hearts lost = warp back to Haven. Region generated
from owned subjects: **Haven Hollow** hub → one **Province** per subject
(route of tall-grass wild battles + a gym) → **Summit of Clarity**
championship (sealed until every gym emblem is won). Story is diegetic and
persisted as achievements (`story:<beat>`, `starter:<id>`, `dex:<species>`
via `achievementSuffixes`/`markAchievement`, XP through
`/api/account/game/story`): onboarding with Elder Maple + a **companion
spirit** pick (cosmetic scarf tint only, no stats), rival **Kai** (rematch
at the Summit), the **Fog Order** (grunts → Commander Murk), and the
Championship gauntlet (mixed-subject, unlocks the `champion` badge). NPCs
give dialogue/heal/battle; wild wins register species to the **monster-dex**
(shown on the bestiary), shiny variants are 1/16 cosmetic. Compliance intact:
every reward is effort, questions graded server-side, XP daily-capped, no
purchasable advantage. The older single-screen `adventure.tsx` was replaced.
**Sprite suite v1.1**: adds ghost_accessories (cell-aligned overlays:
headband/glasses/cape/crown/glow by level), guardians_walkers (7 × 16px
walkers + shiny), buildings_anim (4-frame door/fountain/campfire, doors
open on approach, hub fountain animates). The season design pack (11 docs:
arc, zones, quests, bosses, balance, retention, content guide, encounter tables,
dialogue, scripts, copy deck) lives in the owner's drive under
`claude_code_handoff 1.1/design_docs`, implement in waves, honour its
flagged risks.
**Sprite suite**: `/public/game/*.png` are COMMISSIONED ORIGINAL sheets
(StudyLah IP, see the design_handoff README on the owner's drive). RPG Maker
MZ assets ARE now licensed for use here: the owner bought MZ (Jul 2026) and
its EULA permits using bundled assets outside the engine, see the MZ art
section below. The old 16px sheets remain as DOM sprites + fallback art.
`src/lib/game/sheets.ts` holds the inlined manifests + loader;
`src/components/sprite.tsx` renders DOM sprites (portraits, monsters,
guardians, emblems, hearts, capture swirl). The canvas draws sheet tiles/
walkers with the procedural tileset as an offline fallback. Story is the
heroic **Beacon arc** (all original writing): each gym emblem lights a
beacon (hub NPC lines react to the lit count), Kai races because his sister
froze in her exam year, Commander Murk is Maple's burned-out first prodigy,
and Examiner Sage's championship ends with the Clarity guardian + champion
crest. The player ghost walks in the starter scarf; champions walk in gold.

## StudyLah Legends, the MZ art overhaul + acts + group gate (Phases 0-3)

The world-art scale-up built against the owner's RPG Maker MZ library
(licence resolved: owner bought MZ; EULA permits its assets outside the
engine). Source volume: `/Volumes/FortisLearn/@2026 StudyLah AI/Claude
Website Code/Game Assets (Update)/` (full MZ project). Run
`node scripts/sync-game-assets.mjs --audio` (needs the volume mounted +
devDep `ffmpeg-static`) to re-curate; it copies ~46MB into
`public/game/{mz,audio,fx}` and writes `src/lib/game/mz-manifest.json`.

- **Renderer** (`src/lib/game/mz.ts`): 48px grid (TP=48; procedural 16px art
  stays as the pre-load fallback, drawn 3x). Full MZ AUTOTILE compositor:
  floor autotiles (A1 animated water 3 frames, A2 grounds/bushes, A4 wall
  tops) via the quarter-tile neighbour algorithm; wall-type (A3 buildings/
  roofs, A4 wall faces) 2x2 blocks. Zones pre-render to 3 offscreen canvases
  (`zoneCanvases`, WeakMap-cached) + a void pattern tile (forest outside,
  darkness for interiors); the loop blits and draws dynamic tiles (doors
  from `!Door1` open on approach, portals = `!Crystal` + glow, lanterns,
  fog wisps, hearth flames). Per-zone THEMES with per-family BIOMES
  (grounds, trees, accents, battlebacks, BGM) in `mz.ts`.
- **Casting** (`mz.ts` MZ_HEROES/MZ_NPCS/MZ_SPECIES/MZ_GUARDIANS/MZ_GUGU +
  MZ_FACES): heroes/students are SF (School Fantasy) actors, fog grunts are
  Evil hooded monks, Gugu is the Nature spirit hue-rotated per starter
  (GUGU_HUES; champion gold). Dialogue portraits are MZ faces
  (`src/components/mz-face.tsx`).
- **Audio** (`src/lib/game/audio.ts`): m4a (converted from ogg, iOS-safe).
  BGM per zone/battle with crossfade (`bgmForZone`, BATTLE_BGM), ME jingles
  duck the BGM (victory/fanfare), SE one-shots (SFX map). Autoplay-safe:
  unlocks on first gesture; own mute key `studylah_game_audio` (🔊 HUD
  toggle), separate from the site chiptune toggle.
- **Battle stage** (`src/components/battle-scene.tsx`): battleback pair per
  biome/zone, painted enemy battler (MZ_SPECIES/BOSS_BATTLERS; bosses:
  Whisper=SF_Shadow, Hurry=SF_Kamaitachi, Blank=Plasma), animated sv-actor
  hero (18-motion MZ sheet: wait/swing/skill/guard/damage/victory), damage
  floats, hit-flash/shake/collapse CSS. **Effekseer overlay**: lazy loads
  `/game/fx/effekseer.min.js` + wasm (MUST `initRuntime` before
  `createContext`), transparent WebGL canvas, per-family strike effects
  (STRIKE_FX_BY_FAMILY), Powerup on breather, LightPillar on victory; every
  failure path degrades to no-particles silently. Effects live in
  `/game/fx/effects` with only the textures the chosen .efkefc reference
  (the sync script scans their UTF-16LE resource strings).
- **Acts** (`src/lib/game/acts.ts`): the saga formalised as Act I-IV +
  Epilogue with goals computed from persisted beats/gyms/bosses; the 📜
  panel is now "The Lightbearer Saga" (act progress, active-act goals,
  errands below, "Today's light" daily-three/reviews card).
- **Phases 4-6 (class groups, school vs school, international) are PAUSED
  by the owner to a later stage (2026-07-17); do not start them without a
  fresh green light. The gate below is their ready-made foundation.**
- **Group gate (Phase 4 foundation)**: `groupEligibleFrom` = Act I complete
  + first beacon lit; LEVEL_BANDS (Spark 1-9 / Flame 10-19 / Beacon 20+),
  `bandForLevel`. Server-enforced in `src/lib/server/group-gate.ts`
  (`groupStanding`) surfaced by GET `/api/account/game/progress`. Class
  battles must check BOTH rules server-side.
- **Content contract**: `drawFromBank(level, slug, {count, difficulty,
  minDifficulty, topicRx, mcqOnly})` in `question-bank.ts`; the questions
  API accepts `&difficulty=` + `&topic=` (prefix). Boss stage 3 + keystones
  draw minDifficulty 2 with graceful fallback. Markdown authoring guide:
  `docs/CONTENT-AUTHORING.md` (inject question banks by dropping
  `content/game-bank/*.md` + `npm run db:seed`; parser now enforces the
  compliance gate: banned words + no em/en dashes fail the seed loudly).
- **Test aids** (device-local, harmless): `?unlock=1` opens every gate,
  `?zone=<id>` spawns in a zone (requires unlock flag), e.g.
  `?zone=prov%3Ao-level%2Fphysics-pure`, `int%3Astudy`, `cells`.
- Gotchas learned: MZ B/C-sheet object coordinates were verified by
  rendering labelled contact sheets in the browser (see `OB`/`IB`/`OC`
  consts, they are CORRECT now, re-verify visually if changed); the browser
  preview pane freezes rAF when unfocused, so in-preview walking needs held
  synthetic keydown + screenshots to advance time; Effekseer without
  `initRuntime` throws `createContext(...).init` null errors.

## Homepage, StudyLah Legends identity + game-as-beta (`src/app/page.tsx`)

The marketing homepage (`webdesign-updates` handoff) carries StudyLah Legends
pixel identity: pixel mascot (Gugu, `/public/marketing/mascot_*.png`) in the
hero + brand marks, `.btn-pixel` hard-shadow "pressable" gold CTAs
(globals.css), `.mascot-bob`. **Positioning (owner-mandated): the prediction
suite is the product; the game is a purchaser-only beta bonus.** The hero pitch
stays 100% on the forecast/PDFs; a `#fog-frontier` section (`FogFrontierBeta`)
is explicitly badged **BETA · Included with any subject · purchasers only** and
says verbatim "The prediction suite is the product you buy. StudyLah Legends is the
beta playground it unlocks, a bonus, not the pitch." It showcases the three
heroes (Jun/Mei/Agent X sprites), the Gugu companion + evolution line, and the
six subject Gurus (Fen/Tor/Vale/Sum/Mere/Ash), CTA "Unlock with any subject"
→ `/o-level` (no standalone game purchase). Assets in `/public/marketing/`
(original StudyLah Legends IP). Compliance clean (no banned words; effort-framed).
Preserves all commerce (pricing, ForecastCard, EmailCapture, accuracy proof).

## Gugu, floating sales chatbot (`src/components/gugu-chat.tsx`)

A floating helper (bottom-left, bare front-facing Gugu, the `GuguSprite`
component CSS-crops cell (0,0) of `/public/game/player_ghost.png` (240×96,
16×24 cells) so header, message avatar, and the floating button all share the
canonical both-eyes-forward ghost with no separate exported PNG; `.ghost-bob`
bob over a soft drop-shadow ellipse, no circular chip) that answers buyer
questions to clear pre-purchase doubts. A persistent white **"Got a question?"**
bubble sits above the ghost while the panel is closed. Chat input is
`text-night` on `bg-white` (the `text-ink` token is light in the dark theme, 
would be invisible on the white field). Mounted in `SiteChrome` and gated to `!chromeless` routes
(hidden on `/admin` + ad landings); self-hides inside the native game shell
(returns null when `html[data-native]` is stamped).

**The 8 quick-reply chips stay SCRIPTED**, `TOPICS[]` holds pre-written, vetted
answers (chat-sized `/faq` + game-as-beta positioning), instant and zero-cost;
the pricing chip pulls the live "from" price from `usePricing()` (cheapest
`essential` tier across levels), never hard-coded.

**Free-typed questions are Claude-powered (TIER 2, owner-approved).** Flow:
client `POST /api/chat` (`src/app/api/chat/route.ts`) → `askGugu()` in
`src/lib/server/gugu-brain.ts` → **Claude Haiku 4.5** (`GUGU_MODEL`, owner's
choice, one-line swap). Guardrails, all mandatory:
- **System prompt** = StudyLah facts + **live pricing** (from `getPricing()`, "use
  ONLY these numbers") + hard rules (no grade/result promises, banned certainty
  words, StudyLah-only, decline off-topic, minors-safe, ignore prompt-injection).
- **Post-generation compliance filter** (`violatesCompliance()`, `BANNED_PATTERNS`):
  any reply containing `guaranteed/confirmed/leaked/insider/sure-win/100%/`
  "guarantee your grade" is **discarded** → scripted fallback shown instead. The
  noun "money-back guarantee" is deliberately allowed (real feature). Unit-verified.
- **Graceful degradation**: no `ANTHROPIC_API_KEY`, API error, empty reply, or a
  filtered reply all return `{ fallback: true }`, and the client serves the
  scripted `matchTopic()` answer, so the bot never breaks, it just degrades to
  Tier-1 behaviour.
- **Rate limit**: in-memory per-IP (8/min; single Railway replica) → over-limit
  returns `{ fallback: true }`. Message history capped to last 6 turns × 500 chars.

⚠️ **DEPLOY DEPENDENCY: set `ANTHROPIC_API_KEY` in the Railway env** or the
free-text bot silently stays in scripted-fallback mode (quick replies still work).
Cost is tiny (Haiku, ~$1/$5 per 1M tokens, ≤400 output tokens/reply).

**WhatsApp channel (code complete, Meta setup pending owner).** The same brain
answers WhatsApp: Meta Cloud API → `POST /api/webhooks/whatsapp`
(`src/app/api/webhooks/whatsapp/route.ts`, HMAC-verified, msgId-deduped) →
history from the `WaMessage` table (threads persist across days; consecutive
same-role turns merged, Claude requires alternation) → `askGugu({ channel:
"whatsapp" })` (same prompt with full `https://studylah.education/...` links
instead of the site's bare-path buttons, same compliance filter) → reply via
Graph API (`src/lib/server/whatsapp.ts`). With no `WHATSAPP_*` env vars it runs
in stub mode, replies land in `data/outbox/*-whatsapp-*.json` (same pattern as
the email stub). Fallbacks: compliance-tripped/errored replies send a scripted
pointer to hello@studylah.education; non-text media gets a "text only" nudge;
8/min per-number rate limit. **Owner setup steps (Meta app, permanent token,
webhook subscribe, the 4 Railway env vars) are in `docs/WHATSAPP-SETUP.md`** —
key caveat: the bot number becomes API-only (unusable in the phone app), so use
a separate number, and visitor-initiated conversations cost Meta ~nothing.

**Admin WhatsApp inbox (`/admin/whatsapp`).** Reads every thread from
`WaMessage` (thread list + bubble view) and lets the owner reply as a human via
`POST /api/admin/whatsapp/reply` (admin-gated, sends through the same
`sendWhatsAppText`, stores `manual=true`). **Human takeover rule:** after a
manual reply, the webhook auto-reply stands down on that thread for 24h (the
inbound messages are still stored, so they appear in the inbox), then Gugu
resumes automatically. Owner-initiated messages outside a visitor's 24h
service window will NOT deliver (Meta requires paid template messages for
that; deliberately not built — replies only).

## The game layer ("Clear the Fog"), SHIPPED, web-first

XP ledger (`XpEvent`, unique per-action sourceKeys = farm-proof; levels/titles
derived in `src/lib/game.ts`), badges (`Achievement`), evolving ghost
companion, quest-framed Today, fog-of-war hex campaign maps on Study plan
(`campaign-map.tsx`, always-visible section), the bestiary (mistakes as
monsters with HP + respawn), and **Adventure mode** (`/account/adventure`):
a canvas GB-style overworld, walk the ghost, wild battles in tall grass,
subject gyms, all questions server-graded (`/api/account/game/*`,
ownership-gated, wild XP capped 15/day, gym clear 25 XP once).

## The native shell (Capacitor), code complete, stores pending owner setup

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
app, not a website, an inline root-layout script stamps `html[data-native]`
pre-paint, `AccountChrome` (`account-chrome.tsx`) swaps the web dashboard
for a HUD (living ghost/level/animated XP bar/streak flame/shields) + a
pixel-icon bottom tab bar (Missions/World/Battle/Bestiary/More), the site
header returns null on `/account*` in-shell, the footer is CSS-hidden,
`/account/more` is the fifth tab, and the dashboard `template.tsx` gives
screen-swap transitions. Web rendering is untouched.
**The juice layer** (native only): `src/lib/game/fx.ts` is the event bus, 
every graded response calls `emitGame()` client-side, which drives XP
fly-ups, the animated HUD (client store synced to the server's totalXp),
full-screen level-up/badge ceremonies with confetti (`game-fx.tsx`), and
synthesized chiptune SFX (`src/lib/game/sound.ts`, WebAudio, zero assets,
mute toggle in the HUD). Pixel identity: `pixel-icons.tsx` + Press Start 2P
(`--font-pixel`, numbers/labels only). Today = Home Base scene
(`home-base.tsx`, speaking ghost) + quest board with weekly boss
(`quest-board.tsx`, boss = biggest marks-at-risk topic, HP = study-plan
status). Bestiary = monster-dex collection (`monster-dex.tsx`). Adventure:
shiny variants (1/16, cosmetic only), combo streaks (celebration only, XP
stays server-capped), canvas-drawn shareable battle report (no personal
data). **Streak shields** (`StreakShield` table): earned every 5th
consecutive day (max 2, `streakState()` in study.ts auto-spends one on a
single missed day), earned by effort only, never bought.
Builds run on **Codemagic** (`codemagic.yaml`, manual workflows; iOS needs
the `studylah-asc` integration, Android the `studylah_keystore`; the iOS
workflow auto-stamps a unique build number, see gotcha #7).
**True fullscreen**: `ios.contentInset: "never"` in `capacitor.config.ts`
(was `"always"`, which left a black band under the status bar), the webview
extends under the notch and the UI pads itself with `env(safe-area-inset-*)` +
`viewportFit: cover`. **Native-shell config changes (contentInset, build
number, plugins, icons) only take effect on the next Codemagic build**, not a
web deploy.
**`DEPLOY-APP.md` is the complete store playbook**, Firebase, APNs key,
listings, review notes, release runbook.

## StudyLah Legends, arcade UI + world polish (device-feedback pass)

The overworld HUD and controls were reskinned to the **v3 arcade aesthetic**
(neon panels, `.btn-pixel` hard-shadow buttons) in `adventure-game.tsx`:
SCORE (XP + level title) / ROUND (zone · Singapore district) / LIVES (hearts)
panels, mint/pink/gold on navy. The D-pad renders **inline SVG triangles, not
emoji**, emoji are selectable text and long-press popped the iOS Copy/Look-Up
bar; SVG has no text node (plus `touch-callout`/`user-select: none`). A **🎓
Academy tab** in the HUD opens the Subject Gurus panel directly (no walk to
the Sage).

**Gugu** (the companion) is drawn at **half scale** and follows via a smooth
sub-tile **distance-trail** (`trailRef`, fixed `GAP = 1.15` tiles,
interpolated, resets on zone change), the old "snap two tiles back" looked
blocked. Sprite is the favicon-traced v2 `player_ghost.png`.

**Singapore map** (`singapore.ts` + `singapore-map.tsx`): the corner minimap +
tap-to-expand full map use the arcade palette (`SG_ARCADE`), map every game
zone to a real district (`districtForZone`), and pin the **15 famous
landmarks** (`LANDMARKS`: Marina Bay Sands, Merlion, Jewel Changi, Zoo…). The
`sg_*.png` asset-based map from `SINGAPORE_MAP_INSTRUCTIONS` is NOT shipped, 
this is the SVG approximation of that intent.

**Building interiors**: hub doors (`TILE.DOOR`) are portals into furnished
rooms (`HUB_INTERIORS` + `buildInterior`, styles study/home/shop with
BOOKSHELF/DESK/HEARTH/STALL/RUG/**LANTERN** tiles); step on the exit `MAT` to
leave. Bug fixed this pass: `onArrive` only honoured portals on PORTAL tiles,
so doors did nothing, it now resolves a portal on **any** tile (locked gates
still block at the movement step). The `LANTERN` tile (a lit beacon-lamp, the
Lightbearer motif) draws zone-aware bases (wood indoors, cave/sand in saga
zones).

**Test-unlock (device-local, safe on prod)**: `/account/adventure?unlock=1`
sets `localStorage.studylah_unlock` → every zone/gate opens for that device
only (`?unlock=0` clears it). Server ownership + gating are untouched, so real
players are unaffected even with this shipped.

## Project Sightseeing + Loudspeaker (native-app-only study tools)

Two StudyLand tools that live ONLY in the native shell (they use the camera /
mic). Entry cards render via `NativeToolCards` (`useNativePlatform() !== null`)
in the Learn hub; the pages themselves show an "open the app" note on web. Both
are owner-gated (`requireMaster`) like the rest of the app, so within the shell
every user is a buyer, no free-tier metering needed (just per-day abuse caps).

**Project Sightseeing** (`/account/scan`): snap a question, Guru teaches it step
by step. `scan-client.tsx` compresses the photo client-side (longest edge
1600px, JPEG q0.8) and posts base64 to `POST /api/account/game/scan`
(action `teach`). `src/lib/server/scan.ts` sends it to Claude vision
(`SCAN_MODEL = claude-haiku-4-5`, swappable) with a house-format teaching prompt
(point form, step-by-step, JSON out), sanitises dashes, runs the compliance
banned-word filter, and maps the topic to the 2026 forecast tier
(`forecastRankFor`). The **raw photo is never stored**; the extracted question +
teaching is logged as a `ScannedQuestion` (the "own asset": a corpus of the real
questions students struggle with, a demand signal + future-Vault source +
`reviewed` flag for admin curation). Action `save` drops a taught scan into the
mistake notebook (`MistakeEntry` source `scan`). Cap 20 scans/day; 5 XP each.
UI reveals one step at a time, then the answer (coach, don't dump).

**Project Loudspeaker** (`/account/oral`): oral-exam practice for O/N-Level
Chinese + English (reading aloud + conversation), mapped to Paper 4. Claude
cannot hear audio, so pronunciation is scored by **Azure Speech Pronunciation
Assessment** (`src/lib/server/speech.ts`, en-GB + zh-CN, phoneme/tone level);
Guru (`coachPronunciation`, Haiku) turns the scores into house-voice coaching.
`oral-client.tsx` records via MediaRecorder (30s cap), posts base64 to
`POST /api/account/game/oral`; the raw audio is never stored, only scores +
transcript + coaching (`OralAttempt`). Content seed in `src/lib/oral-lessons.ts`
(Coddy expands). **Owner setup to go live: set `AZURE_SPEECH_KEY` +
`AZURE_SPEECH_REGION`.** Unset = practice-only mode (records, no score) rather
than an error. Cap 40 recordings/day; 6 XP each. NOT live-tested against real
Azure (no key at build time); built to the documented REST contract.

Migration `20260721020000_sightseeing_loudspeaker` (ScannedQuestion +
OralAttempt). `ANTHROPIC_API_KEY` now documented in `.env.example` (also powers
Gugu + scan). Both features are code-complete; needs the native shell rebuilt
to surface the cards, and Azure keys for scoring.

## Guru Tutor + Life Skills (native-app-only, the tuition-replacement wing)

The leap from study tools to an actual tutor + tuition center in the app. Both
native-shell-only (via `NativeToolCards`), owner-gated (`requireMaster`), pure
Anthropic (no Azure). All 20 requested features land as three shared engines,
because a real tutor does teaching/practice/marking/planning/mocks in ONE
conversation, not ten screens.

**Guru Tutor** (`/account/tutor`): one conversational session that teaches,
re-explains simpler, sets practice, marks a typed answer OR a photo of working
(Claude vision), plans a week, and runs a mock. `tutor-chat.ts` holds the
persona system prompts (`subjectTutorSystem`, `lifeCoachSystem`) sharing the
house rules (point form, step-by-step math, no grade promises, no dashes/emojis,
minors-safe), model `TUTOR_MODEL` (Haiku, swappable). `/api/account/game/tutor`
(start | reply) persists to `TutorSession` + `TutorMessage`; daily cap 60
messages; graceful fallback text when `ANTHROPIC_API_KEY` is unset. UI:
`tutor-chat.tsx` (chat + quick chips + photo marking) inside `tutor-hub.tsx`
(subject picker from owned subjects + a weekly-slot scheduler). This covers
Tutor features 1,3,4,5,6,8,9.

**Scheduled sessions + nudges** (Tutor 2, 10): `TutorSchedule`
(`/api/account/game/tutor-schedule`) is a standing "tuition slot" (subject,
weekday, SG hour). Hourly `/api/cron/tutor-sessions` pushes a native reminder
that deep-links `/account/tutor?start=subject:slug:level` (TutorHub reads the
param and auto-opens). **Owner must register this cron on cron-job.org.** Tutor
7 (parent reports) already exists as the parent-digest system.

**Life Skills** (`/account/life`): ten non-academic tracks on one lesson engine,
"school teaches subjects, this builds you". Content in `src/lib/life-skills.ts`
(Money School, Founder Track, Confidence Gym, Calm Room, Life OS, Say It Right,
AI & Street Smarts, First Paycheck, Pathfinder, Adulting 101), each with per-
track safety guardrails baked into the Guru chat (money = education not
investment advice; calm = coping-skills-not-therapy + SG helpline). Seed content
is compact and REAL; Coddy mass-produces the full library under this contract.
`/api/account/game/life` tracks completion (`LifeProgress`, 8 XP/lesson);
`life-client.tsx` is hub > track > lesson cards > "Talk it through with Guru"
(reuses the tutor chat with the track's guardrail). Migration
`20260721030000_tutor_lifeskills`. 43 tests green (money-math + grading +
oral + life-skills content compliance). Verified in the simulated shell:
4 native cards, subject picker, session persists, Life Skills 10 tracks render.

## July 2026 feature batch (exam dates, nav dropdowns, rescue questionnaire, guru teach)

- **Official 2026 exam dates + countdown** (`src/lib/exam-dates-2026.ts`,
  `src/components/exam-schedule.tsx`): every subject's written/practical
  papers transcribed from the official SEAB timetables (O-Level PDF
  `file.go.gov.sg/2026-o-level-exam-cal.pdf`, N(A) `go.gov.sg/2026-n-level-exam-cal`,
  both "Updated as at 13 Feb 2026"). Subject pages render a live ticking
  countdown (days/hrs/min/sec) to the NEXT paper plus the full paper list;
  falls back to the old generic `ExamCountdown` pill for subjects without
  data. If SEAB revises the timetable, update the one data file.
- **StudyLand nav dropdowns** (`src/components/account-nav.tsx`): the 11 flat
  tabs became Today · Adventure · Study ▾ · Account ▾ (dropdowns with blurbs;
  mobile panels centre-clamped to the viewport). **Rescue plan is now in the
  Study menu.** Master gating + native hide-commerce rules preserved.
- **Rescue plan questionnaire** (`/account/rescue`): three questions (feel:
  behind/shaky/fine; hours/day → 2-6 blocks; subject focus) as a plain GET
  form, answers re-shape `buildRescuePlan` (`src/lib/server/risk.ts`,
  `RescueOptions`): "behind" sorts raw recoverable marks, "fine" skips
  never-touched topics, hours set slots/day. Days-to-paper now defaults to
  the official SEAB dates for owned subjects when the student hasn't entered
  their own (priority: own dates → SEAB table → season start).
- **Guru teach button** (`src/components/guru-teach.tsx`): after any daily-quiz
  ("Today's three") or diagnostic-results answer is revealed, a "{emoji} Guru,
  teach me" chip expands a step-by-step walkthrough of that exact question
  (recap → the student's slip, with "sure = concept gap" framing → answer →
  worked-solution beats → takeaway). Fully scripted from question data, zero
  API cost. Guru name/emoji derived from the subject (Guru Wei ⚡ physics,
  Guru Lim ⚗️ chemistry, ...).

## Gugu on Messenger + Instagram (code complete, Meta setup pending owner)

Same brain answers Facebook Messenger and Instagram DMs. ONE webhook
`/api/webhooks/messenger` handles both (`object: "page"` → messenger,
`object: "instagram"` → instagram; HMAC-verified, echo-filtered, mid-deduped),
one sender `src/lib/server/meta-messaging.ts` (`POST /me/messages` with a Page
token, or data/outbox stub), history in the `SocialMessage` table (channel +
contactId; migration 20260716050000). `askGugu({ channel: "messenger" |
"instagram" })` uses full https URLs like WhatsApp. Credentials are shared with
the WhatsApp app: only `META_PAGE_ACCESS_TOKEN` is new; `META_APP_SECRET` /
`MESSENGER_VERIFY_TOKEN` fall back to the WhatsApp vars. Read/reply in
**Admin → FB / IG** (`/admin/social`) with the same 24h human-takeover rule.
Owner Meta setup (connect Page + IG Professional account, Page token, subscribe
the messenger webhook on both products) is in `docs/WHATSAPP-SETUP.md`.

## StudyLah Legends is framed as BETA (feedback loop live)

The game tab in StudyLand is now LAST in the nav and labelled **Beta** (with a
"new" pill); the study system leads, the game is the bonus. On every visit a
work-in-progress notice greets the player ("feel free to leave us feedback")
with Play on / Leave feedback buttons; a 💬 HUD button (next to EXIT) opens the
same form any time. The form (`BetaFeedback` in adventure-game.tsx) takes one
sentiment tap (love/okay/rough) + free text → `POST /api/account/game/feedback`
(master-gated) → `GameFeedback` table (migration 20260716040000). Read it in
**/admin/feedback** (sentiment counts + latest 200 with customer emails).

## /studyland, the public StudyLand showcase page

Marketing page walking the full workflow through one persona (Wei Jie, Sec 4,
behind in Physics, 62 days out): free diagnostic → forecast/marks-at-risk →
daily three + spaced repetition → mistake notebook + diagnosis → drills with
real marking → rescue plan → war room → the game. Compliance-first copy: "It
will not promise a grade, nobody honest can", every claim is about the WORK;
standard DisclaimerBox at the bottom; live Master "from" price
(force-dynamic). Linked from the main nav (between Bundles and Accuracy), the
footer Trust list ("Inside StudyLand") and the sitemap. The header's
right-side StudyLand/Account button still goes to /account for sign-in.

## Subject time gate (auto-retirement after the 2026 exams)

Once a subject's FINAL 2026 paper is sat (+3 days grace, `ACCESS_GRACE_DAYS`
in exam-dates-2026.ts), the subject automatically retires from every LEARNING
surface for every user: `ownedSubjects()` filters via `subjectExamOver()`, and
that helper feeds the daily quiz, drills, plans, risk meters, war room and the
game. No data is deleted, it is a pure time filter, so it is reversible and
subjects without dated papers never expire. **Deliberately untouched: Orders,
PDF downloads and the money-back guarantee flow** (claims open 14 days after
the exam), those query the order tables directly. The Today page shows a
one-line "Exams done: X, retired from your daily tools, PDFs stay in Orders"
note when it happens. First retirement: N(A) History (8 Oct 2026); last:
subjects with 10 Nov papers (13 Nov 2026). Unit-tested date math (8 cases).

## The 10x learning batch (July 2026): SRS, drills, coach, war room

Ten upgrades shipped in one pass. The spine is a **unified spaced-repetition
engine** (`src/lib/server/srs.ts`, `ReviewCard` table, migration
20260716060000: Leitner boxes 1..5, intervals 1/3/7/21/60 days, lapse resets
to box 1) shared by three card kinds: question / definition / formula.

- **Daily three is now spaced**: correct answers create/advance a Leitner card
  (submit route), and `dailyPicks` inserts ONE due review per day ("🔁 memory
  check" badge) alongside the existing mistake resurrections. Wrong answers
  still ride the notebook's own resurrection system.
- **Drills hub** (`/account/drills`, `drills-hub.tsx`, API
  `/api/account/drill`): 4 tabs. Definitions (557 GameTeachingCard definition
  cards, self-graded reveal), Formulas (`src/lib/formula-bank.ts`, ~57 authored
  cards keyed by family: physics/chemistry/biology/emath/amath/poa),
  Explain-it-back (student writes own-words explanation), Structured answers
  (232 precision cards: prompt + model with crediting phrases in CAPS,
  day-rotated set of 6).
- **AI tutor endpoint** (`/api/account/tutor`, Master-gated, Haiku +
  `violatesCompliance` filter + fallback, 10/min rate limit) with 3 modes:
  `autopsy` (why each wrong MCQ option tempts, surfaced as a button on the
  final GuruTeach step), `explain` (grades explain-it-back), `structured`
  (real marking: "Score: X/Y" where Y = marks stated in the question else the
  model's crediting-point count, then one ✓/✗ line per crediting point, then a
  Marker's tip; the client parses the score into a badge and colours ✓/✗
  lines, `MarkedFeedback` in drills-hub.tsx).
- **Today page**: `PhaseBanner` (build/consolidate/sharpen/war phases from
  own ExamDate rows else the SEAB table; war phase links the War Room) and
  `WeekReport` (quiz days, accuracy, monsters cleared, cards reviewed, week
  XP, next lever) in `src/components/today-pulse.tsx`.
- **Mistake notebook Diagnosis** (in `mistake-notebook.tsx`): clusters open
  entries by cause + repeat-offender topics with a prescription per cause;
  needs 3+ open entries to render.
- **War Room** (`/account/warroom`): per subject, opens 7 days before its
  first SEAB paper (`?preview=1` to preview): top-5 forecast topics with tier
  pills, drills/notebook/mini-mock checklist, night-before ritual. Locked
  cards show the countdown + paper list.

## Next

- **Store deployment (the live blocker)**: iOS TestFlight upload was failing
  on the re-used build number, now auto-stamped (gotcha #7), so the next
  Codemagic `ios-release` run should reach TestFlight. Then: on-device pass of
  the fullscreen + door + Guru-tab fixes, Android first build, store listings
  + review submission. Requires a fresh Codemagic build to pick up the native
  config changes (contentInset, build number).
- **Content refresh is hands-off**: author edits `content/game-bank/*.md` →
  `npm run db:seed` on deploy re-seeds. No code changes.

## Quiet backlog (raise only when the owner asks "what's pending")

- **Lightbearer Saga** (`docs/STORY-CODEX.md`) is fully built; only the
  Reading Room + Lantern Walk want an on-device walkthrough (Sunken Cells was
  verified in-browser). Optional future art: the `sg_*.png` asset-based
  Singapore map + `gugu_evolutions.png` showcase (asset shipped, not surfaced).
- Biology (Science) companion PDF page 2 still shows Pure Biology's Paper 3
  spec; Vault covers vs site question counts mismatch (owner to confirm).
- Referral terms + refund policy: lawyer-reviewed (done). End-to-end paid
  transaction verified live (card → webhook → order → download → receipt).
- Homepage legacy "87%" figure decision; SEAB 2026 dates pre-fill when
  published; Google Search Console setup.
