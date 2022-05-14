

export function detectPlayerCollision(game, gameObject) {
    let bottomOfObject = gameObject.position.y + gameObject.height
    let TopOfObject = gameObject.position.y
    let rightSideOfObject = gameObject.position.x + gameObject.width
    let leftSideOfObject = gameObject.position.x


    let topOfPlayer = game.player.position.y
    let bottomOfPlayer = game.player.position.y + game.player.height
    let leftSideOfPlayer = game.player.position.x
    let rightSideOfPlayer = game.player.position.x + game.player.width


    if (topOfPlayer < bottomOfObject &&
        bottomOfPlayer > TopOfObject &&
        leftSideOfPlayer < rightSideOfObject &&
        rightSideOfPlayer > leftSideOfObject
    ) {
        return true
    } else {
        return false
    };
}


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
