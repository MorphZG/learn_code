/* results for whoever goes first */
/* positive 1 is a win, negative 1 is a loss */
const RESULTS = {
    rock: { rock: 0, paper: -1, scissors: 1 },
    paper: { rock: 1, paper: 0, scissors: -1 },
    scissors: { rock: -1, paper: 1, scissors: 0 },
};

const ROCK = document.getElementById('rock')
const PAPER = document.getElementById('paper')
const SCISSORS = document.getElementById('scissors')

ROCK.addEventListener("click", playRound)
PAPER.addEventListener("click", playRound)
SCISSORS.addEventListener("click", playRound)


function getComputerChoice() {
    let choice = ["rock", "paper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function playRound(event) {
    const computerChoice = getComputerChoice()
    const humanChoice = event.srcElement.id;
    let outcome = RESULTS[humanChoice][computerChoice]

    switch (outcome) {
        case -1:
            console.log("You Lost!");
            console.log(`You played: ${humanChoice}; AI played: ${computerChoice}`)
            computerScore += 1;
            break;
        case 0:
            console.log("It's a tie!");
            console.log(`You played: ${humanChoice}; AI played: ${computerChoice}`)
            break;
        case 1:
            console.log("You Won!");
            console.log(`You played: ${humanChoice}; AI played: ${computerChoice}`)
            humanScore += 1;
            break;
    }


}

let gameOn = true;
let computerScore = 0;
let humanScore = 0;


