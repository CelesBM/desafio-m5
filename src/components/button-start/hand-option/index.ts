export function Hands(){
    class HandOption extends HTMLElement {
        constructor() {
            super();
            this.render();
        }
        render(){
            const shadow = this.attachShadow( {mode: "open"} );
            const style = document.createElement("style");
            const content = this.textContent;
           
            style.innerHTML = `
            .button-start{
                background-color: #006CFC;
            }
            `

            shadow.appendChild(style);
        }
    }
    customElements.define("hand-option", HandOption);
};