// carrossel:
const carrossel = document.getElementById("carrossel");
const imagens = document.getElementById("imagens");
const indicadoresContainer = document.getElementById("indicadores");
const totalImagens = imagens.children.length;
let indice = 0;
let startX, currentX;

// Criar os indicadores
for (let i = 0; i < totalImagens; i++) {
  const bola = document.createElement("div");
  bola.classList.add("bola");
  bola.addEventListener("click", () => mudarImagem(i));
  indicadoresContainer.appendChild(bola);
}

// Atualiza o estado dos indicadores
function atualizarIndicadores() {
  const bolas = document.querySelectorAll(".bola");
  bolas.forEach((bola, index) => {
    bola.classList.remove("ativa");
    if (index === indice) {
      bola.classList.add("ativa");
    }
  });
}

carrossel.addEventListener("touchstart", (event) => {
  startX = event.touches[0].clientX;
});

carrossel.addEventListener("touchmove", (event) => {
  currentX = event.touches[0].clientX;
  const diffX = startX - currentX;

  if (diffX > 50) {
    // arraste para a esquerda
    mudarImagem(1);
    startX = currentX; // atualiza startX para o próximo movimento
  } else if (diffX < -50) {
    // arraste para a direita
    mudarImagem(-1);
    startX = currentX; // atualiza startX para o próximo movimento
  }
});

function mudarImagem(direcao) {
  indice = (indice + direcao + totalImagens) % totalImagens; // Atualiza o índice de forma circular
  imagens.style.transform = `translateX(${-indice * 100}%)`;
  atualizarIndicadores(); // Atualiza os indicadores
}

atualizarIndicadores(); // Inicializa os indicadores

// timer:
// Defina a data de início do namoro
const namoroInicio = new Date("2024-10-05T00:00:00"); // Exemplo de data (mude para a sua data)

function atualizarTimer() {
    const agora = new Date();
    const diferenca = agora - namoroInicio; // Diferença em milissegundos

    // Converter a diferença para dias, horas, minutos e segundos
    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

// Exibir o tempo formatado no elemento HTML
document.getElementById("timer").innerHTML = 
             `<div class="div-style-timer">
               <p class="style-timer">${dias}<br>
               <span>dias</span></p>
               <p class="style-timer">${horas}<br>
               <span>horas</span></p>
               <p class="style-timer">${minutos}<br>
               <span>minutos</span></p>
               <p class="style-timer">${segundos}<br>
               <span>segundos<span></p>
               </div>`;
}

// Atualize o timer a cada segundo
setInterval(atualizarTimer, 1000);
