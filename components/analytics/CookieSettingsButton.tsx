"use client";

import { GA_ID, OPEN_COOKIE_SETTINGS_EVENT } from "./config";

/**
 * Link u footer-u koji ponovo otvara baner o kolačićima, da posetilac može
 * da povuče ili da pristanak (zahtev ZZPL / GDPR — povlačenje mora biti
 * jednako lako kao davanje). Bez GA ne renderuje se ništa.
 */
export default function CookieSettingsButton({ className }: { className?: string }) {
  if (!GA_ID) return null;

  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT))}
      className={className}
    >
      Podešavanja kolačića
    </button>
  );
}
