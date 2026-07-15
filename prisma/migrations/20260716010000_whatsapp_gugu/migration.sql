-- WhatsApp Gugu: conversation turns per WhatsApp number, msgId for webhook dedupe.
CREATE TABLE "WaMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "waId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "msgId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "WaMessage_msgId_key" ON "WaMessage"("msgId");
CREATE INDEX "WaMessage_waId_createdAt_idx" ON "WaMessage"("waId", "createdAt");
