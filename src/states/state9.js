import {addChangeStateListeners} from "./common";

class state9 extends Phaser.State {
    preload () {};
    create () {
        this.stage.backgroundColor = '#808080';
        addChangeStateListeners(this);
    };
    update () {}
};
export default state9;
