"use strict";

import Roger from "../../src/roger";
// import Roger from "../../lib/roger.min";

const pabloHeads = {
	url: "img/damn_pablos_heads.png",
	sheetSize: {
		w: 512,
		h: 512
	},
	spriteSize: {
		w: 54,
		h: 90
	}
};

const pabloSpriteSheet = new Roger.RegularSheet(pabloHeads.url, pabloHeads.sheetSize, pabloHeads.spriteSize);

const animPablo = {
	normal: {
		closed: new Roger.Animation("closed", pabloSpriteSheet, [11]),
		blink: new Roger.Animation("normal-blink", pabloSpriteSheet, [0, 1, 2, 1], {
			delay: 10
		}),
		talk: new Roger.Animation("normal-talk", pabloSpriteSheet, [11, 4, 5, 6, 7], {
			direction: "random"
		}),
	},
	surprise: {
		blink: new Roger.Animation("surprise-blink", pabloSpriteSheet, [9, 10, 11, 10, 9], {
			delay: 10
		}),
		talk: new Roger.Animation("surprise-talk", pabloSpriteSheet, [12, 13, 14, 15, 16], {
			loops: 1,
			callback: () => {
				console.log("surprise-talk complete!");
			}
		})
	}
};

const animTest = {
	delay: new Roger.Animation("test-delay", pabloSpriteSheet, [18, 19, 20, 21, 22], {
		delay: 5
	}),
	loops: new Roger.Animation("test-loops", pabloSpriteSheet, [18, 19, 20, 21, 22], {
		loops: 1
	}),
	backward: new Roger.Animation("test-backward", pabloSpriteSheet, [18, 19, 20, 21, 22, 23, 24, 25, 26], {
		direction: "backward"
	}),
	random: new Roger.Animation("test-random", pabloSpriteSheet, [18, 19, 20, 21, 22, 23, 24, 25, 26], {
		direction: "random"
	})
};

const pabloToon = new Roger.Toon("pablo");

pabloToon.add(animPablo.normal.closed);
pabloToon.add(animPablo.normal.blink);
pabloToon.add(animPablo.normal.talk);
pabloToon.add(animPablo.surprise.blink);
pabloToon.add(animPablo.surprise.talk);

pabloToon.add(animTest.delay);
pabloToon.add(animTest.loops);
pabloToon.add(animTest.backward);
pabloToon.add(animTest.random);

pabloToon.play("normal-blink");

const rClock = new Roger.Clock(0.5);
rClock.addToList(pabloToon);
rClock.setDebugMode(false);
rClock.start();

document.getElementById("buttonDelay").addEventListener("click", () => {
	pabloToon.play("test-delay");
});

document.getElementById("buttonLoops").addEventListener("click", () => {
	pabloToon.play("test-loops");
});

document.getElementById("buttonDirectionB").addEventListener("click", () => {
	pabloToon.play("test-backward");
});

document.getElementById("buttonDirectionR").addEventListener("click", () => {
	pabloToon.play("test-random");
});

document.getElementById("buttonStop").addEventListener("click", () => {
	console.log("Current Animation: ", pabloToon.currentAnimationName);
	pabloToon.stop();
});