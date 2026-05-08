import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-barlow',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-dm',
})

export const metadata: Metadata = {
  title: "Teretana Spartans Gym | Fitness Centar u Ubu — Personalni i Vodjeni Treninzi",
  description: "Pridružite se Spartans Gym zajednici — 4 teretane, 20 trenera, personalni i grupni treninzi. Transformišite svoje telo uz stručno vođenje. Kontaktirajte nas danas.",

  // openGraph: {
  //   title: "Teretana Spartans Gym | Fitness Centar u Ubu",
  //   description: "Transformišite svoje telo uz stručno vođenje. Kontaktirajte nas danas.",
  //   url: "https://spartansgym.com",
  //   siteName: "spartansgym.com",
  //   locale: "sr_RS",
  //   type: "website",
  //   images: [
  //     {
  //       url: "https://slavisadev.com/slavisadev.png",
  //       width: 1200,
  //       height: 630,
  //       alt: "Teretana Spartans Gym | Fitness Centar u Ubu",
  //     },
  //   ],
  // },

  // // Twitter/X kartice
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Slaviša Arsenijević — Full Stack Web Developer",
  //   description: "Transformišite svoje telo uz stručno vođenje. Kontaktirajte nas danas.",
  //   images: ["https://slavisadev.com/slavisadev.png"],
  // },

  // Ikonica u tabu browsera
  icons: {
    icon: "/logo.png",
  },

  // // Dozvoljava Googleu da indeksira
  // robots: {
  //   index: true,
  //   follow: true,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
