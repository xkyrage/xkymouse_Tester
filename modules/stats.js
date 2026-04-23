import { pushPolling } from "./graph.js";
import { getJitterScore } from "./analytics.js";

let clicks = 0;
let moveCount = 0;
let lastTime = performance.now();

export function initStats() {

  const canvas = document.getElementById("dragCanvas");

  const cps = document.getElementById("cps");
  const latency = document.getElementById("latency");
  const polling = document.getElementById("polling");
  const jitter = document.getElementById("jitter");

  // 🎯 Polling now comes from mouse path area
  canvas.addEventListener("mousemove", () => {
    moveCount++;

    const now = performance.now();
    const delta = now - lastTime;

    if (delta > 0) {
      const hz = 1000 / delta;
      pushPolling(hz);
    }

    lastTime = now;
  });

  setInterval(() => {
    cps.textContent = clicks;
    polling.textContent = moveCount + " Hz";
    jitter.textContent = getJitterScore();

    clicks = 0;
    moveCount = 0;
  }, 1000);

  window.__latency = (v) => {
    latency.textContent = v.toFixed(2) + " ms";
  };
}

export function registerClick() {
  clicks++;
}

export function updateLatency(v) {
  window.__latency?.(v);
}