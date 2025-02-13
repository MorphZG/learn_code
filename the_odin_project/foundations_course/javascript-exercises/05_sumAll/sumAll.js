const sumAll = function (int1, int2) {
    let total = 0;

    // swap numbers if int1 is larger than int2
    if (int1 > int2) {
        [int1, int2] = [int2, int1];
        // return "ERROR" if any parameter is not an integer
    } else if (!Number.isInteger(int1) || !Number.isInteger(int2)) {
        return "ERROR";
        // return "ERROR" if any parameter is negative
    } else if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    for (let i = int1; i <= int2; i++) {
        total += i;
    }

    return total;
};

// run npm test sumAll.spec.js
// Do not edit below this line
module.exports = sumAll;
