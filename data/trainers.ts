export interface Trainer {
    slug: string;
    name: string;
    role: string;
    img: string;
    desc: string[];
    bulletPoints?: string[];
    instagram?: string;
    phone?: string;
    gymSlugs: string[];
}

export const trainers: Trainer[] = [
    {
        slug: "dejan-mladenovic",
        name: "Dejan Mladenović",
        role: "vlasnik",
        img: "/dejan.jpg",
        desc: [
            "Ja sam Dejan Mladenović, master profesor fizičkog vaspitanja i sporta Univerziteta u Beogradu. Više od deset godina aktivno radim sa ljudima svih uzrasta kroz različite vrste treninga, programe i sportske projekte.",
            "Tokom godina izgradio sam iskustvo u radu sa sportistima, decom, rekreativcima i osobama sa smetnjama u razvoju. Verujem da fizička aktivnost nije samo način da unapredimo izgled, već ključ za zdraviji, srećniji i kvalitetniji život.",
            "Cilj mi je da kroz stručan, ali ljudski pristup, pomognem svakoj osobi da otkrije koliko fizička aktivnost može da promeni život. Trudim se da pored uloge trenera budem i podrška, motivator i prijatelj.",
        ],
        bulletPoints: [
            "Osnivač Fitness centra Spartans Gym u Ubu i Lajkovcu",
            "Osnivač Školice sporta Malci Tamnavci",
            "Osnivač Školice plivanja na otvorenim i zatvorenim bazenima",
            "Kondicioni trener RK Ub",
            "Bivši profesor fizičkog vaspitanja u tri škole",
            "Dvogodišnje iskustvo u radu sa decom sa smetnjama u razvoju",
            "Kondicioni trener FK Jedinstvo Ub",
            "Pokretač programa Zumba, EasyFit, Strong Jump i programa za ispravljanje telesnih deformiteta kod dece",
            "Aktivni sportista sa dugogodišnjim iskustvom u fudbalu",
            "Rad sa decom sa cerebralnom paralizom",
        ],
        instagram: "dejan_mladenovic_condition",
        phone: "+381601234567",
        gymSlugs: ["gym-1", "gym-2", "gym-3"],
    },
    {
        slug: "ivan-mali-petrovic",
        name: 'Ivan "Mali" Petrović',
        role: "menadžer/trener",
        img: "/mali.jpg",
        desc: [
            "Ivan Petrović, poznatiji svima kao Mali, apsolvent je Fakulteta sporta i fizičkog vaspitanja u Beogradu i uskoro stiče zvanje diplomiranog profesora fizičkog vaspitanja.",
            'Svoj nadimak “Mali” nosi još iz ranih dana — bio je najmlađi u porodici, društvu, a jedno vreme i u trenerskom timu, pa je ime jednostavno ostalo.',
            "Ivan je još tokom priprema za upis na DIF pokazao izuzetnu posvećenost, disciplinu i potencijal. Ubrzo nakon toga pridružio se našem timu, najpre kroz saradnju u Školici plivanja, gde je pokazao izvanredno znanje, strpljenje i rad sa decom.",
            "Od samog početka bilo je jasno da poseduje veliku želju za učenjem i napredovanjem. Brzo je preuzeo odgovornost, pokazao liderske sposobnosti i danas obavlja ulogu direktora teretane u Ubu, gde vodi tim i brine o svakodnevnom funkcionisanju centra.",
            "Ivan je primer trenera koji ne prestaje da uči, stalno traži načine da unapredi svoj rad i svojim pristupom inspiriše sve koji treniraju sa njim.",
        ],
        instagram: "ivan_mali95",
        phone: "+381601234567",
        gymSlugs: ["gym-1"],
    },
    {
        slug: "milos-ivanovic",
        name: "Miloš Ivanović",
        role: "menadžer/trener",
        img: "/somi.jpg",
        desc: [
            "Miloš Ivanović, svima poznat kao Šomi, apsolvent je na Strukovnim studijama Fakulteta sporta i fizičkog vaspitanja u Beogradu i uskoro stiče zvanje diplomiranog profesora fizičkog vaspitanja.",
            'Od samog otvaranja naše teretane u Lajkovcu, Miloš je bio deo našeg tima i prolazio kroz obuku i pripreme za sve izazove koji ga čekaju u ovom poslu. Strpljivo je čekao svoju priliku, a kada ju je dobio — vrlo brzo ju je i opravdao. Zbog svoje predanosti, znanja i profesionalnog pristupa, ubrzo je preuzeo ulogu glavnog trenera i odgovornog lica u teretani u Lajkovcu, što među nama u šali zovemo – „direktor teretane“.',
            "Pored vrhunske opreme kojom raspolaže naša teretana u Lajkovcu, ova varošica je Šomijevim angažovanjem dobila i jednog istinskog stručnjaka u svetu fitnesa.",
            "Poznat je po svom pozitivnom duhu, šarmu i osmehu koji nikad ne skida s lica. Trening sa njim je uvek kombinacija ozbiljnog rada, dobre energije i prave motivacije. Uz dozu humora i sjajnu komunikaciju, Miloš iz svakog vežbača izvuče maksimum — i to na način da trening postane zadovoljstvo, a ne obaveza.",
            "Posetite našu teretanu u Lajkovcu i uverite se sami zašto je Šomi jedan od omiljenih trenera među našim članovima!",
        ],
        instagram: "somika_10",
        phone: "+381601234567",
        gymSlugs: ["gym-2"],
    },
    {
        slug: "stefan-markovic",
        name: "Stefan Marković",
        role: "trener",
        img: "/markec.jpg",
        desc: [
            "Stefan Marković, poznatiji kao Markec, apsolvent je na Fakultetu sporta i fizičkog vaspitanja u Beogradu, smer akademske studije, i uskoro stiče zvanje diplomiranog profesora fizičkog vaspitanja.",
            "Još tokom priprema za upis na DIF, koje je prošao upravo kod nas, pokazao je izuzetnu posvećenost, talenat i ozbiljan pristup. Već tada je bilo jasno da od njega možemo mnogo da očekujemo. Nakon upisa fakulteta, Stefan je odmah počeo da radi u Školici plivanja, gde je pokazao odlične pedagoške i trenerske sposobnosti.",
            "Tokom studija stekao je dragoceno iskustvo radeći u nekoliko teretana u Beogradu, a po završetku studija vratio se u svoj rodni kraj i pridružio našem timu i u radu sa rekreativcima i sportistima u Spartans Gymu.",
            "Stefana odlikuje izuzetna profesionalnost, disciplina i želja da svakom vežbaču pomogne da dostigne svoj maksimum. Njegov pristup je direktan i motivišući – od svakog očekuje 110%, ali treninge uvek vodi sa dozom humora i energijom koja podstiče.",
            "Trening sa Markecem je kombinacija ozbiljnog rada i dobre atmosfere – sa njim ćete dati sve od sebe, a nećete ni primetiti koliko ste napredovali.",
        ],
        instagram: "markec96",
        phone: "+381601234567",
        gymSlugs: ["gym-1"],
    },
    {
        slug: "zaklina-milanovic",
        name: "Žaklina Milanović",
        role: "nutricionista",
        img: "/zaca.jpg",
        desc: [
            "Žaklina Milanović, poznatija kao Žaca, master strukovni nutricionista-dijetetičar, diplomac Visoke zdravstvene škole strukovnih studija u Beogradu.",
            "Kao i mnogi članovi našeg tima, i Žaca je prvo bila deo naše zajednice kao vežbač. Nakon što je završila studije, saradnja se prirodno nastavila — i danas je ona zadužena za jedan od najvažnijih segmenata svake transformacije: ishranu.",
            "Žaca izrađuje individualne planove ishrane prilagođene ciljevima svakog vežbača, ali i osobama van naših fitnes centara koje žele stručnu pomoć u poboljšanju svojih navika i postizanju boljih rezultata.",
            "Na prvi pogled deluje nežno i dobroćudno, ali kada primeti da ne poštujete plan ishrane – zna i da bude stroga! Vedrog je duha, izuzetno posvećena svom poslu i uvek spremna da sasluša, posavetuje i pruži podršku na putu ka zdravijem načinu života.",
            "Zdrava ishrana je pola uspeha – a sa Žacom, ta polovina je u sigurnim rukama!",
        ],
        phone: "+381601234567",
        gymSlugs: [""],
    },
    {
        slug: "marija-blizanjac",
        name: "Marija Blizanjac",
        role: "trener",
        img: "/marija.jpg",
        desc: [
            "Druga dama našeg tima je Marija Blizanjac, diplomirani profesor razredne nastave sa Učiteljskog fakulteta u Beogradu i jedan od najomiljenijih pedagoga u svom okruženju.",
            "Iza sebe ima više od 25 godina aktivnog bavljenja folklorom, što je doprinelo njenoj izuzetnoj kondiciji, disciplini i energiji koju prenosi na sve oko sebe. Pored toga, radi kao animator na Superkampu i vodi dečje animacije na rođendanima, gde kroz igru i zabavu neguje sportski duh kod najmlađih.",
            "Saradnja sa našim timom započela je sasvim spontano — iz zajedničkih treninga proistekla je ideja da Mara postane deo našeg kolektiva, a to se pokazalo kao sjajna odluka.",
            'Danas je Mara zadužena za programe Školice sporta „Malci Tamnavci“ i funkcionalne treninge za decu uzrasta od 6 do 12 godina.',
            "Poznata je po svom osmehu, pozitivnoj energiji i izuzetnom pedagoškom pristupu. Kroz igru, zabavu i smeh, uspeva da inspiriše decu da daju svoj maksimum i da zavole fizičku aktivnost od najranijeg uzrasta.",
            "Sa Marom, svaki trening za decu postaje igra, a svaka igra – lekcija o zdravlju, disciplini i timskom duhu.",
        ],
        gymSlugs: ["gym-1"],
    },
];