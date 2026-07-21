-- Adds the 7-day nurture ladder cursor to diagnostic attempts.
ALTER TABLE "DiagnosticAttempt" ADD COLUMN "followUpStep" INTEGER NOT NULL DEFAULT 0;

-- Backfill: any attempt that already received the old single 48h follow-up is
-- marked complete (step 6), so switching to the ladder never re-emails a lead
-- who was already contacted under the previous one-shot system.
UPDATE "DiagnosticAttempt" SET "followUpStep" = 6 WHERE "followUpSentAt" IS NOT NULL;
