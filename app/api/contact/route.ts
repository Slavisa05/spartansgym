import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Pošiljalac i primalac idu iz env-a da bi se lako promenili posle verifikacije
// domena u Resend-u (tada: RESEND_FROM na adresu sa domena, LEAD_TO na mejl teretane).
const FROM = process.env.RESEND_FROM || "Spartans Gym <onboarding@resend.dev>";
const TO = process.env.LEAD_TO || "slavisaarsenijevic05@gmail.com";
const BCC = process.env.LEAD_BCC || undefined;
const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK_URL;

// Jednostavan rate-limit u memoriji (dovoljno za jednu PM2 instancu).
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > RATE_LIMIT;
}

function clientIp(req: Request): string {
  const fwd = req.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      email,
      service,
      goal,
      experience,
      gym,
      startWhen,
      note,
      company, // honeypot
    } = body;

    // Bot je popunio skriveno polje — pravimo se da je sve u redu, ali ne šaljemo.
    if (typeof company === "string" && company.trim() !== "") {
      return Response.json({ ok: true });
    }

    if (isRateLimited(clientIp(req))) {
      return Response.json(
        { ok: false, error: "Previše pokušaja. Pokušajte ponovo kasnije." },
        { status: 429 },
      );
    }

    if (!fullName || !phone || !service || !goal || !experience || !gym || !startWhen) {
      return Response.json(
        { ok: false, error: "Nedostaju obavezna polja." },
        { status: 400 },
      );
    }

    const digits = String(phone).replace(/\D/g, "");
    if (digits.length < 8 || digits.length > 15) {
      return Response.json(
        { ok: false, error: "Broj telefona nije ispravan." },
        { status: 400 },
      );
    }

    const safeEmail = email ? String(email) : "Nije ostavljen";
    const safeNote = note ? String(note) : "Nema dodatne napomene";
    const receivedAt = new Date().toISOString();

    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      ...(BCC ? { bcc: BCC } : {}),
      replyTo: email ? String(email) : undefined,
      subject: `Novi upit - ${fullName}`,
      text: [
        "Novi kontakt upit sa sajta Spartans Gym",
        "",
        `Ime i prezime: ${fullName}`,
        `Telefon: ${phone}`,
        `Email: ${safeEmail}`,
        "",
        `Usluga: ${service}`,
        `Cilj: ${goal}`,
        `Iskustvo: ${experience}`,
        "",
        `Teretana: ${gym}`,
        `Pocetak: ${startWhen}`,
        `Napomena: ${safeNote}`,
        "",
        `Primljeno: ${receivedAt}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);
      return Response.json({ ok: false, error: error.message }, { status: 500 });
    }

    // Kopija u Google Sheet — ako padne, ne rušimo odgovor (mejl je već otišao).
    if (SHEET_WEBHOOK) {
      try {
        await fetch(SHEET_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            receivedAt,
            fullName,
            phone,
            email: safeEmail,
            service,
            goal,
            experience,
            gym,
            startWhen,
            note: safeNote,
          }),
        });
      } catch (sheetErr) {
        console.error("Google Sheet webhook error:", sheetErr);
      }
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error("Unexpected error:", err);
    return Response.json({ ok: false }, { status: 500 });
  }
}
