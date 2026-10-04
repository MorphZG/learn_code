// create a 16*16 square grid layout using flexbox.
// prompt user to input a number and re-render the new grid.

const CONTAINER = document.querySelector(".grid-container");

renderGrid(16);
function renderGrid(squaresPerLine) {
    // clear previous grid elements
    CONTAINER.textContent = "";

    // create totalSize number of squares
    let totalSize = squaresPerLine * squaresPerLine;
    for (let i = 0; i < totalSize; i++) {
        let square = document.createElement("div");
        // add CSS to each sqare
        square.classList.add("grid-item");
        square.style.width = `calc(100% / ${squaresPerLine})`;
        square.style.height = `calc(100% / ${squaresPerLine})`;
        // append each square to .grid-container
        CONTAINER.appendChild(square);
    }
}

changeColor("red");
function changeColor(color) {
    CONTAINER.addEventListener("mouseover", (event) => {
        let item = event.target;
        item.style.backgroundColor = color;
    });
}

const BUTTON = document.querySelector("button");
BUTTON.addEventListener("click", (e) => {
    let grid_size = prompt("Enter a number of sqares per line");
    while (grid_size > 100 || grid_size < 10) {
        grid_size = prompt("Number must be lower than 100 and higher than 10");
    }
    renderGrid(grid_size);
});
