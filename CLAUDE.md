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

## Konvencije

- Sadržaj sajta je na srpskom (latinica). Komentari/commit poruke takođe.
- Boje i tipografija: CSS varijable u `app/globals.css` (`--accent` je `#FF5500`,
  tamna tema). Ne uvoditi nove nasumične boje.
- Layout razmak: `px-[5vw]` je standardni horizontalni padding sekcija.
- `next/image` za sve slike; slike stoje u `public/`.

## Poznati TODO (van trenutne faze)

- `public/gym4.jpg` ne postoji (Gym 4 je "coming-soon") — dodati pravu fotku ili čist ekran.
- Fotografije trenera Stefan / Nikola / Slaviša dele `public/markec.jpg`.
- Kontakt forma šalje sa `onboarding@resend.dev` — treba verifikovan domen kad se kupi.
- Nema `sitemap.ts` / `robots.ts` / JSON-LD / OG slika / analitike (Faza 2).
- `<html lang="en">` treba da bude `sr` (Faza 4).
- `next.config.ts` je prazan — treba `output: "standalone"` za VPS (Faza 3).

## Plan rada (fazno, grana po fazi)

1. **Arhitektura + podaci** — konsolidacija sadržaja u `data/`, čišćenje. ✅
2. **SEO + lead-gen** — metadata, sitemap/robots, JSON-LD, poboljšanje `/api/contact`,
   Google Sheet kopija lead-a, politika privatnosti, GA4 + consent.
3. **Deploy** — `output: standalone`, PM2 `ecosystem.config.js`, Nginx, `deploy.sh`, `DEPLOY.md`.
4. **Dizajn polish** — `lang="sr"`, tipografska skala, fiksni navbar bez `pt-[30vh]`,
   jedinstven `Button` sa `href`, `not-found` / `loading` / `error`, optimizacija slika/videa.
