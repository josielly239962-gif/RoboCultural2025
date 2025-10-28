const fala = document.getElementById("fala");

function falarLenda() {
  const lendas = [
    "A lenda do Boto conta que, nas festas, ele se transforma em um belo rapaz e encanta as moças da vila.",
    "O Curupira protege as florestas com seus pés virados, confundindo quem tenta caçar ou destruir a mata.",
    "A lenda da Vitória-Régia fala de uma índia que virou flor ao tentar tocar o reflexo da lua nas águas.",
    "O Mapinguari é o guardião da selva, com um só olho e um rugido que ecoa entre as árvores.",
  ];

  const aleatoria = lendas[Math.floor(Math.random() * lendas.length)];
  fala.textContent = aleatoria;

  const falaCurumin = new SpeechSynthesisUtterance(aleatoria);
  falaCurumin.lang = "pt-BR";
  falaCurumin.rate = 1;
  speechSynthesis.speak(falaCurumin);
}
