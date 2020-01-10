import {addChangeStateListeners} from "./common";

let text;

class state8 extends Phaser.State {
    preload() {
    };

    create() {
        this.stage.backgroundColor = '#99e6e6';
        addChangeStateListeners(this);

        text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices enim sem, quis interdum velit blandit eget. Suspendisse mollis est a lectus dictum ornare. Donec a suscipit magna. Sed mauris turpis, tristique quis ante ut, ullamcorper facilisis nisl. Proin quis orci faucibus, congue nisi ac, imperdiet justo. Donec scelerisque, libero.';


        this.spellOutText(100, 100, 1000, text, 40, 40, '#fff', 'Candal');
        this.spellOutText(100, 600, 1100, text, 40, 20, '#000', 'Montserrat');
    };

    spellOutText(x, y, width, text, fontSize, speed, fill, font) {
        let sentence = this.add.text(x, y, '', {fontSize: fontSize + 'px', fill: fill, font: font});
        let currentLine = this.add.text(10, 10, '', {fontSize: fontSize + 'px', font: font});
        currentLine.alpha = 0;
        let loop = this.time.events.loop(speed, addChar.bind(this));

        let index = 0;

        function addChar() {
            sentence.text += text[index];
            currentLine.text += text[index];

            if (currentLine.width > width && text[index] == ' ') {
                sentence.text += '\n';
                currentLine.text = '';
            }
            if (index >= text.length - 1) {
                this.time.events.remove(loop);
                console.log('stop');
            }
            index++;
        }
    }
};
export default state8;
