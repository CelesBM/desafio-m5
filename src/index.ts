import { initRouter } from "./router";

import "./pages/welcome";
import "./pages/instructions";
import "./pages/game";
import "./pages/results"

import "./components/button-start";
import "./components/move/hands";

(function () {
    const root = document.querySelector(".root");
    initRouter(root);
  })();