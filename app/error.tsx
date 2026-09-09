"use client";

import { useEffect } from "react";
import Button from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="px-page pt-page pb-16 flex min-h-[70vh] flex-col items-center justify-center gap-6 text-center">
      <h1>Nešto je pošlo naopako</h1>
      <p className="max-w-md text-text-secondary">
        Došlo je do greške pri učitavanju stranice. Pokušajte ponovo, a ako se
        problem ponovi, kontaktirajte nas.
      </p>
      <div className="flex flex-col gap-3 sm:flex-row">
        <button
          type="button"
          onClick={reset}
          className="relative overflow-hidden rounded-xl border-2 border-accent bg-accent px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:bg-accent-dim hover:border-accent-dim"
        >
          Pokušaj ponovo
        </button>
        <Button href="/" text="Početna" variant="secondary" />
      </div>
    </main>
  );
}
