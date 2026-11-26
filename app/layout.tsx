import type { Metadata } from "next";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import CookieBanner from "@/components/analytics/CookieBanner";
import JsonLd from "@/components/seo/JsonLd";
import { organizationSchema, webSiteSchema } from "@/components/seo/schema";
import { SITE } from "@/data/site";
import "./globals.css";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["normal", "italic"],
  variable: "--font-barlow",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-dm",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default:
      "Teretana Spartans Gym | Fitness Centar u Ubu i Lajkovcu — Personalni i Vođeni Treninzi",
    template: "%s | Spartans Gym",
  },
  description:
    "Pridružite se Spartans Gym zajednici — teretane u Ubu i Lajkovcu, stručan tim trenera, personalni i grupni treninzi, kondiciona priprema, školice sporta i ishrana. Kontaktirajte nas danas.",
  applicationName: SITE.name,
  keywords: [
    "teretana Ub",
    "teretana Lajkovac",
    "fitnes centar Ub",
    "personalni trening Ub",
    "vođeni treninzi",
    "Spartans Gym",
    "kondiciona priprema",
    "škola sporta Tamnava",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE.url,
    siteName: SITE.name,
    title: "Teretana Spartans Gym | Fitness Centar u Ubu i Lajkovcu",
    description:
      "Teretane u Ubu i Lajkovcu, stručan tim trenera, personalni i grupni treninzi. Transformišite svoje telo uz stručno vođenje.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Teretana Spartans Gym | Fitness Centar u Ubu i Lajkovcu",
    description:
      "Teretane u Ubu i Lajkovcu, stručan tim trenera, personalni i grupni treninzi.",
  },
  icons: {
    icon: "/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${barlow.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <GoogleAnalytics />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={webSiteSchema()} />
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
