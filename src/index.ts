import { initRouter } from "./router";
import "./pages/instructions";
import "./pages/welcome";
import "./components/button-start"
import "./components/move/hands"

(function () {
    const root = document.querySelector(".root");
    initRouter(root);
  })();