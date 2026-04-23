export function activateButton(button) {
  const el = document.querySelector(`[data-button="${button}"]`);
  if (!el) return;
  el.classList.add("active");
  setTimeout(() => el.classList.remove("active"), 120);
}

let scrollOffset = 0;
let resetTimer;

export function scrollEffect(delta) {
  const el = document.getElementById("scrollWheel");
  if (!el) return;

  // determine direction
  const direction = delta < 0 ? -1 : 1;

  // accumulate movement
  scrollOffset += direction * 6;

  // clamp so it doesn't go too far
  scrollOffset = Math.max(-12, Math.min(12, scrollOffset));

  // apply transform
  el.style.transform = `translateY(${scrollOffset}px)`;
  el.classList.add("active");

  // reset after user stops scrolling
  clearTimeout(resetTimer);
  resetTimer = setTimeout(() => {
    scrollOffset = 0;
    el.style.transform = "translateY(0)";
    el.classList.remove("active");
  }, 120);
}

export function initHover() {
  document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.classList.add("hover"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("hover"));
  });
}