function getRandom(scale) {
    let n = Math.floor(Math.random() * scale);
    console.log(n);
}

getRandom(50); // will return number from zero to 50 but not including 50

// exercise is to build the love calculator. Create two prompts that will ask
// for the names of two people, create random number generator that will calculate
// the random percentage and display it as a browser alert.

function randomNumber(scale) {
    let random = Math.floor(Math.random() * scale + 1);
    return random;
}


let personOne = prompt("name of person one");
let personTwo = prompt("name of person two");

let chance = randomNumber(100)

alert("Your love score is " + chance + "%")

//tags: intermediate javascript