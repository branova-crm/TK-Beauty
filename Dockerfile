# Dokploy: Build Type → Dockerfile | Context → . | Domain-Port → 80
# Runtime-Env: NEXT_PUBLIC_PLANITY_API_KEY, SMTP_USER, SMTP_PASSWORD, EMAIL_RECEIVER

FROM node:22-alpine AS build
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM node:22-alpine AS runtime
WORKDIR /app

RUN apk add --no-cache nginx wget \
  && mkdir -p /run/nginx /var/lib/nginx/tmp /var/log/nginx \
  && rm -f /etc/nginx/http.d/default.conf /etc/nginx/conf.d/default.conf

COPY package.json package-lock.json ./
RUN npm ci --omit=dev

COPY --from=build /app/dist ./dist
COPY server ./server
COPY nginx/nginx.conf.template ./nginx/nginx.conf.template

RUN chmod +x /app/server/start.sh

ENV PORT=80
ENV API_PORT=3001
EXPOSE 80

HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
  CMD sh -c 'wget -qO- "http://127.0.0.1:${PORT:-80}/healthz" || exit 1'

CMD ["sh", "/app/server/start.sh"]
