-- Project Sightseeing: scanned-question assets (no raw image stored).
CREATE TABLE "ScannedQuestion" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "level" TEXT,
    "slug" TEXT,
    "subjectLabel" TEXT,
    "topic" TEXT,
    "forecastRank" TEXT,
    "questionText" TEXT NOT NULL,
    "teachingJson" TEXT NOT NULL,
    "reviewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "ScannedQuestion_customerId_createdAt_idx" ON "ScannedQuestion"("customerId", "createdAt");
CREATE INDEX "ScannedQuestion_level_slug_idx" ON "ScannedQuestion"("level", "slug");

-- Project Loudspeaker: spoken-practice attempts (no raw audio stored).
CREATE TABLE "OralAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "lang" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "mode" TEXT NOT NULL,
    "itemKey" TEXT NOT NULL,
    "transcript" TEXT,
    "accuracy" REAL,
    "fluency" REAL,
    "completeness" REAL,
    "overall" REAL,
    "coaching" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "OralAttempt_customerId_createdAt_idx" ON "OralAttempt"("customerId", "createdAt");
