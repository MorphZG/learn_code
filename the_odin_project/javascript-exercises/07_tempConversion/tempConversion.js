const convertToCelsius = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 0.5556;
    return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
    convertToCelsius,
    convertToFahrenheit,
};
