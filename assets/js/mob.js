'use strict';

import { level1 } from './level.js';
import {getCurrentArrayPosition, getNextPath} from './pathfinder.js';

export default class Mob {
    constructor(game){
        this.level = 1;
        this.height = 40
        this.width = 40
        this.element = this.createElement()
        this.gameHeight = game.gameHeight
        this.gameWidth = game.gameWidth
        this.maxSpeed = 1
        this.game = game
        this.speed = {
            x: 0,
            y: 0,
        }
        this.position = {
            x: 280,
            y: 250
        }
        this.angry_radius = 100 // px
    }

    createElement() {
        let element = document.createElement('img')
        element.src = '/assets/image/Pontan.webp'
        element.classList.add('mob')
        element.style.width = this.width + 'px'
        element.style.height = this.height + 'px'
        let canvas = document.getElementById('canvas')
        canvas.appendChild(element)

        return element
    }

    update(){

        let arrayPosition = getCurrentArrayPosition(level1, this.position)
        let nextTurn = getNextPath(level1, arrayPosition, arrayPosition)
        console.log(arrayPosition)
        this.speed.y = 0
        this.speed.x = 0

        switch (nextTurn) {
            case 'left':
                this.speed.x = - this.maxSpeed
                break;
            case 'top':
                this.speed.y = - this.maxSpeed
                break;
            case 'bottom':
                this.speed.y = this.maxSpeed
                break;
            case 'right':
                this.speed.x = this.maxSpeed
                break;
            default:
                this.speed.x = 0;
                this.speed.y = 0

        }

        // console.log(arrayPosition)

        this.position.x += this.speed.x
        this.position.y += this.speed.y
    }

    draw(){
        this.element.style.left = this.position.x + "px"
        this.element.style.top = this.position.y + "px"
    }

    moveLeft() {
        this.speed.x = - this.maxSpeed

    }
    moveRight() {
        this.speed.x = this.maxSpeed
    }

    moveUp() {
        this.speed.y = -this.maxSpeed
    }
    moveDown() {
        this.speed.y = this.maxSpeed
    }

    moveStop() {
        this.speed.x = 0
        this.speed.y = 0
    }
}
