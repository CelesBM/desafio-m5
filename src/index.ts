import { initRouter } from "./router";
import "./pages/instructions";
import "./pages/welcome";


(function () {
    const root = document.querySelector(".root");
    initRouter(root);
  })();