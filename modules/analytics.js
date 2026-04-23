let last = null;
let jitter = [];

export function detectJitter(x,y){
  if(!last){ last={x,y}; return; }

  const dx=x-last.x;
  const dy=y-last.y;
  const dist=Math.sqrt(dx*dx+dy*dy);

  jitter.push(dist);
  if(jitter.length>50) jitter.shift();

  last={x,y};
}

export function getJitterScore(){
  if(!jitter.length) return 0;
  return (jitter.reduce((a,b)=>a+b,0)/jitter.length).toFixed(2);
}

export function logClick(){}
export function logLatency(){}
export function logMove(){}