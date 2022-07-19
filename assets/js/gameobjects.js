'use strict';

import { detectCollision } from "./detectcollision.js";
import { buildLevel, level1, level2, level3} from "./level.js";
import { wonGame } from "./menu.js";



export class GameObject {
    constructor(game, position) {
        this.height = 40
        this.width = 40
        this.position = position
        this.game = game
    }


    update() {
    }

    draw() {
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}


export class FinishBlock extends GameObject {
    constructor(game, position){
        super(game, position)
        this.game = game
        this.element = this.createElement()
    }

    createElement() {
        let element = document.createElement("div");
        element.classList.add("finish_block");
        let canvas = document.getElementById('canvas')
        canvas.appendChild(element)
        this.game.finishBlocks.push(this)
        return element
    }

    update() {
        let player1 = this.game.player1

        if (detectCollision(this.position, player1)) {
            // clear dom
            // this.game.walls.forEach((wall)=> wall.element.remove())
            // this.game.state = 'endGame';

            // won or change current level

            if (this.game.currentLevel < 3) {
                change_level(this.game)
            } else {
                wonGame()
            }
        }

    }

    draw() {
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}


function change_level(game) {
    // change level
    // что бы поменять левел нужно

    // очистить все блоки

    // убить всех мобов
    // заспавнить чела
    // обновить жизнь

    // забилдить левел buildLevel
    // обновить таймер ?
    // очистить финиш блоки
    game.currentLevel ++

    game.player1.position = {x: 42, y: 42}
    game.walls.forEach( (wall) => (wall.element.style.opacity = 0))
    game.deleteAllMobs();
    game.finishBlocks.forEach( (block) => (block.element.style.opacity = 0))

    game.finishBlocks = []

    if (game.currentLevel == 2) {
        game.walls = buildLevel(game, level2);
    } else if (game.currentLevel == 3) {
        game.walls = buildLevel(game, level3);
    }

    game.player1.immunity = true
    game.player1.lastImmunityGainedTime = Date.now()

}
