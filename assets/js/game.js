"use strict";

import Player from "./player.js";
import {InputHandlerPlayer1, InputHandlerPlayer2} from "./inputhandler.js";
import { buildLevel, level1, PlaceTransferX, PlaceTransferY } from "./level.js";
import { finishGame, pauseGame } from "./menu.js";


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
  }

  start() {
    this.player1 = new Player(this, {x: 42 + PlaceTransferX, y: 42 + PlaceTransferY }, 'player1');
    this.player2 = new Player(this, {x: 520 + PlaceTransferX, y: 520 + PlaceTransferY }, 'player2')
    this.walls = buildLevel(this, level1);
    this.level = 1;
    new InputHandlerPlayer1(this.player1, this);
    new InputHandlerPlayer2(this.player2, this);
  }

  update() {
    if (this.state === "running") {
      this.walls.forEach((wall) => wall.update());
      this.player1.update();
      this.player2.update();
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
    } else if (this.state === "endGame") {
      finishGame();
    } else if (this.state === "paused") {
      pauseGame();
    }
  }
  draw() {
    this.walls.forEach((wall) => wall.draw());
    this.bombs.forEach((bomb) => bomb.draw());
    this.player1.draw();
    this.player2.draw();
    this.explosions.forEach((explosion) => explosion.draw());
    this.finishBlocks.forEach((finish) => finish.draw());
    drawScore(this)
    drawLife(this)
  }
}


function drawScore(game) {
    let player1ScoreElement = document.getElementById('player1-score');
    let player2ScoreElement = document.getElementById('player2-score');

    player1ScoreElement.innerHTML = game.player1.score
    player2ScoreElement.innerHTML = game.player2.score
}

function drawLife(game) {
    let player1LifeElement = document.getElementById('player1-life');
    let player2LifeElement = document.getElementById('player2-life');

    player1LifeElement.innerHTML = game.player1.lifes
    player2LifeElement.innerHTML = game.player2.lifes
}
