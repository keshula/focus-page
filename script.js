let interval;
let total = 0;
let remaining = 0;
let paused = false;

const timerEl = document.getElementById("timer");
const statusEl = document.getElementById("status");

document.querySelectorAll("[data-time]").forEach(btn => {
  btn.addEventListener("click", () => start(btn.dataset.time));
});

document.getElementById("pause").addEventListener("click", togglePause);
document.getElementById("reset").addEventListener("click", reset);

function start(minutes) {
  clearInterval(interval);
  total = minutes * 60;
  remaining = total;
  paused = false;
  statusEl.textContent = "running";
  tick();
  interval = setInterval(tick, 1000);
}

function tick() {
  if (paused) return;
  remaining--;
  update();
  if (remaining <= 0) {
    clearInterval(interval);
    statusEl.textContent = "done";
  }
}

function togglePause() {
  paused = !paused;
  statusEl.textContent = paused ? "paused" : "running";
}

function reset() {
  clearInterval(interval);
  remaining = 0;
  timerEl.textContent = "00:00";
  statusEl.textContent = "idle";
}

function update() {
  const m = Math.floor(remaining / 60);
  const s = remaining % 60;
  timerEl.textContent =
    `${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
}
