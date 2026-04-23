export function initNavigation() {
  const btns = document.querySelectorAll(".nav");
  const tabs = document.querySelectorAll(".tab");

  btns.forEach(btn=>{
    btn.addEventListener("click", ()=>{
      btns.forEach(b=>b.classList.remove("active"));
      btn.classList.add("active");

      tabs.forEach(t=>t.classList.remove("active"));
      document.getElementById(btn.dataset.tab).classList.add("active");
    });
  });
}