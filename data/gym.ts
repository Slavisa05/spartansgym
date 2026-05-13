import { allTestimonials } from "@/data/testimonials";

export type GymType = "standard" | "free" | "coming-soon";

export interface PricingOption {
  name: string;
  price: number;
  trajanje?: string;
  brojProlazaka?: string;
}

export interface WorkingHoursEntry {
  day: string;
  open?: string;
  close?: string;
  isClosed?: boolean;
}

export interface Gym {
  slug: string;
  type: GymType;
  name: string;
  img: string;
  map?: string;
  address?: string;
  openTime?: string;
  closeTime?: string;
  workingHours?: WorkingHoursEntry[];
  phone?: string;
  about?: string[];
  images?: string[];
  testimonialIds?: number[];
  pricing?: PricingOption[];
}

export function getGymTestimonials(gym: Gym) {
  return allTestimonials.filter((t) => gym.testimonialIds?.includes(t.id));
}

export const gyms: Gym[] = [
  {
    slug: "gym-1",
    type: "standard",
    name: "Fitness Centar Spartans Gym 1",
    img: "/gym1.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.6343536272584!2d20.073620675702493!3d44.461168399801544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a1e833ce19671%3A0x47cb1d63c083fbec!2sFitness%20Centar%20%22Spartans%20Gym%22!5e0!3m2!1ssr!2srs!4v1777813514433!5m2!1ssr!2srs",
    address: "Stevana Borote 11, Ub",
    openTime: "06:00",
    closeTime: "22:00h",
    workingHours: [
      { day: "Ponedeljak - Petak", open: "06:00", close: "22:00" },
      { day: "Subota", open: "07:00", close: "12:00" },
      { day: "Nedelja", isClosed: true },
    ],
    phone: "+381693478669",
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
      "/gym1/s1-gym1.jpg", "/gym1/s2-gym1.jpg", "/gym1/s3-gym1.jpg",
      "/gym1/s4-gym1.jpg", "/gym1/s5-gym1.jpg", "/gym1/s6-gym1.jpg",
      "/gym1/s7-gym1.jpg", "/gym1/s8-gym1.jpg", "/gym1/s9-gym1.jpg",
      "/gym1/s10-gym1.jpg", "/gym1/s11-gym1.jpg", "/gym1/s12-gym1.jpg",
      "/gym1/s13-gym1.jpg", "/gym1/s14-gym1.jpg", "/gym1/s15-gym1.jpg",
      "/gym1/s16-gym1.jpg", "/gym1/s17-gym1.jpg", "/gym1/s18-gym1.jpg",
      "/gym1/s19-gym1.jpg", "/gym1/s20-gym1.jpg", "/gym1/s21-gym1.jpg",
      "/gym1/s22-gym1.jpg", 
    ],
    testimonialIds: [1],
  },
  {
    slug: "gym-2",
    type: "standard",
    name: "Fitness Centar Spartans Gym 2",
    img: "/gym2.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.0116390541143!2d20.163110675697386!3d44.37135120568891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4759f90e6e5b23bf%3A0x6bb172b0d6f9495c!2sFitness%20Centar%20%22Spartans%20Gym%22%20Lajkovac!5e0!3m2!1ssr!2srs!4v1777961550061!5m2!1ssr!2srs",
    address: "Kralja Petra Prvog 11, Ub",
    openTime: "06:00",
    closeTime: "22:00h",
    workingHours: [
      { day: "Ponedeljak - Petak", open: "06:00", close: "22:00" },
      { day: "Subota", open: "07:00", close: "12:00" },
      { day: "Nedelja", isClosed: true },
    ],
    phone: "+381693478669",
    about: [
      "Teretana u Lajkovcu nastala je po već osmišljenom principu rada koji se sprovodio u susednom gradu Ubu.",
      "Kao ideja da isti sistem rada, koji se veoma dobro pokazao, prenesemo i na susedni grad uspešno su gradjani Lajkovca prihvatili i prepoznali našu viziju i ideju.",
      "Kao i na Ubu, tako i u Lajkovcu uspeli smo da podignemo svest o vežbanju i donesemo nesto novo i u ovaj grad.",
      "Kvalitetan rad i posvećenost su gradjani Lajkovca brzo prepoznali i vec u par meseci su termini bili popunjeni.",
      "Na ovoj lokaciji se sprovode vodjeni i i personalni treninzi, a sve u cilju postizanja cilja vežbača i poboljšanje psiho-fizičkih aktivnosti gradjana Lajkovca. ",
      "Teretana je otvorena 8. februara 2020. godine i od tada uspešno posluje na teritoriji opštine Lajkovac, a za to vreme kroz taj prostor je prošlo preko 3000 vežbača koji i danas postižu sjajne rezultete i svoje ciljeve.",
      "Spartans Gym 2 je više od teretane- to je zajednica ljudi koji dele istu strast, koji međusobno bodre, inspirišu i zajedno rastu.",
    ],
    images: [
      "/gym2/s1-gym2.jpeg", "/gym2/s2-gym2.jpeg", "/gym2/s3-gym2.jpeg",
      "/gym2/s4-gym2.jpeg", "/gym2/s5-gym2.jpeg", "/gym2/s6-gym2.jpeg",
      "/gym2/s7-gym2.jpeg", "/gym2/s8-gym2.jpeg", "/gym2/s9-gym2.jpeg",
      "/gym2/s10-gym2.jpeg", "/gym2/s11-gym2.jpeg", "/gym2/s12-gym2.jpeg",
      "/gym2/s13-gym2.jpeg",
    ],
    testimonialIds: [2, 3, 4],
  },
  {
    slug: "gym-3",
    type: "free",
    name: "Fitness Centar Spartans Gym 3",
    img: "/gym3.jpg",
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.972432516072!2d20.06775977570211!3d44.45423650025633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a1f533843894d%3A0x9d35aeafd3baaefe!2sFitness%20centar%20Spartans%20Gym%203!5e0!3m2!1ssr!2srs!4v1777962185205!5m2!1ssr!2srs",
    address: "Prvog Maja 61, Ub",
    openTime: "08:00",
    closeTime: "22:00h",
    workingHours: [
      { day: "Ponedeljak - Subota", open: "08:00", close: "22:00" },
      { day: "Nedelja", open: "10:00", close: "22:00" },
    ],
    phone: "+381693478669",
    about: [
      "Spartans Gym 3 je prostor stvoren za one koji žele slobodu u svom treningu. Mesto gde si ti gazda svog rasporeda — biraš kad šta radiš, bez obaveze za grupne termine, bez pritiska.",
      "Oprema je pažljivo odabrana i raznovrsna: slobodni tegovi, bučice, šipke, stalci, klupe, ali i sprave koje omogućavaju izolovane vežbe — sve što ti je potrebno da kompletan trening izvedeš samostalno.",
      "Teretana je koncipirana da pruži maksimalan komfor: prostrane zone za vežbanje, dovoljno mesta oko sprava, kvalitetan pod, ogledala, ventilacija — da se osećaš dobro dok radiš svoje.",
      "Sa slobodom kad dolaziš, prakticno nema vremenskih ograničenja — Spartans 3 omogućava članovima pristup prostoru u širem radnom vremenu, da biraju treninzima kad im najbolje odgovara.",
      "Redovno održavanje i higijena su nam prioritet: sprave su čiste, oprema održavana, prostori uredni — sve da se osećaš prijatno i sigurno svaki put kad kročiš unutra.",
      "Slobodno vežbanje pruža mogućnost da radiš na svojim ciljevima — bilo da želiš da gradiš snagu, oblikuješ telo, radiš na mobilnosti ili jednostavno pustiš stres kroz trening.",
      "Ovaj tip članstva je odličan izbor ako želiš fleksibilnost, kontrolu i autonomiju. Bez rigoroznih planova, samo ti, tvoji treninzi, tvoj ritam.",
      "Cena slobodnog vežbanja je formirana tako da bude dostupna — da možeš trenirati kad poželiš, a troškovi ne budu prepreka.",
      "Dođi, isprobaj, oseti razliku slobodnog treninga.",
    ],
    images: [
      "/gym3/s1-gym3.jpg", "/gym3/s2-gym3.jpg", "/gym3/s3-gym3.jpg",
      "/gym3/s4-gym3.jpg", "/gym3/s5-gym3.jpg", "/gym3/s6-gym3.jpg",
      "/gym3/s7-gym3.jpg", "/gym3/s8-gym3.jpg", "/gym3/s9-gym3.jpg",
      "/gym3/s10-gym3.jpg", "/gym3/s11-gym3.jpg", "/gym3/s12-gym3.jpg",
      "/gym3/s13-gym3.jpg", "/gym3/s14-gym3.jpg", "/gym3/s15-gym3.jpg",
      "/gym3/s16-gym3.jpg", "/gym3/s17-gym3.jpg", "/gym3/s18-gym3.jpg",
      "/gym3/s19-gym3.jpg", "/gym3/s20-gym3.jpg", "/gym3/s21-gym3.jpg",
    ],
    testimonialIds: [5],
    pricing: [
      { name: "Dnevna karta", price: 500, trajanje: "1 dan", brojProlazaka: "1" },
      { name: "Mesečna članarina", price: 3800, trajanje: "31 dan", brojProlazaka: "neograničeno" },
      { name: "Individualni plan treninga", price: 6000, trajanje: "31 dan", brojProlazaka: "neograničeno" },
      { name: "Nedeljna članarina", price: 1700, trajanje: "7 dana", brojProlazaka: "neograničeno" },
      { name: "Polumesečna članarina", price: 3800, trajanje: "14 dana", brojProlazaka: "neograničeno" },
      { name: "Studentska članarina", price: 2500, trajanje: "31 dan", brojProlazaka: "8" },
      { name: "Polugodišnja članarina", price: 19000, trajanje: "183 dana", brojProlazaka: "neograničeno" },
      { name: "Godišnja članarina", price: 38000, trajanje: "365 dana", brojProlazaka: "neograničeno" },
      { name: "Iznajmljivanje peškira", price: 100 },
      { name: "Iznajmljivanje ormarića mesečno", price: 500 },
    ],
  },
  {
    slug: "gym-4",
    type: "coming-soon",
    name: "Fitness Centar Spartans Gym 4",
    img: "/gym4.jpg",
  },
];