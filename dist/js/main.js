"use strict";

import Roger from "../../lib/roger.min";

const ssPablosHeads = new Roger.RegularSheet("img/damn_pablos_heads.png", {w:512,h:512}, {w:54,h:90});
const pabloIdleSprite = new Roger.Sprite("img/damn_pablos_heads.png", {w:54,h:90}, {x:0,y:0});

const animPablos_blink1 = new Roger.Animation("blink1",
                                                ssPablosHeads,
                                                [0,1,2,1,0],
                                                { delay: 10, loops: -1, callBack: ()=> {
                                                        console.log("blink complete!");
                                                    }
                                                });

const animPablos_talk1 = new Roger.Animation("talk1",
                                                ssPablosHeads,
                                                [3,4,5,6,7],
                                                { direction: "random" });

const animPablos_blink2 = new Roger.Animation("blink2", 
                                                ssPablosHeads,
                                                [9,10,11,10,9],
                                                { delay: 10, callBack: ()=> {
                                                        console.log("blink2 complete!");
                                                    }
                                                });
                                                
const animPablos_talk2 = new Roger.Animation("talk2", 
                                                ssPablosHeads,
                                                [12,13,14,15,16],
                                                { callBack: ()=>console.log("talk2 complete!") });

const pabloToon = new Roger.Toon("pablo", pabloIdleSprite);

pabloToon.addAnimation(animPablos_blink1);
pabloToon.addAnimation(animPablos_blink2);
pabloToon.addAnimation(animPablos_talk1);
pabloToon.addAnimation(animPablos_talk2);
pabloToon.playAnimation("blink1");

const rClock = new Roger.Clock(0.1);
rClock.addToonToUpdate(pabloToon);

rClock.start();