import { pushPolling } from "./graph.js";
import { getJitterScore } from "./analytics.js";

let clicks = 0;
let moveCount = 0;
let lastTime = performance.now();
let maxPolling = 0;

export function initStats() {

  const canvas = document.getElementById("dragCanvas");

  const cps = document.getElementById("cps");
  const latency = document.getElementById("latency");
  const polling = document.getElementById("polling");
  const jitter = document.getElementById("jitter");
  const maxEl = document.getElementById("maxPolling");

  // Detect best available input mode
  const supportsRaw = "onpointerrawupdate" in window;
  const modeEl = document.getElementById("inputMode");
if (modeEl) {
  modeEl.textContent = supportsRaw ? "RAW" : "FALLBACK";
}

  console.log("Input Mode:", supportsRaw ? "RAW" : "FALLBACK");

  // Unified handler
  function handleInput(e) {
    moveCount++;

    const now = performance.now();
    const delta = now - lastTime;

    if (delta > 0) {
      const hz = 1000 / delta;

      pushPolling(hz);

      // track max
      if (hz > maxPolling) {
        maxPolling = hz;
      }
    }

    lastTime = now;
  }

  // RAW INPUT 
  if (supportsRaw) {
    canvas.addEventListener("pointerrawupdate", handleInput, { passive: true });
  } 
  // FALLBACK
  else {
    canvas.addEventListener("mousemove", handleInput, { passive: true });
  }

  // UI update loop
  setInterval(() => {
    if (cps) cps.textContent = clicks;
    if (polling) polling.textContent = moveCount + " Hz";
    if (jitter) jitter.textContent = getJitterScore();
    if (maxEl) maxEl.textContent = Math.round(maxPolling) + " Hz";

    clicks = 0;
    moveCount = 0;
  }, 1000);

  // latency bridge
  window.__latency = (v) => {
    if (latency) latency.textContent = v.toFixed(2) + " ms";
  };
}

export function registerClick() {
  clicks++;
}

export function updateLatency(v) {
  window.__latency?.(v);
}