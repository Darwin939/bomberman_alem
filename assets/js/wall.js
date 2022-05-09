
import { GameObject } from "./gameobjects.js";

export class Wall extends GameObject {
    constructor(game, position) {
        super(game, position)
        this.element = this.createWall()
        this.isDestructible = false
    }

    createWall() {
        let element = document.createElement("div");
        element.classList.add("wall");
        let canvas = document.getElementById('canvas')
        canvas.appendChild(element)
        return element
    }

    update() {
    }

    draw() {
        this.element.style.left = this.position.x + "px";
        this.element.style.top = this.position.y + "px";
    }
}

export class BrickWall extends Wall {
    constructor(game, position) {
        super(game, position)
        this.isDestructible = true
    }

    createWall() {
        let element = document.createElement("div");
        element.classList.add("brick_wall");
        let canvas = document.getElementById('canvas')
        canvas.appendChild(element)
        return element
    }
}
