import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  try {
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
    } = await req.json()

    if (!fullName || !phone || !service || !goal || !experience || !gym || !startWhen) {
      return Response.json({ ok: false, error: 'Nedostaju obavezna polja.' }, { status: 400 })
    }

    const safeEmail = email ? String(email) : 'Nije ostavljen'
    const safeNote = note ? String(note) : 'Nema dodatne napomene'

    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'slavisaarsenijevic05@gmail.com',
      subject: `Novi upit - ${fullName}`,
      text: [
        'Novi kontakt upit sa sajta Spartans Gym',
        '',
        `Ime i prezime: ${fullName}`,
        `Telefon: ${phone}`,
        `Email: ${safeEmail}`,
        '',
        `Usluga: ${service}`,
        `Cilj: ${goal}`,
        `Iskustvo: ${experience}`,
        '',
        `Teretana: ${gym}`,
        `Pocetak: ${startWhen}`,
        `Napomena: ${safeNote}`,
      ].join('\n'),
    })

    if (error) {
      console.error('Resend error:', error)
      return Response.json({ ok: false, error: error.message }, { status: 500 })
    }

    return Response.json({ ok: true })
  } catch (err) {
    console.error('Unexpected error:', err)
    return Response.json({ ok: false }, { status: 500 })
  }
}