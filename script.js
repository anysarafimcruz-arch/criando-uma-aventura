<script>
    // Estrutura completa de nós da história baseada no fluxograma
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
        text: "À medida que avançam cortando a vegetação, uma névoa densa e misteriosa encobre a floresta. A equipe fica desorientada.",
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
        text: "🏆 Um estrondo ecoa e a gigante porta de pedra se abre! Você entra na Sala do Trono e encontra o lendário tesouro da Cidade Perdida. Você entrou para a história!",
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

    const storyTextEl = document.getElementById("story-text");
    const choicesContainerEl = document.getElementById("choices-container");
    const storyCardEl = document.getElementById("story-card");

    // Função para atualizar a tela conforme a escolha do jogador
    function goToNode(nodeKey) {
      const node = storyNodes[nodeKey];

      if (!node) {
        console.error("Nó não encontrado:", nodeKey);
        return;
      }

      // Efeito visual de transição suave
      storyCardEl.classList.remove("fade-in");
      choicesContainerEl.classList.remove("fade-in");
      
      // Forçar reflow para reiniciar a animação CSS
      void storyCardEl.offsetWidth;

      // Atualiza o texto da história
      storyTextEl.innerText = node.text;

      // Limpa as opções anteriores
      choicesContainerEl.innerHTML = "";

      // Cria os novos botões para o nó atual
      node.choices.forEach(choice => {
        const button = document.createElement("button");
        button.className = "btn-choice text-left text-sm sm:text-base py-3.5 px-5 rounded-lg w-full cursor-pointer";
        button.innerText = choice.text;
        
        // Atribui o evento de clique garantindo o fluxo correto
        button.addEventListener("click", () => {
          goToNode(choice.target);
        });

        choicesContainerEl.appendChild(button);
      });

      // Aplica as animações de fade
      storyCardEl.classList.add("fade-in");
      choicesContainerEl.classList.add("fade-in");
    }

    window.onload = function() {
      goToNode("inicio");
    };
  </script>
</body>
</html>