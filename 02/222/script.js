// Seletores
const porta = document.querySelector('.porta');
const abajur = document.querySelector('.abajur');
const luzTeto = document.querySelector('.luz-teto');
const tv = document.querySelector('.tv');
const geladeira = document.querySelector('.geladeira');
const cortina1 = document.querySelector('.janela1 .cortina');
const cortina2 = document.querySelector('.janela2 .cortina');

// Botões
const btnPorta = document.getElementById('botao-porta');
const btnAbajur = document.getElementById('botao-abajur');
const btnLuzTeto = document.getElementById('botao-luz-teto');
const btnTV = document.getElementById('botao-tv');
const btnGeladeira = document.getElementById('botao-geladeira');
const btnCortina1 = document.getElementById('botao-cortina1');
const btnCortina2 = document.getElementById('botao-cortina2');

// Porta
btnPorta.addEventListener('click', () => {
  porta.classList.toggle('aberta');
  btnPorta.textContent = porta.classList.contains('aberta') ? 'Fechar Porta' : 'Abrir Porta';
});

// Abajur
btnAbajur.addEventListener('click', () => {
  abajur.classList.toggle('aceso');
  btnAbajur.textContent = abajur.classList.contains('aceso') ? 'Desligar Abajur' : 'Ligar Abajur';
});

// Luz de teto
btnLuzTeto.addEventListener('click', () => {
  luzTeto.classList.toggle('acesa');
  btnLuzTeto.textContent = luzTeto.classList.contains('acesa') ? 'Desligar Luz do Teto' : 'Ligar Luz do Teto';
});

// TV
btnTV.addEventListener('click', () => {
  tv.classList.toggle('ligada');
  btnTV.textContent = tv.classList.contains('ligada') ? 'Desligar TV' : 'Ligar TV';
});

// Geladeira
btnGeladeira.addEventListener('click', () => {
  geladeira.classList.toggle('aberta');
  btnGeladeira.textContent = geladeira.classList.contains('aberta') ? 'Fechar Geladeira' : 'Abrir Geladeira';
});

// Cortinas
btnCortina1.addEventListener('click', () => {
  cortina1.classList.toggle('fechada');
  btnCortina1.textContent = cortina1.classList.contains('fechada') ? 'Fechar Cortina 1' : 'Abrir Cortina 1';
});

btnCortina2.addEventListener('click', () => {
  cortina2.classList.toggle('fechada');
  btnCortina2.textContent = cortina2.classList.contains('fechada') ? 'Fechar Cortina 2' : 'Abrir Cortina 2';
});
