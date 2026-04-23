let rawMode = false;

export function toggleRawMode() {
  rawMode = !rawMode;
  console.log("Raw mode:", rawMode);
}

export function handleRawMove(e) {
  if (!rawMode) return;

  console.log("RAW Δ:", e.movementX, e.movementY);
}