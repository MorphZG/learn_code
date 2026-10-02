/* results for whoever goes first */
/* positive 1 is a win, negative 1 is a loss */
const RESULTS = {
    rock: { rock: "It's a Draw", paper: "You Lost!", scissors: "You Won!" },
    paper: { rock: "You Won!", paper: "It's a Draw", scissors: "You Lost!" },
    scissors: { rock: "You Lost!", paper: "You Won!", scissors: "It's a Draw" },
};

const ROCK = document.getElementById("rock");
const PAPER = document.getElementById("paper");
const SCISSORS = document.getElementById("scissors");
const resultsContainer = document.querySelector(".results-container");

ROCK.addEventListener("click", playRound);
PAPER.addEventListener("click", playRound);
SCISSORS.addEventListener("click", playRound);

function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function displayResults(user, computer, outcome) {
    resultsContainer.innerHTML = `
            <h3>You chose: <strong>${user.toUpperCase()}</strong></h3>
            <h3>Computer chose: <strong>${computer.toUpperCase()}</strong></h3>
            <h2 style ="color: red">${outcome}</h2>
        `;
}

function playRound(event) {
    const computerChoice = getComputerChoice();
    const humanChoice = event.target.id;
    let outcome = RESULTS[humanChoice][computerChoice];

    switch (outcome) {
        case -1:
            console.log("You Lost!");
            console.log(
                `You played: ${humanChoice}; AI played: ${computerChoice}`,
            );
            computerScore += 1;
            break;
        case 0:
            console.log("It's a tie!");
            console.log(
                `You played: ${humanChoice}; AI played: ${computerChoice}`,
            );
            break;
        case 1:
            console.log("You Won!");
            console.log(
                `You played: ${humanChoice}; AI played: ${computerChoice}`,
            );
            humanScore += 1;
            break;
    }
    displayResults(humanChoice, computerChoice, outcome);
}

let gameOn = true;
let computerScore = 0;
let humanScore = 0;
