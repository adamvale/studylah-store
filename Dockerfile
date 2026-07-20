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

# The Prisma schema must exist before `npm ci`, because the package's
# postinstall runs `prisma generate`, which needs it. Copy the schema and
# config alongside the manifests, then install (dev deps included — the Prisma
# CLI and tsx run migrations and the seed on first boot).
COPY package.json package-lock.json ./
COPY prisma ./prisma
COPY prisma.config.ts ./
RUN npm ci --include=dev

# Copy the rest of the app and build. Database reads during the build fall back
# to the code constants, so no database is required at build time.
COPY . .

# Next.js inlines NEXT_PUBLIC_* values into the client bundle AT BUILD TIME.
# On Railway (Dockerfile builds), service variables only reach the build when
# declared as ARGs — Railway auto-populates build args with matching names.
# EVERY NEXT_PUBLIC_* the app reads must be listed here, or it ships as an
# empty string no matter what the Railway service variable says.
ARG NEXT_PUBLIC_VAPID_PUBLIC_KEY
ENV NEXT_PUBLIC_VAPID_PUBLIC_KEY=$NEXT_PUBLIC_VAPID_PUBLIC_KEY
# Ad / analytics pixels (analytics.tsx). Each loads only when its id is set.
ARG NEXT_PUBLIC_GA_ID
ENV NEXT_PUBLIC_GA_ID=$NEXT_PUBLIC_GA_ID
ARG NEXT_PUBLIC_META_PIXEL_ID
ENV NEXT_PUBLIC_META_PIXEL_ID=$NEXT_PUBLIC_META_PIXEL_ID
ARG NEXT_PUBLIC_TIKTOK_PIXEL_ID
ENV NEXT_PUBLIC_TIKTOK_PIXEL_ID=$NEXT_PUBLIC_TIKTOK_PIXEL_ID

RUN npx prisma generate && npm run build

ENV NODE_ENV=production
# The persistent volume is attached via the Railway dashboard
# (Settings -> Volumes, mount path /data). The SQLite database and product
# PDFs live there. Note: Railway rejects the Docker `VOLUME` instruction, so
# we don't declare one here — the dashboard mount is what matters.
ENV DATABASE_URL=file:/data/prod.db
ENV PDF_STORAGE_DIR=/data/pdfs

EXPOSE 3000
CMD ["bash", "scripts/start-prod.sh"]
