-- Risk engine: spaced resurrection fields on the mistake notebook, and a
-- per-question detail record on daily quiz days (powers the calibration card).

ALTER TABLE "MistakeEntry" ADD COLUMN "resurfaceStage" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "MistakeEntry" ADD COLUMN "clearStreak" INTEGER NOT NULL DEFAULT 0;
ALTER TABLE "MistakeEntry" ADD COLUMN "nextResurfaceAt" DATETIME;

ALTER TABLE "DailyQuizDay" ADD COLUMN "detailJson" TEXT;

-- Existing unresolved auto-seeded mistakes join the resurrection queue two
-- days after they were created (same rule new ones get).
UPDATE "MistakeEntry"
SET "nextResurfaceAt" = datetime("createdAt", '+2 days')
WHERE "resolved" = false AND "questionId" IS NOT NULL;
