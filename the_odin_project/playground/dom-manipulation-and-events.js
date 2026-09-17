// DOM manipulation

const root = document.getElementById("root");
const redParagraph = document.createElement("p");
const blueHeading = document.createElement("h3");
const container = document.createElement("div");

redParagraph.style.color = "red";
blueHeading.style.color = "blue";
container.style.border = "solid 1px black";
container.style.backgroundColor = "pink";

redParagraph.innerText = "Hey I'm red!";
blueHeading.innerText = "I'm a blue h3!";

root.appendChild(redParagraph);
root.appendChild(blueHeading);
root.appendChild(container);

const heading = document.createElement("h1");
const paragraph = document.createElement("p");

heading.innerText = "I'm in a div"
paragraph.innerText = "ME TOO"

container.appendChild(heading);
container.appendChild(paragraph);


// Events

// the onclick property
const btn1 = document.querySelector("#btn1");
btn1.onclick = () => alert("Hello World");

// add event listener
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", () => {
  alert("Hello World");
});

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", (event) => {
    console.log(event);
  });
});

