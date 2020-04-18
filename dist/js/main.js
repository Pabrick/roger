"use strict";

import Roger from "../../src/roger";
// import Roger from "../../lib/roger.min";

const spriteSheetUrl = "img/damn_pablos_heads.png";
const spriteSize = { w: 54, h: 90 };
const sheetSize = { w: 512, h: 512 };
const ssPablosHeads = new Roger.RegularSheet(spriteSheetUrl,sheetSize, spriteSize);
const spPabloIdle = new Roger.Sprite(spriteSheetUrl, spriteSize, { x: 0, y: 0 });

const spEyesClosed = new Roger.Animation("closed", ssPablosHeads, [11]);

const animPablos_blink1 = new Roger.Animation("blink1", ssPablosHeads, [0, 1, 2, 1, 0],
{
	delay: 10,
	loops: 0,
	callBack: () => { console.log("blink complete!"); }
});

const animPablos_talk1 = new Roger.Animation("talk1", ssPablosHeads, [3, 4, 5, 6, 7],
{
	direction: "random"
});

const animPablos_blink2 = new Roger.Animation("blink2", ssPablosHeads, [9, 10, 11, 10, 9],
{
	delay: 10,
	callBack: () => { console.log("blink2 complete!"); }
});

const animPablos_talk2 = new Roger.Animation("talk2", ssPablosHeads, [12, 13, 14, 15, 16],
{
	callBack: () => { console.log("talk2 complete!"); }
});

const pabloToon = new Roger.Toon("pablo", spPabloIdle);

pabloToon.add(animPablos_blink1);
pabloToon.add(animPablos_blink2);
pabloToon.add(animPablos_talk1);
pabloToon.add(animPablos_talk2);

pabloToon.add(spEyesClosed);
pabloToon.play("blink1");

const rClock = new Roger.Clock(0.1);
rClock.addToList(pabloToon);
rClock.setDebugMode(false);
rClock.start();

document.getElementById("button1").addEventListener("click", () => {
	console.log("talk1");
	pabloToon.play("talk1");
});

document.getElementById("button2").addEventListener("click", () => {
	console.log("closed");
	// pabloToon.play("closed");
	console.log("getCurrentAnimation", pabloToon.currentAnimationName);
	pabloToon.stop();
});