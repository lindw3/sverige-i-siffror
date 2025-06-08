const frågor = [
  {
    fråga: "Vilket parti är störst bland de inkomstgrupper som tjänar över genomsnittet?",
    korrekt: "Socialdemokraterna",
    alternativ: [
      "Socialdemokraterna",
      "Moderaterna",
      "Sverigedemokraterna",
      "Miljöpartiet"
    ]
  },
  {
    fråga: "Hur många av riksdagspartierna har fler kvinnliga än manliga förtroendevalda?",
    korrekt: "Två",
    alternativ: [
      "Ett",
      "Två",
      "Tre",
      "Fyra"
    ]
  },
  {
    fråga: "Hur stor andel av anställda är inom näringslivet?",
    korrekt: "70%",
    alternativ: [
      "30%",
      "50%",
      "70%",
      "90%"
    ]
  },
  {
    fråga: "Inom vilken sektor är skillnaden i genomsnittslön mellan män och kvinnor högst?",
    korrekt: "Region",
    alternativ: [
      "Kommun",
      "Privat",
      "Region",
      "Statlig"
    ]
  },
{
    fråga: "Hur mycket mer tjänar i genomsnitt de med eftergymnasial utbildning 3+ år jämfört med de med 3-årig gymnasial utbildning?",
    korrekt: "25%",
    alternativ: [
      "De tjänar lika",
      "10 % mer",
      "25 % mer",
      "50 % mer"
    ]
}
]


let currentQuestion = 0;

function visaFråga(index) {
  const frågaEl = document.getElementById("fråga");
  const alternativKnappar = document.querySelectorAll(".alternativ .btn");
  const nästaFrågaBtn = document.getElementById("nästa-fråga");

  if (index < frågor.length) {
    frågaEl.textContent = frågor[index].fråga;
    frågor[index].alternativ.forEach((alternativ, i) => {
      if (alternativKnappar[i]) {
        alternativKnappar[i].textContent = alternativ;
        alternativKnappar[i].disabled = false;
        alternativKnappar[i].style.backgroundColor = ""; // Nollställ färg
      }
    });
    nästaFrågaBtn.style.display = "none"; // Dölj nästa-fråga-knappen
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
        // Visa även rätt svar i grönt om du vill:
        alternativKnappar.forEach(b => {
          if (b.textContent === korrektSvar) b.style.backgroundColor = "green";
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