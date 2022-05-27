function n(n,t,e,i){Object.defineProperty(n,t,{get:e,set:i,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},i={},o=t.parcelRequire9acc;function a(n){const t=document.createElement("div"),e=document.createElement("style");e.innerHTML="\n    .title{\n        font-family: 'Luckiest Guy', cursive;\n        font-size: 80px;\n        color: #009048;\n        text-align: center;\n    }\n\n    @media (min-width: 769px){\n    .title{\n         margin-top: 10%;\n         margin-bottom: 5%;\n    }}\n\n    @media (min-width: 769px) {\n    .button{\n        margin-left: 37%;\n    }}\n\n    .container-hands{\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n        top: 100px;\n        margin: 0px 60px\n    }\n\n    @media (min-width: 769px) {\n    .container-hands{        \n        top: 190px;\n        margin: 0px 600px\n    }}\n    ",t.innerHTML='\n    <div class="container">\n\n    <h1 class="title">Piedra Papel ó Tijera</h1>\n    <button-start class="button">Empezar</button-start>\n    \n    <div class="container-hands">\n\n    <div class="hand"><hand-move hand="paper"></hand-move></div>\n    <div class="hand"><hand-move hand="rock"></hand-move></div>\n    <div class="hand"><hand-move hand="scissor"></hand-move></div>\n    \n    </div>\n\n    </div>\n    ';return t.querySelector(".button").addEventListener("click",(()=>{n.goTo("/desafio-m5/instructions")})),t.appendChild(e),t}function s(n){const t=document.createElement("div"),e=document.createElement("style");e.innerHTML="\n    .instructions{\n        font-family: 'Luckiest Guy', cursive;\n        font-size: 40px;\n        color: #000000;\n        text-align: center;\n        padding: 15px 31px 20px 31px;\n    }\n    @media (min-width: 769px) {\n        .instructions {\n         margin-top: 10%;\n         margin-bottom: 5%;\n         padding: 80px 520px 80px 520px;\n         margin: 0 auto;\n        }}\n    .button{\n        margin-left: 18px;\n        }\n   \n    @media (min-width: 769px) {\n        .button {\n        margin-left: 38%;\n        }}\n\n    .container-hands{\n        display: flex;\n        justify-content: space-between;\n        position: relative;\n        top: 100px;\n        margin: 0px 60px\n        }\n    \n    @media (min-width: 769px) {\n    .container-hands{        \n        top: 190px;\n        margin: 0px 600px\n        }}\n    ",t.innerHTML='\n    <div class="container">\n\n    <p class="instructions">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>\n    <button-start class="button">¡Jugar!</button-start>\n\n    <div class="container-hands">\n\n    <div class="hand"><hand-move hand="paper"></hand-move></div>\n    <div class="hand"><hand-move hand="rock"></hand-move></div>\n    <div class="hand"><hand-move hand="scissor"></hand-move></div>\n\n    </div>\n\n    </div>\n    ';return t.querySelector(".button").addEventListener("click",(()=>{n.goTo("/desafio-m5/game")})),t.appendChild(e),t}null==o&&((o=function(n){if(n in e)return e[n].exports;if(n in i){var t=i[n];delete i[n];var o={id:n,exports:{}};return e[n]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(n,t){i[n]=t},t.parcelRequire9acc=o),o.register("27Lyk",(function(t,e){var i,o;n(t.exports,"register",(()=>i),(n=>i=n)),n(t.exports,"resolve",(()=>o),(n=>o=n));var a={};i=function(n){for(var t=Object.keys(n),e=0;e<t.length;e++)a[t[e]]=n[t[e]]},o=function(n){var t=a[n];if(null==t)throw new Error("Could not resolve bundle with id "+n);return t}})),o.register("jCWVD",(function(n,t){n.exports=new URL(o("27Lyk").resolve("iTaEq"),import.meta.url).toString()})),o.register("59w94",(function(n,t){n.exports=new URL(o("27Lyk").resolve("eCOwJ"),import.meta.url).toString()})),o.register("7G7Yo",(function(n,t){n.exports=new URL(o("27Lyk").resolve("2w0Vc"),import.meta.url).toString()})),o.register("4I1fB",(function(n,t){n.exports=new URL(o("27Lyk").resolve("h5stw"),import.meta.url).toString()})),o.register("iLJZL",(function(n,t){n.exports=new URL(o("27Lyk").resolve("hqVYS"),import.meta.url).toString()})),o.register("794pQ",(function(n,t){n.exports=new URL(o("27Lyk").resolve("2BL3u"),import.meta.url).toString()})),o("27Lyk").register(JSON.parse('{"dZpbI":"index.c7ad0b1b.js","iTaEq":"ganaste.b57d764c.png","eCOwJ":"perdiste.c6292095.png","2w0Vc":"empate.eb483c91.png","h5stw":"piedra.3535c2a2.png","hqVYS":"papel.7396d2a8.png","2BL3u":"tijeras.dcc90380.png"}'));const r={data:{currentGame:{myPlay:"",botPlay:""},history:{myScore:0,botScore:0}},listeners:[],getStorage(){const n=JSON.parse(localStorage.getItem("data"));n&&(console.log(n),this.setState(n))},getState(){return this.data},setState(n){this.data=n;for(const n of this.listeners)n();this.savedData()},subscribe(n){this.listeners.push(n)},setScore(n){const t=this.getState();"win"==n?t.history.myScore++:"lose"==n&&t.history.botScore++,this.setState(t)},restartGame(){const n=this.getState();n.currentGame.myPlay="",n.currentGame.botPlay="",this.setState(n)},whoWins(n,t){const e=["piedra"==n&&"tijera"==t,"papel"==n&&"piedra"==t,"tijera"==n&&"papel"==t].includes(!0),i=["piedra"==n&&"papel"==t,"papel"==n&&"tijera"==t,"tijera"==n&&"piedra"==t].includes(!0);return 1==e?"win":1==i?"lose":"tie"},setMove(n){this.getState().currentGame.myPlay=n,this.setScore()},savedData(){const n=this.getState();localStorage.setItem("data",JSON.stringify(n))}};function d(n){const t=["piedra","papel","tijera"];var e=t[Math.floor(Math.random()*t.length)];const i=document.createElement("div"),o=document.createElement("style");var a=3;const s=setInterval((()=>{a--;i.querySelector(".countdown").textContent=String(a),a<1&&clearInterval(s)}),1e3);o.innerHTML="\n    .container{\n\t\theight: 100vh;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tjustify-content: space-between;\n\t\talign-items: center;\n\t\toverflow-y: hidden;\n    }\n\n    .bot-hands{\n\t   display: none;\n\t   transform: rotate(180deg);\n\t   position: relative;\n\t   top: -20px;\n    }\n\n    .countdown{\n\t\tfont-family: 'Luckiest Guy', cursive;  \n\t\tfont-size: 150px;\n\t\tmargin-top: 150px;\n    }\n\n\t@media (min-width: 769px) {\n\t\t.countdown{\n\t\t\tfont-size: 250px;\n\t\t}}\n\n    .container-hands{\n\t\tdisplay: flex;\n\t\tposition: relative;\n\t\ttop: 20px;\n    }\n\n\t.bot-paper, .bot-rock, .bot-scissor{\n\t\tpadding: 0px 25px;\t\n\t}\n\n\t@media (min-width: 769px) {\n\t\t.bot-paper, .bot-rock, .bot-scissor{\n\t\t\tpadding: 0 150px;\n\t\t}}\n\n    .handview{\n\t    padding: 0px 25px;\n\t\topacity: 0.5;\n    }\n\n\t@media (min-width: 769px) {\n\t\t.handview{\n\t\t\tpadding: 0 150px;\n\t\t}}\n\n\t.handview:hover{\n\t\ttop: 0px;\n\t\topacity: 1;\n\t\tdisplay: inherit;\n\t\ttransform: translateY(-30px);\n\t\ttransition: all 0.5s;\n\t  }\n\n\t  .selected {\n\t\tposition: absolut;\n\t\topacity: 1;\n\t  }\n    ",i.innerHTML=`\n\t<div class="container">\n\n    <div class="bot-hands">\n    \t<hand-move hand="paper" class="bot-paper"></hand-move>\n   \t\t<hand-move hand="rock" class="bot-rock"></hand-move>\n    \t<hand-move hand="scissor" class="bot-scissor"></hand-move>\n    </div>\n\n\t<div>\n    \t<div class="countdown">${a}</div>\n\t</div>\n\n    <div class="container-hands">\n\t\t<hand-move hand="paper" class="handview paper"></hand-move>\n   \t\t<hand-move hand="rock" class="handview rock"></hand-move>\n    \t<hand-move hand="scissor" class="handview scissor"></hand-move>\n    </div>\n\n    </div>\n    `;const d=i.querySelector(".container-hands"),c=i.querySelector(".paper"),l=i.querySelector(".rock"),p=i.querySelector(".scissor"),m=document.createElement("style");setTimeout((()=>{var n;"piedra"==(n=e)?m.innerHTML="\n\t\t\t.bot-hands {display: inherit;}\n\t\t\t.bot-rock {display: inherit;}\n\t\t\t.bot-paper {display: none;}\n\t\t\t.bot-scissor {display: none;}\n\t\t\t.countdown {display: none;}\n\t\t\t":"papel"==n?m.innerHTML="\n\t\t\t.bot-hands {display: inherit;}\n\t\t\t.bot-rock {display: none;}\n\t\t\t.bot-paper {display: inherit;}\n\t\t\t.bot-scissor {display: none;}\n\t\t\t.countdown {display: none;}\n\t\t\t":"tijera"==n&&(m.innerHTML="\n\t\t\t.bot-hands {display: inherit;}\n\t\t\t.bot-rock {display: none;}\n\t\t\t.bot-paper {display: none;}\n\t\t\t.bot-scissor {display: inherit;}\n\t\t\t.countdown {display: none;}\n\t\t\t"),h.currentGame.botPlay=`${e}`,console.log(h.currentGame)}),4e3);const h=r.getState();function u(n){"rock"==n?(c.style.display="none",p.style.display="none",d.style.justifyContent="center",l.classList.remove(".handview"),l.classList.add("selected")):"paper"==n?(l.style.display="none",p.style.display="none",d.style.justifyContent="center",c.classList.remove(".handview"),c.classList.add("selected")):"scissor"==n&&(c.style.display="none",l.style.display="none",d.style.justifyContent="center",p.classList.remove(".handview"),p.classList.add("selected"))}for(const n of d.children)n.addEventListener("click",(()=>{const t=n.getAttribute("hand");"rock"==t?(r.setMove("piedra"),setTimeout((()=>{u("rock")}),4e3)):"paper"==t?(r.setMove("papel"),setTimeout((()=>{u("paper")}),4e3)):"scissor"==t&&(r.setMove("tijera"),setTimeout((()=>{u("scissor")}),4e3))}));return setTimeout((()=>{""==h.currentGame.myPlay?n.goTo("/desafio-m5/instructions/"):n.goTo("/desafio-m5/results/")}),5e3),i.appendChild(o),i.appendChild(m),i}const c=o("jCWVD"),l=o("59w94"),p=o("7G7Yo");function m(n){const t=r.getState(),e=r.whoWins(t.currentGame.myPlay,t.currentGame.botPlay);r.setScore(e),r.restartGame();const i=document.createElement("div"),o=document.createElement("style");var a=r.data.history.myScore,s=r.data.history.botScore;o.innerHTML="\n  .container{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .win{\n    display: none;\n    padding: 20px;\n  }\n  .lose{\n    display: none;\n    padding: 20px;\n  }\n\n  .tie{\n    display: none;\n    padding: 20px;\n  }\n\n  .score{\n    border: solid 10px;\n    background-color: white;\n  }\n\n  .score-title{\n    font-family: 'Luckiest Guy', cursive;  \n\t\tfont-size: 40px;\n    margin: 5px;\n    padding: 5px 80px;\n    text-align: center;\n  }\n  \n  .score-participant{\n    font-family: 'Luckiest Guy', cursive;  \n\t\tfont-size: 30px;\n    margin: 5px;\n    padding: 5px 10px;\n    text-align: end;\n  }\n\n  .go-back{\n    margin-top: 20px;\n  }\n\n  .go-back-button{\n    margin-left: -11px\n  }\n  ",i.innerHTML=`\n  <div class="container">\n\n    <div class="win">\n      <img class="win-img" src=${c} width= 350px height= 350px></img>\n    </div>\n\n    <div class="lose">\n      <img class="lose-img" src=${l} width= 350px height= 350px></img>\n    </div>\n\n    <div class="tie">\n      <img class="tie-img" src=${p} width= 300px height= 300px></img>\n    </div>\n\n    <div class="score">\n      <h2 class="score-title">Score</h2>\n      <h3 class="score-participant">Vos: ${a}</h3>\n      <h3 class="score-participant">Máquina: ${s}</h3>\n    </div>\n\n    <div class="go-back">\n      <button-start class="go-back-button">Volver a jugar</button-start>\n    </div>\n\n  </div>\n  `;const d=r.getState().currentGame,m=(d.myPlay,d.botPlay,i.querySelector(".win")),h=i.querySelector(".lose"),u=i.querySelector(".tie");"win"==e?m.style.display="inherit":"lose"==e?h.style.display="inherit":"tie"==e&&(u.style.display="inherit");return i.querySelector(".go-back").addEventListener("click",(()=>{n.goTo("/desafio-m5/game/")})),i.appendChild(o),i}class h extends HTMLElement{constructor(){super(),this.render()}render(){const n=this.attachShadow({mode:"open"}),t=document.createElement("style"),e=document.createElement("button");e.className="root",t.innerHTML="\n        .root{\n            font-family: 'Luckiest Guy', cursive;\n            font-size: 40px;\n            color: #D8FCFC;\n            background-color: #006CFC;\n            border: 10px solid #001997;\n            padding: 19px 87px;\n            margin-left: 25px;\n        }\n        ",e.textContent=this.textContent,n.appendChild(e),n.appendChild(t)}}customElements.define("button-start",h);const u={rock:o("4I1fB"),paper:o("iLJZL"),scissor:o("794pQ")};class v extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.render()}render(){const n=document.createElement("div"),t=document.createElement("style"),e=this.getAttribute("hand");t.innerHTML="\n            .hand{\n                height: 138px;\n                width: 66px;\n            }\n            ",n.innerHTML=`\n            <img class="hand" src=${u[e]}></img>\n            `,this.shadow.appendChild(t),this.shadow.appendChild(n)}}customElements.define("hand-move",v),function(n){const t=[{path:/\/desafio-m5/,component:a},{path:/\/desafio-m5\/welcome/,component:a},{path:/\/desafio-m5\/instructions/,component:s},{path:/\/desafio-m5\/game/,component:d},{path:/\/desafio-m5\/results/,component:m}];function e(n){history.pushState({},"",n),i(n)}function i(i){for(const o of t)if(o.path.test(i)){const t=o.component({goTo:e});n.firstChild&&n.firstChild.remove(),n.appendChild(t)}}location.host.includes("github.io"),e("/desafio-m5/welcome"),window.onpopstate=function(){i(location.pathname)}}(document.querySelector(".root")),r.getStorage();
//# sourceMappingURL=index.c7ad0b1b.js.map
