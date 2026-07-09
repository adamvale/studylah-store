-- Download activity history: one row per successful download, so the account
-- dashboard can show "last downloaded" per file. `via` is "email" (tokenised
-- link) or "account" (signed-in re-download).
CREATE TABLE "DownloadEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "orderItemId" TEXT NOT NULL,
    "at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "via" TEXT NOT NULL,
    CONSTRAINT "DownloadEvent_orderItemId_fkey" FOREIGN KEY ("orderItemId") REFERENCES "OrderItem" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE INDEX "DownloadEvent_orderItemId_idx" ON "DownloadEvent"("orderItemId");
