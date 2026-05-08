import type { Metadata } from 'next'
import Contact from './Contact'

export const metadata: Metadata = {
  title: 'Kontakt | Spartans Gym — Pošalji Upit u 3 Koraka',
  description: 'Popuni kratku formu i naš tim će ti se javiti sa predlogom termina i plana treninga. Personalni treninzi, vodjeni treninzi i ishrana u Ubu i Lajkovcu.',
}

export default function KontaktPage() {
  return <Contact />
}