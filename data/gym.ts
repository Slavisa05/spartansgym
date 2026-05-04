import { Testimonial } from "@/types/testimonial";

export interface Gym {
  slug: string;
  name: string;
  img: string;
  map: string;
  address: string;
  openTime: string;
  closeTime: string;
  phone: string;
  about: string[];
  images: string[];
  testimonials: Testimonial[];
}

export const gyms: Gym[] = [
  {
    slug: "gym-1",
    name: "Fitness Centar Spartans Gym 1",
    img: "/gym1.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.6343536272584!2d20.073620675702493!3d44.461168399801544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a1e833ce19671%3A0x47cb1d63c083fbec!2sFitness%20Centar%20%22Spartans%20Gym%22!5e0!3m2!1ssr!2srs!4v1777813514433!5m2!1ssr!2srs",
    address: "Stevana Borote 11, 14210 Ub",
    openTime: "06:00",
    closeTime: "22:00h",
    phone: "+381601234567",
    about: [
      "Fitness Centar Spartans Gym 1 nastao je iz želje da se napravi prostor koji inspiriše promenu. Mesto gde svako može da pronađe motivaciju, disciplinu i snagu da pomeri svoje granice — bilo fizičke ili mentalne.",
      "Od samog ulaska u salu, energija se oseća u vazduhu. Moderan dizajn, visok kvalitet opreme i čista, organizovana atmosfera pružaju idealne uslove za svakog vežbača, bez obzira na iskustvo ili formu.",
      "Naš tim čine iskusni treneri posvećeni tvom napretku. Sa individualnim pristupom, pažljivo osmišljenim planovima i stalnim praćenjem rezultata, vodimo te korak po korak do tvog cilja.",
      "Bez obzira da li želiš da izgradiš mišiće, skineš kilograme, povećaš izdržljivost ili jednostavno poboljšaš svoje zdravlje, Spartans Gym 1 ima program koji je stvoren baš za tebe.",
      "Pored klasičnih treninga snage, u ponudi su i funkcionalni, kardio i kružni treninzi koji donose raznovrsnost i čine svaku sesiju zanimljivom i efikasnom.",
      "Verujemo da uspeh ne dolazi slučajno. On se gradi upornošću, podrškom i znanjem — a upravo to je ono što ti naš tim svakodnevno pruža.",
      "Spartans Gym 1 nije samo teretana — to je zajednica ljudi koji dele istu strast, koji se međusobno bodre, inspirišu i zajedno rastu.",
      "Uz pažljivo izabranu muziku i motivacionu atmosferu, svaki trening postaje prilika da nadmašiš sebe i ostaviš sve izgovore iza sebe.",
      "Ako želiš da promeniš sebe, svoje navike i svoj način života — Spartans Gym 1 je mesto gde sve počinje. Mi ne obećavamo čuda. Mi zajedno stvaramo rezultate."
    ],
    images: [
      "/gym1.jpg",
    ],
    testimonials: [
      {
        id: 1,
        name: "Nikola M.",
        gym: "Spartans Gym Beograd",
        text: "Odlični treninzi!",
        rating: 5,
      },
    ],
  },
];