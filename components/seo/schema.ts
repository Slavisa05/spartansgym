import { SITE, absoluteUrl } from "@/data/site";
import { getGymGeo, type Gym } from "@/data/gym";

/**
 * schema.org strukturirani podaci. Grade se iz data/ pa se ubacuju preko
 * <JsonLd />. Cilj je lokalni SEO ("teretana Ub", "personalni trener Lajkovac").
 */

const DAY_MAP: Record<string, string[]> = {
  Ponedeljak: ["Monday"],
  Utorak: ["Tuesday"],
  Sreda: ["Wednesday"],
  Četvrtak: ["Thursday"],
  Petak: ["Friday"],
  Subota: ["Saturday"],
  Nedelja: ["Sunday"],
};

const ALL_DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

/** "Ponedeljak - Petak" -> ["Monday",...,"Friday"]; "Subota" -> ["Saturday"] */
function daysFromLabel(label: string): string[] {
  const parts = label.split("-").map((p) => p.trim());
  if (parts.length === 2) {
    const from = DAY_MAP[parts[0]]?.[0];
    const to = DAY_MAP[parts[1]]?.[0];
    if (from && to) {
      const start = ALL_DAYS.indexOf(from);
      const end = ALL_DAYS.indexOf(to);
      if (start !== -1 && end !== -1 && start <= end) {
        return ALL_DAYS.slice(start, end + 1);
      }
    }
  }
  return DAY_MAP[parts[0]] ?? [];
}

function openingHoursSpecification(gym: Gym) {
  if (!gym.workingHours?.length) return undefined;
  return gym.workingHours
    .filter((entry) => !entry.isClosed && entry.open && entry.close)
    .map((entry) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: daysFromLabel(entry.day),
      opens: entry.open,
      closes: entry.close,
    }));
}

/** Organizacija — na početnoj strani. */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: absoluteUrl("/logo.png"),
    description: SITE.description,
    foundingDate: SITE.foundingYear,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: SITE.areaServed,
    sameAs: [SITE.social.instagram],
  };
}

/** Sajt — za sitelinks search box / prepoznavanje. */
export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    inLanguage: "sr-RS",
    publisher: { "@id": `${SITE.url}/#organization` },
  };
}

/** Pojedinačna teretana — na /teretane/[slug]. */
export function gymSchema(gym: Gym) {
  const geo = getGymGeo(gym);
  const url = absoluteUrl(`/teretane/${gym.slug}`);

  return {
    "@context": "https://schema.org",
    "@type": "ExerciseGym",
    "@id": `${url}/#gym`,
    name: gym.name,
    url,
    image: absoluteUrl(gym.img),
    description: gym.about?.[0] ?? SITE.description,
    telephone: gym.phone ?? SITE.phone,
    parentOrganization: { "@id": `${SITE.url}/#organization` },
    ...(gym.address
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: gym.address,
            addressCountry: "RS",
          },
        }
      : {}),
    ...(geo
      ? { geo: { "@type": "GeoCoordinates", latitude: geo.lat, longitude: geo.lng } }
      : {}),
    ...(openingHoursSpecification(gym)
      ? { openingHoursSpecification: openingHoursSpecification(gym) }
      : {}),
  };
}

/** Navigacioni "breadcrumb" za podstranicu. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
