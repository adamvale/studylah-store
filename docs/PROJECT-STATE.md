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

## Fog Frontier — the season pack (all 4 waves shipped)

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

## Fog Frontier — the Academy (Subject Gurus, teach + check)

`🎓 Sage of the Academy` (`guru` NPC, Haven Hollow (8,12), sprite
`examiner_sage`) opens **The Academy** (`src/components/subject-guru.tsx`):
one Guru per subject the student is ENROLLED in. Each Guru teaches a short
lesson (2–3 beats) then sets one check-question from that subject's own bank.
Content: the lesson deck is `src/lib/game/guru.ts` (`guruLesson(family,
level)`), which maps every subject family to level-appropriate teaching
beats drawn from the **original** in-house library `practice-content.ts`
(definitions, marker's-phrasing precision cards, chem qualitative-analysis,
maths careless-error checklists, humanities SBQ ladder + command words, POA
formats) — never scraped from any paper. The check-question comes from the
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

**Paid-PDF ingestion (owner-authorised, blocked on content):** the owner
opted to expose paid-product questions in the game, but the real exam PDFs
are external opaque binaries (repo `private/pdfs` are `pdf-gen.ts`
placeholders that extract to 0 chars) — there is no structured question text
to ingest. The game's structured source of truth remains
`diagnostic-questions.ts` (222 original MCQs, all 22 subjects, level-keyed).
To actually load the paid questions, the owner must supply them as
text/structured data; until then Gurus + battles run on the original bank.

## Fog Frontier — Duel Hall + playable heroes

Two additions on top of the season pack:

**Three playable heroes.** Onboarding has a "Choose your researcher"
step (`HEROES` in `src/lib/game.ts`: `jun` Jun / `mei` Mei / `agent`
Agent X) before the companion pick. The choice persists as achievement
`hero:<id>` (written by the story route's `hero` beat, whitelisted to those
three ids) and is passed into the game via the `hero` prop. Heroes render
from the commissioned **`heroes.png`** sheet (144×96, 3 blocks of 48px, same
16×24 walker layout as npcs — `heroBlockX` + `HERO_ORDER` in `sheets.ts`);
`drawHero` in `adventure-game.tsx` is now the procedural FALLBACK only.
Purely cosmetic — all three walk the same roads with the same weapon
(correct answers). Existing users who onboarded before this ship get a
one-time hero-only picker (`initialStory.includes("starter") && !initialHero`).
The ghost companion — **Gugu** — trails one step behind the hero (breadcrumb
`trailRef`, drawn from `player_ghost.png` at `trail[-2]` with the same scarf
+ accessory overlays), not the player character. Art drop
`claude_code_handoff v2` also refreshed `guardians/monsters/portraits/ui.png`
(same dims + manifest order — art only).

**The Duel Hall.** Async 1-v-1 by share code — no matchmaking, no chat, no
leaderboard (a deliberate rejection of grade-adjacent social pressure).
Model `Duel` (`prisma/schema.prisma`); routes `duel/route.ts` (create deals
a SEALED set of 5 MCQs behind an 8-char code + lists your recent duels) and
`duel/take/route.ts` (PUT fetch-by-code, POST submit — server-graded, each
side answers once). Both players earn the same `DUEL_XP` 20 for finishing,
win or lose (`duel:<id>:<role>` source key); the only prize is a cosmetic
laurel on the result screen, shown only when your score is strictly higher
and the duel is complete. Question keys never leave the server pre-grade;
worked solutions are revealed only in the post-submit results. UI is
`src/components/duel-hall.tsx`, opened by talking to **Rin the Duel Warden**
(`duelwarden`, Haven Hollow (14,12)). Verified E2E: create → 5/5 graded →
sealed; a second real customer took the code → challenger graded 0/5 →
duel complete → both sides got 20 XP → laurel to the higher score.

## Fog Frontier — the full creature-collecting RPG (native game shell)

`/account/adventure` is a complete original-IP RPG (`adventure-game.tsx` +
`src/lib/game/world2.ts`), portalled to `document.body` for a true full-screen
canvas with PUBG-style overlay controls (floating D-pad + A/B, safe-area
padded). **The battle IS the exam question** — a wild encounter shows a
strike menu (Quick Jab 1 dmg / Power Strike 2 dmg / Take a Breath heal, each
graded by a real server question via `/api/account/game/answer`); wrong
answers cost hearts, three hearts lost = warp back to Haven. Region generated
from owned subjects: **Haven Hollow** hub → one **Province** per subject
(route of tall-grass wild battles + a gym) → **Summit of Clarity**
championship (sealed until every gym emblem is won). Story is diegetic and
persisted as achievements (`story:<beat>`, `starter:<id>`, `dex:<species>`
via `achievementSuffixes`/`markAchievement`, XP through
`/api/account/game/story`): onboarding with Elder Maple + a **companion
spirit** pick (cosmetic scarf tint only — no stats), rival **Kai** (rematch
at the Summit), the **Fog Order** (grunts → Commander Murk), and the
Championship gauntlet (mixed-subject, unlocks the `champion` badge). NPCs
give dialogue/heal/battle; wild wins register species to the **monster-dex**
(shown on the bestiary), shiny variants are 1/16 cosmetic. Compliance intact:
every reward is effort, questions graded server-side, XP daily-capped, no
purchasable advantage. The older single-screen `adventure.tsx` was replaced.
**Sprite suite v1.1**: adds ghost_accessories (cell-aligned overlays:
headband/glasses/cape/crown/glow by level), guardians_walkers (7 × 16px
walkers + shiny), buildings_anim (4-frame door/fountain/campfire — doors
open on approach, hub fountain animates). The season design pack (11 docs:
arc, zones, quests, bosses, balance, retention, bible, encounter tables,
dialogue, scripts, copy deck) lives in the owner's drive under
`claude_code_handoff 1.1/design_docs` — implement in waves, honour its
flagged risks.
**Sprite suite**: `/public/game/*.png` are COMMISSIONED ORIGINAL sheets
(StudyLah IP — see the design_handoff README on the owner's drive; never
substitute third-party/RPG-Maker assets, whose EULAs are engine-locked).
`src/lib/game/sheets.ts` holds the inlined manifests + loader;
`src/components/sprite.tsx` renders DOM sprites (portraits, monsters,
guardians, emblems, hearts, capture swirl). The canvas draws sheet tiles/
walkers with the procedural tileset as an offline fallback. Story is the
heroic **Beacon arc** (all original writing): each gym emblem lights a
beacon (hub NPC lines react to the lit count), Kai races because his sister
froze in her exam year, Commander Murk is Maple's burned-out first prodigy,
and Examiner Sage's championship ends with the Clarity guardian + champion
crest. The player ghost walks in the starter scarf; champions walk in gold.

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
for a HUD (living ghost/level/animated XP bar/streak flame/shields) + a
pixel-icon bottom tab bar (Missions/World/Battle/Bestiary/More), the site
header returns null on `/account*` in-shell, the footer is CSS-hidden,
`/account/more` is the fifth tab, and the dashboard `template.tsx` gives
screen-swap transitions. Web rendering is untouched.
**The juice layer** (native only): `src/lib/game/fx.ts` is the event bus —
every graded response calls `emitGame()` client-side, which drives XP
fly-ups, the animated HUD (client store synced to the server's totalXp),
full-screen level-up/badge ceremonies with confetti (`game-fx.tsx`), and
synthesized chiptune SFX (`src/lib/game/sound.ts`, WebAudio, zero assets,
mute toggle in the HUD). Pixel identity: `pixel-icons.tsx` + Press Start 2P
(`--font-pixel`, numbers/labels only). Today = Home Base scene
(`home-base.tsx`, speaking ghost) + quest board with weekly boss
(`quest-board.tsx`, boss = biggest marks-at-risk topic, HP = study-plan
status). Bestiary = monster-dex collection (`monster-dex.tsx`). Adventure:
shiny variants (1/16, cosmetic only), combo streaks (celebration only — XP
stays server-capped), canvas-drawn shareable battle report (no personal
data). **Streak shields** (`StreakShield` table): earned every 5th
consecutive day (max 2, `streakState()` in study.ts auto-spends one on a
single missed day) — earned by effort only, never bought.
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
