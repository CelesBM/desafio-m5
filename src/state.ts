type Played = "piedra" | "papel" | "tijera";

const state = {
	data: {
		currentGame: {
			myPlay: "",
			botPlay: "",
		},
		history: {
			myScore: 0,
			botScore: 0,
		},
	},

	listeners: [],

	getStorage(){
		const localData = JSON.parse(localStorage.getItem("data"));
	
		if(localData){
			console.log(localData);
			this.setState(localData);
		} else{
			return;
		}
	},

	getState(){
		return this.data;
	},

	setState(newState){
		this.data = newState;
		for(const cb of this.listeners){
			cb();
		}
		this.savedData();
	},

	subscribe(callback: (any) => any){
		this.listeners.push(callback);
	},

	setScore(){
		const currentState = this.getState();
		
		const myPlay = this.getState().currentGame.myPlay;
		const botPlay = this.getState().currentGame.botPlay;
		const currentWhoWins = this.whoWins(myPlay, botPlay);

		const myScore = currentState.history.myScore;
		const botScore = currentState.history.botScore;

		if(currentWhoWins == "win"){
			return this.setState({
				...currentState,
				history: {
					myScore: myScore + 1,
					botScore: botScore,
				},
			});
		} else if(currentWhoWins == "lose"){
			return this.setState({
				...currentState,
				history: {
					myScore: myScore,
					botScore: botScore + 1,
				},
			});
		}
	},

	whoWins(myPlay: Played, botPlay: Played) {
		
		const winRock: boolean = myPlay == "piedra" && botPlay == "tijera";
		const winPaper: boolean = myPlay == "papel" && botPlay == "piedra";
		const winScissor: boolean = myPlay == "tijera" && botPlay == "papel";
		const win = [winRock, winPaper, winScissor].includes(true);
		
		const loseRock: boolean = myPlay == "piedra" && botPlay == "papel";
		const losePaper: boolean = myPlay == "papel" && botPlay == "tijera";
		const loseScissor: boolean = myPlay == "tijera" && botPlay == "piedra";
		const lose = [loseRock, losePaper, loseScissor].includes(true);

		console.log("MYMOVE", myPlay)
		console.log("BOTMOVE", botPlay)

		if (win == true){
			return "win";
		} else if(lose == true){
			return "lose";
		} else{
			return "tie";
		}
	},

	setMove(move: Played){
		const currentState = this.getState();
		currentState.currentGame.myPlay = move;
		this.setScore();
	},

	savedData(){
		const currentHistory = this.getState().history;
		localStorage.setItem("data", JSON.stringify(currentHistory));
	},
};

export { state };