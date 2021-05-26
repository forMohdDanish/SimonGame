
const buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var started = false;

var level = 0;
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel.length - 1] == currentLevel[currentLevel.length - 1]) {
        // console.log("!",gamePattern,"2",userClickedPattern);
        if (gamePattern.length == currentLevel.length) {
            setTimeout(function () {
                nextSequence();
            }, 1000);
            userClickedPattern = []

        }
    }

    else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over, Press Any Key or click on footer to Restart");
        setTimeout(function () {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function playSound(randomChosenColour) {
    switch (randomChosenColour) {
        case "blue":
            var sound = new Audio("./sounds/blue.mp3")
            sound.muted = false;

            sound.play();

            break;
        case "green":
            var sound = new Audio("./sounds/green.mp3")
            sound.muted = false;
            sound.play();

            break;
        case "red":
            var sound = new Audio("./sounds/red.mp3")
            sound.muted = false;
            sound.play();

            break;
        case "yellow":
            var sound = new Audio("./sounds/yellow.mp3")
            sound.muted = false;
            sound.play();

            break;

        default:
            var sound = new Audio("./sounds/wrong.mp3")
            sound.muted = false;
            sound.play();
            break;
    }

}
function nextSequence() {
    $("h1").html(`Level ${level}`)
    level++;
    const randomChosenColour = buttonColours[Math.floor(Math.random() * 4)];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).toggleClass("pressed")
    playSound(randomChosenColour);
    setTimeout(() => {
        $("#" + randomChosenColour).toggleClass("pressed")
    }, 100);
}

$("footer").click(function () {
    if (!started) {
        $("h1").html(`Level ${level}`)

        nextSequence();
        started = true;
    }
})


$(document).keypress(function () {
    if (!started) {
        $("h1").html(`Level ${level}`)

        nextSequence();
        started = true;
    }
})


$(".btn").click((e) => {
    if (started) {
        $("#" + e.target.id).toggleClass("pressed")
        userClickedPattern.push(e.target.id)
        playSound(e.target.id)
        setTimeout(() => {
            $("#" + e.target.id).toggleClass("pressed")
        }, 100);
        checkAnswer(userClickedPattern)
    }

})
function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
    userClickedPattern = []
}



