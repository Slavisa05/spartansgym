import { Testimonial } from "@/types/testimonial";

/*
 * ⚠️  PLACEHOLDER PODACI — OVO NISU PRAVI UTISCI ČLANOVA.
 *
 * Svi unosi ispod imaju `placeholder: true`, generička imena ("M. P.", "N. N.")
 * i neutralan tekst. Služe samo da se vidi izgled sekcije tokom razvoja.
 *
 * TODO (pre puštanja u produkciju):
 *   1. Tražiti od vlasnika 5–10 pravih utisaka po teretani (ime, teretana, tekst).
 *   2. Zameniti unose ispod i ukloniti `placeholder: true`.
 *
 * Dok su označeni kao placeholder, sekcija sa utiscima se na produkciji NE
 * prikazuje. Takođe se sakriva za svaku teretanu koja nema bar 3 prava utiska
 * (vidi `publishableTestimonials` niže).
 */

const GYM_1 = "Gym 1 — Ub";
const GYM_2 = "Gym 2 — Lajkovac";
const GYM_3 = "Gym 3 — Ub";

export const allTestimonials: Testimonial[] = [
  // ─── Gym 1 (Ub) ────────────────────────────────────────────────────────────
  { id: 101, name: "M. P.", gym: GYM_1, rating: 5, placeholder: true,
    text: "Treneri su stručni i posvećeni, plan je prilagođen meni i napredak se stvarno vidi." },
  { id: 102, name: "J. K.", gym: GYM_1, rating: 5, placeholder: true,
    text: "Prijatna atmosfera i ljubazno osoblje. Uvek se osećam motivisano kad izađem sa treninga." },
  { id: 103, name: "N. N.", gym: GYM_1, rating: 4, placeholder: true,
    text: "Čisto, uredno i dobro opremljeno. Termini su fleksibilni pa lako uklapam trening u raspored." },
  { id: 104, name: "S. T.", gym: GYM_1, rating: 5, placeholder: true,
    text: "Došla sam kao potpuni početnik i za par meseci sam naučila pravilnu tehniku i podigla kondiciju." },
  { id: 105, name: "D. M.", gym: GYM_1, rating: 5, placeholder: true,
    text: "Dobar odnos cene i kvaliteta. Grupni treninzi su dinamični i nikad mi nije dosadno." },
  { id: 106, name: "A. R.", gym: GYM_1, rating: 4, placeholder: true,
    text: "Zajednica ljudi koja te bodri. Baš zbog te energije dolazim redovno." },

  // ─── Gym 2 (Lajkovac) ──────────────────────────────────────────────────────
  { id: 201, name: "M. J.", gym: GYM_2, rating: 5, placeholder: true,
    text: "Konačno prava teretana u Lajkovcu. Vođeni treninzi su odlično organizovani." },
  { id: 202, name: "P. S.", gym: GYM_2, rating: 5, placeholder: true,
    text: "Trener prati svaki pokret i koriguje tehniku. Osećam se sigurno dok vežbam." },
  { id: 203, name: "N. N.", gym: GYM_2, rating: 4, placeholder: true,
    text: "Oprema je nova i održavana, prostor je čist. Nemam primedbi." },
  { id: 204, name: "K. V.", gym: GYM_2, rating: 5, placeholder: true,
    text: "Termini se lako zakazuju, a atmosfera na treningu je vrhunska." },
  { id: 205, name: "I. Đ.", gym: GYM_2, rating: 5, placeholder: true,
    text: "Za nekoliko meseci sam smršao i vratio kondiciju. Preporuka za sve iz Lajkovca." },
  { id: 206, name: "T. L.", gym: GYM_2, rating: 4, placeholder: true,
    text: "Dobra energija i motivacija. Trening prođe brzo jer je zanimljiv." },

  // ─── Gym 3 (Ub, slobodni tip) ──────────────────────────────────────────────
  { id: 301, name: "V. M.", gym: GYM_3, rating: 5, placeholder: true,
    text: "Sloboda da treniram kad hoću mi savršeno odgovara uz posao. Oprema pokriva sve što mi treba." },
  { id: 302, name: "N. N.", gym: GYM_3, rating: 5, placeholder: true,
    text: "Prostrano, dovoljno mesta oko sprava, nikad se ne čeka na red." },
  { id: 303, name: "B. S.", gym: GYM_3, rating: 4, placeholder: true,
    text: "Cena je pristupačna, a teretana je čista i uredna svaki put kad dođem." },
  { id: 304, name: "R. P.", gym: GYM_3, rating: 5, placeholder: true,
    text: "Idealno za samostalan rad. Imam svoj plan i sve potrebne sprave na jednom mestu." },
  { id: 305, name: "M. K.", gym: GYM_3, rating: 5, placeholder: true,
    text: "Široko radno vreme znači da uvek nađem termin koji mi odgovara." },
  { id: 306, name: "D. J.", gym: GYM_3, rating: 4, placeholder: true,
    text: "Slobodni tegovi, stalci, klupe — sve na broju. Za tu cenu nema bolje u okolini." },
];

/**
 * Utisci koji smeju da se prikažu posetiocu.
 * - u razvoju: svi (da se vidi dizajn),
 * - na produkciji: samo pravi (bez `placeholder`).
 */
export function publishableTestimonials(list: Testimonial[]): Testimonial[] {
  if (process.env.NODE_ENV === "production") {
    return list.filter((t) => !t.placeholder);
  }
  return list;
}

/** Sekcija sa utiscima se prikazuje tek kad ima bar ovoliko pravih utisaka. */
export const MIN_TESTIMONIALS_TO_SHOW = 3;
