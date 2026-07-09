-- Start customer-facing order numbers at 240487 so the storefront does not
-- reveal how new it is ("Order No. 2" tells every buyer they are the second
-- sale). Order.id is INTEGER PRIMARY KEY AUTOINCREMENT, so SQLite keeps the
-- last-used id in sqlite_sequence; setting it to 240486 makes the next order
-- 240487. Existing orders keep their ids.
--
-- Guarded to only ever RAISE the counter, never lower it below real orders:
-- the WHERE seq < 240486 clause means that once the store has genuinely passed
-- 240486 orders this is a harmless no-op, and re-running can never rewind it.

-- First boot may not yet have an 'Order' row in sqlite_sequence (created on the
-- first insert). Seed it so the counter is set even before any order exists.
INSERT INTO "sqlite_sequence" ("name", "seq")
  SELECT 'Order', 240486
  WHERE NOT EXISTS (SELECT 1 FROM "sqlite_sequence" WHERE "name" = 'Order');

UPDATE "sqlite_sequence" SET "seq" = 240486
  WHERE "name" = 'Order' AND "seq" < 240486;
