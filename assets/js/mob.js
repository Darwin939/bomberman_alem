import { GameObject } from "./gameobjects.js";
import { detectCollision } from "./detectcollision.js";
import { buildLevel, level1} from "./level.js";

export class Mob extends GameObject {
  constructor(game, position, direction) {
    super(game, position);
    this.speed = {
      x: 0,
      y: 0,
    };
    this.lifes = 1;
    this.maxSpeed = 3;
    this.height = 40;
    this.width = 40;
    this.element = this.createElementMob();
    this.direction = direction;
    this.currentDirection = true;
    this.directionProperty = direction == "lr" ? "x" : "y";
  }

  createElementMob() {
    let element = document.createElement("img");
    element.classList.add("mob");
    element.src = "/assets/image/Pontan.webp";
    element.width = this.width;
    element.height = this.height;
    let canvas = document.getElementById("canvas");
    canvas.appendChild(element);

    return element;
  }

  update() {
    let walls = this.game.walls;
    let block_hit_list = [];

    walls.forEach((wall) => {
      if (detectCollision(this.position, wall)) {
        block_hit_list.push(wall);
      } else {
      }
    });

    if (block_hit_list.length === 0) {
      if (this.currentDirection) {
        this.position[this.directionProperty] += this.maxSpeed;
      } else {
        this.position[this.directionProperty] -= this.maxSpeed;
      }
    } else {
      let first_block = block_hit_list[0];
      if (first_block.position[this.directionProperty] > this.position[this.directionProperty]) {
        // on the right
        this.position[this.directionProperty] -= this.maxSpeed;
        this.currentDirection = false;
      } else {
        // on the left
        this.position[this.directionProperty] += this.maxSpeed;
        this.currentDirection = true;
      }
    }


    // console.log(this.position, this.game.player1.position)
    if (detectCollision(this.position, this.game.player1)) {
        this.game.player1.lifes -= 1
        this.game.player1.position = {x: 42, y: 42}
        // this.game.walls.forEach( (wall) => (wall.element.remove()))
        this.game.walls.forEach( (wall) => (wall.element.style.opacity = 0))
        this.game.deleteAllMobs();
        this.game.walls = buildLevel(this.game, level1); // TODO get current level
        this.game.player1.immunity = true
        this.game.player1.lastImmunityGainedTime = Date.now()
        }




  }

  draw() {
    this.element.style.left = this.position.x + "px";
    this.element.style.top = this.position.y + "px";
  }
}
