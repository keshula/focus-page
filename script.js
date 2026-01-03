let interval;
let timeLeft = 25 * 60;

function startTimer(minutes) {
  clearInterval(interval);
  timeLeft = minutes * 60;
  update();

  interval = setInterval(() => {
    timeLeft--;
    update();
    if (timeLeft <= 0) clearInterval(interval);
  }, 1000);
}

function resetTimer() {
  clearInterval(interval);
  timeLeft = 0;
  document.getElementById("timer").textContent = "00:00";
}

function update() {
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  document.getElementById("timer").textContent =
    `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
