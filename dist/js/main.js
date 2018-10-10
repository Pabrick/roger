'use strict';

var rClock = new RogerClock(0.1);
rClock.init();

var ss_horse2dragon = new RogerRegularSheet("img/ss_horse2dragon.png", {w:1150,h:1150}, {w:230,h:230});

var anim_horse = new RogerAnimation("idleHorse",
                                                ss_horse2dragon,
                                                [0],
                                                { loops: 0, callBack: ()=>console.log("I'm a horse!") });

var anim_dragon = new RogerAnimation("idleDragon",
                                                ss_horse2dragon,
                                                [8],
                                                { loops: 0, callBack: ()=>console.log("I'm a dragon!") });
                                            
var anim_horse2dragon = new RogerAnimation("horse2dragon",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a dragon!") });

var anim_dragon2horse = new RogerAnimation("dragon2horse",
                                                ss_horse2dragon,
                                                [8,7,6,5,4,3,2,1,0],
                                                { delay: 0, loops: 0, callBack: ()=>console.log("I'm a horse!") });
 
var anim_horse2dragon2horse = new RogerAnimation("horse2dragon2horse",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1],
                                                { delay: 10, loops: -1 });

var anim_dragonOpenMouth = new RogerAnimation("dragonOpenMouth",
                                                ss_horse2dragon,
                                                [8,10,11,12,13,14,15,16,17,18],
                                                { delay: 0, loops: 0 });

var anim_dragonCloseMouth = new RogerAnimation("dragonCloseMouth",
                                                ss_horse2dragon,
                                                [18,17,16,15,14,13,12,11,10,8],
                                                { delay: 0, loops: 0 });

var horse = new RogerObject("horse", rClock);
horse.addAnimation(anim_horse);
horse.addAnimation(anim_dragon);
horse.addAnimation(anim_horse2dragon);
horse.addAnimation(anim_dragon2horse);
/*
horse.addAnimation(anim_horse2dragon2horse);
horse.addAnimation(anim_dragonOpenMouth);
horse.addAnimation(anim_dragonCloseMouth);
*/
horse.setDefaultAnimation("idleHorse");
horse.playAnimation("idleHorse");