function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose, PAPER beats ROCK");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win, ROCK beats SCISSORS");
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        console.log("Tie");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose, SCISSORS beats PAPER");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win, PAPER beats ROCK");
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        console.log("Tie");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose, ROCK beats SCISSORS");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win, SCISSORS beats PAPER");
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("Tie");
    } else {
        console.log("Invalid Selection");
    }
}

const computerSelection = computerPlay();
const playerSelection = prompt("Choose Rock, Paper, or Scissorspaper: ").toUpperCase();
console.log(playRound(playerSelection, computerSelection));