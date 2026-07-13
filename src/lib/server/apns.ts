import { createSign } from "crypto";
import http2 from "http2";

// Direct APNs (HTTP/2) sender for iOS, no Firebase needed on the Apple side.
// Auth is a p8 token key (ES256 JWT), the modern certificate-free method.
//
// Config (all four, or iOS push is disabled fail-closed):
//   APNS_KEY_B64    base64 of the .p8 AuthKey file (Apple Developer → Keys)
//   APNS_KEY_ID     the key's 10-char id
//   APNS_TEAM_ID    your Apple Team ID
//   APNS_BUNDLE_ID  education.studylah.app
//   APNS_SANDBOX    "1" while testing dev builds (TestFlight/App Store use prod)

interface ApnsConfig {
  key: string;
  keyId: string;
  teamId: string;
  bundleId: string;
  host: string;
}

function config(): ApnsConfig | null {
  const b64 = process.env.APNS_KEY_B64 ?? "";
  const keyId = process.env.APNS_KEY_ID ?? "";
  const teamId = process.env.APNS_TEAM_ID ?? "";
  const bundleId = process.env.APNS_BUNDLE_ID ?? "";
  if (!b64 || !keyId || !teamId || !bundleId) return null;
  return {
    key: Buffer.from(b64, "base64").toString(),
    keyId,
    teamId,
    bundleId,
    host:
      process.env.APNS_SANDBOX === "1"
        ? "https://api.sandbox.push.apple.com"
        : "https://api.push.apple.com",
  };
}

export function apnsConfigured(): boolean {
  return config() !== null;
}

let cachedJwt: { token: string; issuedAt: number } | null = null;

function providerJwt(c: ApnsConfig): string {
  // Apple rejects tokens older than 60 min and refreshes more often than
  // every 20 min, reuse for 40.
  if (cachedJwt && Date.now() - cachedJwt.issuedAt < 40 * 60 * 1000) {
    return cachedJwt.token;
  }
  const b64url = (s: string | Buffer) =>
    Buffer.from(s).toString("base64").replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const header = b64url(JSON.stringify({ alg: "ES256", kid: c.keyId }));
  const claims = b64url(
    JSON.stringify({ iss: c.teamId, iat: Math.floor(Date.now() / 1000) })
  );
  const signer = createSign("SHA256");
  signer.update(`${header}.${claims}`);
  // ieee-p1363 = the raw r||s signature JWT ES256 requires (not DER).
  const signature = b64url(signer.sign({ key: c.key, dsaEncoding: "ieee-p1363" }));
  const token = `${header}.${claims}.${signature}`;
  cachedJwt = { token, issuedAt: Date.now() };
  return token;
}

export interface ApnsPayload {
  title: string;
  body: string;
  url?: string;
}

// Returns "ok", "dead" (token gone, prune it), or "error".
export function sendApnsToToken(
  deviceToken: string,
  payload: ApnsPayload
): Promise<"ok" | "dead" | "error"> {
  const c = config();
  if (!c) return Promise.resolve("error");

  return new Promise((resolve) => {
    const client = http2.connect(c.host);
    client.on("error", () => resolve("error"));

    const req = client.request({
      ":method": "POST",
      ":path": `/3/device/${deviceToken}`,
      authorization: `bearer ${providerJwt(c)}`,
      "apns-topic": c.bundleId,
      "apns-push-type": "alert",
      "apns-priority": "10",
      "content-type": "application/json",
    });

    let status = 0;
    let body = "";
    req.on("response", (headers) => {
      status = Number(headers[":status"] ?? 0);
    });
    req.on("data", (chunk: Buffer) => {
      body += chunk.toString();
    });
    req.on("end", () => {
      client.close();
      if (status === 200) resolve("ok");
      else if (status === 410 || body.includes("BadDeviceToken") || body.includes("Unregistered"))
        resolve("dead");
      else {
        console.error("APNs send failed", status, body.slice(0, 200));
        resolve("error");
      }
    });
    req.on("error", () => {
      client.close();
      resolve("error");
    });

    req.end(
      JSON.stringify({
        aps: { alert: { title: payload.title, body: payload.body }, sound: "default" },
        url: payload.url ?? "/account",
      })
    );
  });
}
