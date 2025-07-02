const emojis = ["😀", "😂", "🥳", "😎", "🤩", "😜", "😇", "😍", "😱", "😈", "👻", "🤖"];
const emojiEl = document.getElementById("emoji");
const botaoGirar = document.getElementById("botaoGirar");
const botaoTema = document.getElementById("btnTema");
const body = document.body;

let indice = 0;

// Gira e troca o emoji
botaoGirar.addEventListener("click", () => {
  indice = (indice + 1) % emojis.length;
  emojiEl.textContent = emojis[indice];
  emojiEl.style.transform = `rotate(${indice * 360}deg)`;
});

// Trocar tema (claro ↔ azul bebê)
botaoTema.addEventListener("click", () => {
  body.classList.toggle("tema-claro");
  body.classList.toggle("tema-escuro");
});
