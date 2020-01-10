import {addChangeStateListeners} from "./common";

let i;

class state4 extends Phaser.State {
    preload () {
    };
    create () {
        this.stage.backgroundColor = '#cc66ff';
        addChangeStateListeners(this);

        const a1 = this.add.sprite(50, 100, 'player');
        const a2 = this.add.sprite(350, 100, 'player');
        const a3 = this.add.sprite(650, 100, 'player');
        const a4 = this.add.sprite(950, 100, 'player');
        const a5 = this.add.sprite(1250, 100, 'player');

        this.add.tween(a1).to({y: '+400'}, 2000, 'Quad.easeOut', true)
        i = this.add.tween(a2).to({x: 100, y: 0}, 1000, 'Elastic.easeOut')
        this.add.tween(a3).from({y: 1000}, 1500, 'Circ.easeOut', true)
        this.add.tween(a4.anchor).to({x: 1}, 1000, 'Linear', true, 1000, false, true).loop(true)
        this.add.tween(a5).to({alpha: 0}, 1000, 'Bounce', true)
    }
};
export default state4;
