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
    finishGame();
  }
}, 1000);

function finishGame() {
  let menu = document.getElementById('menu');
  menu.classList.remove('disabled');
  let container = document.getElementById('container')
  container.style.backgroundColor = 'black'
  container.style.opacity = '50%'
  let restartButton = document.querySelector('.restart-button')
  restartButton.classList.remove('disabled')
  document.addEventListener('keydown', (event) => {
      switch (event.key) {
          case ' ':
              location.reload()
          }
  })
}