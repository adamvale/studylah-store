-- Suppression list for the nurture stream (one-click unsubscribe, reply, bounce).
CREATE TABLE "EmailSuppression" (
    "email" TEXT NOT NULL PRIMARY KEY,
    "reason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
