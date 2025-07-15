// Uppdatera footern till senaste datum en uppdatering gjordes
document.getElementById("last-updated").textContent = document.lastModified.split(' ')[0];




 // Frågor, svar, alternativ, förklaringar och bilder

const frågor = [
  {
    kategori: "POLITIK",
    fråga: "Vilket parti är störst bland de inkomstgrupper som tjänar över genomsnittet?",
    korrekt: "Socialdemokraterna",
    alternativ: [
      "Socialdemokraterna",
      "Moderaterna",
      "Sverigedemokraterna",
      "Miljöpartiet"
    ],
    förklaring: "Socialdemokraterna är det dominerande partiet bland såväl fattiga som rika, även om fördelningen är likvärdig mellan Socialdemokraterna och Moderaterna i den högsta inkomstgruppen.",
    bild: '<iframe src="images/partisympatier_inkomst.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "POLITIK",
    fråga: "Hur många av riksdagspartierna har fler kvinnliga än manliga kommunalt förtroendevalda?",
    korrekt: "Två",
    alternativ: [
      "Ett",
      "Två",
      "Tre",
      "Fyra"
    ],
    förklaring: "Två partier, Miljöpartiet och Vänsterpartiet, har fler kvinnliga än manliga kommunalt förtroendevalda under mandatperioden 2023-2026, vilket är de enda partier där detta hänt sedan statistik började föras 2007. Totalt sett har andelen kvinnliga kommunalt förtroendevalda legat stabilt på strax över 40 procent.",
    bild: '<iframe src="images/förtroendevalda_kön.html" class="iframe" frameborder="0"></iframe>'
  },
{
    kategori: "FAMILJ",
    fråga: "Hur ser barnafödandet per kvinna ut i Sverige idag jämfört med 1900?",
    korrekt: "Det har minskat med två tredjedelar",
    alternativ: [
      "Det har inte förändrats",
      "Det har minskat med en tredjedel",
      "Det har halverats",
      "Det har minskat med två tredjedelar"
    ],
    förklaring: "Även om barnafödandet minskat över hela denna tidsperiod ser man att trenden från år till år kan fluktuera kraftigt. Det är även värt att notera att spädbarnsdödligheten och död under de första levnadsåren har minskat kraftigt under samma tidsperiod.",
    bild: '<iframe src="images/barnafödande_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Detta är en trend som man kan se globalt sett också, där rikare länder tenderar ha lägre barnafödande. Den globala populationstillväxten har mer än halverats under de senaste 60 åren.",
    bild2: '<iframe src="images/barnafödande.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "FAMILJ",
    fråga: "Hur har medelåldern för kvinnors första giftermål förändrats under de senaste 30 åren?",
    korrekt: "Den har ökat med sju år",
    alternativ: [
      "Den har minskat med tre år",
      "Den har inte förändrats",
      "Den har ökat med tre år",
      "Den har ökat med sju år"
    ],
    förklaring: "Mellan 1990 och 2021 ökade genomsnittsåldern för kvinnors första giftermål med 25 procent, vilket uppgår till ca. 7 år.",
    bild: '<iframe src="images/ålder_giftermål_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "När OECD undersökt denna trend för alla OECD-länder kan man notera att denna trend sker i samtliga länder. Sverige är dock, tillsammans med Spanien, det OECD-land med högst genomsnittsålder för kvinnors första giftermål.",
    bild2: '<iframe src="images/ålder_giftermål.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "FAMILJ",
    fråga: "Hur stor andel av Sveriges hushåll är singelhushåll?",
    korrekt: "Ungefär 40 procent",
    alternativ: [
      "Ungefär 20 procent",
      "Ungefär 30 procent",
      "Ungefär 40 procent",
      "Ungefär 50 procent"
    ],
    förklaring: "Mellan 2004-2018 låg andelen singelhushåll i Sverige stabilt på strax över 40 procent.",
    bild: '<iframe src="images/singelhushåll_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Globalt sett är denna trend något uppåtgående generellt. De nordiska länderna är de länder med högst andel singelhushåll i världen, där Norge, Danmark, Finland och Sverige ligger i toppen.",
    bild2: '<iframe src="images/singelhushåll.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "MÅENDE",
    fråga: "Vart befinner sig Sverige globalt sett gällande livstillfredställelse?",
    korrekt: "Mellan plats 1-5",
    alternativ: [
      "Mellan plats 1-5",
      "Mellan plats 6-10",
      "Mellan plats 11-15",
      "Mellan plats 16-20"
    ],
    förklaring: "2024 var Finland, Danmark, Island, Sverige och Nederländerna de fem länder som hade högst livstillfredställelse. Sverige har befunnit sig i toppen sedan den första mätningen 2011.",
    bild: '<iframe src="images/satisfaction.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Att Sverige är ett rikt land är sannolikt en starkt bidragande faktor till detta, då det finns en tydlig korrelation mellan länders GDP och livstillfredställelse",
    bild2: '<iframe src="images/gdp_satisfaction.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "MÅENDE",
    fråga: "Hur har antalet suicidfall i Sverige förändrats sedan 1950?",
    korrekt: "Det har minskat med en tredjedel",
    alternativ: [
      "Det har ökat med två tredjedelar",
      "Det har ökat med en tredjedel",
      "Det har minskat med en tredjedel",
      "Det har minskat med två tredjedelar"
    ],
    förklaring: "Sedan 1950 har antalet suicidfall minskat från ca. 15 fall per 100 000 invånare till ca. 10 fall per 100 000 invånare. Denna trend noteras i alla åldersgrupper, även om den inte är lika tydlig i åldersgruppen 15-24 år.",
    bild: '<iframe src="images/suicid_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Ur en internationell synvinkel ligger Sverige i den övre halvan av länderna i världen gällande suicid, men det finns några länder som har betydligt högre suicidfrekvens än Sverige.",
    bild2: '<iframe src="images/suicid.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "MÅENDE",
    fråga: "Vilka är de två klart vanligaste uppskattade orsakerna till dödsfall i Sverige?",
    korrekt: "Kardiovaskulära sjukdomar och cancer",
    alternativ: [
      "Neurologiska sjukdomar och luftvägsinfektioner/tuberkulos",
      "Kardiovaskulära sjukdomar och cancer",
      "Luftvägsinfektioner/tuberkulos och kroniska luftvägssjukdomar",
      "Cancer och neurologiska sjukdomar"
    ],
    förklaring: "Utifrån 21 olika kategoriseringar uppskattades dessa två stå för nästan 60 procent av dödsfallen i Sverige under 2021. Nedan visas de fem vanligaste kategoriseringarna.",
    bild: '<iframe src="images/dödsorsaker_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Vilka dödsorsaker som är vanligast, och till vilken magnitud dessa sjukdomar leder till död, skiljer sig mycket åt beroende på länders välstånd. Kardiovaskulära sjukdomar och cancer är bland de vanligaste dödsorsakerna även i länder med lägre välstånd (mätt i Social Development Index, SDI), men luftvägsinfektioner och tuberkulos är vanligast.",
    bild2: '<iframe src="images/dödsorsaker_sverige_lowsdi.html" class="iframe" frameborder="0"></iframe>'
  },
 {
    kategori: "EKONOMI",
    fråga: "Hur står sig Sveriges GDP per capita jämfört med för 100 år sedan?",
    korrekt: "Den har nästan niodubblats",
    alternativ: [
      "Den är i stort sett oförändrat",
      "Den har nästan tredubblats",
      "Den har nästan sexdubblats",
      "Den har nästan niodubblats"
    ],
    förklaring: "Enligt estimeringar från Madisson Project var Sveriges GDP per capita i stort sett oförändrad fram till industrialiseringen på 1870-talet, då den ökade dramatiskt. Ökningen har varit särskilt kraftig sedan efterkrigstiden.",
    bild: '<iframe src="images/gdp_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Denna trend har vi sett i stora drag globalt, även om det finns länder som inte har noterat denna uppåtgående trend.",
    bild2: '<iframe src="images/gdp.html" class="iframe" frameborder="0"></iframe>'
  },
 {
    kategori: "EKONOMI",
    fråga: "Gini-koefficienten är ett mått på ojämlikhet i inkomstfördelning på en skala mellan 0 och 1, där en högre siffra innebär större ojämlikhet. Hur har Gini-koefficienten i Sverige förändrats sedan 1975?",
    korrekt: "Den har ökat med över 20 procent",
    alternativ: [
      "Den är i stort sett oförändrat",
      "Den har ökat med över 20 procent",
      "Den har ökat med över 40 procent",
      "Den har ökat med över 60 procent"
    ],
    förklaring: "Gini-koefficienten har ökat i stadig takt sedan 1975, vilket innebär att de totala inkomsterna koncentrerats till en mindre andel av befolkningen.",
    bild: '<iframe src="images/gini_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Ur ett internationellt hänseende har Sverige förhållandevis jämlika inkomster. Värt att tillägga är att Gini-koefficienten inte tar hänsyn till de omfördelande effekter som offentligt finansierad välfärd innebär, där det finns stora skillnader mellan länder. Den tar inte heller hänsyn till förmögenheter, vilket innebär att Sveriges omfattande pensionssystem faller bort från siffrorna.",
    bild2: '<iframe src="images/gini.html" class="iframe" frameborder="0"></iframe>'
  },
 {
    kategori: "EKONOMI",
    fråga: "Hur stor andel av Sveriges BNP utgör statliga utgifter?",
    korrekt: "Ungefär 50 procent",
    alternativ: [
      "Ungefär 10 procent",
      "Ungefär 30 procent",
      "Ungefär 50 procent",
      "Ungefär 70 procent"
    ],
    förklaring: "Sedan mitten på 30-talet har vi sett en ökning av statliga utgifter som andel av BNP, med en extrem topp under finanskrisen i början av 90-talet.",
    bild: '<iframe src="images/statligautgifter_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Internationellt sett har vi sett liknande trender, men jämfört med övriga länder har Sverige gått från att ha relativt låga statliga utgifter i förhållande till GDP till att ligga i toppskiktet.",
    bild2: '<iframe src="images/statligautgifter.html" class="iframe" frameborder="0"></iframe>'
  },
 {
    kategori: "EKONOMI",
    fråga: "Vilken kostnadspost utgör störst andel av Sveriges statliga utgifter?",
    korrekt: "Socialt skydd (stöd till sjuka, funktionsnedsatta, arbetslösa, pensionärer etc.)",
    alternativ: [
      "Hälso- och sjukvård",
      "Allmän ordning och säkerhet",
      "Utbildning",
      "Socialt skydd (stöd till sjuka, funktionsnedsatta, arbetslösa, pensionärer etc.)"
    ],
    förklaring: "Socialt skydd utgör med råge den största kostnadsposten i Sveriges statliga utgifter, där Sveriges omfattande pensionssystem är en stor del av posten.",
    bild: '<iframe src="images/statligautgifter_fördelning_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "För OECD-länderna i stort är fortfarande socialt skydd den största kostnadsposten, även om den inte utgör en lika stor andel av de totala kostnaderna som i Sverige. I stället investeras en större andel i hälso- och sjukvård, försvar och allmän ordning och säkerhet.",
    bild2: '<iframe src="images/statligautgifter_fördelning.html" class="iframe" frameborder="0"></iframe>'
  },
 {
    kategori: "EKONOMI",
    fråga: "Hur stor andel av Sveriges nationalinkomster kommer från skatter?",
    korrekt: "Ungefär 50 procent",
    alternativ: [
      "Ungefär 10 procent",
      "Ungefär 30 procent",
      "Ungefär 50 procent",
      "Ungefär 70 procent"
    ],
    förklaring: "Logiskt, utifrån frågan om statliga utgifter! I takt med att de statliga utgifterna ökat har mer skatteintäkter behövts. Sveriges skatteintäkter ökade stadigt sedan 1930-talet, för att plana ut runt 50 procent från 90-talet och framåt.",
    bild: '<iframe src="images/skatter_statligainkomster_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "För att kunna jämföra med andra länder tittar vi på annan data som i stället gäller skatter som andel av BNP. Denna data finns tillgänglig sedan 1980, och sedan dess har Sverige befunnit sig i toppskiktet.",
    bild2: '<iframe src="images/skatter_statligainkomster.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Hur har antalet arbetstimmar per år (räknat per person i arbete) förändrats sedan slutet på 1800-talet?",
    korrekt: "Det har halverats",
    alternativ: [
      "Det är oförändrat",
      "Det har minskat med en fjärdedel",
      "Det har minskat med en tredjedel",
      "Det har halverats"
    ],
    förklaring: "1870 uppskattades en genomsnittlig arbetare arbeta i nästan 3500 timmar per år. Sedan dess minskade antalet arbetstimmar drastiskt, för att planas ut på ca. 15-1600 timmar per år sedan 1980.",
    bild: '<iframe src="images/arbetstimmar_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Jämfört med andra länder är Sverige ett av de länder där personer i arbete arbetar minst timmar per år. Sverige är, efter Tyskland och Italien, det land som har flest semesterdagar och röda dagar, vilket sannolikt bidrar till detta.",
    bild2: '<iframe src="images/arbetstimmar.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Hur stor andel av anställda är inom näringslivet?",
    korrekt: "70 procent",
    alternativ: [
      "30 procent",
      "50 procent",
      "70 procent",
      "90 procent"
    ],
    förklaring: "Totalt sett är 70 procent av alla anställda inom näringslivet. Det finns dock stora skillnader mellan män och kvinnor, där kvinnor är överrepresenterade inom kommun och region medan män är överrepresenterade inom privat sektor.",
    bild: '<iframe src="images/anställning_sektor_kön.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Hur mycket mer tjänar män än kvinnor i genomsnitt?",
    korrekt: "10 procent",
    alternativ: [
      "10 procent",
      "20 procent",
      "30 procent",
      "40 procent"
    ],
    förklaring: "Sedan 90-talet har det ojusterade lönegapet mellan mäns och kvinnors genomsnittslöner minskat, där män tjänat 10% mer än kvinnor i genomsnitt sedan 2019. När man justerar för ålder, utbildning, arbetstid och sektor halveras lönegapet mellan män och kvinnor.",
    bild: '<iframe src="images/lönegap_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Vid jämförelse med andra länder (data finns fram till 2016) kan man se att det är många länder som 'kommit ikapp' Sverige och minskat lönegapet under andra halvan av 1900-talet.",
    bild2: '<iframe src="images/lönegap.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Inom vilken sektor är skillnaden i genomsnittslön mellan män och kvinnor högst?",
    korrekt: "Region",
    alternativ: [
      "Kommun",
      "Privat",
      "Region",
      "Statlig"
    ],
    förklaring: "Inom den regionala sektorn tjänar män i genomsnitt 21 procent mer än kvinnor. Skillnaderna är som minst inom kommunal sektor, där män i genomsnitt tjänar 1 procent mer än kvinnor.",
    bild: '<iframe src="images/lön_sektor_kön.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Hur stor andel av chefspositioner innehas av kvinnor?",
    korrekt: "Över 40 procent",
    alternativ: [
      "Över 20 procent",
      "Över 30 procent",
      "Över 40 procent",
      "Över 50 procent"
    ],
    förklaring: "Sedan millenieskiftet har andelen kvinnliga chefer (ledningspositioner och mellanchefer) ökat med nästan 15 procentenheter, och har legat på över 40 procent sedan 2019.",
    bild: '<iframe src="images/kvinnligachefer_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Utifrån ett internationellt perspektiv har Sverige gått från att ligga i mittskiktet vid 00-talet till att vara ett av de länder med högst andel kvinnliga chefer i världen.",
    bild2: '<iframe src="images/kvinnligachefer.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "UTBILDNING", 
    fråga: "Hur mycket mer tjänar i genomsnitt de med eftergymnasial utbildning 3+ år jämfört med de med 3-årig gymnasial utbildning?",
    korrekt: "25 procent mer",
    alternativ: [
      "De tjänar lika",
      "10 procent mer",
      "25 procent mer",
      "50 procent mer"
    ],
    förklaring: "Genomsnittslönen ökar med ökad utbildningsnivå, med undantag för när man jämför de med gymnasial utbildning under 3 år med de som har 3-årig gymnasial utbildning. Män tjänar i genomsnitt mer än kvinnor i samtliga utbildningsnivåer. Könsskillnaderna är lägst för forskarutbildade, där män tjänar ca. 8 procent mer än kvinnor.  ",
    bild: '<iframe src="images/lön_utbildning_kön.html" class="iframe" frameborder="0"></iframe>'
},
{
    kategori: "UTBILDNING", 
    fråga: "Sedan den första PISA-mätningen Sverige deltog i 2003, vilket år presterade Sverige bäst?",
    korrekt: "2003",
    alternativ: [
      "2003",
      "2009",
      "2015",
      "2022"
    ],
    förklaring: "Sverige har inte lyckats nå upp till det resultat som uppnåddes i den första PISA-mätningen 2003. Resultatet i den senaste mätningen 2022 var Sveriges näst sämsta resultat.",
    bild: '<iframe src="images/pisa_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Jämfört med övriga OECD-länder ligger Sverige i mittskiktet, något högre än genomsnittet. Noterbart är att OECD-genomsnittet har minskat med över 5 procent (27 poäng) sedan 2003.",
    bild2: '<iframe src="images/pisa.html" class="iframe" frameborder="0"></iframe>'
},
  {
    kategori: "KLIMAT",
    fråga: "Räknat per capita, hur har Sveriges koldioxidutsläpp förändrats jämfört med 1970?",
    korrekt: "De har minskat med två tredjedelar",
    alternativ: [
      "De har ökat med två tredjedelar",
      "De har ökat med en tredjedel",
      "De har minskat med en tredjedel",
      "De har minskat med två tredjedelar"
    ],
    förklaring: "Sveriges koldioxidutsläpp har minskat drastiskt sedan 1970 då landet började förlita sig mindre på fossila bränslen för sin elproduktion. Detta behöver dock avvägas mot hur mycket koldioxidutsläpp som kommer från import från andra länder. Även om importerade koldioxidutsläpp har ökat så har det inte alls skett i samma takt som minskningen av inrikes koldioxidutsläpp.",
    bild: '<iframe src="images/co2_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "Internationellt sett har Europa, Oceanien och Nordamerika haft liknande trender som Sverige, medan Asien haft en stadig ökning av sina per capita-utsläpp. Två stora anledningar till att koldioxidutsläppen ändå ökar totalt sett i världen är att befolkningsmängden ökar, samt att Kinas utsläpp fortsätter att öka. Sverige står för ca. 0.1% av världens koldioxidutsläpp.",
    bild2: '<iframe src="images/co2.html" class="iframe" frameborder="0"></iframe>'
  },
]






let currentQuestion = 0;

  function visaFråga(index) {
  const kategoriEl = document.getElementById("kategori");
  if (index < frågor.length) {
    kategoriEl.textContent = frågor[index].kategori || "";
  } else {
    kategoriEl.textContent = "";
  }

  const frågenummerEl = document.getElementById("frågenummer");
  if (index < frågor.length) {
    frågenummerEl.textContent = `Fråga ${index + 1}/${frågor.length}`;
  } else {
    frågenummerEl.textContent = "";
  }

  const förklaringEl = document.getElementById("förklaring");
  const bildEl = document.getElementById("förklaring-bild");
  förklaringEl.classList.remove("active");
  bildEl.classList.remove("active");
  förklaringEl.textContent = "";
  bildEl.innerHTML = "";
  const frågaEl = document.getElementById("fråga");
  const alternativKnappar = document.querySelectorAll(".alternativ .btn");
  const nästaFrågaBtn = document.getElementById("nästa-fråga");

  if (index < frågor.length) {
    frågaEl.textContent = frågor[index].fråga;
    frågor[index].alternativ.forEach((alternativ, i) => {
      if (alternativKnappar[i]) {
        alternativKnappar[i].textContent = alternativ;
        alternativKnappar[i].disabled = false;
        alternativKnappar[i].style.backgroundColor = "";
      }
    });
    nästaFrågaBtn.style.display = "none";
  } else {
    frågaEl.textContent = "Testet är slut! Du fick X/Y rätt.";
    alternativKnappar.forEach(btn => {
      btn.style.display = "none";
    });
    nästaFrågaBtn.style.display = "none";
  }

  // Rensa extra-förklaring/bild om den finns
  const extraEl = document.getElementById("förklaring-extra");
  if (extraEl) extraEl.remove();
}

document.addEventListener("DOMContentLoaded", () => {
  visaFråga(currentQuestion);

  const alternativKnappar = document.querySelectorAll(".alternativ .btn");
  const nästaFrågaBtn = document.getElementById("nästa-fråga");

  alternativKnappar.forEach((btn, i) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();

      // Inaktivera alla knappar
      alternativKnappar.forEach(b => b.disabled = true);

      // Kolla om svaret är rätt
      const korrektSvar = frågor[currentQuestion].korrekt;
      if (btn.textContent === korrektSvar) {
        btn.style.backgroundColor = "#59E5AD";
      } else {
        btn.style.backgroundColor = "#E56759";
        alternativKnappar.forEach(b => {
          if (b.textContent === korrektSvar) b.style.backgroundColor = "#59E5AD";
        });
      }

      // Ta bort synlighetsklassen först (om den finns)
const förklaringEl = document.getElementById("förklaring");
const bildEl = document.getElementById("förklaring-bild");
förklaringEl.classList.remove("active");
bildEl.classList.remove("active");

      // Sätt in ny text och bild
förklaringEl.textContent = frågor[currentQuestion].förklaring;

const bildData = frågor[currentQuestion].bild;

      // OM bildData är en iframe så = insert as HTML, om img = insert as img
if (typeof bildData === "string" && bildData.trim().startsWith("<iframe")) {
bildEl.innerHTML = `
  <div class="förklaring-bild-container">
    ${bildData}
    <a href="#" id="fullscreen-link">Visa i helskärm</a>
  </div>
`;

  // Lägg till eventlistener för helskärm
  const iframe = bildEl.querySelector("iframe");
  const fullscreenLink = document.getElementById("fullscreen-link");
  if (iframe && fullscreenLink) {
    fullscreenLink.addEventListener("click", function(e) {
      e.preventDefault();
      if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
      } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestFullscreen();
      } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
      }
    });
  }
} else {
  bildEl.innerHTML = `<img id="förklaring-bild-img" src="${bildData}" alt="Förklaring bild" style="max-width:100%;height:auto;cursor:pointer;">`;

      // Fullskärm för img alternativt html
  const img = document.getElementById("förklaring-bild-img");
  if (img) { 
    img.addEventListener("click", () => {
      if (img.requestFullscreen) {
        img.requestFullscreen();
      } else if (img.webkitRequestFullscreen) {
        img.webkitRequestFullscreen();
      } else if (img.msRequestFullscreen) {
        img.msRequestFullscreen();
      }
    });
  }
}

      // Vänta ett kort ögonblick och lägg till klassen "visible" så att transition triggas
setTimeout(() => {
  förklaringEl.classList.add("active");
  bildEl.classList.add("active");
}, 10);


      // Visa "Nästa fråga"-knappen
      nästaFrågaBtn.style.display = "block";

      // Visa andra förklaring och bild om de finns
const förklaring2 = frågor[currentQuestion].förklaring2;
const bildData2 = frågor[currentQuestion].bild2;

if (förklaring2 || bildData2) {
  let extraEl = document.getElementById("förklaring-extra");
  if (!extraEl) {
    extraEl = document.createElement("div");
    extraEl.id = "förklaring-extra";
    bildEl.parentNode.insertBefore(extraEl, bildEl.nextSibling);
  }
  extraEl.innerHTML = "";

  if (förklaring2) {
    const p = document.createElement("p");
    p.textContent = förklaring2;
    extraEl.appendChild(p);
  }
  if (bildData2) {
    if (typeof bildData2 === "string" && bildData2.trim().startsWith("<iframe")) {
      const div = document.createElement("div");
      div.className = "förklaring-bild-container";
      div.innerHTML = `
        ${bildData2}
        <a href="#" class="fullscreen-link-2" style="margin-top:8px;color:#5991E5;cursor:pointer;text-decoration:underline;display:block;">Visa i helskärm</a>
      `;
      extraEl.appendChild(div);

      // Lägg till eventlistener för helskärm på bild2
      const iframe2 = div.querySelector("iframe");
      const fullscreenLink2 = div.querySelector(".fullscreen-link-2");
      if (iframe2 && fullscreenLink2) {
        fullscreenLink2.addEventListener("click", function(e) {
          e.preventDefault();
          if (iframe2.requestFullscreen) {
            iframe2.requestFullscreen();
          } else if (iframe2.webkitRequestFullscreen) {
            iframe2.webkitRequestFullscreen();
          } else if (iframe2.msRequestFullscreen) {
            iframe2.msRequestFullscreen();
          }
        });
      }
    } else {
      const img = document.createElement("img");
      img.src = bildData2;
      img.alt = "Förklaring bild 2";
      img.style.maxWidth = "100%";
      img.style.height = "auto";
      extraEl.appendChild(img);
    }
  }
} else {
  const extraEl = document.getElementById("förklaring-extra");
  if (extraEl) extraEl.remove();
}
    });
  });

  nästaFrågaBtn.addEventListener("click", () => {
    currentQuestion++;
    visaFråga(currentQuestion);
  });
});