FROM oven/bun:latest AS base
WORKDIR /usr/src/app

FROM base AS install
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile --production

FROM base AS release
COPY --from=install /usr/src/app/node_modules ./node_modules
COPY . .

ENV NODE_ENV=production
ENV PORT=7979

USER bun
EXPOSE 7979/tcp
ENTRYPOINT ["bun", "start"]
