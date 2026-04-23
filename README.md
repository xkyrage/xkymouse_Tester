XKYMOUSE TESTER
<img width="2556" height="776" alt="image" src="https://github.com/user-attachments/assets/62cfa1e3-68af-44e9-b022-2fb65a149dd9" />
![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Status](https://img.shields.io/badge/status-stable-success)
![Tech](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JavaScript-orange)
![License](https://img.shields.io/badge/license-Proprietary-red)

**XKYMouse Tester** is a browser-based mouse diagnostic and performance analysis tool built to evaluate input behavior, precision, and consistency in real time.

Designed for both casual users and enthusiasts, it provides visual feedback and analytical insights into how your mouse performs under actual usage conditions.

---

## 🚀 Features

### ⚡ Core Metrics
- **CPS (Clicks Per Second)** — Real-time click speed tracking  
- **Latency Estimation** — Frame-based input delay approximation  
- **Polling Rate (Hz)** — Movement frequency detection from mouse path  
- **Jitter Detection** — Measures movement consistency and micro-variation  

---

### 🎯 Interaction Testing
- **Interactive Mouse UI**
  - Left, right, middle, and side buttons visualization  
- **Scroll Wheel Simulation**
  - Direction-based animated feedback  
- **Hover Highlight Zones**
  - Visual feedback when hovering button regions  

---

### 🎮 Movement Analysis
- **Drag Test (Slider Mode)**
  - Controlled horizontal movement test  
  - Designed for precision and smoothness analysis  

---

### 📈 Visualization
- **Real-Time Graph**
  - Latency spikes  
  - Polling rate fluctuations  

---

### 🧠 Advanced Behavior
- Scoped input system (testing only inside defined zones)  
- Side button detection (browser-dependent)  
- Lightweight, no external libraries  

---

## 🛠 Tech Stack

- HTML5  
- CSS3 (Custom UI, Dark Theme)  
- Vanilla JavaScript (ES Modules)  

No frameworks. No dependencies. Pure performance.

---

## 📂 Project Structure
mouse-tester-pro/
├── index.html
├── style.css
├── main.js
└── modules/
    ├── input.js
    ├── stats.js
    ├── ui.js
    ├── graph.js
    ├── drag.js
    ├── raw.js
    ├── analytics.js
    └── navigation.js
    
## ⚠️ Limitations

- Polling rate is **estimated**, not raw USB data  
- Latency is approximated using `requestAnimationFrame`  
- Side mouse buttons may not be detected depending on:
  - Browser  
  - OS  
  - Mouse driver/software  

---

## 🎯 Purpose

This project is built as:

- A **mouse diagnostic tool**  
- A **frontend engineering project**  
- A foundation for future input-analysis systems  

---

## 🧪 Future Improvements

- Heatmap visualization  
- Session replay  
- Accuracy scoring system  
- Raw input / HID integration  
- Export analytics (JSON)  

---

## 👤 Author

**xkyrage (Tegar Ibrahim)**  
2026 — All Rights Reserved  

---

## 📜 License

This project is proprietary.  
Do not redistribute without permission.  

---

## 💬 Final Note

This isn’t just a tester —  
it’s a foundation for building **real input analysis tools**.
