import {addChangeStateListeners, getPlayer, setPlayer, centerX, centerY} from "./common";

const accel = 400;
let platform, platformGroup;

class state5 extends Phaser.State {
    preload() {
        this.load.image('platform', 'assets/sprites/platform.png');
    };

    create() {
        this.stage.backgroundColor = '#ff99dd';
        addChangeStateListeners(this);

        setPlayer(this.add.sprite(centerX, 500, 'player'));
        const player = getPlayer();
        player.anchor.setTo(0.5, 0.5);
        platform = this.add.sprite(0, 800, 'platform');
        platformGroup = this.add.group();
        platformGroup.create(650, 400, 'platform');
        platformGroup.create(1300, 400, 'platform');

        this.physics.enable([player, platform, platformGroup]);

        player.body.gravity.y = 500;
        player.body.bounce.y = 0.3;
        player.body.drag.x = 400;
        player.body.collideWorldBounds = true;

        platform.body.immovable = true;

        platformGroup.setAll('body.immovable', true);
    };

    update() {
        const player = getPlayer();
        this.physics.arcade.collide(player, [platform, platformGroup]);
        if (this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            player.body.acceleration.x = -accel;
            player.scale.setTo(-1, 1);
            player.animations.play('walk', 4, true);
        } else if (this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            player.body.acceleration.x = accel;
            player.scale.setTo(1, 1);
            player.animations.play('walk', 4, true);
        } else {
            player.body.acceleration.x = 0;
            player.animations.stop('walk');
            player.frame = 0;
        }
        if (this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            player.body.velocity.y = -300;
        }
    }
};
export default state5;
