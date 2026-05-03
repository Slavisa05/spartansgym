import ServiceCard from "@/components/ui/ServiceCard"
import CTASection from "@/components/shared/CtaSection"

export default function Services() {
    return(
        <main>
            <section className="px-[5vw] pt-[30vh] pb-10 min-h-screen w-full">
                <div className="grid md:grid-cols-3 gap-8">
                    <ServiceCard 
                        title="Personalni trening"
                        desc="Naši personalni treninzi su prilagođeni vašim ciljevima, nivou kondicije i tempu napretka. Trenirajte sa iskusnim trenerom koji prati svaki vaš korak i motiviše vas da postignete maksimum."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Personalni trening je najefikasniji način da dostigneš svoje ciljeve — bilo da želiš da smršaš, dobiješ mišićnu masu, poboljšaš kondiciju ili jednostavno uvedeš više discipline u svoj životni stil. Svaki trening je prilagođen isključivo tebi, tvojim mogućnostima i ciljevima.",
                            "Uz stalnu podršku i praćenje stručnog trenera, naučićeš pravilnu tehniku izvođenja vežbi, izbeći povrede i ostvariti maksimum rezultata u najkraćem mogućem roku.",
                            "Personalni trener je tu ne samo da te vodi kroz trening, već i da te motiviše, koriguje i usmeri ka trajnim promenama — kako u telu, tako i u glavi."
                        ]}
                        time="60"
                        price="1500"
                        perTraining={true}
                    />

                    <ServiceCard 
                        title="Kondiciona priprema sportista"
                        desc="Naša kondiciona priprema sportista osmišljena je da odgovori na specifične zahtjeve vašeg sporta, nivoa forme i takmičarskog kalendara. Radite sa stručnjacima koji prate svaki detalj vašeg razvoja, optimizuju vašu snagu, izdržljivost i brzinu, i vode vas ka vrhunskoj formi onda kada je najpotrebnije"
                        img="/gym1.jpg"
                        paragraphs={[
                            "Kondiciona priprema sportista donosi vrhunsku energiju, zajednički rad i takmičarski duh koji podstiče maksimalan napredak. Treninzi su osmišljeni tako da razvijaju snagu, izdržljivost, agilnost i eksplozivnost — ključne komponente svakog uspešnog sportiste.",
                            "Rad u grupi stvara atmosferu koja motiviše, pojačava fokus i podiže intenzitet na viši nivo. Svaki trening vodi stručan kondicioni trener koji prati tehniku, tempira opterećenje i usmerava svakog sportistu prema individualnom maksimumu.",
                            "Bez obzira na sport kojim se baviš, grupni kondicioni treninzi ti pomažu da gradiš telo koje izdržava napor, reaguje brzo i ostaje stabilno do poslednje sekunde utakmice. Treniraj pametno, intenzivno i u timu koji te gura napred."
                        ]}
                        time="60"
                        price="700"
                        perTraining={true}
                    />

                    <ServiceCard 
                        title="Vođeni trening"
                        desc="Pridružite se dinamičnim vođenim treninzima i uživajte u motivaciji zajednice. Od kardio treninga do funkcionalnog vežbanja, svaki čas je prilika za zabavu i napredak.."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Vođeni trening je savršen izbor za sve koji vole dobru energiju, motivaciju i zajednički rad. Vežbanje u grupi donosi posebnu atmosferu koja inspiriše i podstiče da iz sebe izvučeš maksimum, bez obzira na nivo fizičke spreme.",
                            "Treninzi su dinamični, raznovrsni i osmišljeni tako da aktiviraju celo telo, poboljšaju kondiciju i povećaju snagu. Svaki čas vodi stručan trener koji pazi na pravilno izvođenje vežbi i motiviše te tokom celog treninga.",
                            "Ako ti nedostaje volje da treniraš sam, grupni trening je pravo rešenje — energija tima pokreće, a rezultati dolaze brže nego što misliš!"
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title='Školica sporta "Malci Tamnavci"'
                        desc="Pridružite se školici sporta “Malci Tamnavci” i omogućite deci da kroz igru razvijaju veštine, samopouzdanje i ljubav prema fizičkoj aktivnosti."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Školica sporta „Malci Tamnavci“ je idealno mesto gde najmlađi kroz igru i zabavu uče osnovne sportske veštine i razvijaju zdrav odnos prema fizičkoj aktivnosti. Program je prilagođen uzrastu i mogućnostima dece, sa ciljem da se kroz raznovrsne aktivnosti poboljša motorika, koordinacija i timski duh.",
                            "Stručni treneri vode decu kroz igre i vežbe koje podstiču njihovu radoznalost, samopouzdanje i ljubav prema sportu. Uz pažljivo osmišljene treninge, deca ne samo da uče pravilne pokrete već i razvijaju socijalne veštine, saradnju i zdrav stil života.",
                            "Naš cilj je da svaki mali sportista iz školice izađe motivisan, srećan i spreman za dalje sportske izazove — uz osmeh i puno dobre energije!"
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Dečija gimnastika"
                        desc="Razvijanje tela kroz igru i pokret! Dečija gimnastika pomaže mališanima da ojačaju telo, poboljšaju koordinaciju i steknu poverenje u svoje sposobnosti – uz osmeh i zabavu!"
                        img="/gym1.jpg"
                        paragraphs={[
                            "Dečija gimnastika je sjajan način da najmlađi kroz igru i strukturisane vežbe razvijaju snagu, fleksibilnost i pravilno držanje. Program je prilagođen uzrastu i sposobnostima dece, a cilj je da mališani kroz zanimljive i bezbedne aktivnosti steknu osnovne gimnastičke veštine.",
                            "Pod stručnim vođstvom trenera, deca uče pravilnu tehniku izvođenja vežbi, razvijaju koordinaciju i ravnotežu, a istovremeno jačaju telo i samopouzdanje. Vežbe su osmišljene tako da podstiču razvoj motorike i mentalne fokusiranosti, uz puno zabave i igre.",
                            "Cilj je da svaki mali gimnastičar kroz časove oseti radost pokreta, izgradi zdrav odnos prema vežbanju i pripremi se za dalje sportske izazove u sigurnom i podržavajućem okruženju."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Školica plivanja"
                        desc="Sigurni u vodi, snažni kroz igru! Školica plivanja pomaže deci da razviju plivačke veštine, samopouzdanje i ljubav prema vodi – kroz zabavu i pažljivo vođene treninge."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Školica plivanja je idealno mesto gde deca kroz igru i stručno vođene treninge uče osnovne plivačke tehnike i razvijaju sigurnost u vodi. Program je prilagođen uzrastu i sposobnostima svakog mališana, sa ciljem da kroz zabavu i pravilnu tehniku deca steknu samopouzdanje i ljubav prema plivanju.",
                            "Pod budnim okom iskusnih trenera, deca savladavaju prve zaveslaje, uče pravilno disanje i bezbedno kretanje u vodi. Treninzi su osmišljeni da budu zabavni, ali i edukativni, kako bi mališani napredovali svojim tempom i sa radošću dolazili na časove.",
                            "Naš cilj je da svako dete izađe iz školice spremno za dalje plivačke izazove, sigurno u vodi i sa osmehom na licu, dok razvija zdrav i aktivan stil života."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Korekcija telesnih deformiteta"
                        desc="Pridružite se programu korektivnog vežbanja i radite na ispravljanju telesnih deformiteta, poboljšanju posture i svakodnevnog funkcionisanja – za decu i odrasle."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Program korekcije telesnih deformiteta osmišljen je da pomogne deci i odraslima da kroz stručno vođene vežbe isprave nepravilnosti u držanju i telesnoj strukturi. Svaki plan treninga prilagođavamo individualnim potrebama, uzimajući u obzir uzrast, stepen deformiteta i fizičke mogućnosti.",
                            "Pod nadzorom stručnog tima, naučićete pravilne pokrete i tehnike koje će pomoći u ublažavanju bolova, poboljšanju posture i sprečavanju daljeg napredovanja deformiteta. Vežbe su osmišljene tako da budu bezbedne, efikasne i prilagođene vašem tempu i mogućnostima.",
                            "Naš cilj je da vam pomognemo da povratite ravnotežu tela, povećate funkcionalnost i unapredite kvalitet života – bez obzira na godine i nivo fizičke spreme."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Oporavak povrede"
                        desc="Vratite se svakodnevnim aktivnostima bez bola. Program oporavka od povreda osmišljen je uz stručno vođstvo kako bi se ubrzala rehabilitacija, povratila snaga i sprečile nove povrede – bez obzira na uzrast i nivo aktivnosti."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Program oporavka od povrede osmišljen je da vam pomogne da se što brže i bezbednije vratite svakodnevnim aktivnostima i treningu. Bez obzira na vrstu i stepen povrede, svaki plan prilagođavamo vašim potrebama i fazi rehabilitacije, uz podršku stručnog tima.",
                            "Kroz pažljivo vođene vežbe i postupke, radićete na povratku snage, pokretljivosti i funkcionalnosti oštećenih delova tela, uz minimalan rizik od ponovnog povređivanja. Naš cilj je da vam omogućimo potpuni oporavak i vraćanje na željeni nivo aktivnosti, bilo da se bavite sportom ili samo želite da se osećate bolje u svakodnevnom životu.",
                            "Stručni treneri su uz vas u svakom koraku, prateći napredak, motivišući vas i prilagođavajući program kako biste što pre postigli željene rezultate."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Pripreme za upis na DIF, KPU..."
                        desc="Pridružite se pripremama za DIF, KPU i druge fakultete i uz ciljane treninge povećajte šanse za uspešan prijemni i upis željenog smera."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Pripreme za upis na DIF, KPU i druge sportske fakultete osmišljene su da ti pomognu da sa sigurnošću i spremnošću pristupiš prijemnim ispitima. Kroz ciljane treninge usavršavaš motoričke sposobnosti, tehniku i kondiciju, prilagođene zahtevima konkretnih testova i tvojim trenutnim sposobnostima.",
                            "Pod stručnim vođstvom trenera koji poznaju program i standarde prijemnih ispita, radićeš na poboljšanju izdržljivosti, brzine, snage i koordinacije – ali i na mentalnoj spremnosti, kako bi na dan ispita bio maksimalno koncentrisan i samouveren.",
                            "Naš cilj je da te pripremimo da sa uspehom savladaš sve prepreke i ostvariš željeni upis, uz podršku i motivaciju tokom celog procesa."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Individualni plan ishrane"
                        desc="Jedite pametno – prema svom cilju i ritmu života. Individualni plan ishrane prilagođen je vašim ciljevima, navikama i zdravstvenom stanju, uz stručno vođstvo za postizanje dugoročnih rezultata."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Individualni plan ishrane kreiran je da ti pomogne da postigneš svoje ciljeve – bilo da želiš da smršaš, dobiješ mišićnu masu, poboljšaš energiju ili jednostavno uspostaviš zdravije navike. Plan je prilagođen tvom životnom stilu, preferencijama i zdravstvenom stanju, kako bi rezultati bili dugoročni i održivi.",
                            "Uz stručnu podršku nutricioniste, naučićeš kako pravilno kombinovati namirnice, pratiti unos i prilagođavati ishranu bez odricanja. Individualni pristup omogućava ti fleksibilnost, motivaciju i jasne smernice ka zdravijem načinu života.",
                            "Naš cilj je da ti pomognemo da hrana postane saveznik u ostvarivanju tvog potencijala i da kroz edukaciju uspostaviš balans koji traje."
                        ]}
                        price="4500"
                    />

                    <ServiceCard 
                        title="Joga"
                        desc="Pridružite se časovima joge i oslobodite telo od napetosti, um od stresa, a dah uskladite s pokretom – u prijatnom i podržavajućem okruženju."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Joga je idealan način da pronađeš ravnotežu između tela i uma, bez obzira na nivo tvoje fizičke spreme ili prethodno iskustvo. Kroz vođene časove učiš tehnike disanja, istezanja i snage koje pomažu da oslobodiš napetost, poboljšaš fleksibilnost i ojačaš mišiće.",
                            "Pod stručnim vođstvom instruktora, svaki čas je prilika da se opustiš, fokusiraš i oslobodiš stresa, dok istovremeno radiš na svojoj kondiciji i unutrašnjem miru. Joga nije samo trening tela, već i put ka boljoj povezanosti sa sobom.",
                            "Naš cilj je da ti pomognemo da kroz redovne časove joge izgradiš snažnije telo i smireniji duh, u prijatnom i podržavajućem okruženju."
                        ]}
                        time="60"
                        price="4500"
                    />

                    <ServiceCard 
                        title="Pilates"
                        desc="Ojačajte telo i poboljšajte držanje uz pilates. Kroz kontrolisane vežbe pilatesa razvijajte snagu, fleksibilnost i stabilnost – idealno za sve nivoe i uzraste."
                        img="/gym1.jpg"
                        paragraphs={[
                            "Pilates je efikasan način da ojačaš telo, poboljšaš držanje i povećaš fleksibilnost, bez obzira na nivo tvoje kondicije. Kroz precizne i kontrolisane pokrete učiš kako da aktiviraš duboke mišiće trupa, što doprinosi stabilnosti i ravnoteži tela.",
                            "Pod stručnim vođstvom instruktora, svaki trening je prilika da oslobodiš napetost, povećaš snagu i energiju, ali i da smanjiš rizik od povreda kroz pravilnu tehniku izvođenja vežbi. Pilates je idealan za sve uzraste i nivoe, kao i za one koji traže podršku u rehabilitaciji.",
                            "Naš cilj je da ti pomognemo da kroz redovne časove pilatesa izgradiš funkcionalno telo koje je snažno, pokretno i otporno na svakodnevne izazove."
                        ]}
                        time="60"
                        price="4500"
                    />
                </div>
            </section>

            <CTASection title="Želite da krenete na neki program?" />
        </main>
    )
}