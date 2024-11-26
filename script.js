// Define possible words for the game
const palavrasPossiveis = ['SAGAZ', 'AMAGO', 'NEGRO', 'TERMO', 'EXITO', 'MEXER', 'NOBRE', 'SENSO', 'AFETO', 'ETICA', 'ALGOZ', 'PLENA', 'FAZER', 'TENUE', 'ASSIM', 'MUTUA', 'SOBRE', 'VIGOR', 'AQUEM', 'SUTIL', 'SECAO', 'PODER', 'POREM', 'FOSSE', 'SANAR', 'IDEIA', 'CERNE', 'AUDAZ', 'MORAL', 'INATO', 'DESDE', 'MUITO', 'QUIÇA', 'JUSTO', 'HONRA', 'SONHO', 'TORPE', 'RAZAO', 'AMIGO', 'ICONE', 'ETNIA', 'FUTIL', 'EGIDE', 'ANEXO', 'TANGE', 'DENGO', 'HAVER', 'LAPSO', 'EXPOR', 'ENTAO', 'TEMPO', 'BOCAL', 'SEARA', 'MUTUO', 'HABIL', 'CASAL', 'SABER', 'AVIDO', 'ARDIL', 'GRACA', 'PESAR', 'DIZER', 'OBICE', 'CAUSA', 'XIBIU', 'DEVER', 'ESTAR', 'SENDO', 'TENAZ', 'BRADO', 'COSER', 'PARIA', 'GENRO', 'AINDA', 'CRIVO', 'POSSE', 'TEMOR', 'COMUM', 'PROLE', 'APICE', 'ANIMO', 'CORJA', 'DETEM', 'ASSAZ', 'CEDER', 'PAUTA', 'ANSIA', 'FUGAZ', 'CENSO', 'CULTO', 'DIGNO', 'ATROZ', 'MUNDO', 'FORTE', 'GLEBA', 'VULGO', 'VICIO', 'MESMO', 'COZER', 'CRIAR', 'SAUDE', 'VALHA', 'REVEZ', 'DENSO', 'TODOS', 'PUDOR', 'JEITO', 'NENEM', 'DOGMA', 'LOUCO', 'REGRA', 'ATRAS', 'ORDEM', 'CLAVA', 'MERCE', 'HOMEM', 'FELIZ', 'PEDIR', 'IMPOR', 'BANAL', 'LIMBO', 'ROUND', 'USURA', 'COISA', 'JUIZO', 'SABIO', 'FORMA', 'AJUDA', 'APRAZ', 'SERVO', 'PROSA', 'FALAR', 'LEGAL', 'TENRO', 'PRESA', 'CERTO', 'DESSE', 'PIFIO', 'POSSO', 'CUNHO', 'VENDO', 'VIRIL', 'ONTEM', 'DEVIR', 'FALSO', 'HEROI', 'MANSO', 'FACIL', 'VALOR', 'VISAR', 'MEIGA', 'REAÇA', 'PUDER', 'SERIO', 'MAGOA', 'EBRIO', 'ACASO', 'LINDA', 'FLUIR', 'GUISA', 'AFAGO', 'PLATO', 'LUGAR', 'IMPIO', 'TEMER', 'GARBO', 'ABRIR', 'PRAXE', 'OBTER', 'AFINS', 'GERAR', 'OBVIO', 'BURRO', 'UNIAO', 'MATIZ', 'CISMA', 'BRUMA', 'PLENO', 'CRISE', 'EXODO', 'VENIA', 'FLUXO', 'TEDIO', 'HAVIA', 'SENIL', 'RITMO', 'MORTE', 'LEVAR', 'ENFIM', 'ALIBI', 'OLHAR', 'TOMAR', 'VISAO', 'CASTA', 'GENIO', 'PRUMO', 'BREGA', 'PARVO', 'VITAL', 'BRAVO', 'FAVOR', 'OUVIR', 'RELES', 'CABAL', 'FALTA', 'PULHA', 'PARCO', 'CALMA', 'VIVAZ', 'RETER', 'TECER', 'OUTRO', 'SABIA', 'VALIA', 'TERRA', 'TENDO', 'AMENO', 'VIVER', 'LAICO', 'GRATO', 'PASSO', 'FORCA', 'NOCAO', 'UNICO', 'POSSA', 'CARMA', 'ACHAR', 'NICHO', 'RANCO', 'POBRE', 'REVER', 'NOITE', 'PAPEL', 'FACAM', 'ROGAR', 'PRIME', 'FARSA', 'FARDO', 'ATIVO', 'FATOR', 'NOSSA', 'DUBIO', 'OBITO', 'COESO', 'SELAR', 'EPICO', 'ANELO', 'CLARO', 'CITAR', 'SINTO', 'LEIGO', 'SESTA', 'LIDER', 'CISAO', 'CESTA', 'SONSO', 'CIUME', 'DETER', 'VELHO', 'ATUAR', 'ADIAR', 'HASTE', 'TENDE', 'GENTE', 'HUMOR', 'REVEL', 'SULCO', 'VAZIO', 'FICAR', 'IDEAL', 'VEMOS', 'ARDUO', 'FONTE', 'MARCO', 'PONTO', 'IGUAL', 'EXATO', 'LABOR', 'FEIXE', 'AMPLO', 'TERNO', 'LAVRA', 'REMIR', 'SENAO', 'CAUDA', 'HIATO', 'DEBIL', 'CAPAZ', 'TANTO', 'OTICA', 'GESTO', 'RELVA', 'INATA', 'AMBOS', 'VARAO', 'JOVEM', 'CICLO', 'IMUNE', 'TENRA', 'TOADA', 'VACUO', 'SONSA', 'COCAR', 'RAIVA', 'APOIO', 'CHUVA', 'CACAR', 'POUCO', 'VIMOS', 'VELAR', 'SERIE', 'ALGUM', 'XEQUE', 'FARAO', 'HORDA', 'FEITO', 'FUSAO', 'LEITO', 'ADVEM', 'ENTRE', 'COESA', 'SENTE', 'PROBO', 'DOIDO', 'CARRO', 'MINHA', 'CRUEL', 'FRASE', 'TRAMA', 'ANUIR', 'TORCO', 'BRISA', 'VERSO', 'IMPAR', 'LAZER', 'RIGOR', 'CHATA', 'BOTAR', 'MASSA', 'SORTE', 'BLASE', 'PRECE', 'MAIOR', 'PEGAR', 'DORSO', 'SIGNO', 'SEITA', 'FAUNA', 'MOCAO', 'PRESO', 'COVIL', 'FUROR', 'CREDO', 'LIVRO', 'MORAR', 'FLORA', 'CASTO', 'VETOR', 'ADEUS', 'LIAME', 'COMER', 'PLANO', 'DOCIL', 'PESTE', 'SENDA', 'FAINA', 'PRAIA', 'OCASO', 'NUNCA', 'SAIBA', 'AMBAS', 'PECHA', 'HOUVE', 'ALIAS', 'ARIDO', 'AGORA', 'SETOR', 'MANHA', 'PEIXE', 'ARDOR', 'VIRUS', 'MUDAR', 'VISSE', 'MESES', 'AUREA', 'PARTE', 'SALVO', 'REZAR', 'ANTRO', 'BEATA', 'VULTO', 'ACESO', 'VASTO', 'PAJEM', 'BREVE', 'SAIDA', 'RISCO', 'MORRO', 'JUNTO', 'CAMPO', 'OTIMO', 'BANZO', 'AVARO', 'REGER', 'GRUPO', 'SINAL', 'PRADO', 'ANAIS', 'ESTAO', 'AUREO', 'LENDA', 'ANDAR', 'ANTES', 'SEGUE', 'BIRRA', 'SERAO', 'OPCAO', 'ACIMA', 'MOTIM', 'CHULO', 'FUGIR', 'CONTA', 'LEITE', 'RAPAZ', 'OXALA', 'VILAO', 'BRAVA', 'NACAO', 'VERBO', 'FRUIR', 'TRETA', 'ATOMO', 'FESTA', 'PARAR', 'TEXTO', 'TIRAR', 'IDOLO', 'FITAR', 'INDIO', 'JAZIA', 'TENSO', 'REINO', 'TRAGA', 'PUXAR', 'PRAZO', 'GERIR', 'ALUDE', 'NORMA', 'TOSCO', 'EXAME', 'ATRIO', 'FILHO', 'PROVA', 'EPOCA', 'TURBA', 'BANDO', 'CORPO', 'MALTA', 'PRETO', 'ARCAR', 'CHEIO', 'ACESA', 'AONDE', 'VORAZ', 'SARCA', 'PSICO', 'ANCIA', 'MANHA', 'SINHA', 'AVIAO', 'FATOS', 'FATAL', 'QUASE', 'COPIA', 'LIGAR', 'VENAL', 'CERTA', 'NOSSO', 'BONUS', 'LOGRO', 'QUOTA', 'MAGIA', 'DESSA', 'FIXAR', 'NIVEL', 'APEGO', 'AFORA', 'OASIS', 'LONGE', 'COITO', 'MENTE', 'POMPA', 'SUMIR', 'MESSE', 'NODOA', 'SOLDO', 'TOCAR', 'ALADO', 'PERDA', 'LIDAR']

;

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

