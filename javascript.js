const results = document.querySelector('#results');
const playerScore = document.querySelector('#player');
const computerScore = document.querySelector('#computer');
let pScore = 0;
let cScore = 0;
function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        results.textContent = "You Lose, Paper beats Rock";
        computerScore.textContent = ++cScore;
        winner();
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        results.textContent = "You Win, Rock beats Scissors";
        playerScore.textContent = ++pScore;
        winner();
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        results.textContent ="Rock Ties Rock";
        computerScore.textContent = ++cScore;
        playerScore.textContent = ++pScore;
        winner();
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        results.textContent ="You Lose, Scissors beats Paper";
        computerScore.textContent = ++cScore;
        winner();
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        results.textContent ="You Win, Paper beats Rock";
        playerScore.textContent = ++pScore;
        winner();
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        results.textContent ="Paper Ties Paper";
        computerScore.textContent = ++cScore;
        playerScore.textContent = ++pScore;
        winner();
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        results.textContent ="You Lose, Rock beats Scissors";
        computerScore.textContent = ++cScore;
        winner();
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        results.textContent ="You Win, Scissors beats Paper";
        playerScore.textContent = ++pScore;
        winner();
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        results.textContent ="Scissors Ties Scissors";
        computerScore.textContent = ++cScore;
        playerScore.textContent = ++pScore;
        winner();
    } else {
        results.textContent ="Invalid Selection";
    }
}

function winner() {
    if (pScore >= 5) {
        alert("You won the game!");
    } else if (cScore >= 5) {
        alert("You lost the game.");
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = computerPlay();
        let playerSelection = button.id;
        playRound(playerSelection, computerSelection);
    })
})