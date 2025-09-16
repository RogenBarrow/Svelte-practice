# syntax=docker/dockerfile:1

ARG NODE_VERSION=20.9.0

# Base image
FROM node:${NODE_VERSION}-alpine AS base
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Use pnpm (matches repo's packageManager)
RUN corepack enable && corepack prepare pnpm@9.15.9 --activate

################################################################################
# Install production dependencies
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile --prod

################################################################################
# Build the application
FROM base AS build
COPY package.json pnpm-lock.yaml ./
RUN --mount=type=cache,target=/root/.pnpm-store \
  pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

################################################################################
# Final runtime image
FROM node:${NODE_VERSION}-alpine AS final
WORKDIR /usr/src/app
ENV NODE_ENV=production

# Create non-root user
RUN addgroup -g 1001 -S node && adduser -u 1001 -S node -G node

# Copy runtime deps and built app
COPY --from=deps /usr/src/app/node_modules ./node_modules
COPY --from=build /usr/src/app/. ./

# Network and port
ENV HOST=0.0.0.0
EXPOSE 3000

# Start SvelteKit (adapter-node)
CMD ["node", "build"]
