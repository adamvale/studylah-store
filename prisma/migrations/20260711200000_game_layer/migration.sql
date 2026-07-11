-- "Clear the Fog" game layer: server-authoritative XP ledger + badge unlocks.

CREATE TABLE "XpEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "kind" TEXT NOT NULL,
    "sourceKey" TEXT NOT NULL,
    "meta" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "XpEvent_customerId_sourceKey_key" ON "XpEvent"("customerId", "sourceKey");
CREATE INDEX "XpEvent_customerId_idx" ON "XpEvent"("customerId");

CREATE TABLE "Achievement" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "badgeId" TEXT NOT NULL,
    "unlockedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "Achievement_customerId_badgeId_key" ON "Achievement"("customerId", "badgeId");
CREATE INDEX "Achievement_customerId_idx" ON "Achievement"("customerId");
