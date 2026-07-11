-- Streak shields: earned insurance days (every 5th consecutive daily-three
-- day, max 2 held); auto-spent on a single missed day to keep the streak.

CREATE TABLE "StreakShield" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "earnedDay" TEXT NOT NULL,
    "spentDay" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "StreakShield_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE UNIQUE INDEX "StreakShield_customerId_earnedDay_key" ON "StreakShield"("customerId", "earnedDay");
CREATE UNIQUE INDEX "StreakShield_customerId_spentDay_key" ON "StreakShield"("customerId", "spentDay");
