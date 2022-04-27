import "../../router";

export function initWelcomePage(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML = `
    .title{
        font-size: 80px;
        color: #009048;
    }
    `;
   
    div.innerHTML = `
    <h1 class="title">Piedra Papel ó Tijera</h1>
    `;

    div.appendChild(style);
    return div;
    
}