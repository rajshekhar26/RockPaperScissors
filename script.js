const rps = document.querySelectorAll('.rps');
const reset = document.getElementById('reset');
const roundNumber = document.getElementById('roundnumber');
const roundResult = document.getElementById('roundresult');
const roundSelection = document.getElementById('roundselection');
const yourScore = document.getElementById('playerscore');
const compScore = document.getElementById('computerscore');
const resultGame = document.getElementById('resultgame');
let round = 0;
let playerScore = 0;
let computerScore = 0;

// make computer play
const computerPlay = () => {
	let randomNumber = Math.floor(Math.random() * 3);
	return randomNumber === 0
		? 'rock'
		: randomNumber === 1
		? 'paper'
		: 'scissors';
};

const displayScore = () => {
	yourScore.textContent = `${playerScore}`;
	compScore.textContent = `${computerScore}`;
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

const resetProgress = () => {
	computerScore = 0;
	playerScore = 0;
	roundNumber.textContent = '';
	roundResult.textContent = '';
	roundSelection.textContent = '';
	resultGame.textContent = '';
	yourScore.textContent = 0;
	compScore.textContent = 0;
};

// play a single round of rps
const playRound = (playerSelection, computerSelection) => {
	resultGame.textContent = '';
	round++;
	roundNumber.textContent = `Round ${round}`;

	const playerWin = () => {
		playerScore++;
		roundResult.textContent = `You win!`;
		roundSelection.textContent = `${playerSelection} beats ${computerSelection}`;
		displayScore();
	};

	const computerWin = () => {
		computerScore++;
		roundResult.textContent = `You lose!`;
		roundSelection.textContent = `${computerSelection} beats ${playerSelection}`;
		displayScore();
	};

	const matchDraw = () => {
		roundResult.textContent = `It's a draw!`;
		roundSelection.textContent = `${computerSelection} draws ${playerSelection}`;
		displayScore();
	};

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
	displayWinner();
};

// run single round on button click
rps.forEach((btn) =>
	btn.addEventListener('click', (e) => {
		playRound(`${e.target.id}`, computerPlay());
	})
);

// reset progress on button click
reset.addEventListener('click', resetProgress);
