-- Adds a difficulty tier to authored game/diagnostic questions.
-- 1 = easy, 2 = medium, 3 = hard. Existing rows default to medium; the
-- idempotent game-bank seed repopulates them with inferred values on deploy.
ALTER TABLE "GameQuestion" ADD COLUMN "difficulty" INTEGER NOT NULL DEFAULT 2;
