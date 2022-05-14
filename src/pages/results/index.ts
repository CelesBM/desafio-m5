import "../../router";
import { state } from "../../state";

const results = {
  win: require("url:../../images/ganaste.png"),
  lose: require("url:../../images/perdiste.png"),
  tie: require("url:../../images/empate.png")
};

export function initResults(params){
  
  const div = document.createElement("div");
	const style = document.createElement("style");

  var myScore = state.data.history.myScore;
	var botScore = state.data.history.botScore;

  style.innerHTML = `
  `;

  div.innerHTML = `
  <div class="container">

    <div class="win">
      <img class="win-img" src=${results.win}></img>
    </div>

    <div class="lose">
      <img class="lose-img" src=${results.lose}></img>
    </div>

    <div class="tie">
      <img class="tie-img" src=${results.tie}></img>
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

	const goBack = div.querySelector(".go-back");
	const goStart = div.querySelector(".go-start");

	goBack.addEventListener("click", () => {
		params.goTo("/game/");
		location.reload();
	});

	goStart.addEventListener("click", () => {
		params.goTo("/welcome/");
	});

	div.appendChild(style);
	return div;
}