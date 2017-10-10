'use strict';
PabTools.setDebug(false);

var rClock = new RogerClock();
rClock.init();

var ss_run = new RogerSheet("img/sprite_sheet.png", 1024, 1024, [{w:130,h:150}], true);
var anim_run = new RogerAnimation("run", ss_run, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26]);

var char = new RogerObject("test", rClock);
char.addAnimation(anim_run);
char.setAnimation("run");

var index = 0;
var animInterval = setInterval(function(){
    char.setFrameInCurrentAnimation(index);
    index++;
    if(index >= 26){
        index = 0;
    }
}, 50);