const storyNodes = {
  inicio: {
    text: "Você encontra mapas antigos apontando para uma lendária Cidade Perdida. Após pesquisar as lendas locais e reunir sua equipe, você chega à beira da selva.",
    choices: [
      { text: "Entrar pelo Rio de barco", target: "rio" },
      { text: "Entrar pela Mata a pé", target: "mata" }
    ]
  },
  rio: {
    text: "Navegando pelo rio turbulento, você se depara com corredeiras perigosas. Deseja tentar atravessá-las?",
    choices: [
      { text: "Enfrentar as corredeiras", target: "acampamento" },
      { text: "Hesitar / O barco quebra", target: "derrota_barco" }
    ]
  },
  mata: {
    text: "Ao abrir caminho com o facão, uma névoa densa cobre a mata e a equipe fica desorientada.",
    choices: [
      { text: "Usar a bússola para se orientar", target: "acampamento" },
      { text: "Avançar sem orientação", target: "derrota_nevoa" }
    ]
  },
  acampamento: {
    text: "Você superou o primeiro desafio e conseguiu chegar ao acampamento base próximo às Ruínas Antigas. À sua frente está o Templo.",
    choices: [
      { text: "Entrar no Templo", target: "enigma" }
    ]
  },
  enigma: {
    text: "Na entrada do Templo, há uma inscrição antiga com um enigma solene. Qual resposta você escolhe?",
    choices: [
      { text: "Escolher a resposta correta", target: "vitoria" },
      { text: "Escolher a resposta errada", target: "derrota_armadilha" }
    ]
  },
  vitoria: {
    text: "A porta de pedra se abre com um eco profundo! Você entra na Sala do Trono e encontra o lendário tesouro da Cidade Perdida. Vitória!",
    choices: [
      { text: "Jogar Novamente", target: "inicio" }
    ]
  },
  derrota_barco: {
    text: "O barco foi destruído pelas pedras nas corredeiras. A expedição falhou.",
    choices: [
      { text: "Tentar Novamente", target: "inicio" }
    ]
  },
  derrota_nevoa: {
    text: "Sem orientação, a equipe vagou em círculos até ficar sem suprimentos. A expedição falhou.",
    choices: [
      { text: "Tentar Novamente", target: "inicio" }
    ]
  },
  derrota_armadilha: {
    text: "Uma armadilha ancestral foi ativada ao responder incorretamente. A entrada foi selada para sempre. A expedição falhou.",
    choices: [
      { text: "Tentar Novamente", target: "inicio" }
    ]
  }
};

const storyTextElement = document.getElementById("story-text");
const choicesElement = document.getElementById("choices");

function showNode(nodeKey) {
  const node = storyNodes[nodeKey];
  storyTextElement.innerText = node.text;
  
  choicesElement.innerHTML = "";
  
  node.choices.forEach(choice => {
    const button = document.createElement("button");
    button.innerText = choice.text;
    button.onclick = () => showNode(choice.target);
    choicesElement.appendChild(button);
  });
}

// Inicia o jogo no nó inicial
showNode("inicio");