'use strict';

import Game from '/assets/js/game.js'
import {restartGame, continueGame} from '/assets/js/menu.js'

let restartButton = document.querySelector('.restart-button')
restartButton.addEventListener('click', restartGame);

let continueGameB = document.querySelector('.continue-button')
continueGameB.addEventListener('click', continueGame);

export let game = new Game

game.start()

var updateId,
    previousDelta = 0,
    fpsLimit = 60;


function gameLoop(){
    game.update()
    game.draw()

    updateId = requestAnimationFrame(gameLoop);

    var delta = currentDelta - previousDelta;

    if (fpsLimit && delta < 1000 / fpsLimit) {
        return;
    }
    previousDelta = currentDelta;

}

gameLoop()
