# syntax=docker/dockerfile:1

# ---------- 1. Dépendances ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# ---------- 2. Build ----------
FROM node:22-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Variables NEXT_PUBLIC_* : injectées côté client, donc nécessaires DÈS le build
# (contrairement aux variables serveur comme RESEND_API_KEY, lues au runtime).
ARG NEXT_PUBLIC_SITE_URL
ARG NEXT_PUBLIC_CONTACT_EMAIL
ARG NEXT_PUBLIC_CALCOM_LINK
ARG NEXT_PUBLIC_LINKEDIN_URL
ARG NEXT_PUBLIC_TWITTER_URL
ARG NEXT_PUBLIC_YOUTUBE_URL
ARG NEXT_PUBLIC_PLAUSIBLE_DOMAIN
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL \
    NEXT_PUBLIC_CONTACT_EMAIL=$NEXT_PUBLIC_CONTACT_EMAIL \
    NEXT_PUBLIC_CALCOM_LINK=$NEXT_PUBLIC_CALCOM_LINK \
    NEXT_PUBLIC_LINKEDIN_URL=$NEXT_PUBLIC_LINKEDIN_URL \
    NEXT_PUBLIC_TWITTER_URL=$NEXT_PUBLIC_TWITTER_URL \
    NEXT_PUBLIC_YOUTUBE_URL=$NEXT_PUBLIC_YOUTUBE_URL \
    NEXT_PUBLIC_PLAUSIBLE_DOMAIN=$NEXT_PUBLIC_PLAUSIBLE_DOMAIN \
    NEXT_TELEMETRY_DISABLED=1

RUN npm run build

# ---------- 3. Exécution ----------
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs \
 && adduser --system --uid 1001 nextjs

# Sortie "standalone" : serveur Node minimal + dépendances déjà résolues.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

CMD ["node", "server.js"]
