const carrossel = document.getElementById("carrossel");
const imagens = document.getElementById("imagens");
let indice = 0;
let startX, currentX;

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
  const totalImagens = imagens.children.length;
  indice = (indice + direcao + totalImagens) % totalImagens; // Atualiza o índice de forma circular
  imagens.style.transform = `translateX(${-indice * 100}%)`;
}

// Defina a data de início do namoro
const namoroInicio = new Date("2024-10-05T00:00:00"); // Exemplo de data (mude para a sua data)

function atualizarTimer() {
  const agora = new Date();
  const diferenca = agora - namoroInicio; // Diferença em milissegundos

  // Calcular a diferença total em meses
  const totalMeses =
    (agora.getFullYear() - namoroInicio.getFullYear()) * 12 +
    (agora.getMonth() - namoroInicio.getMonth());

  // Calcular dias restantes após contar os meses
  const diasRestantes = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  const horas = Math.floor(
    (diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferenca % (1000 * 60)) / 1000);

  // Exibir o tempo formatado no elemento HTML
  document.getElementById("timer").innerHTML = `<div class="div-style-timer">
                <p class="style-timer">${totalMeses} meses</p>
                 <p class="style-timer">${diasRestantes} dias</p>
                 <p class="style-timer">${horas} horas</p>
                 <p class="style-timer">${minutos} minutos</p>
                 <p class="style-timer">${segundos} segundos</p>
                 </div>`;
}

// Atualize o timer a cada segundo
setInterval(atualizarTimer, 1000);
