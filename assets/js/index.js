

import Game from '/assets/js/game.js'
import {restartGame, continueGame} from '/assets/js/menu.js'

let restartButton = document.querySelector('.restart-button')
restartButton.addEventListener('click', restartGame);

let continueGameB = document.querySelector('.continue-button')
continueGameB.addEventListener('click', continueGame);

export let game = new Game

game.start()

var fps = 60;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;

function gameLoop(){
    requestAnimationFrame(gameLoop);
    now = Date.now();
    delta = now - then;
     
    if (delta > interval) {
        then = now - (delta % interval);

        game.update()
        game.draw()
    }
}
gameLoop()

