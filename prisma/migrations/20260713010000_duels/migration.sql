-- Study Duels: asynchronous friend-vs-friend question challenges.

CREATE TABLE "Duel" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "code" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "questionIdsJson" TEXT NOT NULL,
    "creatorId" TEXT NOT NULL,
    "creatorScore" INTEGER,
    "challengerId" TEXT,
    "challengerScore" INTEGER,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "Duel_code_key" ON "Duel"("code");
CREATE INDEX "Duel_creatorId_idx" ON "Duel"("creatorId");
CREATE INDEX "Duel_challengerId_idx" ON "Duel"("challengerId");
