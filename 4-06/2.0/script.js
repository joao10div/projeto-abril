document.getElementById('formDesejo').addEventListener('submit', function (e) {
  e.preventDefault();

  const descricao = document.getElementById('descricao').value.trim();
  const link = document.getElementById('link').value.trim();

  if (descricao && link) {
    const lista = document.getElementById('listaDesejos');
    const cartao = document.createElement('div');
    cartao.className = 'cartao-desejo';

    const a = document.createElement('a');
    a.href = link;
    a.target = '_blank';
    a.textContent = descricao;

    cartao.appendChild(a);
    lista.appendChild(cartao);

    document.getElementById('descricao').value = '';
    document.getElementById('link').value = '';
  }
});

document.getElementById('toggleTheme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  document.getElementById('toggleTheme').textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
