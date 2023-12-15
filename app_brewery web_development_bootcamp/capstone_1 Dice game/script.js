function diceRoll(scale) {
    // return random number from 1 to <scale>
    let randomChance = Math.floor(Math.random() * scale + 1); // will scale to 100, select number 1 to 100
    return randomChance;
}

// store the h1 title to variable
var h1Title = document.querySelector("h1");
// roll the dice for both players
// return the number 1 to 6
var randomNumber1 = diceRoll(6);
var randomNumber2 = diceRoll(6);
// format the path to image depending on the randomNumber roll
var filePath1 = `images/dice${randomNumber1}.png`
var filePath2 = `images/dice${randomNumber2}.png`

// change the dice images by changing the src attribute of the both <img> tags
var player1image = document.querySelector(".dice .img1");
var player2image = document.querySelector(".dice .img2");
player1image.setAttribute("src", filePath1);
player2image.setAttribute("src", filePath2);
console.log(randomNumber1);

if (randomNumber1 > randomNumber2) {
    h1Title.textContent = "🚩Player 1 Wins"
} else if (randomNumber2 > randomNumber1) {
    h1Title.textContent = "Player 2 Wins 🚩"
} else {
    h1Title.innerHTML = "It is a draw! <br>roll it again"
}