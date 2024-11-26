// Define possible words for the game
const palavrasPossiveis = ['SAGAZ', 'ÂMAGO', 'NEGRO', 'TERMO', 'ÊXITO', 'MEXER', 'NOBRE', 'SENSO', 'AFETO', 'ÉTICA', 'ALGOZ', 'PLENA', 'FAZER', 'TÊNUE', 'ASSIM', 'MÚTUA', 'SOBRE', 'VIGOR', 'AQUÉM', 'SUTIL', 'SEÇÃO', 'PODER', 'PORÉM', 'FOSSE', 'SANAR', 'IDEIA', 'CERNE', 'AUDAZ', 'MORAL', 'INATO', 'DESDE', 'MUITO', 'QUIÇÁ', 'JUSTO', 'HONRA', 'SONHO', 'TORPE', 'RAZÃO', 'AMIGO', 'ÍCONE', 'ETNIA', 'FÚTIL', 'ÉGIDE', 'ANEXO', 'TANGE', 'DENGO', 'HAVER', 'LAPSO', 'EXPOR', 'ENTÃO', 'TEMPO', 'BOÇAL', 'SEARA', 'MÚTUO', 'HÁBIL', 'CASAL', 'SABER', 'ÁVIDO', 'ARDIL', 'GRAÇA', 'PESAR', 'DIZER', 'ÓBICE', 'CAUSA', 'XIBIU', 'DEVER', 'ESTAR', 'SENDO', 'TENAZ', 'BRADO', 'COSER', 'PÁRIA', 'GENRO', 'AINDA', 'CRIVO', 'POSSE', 'TEMOR', 'COMUM', 'PROLE', 'ÁPICE', 'ÂNIMO', 'CORJA', 'DETÉM', 'ASSAZ', 'CEDER', 'PAUTA', 'ÂNSIA', 'FUGAZ', 'CENSO', 'CULTO', 'DIGNO', 'ATROZ', 'MUNDO', 'FORTE', 'GLEBA', 'VULGO', 'VÍCIO', 'MESMO', 'COZER', 'CRIAR', 'SAÚDE', 'VALHA', 'REVÉS', 'DENSO', 'TODOS', 'PUDOR', 'JEITO', 'NENÉM', 'DOGMA', 'LOUCO', 'REGRA', 'ATRÁS', 'ORDEM', 'CLAVA', 'MERCÊ', 'HOMEM', 'FELIZ', 'PEDIR', 'IMPOR', 'BANAL', 'LIMBO', 'ROUND', 'USURA', 'COISA', 'JUÍZO', 'SÁBIO', 'FORMA', 'AJUDA', 'APRAZ', 'SERVO', 'PROSA', 'FALAR', 'LEGAL', 'TENRO', 'PRESA', 'CERTO', 'DESSE', 'PÍFIO', 'POSSO', 'CUNHO', 'VENDO', 'VIRIL', 'ONTEM', 'DEVIR', 'FALSO', 'HERÓI', 'MANSO', 'FÁCIL', 'VALOR', 'VISAR', 'MEIGA', 'REAÇA', 'PUDER', 'SÉRIO', 'MÁGOA', 'ÉBRIO', 'ACASO', 'LINDA', 'FLUIR', 'GUISA', 'AFAGO', 'PLATÔ', 'LUGAR', 'ÍMPIO', 'TEMER', 'GARBO', 'ABRIR', 'PRAXE', 'OBTER', 'AFINS', 'GERAR', 'ÓBVIO', 'BURRO', 'UNIÃO', 'MATIZ', 'CISMA', 'BRUMA', 'PLENO', 'CRISE', 'ÊXODO', 'VÊNIA', 'FLUXO', 'TÉDIO', 'HAVIA', 'SENIL', 'RITMO', 'MORTE', 'LEVAR', 'ENFIM', 'ÁLIBI', 'OLHAR', 'TOMAR', 'VISÃO', 'CASTA', 'GÊNIO', 'PRUMO', 'BREGA', 'PARVO', 'VITAL', 'BRAVO', 'FAVOR', 'OUVIR', 'RELES', 'CABAL', 'FALTA', 'PULHA', 'PARCO', 'CALMA', 'VIVAZ', 'RETER', 'TECER', 'OUTRO', 'SÁBIA', 'VALIA', 'TERRA', 'TENDO', 'AMENO', 'VIVER', 'LAICO', 'GRATO', 'PASSO', 'FORÇA', 'NOÇÃO', 'ÚNICO', 'POSSA', 'CARMA', 'ACHAR', 'NICHO', 'RANÇO', 'POBRE', 'REVER', 'NOITE', 'PAPEL', 'FAÇAM', 'ROGAR', 'PRIME', 'FARSA', 'FARDO', 'ATIVO', 'FATOR', 'NOSSA', 'DÚBIO', 'ÓBITO', 'COESO', 'SELAR', 'ÉPICO', 'ANELO', 'CLARO', 'CITAR', 'SINTO', 'LEIGO', 'SESTA', 'LÍDER', 'CISÃO', 'CESTA', 'SONSO', 'CIÚME', 'DETER', 'VELHO', 'ATUAR', 'ADIAR', 'HASTE', 'TENDE', 'GENTE', 'HUMOR', 'REVEL', 'SULCO', 'VAZIO', 'FICAR', 'IDEAL', 'VEMOS', 'ÁRDUO', 'FONTE', 'MARCO', 'PONTO', 'IGUAL', 'EXATO', 'LABOR', 'FEIXE', 'AMPLO', 'TERNO', 'LAVRA', 'REMIR', 'SENÃO', 'CAUDA', 'HIATO', 'DÉBIL', 'CAPAZ', 'TANTO', 'ÓTICA', 'GESTO', 'RELVA', 'INATA', 'AMBOS', 'VARÃO', 'JOVEM', 'CICLO', 'IMUNE', 'TENRA', 'TOADA', 'VÁCUO', 'SONSA', 'COÇAR', 'RAIVA', 'APOIO', 'CHUVA', 'CAÇAR', 'POUCO', 'VIMOS', 'VELAR', 'SÉRIE', 'ALGUM', 'XEQUE', 'FARÃO', 'HORDA', 'FEITO', 'FUSÃO', 'LEITO', 'ADVÉM', 'ENTRE', 'COESA', 'SENTE', 'PROBO', 'DOIDO', 'CARRO', 'MINHA', 'CRUEL', 'FRASE', 'TRAMA', 'ANUIR', 'TORÇO', 'BRISA', 'VERSO', 'ÍMPAR', 'LAZER', 'RIGOR', 'CHATA', 'BOTAR', 'MASSA', 'SORTE', 'BLASÉ', 'PRECE', 'MAIOR', 'PEGAR', 'DORSO', 'SIGNO', 'SEITA', 'FAUNA', 'MOÇÃO', 'PRESO', 'COVIL', 'FUROR', 'CREDO', 'LIVRO', 'MORAR', 'FLORA', 'CASTO', 'VETOR', 'ADEUS', 'LIAME', 'COMER', 'PLANO', 'DÓCIL', 'PESTE', 'SENDA', 'FAINA', 'PRAIA', 'OCASO', 'NUNCA', 'SAIBA', 'AMBAS', 'PECHA', 'HOUVE', 'ALIÁS', 'ÁRIDO', 'AGORA', 'SETOR', 'MANHA', 'PEIXE', 'ARDOR', 'VÍRUS', 'MUDAR', 'VISSE', 'MESES', 'ÁUREA', 'PARTE', 'SALVO', 'REZAR', 'ANTRO', 'BEATA', 'VULTO', 'ACESO', 'VASTO', 'PAJEM', 'BREVE', 'SAÍDA', 'RISCO', 'MORRO', 'JUNTO', 'CAMPO', 'ÓTIMO', 'BANZO', 'AVARO', 'REGER', 'GRUPO', 'SINAL', 'PRADO', 'ANAIS', 'ESTÃO', 'ÁUREO', 'LENDA', 'ANDAR', 'ANTES', 'SEGUE', 'BIRRA', 'SERÃO', 'OPÇÃO', 'ACIMA', 'MOTIM', 'CHULO', 'FUGIR', 'CONTA', 'LEITE', 'RAPAZ', 'OXALÁ', 'VILÃO', 'BRAVA', 'NAÇÃO', 'VERBO', 'FRUIR', 'TRETA', 'ÁTOMO', 'FESTA', 'PARAR', 'TEXTO', 'TIRAR', 'ÍDOLO', 'FITAR', 'ÍNDIO', 'JAZIA', 'TENSO', 'REINO', 'TRAGA', 'PUXAR', 'PRAZO', 'GERIR', 'ALUDE', 'NORMA', 'TOSCO', 'EXAME', 'ÁTRIO', 'FILHO', 'PROVA', 'ÉPOCA', 'TURBA', 'BANDO', 'CORPO', 'MALTA', 'PRETO', 'ARCAR', 'CHEIO', 'ACESA', 'AONDE', 'VORAZ', 'SARÇA', 'PSICO', 'ANCIÃ', 'MANHÃ', 'SINHÁ', 'AVIÃO', 'FATOS', 'FATAL', 'QUASE', 'CÓPIA', 'LIGAR', 'VENAL', 'CERTA', 'NOSSO', 'BÔNUS', 'LOGRO', 'QUOTA', 'MAGIA', 'DESSA', 'FIXAR', 'NÍVEL', 'APEGO', 'AFORA', 'OÁSIS', 'LONGE', 'COITO', 'MENTE', 'POMPA', 'SUMIR', 'MESSE', 'NÓDOA', 'SOLDO', 'TOCAR', 'ALADO', 'PERDA', 'LIDAR'];

;

// Select a random word from the possible words
let palavraSecreta = escolherNovaPalavra();

// Define game constants
const maxTentativas = 6;

// Initialize game state
let tentativaAtual = [];
let tentativaNumero = 0;

// Add event listener to document load
document.addEventListener('DOMContentLoaded', () => {
  criarTabuleiro();
  configurarTeclado();
  document.addEventListener('keydown', (event) => {
    const key = event.key.toUpperCase();
    if (key.length === 1 && key.match(/[A-Z]/)) {
      processarTecla(key);
    } else if (key === 'ENTER') {
      verificarTentativa();
    } else if (key === 'BACKSPACE') {
      removerLetra();
    }
  });
});

// Function to select a new random word
function escolherNovaPalavra() {
  return palavrasPossiveis[Math.floor(Math.random() * palavrasPossiveis.length)].toUpperCase();
}

// Create game board
function criarTabuleiro() {
  const gameBoard = document.getElementById('game-board');
  for (let i = 0; i < maxTentativas; i++) {
    for (let j = 0; j < 5; j++) {
      const tile = document.createElement('div');
      tile.classList.add('tile');
      tile.setAttribute('id', `tile-${i}-${j}`);
      gameBoard.appendChild(tile);
    }
  }
}

// Configure keyboard
function configurarTeclado() {
  const teclas = document.querySelectorAll('button');
  teclas.forEach(tecla => {
    tecla.addEventListener('click', () => {
      const key = tecla.getAttribute('data-key');
      processarTecla(key);
    });
  });
}

// Process key press
function processarTecla(key) {
  if (key === 'Enter') {
    verificarTentativa();
  } else if (key === 'Backspace') {
    removerLetra();
  } else if (tentativaAtual.length < 5) {
    adicionarLetra(key);
  }
}

// Add letter to current attempt
function adicionarLetra(letra) {
  if (tentativaAtual.length < 5) {
    tentativaAtual.push(letra);
    const tile = document.getElementById(`tile-${tentativaNumero}-${tentativaAtual.length - 1}`);
    tile.textContent = letra;
  }
}

// Remove last letter from current attempt
function removerLetra() {
  if (tentativaAtual.length > 0) {
    tentativaAtual.pop();
    const tile = document.getElementById(`tile-${tentativaNumero}-${tentativaAtual.length}`);
    tile.textContent = '';
  }
}

// Verify current attempt
function verificarTentativa() {
  if (tentativaAtual.length === 5) {
    const tentativaString = tentativaAtual.join('');
    if (tentativaString === palavraSecreta) {
      fimDeJogo(true);
    } else {
      mostrarResultado();
      tentativaAtual = [];
      tentativaNumero++;
      if (tentativaNumero >= maxTentativas) {
        fimDeJogo(false);
      }
    }
  }
}

// Show result of current attempt
function mostrarResultado() {
  for (let i = 0; i < 5; i++) {
    const letra = tentativaAtual[i];
    const tile = document.getElementById(`tile-${tentativaNumero}-${i}`);

    if (palavraSecreta[i] === letra) {
      tile.classList.add('correct');
      tile.style.backgroundColor = 'green';
    } else if (palavraSecreta.includes(letra)) {
      tile.classList.add('present');
      tile.style.backgroundColor = 'yellow';
    } else {
      tile.classList.add('absent');
      tile.style.backgroundColor = 'gray';
    }
  }
}

// End game
function fimDeJogo(ganhou) {
  const mensagem = ganhou ? 'Você acertou!' : `Fim de jogo! A palavra era ${palavraSecreta}.`;
  alert(mensagem);
  if (ganhou) {
    addVisualEffects();
    palavraSecreta = escolherNovaPalavra(); // Select a new word for the next game
    resetarJogo();
  } else {
    resetarJogo();
  }
}

// Reset game
function resetarJogo() {
  tentativaAtual = [];
  tentativaNumero = 0;
  document.getElementById('game-board').innerHTML = '';
  criarTabuleiro();
}

// Add visual effects when winning
function addVisualEffects() {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.style.transform = 'scale(1.2)';
    tile.style.transition = 'transform 0.5s';
  });
  setTimeout(() => {
    tiles.forEach(tile => {
      tile.style.transform = 'scale(1)';
    });
  }, 500);
}

