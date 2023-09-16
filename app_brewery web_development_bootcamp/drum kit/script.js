function changeButtonColor(inputKey) {
    // .pressed class will apply to input key to change the color
    var activeButton = document.querySelector("." + inputKey);
    activeButton.classList.add("pressed");
    // wait 0.1 second and remove .pressed class
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

function makeSound(key) {
    // create new Audio objects and play different sound files
    // buttonInnerHTML can hold different values (returned from this.innnerHTML)
    switch (key) {
        case "w":
            var tom1 = new Audio("/drum kit/sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("/drum kit/sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("/drum kit/sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("/drum kit/sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("/drum kit/sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var kickBass = new Audio("/drum kit/sounds/kick-bass.mp3");
            kickBass.play();
            break;
        case "l":
            var crash = new Audio("/drum kit/sounds/crash.mp3");
            crash.play();
            break;

        default:
            console.log(key);
    }
}

// --=-=-=-=-=-=-=-=-=-=-=-=-- main program --=-=-=-=-=-=-=-=-=-=-=-=--

// add event listener activated with keyboard
// listen for "keydown" event and run the arrow function
// arrow function will recieve event object as input from event listener
// i can tap into event.key to check which key was pressed
document.addEventListener("keydown", function (event) {
    makeSound(event.key); // pressed key
    changeButtonColor(event.key);
});

// add event listener to each .drum button, activated with mouse click
// select .drum class, buttons nodelist
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++) {
    // call addEventListener() on buttons
    buttons[i].addEventListener("click", function () {
        // 'this' references the event object
        var buttonInnerHTML = this.innerHTML; // pressed key
        makeSound(buttonInnerHTML);
        changeButtonColor(buttonInnerHTML);
    });
}
// while reading through documentation i found better solution
// arrays and NodeLists have forEach() method that executes
// the callback function once for each element
//
//      buttons.forEach(addEventListener("click", handleClick));
//
