import "./styles.css";

let results = [];
let random;

$("#heads").hover(function () {
  $("#p").html("Click to choose Heads.");
});

$("#tails").hover(function () {
  $("#p").html("Click to choose Tails.");
});
// function randomFunc() {
//   random = Math.floor(Math.random() * 10);
// }

$("#heads").click(function () {
  random = Math.floor(Math.random() * 10);
  if (random <= 4) {
    $("#result").html("");
  }
});

$("#tails").click(function () {});
