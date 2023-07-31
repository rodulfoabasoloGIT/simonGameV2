let numbClick = -1;
let correctPattern = [];
let userPattern = [];
let level = 0;
let highScore = 0;
const divColors = ["red", "green", "blue", "yellow"];
//instruction added
$(document).on("keypress", () => {
  if (level <= 0) {
    $("h1").text("Game Start!");
    gameSequence();
  }
});

const gameSequence = () => {
  level++;
  $("h3").text(`level ${level}`);
  const randomNumber = Math.floor(Math.random() * 4);
  const randomColor = divColors[randomNumber];
  gameAudio(randomColor);
  $("#" + randomColor).addClass("hover");
  setTimeout(() => {
    $("#" + randomColor).removeClass("hover");
  }, 150);
  correctPattern.push(randomColor);
};

$(".btn").on("click", (e) => {
  numbClick++;
  const colorClicked = e.target.id;
  $("#" + colorClicked).addClass("hover");
  setTimeout(() => {
    $("#" + colorClicked).removeClass("hover");
  }, 150);
  gameAudio(colorClicked);
  gameCheck(colorClicked);
});

const gameCheck = (colorClicked) => {
  userPattern.push(colorClicked);
  if (colorClicked === correctPattern[numbClick]) {
    if (userPattern.length == correctPattern.length) {
      setTimeout(() => {
        userPattern = [];
        gameSequence();
        numbClick = -1;
      }, 1000);
    }
  } else {
    $("h1").text("Game over! Press Any key to start");
    $("body").addClass("game-over");
    const wrongAudioPath = "sounds/wrong.mp3";
    const wrongAudio = new Audio(wrongAudioPath);
    wrongAudio.play();
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);
    if (level > highScore) {
      highScore = level;
      $("h4").text(`high score is ${highScore}`);
    }
    correctPattern = [];
    userPattern = [];
    numbClick = -1;
    level = 0;
  }
};

const gameAudio = (randomColor) => {
  const audioPath = `sounds/${randomColor}.wav`;
  const colorAudio = new Audio(audioPath);
  colorAudio.play();
};
