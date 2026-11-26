# Deploy — Spartans Gym (Ubuntu VPS + PM2 + Nginx)

Sajt je Next.js aplikacija koja se u produkciji pokreće kao `next start`
(Node proces) iza Nginx reverse proxy-ja. `next start` je izabran umesto
`output: standalone` jer uz njega optimizacija slika i keš stranica rade bez
ikakve konfiguracije i keš preživljava deploy (isti folder projekta).

- **Proces:** PM2 (`ecosystem.config.js`) → `next start` na `127.0.0.1:3000`
- **Reverse proxy + HTTPS:** Nginx (`deploy/nginx.conf`) + Certbot
- **Deploy:** `./deploy.sh` (git pull → `npm ci` → `npm run build` → `pm2 reload`)

---

## 1. Jednokratno podešavanje servera

### 1.1 Sistemski paketi

```bash
sudo apt update && sudo apt install -y nginx git curl
```

### 1.2 Node.js 20+ (preko nvm ili nodesource)

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v   # >= 20.9.0
```

### 1.3 PM2

```bash
sudo npm install -g pm2
pm2 startup systemd        # ispiši komandu koju traži i pokreni je
```

### 1.4 Klon projekta

```bash
sudo mkdir -p /var/www/spartansgym
sudo chown "$USER":"$USER" /var/www/spartansgym
git clone https://github.com/Slavisa05/spartansgym.git /var/www/spartansgym
cd /var/www/spartansgym
```

### 1.5 Env fajl

```bash
cp .env.example .env
nano .env
```

Popuni bar `RESEND_API_KEY` i `NEXT_PUBLIC_SITE_URL`. Ostalo prema komentarima
u `.env.example`.

> **Bitno:** `NEXT_PUBLIC_*` promenljive se „upeku" u kod tokom `npm run build`.
> Ako ih menjaš, moraš ponovo da build-uješ (`./deploy.sh` to radi).

### 1.6 Prvi build i pokretanje

```bash
npm ci
npm run build
pm2 start ecosystem.config.js
pm2 save
```

Provera: `curl -I http://127.0.0.1:3000` treba da vrati `200`.

### 1.7 Nginx

```bash
sudo cp deploy/nginx.conf /etc/nginx/sites-available/spartansgym
sudo ln -s /etc/nginx/sites-available/spartansgym /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

### 1.8 HTTPS (Certbot)

Prvo usmeri DNS `spartansgym.rs` i `www.spartansgym.rs` na IP servera, pa:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d spartansgym.rs -d www.spartansgym.rs
```

Certbot sam dodaje 443 blok i redirekciju sa HTTP-a. Obnova je automatska
(`systemctl status certbot.timer`).

---

## 2. Svaki sledeći deploy

```bash
cd /var/www/spartansgym
./deploy.sh              # deploy grane main
./deploy.sh faza-3-...   # deploy druge grane (za testiranje)
```

Skripta radi `git pull`, `npm ci`, `npm run build` i `pm2 reload` (bez prekida
rada sajta).

---

## 3. Korisne komande

```bash
pm2 status
pm2 logs spartansgym --lines 100
pm2 monit
pm2 restart spartansgym          # tvrdi restart
sudo tail -f /var/log/nginx/error.log
```

---

## 4. Rešavanje problema

| Simptom | Uzrok / rešenje |
|---|---|
| `502 Bad Gateway` | PM2 proces ne radi → `pm2 logs spartansgym`. Proveri da sluša na 3000. |
| Kontakt forma ne šalje mejl | `RESEND_API_KEY` nije u `.env`, ili domen nije verifikovan u Resend-u (dok nije — `LEAD_TO` mora biti adresa vlasnika Resend naloga). |
| GA / cookie baner se ne pojavljuju | `NEXT_PUBLIC_GA_ID` nije bio postavljen u `.env` **pre** build-a. Postavi i pokreni `./deploy.sh`. |
| Rate-limit lupa lažno | Nginx ne prosleđuje `X-Forwarded-For` (proveri da je `deploy/nginx.conf` aktivan, ne default). |
| Visoka potrošnja RAM-a pri optimizaciji slika | glibc + sharp problem. Instaliraj jemalloc: `sudo apt install -y libjemalloc2` i u `ecosystem.config.js` dodaj `env.LD_PRELOAD = "/usr/lib/x86_64-linux-gnu/libjemalloc.so.2"`. |
| Slike izgledaju mutno na desktopu | Nije deploy problem — izvorni `hero_desktop.mp4` je 848×478 (Faza 4). |

---

## 5. Šta još treba pre pravog lansiranja

- [ ] Kupljen domen `spartansgym.rs`, DNS usmeren na VPS
- [ ] `.env` popunjen na serveru (Resend, `NEXT_PUBLIC_SITE_URL`)
- [ ] Domen verifikovan u Resend-u → `RESEND_FROM` i `LEAD_TO` prebačeni
- [ ] GA4 property napravljen → `NEXT_PUBLIC_GA_ID`
- [ ] Google Apps Script Web App za Sheet → `GOOGLE_SHEET_WEBHOOK_URL`
- [ ] Pravi utisci članova u `data/testimonials.ts` (skloniti `placeholder: true`)
- [ ] Dopunjena `/politika-privatnosti` (pravni podaci)
- [ ] `public/gym4.jpg` i prave fotke trenera
- [ ] Google Business Profile za sve 3 lokacije (NAP se poklapa sa `data/site.ts`)
- [ ] Sitemap poslat u Google Search Console
