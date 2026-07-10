-- Study suite II: daily retrieval streak, mistake notebook (错题本),
-- per-subject grade goals, opt-in parent digest, and a customer link on
-- diagnostic attempts (for signed-in score history).

CREATE TABLE "DailyQuizDay" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "day" TEXT NOT NULL,
    "answered" INTEGER NOT NULL DEFAULT 0,
    "correct" INTEGER NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "DailyQuizDay_customerId_day_key" ON "DailyQuizDay"("customerId", "day");
CREATE INDEX "DailyQuizDay_customerId_idx" ON "DailyQuizDay"("customerId");

CREATE TABLE "MistakeEntry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "questionId" TEXT,
    "stem" TEXT NOT NULL,
    "correctAnswer" TEXT,
    "myAnswer" TEXT,
    "reason" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "note" TEXT,
    "resolved" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "MistakeEntry_customerId_idx" ON "MistakeEntry"("customerId");

CREATE TABLE "SubjectGoal" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "targetGrade" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
CREATE UNIQUE INDEX "SubjectGoal_customerId_level_slug_key" ON "SubjectGoal"("customerId", "level", "slug");
CREATE INDEX "SubjectGoal_customerId_idx" ON "SubjectGoal"("customerId");

ALTER TABLE "Customer" ADD COLUMN "parentEmail" TEXT;
ALTER TABLE "Customer" ADD COLUMN "parentDigestConsentAt" DATETIME;
ALTER TABLE "Customer" ADD COLUMN "parentDigestSentAt" DATETIME;

ALTER TABLE "DiagnosticAttempt" ADD COLUMN "customerId" TEXT;
