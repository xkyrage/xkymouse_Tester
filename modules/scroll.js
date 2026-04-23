export function initScroll() {
  const scrollEl = document.getElementById("scroll");

  document.addEventListener("wheel", (e) => {
    scrollEl.classList.add("active");

    if (e.deltaY < 0) {
      scrollEl.textContent = "↑";
    } else {
      scrollEl.textContent = "↓";
    }

    setTimeout(() => {
      scrollEl.classList.remove("active");
      scrollEl.textContent = "Scroll";
    }, 150);
  });
}