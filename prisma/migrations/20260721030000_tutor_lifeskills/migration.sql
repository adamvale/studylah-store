-- Guru Tutor conversational sessions
CREATE TABLE "TutorSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "topicKey" TEXT NOT NULL,
    "level" TEXT,
    "title" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "TutorSession_customerId_updatedAt_idx" ON "TutorSession"("customerId", "updatedAt");

CREATE TABLE "TutorMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "TutorMessage_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "TutorSession" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "TutorMessage_sessionId_createdAt_idx" ON "TutorMessage"("sessionId", "createdAt");

-- Standing tuition slots (Guru pushes a reminder)
CREATE TABLE "TutorSchedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,
    "topicKey" TEXT NOT NULL,
    "level" TEXT,
    "label" TEXT NOT NULL,
    "weekday" INTEGER NOT NULL,
    "hourSg" INTEGER NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    "lastPushed" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "TutorSchedule_customerId_idx" ON "TutorSchedule"("customerId");
CREATE INDEX "TutorSchedule_weekday_hourSg_active_idx" ON "TutorSchedule"("weekday", "hourSg", "active");

-- Life Skills lesson completion
CREATE TABLE "LifeProgress" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "lessonKey" TEXT NOT NULL,
    "completedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "LifeProgress_customerId_lessonKey_key" ON "LifeProgress"("customerId", "lessonKey");
CREATE INDEX "LifeProgress_customerId_idx" ON "LifeProgress"("customerId");
