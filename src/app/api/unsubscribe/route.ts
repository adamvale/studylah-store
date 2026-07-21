import { prisma } from "@/lib/db";
import { verifyNurtureUnsubToken } from "@/lib/server/customer-session";

// One-click unsubscribe for the diagnostic nurture stream. The token is
// HMAC-signed and carries the email, no login required. GET shows a page (link
// click); POST is the RFC 8058 List-Unsubscribe-Post one-click that Gmail and
// Microsoft fire without loading the page. Both suppress the email.

async function suppress(email: string, reason: string) {
  await prisma.emailSuppression.upsert({
    where: { email: email.toLowerCase() },
    create: { email: email.toLowerCase(), reason },
    update: { reason },
  });
}

function page(title: string, body: string): Response {
  return new Response(
    `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title></head>
     <body style="margin:0;background:#f6f8fb;font-family:Helvetica,Arial,sans-serif;color:#101f33;">
       <div style="max-width:480px;margin:0 auto;padding:64px 20px;text-align:center;">
         <p style="font-size:20px;font-weight:bold;color:#12335e;">StudyLah</p>
         <h1 style="font-size:22px;">${title}</h1>
         <p style="font-size:14px;color:#3d4e63;line-height:1.6;">${body}</p>
       </div>
     </body></html>`,
    { headers: { "content-type": "text/html; charset=utf-8" } }
  );
}

export async function GET(request: Request) {
  const email = verifyNurtureUnsubToken(
    new URL(request.url).searchParams.get("token")
  );
  if (!email) {
    return page(
      "Link expired",
      "This unsubscribe link is invalid or has expired. To stop these emails, reply \"unsubscribe\" to any of them and we'll remove you right away."
    );
  }
  await suppress(email, "one-click");
  return page(
    "Unsubscribed",
    "Done. You won't receive any more StudyLah study emails. The free exam countdown on the site is always there if you want it."
  );
}

export async function POST(request: Request) {
  const email = verifyNurtureUnsubToken(
    new URL(request.url).searchParams.get("token")
  );
  if (email) await suppress(email, "one-click");
  // One-click clients only care about the 2xx; no body required.
  return new Response(null, { status: 200 });
}
