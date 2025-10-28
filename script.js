const fala = document.getElementById("fala");

function falarLenda() {
  const lendas = [
    "Era uma vez o boto-cor-de-rosa, que se transformava em humano nas noites de festa...",
    "Dizem que o Curupira protege a floresta e engana caçadores com seus pés virados!",
    "A lenda da Vitória-Régia fala de uma índia que virou flor ao tentar tocar a lua...",
    "O Mapinguari é um guardião gigante da selva, com um só olho e um rugido assustador!"
  ];

  const aleatoria = lendas[Math.floor(Math.random() * lendas.length)];
  fala.textContent = aleatoria;

  // Fala em voz alta (sintetizador de voz)
  const falaCurumin = new SpeechSynthesisUtterance(aleatoria);
  falaCurumin.lang = "pt-BR";
  speechSynthesis.speak(falaCurumin);
}
