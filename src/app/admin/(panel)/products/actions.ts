"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  PRODUCT_ORDER,
  TIER_ORDER,
  type Level,
  type LevelPricing,
  type ProductKey,
  type Tier,
} from "@/lib/catalogue";
import type { PricingTable } from "@/lib/pricing";
import { isAdmin } from "@/lib/server/admin-auth";
import { setMaintenance } from "@/lib/server/maintenance";
import { savePricingTable, setEarlyBird } from "@/lib/server/pricing-store";

const LEVELS: Level[] = ["o-level", "na-level"];

function num(formData: FormData, name: string): number | null {
  const raw = formData.get(name);
  if (typeof raw !== "string" || raw.trim() === "") return null;
  const n = Number(raw);
  return Number.isFinite(n) && n >= 0 ? Math.round(n) : null;
}

export async function savePricingAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");

  const table = {} as PricingTable;
  for (const level of LEVELS) {
    const tiers = {} as Record<Tier, number>;
    for (const tier of TIER_ORDER) {
      const v = num(formData, `${level}__tiers__${tier}`);
      if (v === null) redirect("/admin/products?error=pricing");
      tiers[tier] = v;
    }
    const alacarte = {} as Record<ProductKey, number>;
    for (const product of PRODUCT_ORDER) {
      const v = num(formData, `${level}__alacarte__${product}`);
      if (v === null) redirect("/admin/products?error=pricing");
      alacarte[product] = v;
    }
    // Early-bird is optional per tier; a blank field means "no early-bird".
    const earlyBird: Partial<Record<Tier, number>> = {};
    for (const tier of TIER_ORDER) {
      const v = num(formData, `${level}__earlyBird__${tier}`);
      if (v !== null) earlyBird[tier] = v;
    }
    const lp: LevelPricing = { tiers, alacarte, earlyBird };
    table[level] = lp;
  }

  await savePricingTable(table);
  // Prices are read by the layout and every storefront page; refresh them all.
  revalidatePath("/", "layout");
  redirect("/admin/products?saved=pricing");
}

export async function setEarlyBirdAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");
  const active = formData.get("active") === "true";
  await setEarlyBird(active);
  revalidatePath("/", "layout");
  redirect("/admin/products?saved=earlybird");
}

export async function setMaintenanceAction(formData: FormData) {
  if (!(await isAdmin())) redirect("/admin/login");
  const active = formData.get("active") === "true";
  setMaintenance(active);
  redirect(`/admin/products?saved=maintenance-${active ? "on" : "off"}`);
}
