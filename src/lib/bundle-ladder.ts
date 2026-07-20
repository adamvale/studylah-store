import {
  ALLIN_EXTRA,
  ALLIN_FLAT,
  MEGA_RATIO,
  getSubject,
  tierProducts,
} from "./catalogue";
import type { Pricing } from "./pricing";

// The 3 / 6 / 8 subject bundle ladder, computed once and shared by /pricing
// and /bundles so the two pages can never disagree.
//
// Savings and the percent chip measure against the FULL a la carte parts
// value of an Ultra subject (S$116 at O-Level), not just the Ultra tier
// price, so the struck figure is the true value of what the buyer receives.
export interface BundleRow {
  key: "mega" | "allin6" | "allin8";
  count: number;
  name: string;
  tag: string;
  price: number;
  value: number;
  savings: number;
  percentOff: number;
  perSubject: number;
  popular: boolean;
}

export function bundleLadder(pricing: Pricing): BundleRow[] {
  const ultra = pricing.tierPrice("o-level", "master");
  const refSubject = getSubject("o-level", "chemistry-pure");
  const ultraValue = pricing.tierValue(
    "o-level",
    "master",
    refSubject ? tierProducts("master", refSubject) : undefined
  );

  const rows: Omit<
    BundleRow,
    "value" | "savings" | "percentOff" | "perSubject"
  >[] = [
    {
      key: "mega",
      count: 3,
      name: "3 subjects",
      tag: "Mega Bundle",
      price: Math.round(3 * ultra * MEGA_RATIO),
      popular: false,
    },
    {
      key: "allin6",
      count: 6,
      name: "6 subjects",
      tag: "All-In",
      price: ALLIN_FLAT["o-level"],
      popular: true,
    },
    {
      key: "allin8",
      count: 8,
      name: "8 subjects",
      tag: "All-In +2",
      price: ALLIN_FLAT["o-level"] + 2 * ALLIN_EXTRA["o-level"],
      popular: false,
    },
  ];

  return rows.map((b) => {
    const value = b.count * ultraValue;
    return {
      ...b,
      value,
      savings: value - b.price,
      percentOff: Math.round((1 - b.price / value) * 100),
      perSubject: b.price / b.count,
    };
  });
}
