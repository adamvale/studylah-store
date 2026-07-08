// Seeds the full 24-subject catalogue and one placeholder PDF per product FILE
// (the Final Rehearsal ships three; the sciences add a Paper 3 companion), plus
// sample discount codes and settings.
// Run: npm run db:seed  (idempotent — safe to re-run; never overwrites an
// existing PDF, so real uploaded content survives.)
import { promises as fs } from "fs";
import path from "path";
import { prisma } from "../src/lib/db";
import {
  LEVELS,
  PRODUCT_FILES,
  SUBJECTS,
  productsForSubject,
} from "../src/lib/catalogue";
import { topForecast } from "../src/lib/topics";
import { generateProductPdf } from "../src/lib/server/pdf-gen";

const storageDir = path.resolve(
  process.cwd(),
  process.env.PDF_STORAGE_DIR ?? "private/pdfs"
);

async function seedCatalogue() {
  let pdfsGenerated = 0;
  for (const subject of SUBJECTS) {
    const subjectRow = await prisma.subject.upsert({
      where: { level_slug: { level: subject.level, slug: subject.slug } },
      create: {
        level: subject.level,
        slug: subject.slug,
        name: subject.name,
        family: subject.family,
      },
      update: { name: subject.name, family: subject.family },
    });

    for (const key of productsForSubject(subject)) {
      const productRow = await prisma.product.upsert({
        where: { subjectId_key: { subjectId: subjectRow.id, key } },
        create: { subjectId: subjectRow.id, key },
        update: {},
      });

      const specs = PRODUCT_FILES[key];
      for (const [index, spec] of specs.entries()) {
        // "main" keeps the historical bare filename so migrated download tokens
        // keep resolving; multi-part products get a suffix.
        const suffix = spec.key === "main" ? "" : `-${spec.key}`;
        const filePath = path.join(
          subject.level,
          subject.slug,
          `${key}${suffix}.pdf`
        );
        const absolute = path.join(storageDir, filePath);

        let exists = true;
        try {
          await fs.access(absolute);
        } catch {
          exists = false;
        }
        if (!exists) {
          const bytes = await generateProductPdf({
            levelName: LEVELS[subject.level].name,
            subjectName: subject.name,
            productKey: key,
            fileLabel: spec.label,
            topics: topForecast(subject.family, `${subject.level}/${subject.slug}`),
          });
          await fs.mkdir(path.dirname(absolute), { recursive: true });
          await fs.writeFile(absolute, bytes);
          pdfsGenerated++;
        }

        await prisma.productFile.upsert({
          where: { productId_key: { productId: productRow.id, key: spec.key } },
          create: {
            productId: productRow.id,
            key: spec.key,
            label: spec.label,
            filePath,
            sortOrder: index,
          },
          update: { label: spec.label, filePath, sortOrder: index },
        });
      }

      // Drop files no longer in the spec — e.g. the old single-file Final
      // Rehearsal, now a three-part set. Never touch one a past order still
      // points at, so old download links keep working.
      const specKeys = specs.map((s) => s.key);
      const stale = await prisma.productFile.findMany({
        where: { productId: productRow.id, key: { notIn: specKeys } },
        include: { _count: { select: { orderItems: true } } },
      });
      for (const file of stale) {
        if (file._count.orderItems === 0) {
          await prisma.productFile.delete({ where: { id: file.id } });
        }
      }
    }
  }
  return pdfsGenerated;
}

async function seedDiscounts() {
  await prisma.discountCode.upsert({
    where: { code: "STUDYLAH10" },
    create: {
      code: "STUDYLAH10",
      kind: "percent",
      value: 10,
      description: "10% off your order",
    },
    update: {},
  });
  await prisma.discountCode.upsert({
    where: { code: "TELEGRAM5" },
    create: {
      code: "TELEGRAM5",
      kind: "fixed",
      value: 500,
      description: "S$5 off from the Telegram channel",
    },
    update: {},
  });
}

async function seedSettings() {
  await prisma.setting.upsert({
    where: { key: "earlyBirdActive" },
    create: { key: "earlyBirdActive", value: "false" },
    update: {},
  });
}

// One-time import of Phase 1's JSON lead stub, if present.
async function importJsonLeads() {
  const file = path.join(process.cwd(), "data", "leads.json");
  let raw: string;
  try {
    raw = await fs.readFile(file, "utf8");
  } catch {
    return 0;
  }
  let imported = 0;
  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return 0;
    for (const entry of parsed) {
      const e = entry as Record<string, unknown>;
      if (typeof e.email !== "string" || typeof e.consentAt !== "string") continue;
      const consentAt = new Date(e.consentAt);
      const exists = await prisma.lead.findFirst({
        where: { email: e.email, consentAt },
      });
      if (exists) continue;
      await prisma.lead.create({
        data: {
          email: e.email,
          source: typeof e.source === "string" ? e.source : "unknown",
          level: typeof e.level === "string" ? e.level : null,
          subjectSlug: typeof e.subjectSlug === "string" ? e.subjectSlug : null,
          consentAt,
        },
      });
      imported++;
    }
  } catch {
    return 0;
  }
  return imported;
}

async function main() {
  const pdfs = await seedCatalogue();
  await seedDiscounts();
  await seedSettings();
  const leads = await importJsonLeads();

  const counts = {
    subjects: await prisma.subject.count(),
    products: await prisma.product.count(),
    productFiles: await prisma.productFile.count(),
    discountCodes: await prisma.discountCode.count(),
    leads: await prisma.lead.count(),
  };
  console.log(
    `Seeded: ${counts.subjects} subjects, ${counts.products} products, ` +
      `${counts.productFiles} files (${pdfs} PDFs generated), ` +
      `${counts.discountCodes} discount codes, ` +
      `${counts.leads} leads (${leads} imported from JSON stub).`
  );
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
