let cara = 0;
let coroa = 0;

function jogarMoeda() {
  const moeda = document.getElementById("moeda");
  const resultado = Math.random() < 0.5 ? 'cara' : 'coroa';

  // animação
  moeda.style.transform = "rotateY(720deg) scale(1.2)";
  setTimeout(() => {
    moeda.style.transform = "rotateY(0deg) scale(1)";
    moeda.textContent = resultado === 'cara' ? '🙂' : '👑';

    if (resultado === 'cara') {
      cara++;
      document.getElementById("cara").textContent = cara;
    } else {
      coroa++;
      document.getElementById("coroa").textContent = coroa;
    }
  }, 500);
}

// Fundo com partículas pretas e brancas
const canvas = document.getElementById("fundo");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particulas = [];
for (let i = 0; i < 100; i++) {
  particulas.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1.5 + 0.5,
    c: Math.random() > 0.5 ? "#fff" : "#222"
  });
}

function desenharParticulas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < particulas.length; i++) {
    const p = particulas[i];
    ctx.fillStyle = p.c;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
    ctx.fill();
    
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  }
  requestAnimationFrame(desenharParticulas);
}
desenharParticulas();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
