// CONTAGEM DE JOGADAS APLICADA DENTRO DE CADA MOVIMENTO

let numberTorres = 3;
let variavel = 0;
let marcadorJogadas = 0;
let discoescolhido;
let numberDisc = 5;
let contagem = document.querySelector(".marcadorJogadas");

criandotabuleiro();
criandojogo();

const espetos = document.querySelectorAll(".espetos");
const reset = document.querySelector(".reset");
let aviso = document.querySelector(".aviso");

// ADICIONANDO EVENTO DE CLICK AS TORRES
espetos.forEach((espeto) => {
  espeto.addEventListener("click", selecionando);
});
// SELECIONANDO E MOVENDO DISCOS
function selecionando(event) {
  if (
    variavel === 0 &&
    event.currentTarget.lastElementChild.childElementCount >= 1
  ) {
    discoescolhido = event.currentTarget.lastElementChild.lastElementChild;
    discoescolhido.id = "selecionado";
    variavel = 1;
  } else if (variavel === 1) {
    let espetoescolhido = event.currentTarget.lastElementChild;
    if (
      espetoescolhido.childElementCount === 0 ||
      espetoescolhido.lastElementChild.clientWidth > discoescolhido.clientWidth
    ) {
      discoescolhido.id = "";
      espetoescolhido.appendChild(discoescolhido);
      variavel = 0;
      marcadorJogadas++;
      contagem.innerText = marcadorJogadas;
    } else {
      discoescolhido.id = "";
      variavel = 0;
      aviso.innerText = "Jogada Invalida";
      setTimeout(() => {
        aviso.innerText = "Continue Tentando";
      }, 1850);
    }
  }
  vitoria();
}
// CRIANDO TELA DE JOGO E NUMERO DE DISCOS
function criandojogo() {
  let discos = document.querySelectorAll(".discos");
  discos.forEach((discos) => {
    discos.innerHTML = "";
  });
  let inicio = document.querySelector(".discos");
  inicio.classList.add("inicio");
  for (let i = 0; i < numberDisc; i++) {
    let disco = document.createElement("div");
    disco.classList.add(`disco${i}`);
    disco.classList.add(`disco`);
    inicio.appendChild(disco);
  }
  marcadorJogadas = 0;
  contagem.innerText = marcadorJogadas;
}

// CONDIÇÃO DE VITORIA OU JOGADA ERRADA
function vitoria() {
  let espetoFinal = document.querySelectorAll(".discos")[1];
  let espetoFinal2 = document.querySelectorAll(".discos")[2];
  espetoFinal.classList.add("end");
  espetoFinal2.classList.add("end");
  if (espetoFinal.childElementCount == numberDisc) {
    aviso.innerText = "Você GANHOU!";
    setTimeout(() => {
      aviso.innerText = "BOM JOGO";
      criandojogo();
    }, 5000);
  }
  if (espetoFinal2.childElementCount == numberDisc) {
    aviso.innerText = "Você GANHOU!";
    setTimeout(() => {
      aviso.innerText = "BOM JOGO";
      criandojogo();
    }, 5000);
  }
}

// CRIANDO TORRES E DISCOS
function criandotabuleiro() {
  for (let i = 0; i < numberTorres; i++) {
    let divtabuleiro = document.querySelector(".jogo");
    let divespetos = document.createElement("div");
    divespetos.classList.add("espetos");
    let divespeto = document.createElement("div");
    divespeto.classList.add("espeto");
    let divdiscos = document.createElement("div");
    divdiscos.classList.add("discos");
    divespetos.appendChild(divespeto);
    divespetos.appendChild(divdiscos);
    divtabuleiro.appendChild(divespetos);
  }
}

// BOTÃO PARA RESETAR O GAME
reset.addEventListener("click", function () {
  aviso.innerText = "Mais uma chance...";
  criandojogo();
});
