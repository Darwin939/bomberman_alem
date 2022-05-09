"use strict";

import Player from "./player.js";
import InputHandler from "./inputhandler.js";
import { buildLevel, level1 } from "./level.js";
import { finishGame, pauseGame } from './menu.js'

const STATES = {
  1: "running",
  2: "paused",
  3: "endGame", // winning
  4: "Losing",
};

export default class Game {
  constructor() {
    this.gameHeight = 600;
    this.gameWidth = 600;
    this.walls = [];
    this.bombs = [];
    this.explosions = [];
    this.finishBlocks = [];
    this.currentLevel = 1;
    this.state = STATES[1]; // running
    this.score = 0;
  }

  start() {
    this.player = new Player(this);
    this.walls = buildLevel(this, level1);
    this.level = 1;
    new InputHandler(this.player, this);
  }
  update() {
    if (this.state === "running") {
      document.getElementById("score").innerHTML = this.score;
      this.walls.forEach((wall) => wall.update());
      this.player.update();
      this.bombs.forEach((bomb, idx) => {
        if (bomb.isTimeToDestroy()) {
          bomb.explode();
          bomb.removeFromDom();
          this.bombs.splice(idx, 1);
          bomb.update();
        }
      });
      this.explosions.forEach((expl, idx) => {
        if (expl.isTimeToDestroy()) {
          expl.removeFromDom();
          this.explosions.splice(idx, 1);
        }
      });
      this.finishBlocks.forEach((block) => block.update());
    } else if (this.state === 'endGame'){
      finishGame()
    } else if (this.state === 'paused'){
      pauseGame()
    }
  }
  draw() {
    this.walls.forEach((wall) => wall.draw());
    this.bombs.forEach((bomb) => bomb.draw());
    this.player.draw();
    this.explosions.forEach((explosion) => explosion.draw());
    this.finishBlocks.forEach((finish) => finish.draw());
  }
}
