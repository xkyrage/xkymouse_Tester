import { registerClick, updateLatency } from "./stats.js";
import { activateButton, scrollEffect } from "./ui.js";
import { pushLatency } from "./graph.js";
import { handleRawMove } from "./raw.js";
import { logClick, logLatency, logMove, detectJitter } from "./analytics.js";


const testArea = document.querySelector(".mouse-card");
const mouseHint = document.querySelector(".mouse-hint");

testArea.addEventListener("mousedown", () => {
  if (mouseHint) mouseHint.style.opacity = "0";
});

export function initInput() {

  // disable context menu inside test area
  document.addEventListener("contextmenu", (e) => {
    if (testArea.contains(e.target)) e.preventDefault();
  });

  // USE POINTERDOWN (fix for side buttons)
  testArea.addEventListener("pointerdown", (e) => {
    activateButton(e.button);
    registerClick();

    logClick(performance.now());

    const start = performance.now();
    requestAnimationFrame(() => {
      const latency = performance.now() - start;
      updateLatency(latency);
      pushLatency(latency);
      logLatency(latency);
    });
  });

  // fallback for weird browsers (middle + side)
  testArea.addEventListener("auxclick", (e) => {
    if (e.button === 1 || e.button === 3 || e.button === 4) {
      activateButton(e.button);
    }
  });

  testArea.addEventListener("wheel", (e) => {
    scrollEffect(e.deltaY);
  });

  testArea.addEventListener("mousemove", (e) => {
    handleRawMove(e);
    logMove(e.clientX, e.clientY);
    detectJitter(e.clientX, e.clientY);
  });

}