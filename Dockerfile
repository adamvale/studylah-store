# StudyLah production image.
# Runs the Next.js server with the SQLite database and product PDFs living on a
# persistent volume mounted at /data. Works on Railway, Render, Fly.io, or any
# host that can run a container with a volume.

FROM node:22-bookworm-slim

# openssl: required by the Prisma migrate engine.
# python3/make/g++: in case better-sqlite3 compiles its native binding.
RUN apt-get update && apt-get install -y --no-install-recommends \
      openssl python3 make g++ ca-certificates \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /app

# Install all dependencies (including dev — the Prisma CLI and tsx are needed
# to run migrations and the seed on first boot). --include=dev keeps them even
# though NODE_ENV is production.
COPY package.json package-lock.json ./
RUN npm ci --include=dev

# Copy the rest of the app and build. Database reads during the build fall back
# to the code constants, so no database is required at build time.
COPY . .
RUN npx prisma generate && npm run build

ENV NODE_ENV=production
# The persistent volume mounts here: SQLite file + product PDFs.
ENV DATABASE_URL=file:/data/prod.db
ENV PDF_STORAGE_DIR=/data/pdfs
VOLUME /data

EXPOSE 3000
CMD ["bash", "scripts/start-prod.sh"]
