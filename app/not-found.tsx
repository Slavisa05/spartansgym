import type { Metadata } from "next";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Stranica nije pronađena",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="px-page pt-page pb-16 flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <p className="font-display text-7xl font-bold italic text-accent">404</p>
      <h1>Ova stranica ne postoji</h1>
      <p className="max-w-md text-text-secondary">
        Moguće je da je link zastareo ili pogrešno ukucan. Vratite se na početnu
        i nastavite odatle.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <Button href="/" text="Početna" />
        <Button href="/kontakt" text="Kontakt" variant="secondary" />
      </div>
    </main>
  );
}
