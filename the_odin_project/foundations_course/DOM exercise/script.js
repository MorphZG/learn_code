console.log("javascript loaded");
const container = document.querySelector("#container");

const divElement = document.createElement("div");
divElement.classList.add("content");
divElement.textContent = "This is the glorious text-content!";
container.appendChild(divElement);

// create paragraph, colored red
const paragraph = document.createElement("p");
paragraph.textContent = "Hi I'm red!";
paragraph.style.color = "red";
container.appendChild(paragraph);

const h3 = document.createElement("h3");
h3.textContent = "Hi I'm blue!";
h3.style.color = "blue";
container.appendChild(h3);

const secondContainer = document.createElement("div");
secondContainer.style.border = "black";
secondContainer.style.backgroundColor = "brown";

const h1 = document.createElement("h1");
h1.textContent = "I am in aaaa div";

const secondParagraph = document.createElement("p");
secondParagraph.textContent = "ME TOO!";

secondContainer.appendChild(h1);
secondContainer.appendChild(secondParagraph);
container.appendChild(secondContainer);
