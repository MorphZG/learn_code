/* results for whoever goes first */
/* positive 1 is a win, negative 1 is a loss */
const results = {
    rock: { rock: 0, papper: -1, scissors: 1 },
    papper: { rock: 1, papper: 0, scissors: -1 },
    scissors: { rock: -1, papper: 1, scissors: 0 },
};

function getComputerChoice() {
    let choice = ["rock", "papper", "scissors"];
    let index = Math.floor(Math.random() * 3);
    return choice[index];
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors? Choose");
    return choice.toLowerCase();
}

let rounds = 5;
let computerScore = 0;
let humanScore = 0;

while (rounds > 0) {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let outcome = results[humanChoice][computerChoice];

    console.log(
        `---- Round results ----\nhuman: ${humanChoice}\nPC: ${computerChoice}`
    );

    switch (outcome) {
        case -1:
            console.log("You Lost!");
            computerScore += 1;
            break;
        case 0:
            console.log("It's a tie!");
            break;
        case 1:
            console.log("You Won!");
            humanScore += 1;
            break;
    }
    console.log(`---- Score ----\nYou: ${humanScore}\nPC: ${computerScore}`);
    rounds -= 1;
}
