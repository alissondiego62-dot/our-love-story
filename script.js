/* ========================= */
/* CONTADOR */
/* ========================= */

/* 19 Janeiro 2026 - Boa Vista (UTC-4) */
const startDate = new Date("2026-01-19T00:00:00-04:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

  if (diff < 0) {
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCounter, 1000);
updateCounter();

/* ========================= */
/* MÚSICA TURBO */
/* ========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// Cria toque silencioso para liberar autoplay
function unlockAutoplay() {
  const silent = new Audio();
  silent.src = "data:audio/mp3;base64,//uQxAAAA..."; // mp3 vazio curto (silencioso)
  silent.play().finally(() => {
    // Agora podemos tocar a música real
    music.currentTime = 30;
    music.play().catch(() => console.log("Música não pode iniciar"));
  });
}

// Tenta liberar autoplay assim que a página carrega
window.addEventListener("load", () => {
  unlockAutoplay();
});

// Botão de pausar/tocar
musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    musicBtn.textContent = "▶ Tocar música";
  }
});
