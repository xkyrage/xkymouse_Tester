let ctx;

export function playClick() {
  if (!ctx) ctx = new AudioContext();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.frequency.value = 800;
  gain.gain.value = 0.05;

  osc.start();
  osc.stop(ctx.currentTime + 0.02);
}