'use strict';
PabTools.setDebug(true);


var ss_run = new RogerSheet("img/sprite_sheet.png", 1024, 1024, [{w:130,h:150}], true);
var anim_run = new RogerAnimation(ss_run, [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,26]);

var char = new RogerObject("test");
char.addAnimation(anim_run, "run");
char.anim["run"].play();


/*
class RogerObject  extends RogerSheet {
    constructor(url, sheet_width, sheet_height, sprite_width, sprite_height, numFrame, initFrame, lastFrame) {
        super(url, sheet_width, sheet_height, sprite_width, sprite_height);
        this.numFrame = numFrame;
        this.initFrame = initFrame || 1;
        this.lastFrame = lastFrame || numFrame;
        this.currentFrame = 0;
    }
    getCurrentFrame() {
        return this.currentFrame;
    }
    getElement() {
        this.div = document.createElement('div');
        this.div.id = "animationName";
        this.div.style.width = this.getWidth();
        this.div.style.height = this.getHeight();
        this.div.style.backgroundImage = "url('" + this.getURL() + "')";
        this.div.style.backgroundPositionX = "0px";
        this.div.style.backgroundPositionY = "0px";
        return this.div;
    }
    setFrame(frame) {
        if(frame <= this.initFrame){
            this.currentFrame = 0;
        }else if(frame > this.lastFrame){
            this.currentFrame = this.lastFrame;
        }else{
            this.currentFrame = frame;
        }
        this.currentFrame = frame;
        this.div.style.backgroundPositionX = this.animationSheet[this.currentFrame].x + "px";
        this.div.style.backgroundPositionY = this.animationSheet[this.currentFrame].y + "px";
    }
    
    nextFrame() {
        this.setFrame(this.currentFrame + 1);
    }
    prevFrame() {
        this.setFrame(this.currentFrame - 1);
    }
}
var animRun = new RogerObject("img/sprite_sheet.png", 1024, 1024, 130, 150, 27);
document.getElementById('test').appendChild(animRun.getElement());
/*
createAnimation('test', 'run', animRun);
function createAnimation(containerId, animationName, animationElement){
    var animation = document.createElement('div');
    animation.id = animationName;
    animation.style.width = animationElement.getWidth();
    animation.style.height = animationElement.getHeight();
    animation.style.backgroundImage = "url('" + animationElement.getURL() + "')";
    return animation;
    document.getElementById(containerId).appendChild(animation);
}
*/