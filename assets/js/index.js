'use strict';

import Mob from './mob.js';
import Game from '/assets/js/game.js'
import {restartGame, continueGame} from '/assets/js/menu.js'

let restartButton = document.querySelector('.restart-button')
restartButton.addEventListener('click', restartGame);

let continueGameB = document.querySelector('.continue-button')
continueGameB.addEventListener('click', continueGame);

export let game = new Game

game.start()

game.mobs.push(new Mob(game))

function gameLoop(){
    game.update()
    game.draw()
    requestAnimationFrame(gameLoop)
}

gameLoop()
