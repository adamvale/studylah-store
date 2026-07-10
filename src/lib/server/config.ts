import path from "path";

function envInt(name: string, fallback: number): number {
  const raw = process.env[name];
  const n = raw ? Number.parseInt(raw, 10) : NaN;
  return Number.isFinite(n) && n > 0 ? n : fallback;
}

export const serverConfig = {
  downloadExpiryDays: envInt("DOWNLOAD_EXPIRY_DAYS", 7),
  downloadMaxUses: envInt("DOWNLOAD_MAX_USES", 5),
  pdfStorageDir: path.resolve(
    process.cwd(),
    process.env.PDF_STORAGE_DIR ?? "private/pdfs"
  ),
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  emailFrom: process.env.EMAIL_FROM ?? "StudyLah <orders@studylah.education>",
  resendApiKey: process.env.RESEND_API_KEY ?? "",
  // Secret that signs customer magic-links and session cookies. Independent of
  // ADMIN_PASSWORD so rotating one never affects the other. MUST be set in
  // production; when blank, customer login is disabled (fail closed).
  customerAuthSecret: process.env.CUSTOMER_AUTH_SECRET ?? "",
  // Protects scheduled endpoints (48h diagnostic follow-up). Blank = disabled.
  cronSecret: process.env.CRON_SECRET ?? "",
  stripeSecretKey: process.env.STRIPE_SECRET_KEY ?? "",
  stripeWebhookSecret: process.env.STRIPE_WEBHOOK_SECRET ?? "",
  // Web push (PWA streak reminders). Public key also ships to the browser as
  // NEXT_PUBLIC_VAPID_PUBLIC_KEY; blank keys disable push (fail closed).
  vapidPublicKey: process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY ?? "",
  vapidPrivateKey: process.env.VAPID_PRIVATE_KEY ?? "",
  vapidSubject: process.env.VAPID_SUBJECT ?? "mailto:hello@studylah.education",
};

export function pushConfigured(): boolean {
  return Boolean(serverConfig.vapidPublicKey && serverConfig.vapidPrivateKey);
}

// Real Stripe is used only when a plausible key is configured. Otherwise the
// checkout runs in clearly-marked mock mode: orders are created as paid
// without any payment, so the whole delivery flow is testable locally.
export function stripeConfigured(): boolean {
  return (
    serverConfig.stripeSecretKey.startsWith("sk_") &&
    !serverConfig.stripeSecretKey.includes("REPLACE_ME")
  );
}
