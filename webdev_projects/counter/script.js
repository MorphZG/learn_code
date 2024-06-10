const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

var count = 0;

buttons.forEach((btn) => {
    btn.addEventListener("click", (event) => {
        if (btn.classList.contains("increase")) {
            count++;
        } else if (btn.classList.contains("decrease")) {
            count--;
        } else {
            count = 0;
        }
        value.textContent = count;
    });
});
