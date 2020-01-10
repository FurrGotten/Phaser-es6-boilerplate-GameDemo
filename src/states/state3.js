import {addChangeStateListeners, changeState} from "./common";

let sound;

class state3 extends Phaser.State {
    preload(){
        this.load.image('button1', 'assets/sprites/button1.png');
        this.load.image('button2', 'assets/sprites/button2.png');
        this.load.image('button3', 'assets/sprites/button3.png');
        this.load.audio('pops', 'assets/sounds/buttonPops.mp3');
    };
    create(){
        this.stage.backgroundColor = '#1a1aff';
        addChangeStateListeners(this);

        sound = this.add.audio('pops');
        sound.addMarker('low', 0.15, 0.5);
        sound.addMarker('high', 1.1, 1.5);

        let b1 = this.add.button(100, 100, 'button1', () => {
            changeState.call(this, null, 1);
        });

        let b2 = this.add.button(400, 400, 'button2', () => {
            changeState.call(this, null, 2);
        });

        let b3 = this.add.button(700, 700, 'button3');

        b1.onInputDown.add(this.tint, b1);
        b2.onInputDown.add(this.tint, b2);
        b3.onInputDown.add(this.tint, b3);

        b1.onInputUp.add(this.unTint, b1);
        b2.onInputUp.add(this.unTint, b2);
        b3.onInputUp.add(this.unTint, b3);
    };
    tint() {
        this.tint = 0xbbbbbb;
        sound.play('low');
    };
    unTint() {
        this.tint = 0xFFFFFF;
        sound.play('high');
    }
};
export default state3;
