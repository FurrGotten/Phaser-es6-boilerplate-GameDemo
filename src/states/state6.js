import {addChangeStateListeners, centerX} from "./common";

let emitter
class state6 extends Phaser.State {
    preload(){
        this.load.image('volcano', 'assets/sprites/volcano.png');
        this.load.image('redBall', 'assets/sprites/redBall.png');
        this.load.image('orBall', 'assets/sprites/orBall.png');
    };
    create(){
        this.stage.backgroundColor = '#cc6699';
        addChangeStateListeners(this);

        this.add.sprite(centerX, 1000, 'volcano').anchor.setTo(0.5, 1);

        emitter = this.add.emitter(centerX, 500, 2000);
        emitter.makeParticles(['redBall', 'orBall'], 0, 5000, false, true);
        emitter.maxParticleSpeed.set(300, -300);
        emitter.minParticleSpeed.set(-300, -100);
        emitter.gravity = 300;


        this.time.events.add(2000, () =>{
            emitter.start(false, 5000, 20)
            this.time.events.loop(500, () => {
                if (emitter.on) {
                    emitter.on = false;
                } else {
                    emitter.on = true;
                }
            });
        });
    }
    update(){}
}
export default state6;
