-- Beta feedback for StudyLah Legends: free-text + quick sentiment, per customer.
CREATE TABLE "GameFeedback" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "sentiment" TEXT,
    "message" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE INDEX "GameFeedback_createdAt_idx" ON "GameFeedback"("createdAt");
