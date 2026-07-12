# Study HQ — Native App Playbook (iOS + Android)

The native apps are a **Capacitor shell around the live site**: they load
`https://www.studylah.education/account` in a native webview with real push
notifications. Consequences worth internalising:

- **Features ship server-side.** A normal `git push` updates the app content
  instantly — no store review. You only build/release the shell when native
  things change (plugins, icons, Capacitor version).
- **The app is study-only.** Inside the shell, the header drops the
  storefront nav + cart, the portal drops "Add subjects" and "Refer a friend",
  and those pages show a "manage on the website" note instead. This is
  Apple's reader-app rule (guideline 3.1.1): no purchases, no purchase links,
  no cash-reward mentions in-app. Do not weaken this.
- Sign-in inside the app uses the **6-digit code** from the login email (the
  same email still carries the magic link for browsers).

---

## Part 1 — One-time setup

### 1a. Firebase (Android push) — ~10 min

1. [console.firebase.google.com](https://console.firebase.google.com) →
   **Add project** → name `StudyLah` (Analytics optional — off is fine).
2. In the project: **Add app → Android**. Package name:
   `education.studylah.app`. Register.
3. Download **`google-services.json`** → place it at
   `android/app/google-services.json` → commit it (it contains only
   restricted identifiers; the template's .gitignore already allows it).
4. **Project settings → Service accounts → Generate new private key** →
   downloads a JSON file. Base64 it and add to Railway:
   ```bash
   base64 -i path/to/serviceaccount.json | pbcopy
   ```
   → Railway variable `FIREBASE_SERVICE_ACCOUNT_B64` = (paste).

### 1b. APNs key (iOS push) — ~10 min

1. [developer.apple.com](https://developer.apple.com) → **Certificates, IDs &
   Profiles → Keys → +** → name `StudyLah Push`, tick **Apple Push
   Notifications service (APNs)** → Continue → Register → **Download** the
   `.p8` file (one chance only — keep it in the password manager).
2. Note the **Key ID** (10 chars, shown on the key page) and your **Team ID**
   (top-right of the membership page).
3. Railway variables:
   ```
   APNS_KEY_B64   = base64 of the .p8 file  (base64 -i AuthKey_XXXX.p8 | pbcopy)
   APNS_KEY_ID    = the 10-char key id
   APNS_TEAM_ID   = your team id
   APNS_BUNDLE_ID = education.studylah.app
   ```
4. Also under **Identifiers → +**: register App ID `education.studylah.app`
   with the **Push Notifications** capability ticked.

### 1c. App-review demo account

Reviewers can't receive our login emails, so a fixed pair lets them in:

1. Create a demo customer on prod (place a small comped order via /admin, or
   use an existing test purchase) — e.g. `review@studylah.education`.
2. Railway variables: `REVIEW_EMAIL=review@studylah.education`,
   `REVIEW_CODE=` any 6 digits.
3. Put those two values in the App Store Connect / Play Console review notes.

### 1d. Codemagic integrations

- **iOS**: App Store Connect → Users and Access → Integrations → **App Store
  Connect API → Generate key** (role: App Manager) → download the .p8, note
  Key ID + Issuer ID. In Codemagic: **Teams → Personal → Integrations → App
  Store Connect → add**, name it **`studylah-asc`** (matches codemagic.yaml).
- **Android**: generate an upload keystore once:
  ```bash
  keytool -genkey -v -keystore studylah-upload.keystore -alias studylah \
    -keyalg RSA -keysize 2048 -validity 10000
  ```
  In Codemagic: **Code signing identities → Android → upload**, reference
  name **`studylah_keystore`**. Keep the keystore + passwords in the password
  manager — losing it means losing the ability to update the app.

### 1e. Store listings

- **App Store Connect → My Apps → +**: bundle `education.studylah.app`, name
  **"Study HQ — StudyLah"**. Category: Education. Age rating: run the
  questionnaire honestly (no objectionable content → 4+).
- **Play Console → Create app**: same name, Education, free.
- Listing copy, screenshots (phone-sized captures of Today, Adventure, the
  campaign map, bestiary), privacy policy URL
  (`https://www.studylah.education/legal/privacy`) — reuse the PWA marketing
  language, minus any purchase talk.
- **Review notes (both stores), adapt:**
  > Study HQ is the companion app for existing StudyLah customers (exam-prep
  > publisher, studylah.education). It is a reader-style app: students access
  > content they already own and use study tools; there are no purchases in
  > the app. Demo account: email `review@…` with sign-in code `……` (enter it
  > on the sign-in screen under "enter the 6-digit code").

---

## Part 2 — Cutting a release

1. Codemagic dashboard → studylah-store → **Start new build** → pick
   `android-release` or `ios-release` → branch `main` → Start.
2. iOS: the build lands in **TestFlight** automatically. Test it on your
   iPhone (TestFlight app), then App Store Connect → promote to review.
3. Android: download the `.aab` artifact → Play Console → upload to
   **Internal testing**, then promote. (After the first release you can
   uncomment the auto-publish block in codemagic.yaml.)
4. **Build numbers are automatic.** The iOS pipeline stamps a unique,
   always-increasing `CURRENT_PROJECT_VERSION` (Unix timestamp) on every run,
   so you never hand-bump it — this fixes the "bundle version … has already
   been used / must be higher than the previously uploaded version" upload
   error. Only the **marketing version** (what users see, e.g. 1.0 → 1.1) is
   manual: `ios/App/App.xcodeproj` `MARKETING_VERSION` and
   `android/app/build.gradle` `versionName`. Android `versionCode` still needs
   bumping per Play upload.

## Part 3 — Verifying push end-to-end

1. Install a TestFlight/internal build, sign in, Settings → **🔔 Remind me**.
2. Check the token registered: the `NativePushToken` table (or just trust
   the toggle state).
3. Do the daily three yesterday-but-not-today, wait for the 7–11pm SG window
   — or temporarily point a cron-job.org test hit at
   `/api/cron/streak-reminder?key=…` during the window.
4. iOS dev builds (Xcode direct, not TestFlight) need `APNS_SANDBOX=1`;
   TestFlight and App Store builds use production APNs (leave it unset).

## Environment variables recap (Railway)

| Variable | Purpose |
| --- | --- |
| `FIREBASE_SERVICE_ACCOUNT_B64` | Android push (FCM v1) |
| `APNS_KEY_B64` / `APNS_KEY_ID` / `APNS_TEAM_ID` / `APNS_BUNDLE_ID` | iOS push (direct APNs) |
| `APNS_SANDBOX` | `1` only for local dev builds |
| `REVIEW_EMAIL` / `REVIEW_CODE` | store-reviewer demo login |
