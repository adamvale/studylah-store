-- CreateTable
CREATE TABLE "GameQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "ord" INTEGER NOT NULL DEFAULT 0,
    "type" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "stem" TEXT NOT NULL,
    "optionsJson" TEXT,
    "correctJson" TEXT NOT NULL,
    "marks" INTEGER NOT NULL DEFAULT 1,
    "workedSolution" TEXT NOT NULL,
    "misconceptionTag" TEXT NOT NULL DEFAULT 'unset'
);

-- CreateTable
CREATE TABLE "GameTeachingCard" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "ord" INTEGER NOT NULL DEFAULT 0,
    "kind" TEXT NOT NULL,
    "dataJson" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "GameQuestion_level_slug_idx" ON "GameQuestion"("level", "slug");

-- CreateIndex
CREATE INDEX "GameTeachingCard_level_slug_idx" ON "GameTeachingCard"("level", "slug");
