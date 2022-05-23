import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";
import { initGame } from "./pages/game";
import { initResults } from "./pages/results";

const routes = [
    {
        path: /\//,
        component: initWelcomePage,
    },
    {
        path: /\/desafio-m5\/welcome/,
        component: initWelcomePage,
    },
    {
        path: /\/desafio-m5\/instructions/,
        component: initInstructionsPage,
    },
    {
        path: /\/desafio-m5\/game/,
        component: initGame,
    },
    {
        path: /\/desafio-m5\/results/,
        component: initResults,
    },

];

const BASE_PATH = "/desafio-m5";

function isGithubPages() {
    return location.host.includes("github.io");
  }


export function initRouter(container: Element){
  
    function goTo(path){
        const completePath = isGithubPages() ? BASE_PATH + path : path;
        history.pushState({}, "", completePath);
     handleRoute(completePath);
    }

    function handleRoute(route){

        const newRoute = isGithubPages() ? route.replace(BASE_PATH, "") : route;
    
        for(const r of routes){
            if(r.path.test(newRoute)){
                const el = r.component({goTo : goTo});
               
                if(container.firstChild){
                    container.firstChild.remove();
                }

                container.appendChild(el);
            }
        }
    }

    if (location.host.includes("github.io") || "/") {
        goTo("/desafio-m5/welcome");
    } else {
        handleRoute(location.pathname);
    }

    window.onpopstate = function() {
        handleRoute(location.pathname);
    };
}
