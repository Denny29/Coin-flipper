import "./styles.css";

let results = [];
let random;
let userChoice;
let computerChoice;
let result;
let i = 0;

// $("#heads").hover(function () {
//   $("#p").html("Click to choose Heads.");
// });

// $("#tails").hover(function () {
//   $("#p").html("Click to choose Tails.");
// });

function randomFunc() {
  random = Math.floor(Math.random() * 10);
  if (random <= 4) {
    computerChoice = "heads";
  } else if (random > 4) {
    computerChoice = "tails";
  }
  console.log(random);
  console.log(computerChoice);
}
function evaluate(choice) {
  if (choice === computerChoice) {
    $("#p").html("You win!");
    result = "win";
  } else {
    $("#p").html("You lose!");
    result = "lose";
  }
}
function list() {
  results.push(result);
  $("#pastResults").html("");
  for (let Result of results) {
    $("#pastResults").append(`<li> ${Result}</li>`);
  }
}
$("#heads").click(function () {
  userChoice = "heads";
  randomFunc();
  evaluate(userChoice);
  list();
});

$("#tails").click(function () {
  userChoice = "tails";
  randomFunc();
  evaluate(userChoice);
  list();
});
