var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userSelection = [];
var level = 0;
var gameOn = false;

// start the game on first key press, start the sequence
$(document).keydown(function () {
    if (!gameOn) {
        gameOn = true;
        nextSequence();
    }
});

$(".btn").click(function () {
    // user click, select color
    let userChosenColour = $(this).attr("id");
    animatePress(userChosenColour);
    playSound(userChosenColour);
    // push the color to aray
    userSelection.push(userChosenColour);
    // compare current user selection with game pattern gamePattern[i] with userSelection[i]
    checkAnswer(userSelection.length - 1);
});

function checkAnswer(index) {
    // compare the value of last index in userSelection array
    // with same index of gamePattern array
    // check after each click, so always last index
    if (gamePattern[index] == userSelection[index]) {
        // if user completed the pattern, call nextSequence()
        if (userSelection.length == gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        playSound("wrong");
        // addClass gameover and remove it after 0.5 sec
        $("body").addClass("game-over");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 500);
        // update the title, reset the game
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
    }
}

function nextSequence() {
    // clear the userSelection
    userSelection = [];
    // increase the level
    level++;

    // update the title, show level
    $("#level-title").text(`Level ${level}`);
    // random colour sequence, animation, sound
    let randomIndex = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomIndex];
    // build array of random colours
    gamePattern.push(randomChosenColour);
    // animate the button with the same id as the randomChosenColour
    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100);
    // play .mp3 file
    playSound(randomChosenColour);
}

function playSound(name) {
    // play the audio file /sounds/name.mp3
    var audio = new Audio(`./sounds/${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    // animate the button press by adding and removing the .pressed class with 0.1 second delay
    $(`#${currentColour}`).addClass("pressed");
    setTimeout(() => {
        $(`#${currentColour}`).removeClass("pressed");
    }, 100);
}

function startOver() {
    userSelection = [];
    gamePattern = [];
    level = 0;
    gameOn = false;
}
