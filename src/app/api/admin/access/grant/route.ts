import { NextResponse } from "next/server";
import { isAdmin } from "@/lib/server/admin-auth";
import { serverConfig } from "@/lib/server/config";
import { grantAccess } from "@/lib/server/access-grants";
import {
  PUBLISHED_LEVELS,
  TIER_ORDER,
  subjectsForLevel,
  type Level,
  type Tier,
} from "@/lib/catalogue";
import type { CartItem } from "@/lib/pricing";

export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }
  const form = await request.formData().catch(() => null);
  const email = String(form?.get("email") ?? "");
  // Subject select carries "level::slug" for one subject, or "all::<scope>"
  // for a bundle grant (scope = a level or "all").
  const subjectRaw = String(form?.get("subject") ?? "");
  const tier = String(form?.get("tier") ?? "") as Tier;
  const notify = form?.get("notify") != null;

  const back = (flag: string) =>
    NextResponse.redirect(
      new URL(`/admin/access?${flag}`, serverConfig.siteUrl),
      { status: 303 }
    );

  if (!TIER_ORDER.includes(tier)) return back("error=bad-input");

  let items: CartItem[];
  if (subjectRaw.startsWith("all::")) {
    const scope = subjectRaw.slice("all::".length);
    const levels =
      scope === "all"
        ? PUBLISHED_LEVELS
        : PUBLISHED_LEVELS.includes(scope as Level)
          ? [scope as Level]
          : null;
    if (!levels) return back("error=bad-input");
    items = levels.flatMap((level) =>
      subjectsForLevel(level).map((s) => ({
        level,
        subjectSlug: s.slug,
        tier,
      }))
    );
  } else {
    const [level, subjectSlug] = subjectRaw.split("::") as [Level, string];
    if (!PUBLISHED_LEVELS.includes(level) || !subjectSlug) {
      return back("error=bad-input");
    }
    items = [{ level, subjectSlug, tier }];
  }

  const res = await grantAccess({ email, items, notify });
  if (!res.ok) return back(`error=${encodeURIComponent(res.error)}`);
  return back(`granted=${res.orderId}`);
}
