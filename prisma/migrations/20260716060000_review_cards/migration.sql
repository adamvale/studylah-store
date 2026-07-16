-- Unified spaced-repetition state: daily-quiz questions answered correctly
-- (wrong ones ride the mistake notebook), definition cards, and formulas.
-- Leitner boxes 1..5 with fixed intervals (1/3/7/21/60 days).
CREATE TABLE "ReviewCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "itemKey" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "box" INTEGER NOT NULL DEFAULT 1,
    "reps" INTEGER NOT NULL DEFAULT 0,
    "lapses" INTEGER NOT NULL DEFAULT 0,
    "dueAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "ReviewCard_customerId_kind_itemKey_key" ON "ReviewCard"("customerId", "kind", "itemKey");
CREATE INDEX "ReviewCard_customerId_kind_dueAt_idx" ON "ReviewCard"("customerId", "kind", "dueAt");
