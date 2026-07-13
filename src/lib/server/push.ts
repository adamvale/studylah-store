import webpush from "web-push";
import { prisma } from "@/lib/db";
import { serverConfig, pushConfigured } from "./config";

// Web-push sender. Fails closed without VAPID keys; dead subscriptions
// (endpoint gone: 404/410) are pruned on send so the table self-cleans.

let configured = false;
function ensureConfigured(): boolean {
  if (!pushConfigured()) return false;
  if (!configured) {
    webpush.setVapidDetails(
      serverConfig.vapidSubject,
      serverConfig.vapidPublicKey,
      serverConfig.vapidPrivateKey
    );
    configured = true;
  }
  return true;
}

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
}

// Sends to every device the customer enabled. Returns how many deliveries the
// push services accepted.
export async function sendPushToCustomer(
  customerId: string,
  payload: PushPayload
): Promise<number> {
  if (!ensureConfigured()) return 0;
  const subs = await prisma.pushSubscription.findMany({ where: { customerId } });
  let delivered = 0;
  for (const sub of subs) {
    try {
      await webpush.sendNotification(
        { endpoint: sub.endpoint, keys: { p256dh: sub.p256dh, auth: sub.auth } },
        JSON.stringify(payload)
      );
      delivered++;
    } catch (e) {
      const status = (e as { statusCode?: number }).statusCode;
      if (status === 404 || status === 410) {
        // Subscription expired or was revoked, forget it.
        await prisma.pushSubscription.delete({ where: { id: sub.id } }).catch(() => {});
      } else {
        console.error(`Push failed for subscription ${sub.id}`, e);
      }
    }
  }
  return delivered;
}
