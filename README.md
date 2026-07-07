# StudyLah — exam-forecast storefront

E-commerce site for StudyLah (studylah.education): AI-driven exam prediction
and practice PDFs for Singapore-Cambridge O-Level (G3) and N(A)-Level (G2)
students.

## Status

- **Phase 1 — storefront front-end: done.** All pages browsable with seeded
  catalogue data; cart and bundle pricing run client-side.
- **Phase 2 — commerce backend: done.** Stripe Checkout (with a local mock
  mode), idempotent webhook-driven orders, signed download tokens,
  per-download PDF watermarking, discount codes, DB-backed lead capture with
  the free heatmap generated and delivered.
- **Phase 3 — admin and operations: done.** Password-protected `/admin` with a
  metrics dashboard, editable per-level pricing, a global early-bird toggle,
  per-product PDF upload, an orders list with search + resend, and a leads CSV
  export.

## Setup

Requires Node 20+ (this machine has Node 22 installed at `~/.local/node`,
already on PATH via `~/.bash_profile` / `~/.zprofile`).

```bash
cd studylah
npm install                       # runs `prisma generate` via postinstall
cp .env.example .env              # defaults are fine for local dev
npx prisma migrate deploy \
  --schema=prisma/schema.prisma   # create the SQLite database
npm run db:seed                   # 24 subjects, 72 products + placeholder PDFs
npm run dev                       # http://localhost:3000
```

No keys are required to run the whole thing locally:

- **Stripe unset** → checkout runs in **mock mode**: it creates a paid order
  without taking payment (clearly labelled "Test order" in the UI) so the
  order → download → watermark flow is fully testable. Set a real `sk_test_`
  key to use Stripe Checkout instead.
- **Resend unset** → transactional emails (order confirmation, heatmap) are
  written to `data/outbox/` as `.json` + `.html` + attachments instead of
  being sent.

## Testing the purchase flow in 5 steps

1. Open any subject, add a tier to the cart, and go to `/cart`.
2. Apply discount code `STUDYLAH10` (10% off) or `TELEGRAM5` (S$5 off).
3. Enter an email and click Checkout — in mock mode you land straight on the
   confirmation page.
4. Click **Open your downloads**: each PDF the tier includes has its own link
   (Strategic = 2 files, Master = 3).
5. Download one and open it — the buyer's email and order number are stamped
   on the footer of every page. `data/outbox/` holds the confirmation email.

## Admin

Visit `/admin` and sign in with `ADMIN_PASSWORD` (default `change-me` in
`.env.example` — change it before deploying). The session is an HMAC cookie
keyed on the password, so rotating the password logs everyone out.

- **Dashboard** — revenue this week / all-time, AOV, Master attach-rate, tier
  mix, and orders-by-subject, computed from the pricing snapshot stored on
  each order.
- **Products & pricing** — edit per-level tier / à-la-carte / early-bird
  prices and toggle early-bird globally. Saves write a config row to the
  database and `revalidatePath("/", "layout")`, so the storefront **and** the
  authoritative checkout both reflect the change immediately (verified: a
  price shown always equals the price charged).
- **Orders** — search by email or number, open a customer's download page, or
  resend their confirmation email.
- **Leads** — browse captured emails (with consent timestamps) and export CSV.
- **Product PDFs** — replace the file behind any product; the upload overwrites
  the private file in place so existing download links keep working.

Pricing flows through a single engine: `createPricing(table)` in
`pricing.ts` binds either the code constants (client fallback, and any caller
that doesn't need DB prices) or the admin's DB config. The server binds the DB
config for the storefront and checkout; the client gets it via
`PricingProvider` in the root layout.

## Where things live

| Path | What |
| --- | --- |
| `src/lib/catalogue.ts` | Single source of truth: subjects, products, tiers, prices, bundle constants. The seed script populates the database from this module. |
| `src/lib/pricing.ts` | Pure pricing engine: tier prices, early-bird, Mega-Bundle/All-In best-composition logic, cart nudges. Reused server-side at checkout — client prices are never trusted. |
| `src/lib/server/checkout.ts` | Re-prices a cart server-side, validates discount codes, allocates per-line cents for Stripe. |
| `src/lib/server/orders.ts` | Idempotent order creation (unique on Stripe session id), download-token issuance, confirmation email. |
| `src/lib/server/pdf-gen.ts`, `watermark.ts` | Placeholder product/heatmap PDF generation; per-download watermarking (`pdf-lib`). |
| `src/lib/server/email.ts` | Resend transport with a `data/outbox/` dev stub. |
| `src/lib/db.ts`, `prisma/` | Prisma client (better-sqlite3 adapter), schema, migrations, seed. |
| `src/lib/server/pricing-store.ts` | Reads/writes the DB pricing config + early-bird flag; `getPricing()` binds it. |
| `src/lib/server/admin-auth.ts`, `metrics.ts` | Admin session cookie; dashboard metric aggregation. |
| `src/app/api/*` | `checkout`, `webhooks/stripe`, `download/[token]`, `discount`, `leads`, `admin/*`. |
| `src/app/admin/*` | `/admin/login` (unguarded) and the guarded `(panel)` group: dashboard, products, orders, leads. |
| `src/app/*` | Storefront + `/downloads/[token]`, `/checkout/*`, coming-soon stubs. |

## Commerce model

- **Server-authoritative pricing.** The client sends only `{level, subject,
  tier}`; the server re-prices with `pricing.ts` and builds Stripe line items.
- **Idempotent orders.** `Order.stripeSessionId` is unique; the webhook and
  the mock path both funnel through `createOrderFromCheckout`, which returns
  the existing order on any duplicate (including a concurrent race).
- **Delivery.** Each order item gets a random `DownloadToken` (7 days / 5
  uses, both env-configurable). `/api/download/[token]` atomically claims a
  use, reads the private PDF, watermarks it with the buyer's email + order id,
  and streams it. Failure states (expired, used-up, missing file, unknown
  token) redirect to `/downloads/error`.
- **Discounts.** `DiscountCode` table (percent or fixed-cents); validated at
  `/api/discount` for display and re-checked authoritatively at checkout.
- **PDPA.** Every lead stores a `consentAt` timestamp; consent is required
  before the heatmap is generated and sent.

## Pricing rules (as implemented)

- Tiers per subject: Essential (Forecast), Strategic (+Vault), Master (all
  three). N(A)-Level ≈ 20% lower throughout.
- **Early-bird** is a price flag, not a discount code. It lives in the
  `Setting` table (`earlyBirdActive`), read server-side at checkout; Phase 3
  exposes the admin toggle. `EARLY_BIRD_ACTIVE` in `catalogue.ts` is the
  build-time default for client rendering.
- **Mega-Bundle**: any 3 Master subjects at ratio 168/204 of their regular
  Master prices → exactly S$168 for 3 O-Level, S$133 for 3 N(A).
- **All-In**: flat price for 5–6 Master subjects — S$268 O-Level, S$213 N(A),
  mixed carts use the mean of the per-subject flats.
- The cart always charges the **cheapest valid composition** and shows which
  bundle was applied.

## Deploying

**See [DEPLOY.md](DEPLOY.md) for the full step-by-step** (Railway + a subdomain
on SiteGround). In short: the included `Dockerfile` runs the app on any
container host with a **persistent volume mounted at `/data`** — the SQLite
database (`/data/prod.db`) and product PDFs (`/data/pdfs`) live there and
survive redeploys. `scripts/start-prod.sh` runs migrations and an idempotent
seed on boot, then starts the server. The build needs no database (pricing
falls back to code constants), so it deploys cleanly on the first push.

Before real customers: set live/`sk_test_` Stripe keys + `STRIPE_WEBHOOK_SECRET`
(webhook at `/api/webhooks/stripe` for `checkout.session.completed` and
`async_payment_succeeded`), replace the placeholder PDFs via `/admin`, set a
strong `ADMIN_PASSWORD`, and have the `/legal/*` pages reviewed.

**Serverless note:** Vercel and other serverless hosts have no persistent disk,
so SQLite + local PDFs won't survive there — use a container host with a volume
(as above), or migrate `DATABASE_URL` to Postgres (swap the Prisma adapter in
`src/lib/db.ts`) and PDFs to S3. Keep the app to a **single instance** while on
SQLite.

## Scripts

| Command | Does |
| --- | --- |
| `npm run dev` / `build` / `start` | Next.js dev / production build / serve |
| `npm run db:migrate` | `prisma migrate dev` (create/apply a migration) |
| `npm run db:seed` | Seed catalogue, generate placeholder PDFs, sample codes |
