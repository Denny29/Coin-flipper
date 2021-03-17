import "./styles.css";

let results = [];
let random;
let result;
let userChoice;

$("#heads").hover(function () {
  $("#p").html("Click to choose Heads.");
});

$("#tails").hover(function () {
  $("#p").html("Click to choose Tails.");
});

function randomFunc() {
  random = Math.floor(Math.random() * 10);
  if (random <= 4) {
    result = "heads";
  }
  else if (random >= 5){
    result = "tails"
  }
}
function evaluate (choice){
  if (choice = result){
    $("#result").html('You win!');
  }
  else{
    $("#result").html('You lose!');
  }
}


$("#heads").click(function () {
  userChoice = "heads";
  randomFunc();
  evaluate(userChoice);
});

$("#tails").click(function () {
  userChoice = "tails";
  randomFunc();
  evaluate(userChoice);
});
