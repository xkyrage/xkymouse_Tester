import { registerClick } from "./stats.js";

export function initMouse() {
  document.addEventListener("mousedown", (e) => {
    highlight(e.button);
    registerClick();

    // latency test
    const start = performance.now();
    requestAnimationFrame(() => {
      const latency = performance.now() - start;
      document.getElementById("latency").textContent =
        latency.toFixed(2) + " ms";
    });
  });
}

function highlight(button) {
  const el = document.querySelector(`[data-button="${button}"]`);
  if (!el) return;

  el.classList.add("active");
  setTimeout(() => el.classList.remove("active"), 100);
}