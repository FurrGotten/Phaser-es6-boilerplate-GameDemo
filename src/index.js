import * as WebFont from 'webfontloader';

import state0 from 'states/state0.js';
import state1 from 'states/state1.js';
import state2 from 'states/state2.js';
import state3 from 'states/state3.js';
import state4 from 'states/state4.js';
import state5 from 'states/state5.js';
import state6 from 'states/state6.js';
import state7 from 'states/state7.js';
import state8 from 'states/state8.js';
import state9 from 'states/state9.js';

class Game extends Phaser.Game {

	constructor() {
		super(1500, 1000, Phaser.AUTO, 'content', null);
		WebFont.load({google: {families: ['Candal', 'Montserrat']}});
		this.state.add('state0', state0, false);
		this.state.add('state1', state1, false);
		this.state.add('state2', state2, false);
		this.state.add('state3', state3, false);
		this.state.add('state4', state4, false);
		this.state.add('state5', state5, false);
		this.state.add('state6', state6, false);
		this.state.add('state7', state7, false);
		this.state.add('state8', state8, false);
		this.state.add('state9', state9, false);
		this.state.start('state0');

	}

}

new Game();
