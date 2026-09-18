// Árvore de Decisões e Fluxograma do Jogo
const storyNodes = {
  inicio: {
    text: "Você possui em mãos um mapa antigo que revela a localização da lendária Cidade Perdida. Após reunirem equipamentos e estudarem as lendas locais, sua equipe chega à entrada da selva tropical.",
    choices: [
      { text: "⛵ Navegar pelo Rio de Barco", target: "rio" },
      { text: "🪓 Abrir Trilha na Mata com Facão", target: "mata" }
    ]
  },
  rio: {
    text: "O rio é rápido e turbulento. De repente, a correnteza acelera e você avista fortes corredeiras à frente. O que você faz?",
    choices: [
      { text: "🌊 Enfrentar as corredeiras com firmeza", target: "acampamento" },
      { text: "⚓ Hesitar e tentar manobrar (Risco)", target: "derrota_barco" }
    ]
  },
  mata: {
    text: "À medida que avançam cortando a vegetação, uma névoa densa e misteriosa encobre a floresta. A equipe fica totalmente desorientada.",
    choices: [
      { text: "🧭 Usar a bússola para manter a direção", target: "acampamento" },
      { text: "🌫️ Avançar na névoa sem orientação", target: "derrota_nevoa" }
    ]
  },
  acampamento: {
    text: "Excelente decisão! Superando os perigos da entrada, sua equipe chega com segurança ao acampamento base nas proximidades das ruínas. Diante de vocês está o imponente Templo Antigo.",
    choices: [
      { text: "🏛️ Aproximar-se e entrar no Templo", target: "enigma" }
    ]
  },
  enigma: {
    text: "Na grande porta de pedra do Templo há uma inscrição em uma língua antiga: 'Sou o que te guia no escuro, mas desapareço com a luz. O que sou?'.",
    choices: [
      { text: "📜 Resposta: A Sombra", target: "vitoria" },
      { text: "💎 Resposta: O Ouro", target: "derrota_armadilha" }
    ]
  },
  vitoria: {
    text: "🏆 Um estrondo ecoa e a gigante porta de pedra se abre! Você entra na Sala do Trono e encontra o lendário tesouro da Cidade Perdida. Sua expedição foi um sucesso estrondoso!",
    choices: [
      { text: "🔄 Iniciar Nova Expedição", target: "inicio" }
    ]
  },
  derrota_barco: {
    text: "💀 A hesitação custou caro. O barco colidiu com rochas afiadas e se despedaçou na correnteza. A expedição falhou.",
    choices: [
      { text: "🔁 Tentar Novamente", target: "inicio" }
    ]
  },
  derrota_nevoa: {
    text: "💀 Sem bússola, a equipe caminhou em círculos na névoa até esgotar todos os suprimentos. A expedição falhou.",
    choices: [
      { text: "🔁 Tentar Novamente", target: "inicio" }
    ]
  },
  derrota_armadilha: {
    text: "💀 Resposta incorreta! O chão cedeu e uma armadilha ancestral selou a entrada do templo para sempre. A expedição falhou.",
    choices: [
      { text: "🔁 Tentar Novamente", target: "inicio" }
    ]
  }
};

// Elementos do DOM
const storyTextElement = document.getElementById("story-text");
const choicesContainerElement = document.getElementById("choices-container");
const storyCardElement = document.getElementById("story-card");

// Função principal de navegação do jogo
function goToNode(nodeKey) {
  const node = storyNodes[nodeKey];

  if (!node) {
    console.error("Erro: Nó da história não encontrado para a chave:", nodeKey);
    return;
  }

  // Reinicia as animações CSS de transição
  storyCardElement.classList.remove("fade-in");
  choicesContainerElement.classList.remove("fade-in");
  
  // Força o reflow para reativar a animação no navegador
  void storyCardElement.offsetWidth;

  // Atualiza o texto da história
  storyTextElement.innerText = node.text;

  // Limpa os botões anteriores
  choicesContainerElement.innerHTML = "";

  // Cria dinamicamente os novos botões para o nó atual
  node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.className = "btn-choice";
    button.innerText = choice.text;
    
    // Adiciona o manipulador de clique diretamente
    button.addEventListener("click", () => {
      goToNode(choice.target);
    });

    choicesContainerElement.appendChild(button);
  });

  // Re-aplica as animações
  storyCardElement.classList.add("fade-in");
  choicesContainerElement.classList.add("fade-in");
}

// Inicia o jogo automaticamente após o carregamento da página
window.addEventListener("DOMContentLoaded", () => {
  goToNode("inicio");
});