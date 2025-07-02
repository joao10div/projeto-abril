document.addEventListener("DOMContentLoaded", () => {
  const luz = document.getElementById("light");
  const botao = document.getElementById("powerButton");

  botao.addEventListener("click", () => {
    luz.classList.toggle("acesa");
    const ligada = luz.classList.contains("acesa");
    botao.textContent = ligada ? "DESLIGAR" : "LIGAR";
  });
});
