const leapYears = function (year) {
    let divisibleFour = year % 4 === 0;
    let divisiblebyFourHundred = year % 400 === 0;
    let century = year % 100 === 0;

    if (divisibleFour && (!century || divisiblebyFourHundred)) {
        return true;
    } else {
        return false;
    }
};
// Do not edit below this line
module.exports = leapYears;
