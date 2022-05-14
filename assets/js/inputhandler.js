'use strict';

export class InputHandlerPlayer1 {
    constructor(player, game) {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    player.moveLeft()
                    break;
                case 'ArrowRight':
                    player.moveRight()
                    break;
                case 'ArrowUp':
                    player.moveUp()
                    break;
                case 'ArrowDown':
                    player.moveDown()
                    break;
                case ' ':
                    // TODO player only set bomb once per 3 seconds
                    player.putBomb()
                    break;
            }
        })
        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'ArrowLeft':
                    player.moveStop()
                    break;
                case 'ArrowRight':
                    player.moveStop()
                    break;
                case 'ArrowUp':
                    player.moveStop()
                    break;
                case 'ArrowDown':
                    player.moveStop()
                    break;
            }
        })
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'Escape':
                    game.state = 'paused';
                    break;
                }
        })
    }
}


export class InputHandlerPlayer2 {
    constructor(player, game) {
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'a':
                    player.moveLeft()
                    break;
                case 'd':
                    player.moveRight()
                    break;
                case 'w':
                    player.moveUp()
                    break;
                case 's':
                    player.moveDown()
                    break;
                case 'z':
                    // TODO player only set bomb once per 3 seconds
                    player.putBomb()
                    break;
            }
        })
        document.addEventListener('keyup', (event) => {
            switch (event.key) {
                case 'a':
                    player.moveStop()
                    break;
                case 'd':
                    player.moveStop()
                    break;
                case 'w':
                    player.moveStop()
                    break;
                case 's':
                    player.moveStop()
                    break;
            }
        })
        document.addEventListener('keydown', (event) => {
            switch (event.key) {
                case 'Escape':
                    game.state = 'paused';
                    break;
                }
        })
    }
}
