-- Messenger + Instagram DM history for Gugu (shared Meta Page webhook).
CREATE TABLE "SocialMessage" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "channel" TEXT NOT NULL,
    "contactId" TEXT NOT NULL,
    "role" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "msgId" TEXT,
    "manual" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "SocialMessage_msgId_key" ON "SocialMessage"("msgId");
CREATE INDEX "SocialMessage_channel_contactId_createdAt_idx" ON "SocialMessage"("channel", "contactId", "createdAt");
