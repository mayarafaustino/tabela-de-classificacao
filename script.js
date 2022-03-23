var jogadores = [];

var bodyTabela = document.getElementById("tabelaJogadores");

function adicionarJogador() {
  var novoJogador = document.querySelector("[data-adicionar-jogador]").value;
  var Jogador = {
    nome: novoJogador,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  };
  jogadores.push(Jogador);
  console.log(jogadores);
  mostrarTabela();
}

function calcularPontos(jogador) {
  var pesoVitoria = parseInt(
    document.querySelector("[data-pesoVitoria]").value
  );
  var pesoEmpate = parseInt(document.querySelector("[data-pesoEmpate]").value);
  var pesoDerrota = parseInt(
    document.querySelector("[data-pesoDerrota]").value
  );

  var pontos =
    jogador.vitorias * pesoVitoria +
    jogador.empates * pesoEmpate +
    jogador.derrotas * pesoDerrota;
  jogador.pontos = pontos;
}
function mostrarTabela() {
  var elemento = "";
  for (var i = 0; i < jogadores.length; i++) {
    calcularPontos(jogadores[i]);
    elemento += "<tr>";
    elemento += "<td>" + jogadores[i].nome + "</td>";
    elemento += "<td>" + jogadores[i].vitorias + "</td>";
    elemento += "<td>" + jogadores[i].empates + "</td>";
    elemento += "<td>" + jogadores[i].derrotas + "</td>";
    elemento += "<td>" + jogadores[i].pontos + "</td>";
    elemento +=
      "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>";
    elemento +=
      "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>";
    elemento +=
      "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>";
    elemento += "</tr>";
  }
  bodyTabela.innerHTML = elemento;
}
function adicionarVitoria(i) {
  var jogador = jogadores[i];
  jogador.vitorias++;
  mostrarTabela();
}
function adicionarEmpate(i) {
  var jogador = jogadores[i];
  jogador.empates++;
  mostrarTabela();
}
function adicionarDerrota(i) {
  var jogador = jogadores[i];
  jogador.derrotas++;
  mostrarTabela();
}