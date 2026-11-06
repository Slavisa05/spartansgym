@AGENTS.md

# Spartans Gym — sajt lanca teretana

Marketing / prezentacioni sajt za lanac teretana "Fitness Centar Spartans Gym"
(Ub i Lajkovac). **Cilj:** posetilac vidi teretane, trenere i usluge → ode na
`/kontakt` i popuni formu (primarni lead) ili pozove telefonom (sekundarni).

- **Tailwind CSS v4** — konfiguracija je u `app/globals.css`, `@theme` blok (nema `tailwind.config`).

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
  `localStorage` (`sg-cookie-consent`). Link „Podešavanja kolačića" u footer-u
  (`CookieSettingsButton`) ponovo otvara baner; „Odbij" briše `_ga*` kolačiće.
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
`deploy/nginx.conf` mora da prosleđuje `X-Forwarded-For` — na njemu radi rate-limit
u `/api/contact`. Pun vodič: `DEPLOY.md`.

## Dizajn sistem (Faza 4)

- Tokeni u `app/globals.css`: boje (`--accent` `#FF5500`, tamna tema),
  `--nav-h` (visina fiksnog navbar-a), `--page-x` (horizontalni razmak).
  **Ne uvoditi nove nasumične boje.**
- Utility klase: `px-page` (= horizontalni padding sekcije, zamena za `px-[5vw]`),
  `pt-page` (= gornji razmak stranica ispod fiksnog navbar-a, zamena za bivši
  nekonzistentni `pt-[30vh]`). `scroll-padding-top` je vezan za `--nav-h` pa
  sidra (`#treneri`, `#teretane`) ne završe ispod navbar-a.
- Tipografija: skala definisana na `h1`–`h4` u `globals.css` (clamp). Barlow
  Condensed nosi samo 600/700 — ne koristiti `font-weight` iznad 700.
- `Button` (`components/ui/Button.tsx`): jedini CTA element. Sa `href` renderuje
  `<Link>`, bez njega `<button>` (podržava `onClick`, `isLoading`, `type`).

## Konvencije

- Sadržaj sajta je na srpskom (latinica). Komentari/commit poruke takođe.
- `next/image` za sve slike; slike stoje u `public/`. `next start` ih optimizuje
  u letu — izvorne slike ne moraju biti WebP (izuzev logo-a koji je smanjen).
- Hero video: `public/hero_desktop.mp4` (desktop) i `hero_video.mp4` (mobil),
  sa `.webp` poster frame-ovima. Skraćeni na ~16s i rekompresovani.

## Poznati TODO (van trenutne faze — čeka vlasnika)

- `public/gym4.jpg` ne postoji (Gym 4 je "coming-soon") — dodati pravu fotku ili čist ekran.
- Fotografije trenera Stefan / Nikola / Slaviša dele `public/markec.jpg`.
- Pravi utisci članova umesto placeholdera.
- `/politika-privatnosti` — dopuniti pravne podatke i rok čuvanja.
- Kupiti domen → verifikovati u Resend-u → prebaciti `LEAD_TO` i `RESEND_FROM`.
- Napraviti GA4 property i ubaciti `NEXT_PUBLIC_GA_ID`.
- Napraviti Google Apps Script Web App za Sheet i ubaciti `GOOGLE_SHEET_WEBHOOK_URL`.
- Hero video je izvorno 848×478 — na velikim ekranima je blago mek (nema hi-res original).

## Status

Rad je išao fazno, grana po fazi (`faza-1-…` do `faza-4-dizajn`). Sve četiri faze su gotove. Sledeći korak je vlasnikov (domen, sadržaj, nalozi) —
vidi „Poznati TODO" i `DEPLOY.md` checklist.
