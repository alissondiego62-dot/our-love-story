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
/* MÚSICA AUTOPLAY 30s */
/* ========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

// Áudio silencioso curto (1ms) para desbloquear autoplay
const silentAudio = new Audio("data:audio/mp3;base64,//uQxAAAAAAD..."); // pode ser mp3 vazio curto
silentAudio.volume = 0;
silentAudio.play().finally(() => {
  // Depois que o autoplay é liberado, toca sua música
  music.currentTime = 30; // inicia direto aos 30s
  music.play().catch(() => console.log("Música bloqueada"));
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
