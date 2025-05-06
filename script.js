let normal = 0;
let repeticao = 0;

// Recuperar dados salvos
const registros = JSON.parse(localStorage.getItem('registros')) || {
  manha: { N: '--', R: '--' },
  tarde: { N: '--', R: '--' }
};

function atualizarDisplays() {
  document.getElementById('normalDisplay').textContent = normal;
  document.getElementById('repeticaoDisplay').textContent = repeticao;
}

function alterarContador(tipo, valor) {
  if (tipo === 'normal') {
    normal = Math.max(0, normal + valor);
  } else {
    repeticao = Math.max(0, repeticao + valor);
  }
  atualizarDisplays();
}

function salvar(periodo) {
  registros[periodo] = {
    N: normal,
    R: repeticao
  };
  localStorage.setItem('registros', JSON.stringify(registros));
  normal = 0;
  repeticao = 0;
  atualizarDisplays();
  alert(`Contagem ${periodo === 'manha' ? 'da manhã' : 'da tarde'} salva com sucesso!`);
}

function gerarRelatorio() {
  document.getElementById('relatorio').style.display = 'block';
  document.getElementById('manhaN').textContent = registros.manha.N;
  document.getElementById('manhaR').textContent = registros.manha.R;
  document.getElementById('tardeN').textContent = registros.tarde.N;
  document.getElementById('tardeR').textContent = registros.tarde.R;
}

function limparDados() {
  if (confirm("Tem certeza que deseja limpar os dados?")) {
    registros.manha = { N: '--', R: '--' };
    registros.tarde = { N: '--', R: '--' };
    localStorage.setItem('registros', JSON.stringify(registros));
    gerarRelatorio();
    alert("Dados limpos com sucesso!");
  }
}

// Atualizar displays na inicialização
document.addEventListener('DOMContentLoaded', atualizarDisplays);
