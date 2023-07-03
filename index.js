let level = 0;
const divs = [$("#green"), $("#red"), $("#yellow"), $("#blue")];
let arrTrace = [];
let playerChoice = [];

function gameInit() {
  $(document).keypress(function () {
    const selector = Math.floor(Math.random() * 4);
    const firstPattern = arrTrace.push(divs[selector]);
    const randomDiv = divs[selector].addClass("pressed");
    setTimeout(function () {
      randomDiv.removeClass("pressed");
    }, 200);

    if (arrTrace != 0) {
      $(document).off("keypress");
    }
    console.log(arrTrace, selector);
  });
}

function gameSequence(initialize) {
  divs.forEach((divs) => {
    divs.on("click", function () {
      if (arrTrace.length === playerChoice.length) {
        console.log("game over");
      }
    });
  });
}
gameSequence(gameInit);

// function gameStart(initialize) {

// }

// gameStart(gameInit);
