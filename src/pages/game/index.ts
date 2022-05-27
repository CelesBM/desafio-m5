import "../../router";
import { state } from "../../state";

export function initGame(params){

	const options = ["piedra", "papel", "tijera"];
	const randomOption = Math.floor(Math.random() * options.length);
	var botRandomPlay = options[randomOption];

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

	const handsCont: any = div.querySelector(".container-hands");
	
	const paperEl: any = div.querySelector(".paper");
	const rockEl: any = div.querySelector(".rock");
	const scissorEl: any = div.querySelector(".scissor");

	const botHandsStyles = document.createElement("style");

	function botGame(params){

		if(params == "piedra"){
			botHandsStyles.innerHTML = `
			.bot-hands {display: inherit;}
			.bot-rock {display: inherit;}
			.bot-paper {display: none;}
			.bot-scissor {display: none;}
			.countdown {display: none;}
			`;
		}
		else if(params == "papel"){
			botHandsStyles.innerHTML = `
			.bot-hands {display: inherit;}
			.bot-rock {display: none;}
			.bot-paper {display: inherit;}
			.bot-scissor {display: none;}
			.countdown {display: none;}
			`;
		}
		else if(params == "tijera"){
			botHandsStyles.innerHTML = `
			.bot-hands {display: inherit;}
			.bot-rock {display: none;}
			.bot-paper {display: none;}
			.bot-scissor {display: inherit;}
			.countdown {display: none;}
			`;
		}
	}

	setTimeout(() =>{
		botGame(botRandomPlay);
		currentState.currentGame.botPlay = `${botRandomPlay}`;
		console.log(currentState.currentGame);
	}, 4000); 

	const currentState = state.getState();
	
	function playGame(hand) {

		if (hand == "rock") {
			paperEl.style.display = "none";
			scissorEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			rockEl.classList.remove(".handview");
			rockEl.classList.add("selected");
			//botGame(botRandomPlay);
		} 
		else if (hand == "paper") {
			rockEl.style.display = "none";
			scissorEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			paperEl.classList.remove(".handview");
			paperEl.classList.add("selected");
			//botGame(botRandomPlay);
		} 
		else if (hand == "scissor") {
			paperEl.style.display = "none";
			rockEl.style.display = "none";
			handsCont.style.justifyContent = "center";
			scissorEl.classList.remove(".handview");
			scissorEl.classList.add("selected");
			//botGame(botRandomPlay);
		}
	}

	for (const h of handsCont.children) {

		h.addEventListener("click", () => {
			
			const select = h.getAttribute("hand");

			if (select == "rock") {
				state.setMove("piedra");
				setTimeout(() => {
					playGame("rock");
				}, 4000);
			} 
			else if (select == "paper") {
				state.setMove("papel");
				setTimeout(() => {
					playGame("paper");
				}, 4000);
			} 
			else if (select == "scissor") {
				state.setMove("tijera");
				setTimeout(() => {
					playGame("scissor");
				}, 4000);
			}

		});
	}

	setTimeout(() => {	
		if (currentState.currentGame.myPlay == "") {
			params.goTo("/desafio-m5/instructions/");
		} 
		else {
			params.goTo("/desafio-m5/results/");
		}
	}, 5000);

    div.appendChild(style);
	div.appendChild(botHandsStyles);
	return div;

}
