const state = {
    currentValue: '0',
    nextValue: null,
    operator: null,
    done: false,
}
const calculate = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b,
};


const historyDisplay = document.getElementById('history-display')
const resultDisplay = document.getElementById('result-display')
const keypad = document.querySelector(".keypad");
keypad.addEventListener("click", (event) => {
    console.log(event.target.dataset.type);
    console.log(event.target.dataset.value);

    if (event.target.dataset.type === "operator") {
        state.operator = event.target.dataset.value
        historyDisplay.value = state.operator
    } else {
        state.currentValue = event.target.dataset.value
        resultDisplay.value = state.currentValue
    }


});
