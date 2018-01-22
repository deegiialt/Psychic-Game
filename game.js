//Variables

var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alreadyGuessed = [];
var lettersToGuess = null;

//computer randomly chooses
var compGuess = letters[Math.floor(Math.random() * letters.length)];


//Functions
var updateGuessesLeft = function () {
	document.querySelector("#guessesRemaining").innerHTML = "Guesses Left: " + guessesLeft;
};

var updateWin = function() {
	document.querySelector("#wins").innerHTML = "Wins: " + wins;
};

var updateLoss = function () {
	document.querySelector("#losses").innerHTML = "Losses: " + losses;
};

var updateAlreadyGuessed = function () {
	document.querySelector("#alreadyGuessed").innerHTML = "Already Guessed: " + alreadyGuessed
};

var toBeGuessed = function () {
	this.lettersToGuess = this.letters[Math.floor(Math.random()*letters.length)];
};


//call functions
var updateAll = function () {
	guessesLeft = 9;
	alreadyGuessed = [];

	updateGuessesLeft();
	updateAlreadyGuessed();
	toBeGuessed();
};

updateWin();
updateLoss();
updateGuessesLeft();
toBeGuessed();


//Game
document.onkeyup = function(event) {
	var userInput = event.key.toLowerCase();
	guessesLeft--;
	alreadyGuessed.push(userInput);
	updateGuessesLeft();
	updateAlreadyGuessed();	

	if (guessesLeft > 0) {
		if (userInput == lettersToGuess) {
			wins++;
			updateWin();
			updateAll();
		}
	} else if (guessesLeft === 0) {
		losses++;
		updateLoss();
		updateAll();
		alert("Game Over");
	}
};

