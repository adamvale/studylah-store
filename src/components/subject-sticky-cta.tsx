"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { sgd, type Level } from "@/lib/catalogue";
import { useCart } from "@/lib/cart-context";
import { usePricing } from "@/lib/pricing-context";

// Subject pages run long (the buy box sits several screens down), so the
// offer stays one tap away once the visitor scrolls past the hero. One
// decisive action: add the Master pack and go to the cart.
export function SubjectStickyCta({
  level,
  subjectSlug,
  subjectName,
}: {
  level: Level;
  subjectSlug: string;
  subjectName: string;
}) {
  const [shown, setShown] = useState(false);
  const { addItem } = useCart();
  const { tierPrice } = usePricing();
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 640);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function buyMaster() {
    addItem({ level, subjectSlug, tier: "master" });
    router.push("/cart");
  }

  return (
    <div
      data-bottom-cta={shown ? "" : undefined}
      className={`fixed inset-x-0 bottom-0 z-40 border-t border-hairline bg-night/95 backdrop-blur transition-transform duration-300 ${
        shown ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-4 py-3">
        <div className="hidden min-w-0 sm:block">
          <p className="truncate text-sm font-medium text-white">
            {subjectName}, full Master pack
          </p>
          <p className="truncate text-xs text-guarantee">
            Less than one hour of tuition · fully refundable if the forecast
            misses
          </p>
        </div>
        <button
          type="button"
          onClick={buyMaster}
          className="cta-sheen w-full rounded-lg bg-accent px-5 py-3 text-center text-sm font-bold text-night transition-transform hover:-translate-y-0.5 sm:w-auto"
        >
          Get Master, {sgd(tierPrice(level, "master"))}
        </button>
      </div>
    </div>
  );
}
