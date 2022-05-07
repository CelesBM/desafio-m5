const hands = {
	rock: require("url:../../img/piedra.png"),
	paper: require("url:../../img/papel.png"),
	scissor: require("url:../../img/tijeras.png"),
};

export function initHands(){
    class HandMove extends HTMLElement {
        shadow: ShadowRoot;
        constructor() {
            super();
            this.shadow = this.attachShadow({ mode: "open" });
            this.render();
        }
        render(){
            const div = document.createElement("div");
            const style = document.createElement("style");
            const hand = this.getAttribute("hand");
           
            style.innerHTML = `
            .hand{
                height: 128px;
                width: 56px;
            }
            `;

            div.innerHTML = `
            <img class="hand" src=${hands[hand]}></img>;
            `

            this.shadow.appendChild(style);
            this.shadow.appendChild(div)
        }
    }
    customElements.define("hand-move", HandMove);
};