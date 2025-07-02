let total = 0;
let valores = [];
let fundoAtual = 0;
const fundos = ["fundo1", "fundo2", "fundo3"];

// Salva no localStorage
function salvarDados() {
  localStorage.setItem("cofreTotal", total);
  localStorage.setItem("cofreValores", JSON.stringify(valores));
}

// Carrega do localStorage
function carregarDados() {
  const totalSalvo = localStorage.getItem("cofreTotal");
  const valoresSalvos = localStorage.getItem("cofreValores");

  if (totalSalvo) {
    total = parseFloat(totalSalvo);
  }

  if (valoresSalvos) {
    valores = JSON.parse(valoresSalvos);
  }

  atualizarTotal();
  atualizarLista();
}

function salvarValor() {
  const input = document.getElementById("valorInput");
  const valor = parseFloat(input.value);

  if (!isNaN(valor) && valor > 0) {
    total += valor;
    valores.push(valor);
    atualizarTotal();
    adicionarNaLista(valor);
    salvarDados();
  }

  input.value = "";
}

function zerarCofrinho() {
  total = 0;
  valores = [];
  atualizarTotal();
  atualizarLista();
  salvarDados();
}

function atualizarTotal() {
  document.getElementById("total").textContent =
    `Total no Cofrinho: R$ ${total.toFixed(2).replace(".", ",")}`;
}

function adicionarNaLista(valor) {
  const lista = document.getElementById("valoresLista");
  const item = document.createElement("li");
  item.textContent = `R$ ${valor.toFixed(2).replace(".", ",")}`;
  lista.appendChild(item);
}

function atualizarLista() {
  const lista = document.getElementById("valoresLista");
  lista.innerHTML = "";
  valores.forEach(valor => adicionarNaLista(valor));
}

function mudarFundo() {
  fundoAtual = (fundoAtual + 1) % fundos.length;
  const fundo = document.getElementById("fundo");
  fundo.className = "fundo-animado " + fundos[fundoAtual];
}

// Inicializa ao carregar a página
window.onload = () => {
  document.getElementById("fundo").classList.add(fundos[0]);
  carregarDados();
};
