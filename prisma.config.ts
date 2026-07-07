import { defineConfig } from "prisma/config";

// Prisma 7 no longer auto-loads .env; Node 20.6+ can.
try {
  process.loadEnvFile();
} catch {
  // No .env yet (e.g. fresh clone before `cp .env.example .env`).
}

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    // Relative to the project root. Swap to Postgres before serverless deploys.
    url: process.env.DATABASE_URL ?? "file:./prisma/dev.db",
  },
  migrations: {
    path: "prisma/migrations",
    seed: "tsx prisma/seed.ts",
  },
});
