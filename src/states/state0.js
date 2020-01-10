import {addChangeStateListeners, getPlayer, setPlayer, centerX, centerY} from "./common";

let speed = 6;

class state0 extends Phaser.State {
    preload() {
        this.load.image('forest', 'assets/backgrounds/background.png');
        this.load.spritesheet('player', 'assets/spritesheet/voidyDoge_walk.png', 199, 376);
    };

    create() {
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.stage.backgroundColor = '#cc33ff';
        addChangeStateListeners(this);
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        let forestBG = this.add.sprite(0, 0, 'forest');
        this.world.setBounds(0, 0, 2974, 1005);
        setPlayer(this.add.sprite(centerX, centerY, 'player'));
        const player = getPlayer();
        player.anchor.setTo(0.5, 0.5);
        player.scale.setTo(0.9, 0.9);
        this.camera.follow(player);
        this.physics.enable(player);
        player.body.collideWorldBounds = true;
        player.animations.add('walk', [1, 2]);
    };

    update() {
        const player = getPlayer();
        if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.x += speed;
            player.scale.setTo(0.9, 0.9);
            player.animations.play('walk', 4, true);
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.x -= speed;
            player.scale.setTo(-0.9, 0.9);
            player.animations.play('walk', 4, true);
        } else {
            player.animations.stop('walk');
            player.frame = 0;
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            player.y += speed;
            if (player.y > 740) {
                player.y = 740;
            }
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            player.y -= speed;
            if (player.y < 192) {
                player.y = 192;
            }
        }
    }
}

export default state0;
