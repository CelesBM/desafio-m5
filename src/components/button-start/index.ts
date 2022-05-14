class ButtonStart extends HTMLElement {
   
    constructor() {
        super();
        this.render();
        }
    
    render(){
        const shadow = this.attachShadow( {mode: "open"} );
        const style = document.createElement("style");
        const button = document.createElement("button");
        button.className = "root";
           
        style.innerHTML = `
        .root{
            font-family: 'Luckiest Guy', cursive;
            font-size: 40px;
            color: #D8FCFC;
            background-color: #006CFC;
            border: 10px solid #001997;
            padding: 19px 87px;
            margin-left: 25px;
        }
        `
        button.textContent = this.textContent;
        shadow.appendChild(button);
        shadow.appendChild(style);
        }
    }

    customElements.define("button-start", ButtonStart);