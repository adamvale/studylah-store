-- Human takeover for WhatsApp Gugu: manual=true marks a reply sent by the
-- owner from the admin inbox. Gugu stays silent on a thread for 24h after the
-- last manual reply so human and bot never talk over each other.
ALTER TABLE "WaMessage" ADD COLUMN "manual" BOOLEAN NOT NULL DEFAULT false;
