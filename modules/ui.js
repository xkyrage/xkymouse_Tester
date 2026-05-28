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


  const direction = delta < 0 ? -1 : 1;


  scrollOffset += direction * 6;

  scrollOffset = Math.max(-12, Math.min(12, scrollOffset));


  el.style.transform = `translateY(${scrollOffset}px)`;
  el.classList.add("active");

  
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