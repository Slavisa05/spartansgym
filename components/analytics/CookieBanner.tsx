"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { GA_ID, CONSENT_STORAGE_KEY } from "./config";

const subscribe = () => () => {};

/** true dok posetilac nije izabrao (prihvatio/odbio) kolačiće. */
function useConsentPending(): boolean {
  return useSyncExternalStore(
    subscribe,
    () => {
      try {
        const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
        return stored !== "granted" && stored !== "denied";
      } catch {
        return true;
      }
    },
    () => false, // na serveru baner ne renderujemo
  );
}

/**
 * Baner za pristanak na analitičke kolačiće (GA4 Consent Mode v2).
 * Prikazuje se samo ako je GA podešen i posetilac još nije izabrao.
 */
export default function CookieBanner() {
  const pending = useConsentPending();
  const [dismissed, setDismissed] = useState(false);

  if (!GA_ID || !pending || dismissed) return null;

  const choose = (value: "granted" | "denied") => {
    try {
      localStorage.setItem(CONSENT_STORAGE_KEY, value);
    } catch {
      /* privatni režim — samo sakrij baner */
    }
    window.gtag?.("consent", "update", { analytics_storage: value });
    setDismissed(true);
  };

  return (
    <div
      role="dialog"
      aria-label="Obaveštenje o kolačićima"
      className="fixed inset-x-0 bottom-0 z-[60] px-[5vw] pb-4"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-4 rounded-2xl border border-border bg-bg-secondary/95 p-5 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-text-secondary">
          Koristimo analitičke kolačiće (Google Analytics) da bismo razumeli kako
          se sajt koristi. Više u{" "}
          <Link
            href="/politika-privatnosti"
            className="text-accent underline underline-offset-2 hover:text-accent-dim"
          >
            politici privatnosti
          </Link>
          .
        </p>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("denied")}
            className="rounded-xl border border-border px-4 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-accent/40 hover:text-text-primary"
          >
            Odbij
          </button>
          <button
            type="button"
            onClick={() => choose("granted")}
            className="rounded-xl bg-accent px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim"
          >
            Prihvati
          </button>
        </div>
      </div>
    </div>
  );
}
