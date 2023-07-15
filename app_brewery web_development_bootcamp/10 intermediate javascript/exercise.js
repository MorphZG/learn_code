function getRandom(scale) {
    let n = Math.floor(Math.random() * scale);
    console.log(n);
}

getRandom(50); // will return number from zero to 50 but not including 50

// exercise is to build the love calculator. Create two prompts that will ask
// for the names of two people, create random number generator that will calculate
// the random percentage and display it as a browser alert.

function randomNumber(scale) {
    let randomChance = Math.floor(Math.random() * scale + 1); // 1 to 100
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
Previously, we've created a function that is able to calculate the BMI. But once we get a result, we will want to tell the user what the number means.
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

    bmi = weight / (height ** 2);
    
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

// challange, leap years


//tags: intermediate javascript
