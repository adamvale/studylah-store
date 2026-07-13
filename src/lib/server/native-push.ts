import { prisma } from "@/lib/db";
import { sendFcmToToken } from "./fcm";
import { sendApnsToToken } from "./apns";

// Native push orchestrator: routes each registered device by platform, 
// Android through FCM, iOS straight to APNs, and prunes tokens the services
// report as dead. Mirrors the web-push sender's contract.

export interface NativePushPayload {
  title: string;
  body: string;
  url?: string;
}

export async function sendNativePushToCustomer(
  customerId: string,
  payload: NativePushPayload
): Promise<number> {
  const tokens = await prisma.nativePushToken.findMany({ where: { customerId } });
  let delivered = 0;
  for (const t of tokens) {
    const result =
      t.platform === "ios"
        ? await sendApnsToToken(t.token, payload)
        : await sendFcmToToken(t.token, payload);
    if (result === "ok") delivered++;
    else if (result === "dead") {
      await prisma.nativePushToken.delete({ where: { id: t.id } }).catch(() => {});
    }
  }
  return delivered;
}
