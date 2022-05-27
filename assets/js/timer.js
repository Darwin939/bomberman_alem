import { finishGame } from "./menu.js";
import { game } from "./index.js";

const time = 90000;

var countDownDate = new Date(new Date().getTime() + time);

var x = setInterval(function () {
  if (game.state === "paused") {

    countDownDate = new Date(countDownDate.getTime() + 1000)
    return;
  }

  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor(distance / 1000);
  document.getElementById("timer").innerHTML = "Time left: " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "No time left!";
    finishGame();
  }
}, 1000);
