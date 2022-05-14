'use strict';

import {game} from './index.js'

export function restartGame() {
    location.reload()
}

export function continueGame() {

    game.state = 'running';
    let container = document.getElementById('container')
    container.style.backgroundColor = null;
    container.style.opacity = null;
    let menu = document.getElementById('menu');
    menu.classList.toggle('disabled');
}

export function finishGame() {
    game.state = 'endGame'
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

export function pauseGame() {
    let menu = document.getElementById('menu');
    menu.classList.remove('disabled');
    let container = document.getElementById('container')
    container.style.backgroundColor = 'black'
    container.style.opacity = '50%'
    let restartButton = document.querySelector('.restart-button')
    restartButton.classList.remove('disabled')
    let continueButton = document.querySelector('.continue-button')
    continueButton.classList.remove('disabled')
}
