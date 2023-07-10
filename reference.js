// const buttonDiv = [$(".green"), $(".red"), $(".yellow"), $(".blue")];

// const buttonAudio = [
//   "sounds/blue.mp3",
//   "sounds/green.mp3",
//   "sounds/red.mp3",
//   "sounds/wrong.mp3",
//   "sounds/yellow.mp3",
// ];

// $(document).keypress(function () {
//   let randomNumber = Math.floor(Math.random() * 4);
//   const buttonSelect = buttonDiv[randomNumber];
//   const buttonPlay = buttonAudio[randomNumber];
//   const players = new Audio(buttonPlay);
//   players.play();
//   console.log(buttonSelect);

//   console.log(randomNumber);
// });

// for (let i = 0; i < buttonDiv.length; i++) {
//   buttonDiv[i].on("click", function () {});
// }

// console.log(buttonAudio);

let numbClick = -1;
let userPattern = [];
let correctPattern = [];
let possibleColors = ["red", "green", "yellow", "blue"];
let highScore = 0;
let level = 0;

$(".btn").on("click", function (e) {
  numbClick++; // incremented everytime the divs are clicked
  let color = e.target.id; // to select the actual ID on the DOM or HTML or Document
  animation("#" + color); // callback
  playAudio(color); // callback
  checkAnswer(color);
});

//function to check if the answer is correct or not
function checkAnswer(color) {
  userPattern.push(color); //inserting the color to the empty array which is userPattern
  if (color === correctPattern[numbClick]) {
    if (userPattern.length == correctPattern.length) {
      // if the user pick the correct color it resets
      setTimeout(function () {
        userPattern = [];
        nextSequence();
        numbClick = -1;
      }, 1000);
    }
  } else {
    $("h1").text("Game Over! Press Any key to Start");
    $("body").addClass("game-over");
    setTimeout(function () {
      $("body").removeClass("game-over");
      let wrongPath = "sounds/wrong.mp3";
      let wrongAudio = new Audio(wrongPath);
      wrongAudio.play();
    }, 100);
    userPattern = [];
    correctPattern = [];
    if (level > highScore) {
      highScore = level;
      $("h4").text(`High score is ${highScore}`);
    }
    level = 0;
    numbClick = -1;
  }
}
// to start the game
function nextSequence() {
  level++;
  $("h3").text(`level ${level}`);
  const randomNumber = Math.floor(Math.random() * 4); //randomized number
  let color = possibleColors[randomNumber]; // choose random colors
  correctPattern.push(color); // the selected random colors will be pushed to empty array
  playAudio(color);
  animation("#" + color);
  console.log(correctPattern, color);
}
// function for playing the audio
function playAudio(color) {
  let relPath = `sounds/${color}.mp3`;
  let audio = new Audio(relPath);
  audio.play();
}
// function for animation or hover
function animation(id) {
  $(id).fadeOut(100).fadeIn(100);
}

// function initilization for game to start
$(document).on("keypress", function () {
  if (level <= 0) {
    $("h1").text("Game Begins!");
    nextSequence();
  }
});
