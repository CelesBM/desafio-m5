import "../../router";
import { state } from "../../state";

const options = ["piedra", "papel", "tijera"];
const randomOption = Math.floor(Math.random() * options.length);
var botRandomPlay = options[randomOption];

export function initGame(params){
   
    const div = document.createElement("div");
    const style = document.createElement("style");
	var counter = 3;
	
	const countdown = setInterval(()=>{
		counter --;
		const counterEl = div.querySelector(".countdown");
		counterEl.textContent = String(counter);

		if(counter < 1) { clearInterval(countdown); }
	}, 1000);

    style.innerHTML = `
    .container{
		height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		overflow-y: hidden;
    }

    .bot-hands{
	   display: none;
	   transform: rotate(180deg);
	   position: relative;
	   top: -20px;
    }

    .countdown{
		font-family: 'Luckiest Guy', cursive;  
		font-size: 150px;
		margin-top: 150px;
    }

	@media (min-width: 769px) {
		.countdown{
			font-size: 250px;
		}}

    .container-hands{
		display: flex;
		position: relative;
		top: 20px;
    }

	.bot-paper, .bot-rock, .bot-scissor{
		padding: 0px 25px;	
	}

	@media (min-width: 769px) {
		.bot-paper, .bot-rock, .bot-scissor{
			padding: 0 150px;
		}}

    .handview{
	    padding: 0px 25px;
		opacity: 0.5;
    }

	@media (min-width: 769px) {
		.handview{
			padding: 0 150px;
		}}

	.handview:hover{
		top: 0px;
		opacity: 1;
		display: inherit;
		transform: translateY(-30px);
		transition: all 0.5s;
	  }

	  .selected {
		position: absolut;
		opacity: 1;
	  }
    `;

    div.innerHTML = `
	<div class="container">

    <div class="bot-hands">
    	<hand-move hand="paper" class="bot-paper"></hand-move>
   		<hand-move hand="rock" class="bot-rock"></hand-move>
    	<hand-move hand="scissor" class="bot-scissor"></hand-move>
    </div>

	<div>
    	<div class="countdown">${counter}</div>
	</div>

    <div class="container-hands">
		<hand-move hand="paper" class="handview paper"></hand-move>
   		<hand-move hand="rock" class="handview rock"></hand-move>
    	<hand-move hand="scissor" class="handview scissor"></hand-move>
    </div>

    </div>
    `;

	const countdownEl: any = div.querySelector(".countdown");
	const botHandsEl: any = div.querySelector(".bot-hands");

	const botPaper: any = div.querySelector(".bot-paper");
	const botRock: any = div.querySelector(".bot-rock");
	const botScissor: any = div.querySelector(".bot-scissor");

	const handsCont: any = div.querySelector(".container-hands");
	
	const paperEl: any = div.querySelector(".paper");
	const rockEl: any = div.querySelector(".rock");
	const scissorEl: any = div.querySelector(".scissor");

	function botGame(params) {

		if (params == "piedra") {
			botRock.style.display = "inherit";
			botHandsEl.style.display = "inherit";
			countdownEl.style.display = "none";
		} 
		else if (params == "papel") {
			botPaper.style.display = "inherit";
			botHandsEl.style.display = "inherit";
			countdownEl.style.display = "none";
		} 
		else if (params == "tijera") {
			botScissor.style.display = " inherit";
			botHandsEl.style.display = "inherit";
			countdownEl.style.display = "none";
		}
	}
	
	const botMove = () => {
		new botGame(botRandomPlay);
		return botMove;
	};

	function playGame(hand) {

		if (hand == "rock") {
			paperEl.style.display = "none";
			scissorEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			rockEl.classList.remove(".handview");
			rockEl.classList.add("selected");
			botGame(botRandomPlay);
		} 
		else if (hand == "paper") {
			rockEl.style.display = "none";
			scissorEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			paperEl.classList.remove(".handview");
			paperEl.classList.add("selected");
			botGame(botRandomPlay);
		} 
		else if (hand == "scissor") {
			paperEl.style.display = "none";
			rockEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			scissorEl.classList.remove(".handview");
			scissorEl.classList.add("selected");
			botGame(botRandomPlay);
		}
	}

	for (const h of handsCont.children) {

		h.addEventListener("click", () => {
			
			const select = h.getAttribute("hand");
			clearInterval(countdown);

			if (select == "rock") {
				state.setMove("piedra");
				setTimeout(() => {
					playGame("rock");
				}, 3000);
			} 
			else if (select == "paper") {
				state.setMove("papel");
				setTimeout(() => {
					playGame("paper");
				}, 1000);
			} 
			else if (select == "scissor") {
				state.setMove("tijera");
				setTimeout(() => {
					playGame("scissor");
				}, 1000);
			}
		});
	}

	const currentState = state.getState().currentGame;

	setTimeout(() => {	
		if (currentState.myPlay == "") {
			params.goTo("/instructions/");
		} 
		else {
			params.goTo("/results/");
		}
	}, 5000);

    div.appendChild(style);
    return div;
}