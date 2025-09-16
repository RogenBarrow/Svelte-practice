# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.9.0

# Base image
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app

# Use pnpm (matches repo's packageManager)
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

################################################################################
# Install production dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.pnpm-store \
  pnpm install --no-frozen-lockfile --prod --ignore-scripts

################################################################################
# Build the application
FROM base AS build
ENV NODE_ENV=development
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.pnpm-store \
  pnpm install --no-frozen-lockfile
COPY . .
RUN pnpm postinstall && pnpm build

################################################################################
# Final runtime image
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Copy runtime deps and built app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/. ./

# Ensure app directory is owned by the pre-existing 'node' user
RUN chown -R node:node /usr/src/app
USER node

# Network and port
ENV HOST=0.0.0.0
EXPOSE 3000

# Start SvelteKit (adapter-node)
CMD ["node", "build"]
