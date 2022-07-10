"use strict";

import { detectCollision } from "./detectcollision.js";
import { finishGame } from "./menu.js";
import { buildLevel, level1} from "./level.js";

export default class Bomb {
  constructor(game, position) {
    this.game = game;
    this.element = this.createElement();
    this.height = 40;
    this.width = 40;
    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;
    this.createdDate = Date.now();
    this.MaxLifetime = 3000;
    this.explosionRadius = 1;
    this.position = {
      x: position.x,
      y: position.y,
    };
  }

  createElement() {
    let element = document.createElement("img");
    element.classList.add("bomb");
    element.src = "./assets/image/bomb.png";
    let canvas = document.getElementById("canvas");
    canvas.appendChild(element);
    this.game.bombs.push(this);
    return element;
  }

  update() {}

  isTimeToDestroy() {
    if (Date.now() - this.createdDate >= this.MaxLifetime) {
      return true;
    }
    return false;
  }

  removeFromDom() {
    // this.element.remove();
    this.element.style.opacity = 0;
  }

  damage(position) {

    this.game.mobs.forEach(
        (mob, idx) => {
            if (detectCollision(position, mob)){
                this.game.player1.score += 1
                mob.element.style.opacity = 0;
                this.game.mobs.splice(idx, 1);
            }
        }
    )


    if (detectCollision(position, this.game.player1) && !this.game.player1.immunity){
        this.game.player1.lifes --

        this.game.player1.position = {x: 42, y: 42}
        this.game.walls.forEach( (wall) => (wall.element.style.opacity = 0))
        this.game.deleteAllMobs();
        this.game.walls = buildLevel(this.game, level1);

        this.game.player1.immunity = true
        this.game.player1.lastImmunityGainedTime = Date.now()
    }



  }

  explode() {
    // TODO refactor this
    this.damage(this.position);
    // new Explosion(this.game, this.position);

    this.game.walls.forEach((wall, idx) => {
      let diffX = Math.abs(wall.position.x - this.position.x)
      let diffY = Math.abs(wall.position.y - this.position.y)
      if (diffX <= 50 && diffY <= 50 && wall.isDestructible ){
        wall.element.style.opacity = 0;
        this.game.walls.splice(idx, 1);
      }
    });

    for (let i = 1; i <= this.explosionRadius; i++) {
      let new_position = new Object();
      new_position.y = this.position.y + 40 * i;
      new_position.x = this.position.x;
      new Explosion(this.game, new_position);

      new_position = new Object();
      new_position.y = this.position.y - 40 * i;
      new_position.x = this.position.x;
      new Explosion(this.game, new_position);

       new_position = new Object();
      new_position.y = this.position.y;
      new_position.x = this.position.x - 40 * i;
      new Explosion(this.game, new_position);

      new_position = new Object();
      new_position.y = this.position.y;
      new_position.x = this.position.x + 40 * i;
      new Explosion(this.game, new_position);

    }

  }

  draw() {
    this.element.style.left = this.position.x + "px";
    this.element.style.top = this.position.y + "px";
  }
}

class Explosion extends Bomb {
  constructor(game, position) {
    super(game, position);
    this.MaxLifetime = 100;
  }

  createElement() {
    let element = document.createElement("img");
    element.classList.add("explosion");
    element.src = "./assets/image/explosion.png";
    let canvas = document.getElementById("canvas");
    canvas.appendChild(element);
    this.game.explosions.push(this);
    return element;
  }
}
