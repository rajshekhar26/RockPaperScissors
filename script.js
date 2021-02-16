const rps = document.querySelectorAll('.rps');
const reset = document.getElementById('reset');
const roundNumber = document.getElementById('roundnumber');
const roundResult = document.getElementById('roundresult');
const roundSelection = document.getElementById('roundselection');
const yourScore = document.getElementById('playerscore');
const compScore = document.getElementById('computerscore');
const resultGame = document.getElementById('resultgame');
let playerSelection;
let computerSelection;
let round = 0;
let playerScore = 0;
let computerScore = 0;

const computerPlay = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	return !randomNumber ? 'rock' : randomNumber === 1 ? 'paper' : 'scissors';
};

const displayScore = () => {
	yourScore.textContent = `${playerScore}`;
	compScore.textContent = `${computerScore}`;
};

const playerWin = () => {
	playerScore++;
	roundResult.textContent = `You win!`;
	roundSelection.textContent = `${playerSelection} beats ${computerSelection}`;
};

const computerWin = () => {
	computerScore++;
	roundResult.textContent = `You lose!`;
	roundSelection.textContent = `${computerSelection} beats ${playerSelection}`;
};

const matchDraw = () => {
	roundResult.textContent = `It's a draw!`;
	roundSelection.textContent = `${computerSelection} draws ${playerSelection}`;
};

const displayWinner = () => {
	if (playerScore === 5) {
		playerScore = 0;
		computerScore = 0;
		resultGame.textContent = `You've won the game`;
		round = 0;
	} else if (computerScore === 5) {
		playerScore = 0;
		computerScore = 0;
		resultGame.textContent = `You've lost the game`;
		round = 0;
	}
};

const playRound = () => {
	resultGame.textContent = '';
	round++;
	roundNumber.textContent = `Round ${round}`;
};

const getWinner = () => {
	if (
		(playerSelection === 'rock' && computerSelection === 'rock') ||
		(playerSelection === 'paper' && computerSelection === 'paper') ||
		(playerSelection === 'scissors' && computerSelection === 'scissors')
	) {
		matchDraw();
	} else if (
		(playerSelection === 'rock' && computerSelection === 'paper') ||
		(playerSelection === 'paper' && computerSelection === 'scissors') ||
		(playerSelection === 'scissors' && computerSelection === 'rock')
	) {
		computerWin();
	} else if (
		(playerSelection === 'rock' && computerSelection === 'scissors') ||
		(playerSelection === 'paper' && computerSelection === 'rock') ||
		(playerSelection === 'scissors' && computerSelection === 'paper')
	) {
		playerWin();
	}
};

const resetProgress = () => {
	computerScore = 0;
	playerScore = 0;
	roundNumber.textContent = 'Round 0';
	roundResult.textContent = '';
	roundSelection.textContent = '';
	resultGame.textContent = '';
	yourScore.textContent = 0;
	compScore.textContent = 0;
};

const startGame = () => {
	rps.forEach((btn) =>
		btn.addEventListener('click', (e) => {
			playerSelection = e.target.id;
			computerSelection = computerPlay();
			playRound();
			getWinner();
			displayScore();
			displayWinner();
		})
	);
};

reset.addEventListener('click', () => {
	resetProgress();
	startGame();
});
