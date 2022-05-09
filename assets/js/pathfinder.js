"use strict";

const oneBLockSize = 40;

export function getCurrentArrayPosition(array, position) {
  let x = Math.floor(position.x / 40);
  let y = Math.floor(position.y / 40);

  return { x, y };
  // return col, row
}

export function getNextPath(array, currentPosition, prevPosition) {
  let currentRow = currentPosition.x;
  let currentColumn = currentPosition.y;
  let prev_row = prevPosition.x;
  let prev_column = prevPosition.y;

  function canGoTop(row, col) {
    if (row <= 0) return false;
    return array[row - 1][col] === 0;
  }

  function canGoBottom(row, col) {
    if (row >= array.length - 1) return false;
    return array[row + 1][col] === 0;
  }

  function canGoLeft(row, col) {
    if (col <= 0) return false;
    return array[row][col - 1] === 0;
  }

  function canGoRight(row, col) {
    if (col >= array[row].length - 1) return false;
    return array[row][col + 1] === 0;
  }

  if (canGoLeft(currentRow, currentColumn)) {
    return "left";
  }

  if (canGoTop(currentRow, currentColumn)) {
    return "top";
  }

  if (canGoBottom(currentRow, currentColumn)) {
    return "bottom";
  }

  if (canGoRight(currentRow, currentColumn)) {
    return "right";
  }
}
