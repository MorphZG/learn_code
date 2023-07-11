// count the length of the string
var text = prompt("enter your text: ");
var remaining = 140 - text.length;
console.log(`You have written ${text.length}, you have ${remaining} left`);
alert(text.slice(0, 140));

// slice the string and switch to upper case
var firstLetter = text.slice(0,1).toUpperCase();
var letters = text.slice(1, text.length);
console.log(firstLetter + letters);

/*
calculate dog age to human age
formula: humanAge = (dogAge -2) * 4 + 21
create a prompt that asks the user for a dog age
then calculate the equivalent human age using the above formula
and show the answer through the alert
*/
let dogAge = prompt("What is the current age of your dog?");
let humanAge = (dogAge - 2) * 4 + 21;
alert(`Human age of your dog is ${humanAge}`);


// function
// calculate how many bottles of milk robot can but based on the money it got as an input
// if bottle of milk costs 1.5
function getMilk(money) {   
    let numBottles = Math.floor(money / 1.5);
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
    console.log("buy " + numBottles + " bottles of milk")
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("enterHouse");
}

getMilk(5);

/*
Create a function that tells us how many days, weeks and months we have left if we live until 90 years old.
It will take your current age as the input and console.logs a message with our time left in this format:
    You have x days, y weeks, and z months left.

Assume there are 365 days in a year, 52 weeks in a year and 12 months in a year.

If you are 56 years old:
    lifeInWeeks(56)
Output
    You have 12410 days, 1768 weeks, and 408 months left.
*/

function lifeInWeeks(age) {

    let ageLeft = 90 - age;
    let numDays = ageLeft * 365;
    let numWeeks = ageLeft * 52;
    let numMonths = ageLeft * 12;

    console.log(`You have ${numDays} days, ${numWeeks} weeks, and ${numMonths} months left.`);
}

lifeInWeeks(56);

//tags: basic javascript