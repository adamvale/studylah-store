import {
  LEVELS,
  PRODUCTS,
  PRODUCT_ORDER,
  TIER_NAMES,
  TIER_ORDER,
  productFilesFor,
  productNameFor,
  productsForSubject,
  subjectsForLevel,
  type Level,
} from "@/lib/catalogue";
import { stat } from "node:fs/promises";
import path from "node:path";
import { prisma } from "@/lib/db";
import { serverConfig } from "@/lib/server/config";
import { getEarlyBird, getPricingTable } from "@/lib/server/pricing-store";
import { PdfUpload, type StoredFile } from "@/components/admin/pdf-upload";
import { savePricingAction, setEarlyBirdAction } from "./actions";

export const dynamic = "force-dynamic";

/**
 * The file input can only ever say "no file chosen" — that describes the
 * picker, not storage. Read what is actually on disk, so a placeholder is
 * never mistaken for a delivered product.
 */
async function storedFile(filePath: string): Promise<StoredFile | null> {
  try {
    const s = await stat(path.join(serverConfig.pdfStorageDir, filePath));
    return { sizeBytes: s.size, updatedAt: s.mtime.toISOString() };
  } catch {
    return null;
  }
}

const LEVEL_KEYS: Level[] = ["o-level", "na-level"];

function PriceField({
  name,
  label,
  value,
  optional = false,
}: {
  name: string;
  label: string;
  value: number | undefined;
  optional?: boolean;
}) {
  return (
    <label className="flex items-center justify-between gap-2 text-sm">
      <span className="text-body">{label}</span>
      <span className="flex items-center gap-1">
        <span className="text-xs text-body">S$</span>
        <input
          type="number"
          name={name}
          defaultValue={value ?? ""}
          min={0}
          step={1}
          placeholder={optional ? "—" : undefined}
          className="w-20 rounded-lg border border-trust/20 bg-white px-2 py-1.5 text-right font-mono text-sm"
        />
      </span>
    </label>
  );
}

export default async function AdminProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ saved?: string; error?: string }>;
}) {
  const { saved, error } = await searchParams;
  const [table, earlyBird] = await Promise.all([getPricingTable(), getEarlyBird()]);

  const productRows = await prisma.product.findMany({
    include: { subject: true, files: true },
  });
  const productByKey = new Map(
    productRows.map((p) => [`${p.subject.level}::${p.subject.slug}::${p.key}`, p])
  );

  const storedByPath = new Map(
    await Promise.all(
      productRows
        .flatMap((p) => p.files)
        .map(async (f) => [f.filePath, await storedFile(f.filePath)] as const)
    )
  );

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display text-2xl font-bold text-ink">Products and pricing</h1>
        <p className="text-sm text-body">
          Edits apply to the storefront and checkout immediately.
        </p>
        {saved === "pricing" && (
          <p className="mt-3 rounded-lg bg-guarantee/10 px-4 py-2 text-sm text-guarantee">
            Pricing saved.
          </p>
        )}
        {saved === "earlybird" && (
          <p className="mt-3 rounded-lg bg-guarantee/10 px-4 py-2 text-sm text-guarantee">
            Early-bird setting saved.
          </p>
        )}
        {error === "pricing" && (
          <p className="mt-3 rounded-lg bg-heat-5/10 px-4 py-2 text-sm text-heat-5">
            Every tier and à-la-carte price is required. Nothing was saved.
          </p>
        )}
      </div>

      <section className="rounded-2xl border border-trust/10 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-lg font-bold text-ink">Early-bird pricing</h2>
            <p className="text-sm text-body">
              When on, tiers with an early-bird price charge and display it
              site-wide. Currently{" "}
              <strong className={earlyBird ? "text-signal-deep" : "text-ink"}>
                {earlyBird ? "ON" : "off"}
              </strong>
              .
            </p>
          </div>
          <form action={setEarlyBirdAction}>
            <input type="hidden" name="active" value={earlyBird ? "false" : "true"} />
            <button
              type="submit"
              className="rounded-lg bg-trust px-4 py-2 text-sm font-medium text-white hover:bg-trust-deep"
            >
              Turn {earlyBird ? "off" : "on"}
            </button>
          </form>
        </div>
      </section>

      <form action={savePricingAction}>
        <div className="grid gap-6 lg:grid-cols-2">
          {LEVEL_KEYS.map((level) => {
            const lp = table[level];
            return (
              <section key={level} className="rounded-2xl border border-trust/10 bg-white p-5">
                <h2 className="font-display text-lg font-bold text-ink">
                  {LEVELS[level].name}
                </h2>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-body">
                  Tier prices
                </p>
                <div className="mt-2 space-y-2">
                  {TIER_ORDER.map((tier) => (
                    <PriceField
                      key={tier}
                      name={`${level}__tiers__${tier}`}
                      label={TIER_NAMES[tier]}
                      value={lp.tiers[tier]}
                    />
                  ))}
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-body">
                  À-la-carte prices
                </p>
                <div className="mt-2 space-y-2">
                  {PRODUCT_ORDER.map((product) => (
                    <PriceField
                      key={product}
                      name={`${level}__alacarte__${product}`}
                      label={PRODUCTS[product].name}
                      value={lp.alacarte[product]}
                    />
                  ))}
                </div>

                <p className="mt-4 text-xs font-medium uppercase tracking-wide text-body">
                  Early-bird prices (blank = none)
                </p>
                <div className="mt-2 space-y-2">
                  {TIER_ORDER.map((tier) => (
                    <PriceField
                      key={tier}
                      name={`${level}__earlyBird__${tier}`}
                      label={TIER_NAMES[tier]}
                      value={lp.earlyBird[tier]}
                      optional
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="rounded-lg bg-signal px-6 py-2.5 text-sm font-medium text-white hover:bg-signal-deep"
          >
            Save pricing
          </button>
        </div>
      </form>

      <section>
        <h2 className="font-display text-lg font-bold text-ink">Product PDFs</h2>
        <p className="text-sm text-body">
          Replace the file behind each product. Uploads overwrite the private
          file in place, so existing download links keep working with the new
          content.
        </p>
        <div className="mt-4 space-y-3">
          {LEVEL_KEYS.map((level) => (
            <div key={level}>
              <p className="mb-2 text-xs font-medium uppercase tracking-wide text-body">
                {LEVELS[level].name}
              </p>
              <div className="space-y-2">
                {subjectsForLevel(level).map((subject) => (
                  <details
                    key={`${level}-${subject.slug}`}
                    className="rounded-2xl border border-trust/10 bg-white"
                  >
                    <summary className="cursor-pointer px-4 py-3 font-display text-sm font-bold text-ink">
                      {subject.name}
                    </summary>
                    <div className="space-y-4 border-t border-trust/10 px-4 py-3">
                      {productsForSubject(subject).map((key) => {
                        const product = productByKey.get(
                          `${level}::${subject.slug}::${key}`
                        );
                        if (!product) return null;
                        // Spec-driven, so a legacy file kept alive by an old
                        // order never shows up as an upload slot.
                        const specs = productFilesFor(subject, key);
                        return (
                          <div key={key}>
                            <p className="mb-1 text-xs font-medium text-ink">
                              {productNameFor(subject, key)}
                              {specs.length > 1 && ` · ${specs.length} PDFs`}
                            </p>
                            <div className="space-y-1.5">
                              {specs.map((spec) => {
                                const file = product.files.find(
                                  (f) => f.key === spec.key
                                );
                                if (!file) return null;
                                return (
                                  <PdfUpload
                                    key={file.id}
                                    fileId={file.id}
                                    label={spec.label}
                                    stored={storedByPath.get(file.filePath) ?? null}
                                  />
                                );
                              })}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
