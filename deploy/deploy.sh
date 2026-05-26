#!/usr/bin/env bash
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/wanlu-jade}"
APP_PORT="${APP_PORT:-3000}"

cd "$APP_DIR"

if [ ! -f .env.production ]; then
  cp .env.example .env.production
  echo "Created .env.production from .env.example. Review it before public launch."
fi

docker compose -f deploy/docker-compose.yml build
APP_PORT="$APP_PORT" docker compose -f deploy/docker-compose.yml up -d
docker compose -f deploy/docker-compose.yml ps
curl -fsS "http://127.0.0.1:${APP_PORT}" >/dev/null
echo "Wanlu Jade is running on http://127.0.0.1:${APP_PORT}"
