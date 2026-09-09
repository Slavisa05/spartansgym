@AGENTS.md

# Spartans Gym — sajt lanca teretana

Marketing / prezentacioni sajt za lanac teretana "Fitness Centar Spartans Gym"
(Ub i Lajkovac). **Cilj:** posetilac vidi teretane, trenere i usluge → ode na
`/kontakt` i popuni formu (primarni lead) ili pozove telefonom (sekundarni).

## Tehnologija

- **Next.js 16.2.4** (App Router, Turbopack) + React 19
- **Tailwind CSS v4** (konfiguracija je u `app/globals.css`, `@theme` blok — nema `tailwind.config`)
- **TypeScript**, path alias `@/*` → koren projekta
- `framer-motion` (samo `TestimonialSlider`), `lucide-react` (ikone),
  `yet-another-react-lightbox` (galerija), `resend` (slanje mejla iz kontakt forme)
- Hosting (planirano): **Ubuntu VPS + PM2 + Nginx**, domen `spartansgym.rs`

## Struktura

```
app/
  layout.tsx            root layout — Navbar + children + Footer, fontovi, <Metadata>
  page.tsx              početna (kompozicija home sekcija)
  o-nama/              /o-nama — istorija, misija, vrednosti, ceo tim
  usluge/             /usluge — sve usluge (ServiceCard sa modalom)
  teretane/[slug]/     dinamička stranica teretane (podaci iz data/gym.ts)
  kontakt/             /kontakt — Contact.tsx (forma u 3 koraka)
  api/contact/route.ts  POST — šalje mejl preko Resend-a
components/
  home/                sekcije početne strane
  gym/                 sekcije stranice teretane
  about/               sekcije /o-nama
  ui/                  reupotrebljive kartice + Button
  layout/              Navbar, Footer
  shared/              CtaSection, TestimonialSlider
data/                  ⇐ JEDINI IZVOR ISTINE za sadržaj
types/
```

## Sadržaj i "single source of truth"

Sav sadržaj koji se menja živi u `data/` — komponente ga samo prikazuju.
**Ne hardkoduj tekst/nazive/cene u JSX-u.**

| Fajl | Šta drži | Ključne funkcije |
|---|---|---|
| `data/gym.ts` | 4 teretane (`gyms`), tipovi `standard` / `free` / `coming-soon` | `openGyms()` — bez "coming-soon"; `getGymTestimonials(gym)` |
| `data/services.ts` | 12 usluga; `gymSlugs` = u kojim teretanama se nudi (prazan niz = samo na `/usluge`) | — |
| `data/trainers.ts` | tim; `gymSlugs` = u kojim teretanama trener radi | — |
| `data/testimonials.ts` | utisci članova | `publishableTestimonials()`, `MIN_TESTIMONIALS_TO_SHOW` |
| `data/site.ts` | NAP podaci firme (naziv, URL, telefon, mejl, social) | `SITE`, `absoluteUrl()` |

- `Gym.shortName` ("Gym 1") i `Gym.tagline` (jedna rečenica) se koriste u Navbar-u,
  na karticama početne strane i sl.
- Stranice teretana biraju sekcije po `gym.type`: `free` → `GymPricing`,
  ostalo → `GymServices`; `coming-soon` → samo `GymComingSoon`.
- `StatsSection` računa broj teretana i trenera iz `data/` (uvek tačno).
  "God. iskustva" i "Vežbača" su okvirne brojke — TODO: potvrditi sa vlasnikom.

### Utisci članova (VAŽNO)

`data/testimonials.ts` trenutno drži **placeholder** podatke (`placeholder: true`,
generička imena). Zbog toga:

- na **produkciji** se placeholder utisci ne prikazuju (`publishableTestimonials`),
- sekcija sa utiscima (`TestimonialSection`, `GymTestimonials`) se **sakriva**
  ako teretana nema bar `MIN_TESTIMONIALS_TO_SHOW` (3) pravih utisaka,
- u razvoju se svi prikazuju da bi se video dizajn.

Pre puštanja u produkciju: tražiti prave utiske od vlasnika, zameniti unose i
skinuti `placeholder: true`.

## SEO i analitika (Faza 2)

- `app/sitemap.ts` i `app/robots.ts` — generišu se iz `data/`; koriste `SITE.url`.
- Metadata: `metadataBase` + OG/Twitter u `app/layout.tsx`; svaka stranica ima
  svoj `alternates.canonical`. `<html lang="sr">`.
- JSON-LD (`components/seo/`): `<JsonLd>` render komponenta, builderi u `schema.ts`.
  `Organization` + `WebSite` idu iz layout-a (svuda); `ExerciseGym` + `BreadcrumbList`
  na stranici teretane. Geo se parsira iz Google Maps embed URL-a (`getGymGeo`).
- Analitika (`components/analytics/`): GA4 + Consent Mode v2. Bez `NEXT_PUBLIC_GA_ID`
  se ne učitava ništa (ni skripta ni baner). `CookieBanner` čuva izbor u
  `localStorage` (`sg-cookie-consent`).
- `/api/contact`: honeypot polje `company`, rate-limit (5 / 10 min po IP, u memoriji),
  primalac/pošiljalac iz env-a, opciona kopija u Google Sheet (Apps Script webhook,
  ne ruši odgovor ako padne).
- `/politika-privatnosti` — ŠABLON, čeka pravni pregled (oznake u `[uglastim zagradama]`).

### Env promenljive

Vidi `.env.example`. Ključne: `NEXT_PUBLIC_SITE_URL`, `RESEND_API_KEY`,
`RESEND_FROM`, `LEAD_TO`, `LEAD_BCC`, `GOOGLE_SHEET_WEBHOOK_URL`, `NEXT_PUBLIC_GA_ID`.

> Dok domen nije verifikovan u Resend-u, `LEAD_TO` mora da bude adresa vlasnika
> Resend naloga. Posle verifikacije prebaciti na `fitnesscentarspartansgym@gmail.com`.
> `NEXT_PUBLIC_*` se „upeku" u kod pri `npm run build` — menjanje traži novi build.

## Deploy (Faza 3)

VPS (Ubuntu) + PM2 + Nginx. Pokreće se kao `next start` (ne `output: standalone`)
jer tako optimizacija slika i keš rade bez konfiguracije i preživljavaju deploy.

- `ecosystem.config.js` — PM2, `next start -p 3000` iz `/var/www/spartansgym`
- `deploy/nginx.conf` — reverse proxy (prosleđuje `X-Forwarded-For` koji koristi
  rate-limit u `/api/contact`), www→non-www, gzip
- `deploy.sh` — `git pull → npm ci → npm run build → pm2 reload`
- `DEPLOY.md` — pun vodič (prvo podešavanje, Certbot, troubleshooting, checklist)
- `.nvmrc` (20), `engines.node >=20.9.0`

## Konvencije

- Sadržaj sajta je na srpskom (latinica). Komentari/commit poruke takođe.
- Boje i tipografija: CSS varijable u `app/globals.css` (`--accent` je `#FF5500`,
  tamna tema). Ne uvoditi nove nasumične boje.
- Layout razmak: `px-[5vw]` je standardni horizontalni padding sekcija.
- `next/image` za sve slike; slike stoje u `public/`.

## Poznati TODO (van trenutne faze)

- `public/gym4.jpg` ne postoji (Gym 4 je "coming-soon") — dodati pravu fotku ili čist ekran.
- Fotografije trenera Stefan / Nikola / Slaviša dele `public/markec.jpg`.
- Prави utisci članova umesto placeholdera.
- `/politika-privatnosti` — dopuniti pravne podatke i rok čuvanja.
- Kupiti domen → verifikovati u Resend-u → prebaciti `LEAD_TO` i `RESEND_FROM`.
- Napraviti GA4 property i ubaciti `NEXT_PUBLIC_GA_ID`.
- Napraviti Google Apps Script Web App za Sheet i ubaciti `GOOGLE_SHEET_WEBHOOK_URL`.
- Nema OG slike (`opengraph-image`) — može dinamička preko `next/og` (Faza 4).

## Plan rada (fazno, grana po fazi)

1. **Arhitektura + podaci** — konsolidacija sadržaja u `data/`, čišćenje. ✅
2. **SEO + lead-gen** — metadata, sitemap/robots, JSON-LD, `/api/contact` (honeypot,
   rate-limit, Google Sheet kopija), politika privatnosti, GA4 + consent, `lang="sr"`. ✅
3. **Deploy** — PM2 `ecosystem.config.js`, `deploy/nginx.conf`, `deploy.sh`, `DEPLOY.md`,
   `.nvmrc`, `next.config.ts` (`poweredByHeader: false`). ✅
4. **Dizajn polish** — tipografska skala, fiksni navbar bez `pt-[30vh]`,
   jedinstven `Button` sa `href`, `not-found` / `loading` / `error`, optimizacija slika/videa, OG slika.
