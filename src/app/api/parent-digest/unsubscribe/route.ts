import { prisma } from "@/lib/db";
import { verifyParentUnsubToken } from "@/lib/server/customer-session";

// One-click unsubscribe for parents (link in every digest). The token is
// HMAC-signed and carries only the customer id — no login required.
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
  const token = new URL(request.url).searchParams.get("token");
  const customerId = verifyParentUnsubToken(token);
  if (!customerId) {
    return page(
      "Link expired",
      "This unsubscribe link is invalid or has expired. Ask the student to remove your address from their StudyLah account settings."
    );
  }
  await prisma.customer.updateMany({
    where: { id: customerId },
    data: { parentEmail: null, parentDigestConsentAt: null },
  });
  return page(
    "Unsubscribed",
    "You won't receive any more weekly progress emails. The student can re-add your address any time from their account settings."
  );
}
