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
    this.explosionRadius = 2;
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
    this.element.remove();
  }

  damage(position) {
    this.game.walls.forEach((wall, idx) => {
      if (wall.isDestructible && detectCollision(position, wall)) {
          console.log("remove")
        wall.element.remove();
        this.game.walls.splice(idx, 1);
      }
    });


    if (detectCollision(position, this.game.player1) && !this.game.player1.immunity){
        this.game.player1.lifes --
        this.game.player2.score ++
            // finishGame(this.game.player2)

        if (this.game.player2.score === 3) {
            finishGame(this.game.player2)
        } else {
            this.game.player1.position = {x: 42, y: 42}
            this.game.player2.position = {x: 520, y: 520}
            this.game.walls.forEach( (wall) => (wall.element.remove()))
            this.game.walls = buildLevel(this.game, level1);
            this.game.player2.immunity = true
            this.game.player1.immunity = true
            this.game.player2.lastImmunityGainedTime = Date.now()
            this.game.player1.lastImmunityGainedTime = Date.now()
        }
    }

    if (detectCollision(position, this.game.player2) && !this.game.player2.immunity){
        this.game.player2.lifes --
        this.game.player1.score ++

                    // finishGame(this.game.player1)

        if (this.game.player1.score === 3) {
            finishGame(this.game.player1)
        } else {
            this.game.player1.position = {x: 42, y: 42}
            this.game.player2.position = {x: 520, y: 520}
            this.game.walls.forEach( (wall) => (wall.element.remove()))
            this.game.walls = buildLevel(this, level1);

            this.game.player2.immunity = true
            this.game.player1.immunity = true
            this.game.player2.lastImmunityGainedTime = Date.now()
            this.game.player1.lastImmunityGainedTime = Date.now()
        }
        console.log("player1 has won")
    }

  }

  explode() {
    // TODO refactor this
    this.damage(this.position);
    new Explosion(this.game, this.position);
    for (let i = 1; i <= this.explosionRadius; i++) {
      let new_position = new Object();
      new_position.y = this.position.y + 40 * i;
      new_position.x = this.position.x;
      this.damage(new_position);
      new Explosion(this.game, new_position);
    }
    for (let i = 1; i <= this.explosionRadius; i++) {
      let new_position = new Object();
      new_position.y = this.position.y - 40 * i;
      new_position.x = this.position.x;
      this.damage(new_position);
      new Explosion(this.game, new_position);
    }
    for (let i = 1; i <= this.explosionRadius; i++) {
      let new_position = new Object();
      new_position.y = this.position.y;
      new_position.x = this.position.x - 40 * i;
      this.damage(new_position);
      new Explosion(this.game, new_position);
    }
    for (let i = 1; i <= this.explosionRadius; i++) {
      let new_position = new Object();
      new_position.y = this.position.y;
      new_position.x = this.position.x + 40 * i;
      this.damage(new_position);
      new Explosion(this.game, new_position);
    }
    // call animation
    // damage player and other creatures
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
