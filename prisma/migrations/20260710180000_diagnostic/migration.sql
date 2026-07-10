-- "Am I Ready?" diagnostic: graded attempts (cuid = results access token) and
-- funnel events for the admin dashboard.
CREATE TABLE "DiagnosticAttempt" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "answersJson" TEXT NOT NULL,
    "score" INTEGER NOT NULL,
    "totalMarks" INTEGER NOT NULL,
    "band" TEXT NOT NULL,
    "weakness" TEXT,
    "email" TEXT,
    "leadId" TEXT,
    "isParent" BOOLEAN NOT NULL DEFAULT false,
    "utm" TEXT,
    "ref" TEXT,
    "unlockedAt" DATETIME,
    "resultEmailSentAt" DATETIME,
    "followUpAt" DATETIME,
    "followUpSentAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "DiagnosticAttempt_followUpAt_idx" ON "DiagnosticAttempt"("followUpAt");

CREATE TABLE "DiagnosticEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "attemptId" TEXT,
    "type" TEXT NOT NULL,
    "meta" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "DiagnosticEvent_type_idx" ON "DiagnosticEvent"("type");
