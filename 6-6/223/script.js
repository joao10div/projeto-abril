// Frases
const frases = [
  "A vida é feita de momentos.",
  "O futuro pertence aos que acreditam.",
  "Nunca desista dos seus sonhos.",
  "Cada clique, uma nova ideia.",
  "Preto e branco, simplicidade elegante.",
  "Mudar é evoluir.",
];

// Elementos
const fraseElemento = document.getElementById("frase");
const botaoFrase = document.getElementById("botao");
const botaoTema = document.getElementById("btnTema");
const body = document.body;

let indiceAtual = 0;

// Muda frase ao clicar
botaoFrase.addEventListener("click", () => {
  indiceAtual = (indiceAtual + 1) % frases.length;
  fraseElemento.textContent = frases[indiceAtual];
});

// Muda tema (claro / escuro)
botaoTema.addEventListener("click", () => {
  if(body.classList.contains("tema-claro")){
    body.classList.remove("tema-claro");
    body.classList.add("tema-escuro");
  } else {
    body.classList.remove("tema-escuro");
    body.classList.add("tema-claro");
  }
});

// Fundo com bolinhas caindo usando Canvas

const canvas = document.getElementById('snow');
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}
resize();
window.addEventListener('resize', resize);

// Bolinhas
const numBolinha = 100;
const bolinhas = [];

function Bolinha(){
  this.x = Math.random() * width;
  this.y = Math.random() * height;
  this.radius = Math.random() * 2 + 1;
  this.speed = Math.random() * 1 + 0.3;
  this.wind = (Math.random() - 0.5) * 0.5;
}

for(let i=0; i<numBolinha; i++){
  bolinhas.push(new Bolinha());
}

function animar(){
  ctx.clearRect(0,0,width,height);

  for(let i=0; i<bolinhas.length; i++){
    let b = bolinhas[i];
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.shadowColor = 'white';
    ctx.shadowBlur = 2;
    ctx.arc(b.x,b.y,b.radius,0,Math.PI*2);
    ctx.fill();

    b.y += b.speed;
    b.x += b.wind;

    if(b.y > height){
      b.y = -b.radius;
      b.x = Math.random() * width;
    }
    if(b.x > width) b.x = 0;
    else if(b.x < 0) b.x = width;
  }

  requestAnimationFrame(animar);
}

animar();
