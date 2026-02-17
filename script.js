/* ========================= */
/* CONTADOR */
/* ========================= */

const startDate = new Date("2024-05-01T00:00:00-04:00");

function updateCounter() {
  const now = new Date();
  const diff = now - startDate;

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
/* MÚSICA */
/* ========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

window.addEventListener("load", () => {
  music.currentTime = 30;

  music.play().catch(() => {
    document.body.addEventListener("click", () => {
      music.play();
    }, { once: true });
  });
});

musicBtn.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    musicBtn.textContent = "⏸ Pausar música";
  } else {
    music.pause();
    musicBtn.textContent = "▶ Tocar música";
  }
});
a
