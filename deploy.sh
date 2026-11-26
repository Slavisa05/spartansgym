#!/usr/bin/env bash
#
# Deploy Spartans Gym na VPS. Pokreće se NA SERVERU, iz root-a projekta:
#   cd /var/www/spartansgym && ./deploy.sh
#
# Preduslovi (jednokratno): vidi DEPLOY.md
set -euo pipefail

APP_DIR="/var/www/spartansgym"
BRANCH="${1:-main}"

cd "$APP_DIR"

echo "▶ git pull ($BRANCH)"
git fetch origin "$BRANCH"
git checkout "$BRANCH"
git pull --ff-only origin "$BRANCH"

echo "▶ instalacija zavisnosti"
npm ci

if [ ! -f .env ]; then
  echo "✗ Nedostaje .env fajl u $APP_DIR (vidi .env.example i DEPLOY.md)."
  exit 1
fi

echo "▶ build (NEXT_PUBLIC_* se čitaju iz .env u ovom koraku)"
npm run build

echo "▶ restart preko PM2"
if pm2 describe spartansgym > /dev/null 2>&1; then
  pm2 reload ecosystem.config.js --update-env
else
  pm2 start ecosystem.config.js
fi
pm2 save

echo "✓ Deploy gotov."
