'use strict';

import { detectCollision } from "./detectcollision.js";
import { buildLevel, level2 } from "./level.js";

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
        let player = this.game.player
        if (detectCollision(this.position, player)) {
            this.game.level ++
            // clear dom
            // this.game.walls.forEach((wall)=> wall.element.remove())
            this.game.state = 'endGame';

            // this.walls = buildLevel(this, level2)

            // player position
        }

    }

    draw() {
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}
