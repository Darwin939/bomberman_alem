'use strict';

export function detectCollision(position, gameObject){

    let bottomOfObject = gameObject.position.y + gameObject.height
    let TopOfObject = gameObject.position.y
    let rightSideOfObject = gameObject.position.x + gameObject.width
    let leftSideOfObject = gameObject.position.x

    if (position.y < bottomOfObject &&
        position.y + 40 > TopOfObject &&
        position.x < rightSideOfObject &&
        position.x + 40 > leftSideOfObject
    ) {
        return true
    } else {
        return false
    };
}
