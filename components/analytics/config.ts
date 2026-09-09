/** GA4 Measurement ID — ubacuje se u .env kao NEXT_PUBLIC_GA_ID (npr. "G-XXXXXXX"). */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID?.trim() || "";

/** localStorage ključ za izbor o kolačićima. Vrednosti: "granted" | "denied". */
export const CONSENT_STORAGE_KEY = "sg-cookie-consent";
