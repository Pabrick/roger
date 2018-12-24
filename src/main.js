'use strict';

import RogerClock from './class/RogerClock.js';
import RogerSprite from './class/RogerSprite.js';
import RogerRegularSheet from './class/RogerRegularSheet.js';
import RogerAnimation from './class/RogerAnimation.js';
import RogerObject from './class/RogerObject.js';

document.getElementById("btHorse2Dragon").style.display = "block";
document.getElementById("btDragon2Horse").style.display = "none";
document.getElementById("btWat").style.display = "none";
document.getElementById("btUnWat").style.display = "none";

function imDragon() {
    document.getElementById("btHorse2Dragon").style.display = "none";
    document.getElementById("btDragon2Horse").style.display = "block";
    document.getElementById("btWat").style.display = "block";
    document.getElementById("btUnWat").style.display = "none";
}

function imHorse() {
    document.getElementById("btHorse2Dragon").style.display = "block";
    document.getElementById("btDragon2Horse").style.display = "none";
    document.getElementById("btWat").style.display = "none";
    document.getElementById("btUnWat").style.display = "block";
}

const ss_horse2dragon = new RogerRegularSheet("img/ss_horse2dragon.png", {w:1150,h:1150}, {w:230,h:230});
const horseIdleSprite = new RogerSprite('img/ss_horse2dragon.png', {w:230,h:230}, {x:0,y:0});

const anim_horse2dragon = new RogerAnimation("horse2dragon",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8],
                                                { callBack: ()=> {
                                                    console.log("I'm a dragon!");
                                                    imDragon();
                                                }});

const anim_dragon2horse = new RogerAnimation("dragon2horse",
                                                ss_horse2dragon,
                                                [8,7,6,5,4,3,2,1,0],
                                                { callBack: ()=> {
                                                    console.log("I'm a horse!") 
                                                    imHorse();
                                                }});
 
const anim_horse2dragon2horse = new RogerAnimation("horse2dragon2horse",
                                                ss_horse2dragon,
                                                [0,1,2,3,4,5,6,7,8,7,6,5,4,3,2,1],
                                                { delay: 10, loops: -1 });

const anim_dragonOpenMouth = new RogerAnimation("dragonOpenMouth",
                                                ss_horse2dragon,
                                                [10,11,12,13,14,15,16,17,18],
                                                { callBack: ()=> {
                                                    console.log("I'm a horse again!") 
                                                    imHorse();
                                                }});

const anim_dragonCloseMouth = new RogerAnimation("dragonCloseMouth",
                                                ss_horse2dragon,
                                                [18,17,16,15,14,13,12,11,10,8],
                                                { callBack: ()=> {
                                                    console.log("I'm a dragon again!");
                                                    imDragon();
                                                }});


const horseObject = new RogerObject("horse", horseIdleSprite);
horseObject.addAnimation(anim_horse2dragon);
horseObject.addAnimation(anim_dragon2horse);
horseObject.addAnimation(anim_horse2dragon2horse);
horseObject.addAnimation(anim_dragonOpenMouth);
horseObject.addAnimation(anim_dragonCloseMouth);

const rClock = new RogerClock(0.1);
rClock.addObjectToUpdate(horseObject);
rClock.start();

document.getElementById("btHorse2Dragon").addEventListener("click", () => {
    horseObject.playAnimation('horse2dragon');
} );

document.getElementById("btDragon2Horse").addEventListener("click", () => {
    horseObject.playAnimation('dragon2horse');
} );

document.getElementById("btWat").addEventListener("click", () => {
    horseObject.playAnimation('dragonOpenMouth');
} );

document.getElementById("btUnWat").addEventListener("click", () => {
    horseObject.playAnimation('dragonCloseMouth');
} );