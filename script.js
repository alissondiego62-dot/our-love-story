/* ========================= */
/* CONTADOR */
/* ========================= */

/* 19 de Janeiro de 2026 - Boa Vista RR (UTC-4) */
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
