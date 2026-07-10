-- Refer-a-friend program. Customers get a shareable referral code; a friend's
-- first paid order using it earns the referrer a cash reward, tracked here and
-- paid out manually by the owner from the admin payouts list.
ALTER TABLE "Customer" ADD COLUMN "referralCode" TEXT;
ALTER TABLE "Customer" ADD COLUMN "payoutHandle" TEXT;
CREATE UNIQUE INDEX "Customer_referralCode_key" ON "Customer"("referralCode");

CREATE TABLE "Referral" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "referrerId" TEXT NOT NULL,
    "refereeOrderId" INTEGER NOT NULL,
    "refereeEmail" TEXT NOT NULL,
    "rewardCents" INTEGER NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'payable',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "paidAt" DATETIME,
    CONSTRAINT "Referral_referrerId_fkey" FOREIGN KEY ("referrerId") REFERENCES "Customer" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE UNIQUE INDEX "Referral_refereeOrderId_key" ON "Referral"("refereeOrderId");
CREATE INDEX "Referral_referrerId_idx" ON "Referral"("referrerId");
