

import Game from '/assets/js/game.js'
import {restartGame, continueGame} from '/assets/js/menu.js'

let restartButton = document.querySelector('.restart-button')
restartButton.addEventListener('click', restartGame);

let continueGameB = document.querySelector('.continue-button')
continueGameB.addEventListener('click', continueGame);

export let game = new Game

game.start()

var stop = false;
var frameCount = 0;
var fps, fpsInterval, startTime, now, then, elapsed;

function startAnimating(fps) {
    fpsInterval = 1000 / fps;
    then = Date.now();
    startTime = then;
    gameLoop();
}

function gameLoop(){
    if (stop) {
        return;
    }


    requestAnimationFrame(gameLoop);


    now = Date.now();
    elapsed = now - then;
    // window.requestAnimationFrame(gameLoop);

    if (elapsed > fpsInterval) {

        // Get ready for next frame by setting then=now, but also adjust for your
        // specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        then = now - (elapsed % fpsInterval);

        // Put your drawing code here


    
    game.update()
    game.draw()
    var sinceStart = now - startTime;
    var currentFps = Math.round(1000 / (sinceStart / ++frameCount) * 100) / 100;


    }
}

startAnimating(60);

