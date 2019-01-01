'use strict';

import RogerClock from './class/RogerClock.js';
import RogerSprite from './class/RogerSprite.js';
import RogerRegularSheet from './class/RogerRegularSheet.js';
import RogerAnimation from './class/RogerAnimation.js';
import RogerObject from './class/RogerObject.js';

const ssPablosHeads = new RogerRegularSheet('img/damn_pablos_heads.png', {w:512,h:512}, {w:54,h:90});
const pabloIdleSprite = new RogerSprite('img/damn_pablos_heads.png', {w:54,h:90}, {x:0,y:0});

const animPablos_blink1 = new RogerAnimation('blink1',
                                                ssPablosHeads,
                                                [0,1,2,1,0],
                                                { delay: 10, loops: -1, callBack: ()=> {
                                                        console.log('blink complete!');
                                                    }
                                                });

const animPablos_talk1 = new RogerAnimation('talk1',
                                               ssPablosHeads,
                                               [3,4,5,6,7],
                                               { direction: 'random' });

const animPablos_blink2 = new RogerAnimation('blink2', 
                                                ssPablosHeads,
                                                [9,10,11,10,9],
                                                { delay: 10, callBack: ()=> {
                                                        console.log('blink2 complete!');
                                                    }
                                                });
                                                
const animPablos_talk2 = new RogerAnimation('talk2', 
                                               ssPablosHeads,
                                               [12,13,14,15,16],
                                               { callBack: ()=>console.log('talk2 complete!') });

const pabloObject = new RogerObject('pablo', pabloIdleSprite);

pabloObject.addAnimation(animPablos_blink1);
pabloObject.addAnimation(animPablos_blink2);
pabloObject.addAnimation(animPablos_talk1);
pabloObject.addAnimation(animPablos_talk2);
pabloObject.playAnimation('blink1');


const rClock = new RogerClock(0.1);
rClock.addObjectToUpdate(pabloObject);

rClock.start();
