import './starfield/starfield'
import './style.scss'

function Game() {

	this.config = {
		gameWidth: 400,
		gameHeight: 300,
		fps: 50
	}

	// Статы
	this.lives = 3;
	this.width = 0;
	this.height = 0;
	this.gameBound = { left: 0, right: 0, top: 0, bottom: 0 };

	// Стэк очков
	this.stateStack = [];

	this.pressedKeys = {};
	this.gameCanvas = null;
}

Game.prototype.initialise = function (gameCanvas) {

	//  Set the game canvas
	this.gameCanvas = gameCanvas;

	//  Set the game width and height
	this.width = gameCanvas.width;
	this.height = gameCanvas.height;

	//  Set the state game bounds
	this.gameBounds = {
		left: gameCanvas.width / 2 - this.config.gameWidth / 2,
		right: gameCanvas.width / 2 + this.config.gameWidth / 2,
		top: gameCanvas.height / 2 - this.config.gameHeight / 2,
		bottom: gameCanvas.height / 2 + this.config.gameHeight / 2,
	};
};

//  Returns the current state.
Game.prototype.currentState = function () {
	return this.stateStack.length > 0 ? this.stateStack[this.stateStack.length - 1] : null;
}

Game.prototype.moveToState = function (state) {

	//  Are we already in a state?
	if (this.currentState()) {

		//  Before we pop the current state, see if the 
		//  state has a leave function. If it does we can call it.
		if (this.currentState().leave) {
			this.currentState().leave(game);
		}

		this.stateStack.pop();
	}

	//  If there's an enter function for the new state, call it.
	if (state.enter) {
		state.enter(game);
	}

	//  Set the current state.
	this.stateStack.push(state);
}; 
