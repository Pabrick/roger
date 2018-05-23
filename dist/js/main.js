'use strict';

PabTools.setDebug(false);

var rClock = new RogerClock(0.1);
rClock.init();

var ss_damnPablosHeads = new RogerRegularSheet("img/damn_pablos_heads.png", {w:512,h:512}, {w:54,h:90});

var anim_damnPablos_blink1 = new RogerAnimation("blink1",
                                                ss_damnPablosHeads,
                                                [0,1,2,1,0],
                                                { delay: 60, callBack: ()=>console.log('blink complete!') });

var anim_damnPablos_talk1 = new RogerAnimation("talk1",
                                               ss_damnPablosHeads,
                                               [3,4,5,6,7],
                                               { direction: "random" });


var anim_damnPablos_blink2 = new RogerAnimation("blink2", 
                                                ss_damnPablosHeads,
                                                [9,10,11,10,9],
                                                { delay: 10 });
var anim_damnPablos_talk2 = new RogerAnimation("talk2", 
                                               ss_damnPablosHeads,
                                               [12,13,14,15,16],
                                               { loops: -1 });

var pablo = new RogerObject("pablo", rClock);
pablo.addAnimation(anim_damnPablos_blink1);
pablo.addAnimation(anim_damnPablos_blink2);
pablo.addAnimation(anim_damnPablos_talk1);
pablo.addAnimation(anim_damnPablos_talk2);
pablo.setDefaultAnimation("blink1");

pablo.playAnimation("blink1");
