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
