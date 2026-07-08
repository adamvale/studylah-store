-- Products can now ship several PDFs (the Final Rehearsal is a three-part set).
-- This migration is data-preserving: every existing single-file product becomes
-- one "main" ProductFile, and existing order items are re-pointed at it so no
-- purchased download is lost.

-- CreateTable
CREATE TABLE "ProductFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "productId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "label" TEXT NOT NULL,
    "filePath" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    CONSTRAINT "ProductFile_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- Backfill one "main" file per existing product, carrying its filePath across
-- before the column is dropped.
INSERT INTO "ProductFile" ("id", "productId", "key", "label", "filePath", "sortOrder")
SELECT lower(hex(randomblob(16))), "id", 'main', 'Download', "filePath", 0
FROM "Product";

PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;

-- OrderItem gains productFileId + fileLabel, backfilled from each product's
-- newly created "main" file.
CREATE TABLE "new_OrderItem" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderId" INTEGER NOT NULL,
    "productId" TEXT NOT NULL,
    "productFileId" TEXT NOT NULL,
    "subjectName" TEXT NOT NULL,
    "levelName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "fileLabel" TEXT NOT NULL,
    "tier" TEXT NOT NULL,
    CONSTRAINT "OrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "Order" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "OrderItem_productFileId_fkey" FOREIGN KEY ("productFileId") REFERENCES "ProductFile" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_OrderItem" ("id", "orderId", "productId", "productFileId", "subjectName", "levelName", "productName", "fileLabel", "tier")
SELECT
    oi."id",
    oi."orderId",
    oi."productId",
    (SELECT pf."id" FROM "ProductFile" pf WHERE pf."productId" = oi."productId" AND pf."key" = 'main'),
    oi."subjectName",
    oi."levelName",
    oi."productName",
    'Download',
    oi."tier"
FROM "OrderItem" oi;
DROP TABLE "OrderItem";
ALTER TABLE "new_OrderItem" RENAME TO "OrderItem";

-- Product loses filePath; its files now live on ProductFile.
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "subjectId" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL DEFAULT true,
    CONSTRAINT "Product_subjectId_fkey" FOREIGN KEY ("subjectId") REFERENCES "Subject" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Product" ("active", "id", "key", "subjectId") SELECT "active", "id", "key", "subjectId" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_subjectId_key_key" ON "Product"("subjectId", "key");

PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE UNIQUE INDEX "ProductFile_productId_key_key" ON "ProductFile"("productId", "key");
