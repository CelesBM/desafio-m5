import { initWelcomePage } from "./pages/welcome";
import { initInstructionsPage } from "./pages/instructions";

const routes = [
    {
        path: /\/welcome/,
        component: initWelcomePage,
    },
    {
        path: /\/instructions/,
        component: initInstructionsPage,
    }
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

    handleRoute(location.pathname);

//   if(location.pathname == "/"){
//		goTo("/desafio-m5/welcome");
//	} else{
//		handleRoute(location.pathname);
//	}

//	window.onpopstate = function () {
//		handleRoute(location.pathname);
//	};
}
