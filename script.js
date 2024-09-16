// Define possible words for the game
const palavrasPossiveis = ['BRAVO', 'JOGAR', 'CORRE', 'FALHA', 'PASTO', 'BOLSA', 'LUZES', 'NINHO', 'PODER', 'FOCAS', 'CARRO', 'CINZA', 'CARPA', 'PEIXE', 'COXAS', 'DORES', 'FETOS', 'GIZES', 'JUNCO', 'LAGOS', 'MARES', 'NATAL', 'NOITE', 'PENAS', 'MAÇOS', 'ROLES', 'SUJOS', 'TALCO', 'FUMAR', 'VAGAS', 'XALEs', 'ZULUS', 'TERMO', 'TERNO', 'TERCA', 'TERGO', 'TERMA'];

// Select a random word from the possible words
const palavraSecreta = palavrasPossiveis[Math.floor(Math.random() * palavrasPossiveis.length)].toUpperCase();

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
  }
  resetarJogo();
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