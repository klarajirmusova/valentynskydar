const prani = [
    "Nechť je tvůj dnešní den krásný tak, jak je můj život krásný od chvíle, co jsem tě potkala!",
    "Od nejhlubšího místa v oceánu, až k Plutu a zpět - miluju tě ještě 4krát tolik, a to až na 100 let!",
    "Až zhasnou všechny hvězdičky na nebi, tak já nebudu smutná. Jelikož dokud dýcháš, tak pro mne ještě září jedna.",
    "Ani na nebi není tolik hvězd, ani není na Zemi tolik zrnek písku, aby se rovnali tomu jak často na tebe myslím a chybíš mi!",
    "Přes všechno počasí, bouře, deště, zimu, kroupy - mé sluníčko nezachází, jelikož to jsi ty!",
    "Copak je roztomilé, krásné, hodné, blbé, otravné a já to strašně miluji? Ano ty!",
    "Celý svět bych prošla, celá staletí bych tě marně očekávala... jen abych tě mohla milovat znova v každém mém příštím životě!",
    "Nejkoulinkatější kulička je nic proti mému nejňuňínkovatěnějšímu čumáčkovi!",
    "Miluješ mě vůbec? Protože já tebe strašně strašně moc lásko má!",
    "Omlouvám se ti, že jsem na tebe občas zlá :(",
    "Moje nejoblíbenější činnost je svádět na tebe věci za které nemůžeš!",
    "Věděl jsi, že když chvíli nemyslíš, je to jako bys byl mnou?",
    "Jsem hrozně vděčná, že jsem si tě našla!",
    "ABCDEFG, kam se na tebe jiný hrabe..",
    "Kdybys byl moucha nechala bych tě žít a mlela si ruce s tebou!",
    "Kdybys byl můra tak bys bourec morušový, bo jsi hedvábný borec",
    "Jsem tvá jitřenka, ale kdo jsi ty na noční obloze?",
    "Jsi moje nejoblíbenější každodenní radost!",
    "S tebou je obyčejný den ten nejlepší!",
    "Miluji tě víc než ranní kávu. A to je co říct!",
    "Domov není místo, ale jsi to ty!",
    "Děkuji, že jsi.. prostě jen tak",
    "Každý den s tebou je důvod se usmívat",
    "Kdybych si tě měla vybrat znovu, vyberu si tě ještě rychleji!",
    "Můj svět dává smysl, když jsi v něm ty!",
    "Láska? to jsi ty!",
    "Oficiálně potvrzuji: Jsi nejlepší!",
    "Mám tě ráda dnes, zítra... a pak furt vlastně",
    "Ukradla bych pro tebe cokoliv co bych ti na očích viděla",
    "Hodim minci - bum magicky se objevíš! jsi žid!"
];

const min = 0;
const max = prani.length;
let randomPrani;

let ukazPrani = document.getElementById("zobrazprani");

ukazPrani.onclick = function () {
    const randomIndex = Math.floor(Math.random() * prani.length);
    document.getElementById("prani").textContent = prani[randomIndex];
};


const tl = gsap.timeline({paused: true});
tl.to("#tv", {
    backgroundPosition: "-8192px 0px",
    duration:8,
    repeat: 0,
    ease: "steps(32)"
});

document.querySelector(".btn").addEventListener("click", () => {
    tl.restart();
});

console.log(gsap);

const today = new Date();
const day = today.getDate();
const month = today.getMonth() +1;
const year = today.getFullYear();
const dayMonth = `${day}.${month}`;

document.getElementById("rok").textContent = `${year}`;
document.getElementById("den").textContent = `${day}.${month}.`;


console.log(typeof dayMonth);
switch(dayMonth) {
    case "1.1":
        document.getElementById("specialday").textContent = 
        `Šťastný a Veselý Nový Rok, nechť se daří!`;
        break;
    case "4.2":
        document.getElementById("specialday").innerHTML = 
        `V tento den se zrodilo toto <img src="novaanim/calendar.png">`;
        break;
    case "11.2":
        document.getElementById("specialday").textContent = 
        `!!Klárka má narozeniny!!`;
        break;    
    case "14.2":
        document.getElementById("specialday").textContent = 
        `Přeji ti krásného Valentýna miláčku můj`;
        break;
    case "8.3":
        document.getElementById("specialday").textContent = 
        `Všechno nejlepší k narozeninám Lukáši!`;
        break;
    case "14.3":
        document.getElementById("specialday").textContent = 
            `V tento den roku 1879 se narodil slavný fyzik Albert Einstein`;
            break;
    case "8.4":        
            document.getElementById("specialday").textContent = 
        `V tento den se fenka jménem Smoky stala válečným hrdinou. Pomáhala vojákům během války tím, že protáhla komunikační drát přes 20 metrů dlouhou a velmi úzkou trubku.`;
        break;
    case "18.4":        
            document.getElementById("specialday").textContent = 
        `V tento den umřel slavný fyzik Albert Einstein`;
        break;
    case "6.6":        
            document.getElementById("specialday").textContent = 
        `V tento den proběhlo "Vylodění v Normandii"`;
        break;
    case "18.7":        
            document.getElementById("specialday").textContent = 
        `V tento den byl zvolen kocour jménem Stubbs čestným starostou mestečka Talkeetna na Aljašce.`;
        break;
    case "21.8":        
            document.getElementById("specialday").textContent = 
        `V tento den se zrodil Medvídek Pú`;
        break;
    case "27.8":        
            document.getElementById("specialday").textContent = 
        `V tento den proběhla ta nejkratší válka v dějinách, trvala 38 minut a proběhla mezi Británií a Zanzibarem, který se vzdal`;
        break;
    case "28.10":        
            document.getElementById("specialday").textContent = 
        `V tento den vzniklo Československo`;
        break;
    case "15.11":        
            document.getElementById("specialday").textContent = 
        `V tento den proběhla válka o dřevěný kbelík, která trvala celých 12 let. Vojáci z Modeny ukradli z Bologni dubové vědro. Výsledek? Tísíce mrtvých a vědro mají v Modeně na radnici dodnes jako trofej`;
        break;
    case "25.11":
        document.getElementById("specialday").textContent = 
        `V tento den Einstein představil rovnice gravitačního pole. Gravitace už není síla, ale zakřivení časoprostoru.`;
        break;
    case "5.12":
        document.getElementById("specialday").textContent = 
        `V tento den se narodil Levy Rozman aka GothamChess`;
        break;
    case "24.12":
        document.getElementById("specialday").textContent = 
        `Z celého srdce přeji Šťastné a Veselé Vánoce`;
        break;
    case "31.12":
        document.getElementById("specialday").textContent = 
        `Šťastný a spokojený Nový Rok`;
        break;
    default:
        document.getElementById("specialday").textContent = `Dnes se neděje nic specialního`;
}



