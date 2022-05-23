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

    @media (min-width: 769px){
    .title{
         margin-top: 10%;
         margin-bottom: 5%;
    }}

    @media (min-width: 769px) {
    .button{
        margin-left: 37%;
    }}

    .container-hands{
        display: flex;
        justify-content: space-between;
        position: relative;
        top: 100px;
        margin: 0px 60px
    }

    @media (min-width: 769px) {
    .container-hands{        
        top: 190px;
        margin: 0px 600px
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

    const buttonEl = div.querySelector(".button");
    buttonEl.addEventListener('click',()=>{
    params.goTo("/desafio-m5/instructions")
    });

    div.appendChild(style);
    return div;
}