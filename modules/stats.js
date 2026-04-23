import { pushPolling } from "./graph.js";
import { getJitterScore } from "./analytics.js";

let clicks = 0;
let moveCount = 0;
let lastTime = performance.now();
let maxPolling = 0; // 🔥 NEW

export function initStats() {

  const canvas = document.getElementById("dragCanvas");

  const cps = document.getElementById("cps");
  const latency = document.getElementById("latency");
  const polling = document.getElementById("polling");
  const jitter = document.getElementById("jitter");
  const maxEl = document.getElementById("maxPolling"); // 🔥 NEW

  // 🔥 unified handler (avoids duplicate logic)
  function handleMove() {
    moveCount++;

    const now = performance.now();
    const delta = now - lastTime;

    if (delta > 0) {
      const hz = 1000 / delta;

      pushPolling(hz);

      // ✅ track max polling
      if (hz > maxPolling) {
        maxPolling = hz;
      }
    }

    lastTime = now;
  }

  // 🔥 use best available event
  if ("onpointerrawupdate" in window) {
    canvas.addEventListener("pointerrawupdate", handleMove);
  } else {
    canvas.addEventListener("mousemove", handleMove);
  }

  setInterval(() => {
    if (cps) cps.textContent = clicks;
    if (polling) polling.textContent = moveCount + " Hz";
    if (jitter) jitter.textContent = getJitterScore();

    // 🔥 update max polling UI
    if (maxEl) maxEl.textContent = Math.round(maxPolling) + " Hz";

    clicks = 0;
    moveCount = 0;
  }, 1000);

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