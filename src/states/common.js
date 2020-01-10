export function changeState(i, stateNumber) {
    this.state.start('state' + stateNumber);
    console.log('state' + stateNumber);
}

function addKeyCallback(key, input, fn, args) {
    input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

export function addChangeStateListeners(game) {
    addKeyCallback(Phaser.Keyboard.ZERO, game.input, changeState.bind(game), 0);
    addKeyCallback(Phaser.Keyboard.ONE, game.input, changeState.bind(game), 1);
    addKeyCallback(Phaser.Keyboard.TWO, game.input, changeState.bind(game), 2);
    addKeyCallback(Phaser.Keyboard.THREE, game.input, changeState.bind(game), 3);
    addKeyCallback(Phaser.Keyboard.FOUR, game.input, changeState.bind(game), 4);
    addKeyCallback(Phaser.Keyboard.FIVE, game.input, changeState.bind(game), 5);
    addKeyCallback(Phaser.Keyboard.SIX, game.input, changeState.bind(game), 6);
    addKeyCallback(Phaser.Keyboard.SEVEN, game.input, changeState.bind(game), 7);
    addKeyCallback(Phaser.Keyboard.EIGHT, game.input, changeState.bind(game), 8);
    addKeyCallback(Phaser.Keyboard.NINE, game.input, changeState.bind(game), 9);
}

let player = null;
export function setPlayer(newPlayer) {
    player = newPlayer;
}
export function getPlayer() {
    return player;
}
export const centerX = 1500 / 2;
export const centerY = 1000 / 2;
