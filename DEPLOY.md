# Deploying StudyLah

This app is a Node.js server (Next.js + SQLite + PDF handling). It can't run on
SiteGround's WordPress/PHP hosting, so the plan is:

- **WordPress stays on SiteGround** — your marketing site / blog.
- **This app runs on Railway** — a host that runs Node apps.
- **A subdomain** (`shop.studylah.education`) points at the app, so to visitors
  it feels like one site.

The database and PDFs live on a **persistent volume**, so nothing is lost on
redeploys. You do the steps that need your logins; the code is already prepared.

Total time: ~30–45 minutes. Cost: about US$5/month on Railway.

---

## Part 1 — Put the code on GitHub

Railway deploys from a GitHub repo (no FTP, no manual uploads).

1. Create a free account at <https://github.com> if you don't have one.
2. Create a new **empty** repository (no README, no .gitignore) — e.g.
   `studylah-store`. Copy its URL, which looks like
   `https://github.com/YOUR-NAME/studylah-store.git`.
3. In a terminal, from the `studylah` folder, run (replace the URL):

   ```bash
   cd /Users/danielyoung/Desktop/Cl/studylah
   git add .
   git commit -m "StudyLah storefront, commerce, and admin"
   git remote add origin https://github.com/YOUR-NAME/studylah-store.git
   git branch -M main
   git push -u origin main
   ```

   The first push will ask you to sign in to GitHub (a browser window or a
   token prompt). That's the only place your GitHub login is used.

> Your secrets are safe: `.env` is git-ignored, so no keys or passwords are
> uploaded. Only `.env.example` (a blank template) is included.

---

## Part 2 — Deploy on Railway

1. Sign up at <https://railway.com> (you can log in with GitHub).
2. Click **New Project → Deploy from GitHub repo**, authorise Railway to see
   your repos, and pick `studylah-store`.
3. Railway detects the `Dockerfile` and starts building. The first build takes
   a few minutes — let it finish.

### 2a. Add the persistent volume (important — do this before it's live)

1. Open your service, go to the **Variables**/**Settings** area and find
   **Volumes** (or right-click the service → **Attach Volume**).
2. Create a volume and set its **mount path** to exactly:

   ```
   /data
   ```

   This must be `/data` — the app expects the database at `/data/prod.db` and
   PDFs at `/data/pdfs`.

### 2b. Set environment variables

In the service's **Variables** tab, add these (Railway sets `PORT`,
`DATABASE_URL`, and `PDF_STORAGE_DIR` for you — leave those alone):

| Variable | Value |
| --- | --- |
| `ADMIN_PASSWORD` | a long random string (run `openssl rand -base64 24`) |
| `CUSTOMER_AUTH_SECRET` | a long random string (run `openssl rand -hex 32`) — signs customer magic-link logins; the portal fails closed without it |
| `CRON_SECRET` | a long random string (run `openssl rand -hex 32`) — protects the scheduled diagnostic follow-up endpoint (see 2f) |
| `NEXT_PUBLIC_VAPID_PUBLIC_KEY` | web-push public key (run `npx web-push generate-vapid-keys` once; safe to expose). ⚠️ `NEXT_PUBLIC_*` values are baked into the app at BUILD time, and the Dockerfile must declare a matching `ARG` for Railway to pass them into the build (already done for this one — copy that pattern for any future `NEXT_PUBLIC_*` variable used in client code) |
| `VAPID_PRIVATE_KEY` | the matching private key from the same command — keep secret |
| `VAPID_SUBJECT` | `mailto:hello@studylah.education` |
| `NEXT_PUBLIC_SITE_URL` | for now, your Railway URL (you'll set the domain in step 3) |
| `EMAIL_FROM` | `StudyLah <orders@studylah.education>` |
| `DOWNLOAD_EXPIRY_DAYS` | `7` |
| `DOWNLOAD_MAX_USES` | `5` |

**Leave Stripe and Resend unset for now.** With no Stripe key the store runs in
**mock mode** — you can place test orders and download watermarked PDFs to
confirm everything works on the real URL before touching payments.

### 2c. Get a public URL

In **Settings → Networking**, click **Generate Domain**. Railway gives you a
URL like `studylah-store-production.up.railway.app`. Put that (with `https://`)
into `NEXT_PUBLIC_SITE_URL` and let it redeploy.

Visit the URL — the storefront should load. Visit `/admin` and sign in with your
`ADMIN_PASSWORD`. Place a test order and download a PDF: it should arrive
watermarked with the buyer email and order number. 🎉

### 2f. Schedule the diagnostic follow-up emails

The "Predict your mark" check sends a follow-up email ~48 hours after a
student unlocks their results. The app never sends these on its own — an
external scheduler must call the endpoint every hour:

```
https://www.studylah.education/api/cron/diagnostic-followup?key=<CRON_SECRET>
```

Use any free pinger, e.g. **cron-job.org**: create a job with that URL and an
**every 1 hour** schedule. The endpoint is safe to over-call — it is
idempotent (each attempt is followed up at most once), returns 401 without
the correct key, and processes at most 50 emails per run. A correct call
answers `{"due":N,"sent":M}`.

### 2g. Schedule the weekly parent digest (optional)

If students opt a parent in (Settings → weekly progress email), a second
scheduled endpoint sends that digest. Add another cron-job.org job, **once a
day** is plenty:

```
https://www.studylah.education/api/cron/parent-digest?key=<CRON_SECRET>
```

Same `CRON_SECRET`. Each parent gets at most one email per ~week regardless of
how often it runs (idempotent via `parentDigestSentAt`); every email carries a
one-click unsubscribe. A correct call answers `{"candidates":N,"sent":M}`.

### 2h. Schedule the streak-reminder push (PWA)

Students who install Study HQ and enable reminders get one push notification
on evenings their daily streak is about to break. Add a third cron-job.org
job, **every 1 hour** (the endpoint only acts between 7pm and 11pm Singapore
time, and pings each student at most once per day):

```
https://www.studylah.education/api/cron/streak-reminder?key=<CRON_SECRET>
```

Requires the three `VAPID_*` variables from 2b. Outside the evening window a
correct call answers `{"window":"closed","sent":0}` — that's normal.

### 2i. Schedule the nightly database backup (strongly recommended)

The volume holds the ONLY copy of orders and customers. This endpoint
snapshots the SQLite database (consistent even while live), gzips it, and
stores it in Cloudflare R2, keeping ~30 days of dailies. Add a fourth
cron-job.org job, **once a day** (e.g. 03:00):

```
https://www.studylah.education/api/cron/backup-db?key=<CRON_SECRET>
```

Requires four `R2_*` variables in Railway (from the Cloudflare R2 dashboard:
an API token scoped to the backup bucket): `R2_ACCESS_KEY_ID`,
`R2_SECRET_ACCESS_KEY`, `R2_ENDPOINT`, `R2_BUCKET`. A correct call answers
`{"key":"backups/prod-YYYY-MM-DD.db.gz","bytes":…,"gzBytes":…,"retained":…}`.

**To restore:** download the object from R2, `gunzip` it, replace
`/data/prod.db` on the volume (service stopped), redeploy.

---

## Part 3 — Point your subdomain at it (SiteGround)

1. In Railway, **Settings → Networking → Custom Domain**, enter
   `shop.studylah.education`. Railway shows a **CNAME target** (something like
   `xxxx.up.railway.app`). Copy it.
2. Log in to **SiteGround → Site Tools → Domain → DNS Zone Editor**.
3. Add a **CNAME** record:
   - **Name/Host:** `shop`
   - **Points to / Value:** the Railway CNAME target
   - Save. (DNS can take a few minutes to a couple of hours.)
4. Back in Railway, wait for the custom domain to show as active.
5. Update `NEXT_PUBLIC_SITE_URL` to `https://shop.studylah.education` and let it
   redeploy (this makes emails and payment redirects use the real domain).
6. In WordPress, add a **Shop** button/menu item linking to
   `https://shop.studylah.education`. Done — one brand, two systems.

---

## Part 4 — Turn on real payments (Stripe)

Do this once the store works in mock mode.

1. Create a **Stripe** account (<https://stripe.com>), business region
   Singapore. In the dashboard, enable **PayNow** (Settings → Payment methods).
2. Get your API keys (start with **test mode** to rehearse, then switch to
   live). In Railway Variables, set:
   - `STRIPE_SECRET_KEY` = `sk_test_...` (or `sk_live_...`)
   - `STRIPE_PUBLISHABLE_KEY` = `pk_test_...` (or `pk_live_...`)
3. Create a **webhook**: Stripe dashboard → Developers → Webhooks → Add
   endpoint:
   - **URL:** `https://shop.studylah.education/api/webhooks/stripe`
   - **Events:** `checkout.session.completed` and
     `checkout.session.async_payment_succeeded`
   - Copy the **Signing secret** (`whsec_...`) into Railway as
     `STRIPE_WEBHOOK_SECRET`.
4. Redeploy. Checkout now redirects to real Stripe (cards + PayNow). Use
   Stripe's test card `4242 4242 4242 4242` while in test mode.

### Email (optional but recommended)

Order confirmations and the free heatmap are written to a log until you add
email. Sign up at <https://resend.com>, verify your domain, and set
`RESEND_API_KEY` in Railway. Until then everything else works; customers just
won't get the confirmation email.

---

## Part 5 — Before real customers

- [ ] Replace the placeholder PDFs with real content: **/admin → Products &
      pricing → Product PDFs → Replace** for each product.
- [ ] Set your real prices and toggle early-bird as needed in **/admin**.
- [ ] Confirm `ADMIN_PASSWORD` is long and private.
- [ ] Confirm `CUSTOMER_AUTH_SECRET` and `CRON_SECRET` are set, and the hourly
      cron-job.org ping for the diagnostic follow-up is running (2f).
- [ ] Confirm the three `VAPID_*` variables are set and the hourly
      streak-reminder ping is running (2h) — otherwise installed apps never
      get their streak push.
- [ ] Confirm the four `R2_*` variables are set and the nightly backup job is
      running (2i) — the volume must never be the only copy of the database.
- [ ] Switch Stripe from test keys to **live** keys, and confirm the webhook is
      on the live endpoint.
- [ ] Have a lawyer review the `/legal/*` pages (they're marked FOR LAWYER
      REVIEW).
- [ ] Place one real (small) live order end-to-end and refund it, to confirm
      the full path.

---

## How updates work later

Change code locally, then:

```bash
git add . && git commit -m "what changed" && git push
```

Railway rebuilds and redeploys automatically. Your volume (database + PDFs)
persists across deploys, so orders, customers, and uploaded PDFs are kept.

---

## Troubleshooting

- **Build fails on Railway:** open the build logs. The build itself needs no
  database (it's designed that way), so failures are usually a missing file in
  the push — confirm `git status` is clean and everything was pushed.
- **Store shows default prices / "no orders":** the volume probably isn't
  mounted at `/data`, so the database resets each deploy. Check the volume
  mount path is exactly `/data`.
- **Downloads 404 or fail:** same cause — PDFs live under `/data/pdfs` on the
  volume; without the volume they vanish on redeploy. The seed regenerates
  placeholder PDFs on boot, so this only bites if the volume is misconfigured.
- **Payments don't complete:** check the Stripe webhook is pointing at
  `https://shop.studylah.education/api/webhooks/stripe` and
  `STRIPE_WEBHOOK_SECRET` matches that endpoint's signing secret.
- **Don't run more than one instance.** SQLite is single-server; keep Railway
  replicas at 1. (If you ever outgrow that, the move is Postgres — ask and I'll
  do the swap.)
