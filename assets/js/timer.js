const time = 90000
var countDownDate = new Date(new Date().getTime() + time);

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var seconds = Math.floor((distance ) / 1000);
  document.getElementById("timer").innerHTML = "Time left: " + seconds + "s ";

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer").innerHTML = "No time left!";
  }
}, 1000);
