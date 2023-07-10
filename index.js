let numbClick = -1;
let correctPattern = [];
let userPattern = [];
let level = 0;
let highScore = 0;
const divColors = ["red", "green", "blue", "yellow"];

$(document).on("keypress", function () {
  if (level <= 0) {
    $("h1").text("Game begins!");
    gameSequence();
  }
});

function gameSequence() {
  //to keep the game going
  level++;
  $("h3").text(`level ${level}`);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = divColors[randomNumber];
  colorAudio(randomColor);
  $("#" + randomColor).addClass("pressed");
  setTimeout(() => {
    $("#" + randomColor).removeClass("pressed");
  }, 100);
  correctPattern.push(randomColor);
}

function colorAudio(randomColor) {
  const audioPath = `sounds/${randomColor}.mp3`;
  const audioPlay = new Audio(audioPath);
  audioPlay.play();
}

$(".btn").on("click", function (e) {
  numbClick++;
  const colorClicked = e.target.id;
  colorAudio(colorClicked);
  checkAnswer(colorClicked);
  $("#" + colorClicked).addClass("pressed");
  setTimeout(() => {
    $("#" + colorClicked).removeClass("pressed");
  }, 100);
});

function checkAnswer(colorClicked) {
  userPattern.push(colorClicked);
  if (colorClicked === correctPattern[numbClick]) {
    if (userPattern.length == correctPattern.length) {
      setTimeout(() => {
        userPattern = [];
        numbClick = -1;
        gameSequence();
      }, 1000);
    }
  } else {
    $("h1").text("Game over! Press any key to start");
    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
      let wrongAudioPath = "sounds/wrong.mp3";
      let wrongAudio = new Audio(wrongAudioPath);
      wrongAudio.play();
    }, 150);
    correctPattern = [];
    userPattern = [];
    numbClick = -1;
    level = 0;
    if (level > highScore) {
      highScore = level;
      $("h4").text(`high score is ${highScore}`);
    }
  }
}
