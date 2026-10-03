#!/bin/sh
set -eu

LISTEN_PORT="${PORT:-80}"
API_PORT="${API_PORT:-3001}"

mkdir -p /run/nginx /var/lib/nginx/tmp /var/log/nginx /app/dist

# Runtime Planity key for client (NEXT_PUBLIC_* is public by design)
PLANITY_KEY="${NEXT_PUBLIC_PLANITY_API_KEY:-${PUBLIC_PLANITY_API_KEY:-}}"
# Escape for JS string
ESCAPED=$(printf '%s' "$PLANITY_KEY" | sed 's/\\/\\\\/g; s/"/\\"/g')
printf 'window.__PLANITY_API_KEY__="%s";\n' "$ESCAPED" > /app/dist/planity-env.js

sed -e "s/__LISTEN_PORT__/${LISTEN_PORT}/g" \
    -e "s/__API_PORT__/${API_PORT}/g" \
    /app/nginx/nginx.conf.template \
  > /etc/nginx/http.d/default.conf
rm -f /etc/nginx/conf.d/default.conf 2>/dev/null || true

PLANITY_STATUS="MISSING"
[ -n "$PLANITY_KEY" ] && PLANITY_STATUS="set"
SMTP_STATUS="MISSING"
[ -n "${SMTP_USER:-}" ] && SMTP_STATUS="set"
echo "[start] nginx :${LISTEN_PORT} | api :${API_PORT} | planity=${PLANITY_STATUS} | smtp_user=${SMTP_STATUS}"

API_PORT="${API_PORT}" node /app/server/send-api.mjs &
API_PID=$!

sleep 0.5
if ! kill -0 "$API_PID" 2>/dev/null; then
  echo "[start] send-api failed to start" >&2
fi

nginx -t
exec nginx -g "daemon off;"
