import "../../router";

export function initInstructionsPage(params){
    const div = document.createElement("div");
    const style = document.createElement("style");

    style.innerHTML=`
    .instructions{
        font-family: 'Luckiest Guy', cursive;
        font-size: 40px;
        color: #000000;
        text-align: center;
        padding: 15px 31px 20px 31px;
    }
    @media (min-width: 769px) {
        .instructions {
         margin-top: 10%;
         margin-bottom: 5%;
         padding: 80px 520px 80px 520px;
         margin: 0 auto;
        }}
    .button{
        margin-left: 18px;
        }
   
    @media (min-width: 769px) {
        .button {
        margin-left: 38%;
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
    `

    div.innerHTML = `
    <div class="container">

    <p class="instructions">Presioná jugar y elegí: piedra, papel o tijera antes de que pasen los 3 segundos.</p>
    <button-start class="button">¡Jugar!</button-start>

    <div class="container-hands">

    <div class="hand"><hand-move hand="paper"></hand-move></div>
    <div class="hand"><hand-move hand="rock"></hand-move></div>
    <div class="hand"><hand-move hand="scissor"></hand-move></div>

    </div>

    </div>
    `;

    const buttonEl = div.querySelector(".button");
    buttonEl.addEventListener('click',()=>{
    params.goTo("/desafio-m5/game")
    });

    div.appendChild(style);
    return div;
}
