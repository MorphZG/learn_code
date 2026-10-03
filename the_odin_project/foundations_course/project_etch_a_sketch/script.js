// create a 16*16 square grid layout using flexbox.
// prompt user to input a number and re-render the new grid.

const CONTAINER = document.querySelector(".grid-container");

function renderGrid(squaresPerLine) {
    let totalSize = squaresPerLine * squaresPerLine;
    // create totalSize number of squares
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

let grid_size = prompt("Enter a number of sqares per line");
while ((grid_size > 100) | (grid_size < 10)) {
    grid_size = prompt("Number must be lower than 100 and higher than 10");
}
renderGrid(grid_size);

console.log(`grid size: ${grid_size}`);
console.log(`grid-container child elements: ${CONTAINER.childElementCount}`);

// etch and sketch mechanic
// leave a colored trail with mouse pointer

/**
 * Changes the background color of grid items on mouseover.
 * @param {string} color - The CSS color string
 * "rgb(10 10 10)" or "#ff0000"
 */
function changeColor(color) {
    CONTAINER.addEventListener("mouseover", (event) => {
        let item = event.target;
        item.style.backgroundColor = color;
    });
}
changeColor("rgb(10 10 10)")
