function getRandom(scale) {
    let n = Math.floor(Math.random() * scale);
    console.log(n);
}

getRandom(50); // will return number from zero to 50 but not including 50

// exercise is to build the love calculator. Create two prompts that will ask
// for the names of two people, create random number generator that will calculate
// the random percentage and display it as a browser alert.

function randomNumber(scale) {
    let randomChance = Math.floor(Math.random() * scale + 1); // will scale to 100, select number 1 to 100
    return randomChance;
}

let personOne = prompt("name of person one");
let personTwo = prompt("name of person two");

let loveScore = randomNumber(100);

alert(`Your love score is ${loveScore} %`);

// adding conditional statements

if (loveScore > 70) {
    alert(`Your love score is ${loveScore}%. You are real soul mates`);
}
if (loveScore > 30 && loveScore <= 70) {
    alert(`Your love score is ${loveScore}%`);
}
if (loveScore <= 30) {
    alert(
        `Your love score is ${loveScore}%. You go to together like oil and water.`
    );
} else {
    alert(`Your love score is ${loveScore}%. Not bad`);
}

// exercise: BMI calculator advanced
/*
Previously, we've created a function that is able to calculate the BMI. But once
we get a result, we will want to tell the user what the number means.
Write a function that outputs (returns) a different message depending on the BMI.
BMI <18.5, the output should be: "Your BMI is <bmi>, so you are underweight."
BMI 18.5-24.9, the output should be "Your BMI is <bmi>, so you have a normal weight."
BMI >24.9, the output should be "Your BMI is <bmi>, so you are overweight."
The message MUST be returned as an output from your function. You should NOT NEED to use alert, prompt or console.log in this challenge.
IMPORTANT the message wording has to match precisely for the code to pass the validation. Including punctuation and capitalisation.
*/

function bmiCalculator(weight, height) {
    let bmi;
    let interpretation;

    bmi = weight / height ** 2;

    console.log(`Your BMI is ${bmi}`);

    if (bmi < 18.5) {
        interpretation = `Your BMI is ${bmi}, so you are underweight.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        interpretation = `Your BMI is ${bmi}, so you have normal weight.`;
    } else {
        interpretation = `Your BMI is ${bmi}, so you are overweight.`;
    }

    return interpretation;
}

bmiCalculator(65, 1.78);

/* challange, leap years
Write a program that works out whether if a given year is a leap year. A normal
year has 365 days, leap years have 366, with an extra day in February.
The reason why we have leap years is really fascinating, this video goes into
more detail. This is how to work out whether if a particular year is a leap year:
A year is a leap year if it is evenly divisible by 4 ;
except if that year is also evenly divisible by 100;
unless that year is also evenly divisible by 400.
*/

function isLeap(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return "Leap year.";
            } else {
                return "Not leap year.";
            }
        } else {
            return "Leap year.";
        }
    } else {
        return "Not leap year.";
    }
}

// test output
console.log(isLeap(2024)); // true
console.log(isLeap(2400)); // true
console.log(isLeap(1989)); // false

/*
You are going to write a function which will select a random name from a list of
names. The person selected will have to pay for everybody's food bill.
Important: The output should e returned from the function and you do not need
alert, prompt or console.log. The output should match the example output exactly,
including capitalisation and punctuation.

    Example Input
["Angela", "Ben", "Jenny", "Michael", "Chloe"]
    Example Output
Michael is going to buy lunch today!
*/

function selectGuest(guestList, listLength) {
    index = Math.floor(Math.random() * listLength);
    return guestList[index];
    
}

var guests = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

var luckyGuest = selectGuest(guests, guests.length);
console.log(`${luckyGuest} is going to buy lunch today`);


// Prompt the user for a name and check if that name exists in the array.
// Display the simple alert to notify the user
var guestName = prompt("What is your name?");
if (guests.includes(guestName)) {
    alert("Welcome!");
} else {
    alert("Sorry, maybe next time");
}


/*
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for the multiples of five print "Buzz". For numbers which are
multiples of both three and five print "FizzBuzz".
*/

var output = [];
var count = 1;

function fizzBuzz() {

    while (count <= 100) {
        
        if (count % 3 == 0 && count % 5 == 0) {
            output.push("FizzBuzz")
        } else if (count % 3 == 0) {
            output.push("Fizz");
        } else if (count % 5 == 0) {
            output.push("Buzz")
        } else {
            output.push(count);
        }
        count ++;
    }
    
    console.log(output);
}

/*
while loop counters
*/

var count = 99
while (count > 0) {
    var sentence = `${count} bottles of beer on the wall, ${count} bottles of beer.\nTake one down and pass it around, ${count - 1} bottles of beer on the wall.`
    console.log(sentence);
    count --;
}

/*
for loop counter
*/
for (var i = 0; i < 2; i++) {
    // do something
}

/*
Fibonacci sequence
Create a function where you can call it by writing the code:
fibonacciGenerator (n)

Where n is the number of items in the sequence.
fibonacciGenerator(3) returns: [0,1,1]

The first two numbers in the sequence must be 0 and 1.
*/

function fibonacciGenerator(n) {
    sequence = [0, 1];

    for (var i = 2; i < n; i++) {
        var last = sequence[sequence.length - 1];
        var previous = sequence[sequence.length - 2];
        sequence.push(last + previous);
    }
    return sequence;
}

console.log(fibonacciGenerator(10))


//tags: intermediate javascript