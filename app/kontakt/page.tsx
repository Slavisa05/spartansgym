import type { Metadata } from 'next'
import Contact from './Contact'

export const metadata: Metadata = {
  title: 'Kontakt — Pošalji Upit u 3 Koraka',
  description: 'Popuni kratku formu i naš tim će ti se javiti sa predlogom termina i plana treninga. Personalni treninzi, vođeni treninzi i ishrana u Ubu i Lajkovcu.',
  alternates: { canonical: '/kontakt' },
}

export default function KontaktPage() {
  return <Contact />
}