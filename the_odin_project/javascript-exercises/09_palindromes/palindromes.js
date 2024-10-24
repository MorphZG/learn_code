const palindromes = function (input) {
    // regex pattern = [^] negated character group
    // do not match group of letters and numbers
    // match whitespace, punctation and special symbols (!, @, ", ?, (), <, >...), all non-alphanumeric characters
    let cleanedString = input.replace(/[^a-zA-Z0-9]+/g, "");
    let finalString = cleanedString.toLowerCase();

    let reversed = finalString.split("").reverse().join("");

    console.log(`${reversed}\n${finalString}`);
    return reversed == finalString;
};

// Do not edit below this line
module.exports = palindromes;
