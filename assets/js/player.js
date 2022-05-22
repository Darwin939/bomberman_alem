'use strict';

import Bomb from "./bomb.js";

import { detectCollision } from "./detectcollision.js";


export default class Player {
    constructor(game, position, playerId) {
        this.element = document.getElementById(playerId)
        this.height = 40
        this.width = 40
        this.gameHeight = game.gameHeight
        this.gameWidth = game.gameWidth
        this.maxSpeed = 3
        this.game = game
        this.lastBombPutTime = Date.now()
        this.speed = {
            x: 0,
            y: 0,
        }
        this.position = position
    }
    update() {
        let walls = this.game.walls
        let block_hit_list = [];

        walls.forEach(wall => {
            if (detectCollision(this.position, wall)) {
                block_hit_list.push(wall)
            }
        });

        block_hit_list.forEach(block => {

            if (this.speed.x > 0) {
                let x_new_position = block.position.x - block.width - this.maxSpeed
                let delta = x_new_position - this.position.x
                if (Math.abs(delta) < 10) {
                    this.position.x = x_new_position

                }
            }
            if (this.speed.x < 0) {
                let x_new_position = block.position.x + block.width + this.maxSpeed
                let delta = x_new_position - this.position.x
                if (Math.abs(delta) < 10) {
                    this.position.x = x_new_position

                }

            }
            if (this.speed.y < 0) {
                let y_new_position = block.position.y + block.width + this.maxSpeed
                let delta = y_new_position - this.position.y
                if (Math.abs(delta) < 10) {
                    this.position.y = y_new_position
                }

            }

            if (this.speed.y > 0) {
                let y_new_position = block.position.y - block.width - this.maxSpeed
                let delta = y_new_position - this.position.y
                if (Math.abs(delta) < 10) {
                    this.position.y = y_new_position
                }

            }
        })

        this.position.x += this.speed.x
        this.position.y += this.speed.y

    }
    draw() {
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

    putBomb() {
        console.log('put bomb')
        let delta = (Date.now() - this.lastBombPutTime) / 1000
        if (delta < 1){
            return
        }
        let bomb = new Bomb(this.game, this.position)
        this.game.bombs.push(bomb)
        this.lastBombPutTime = Date.now()
    }

    moveStop() {
        this.speed.x = 0
        this.speed.y = 0
    }
}
