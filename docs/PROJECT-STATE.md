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
- **Email**: Resend (falls back to a `data/outbox/` file stub in dev).
- **Payments**: Stripe LIVE (PayNow + cards + Alipay/WeChat Pay). Mock mode
  when no `sk_` key, full flows testable without payment.
- **Storage**: Cloudflare R2 bucket `studylah-master` (S3-compatible), 
  nightly DB backups (`/api/cron/backup-db`) and master content mirror under
  `product-pdfs/`. Client lib: `src/lib/server/r2.ts`.
- **Scheduled jobs** (cron-job.org hits these; all gated by `CRON_SECRET`):
  hourly `/api/cron/diagnostic-followup`, hourly `/api/cron/streak-reminder`
  (only acts 19:00-22:59 SG), daily `/api/cron/parent-digest`, daily
  `/api/cron/backup-db`.
- **Mobile**: PWA is live (manifest, `public/sw.js`, web push). Native
  Capacitor shell for App Store/Play is the current roadmap (built via
  Codemagic cloud CI, this repo is connected; local Mac cannot build iOS).

## The product catalogue

22 subjects (14 O-Level, 8 N(A)) × 4 products each: Exam Forecast, a
subject-specific **companion** (name varies per subject, see
`SUBJECT_SPECS` in `src/lib/catalogue.ts`), Sure Questions Vault, Final
Rehearsal (2-3 PDFs; paper numbers vary by subject). Tiers
Essential/Strategic/Master; Mega-Bundle (3 subjects), All-In (5-6). Slugs are
FROZEN (they live in URLs and in every `ProductFile.filePath`).

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
(StudyLah IP, see the design_handoff README on the owner's drive; never
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
