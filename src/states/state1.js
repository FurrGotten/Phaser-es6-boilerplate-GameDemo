import {addChangeStateListeners, setPlayer, getPlayer} from "./common";

let cursors, vel = 500, rocks, grass;

class state1 extends Phaser.State {
    preload(){
        this.load.tilemap('field', 'assets/tilemap/field.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.image('grassTiles', 'assets/tilemap/grassTiles.png');
        this.load.image('rockTiles', 'assets/tilemap/rockTiles.png');
        this.load.spritesheet('player', 'assets/spritesheet/voidyDoge_walk.png', 199, 376);
    };
    create(){
        this.physics.startSystem(Phaser.Physics.ARCADE);
        this.stage.backgroundColor = '#DDDDDD';
        addChangeStateListeners(this);

        const map = this.add.tilemap('field');
        map.addTilesetImage('grassTiles');
        map.addTilesetImage('rockTiles');

        grass = map.createLayer('grass');
        rocks = map.createLayer('rocks');

        map.setCollisionBetween(1, 9, true, 'rocks');
        map.setCollision(11, true, 'grass');

        setPlayer(this.add.sprite(200, 200, 'player'));
        const player = getPlayer();
        player.scale.setTo(0.2, 0.2);
        this.physics.enable(player);
        player.animations.add('walk', [1, 2]);

        cursors = this.input.keyboard.createCursorKeys();
    };
    update(){
        const player = getPlayer();
        this.physics.arcade.collide(player, rocks, function(){ console.log('hitting rocks!'); });
        this.physics.arcade.collide(player, grass, function(){ console.log('hitting grass!'); });

        if(cursors.up.isDown){
            player.body.velocity.y = -vel;
        }
        else if(cursors.down.isDown){
            player.body.velocity.y = vel;
        }
        else{
            player.body.velocity.y = 0;
        }
        if(cursors.left.isDown){
            player.body.velocity.x = -vel;
            player.scale.setTo(-0.2, 0.2);
            player.animations.play('walk', 4, true);
        }
        else if(cursors.right.isDown){
            player.body.velocity.x = vel;
            player.scale.setTo(0.2, 0.2);
            player.animations.play('walk', 4, true);
        }
        else{
            player.body.velocity.x = 0;
            player.animations.stop('walk');
            player.frame = 0;
        }
    }
}
export default state1;
