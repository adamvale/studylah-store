import { createSign } from "crypto";

// Firebase Cloud Messaging (HTTP v1) sender for ANDROID, dependency-free.
// Auth is a service-account JWT (RS256, node crypto) exchanged for an OAuth
// token, cached until expiry. iOS goes via APNs directly (see apns.ts).
//
// Config: FIREBASE_SERVICE_ACCOUNT_B64 = base64 of the service-account JSON
// (Firebase console → Project settings → Service accounts → Generate key).
// Blank = Android push disabled (fail closed).

interface ServiceAccount {
  project_id: string;
  client_email: string;
  private_key: string;
}

function serviceAccount(): ServiceAccount | null {
  const b64 = process.env.FIREBASE_SERVICE_ACCOUNT_B64 ?? "";
  if (!b64) return null;
  try {
    return JSON.parse(Buffer.from(b64, "base64").toString()) as ServiceAccount;
  } catch {
    console.error("FIREBASE_SERVICE_ACCOUNT_B64 is not valid base64 JSON");
    return null;
  }
}

export function fcmConfigured(): boolean {
  return serviceAccount() !== null;
}

let cachedToken: { token: string; expiresAt: number } | null = null;

async function accessToken(sa: ServiceAccount): Promise<string | null> {
  if (cachedToken && cachedToken.expiresAt > Date.now() + 60_000) {
    return cachedToken.token;
  }
  const now = Math.floor(Date.now() / 1000);
  const b64url = (s: string | Buffer) =>
    Buffer.from(s).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(
    JSON.stringify({
      iss: sa.client_email,
      scope: "https://www.googleapis.com/auth/firebase.messaging",
      aud: "https://oauth2.googleapis.com/token",
      iat: now,
      exp: now + 3600,
    })
  );
  const signer = createSign("RSA-SHA256");
  signer.update(`${header}.${claims}`);
  const signature = b64url(signer.sign(sa.private_key));
  const assertion = `${header}.${claims}.${signature}`;

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=${encodeURIComponent("urn:ietf:params:oauth:grant-type:jwt-bearer")}&assertion=${assertion}`,
  });
  if (!res.ok) {
    console.error("FCM token exchange failed", res.status, await res.text());
    return null;
  }
  const data = (await res.json()) as { access_token: string; expires_in: number };
  cachedToken = { token: data.access_token, expiresAt: Date.now() + data.expires_in * 1000 };
  return data.access_token;
}

export interface FcmPayload {
  title: string;
  body: string;
  url?: string;
}

// Returns "ok", "dead" (token gone, prune it), or "error".
export async function sendFcmToToken(
  token: string,
  payload: FcmPayload
): Promise<"ok" | "dead" | "error"> {
  const sa = serviceAccount();
  if (!sa) return "error";
  const auth = await accessToken(sa);
  if (!auth) return "error";

  const res = await fetch(
    `https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`,
    {
      method: "POST",
      headers: { Authorization: `Bearer ${auth}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        message: {
          token,
          notification: { title: payload.title, body: payload.body },
          data: { url: payload.url ?? "/account" },
          android: { priority: "high" },
        },
      }),
    }
  );
  if (res.ok) return "ok";
  const text = await res.text();
  if (res.status === 404 || text.includes("UNREGISTERED") || text.includes("INVALID_ARGUMENT")) {
    return "dead";
  }
  console.error("FCM send failed", res.status, text.slice(0, 200));
  return "error";
}
