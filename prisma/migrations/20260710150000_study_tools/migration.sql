-- Study suite: topic progress + personal exam timetable + guarantee claims,
-- and a ProductFile.updatedAt so owners see "updated — re-download" badges.
ALTER TABLE "ProductFile" ADD COLUMN "updatedAt" DATETIME;

CREATE TABLE "TopicProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "topic" TEXT NOT NULL,
    "status" INTEGER NOT NULL DEFAULT 0,
    "updatedAt" DATETIME NOT NULL
);
CREATE UNIQUE INDEX "TopicProgress_customerId_level_slug_topic_key"
  ON "TopicProgress"("customerId", "level", "slug", "topic");
CREATE INDEX "TopicProgress_customerId_idx" ON "TopicProgress"("customerId");

CREATE TABLE "ExamDate" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "at" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "ExamDate_customerId_idx" ON "ExamDate"("customerId");

CREATE TABLE "GuaranteeClaim" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" INTEGER NOT NULL,
    "customerId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'submitted',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "GuaranteeClaim_customerId_idx" ON "GuaranteeClaim"("customerId");
