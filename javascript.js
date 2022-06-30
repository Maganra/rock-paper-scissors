function computerPlay() {
    let choices = ["ROCK", "PAPER", "SCISSORS"];
    let randomChoice = choices[Math.floor(Math.random()*choices.length)];
    return randomChoice;
}

// function playerSelect() {
//     const playerSelection = prompt("Choose Rock, Paper, or Scissorspaper: ").toUpperCase();
//     if (playerSelection != "ROCK" || playerSelection != "PAPER" || playerSelection != "SCISSORS") {
//         console.log("Invalid Selection, enter a correct choice: ");
//         playerSelection = playerSelect();
//     }
//     return playerSelection;
// }

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "ROCK" && computerSelection === "PAPER") {
        console.log("You Lose, Paper beats Rock");
    } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You Win, Rock beats Scissors");
    } else if (playerSelection === "ROCK" && computerSelection === "ROCK") {
        console.log("Rock Ties Rock");
    } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
        console.log("You Lose, Scissors beats Paper");
    } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You Win, Paper beats Rock");
    } else if (playerSelection === "PAPER" && computerSelection === "PAPER") {
        console.log("Paper Ties Paper");
    } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
        console.log("You Lose, Rock beats Scissors");
    } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You Win, Scissors beats Paper");
    } else if (playerSelection === "SCISSORS" && computerSelection === "SCISSORS") {
        console.log("Scissors Ties Scissors");
    } else {
        console.log("Invalid Selection");
    }
}


function game() {
    let rounds = prompt("Enter number of rounds to be played: ");
    for (let i = 0; i < rounds; i++) {
        console.log(i + 1);
        const computerSelection = computerPlay();
        const playerSelection = prompt("Choose Rock, Paper, or Scissorspaper: ").toUpperCase();
        playRound(playerSelection, computerSelection);
    }
}

game();