-- Visitor journey analytics: anonymous first-party sessions + events.
CREATE TABLE "VisitorSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "visitorId" TEXT NOT NULL,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "landingPath" TEXT NOT NULL,
    "referrer" TEXT,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "device" TEXT NOT NULL,
    "isReturning" BOOLEAN NOT NULL DEFAULT false,
    "pageviews" INTEGER NOT NULL DEFAULT 0,
    "clicks" INTEGER NOT NULL DEFAULT 0
);
CREATE INDEX "VisitorSession_startedAt_idx" ON "VisitorSession"("startedAt");
CREATE INDEX "VisitorSession_visitorId_idx" ON "VisitorSession"("visitorId");

CREATE TABLE "VisitorEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "label" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VisitorEvent_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "VisitorSession" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
CREATE INDEX "VisitorEvent_sessionId_idx" ON "VisitorEvent"("sessionId");
CREATE INDEX "VisitorEvent_type_idx" ON "VisitorEvent"("type");
CREATE INDEX "VisitorEvent_createdAt_idx" ON "VisitorEvent"("createdAt");
