'use strict';
/*
import RogerClock from './class/RogerClock.js';
import RogerSprite from './class/RogerSprite.js';
import RogerRegularSheet from './class/RogerRegularSheet.js';
import RogerAnimation from './class/RogerAnimation.js';
import RogerObject from './class/RogerObject.js';
*/
const ss_horse2dragon = new RogerRegularSheet("img/ss_horse2dragon.png", {w:1150,h:1150}, {w:230,h:230});

const anim_horse2dragon = new RogerAnimation("horse2dragon",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a dragon!") });

const anim_dragon2horse = new RogerAnimation("dragon2horse",
                                                ss_horse2dragon,
                                                [8,7,6,5,4,3,2,1,0],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a horse!") });
 
const anim_horse2dragon2horse = new RogerAnimation("horse2dragon2horse",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1],
                                                { delay: 10, loops: -1 });

const anim_dragonOpenMouth = new RogerAnimation("dragonOpenMouth",
                                                ss_horse2dragon,
                                                [10,11,12,13,14,15,16,17,18],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a horse again!") });

const anim_dragonCloseMouth = new RogerAnimation("dragonCloseMouth",
                                                ss_horse2dragon,
                                                [18,17,16,15,14,13,12,11,10],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a dragon again!") });


const horseObject = new RogerObject("horse");
horseObject.addAnimation(anim_horse2dragon);
horseObject.addAnimation(anim_dragon2horse);
horseObject.addAnimation(anim_horse2dragon2horse);
horseObject.addAnimation(anim_dragonOpenMouth);
horseObject.addAnimation(anim_dragonCloseMouth);
horseObject.playAnimation("horse2dragon2horse");

const rClock = new RogerClock(0.1);
rClock.addObjectToUpdate(horseObject);
rClock.start();
