function computerPlay() {
    let choices = ["Rock", "Paper", "Scissors"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === "Rock" && computerSelection === "Paper") {
        console.log("You Lose, Paper beats Rock");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
        console.log("You Win, Rock beats Scissors");
    } else if (playerSelection === "Rock" && computerSelection === "Rock") {
        console.log("Tie");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        console.log("You Lose, Scissors beats Paper");
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        console.log("You Win, Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Paper") {
        console.log("Tie");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
        console.log("You Lose, Rock beats Scissors");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        console.log("You Win, Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Scissors") {
        console.log("Tie");
    } else {
        console.log("Invalid Selection");
    }
}

const computerSelection = computerPlay();
const playerSelection = prompt("Choose Rock, Paper, or Scissors: ");
console.log(playRound(playerSelection, computerSelection));