-- Abandoned carts: shopper entered an email but didn't check out.
CREATE TABLE "AbandonedCart" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "itemsJson" TEXT NOT NULL,
    "discountCode" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "remindedAt" DATETIME,
    "recoveredAt" DATETIME
);
CREATE UNIQUE INDEX "AbandonedCart_email_key" ON "AbandonedCart"("email");
