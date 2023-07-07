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

function nextSequence() {
  const randomNumber = Math.floor(Math.random() * 4);
  let color = possibleColors[randomNumber];
  correctPattern.push(color);
  console.log(color);
  playAudio(color);
  animation("#" + color);
  console.log(correctPattern);
}

function playAudio(color) {
  let relPath = `sounds/${color}.mp3`;
  let audio = new Audio(relPath);
  audio.play();
}

function animation(id) {
  $(id).fadeOut(100).fadeIn(100);
}

$(document).on("keydown", function () {
  if (level <= 0) {
    nextSequence();
  }
});
