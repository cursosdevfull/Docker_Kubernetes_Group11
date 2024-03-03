ARG NODE_VERSION=18.19.1-alpine

# Base
FROM node:${NODE_VERSION} as base

WORKDIR /usr/src/app

# Dependencies production
FROM base as deps

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Build
FROM base as build

RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci

COPY . .

RUN npm run build

# Final
FROM base as final

ENV NODE_ENV production

RUN apk add curl

USER node

COPY package.json .

COPY --from=deps /usr/src/app/node_modules ./node_modules

COPY --from=build /usr/src/app/dist ./dist

CMD npm run start:prod