const frågor = [
  {
    fråga: "Vilket parti är störst bland de inkomstgrupper som tjänar över genomsnittet?",
    korrekt: "Socialdemokraterna",
    alternativ: [
      "Socialdemokraterna",
      "Moderaterna",
      "Sverigedemokraterna",
      "Miljöpartiet"
    ],
    förklaring: "Socialdemokraterna är det dominerande partiet bland såväl fattiga som rika, även om fördelningen är likvärdig mellan Socialdemokraterna och Moderaterna i den högsta inkomstgruppen.",
    bild: "images/partisympatier-inkomst.png"
  },
  {
    fråga: "Hur många av riksdagspartierna har fler kvinnliga än manliga kommunalt förtroendevalda?",
    korrekt: "Två",
    alternativ: [
      "Ett",
      "Två",
      "Tre",
      "Fyra"
    ],
    förklaring: "Två partier, Miljöpartiet och Vänsterpartiet, har fler kvinnliga än manliga kommunalt förtroendevalda under mandatperioden 2023-2026, vilket är de enda partier där detta hänt sedan statistik började föras 2007. Totalt sett har andelen kvinnliga kommunalt förtroendevalda legat stabilt på strax över 40%.",
    bild: "images/förtroendevalda-kön.png"
  },
  {
    fråga: "Hur stor andel av anställda är inom näringslivet?",
    korrekt: "70%",
    alternativ: [
      "30%",
      "50%",
      "70%",
      "90%"
    ],
    förklaring: "Totalt sett är 70% av alla anställda inom näringslivet. Det finns dock stora skillnader mellan män och kvinnor, där kvinnor är överrepresenterade inom kommun och region medan män är överrepresenterade inom privat sektor.",
    bild: "images/anställning-sektor-kön.png"
  },
  {
    fråga: "Inom vilken sektor är skillnaden i genomsnittslön mellan män och kvinnor högst?",
    korrekt: "Region",
    alternativ: [
      "Kommun",
      "Privat",
      "Region",
      "Statlig"
    ],
    förklaring: "Inom den regionala sektorn tjänar män i genomsnitt 21% mer än kvinnor. Skillnaderna är som minst inom kommunal sektor, där män i genomsnitt tjänar 1% mer än kvinnor.",
    bild: "images/genomsnittlön-sektor-kön.png"
  },
{
    fråga: "Hur mycket mer tjänar i genomsnitt de med eftergymnasial utbildning 3+ år jämfört med de med 3-årig gymnasial utbildning?",
    korrekt: "25 % mer",
    alternativ: [
      "De tjänar lika",
      "10 % mer",
      "25 % mer",
      "50 % mer"
    ],
    förklaring: "Genomsnittslönen ökar med ökad utbildningsnivå, med undantag för när man jämför de med gymnasial utbildning under 3 år med de som har 3-årig gymnasial utbildning. Män tjänar i genomsnitt mer än kvinnor i samtliga utbildningsnivåer. Könsskillnaderna är lägst för forskarutbildade, där män tjänar ca. 8% mer än kvinnor.  ",
    bild: "images/genomsnittslön-utbildning.png"
}
]


let currentQuestion = 0;

  function visaFråga(index) {
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
    frågaEl.textContent = "Testet är klart!";
    alternativKnappar.forEach(btn => {
      btn.style.display = "none";
    });
    nästaFrågaBtn.style.display = "none";
  }
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
        btn.style.backgroundColor = "green";
      } else {
        btn.style.backgroundColor = "red";
        alternativKnappar.forEach(b => {
          if (b.textContent === korrektSvar) b.style.backgroundColor = "green";
        });
      }

      // Ta bort synlighetsklassen först (om den finns)
const förklaringEl = document.getElementById("förklaring");
const bildEl = document.getElementById("förklaring-bild");
förklaringEl.classList.remove("active");
bildEl.classList.remove("active");

// Sätt in ny text och bild
förklaringEl.textContent = frågor[currentQuestion].förklaring;
bildEl.innerHTML = `<img id="förklaring-bild-img" src="${frågor[currentQuestion].bild}" alt="Förklaring bild" style="max-width:100%;height:auto;cursor:pointer;">`;

// Vänta ett kort ögonblick och lägg till klassen "visible" så att transition triggas
setTimeout(() => {
  förklaringEl.classList.add("active");
  bildEl.classList.add("active");
}, 10);

const img = document.getElementById("förklaring-bild-img");
if (img) {
  img.addEventListener("click", () => {
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { // Safari
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { // IE11
      img.msRequestFullscreen();
    }
  });
}

      // Visa "Nästa fråga"-knappen
      nästaFrågaBtn.style.display = "block";
    });
  });

  nästaFrågaBtn.addEventListener("click", () => {
    currentQuestion++;
    visaFråga(currentQuestion);
  });
});