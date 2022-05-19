import "../../router";
import { state } from "../../state";

const results = {
  win: require("url:../../images/ganaste.png"),
  lose: require("url:../../images/perdiste.png"),
  tie: require("url:../../images/empate.png"),
};

export function initResults(params){
  
  const div = document.createElement("div");
	const style = document.createElement("style");

  var myScore = state.data.history.myScore;
	var botScore = state.data.history.botScore;

  style.innerHTML = `
  .container{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .win{
    display: none;
    padding: 20px;
  }
  .lose{
    display: none;
    padding: 20px;
  }

  .tie{
    display: none;
    padding: 20px;
  }

  .score{
    border: solid 10px;
    background-color: white;
  }

  .score-title{
    font-family: 'Luckiest Guy', cursive;  
		font-size: 40px;
    margin: 5px;
    padding: 5px 80px;
    text-align: center;
  }
  
  .score-participant{
    font-family: 'Luckiest Guy', cursive;  
		font-size: 30px;
    margin: 5px;
    padding: 5px 10px;
    text-align: end;
  }

  .go-back{
    margin-top: 20px;
  }

  .go-back-button{
    margin-left: -11px
  }
  `;

  div.innerHTML = `
  <div class="container">

    <div class="win">
      <img class="win-img" src=${results.win} width= 350px height= 350px></img>
    </div>

    <div class="lose">
      <img class="lose-img" src=${results.lose} width= 350px height= 350px></img>
    </div>

    <div class="tie">
      <img class="tie-img" src=${results.tie} width= 300px height= 300px></img>
    </div>

    <div class="score">
      <h2 class="score-title">Score</h2>
      <h3 class="score-participant">Vos: ${myScore}</h3>
      <h3 class="score-participant">Máquina: ${botScore}</h3>
    </div>

    <div class="go-back">
      <button-start class="go-back-button">Volver a jugar</button-start>
    </div>

  </div>
  `;

  const currentGame = state.getState().currentGame;
	
  const myPlay = currentGame.myPlay;
	const botPlay = currentGame.botPlay;
	
  const whoWins = state.whoWins(myPlay, botPlay);
	
  const win: any = div.querySelector(".win");
	const lose: any = div.querySelector(".lose");
	const tie: any = div.querySelector(".tie");

	if (whoWins == "win") {
		win.style.display = "inherit";
	} else if (whoWins == "lose") {
		lose.style.display = "inherit";
	} else if (whoWins == "tie") {
		tie.style.display = "inherit";
	}

	const goBack = div.querySelector(".go-back");

	goBack.addEventListener("click", () => {
		params.goTo("/game/");
		location.reload();
	});

	div.appendChild(style);
	return div;
}
