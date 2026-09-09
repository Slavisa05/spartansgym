import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/data/site";

export const metadata: Metadata = {
  title: "Politika privatnosti",
  description:
    "Kako Spartans Gym prikuplja i obrađuje lične podatke koje ostavite putem kontakt forme i kroz korišćenje sajta.",
  alternates: { canonical: "/politika-privatnosti" },
  robots: { index: false, follow: true },
};

/*
 * ⚠️  ŠABLON — pravni tekst treba da pregleda i dopuni vlasnik / pravnik.
 * Popuniti sve oznake u uglastim zagradama: [PUN NAZIV PRAVNOG LICA], [ADRESA],
 * [MATIČNI BROJ / PIB], [BROJ DANA/MESECI].
 */

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-2xl md:text-3xl">{title}</h2>
      <div className="flex flex-col gap-3 text-text-secondary leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export default function PrivacyPolicyPage() {
  const updated = "2026";

  return (
    <main className="px-[5vw] pt-[30vh] pb-16">
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <header className="flex flex-col gap-3">
          <p className="text-xs uppercase tracking-widest text-accent">Pravno</p>
          <h1>Politika privatnosti</h1>
          <p className="text-text-secondary">
            Poslednje ažuriranje: {updated}. Ova politika objašnjava koje lične
            podatke prikupljamo, zašto ih prikupljamo i koja su vaša prava.
          </p>
        </header>

        <Section title="1. Ko je rukovalac podacima">
          <p>
            Rukovalac podacima je{" "}
            <strong className="text-text-primary">[PUN NAZIV PRAVNOG LICA]</strong>,
            sa sedištem na adresi [ADRESA], matični broj / PIB: [MATIČNI BROJ / PIB]
            (u daljem tekstu „Spartans Gym” ili „mi”).
          </p>
          <p>
            Za sva pitanja u vezi sa zaštitom podataka možete nas kontaktirati na{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-dim">
              {SITE.email}
            </a>{" "}
            ili telefonom na{" "}
            <a href={`tel:${SITE.phone}`} className="text-accent hover:text-accent-dim">
              {SITE.phone}
            </a>
            .
          </p>
        </Section>

        <Section title="2. Koje podatke prikupljamo">
          <p>Kroz kontakt formu na sajtu prikupljamo podatke koje sami unesete:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>ime i prezime,</li>
            <li>broj telefona,</li>
            <li>email adresa (opciono),</li>
            <li>
              izbor usluge, cilja treninga, nivoa iskustva, teretane i planiranog
              početka,
            </li>
            <li>dodatna napomena koju sami napišete.</li>
          </ul>
          <p>
            Prilikom posete sajtu, uz vaš pristanak, prikupljamo i anonimizovane
            statističke podatke o korišćenju sajta putem alata Google Analytics
            (npr. posećene stranice, tip uređaja, približna lokacija na nivou
            grada). Ovi podaci se ne koriste za vašu identifikaciju.
          </p>
        </Section>

        <Section title="3. Zašto obrađujemo podatke i pravni osnov">
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-text-primary">Kontakt forma:</strong> da bismo
              vas kontaktirali, odgovorili na upit i dogovorili termin ili plan
              treninga. Pravni osnov: preduzimanje radnji na vaš zahtev pre
              zaključenja ugovora, odnosno vaš pristanak.
            </li>
            <li>
              <strong className="text-text-primary">Analitika:</strong> da bismo
              razumeli kako se sajt koristi i unapredili ga. Pravni osnov: vaš
              pristanak (baner o kolačićima).
            </li>
          </ul>
        </Section>

        <Section title="4. Sa kim delimo podatke">
          <p>
            Podatke ne prodajemo. Delimo ih isključivo sa pružaocima usluga koji
            nam pomažu u radu sajta:
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-text-primary">Resend</strong> — dostava
              email poruke sa vašim upitom nama.
            </li>
            <li>
              <strong className="text-text-primary">Google</strong> (Analytics i
              Google Sheets) — statistika korišćenja sajta i interna evidencija
              upita.
            </li>
            <li>
              hosting provajder na kome se sajt nalazi.
            </li>
          </ul>
        </Section>

        <Section title="5. Koliko dugo čuvamo podatke">
          <p>
            Podatke iz kontakt forme čuvamo najduže [BROJ DANA/MESECI] od poslednjeg
            kontakta, odnosno dok traje naša poslovna saradnja. Nakon toga se
            podaci brišu ili anonimizuju. Analitički podaci se čuvaju u skladu sa
            podešavanjima Google Analytics-a.
          </p>
        </Section>

        <Section title="6. Vaša prava">
          <p>U skladu sa Zakonom o zaštiti podataka o ličnosti imate pravo da:</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>zatražite uvid u podatke koje o vama imamo,</li>
            <li>zatražite ispravku netačnih podataka,</li>
            <li>zatražite brisanje podataka,</li>
            <li>opozovete pristanak u svakom trenutku,</li>
            <li>podnesete pritužbu Povereniku za informacije od javnog značaja i zaštitu podataka o ličnosti.</li>
          </ul>
          <p>
            Zahtev šaljete na{" "}
            <a href={`mailto:${SITE.email}`} className="text-accent hover:text-accent-dim">
              {SITE.email}
            </a>
            .
          </p>
        </Section>

        <Section title="7. Kolačići">
          <p>
            Neophodni kolačići su uvek aktivni jer omogućavaju osnovno
            funkcionisanje sajta. Analitički kolačići se postavljaju samo ako ih
            prihvatite u baneru. Izbor možete promeniti brisanjem podataka sajta u
            vašem pregledaču.
          </p>
        </Section>

        <p className="text-sm text-text-secondary">
          <Link href="/kontakt" className="text-accent hover:text-accent-dim">
            Nazad na kontakt
          </Link>
        </p>
      </div>
    </main>
  );
}
