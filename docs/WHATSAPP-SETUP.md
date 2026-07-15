# WhatsApp Gugu — Meta Cloud API setup

Gugu (the site chatbot) also answers WhatsApp messages. The code side is done:
`/api/webhooks/whatsapp` receives Meta webhook events, runs the exact same
brain + compliance filter as the site widget (`src/lib/server/gugu-brain.ts`),
stores the conversation in the `WaMessage` table, and replies through the
Graph API. What remains is the Meta configuration below, which only the
business owner can do.

## How it works

```
Visitor WhatsApp message
  → Meta Cloud API → POST /api/webhooks/whatsapp (HMAC-verified)
  → history loaded from WaMessage (thread persists across days)
  → askGugu(channel: "whatsapp")  ← same Claude model, prompt, compliance filter
  → reply sent via Graph API → visitor's WhatsApp
```

- With no WhatsApp env vars set, the webhook runs in **stub mode**: replies are
  written to `data/outbox/*-whatsapp-to-<number>.json` instead of sent, so the
  whole pipeline is testable locally (see "Local testing" below).
- Non-text messages (images, voice notes) get a polite "text only" nudge.
- If Claude errors or a reply trips the compliance filter, a scripted fallback
  pointing to hello@studylah.education is sent instead — never silence.
- Rate limit: 8 messages/minute per number, then silence until the window
  resets (bounds spend on abuse).

## One-time Meta setup (owner)

**Important:** the phone number you connect becomes API-only — it can no
longer be used in the WhatsApp / WhatsApp Business phone app. Use a separate
number for the bot (a fresh prepaid SIM works); keep your human-replies number
out of this.

1. **Meta Business Manager** — business.facebook.com → create (or use) the
   StudyLah business portfolio. Complete business verification if prompted
   (ACRA details for Airmosphere Pte. Ltd.).
2. **Create a Meta app** — developers.facebook.com → My Apps → Create App →
   type "Business". Add the **WhatsApp** product to it.
3. **Add the bot phone number** — WhatsApp → API Setup → add and verify the
   number (SMS code). Note the **Phone number ID** shown there.
4. **Permanent access token** — Business Settings → Users → System Users →
   create a system user (admin), assign it the app + the WhatsApp account,
   then Generate Token with scopes `whatsapp_business_messaging` and
   `whatsapp_business_management`, expiry "never". Copy it.
5. **App secret** — App → Settings → Basic → App Secret.
6. **Set the four env vars on Railway** (service → Variables):
   - `WHATSAPP_VERIFY_TOKEN` — any random string you invent (`openssl rand -hex 16`)
   - `WHATSAPP_ACCESS_TOKEN` — the permanent token from step 4
   - `WHATSAPP_PHONE_NUMBER_ID` — from step 3
   - `WHATSAPP_APP_SECRET` — from step 5
   Redeploy so they take effect.
7. **Subscribe the webhook** — App → WhatsApp → Configuration:
   - Callback URL: `https://www.studylah.education/api/webhooks/whatsapp`
   - Verify token: the same `WHATSAPP_VERIFY_TOKEN` value
   - Click Verify and Save (the GET handshake must return the challenge —
     env vars from step 6 must already be live).
   - Under Webhook fields, subscribe to **messages**.
8. **Go live** — while the app is in Development mode only allowlisted test
   numbers can message it. Switch the app to **Live** mode (App → basic
   settings toggle). Business verification (step 1) is what unlocks this.
9. **Test** — WhatsApp the bot number "hi" from your own phone; Gugu should
   reply within a few seconds. Check Railway logs if not.

## Reading and answering conversations yourself

The bot number has no phone app, so the store's admin panel is the inbox:
**/admin/whatsapp** shows every thread. Replying there sends as StudyLah (via
the same API) and **pauses Gugu on that thread for 24 hours** — he hands back
automatically. Two rules of the road:

- Reply within 24h of the visitor's last message (free service window). After
  24h of silence, the API can't deliver a plain reply at all (Meta would
  require a paid, pre-approved template — not built).
- The visitor sees one seamless conversation; there's no visible switch
  between Gugu and you.

## Pricing notes

- Visitor-initiated ("service") conversations are free on the Cloud API; Gugu
  only ever replies, never initiates, so Meta costs ~S$0.
- Claude cost is the same Haiku pricing as the site widget (~fractions of a
  cent per reply).

## Adding the button on the site

Once live, add a "Chat on WhatsApp" link anywhere with
`https://wa.me/<botnumber>?text=Hi%20Gugu` (number in international format,
no +). Worth adding to the contact section and maybe the Gugu widget itself.

## Local testing (no Meta account needed)

Leave the WHATSAPP_* vars blank, run the prod server, then simulate Meta:

```bash
curl -s -X POST http://localhost:3000/api/webhooks/whatsapp \
  -H 'Content-Type: application/json' \
  -d '{"entry":[{"changes":[{"value":{"messages":[{"id":"wamid.test1","from":"6591234567","type":"text","text":{"body":"hi, what is studylah?"}}]}}]}]}'
```

Gugu's reply appears in `data/outbox/` as `*-whatsapp-to-6591234567.json`, and
both turns are stored in the `WaMessage` table. Repeat with a new `id` and a
follow-up question to see history-aware replies.
