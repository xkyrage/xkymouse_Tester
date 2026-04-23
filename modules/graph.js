const canvas = document.getElementById("latencyGraph");
const ctx = canvas.getContext("2d");

let latencyData = [];
let pollingData = [];

export function pushLatency(v) {
  latencyData.push(v);
  if (latencyData.length > 100) latencyData.shift();
}

export function pushPolling(v) {
  pollingData.push(v);
  if (pollingData.length > 100) pollingData.shift();
}

export function drawGraph() {
  ctx.clearRect(0,0,canvas.width,canvas.height);

  draw(latencyData, "#22c55e");
  draw(pollingData, "#38bdf8");

  requestAnimationFrame(drawGraph);
}

function draw(data,color){
  ctx.beginPath();
  data.forEach((v,i)=>{
    const x=(i/100)*canvas.width;
    const y=canvas.height - v*2;
    i?ctx.lineTo(x,y):ctx.moveTo(x,y);
  });
  ctx.strokeStyle=color;
  ctx.stroke();
}