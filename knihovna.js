

let kniha1 = document.getElementById("kniha1");
let kniha2 = document.getElementById("kniha2");
let kniha3 = document.getElementById("kniha3");
let kniha4 = document.getElementById("kniha4");
let kniha5 = document.getElementById("kniha5");
let special = document.getElementById("special");
const stůl = document.getElementById("stul");
const today = new Date();
const day = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();
const dayMonth = `${day}.${month}`;

document.getElementById("kniha1").onclick = function () {
    document.getElementById("stul").innerHTML = `<p>Byla jednou jedna dívka, která žila sama ve stavení na kraji vsi.
Byla milá, pracovitá a snivá — jen vařit… to jí opravdu nešlo. Co mohla, to spálila, a co nespálila, to přesolila. Polévky byly slanější než slzy a koláče tvrdší než kamení.
<br>
Jednoho dne se v kuchyni vztekala tak, že by ji slyšeli i za lesem. Těsto jí nevzešlo. Leželo tam, placaté a vzdorovité, a dívka mu vyčítala všechno možné, co jen srdce plné mouky dokáže.
<br>
A právě v tu chvíli šel kolem mladík.
<br>
Zastavil se u okna a pozoroval, jak dívka tápe mezi mísami a vařečkami. Nejdřív se zasmál a utrousil pár lehkých srandiček. Dívce to neuniklo.
<br>
„Když jsi tak chytrý,“ řekla mu s rukama v bok, „tak mi to ukaž!“
<br>
Mladík se pousmál, vkročil dovnitř a postavil se k plotně. Než začal, otočil se k ní a řekl:
„Ale za hubičku!“
<br>
Dívka se zasmála:<br>
„No tak třeba!“
<br>
A tak vařil.<br>
<br>
Dívka jen stála a zírala. Jeho ruce se pohybovaly jistě, koření sypal s citem, hrnce mu poslouchaly. Kuchyní se linuly vůně, jaké dívka nikdy nepoznala. A když bylo hotovo… byla z toho hostina, že by se ani král nestyděl.
<br>
„Kde ses to naučil?“ ptala se nevěřícně.
<br>
Mladík se poškrábal na hlavě a řekl:
„Na hradě. Ale vyhodili mě… prý jsem olizoval kostičky. A teď hledám, kde bych hlavu složil.“
<br>
Dívka se rozhlédla po chalupě.<br>
„Místa je tu dost,“ řekla. „A za tu hostinu… můžeš přespat.“
<br>
A ku podivu — nebo možná vůbec ne — mladík už se nikdy nepřesunul jinam.
Dívka se naučila vařit, on našel domov, a ve stavení na kraji vsi se od té doby vařilo s láskou, smíchem a občas i s hubičkou navíc.
<br>
A tak spolu žili.
Navždy.</p>`;
}
document.getElementById("kniha2").onclick = function () {
    document.getElementById("stul").innerHTML = `<p>Byl jednou jeden šílený vědátor.
Měl rozcuchané vlasy, kapsy plné šroubků a hlavu plnou fyziky. Lidé ho neměli moc rádi — mluvil příliš rychle, myslel příliš hluboko a místo pozdravu často mumlal něco o gravitaci. A tak se stáhl do ustraní, do starého domu na kraji města, kde mu společnost dělaly jen rovnice, ozubená kolečka a podivná udělátka, která cvakala, svítila a občas i pískala.
<br>
Vědátor byl sám… ale nebyl smutný... <br>
Měl totiž rád kočky.<br>

Jednoho dne, když zrovna sestavoval stroj, který měl měřit úsměv vesmíru, se dveřmi prosmýkl kocourek. Černobílý, s očima jako dvě zvědavé hvězdy. Vědátor se rozzářil víc než všechny jeho vynálezy dohromady. Kocourek se usadil mezi kabely, zamňoukal a bylo jasno — ten den se stal lepším.
<br>
A pak… zaklepání.
<br>
Za dveřmi stála slečna, trochu zadýchaná, s obavami i nadějí v očích. Hledala svého kocourka. Vědátor ji hned poznal — nejen podle kočky, ale i podle toho, jak se usmála, když ho spatřila. Pozval ji dál.
<br>
Slečna se rozhlížela po dílně plné udělátek, výmyslů a malých fyzikálních zázraků. Nelekla se. Naopak — oči jí zářily zvědavostí. Ptala se. Chtěla vědět, jak to funguje. Smála se, když některý stroj zadrnčel víc, než měl.
<br>
A vědátor?<br>
Poprvé měl pocit, že někomu opravdu patří to, co dělá.
<br>
Kocourek mezitím spokojeně přadl.
<br>
Od toho dne už nebyl vědátor sám. Měl vedle sebe slečnu, která viděla krásu v jeho šílenství, kocourka, který dohlížel na všechny pokusy, a domov plný smíchu, vynálezů a lásky.
<br>
A tak spolu žili šťastně…
až na věky.</p>`;
}
document.getElementById("kniha3").onclick = function () {
    document.getElementById("stul").innerHTML = `<p>U tichého jezera, kde se rákosí kolébalo ve větru a voda si pamatovala všechna tajemství světa, žila bílá labuť. Byla krásná, ale samotářská. Každý den plula po hladině a sledovala svůj odraz, jako by hledala něco, co tam chybělo.
<br>
Lidé kolem jezera říkali, že labuť kdysi bývala dívkou. Že mlčela, když měla mluvit, a snila, když měla zůstat při zemi. A tak ji kouzlo proměnilo — ne za trest, ale aby se mohla naučit čekat.
<br>
Jednoho večera, když se slunce ukládalo ke spánku, přišel k jezeru poutník. Nebyl hlučný ani pyšný. Jen se posadil na kámen a tiše pozoroval vodu. Labuť ho z dálky sledovala — něco na něm bylo jiné. Nechtěl ji chytit, ani zahnat. Jen byl.
<br>
Připlula blíž.
<br>
Poutník natáhl ruku a labuť se nebála. Každý večer se pak vracel. Povídal jí o světě, o cestách, o tichých radostech. A labuť naslouchala, i když nemohla mluvit.
<br>
Až jedné noci, když měsíc visel nízko nad vodou, labuť vystoupila na břeh… a proměnila se zpět v dívku. Kouzlo se zlomilo ne proto, že někdo něco dokázal — ale proto, že někdo zůstal.
<br>
Poutník ji poznal hned. Usmál se, jako by to věděl odjakživa.
<br>
Od té doby už u jezera neplula labuť sama.
A ti, kdo se tam zastavili, říkali, že když je večer ticho, voda se usmívá.
<br>
A tak žili.
V klidu.
A šťastně</p>`;
}
document.getElementById("kniha4").onclick = function () {
    document.getElementById("stul").innerHTML = `<p>Kdysi dávno, v hlubokém tichu vesmíru, žila planeta jménem Auria. Zářila klidným světlem a trpělivě obíhala svou hvězdu. Věděla, kde je její místo, a přesto cítila, že jí něco chybí.
<br>
A pak se objevila kometa.
<br>
Jmenovala se Luma a letěla vesmírem divoce a svobodně. Nikde se nezdržela dlouho, nikde nezůstávala. Nesla s sebou stopu světla a příběhy ze vzdálených koutů vesmíru, o kterých Auria jen snila.
<br>
Když se jejich dráhy poprvé protnuly, čas se zpomalil. Luma proletěla kolem Aurie a na okamžik ji pohladila svým světlem. Bylo to krátké — ale nezapomenutelné.
<br>
„Jaké to je,“ ptala se Auria, „letět bez cíle?“<br>
„Jaké to je,“ odpověděla Luma, „mít domov?“
<br>
A pokaždé, když se Luma vracela, vyprávěla Aurií o hvězdách, mlhovinách a tichu mezi světy. Auria jí na oplátku nabízela klid, teplo a jistotu, kam se může vrátit.
<br>
Jednoho dne si vesmír všiml jejich touhy. A i když nemohl změnit jejich dráhy navždy, dovolil jim setkávat se znovu a znovu. Ne navždy spolu — ale navždy si patřit v těch vzácných chvílích.
<br>
A tak se planeta naučila čekat a kometa zpomalit.
A vesmír pochopil, že i krátká setkání mohou trvat věčně.
<br>
A od té doby, kdykoli na noční obloze zahlédneš kometu, říká se, že se Luma vrací domů — alespoň na chvíli.</p>`;
}
document.getElementById("kniha5").onclick = function () {
    document.getElementById("stul").innerHTML = `<p>V hluboké řece, kde voda šeptala staré písně a proud skrýval dávná tajemství, žila siréna. Byla krásná a nebezpečná. Po staletí lákala muže svým hlasem, svými vlasy i slibem lásky — a řeka si je pak brala k sobě navždy.
<br>
Tak to bylo vždy.
Až do jedné noci.
<br>
Tehdy k řece přišel muž jiný než ostatní. Nesl v sobě klid a bolest, ale žádnou pýchu. Když uslyšel zpěv sirény, nezatoužil po ní. Zastavil se a naslouchal, jako by slyšel smutek, ne vábení.
<br>
Siréna ho spatřila… a její píseň se zlomila.
<br>
Viděla jeho srdce — čisté, otevřené, plné lásky, kterou nikdy nechtěl brát, jen dávat. Poprvé v životě siréna nezpívala proto, aby zničila. Zpívala, aby chránila.
<br>
Vystoupila z vody a varovala ho před proudem, před kameny i temnotou pod hladinou. Ušetřila ho smrti i bolesti, i když tím porušila všechna pravidla svého druhu.
<br>
A když se jejich pohledy setkaly, věděla, že už nikdy nebude stejná.
<br>
Od té noci siréna přestala lákat muže do záhuby. Její hlas se změnil — stal se písní ochrany. Hlídala řeku, aby nikomu neublížila, a čekala. Ne na návrat toho muže… ale na naději, kterou v ní probudil.
<br>
Říká se, že dodnes, když je noc klidná a voda se třpytí, siréna zpívá tiše. Ne proto, aby někoho stáhla pod hladinu — ale proto, aby svět nezapomněl, že i bytosti zrozené z temnoty mohou milovat.
<br>
A že někdy stačí jedno čisté srdce, aby změnilo celý osud.</p> `;
}
switch (dayMonth) {
    case "14.2":
        document.getElementById("special").onclick = function () {
            document.getElementById("stul").innerHTML = `<p>
        Tak ti přeji velice krásného Valentýna.. Já vím, že tohle není kniha.. ani příběh..<br>
        Jen chci, abys věděl, že na tebe myslím.. Já si ráda vzpomínám na prvního Valentýna, kdy jsem ti dala největší dáreček.. a to bylo, že jsme se viděli <3 <br>
        Moc tě miluji</p>`;
        }
        break;
    case "8.3":
        document.getElementById("special").onclick = function () {
            document.getElementById("stul").innerHTML = `<p>
        Já vím, že tohle měl být tvůj dárek k valentýnu, ale nakonec jsi na valentýna dostal mě. <br>
        Co víc by sis přál, že? Určitě sis už říkal, že tohle už prostě nikdy nikdy neuvidíš... Ale neee <br>
        Já ti to dám alespoň teď.. Už jen, abys věděl, že na tebe nekašlu.. <br>
        Myslím na tebe, miluju tě.. I když to tak nevypadá občas..<br>
        Kdyby tě to náhodou zajímalo, zrovna teď mi tady vedle povídáš, jestli jsem šťastná a spokojená, že si dělám tady svoje věci
        a ty na mě koukáš jen..<br>
        Já ti nechci říkat , že tohle dělám pro tebe.. tak holt chvíli budu kráva no..  bůůů!</p>`;
        }
        break;
    case "24.12":
        document.getElementById("special").onclick = function () {
            document.getElementById("stul").innerHTML = `<p>
        Šťastný a Veselý Vánoce! Možná ti ještě vymyslím nějakou tu pohádku</p>`;
        }
        break;
    default:
        document.getElementById("special").onclick = function () {
            document.getElementById("stul").innerHTML = `<p>
        Pro dnešek tu není nic připraveného.. zkus to jindy..</p>`;
        }
}