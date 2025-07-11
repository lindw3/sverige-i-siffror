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
    förklaring: "Två partier, Miljöpartiet och Vänsterpartiet, har fler kvinnliga än manliga kommunalt förtroendevalda under mandatperioden 2023-2026, vilket är de enda partier där detta hänt sedan statistik började föras 2007. Totalt sett har andelen kvinnliga kommunalt förtroendevalda legat stabilt på strax över 40%.",
    bild: '<iframe src="images/förtroendevalda_kön.html" class="iframe" frameborder="0"></iframe>'
  },
  {
    kategori: "ARBETE",
    fråga: "Hur stor andel av anställda är inom näringslivet?",
    korrekt: "70%",
    alternativ: [
      "30%",
      "50%",
      "70%",
      "90%"
    ],
    förklaring: "Totalt sett är 70% av alla anställda inom näringslivet. Det finns dock stora skillnader mellan män och kvinnor, där kvinnor är överrepresenterade inom kommun och region medan män är överrepresenterade inom privat sektor.",
    bild: '<iframe src="images/anställning_sektor_kön.html" class="iframe" frameborder="0"></iframe>'
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
    förklaring: "Inom den regionala sektorn tjänar män i genomsnitt 21% mer än kvinnor. Skillnaderna är som minst inom kommunal sektor, där män i genomsnitt tjänar 1% mer än kvinnor.",
    bild: '<iframe src="images/lön_sektor_kön.html" class="iframe" frameborder="0"></iframe>'
  },
{
    kategori: "UTBILDNING", 
    fråga: "Hur mycket mer tjänar i genomsnitt de med eftergymnasial utbildning 3+ år jämfört med de med 3-årig gymnasial utbildning?",
    korrekt: "25% mer",
    alternativ: [
      "De tjänar lika",
      "10% mer",
      "25% mer",
      "50% mer"
    ],
    förklaring: "Genomsnittslönen ökar med ökad utbildningsnivå, med undantag för när man jämför de med gymnasial utbildning under 3 år med de som har 3-årig gymnasial utbildning. Män tjänar i genomsnitt mer än kvinnor i samtliga utbildningsnivåer. Könsskillnaderna är lägst för forskarutbildade, där män tjänar ca. 8% mer än kvinnor.  ",
    bild: '<iframe src="images/lön_utbildning_kön.html" class="iframe" frameborder="0"></iframe>'
} ,
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
    förklaring: "Mellan 1990 och 2021 ökade genomsnittsåldern för kvinnors första giftermål med 25%, vilket uppgår till ca. 7 år.",
    bild: '<iframe src="images/ålder_giftermål_sverige.html" class="iframe" frameborder="0"></iframe>',
    förklaring2: "När OECD undersökt denna trend för alla OECD-länder kan man notera att denna trend sker i alla länder. Sverige är dock, tillsammans med Spanien, det OECD-land med högst genomsnittsålder för kvinnors första giftermål.",
    bild2: '<iframe src="images/ålder_giftermål.html" class="iframe" frameborder="0"></iframe>'
  }
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