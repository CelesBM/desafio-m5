import "../../router";

export function initWelcomePage(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML = `
    .title{
        font-family: 'Luckiest Guy', cursive;
        font-size: 80px;
        color: #009048;
        text-align: center;
    }
    @media (min-width: 769px) {
        .title {
         
        }}

    .button{
        padding: 19px 92px;
        margin-left: 20px;
        font-family: 'Luckiest Guy', cursive;
        font-size: 40px;
        color: #D8FCFC;
        background-color: #006CFC;
        border: 10px solid #001997;
    }
    @media (min-width: 769px) {
        .button {
         
        }}
    `;
   
    div.innerHTML = `
    <div class="container">

    <h1 class="title">Piedra Papel ó Tijera</h1>
    <button-start class="button">Empezar</button-start>
    
    <div class="container-hands">

    <div class="hand"><hand-move hand="paper"></hand-move></div>
    <div class="hand"><hand-move hand="rock"></hand-move></div>
    <div class="hand"><hand-move hand="scissor"></hand-move></div>
    
    </div>

    </div>
    `;

    div.appendChild(style);
    return div;
}