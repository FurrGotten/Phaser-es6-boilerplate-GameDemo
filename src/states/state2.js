import {addChangeStateListeners, centerY, centerX} from "./common";

let barrel, bullets, velocity = 1000, nextFire = 0, fireRate = 200, enemy, bullet, enemyGroup;

class state2 extends Phaser.State  {
    preload(){
        this.load.image('base', 'assets/sprites/cannonBase.png');
        this.load.image('barrel', 'assets/sprites/cannonBarrel.png');
        this.load.image('bullet', 'assets/sprites/bullet.png');
    };
    create(){
        this.stage.backgroundColor = '#80ff80';
        addChangeStateListeners(this);

        var base = this.add.sprite(centerX, centerY, 'base');
        base.anchor.setTo(0.5);
        base.scale.setTo(0.4);

        bullets = this.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(50, 'bullet');
        bullets.setAll('checkWorldBounds', true);
        bullets.setAll('outOfBoundsKill', true);
        bullets.setAll('anchor.y', 0.5);
        bullets.setAll('scale.x', 0.85);
        bullets.setAll('scale.y', 0.85);

        barrel = this.add.sprite(centerX, centerY, 'barrel');
        barrel.scale.setTo(0.5);
        barrel.anchor.setTo(0.3, 0.5);

        enemy = this.add.sprite(100, 200, 'player');
        this.physics.enable(enemy);

        enemyGroup = this.add.group();
        enemyGroup.enableBody = true;
        enemyGroup.physicsBodyType = Phaser.Physics.ARCADE;

        for (var i = 0; i < 3; i++) {
            enemyGroup.create(1300, 350 * i + 100, 'player');
        }

        enemyGroup.setAll('anchor.y', 0.5);
        enemyGroup.setAll('anchor.x', 0.5);
        enemyGroup.setAll('scale.x', 0.4);
        enemyGroup.setAll('scale.y', 0.4);
    };
    update(){
        barrel.rotation = this.physics.arcade.angleToPointer(barrel);
        if (this.input.activePointer.isDown) {
            this.fire();
        }

        this.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
        this.physics.arcade.overlap(enemyGroup, bullets, this.hitGroup);
    };
    fire() {
        if(this.time.now > nextFire) {
            nextFire = this.time.now + fireRate;
            console.log('firing');
            bullet = bullets.getFirstDead();
            bullet.reset(barrel.x, barrel.y);

            this.physics.arcade.moveToPointer(bullet, velocity);
            bullet.rotation = this.physics.arcade.angleToPointer(bullet);
        }
    };
    hitEnemy() {
        console.log('hit');
        enemy.kill();
        bullet.kill();
    };
    hitGroup(e) {
        bullet.kill();
        e.kill();
    }
};
export default state2;
