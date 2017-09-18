'use strict';
/*
var animRun = new SpriteSheet("img/sprite_sheet.png", 130, 150);
var mainCharRun = new Animation("test", spriteSheet1, 27);

R("test").addAnimation(animRun);
R("test").R("animRun").gotoAndPlay();
*/
/*
document.getElementById('test');
*/


class RogerObject  {
    constructor(url, sheet_width, sheet_height, sprite_width, sprite_height, numFrame, initFrame, lastFrame) {
        this.url = url;
        this.sheet_width = sheet_width;
        this.sheet_height = sheet_height;
        this.sprite_width = sprite_width;
        this.sprite_height = sprite_height;
        this.numFrame = numFrame;
        this.initFrame = initFrame || 1;
        this.lastFrame = lastFrame || numFrame;
        this.currentFrame = 0;
        this.animationSheet = [{x:0,y:0},{x:-130,y:0}];
    }
    getURL() {
        return this.url;
    }
    getWidth() {
        return this.sprite_width;
    }
    getHeight() {
        return this.sprite_height;
    }
    getCurrentFrame() {
        return this.currentFrame;
    }

    getElement() {
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
        setFrame(this.currentFrame + 1);
    }
    prevFrame() {
        setFrame(this.currentFrame - 1);
    }

    createAnimationSheet() {
        let frames_in_width =  Math.floor(this.sheet_width / this.sprite_width);
        let frames_in_height =  Math.floor(this.sheet_height / this.sprite_height);
        for(i=0; i<frames_in_height; i++){
            for(j=0; j<frames_in_width; j++){
                let position = {
                    x: 0,
                    y: 0
                }
                this.animationSheet.push(position);
            }
        }

        return frames_in_width;
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