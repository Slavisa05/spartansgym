/**
 * Centralni podaci o sajtu / firmi. Koriste se za metadata, JSON-LD,
 * footer, kontakt formu i sitemap. Jedini izvor istine za NAP podatke
 * (Name / Address / Phone) — mora da se poklapa sa Google Business Profile-om.
 */
export const SITE = {
  name: "Spartans Gym",
  legalName: "Fitness Centar Spartans Gym",
  description:
    "Lanac teretana Spartans Gym u Ubu i Lajkovcu — personalni i vođeni treninzi, kondiciona priprema, školice sporta i ishrana uz stručan tim trenera.",

  /** Kanonski URL — postavlja se preko env-a kad se kupi domen. */
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://spartansgym.rs").replace(/\/$/, ""),

  phone: "+381693478669",
  email: "fitnesscentarspartansgym@gmail.com",

  /** Grad(ovi) u kojima lanac posluje — za lokalni SEO. */
  areaServed: ["Ub", "Lajkovac", "Tamnava"],

  social: {
    instagram: "https://instagram.com/dejan_mladenovic_condition",
  },

  /** Godina osnivanja (iz istorije na /o-nama). */
  foundingYear: "2016",
} as const;

/** Apsolutni URL od relativne putanje. */
export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
