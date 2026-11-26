/**
 * PM2 konfiguracija za produkciju na VPS-u.
 *
 *   pm2 start ecosystem.config.js      # prvo pokretanje
 *   pm2 reload ecosystem.config.js     # posle deploya (bez prekida)
 *   pm2 logs spartansgym               # logovi
 *
 * Aplikaciju pokreće `next start` na portu 3000; Nginx je reverse proxy
 * ispred nje (vidi deploy/nginx.conf). Env promenljive (RESEND_API_KEY,
 * NEXT_PUBLIC_* itd.) čita Next.js sam iz fajla `.env` u root-u projekta —
 * NEXT_PUBLIC_* moraju da postoje već pre `npm run build`.
 */
module.exports = {
  apps: [
    {
      name: "spartansgym",
      cwd: "/var/www/spartansgym",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3000",
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      max_restarts: 10,
      min_uptime: "10s",
      max_memory_restart: "512M",
      env: {
        NODE_ENV: "production",
        PORT: "3000",
      },
    },
  ],
};
