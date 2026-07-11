-- Native app (Capacitor) push: FCM device tokens for iOS + Android installs.

CREATE TABLE "NativePushToken" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "customerId" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "platform" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
CREATE UNIQUE INDEX "NativePushToken_token_key" ON "NativePushToken"("token");
CREATE INDEX "NativePushToken_customerId_idx" ON "NativePushToken"("customerId");
