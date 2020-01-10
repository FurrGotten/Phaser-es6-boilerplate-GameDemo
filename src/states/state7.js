import {addChangeStateListeners, centerX, centerY} from "./common";

let arrow, startPointX, startPointY, endPointX, endPointY, swipeDirection, leeway = 80;

class state7 extends Phaser.State {
    preload(){
        this.load.image('arrow', 'assets/sprites/arrow.png');
    };
    create(){
        this.stage.backgroundColor = '#a6ff4d';
        addChangeStateListeners(this);

        arrow = this.add.sprite(centerX, centerY, 'arrow');
        arrow.anchor.setTo(0.5);

        this.input.onDown.add(() => {this.startSwipe(this.input)});
        this.input.onUp.add(() => {this.getSwipeDirection(this.input)});
    };
    startSwipe(input) {
        startPointX = input.x;
        startPointY = input.y;
    };
    getSwipeDirection(input) {
        endPointX = input.x;
        endPointY = input.y;

        if (Math.abs(endPointY - startPointY) < leeway && Math.abs(endPointX - startPointX) < leeway) {
            return false;
        }

        if (Math.abs(endPointY - startPointY) < Math.abs(endPointX - startPointX)) {
            console.log('horizontal');
            if (endPointX > startPointX) {
                swipeDirection = 90;
            } else {
                swipeDirection = 270;
            }
        } else {
            console.log('vertical');
            if (endPointY > startPointY) {
                swipeDirection = 180;
            } else {
                swipeDirection = 0;
            }
        }

        arrow.angle = swipeDirection;
    }
}
export default state7;
