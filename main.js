import { initInput } from "./modules/input.js";
import { initStats } from "./modules/stats.js";
import { initDrag } from "./modules/drag.js";
import { initHover } from "./modules/ui.js";
import { drawGraph } from "./modules/graph.js";
import { initNavigation } from "./modules/navigation.js";

initStats();
initInput();
initDrag();
initHover();
initNavigation();
drawGraph();