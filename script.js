// Estrutura de dados com os passos da história e as opções de escolha
const historia = {
  1: {
    titulo: "Passo 1: O Ponto de Partida",
    texto: "No porão da Estação da Luz, em 1922, você analisa o diário amarelado. Para avançar na busca pela cidade perdida sob São Paulo, decida seu primeiro destino:",
    opcoes: [
      { texto: "Investigar as catacumbas sob o Pátio do Colégio", proximoPasso: 2 },
      { texto: "Explorar as galerias subterrâneas do Vale do Anhangabaú", proximoPasso: 3 }
    ]
  },
  2: {
    titulo: "Passo 2A: O Pátio do Colégio",
    texto: "Você descobre uma porta de ferro atrás das fundações originais. Ela leva a um túnel inundado pelo antigo Rio Tamanduateí. Para atravessar, você precisa avançar até a câmara principal.",
    opcoes: [
      { texto: "Seguir pelo túnel em direção ao Theatro Municipal", proximoPasso: 4 }
    ]
  },
  3: {
    titulo: "Passo 2B: O Vale do Anhangabaú",
    texto: "Descendo pelas galerias pluviométricas, você encontra marcas nas paredes deixadas por bandeirantes no século XVII, indicando a entrada de uma caverna oculta.",
    opcoes: [
      { texto: "Entrar na caverna sob o Viaduto do Chá", proximoPasso: 4 }
    ]
  },
  4: {
    titulo: "Passo 3: O Portal Subterrâneo",
    texto: "As pistas convergem para uma antiga câmara de pedra localizada exatamente abaixo do Theatro Municipal. No centro da sala, há um altar antigo.",
    opcoes: [
      { texto: "Ativar o disco de bronze astronômico de 1554", proximoPasso: 5 },
      { texto: "Mover a engrenagem de água do rio Anhangabaú", proximoPasso: 5 }
    ]
  },
  5: {
    titulo: "Passo 4: A Cidade Perdida",
    texto: "A parede de pedra se abre, revelando uma imensa caverna iluminada por cristais naturais. Diante de você surgem as ruínas de Ywytyruçu, a mítica cidade das alturas!",
    opcoes: [
      { texto: "Reiniciar a jornada", proximoPasso: 1 }
    ]
  }
};

// Função para atualizar a interface do jogo na tela
function mostrarPasso(passoId) {
  const passoAtual = historia[passoId];

  // Elementos do HTML (certifique-se de que esses IDs existem no seu index.html)
  const tituloElemento = document.getElementById("titulo");
  const textoElemento = document.getElementById("texto");
  const botoesContainer = document.getElementById("botoes");

  // Atualiza o título e a descrição
  if (tituloElemento) tituloElemento.innerText = passoAtual.titulo;
  if (textoElemento) textoElemento.innerText = passoAtual.texto;

  // Limpa os botões anteriores
  if (botoesContainer) {
    botoesContainer.innerHTML = "";

    // Cria um novo botão para cada opção disponível
    passoAtual.opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.innerText = opcao.texto;
      botao.classList.add("btn-opcao"); // Classe CSS para estilizar
      
      // Adiciona o evento de clique para mudar de passo
      botao.addEventListener("click", () => mostrarPasso(opcao.proximoPasso));
      
      botoesContainer.appendChild(botao);
    });
  }
}

// Inicia o jogo no Passo 1 assim que a página carregar
document.addEventListener("DOMContentLoaded", () => {
  mostrarPasso(1);
});