function incrementar(id) {
  const el = document.getElementById(id);
  el.textContent = parseInt(el.textContent) + 1;
}

function salvar(turno) {
  const normal = document.getElementById(turno + '-normal').textContent;
  const repeticao = document.getElementById(turno + '-repeticao').textContent;
  localStorage.setItem(turno + '-normal', normal);
  localStorage.setItem(turno + '-repeticao', repeticao);
  alert('Contagem do turno da ' + turno + ' salva!');
}

function limparDados() {
  localStorage.clear();
  ['manha', 'tarde'].forEach(turno => {
    document.getElementById(turno + '-normal').textContent = '0';
    document.getElementById(turno + '-repeticao').textContent = '0';
  });
  alert('Dados limpos!');
}

window.onload = function () {
  ['manha', 'tarde'].forEach(turno => {
    const normal = localStorage.getItem(turno + '-normal');
    const repeticao = localStorage.getItem(turno + '-repeticao');
    if (normal !== null) document.getElementById(turno + '-normal').textContent = normal;
    if (repeticao !== null) document.getElementById(turno + '-repeticao').textContent = repeticao;
  });
};
