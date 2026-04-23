const canvas = document.getElementById("dragCanvas");
const ctx = canvas.getContext("2d");
const area = document.querySelector(".mouse-card");

let drawing = false;

function resize() {
  const r = canvas.parentElement.getBoundingClientRect();
  canvas.width = r.width;
  canvas.height = r.height;
}
resize();
window.addEventListener("resize", resize);

export function initDrag() {

  area.addEventListener("mousedown", () => {
    drawing = true;
    ctx.beginPath();
  });

  area.addEventListener("mouseup", () => drawing = false);
  area.addEventListener("mouseleave", () => drawing = false);

  area.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();

    ctx.lineWidth = 2;
    ctx.strokeStyle = "rgba(56,189,248,0.9)";

    ctx.lineTo(e.clientX - rect.left, e.clientY - rect.top);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(e.clientX - rect.left, e.clientY - rect.top);
  });

  fade();
}

function fade(){
  ctx.fillStyle="rgba(2,6,23,0.08)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  requestAnimationFrame(fade);
}