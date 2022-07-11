"use strict";

import { BrickWall, Wall } from "./wall.js";
import { FinishBlock } from "./gameobjects.js";
import { Mob } from "./mob.js";

export const PlaceTransferX = 0;
export const PlaceTransferY = 0;

export function buildLevel(game, level) {
  let walls = [];
  level.forEach((row, rowIdx) => {
    row.forEach((wall, wallIdx) => {
      let position = {
        x: 40 * wallIdx + PlaceTransferX,
        y: 40 * rowIdx + PlaceTransferY,
      };

      if (wall === 1) {
        walls.push(new Wall(game, position));
      } else if (wall === 2) {
        walls.push(new BrickWall(game, position));
      } else if (wall === 3) {
        new FinishBlock(game, position)
        //   winner block
      } else if ( typeof wall === 'string') {

            let mob = new Mob(game, position, wall);

            game.mobs.push(mob);
      }
    });
  });
  return walls;
}

export const level1 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 'td', 0, 1],
  [1, 0, 0, 0, 0, 2, 2, 0, 0, 'lr', 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 2, 0, 0, 2, 0, 0, 0, 0, 2, 1],
  [1, 3, 0, 2, 2, 0, 2, 2, 2, 2, 0, 0, 2, 2, 1],
  [1, 0, 2, 2, 0, 0, 2, 0, 2, 0, 0, 2, 2, 0, 1],
  [1, 2, 2, 0, 0, 2, 2, 2, 2, 0, 2, 2, 0, 0, 1],
  [1, 2, 0, 0, 0, 0, 2, 0, 0, 2, 2, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 'td', 0, 1],
  [1, 0, 0, 'td', 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, "lr", 0, 1],
  [1, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 3, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];

export const level2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
];
