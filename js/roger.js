'use strict';

class RogerClock {
    constructor(){
        this.clock = 0;
        this.clockInterval;
        this.delta = 0.1;
        this.deltaTime = this.delta * 1000;
        this.objects = [];
    }
    init() {
        this.clock = 0;
        this.clockInterval = setInterval(()=>this.update(), this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    update(){
        PabTools.show(this.clock, "info");
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        for(let i = 0; i < this.objects.length; i++){
            if(this.objects[i]){
                this.objects[i].update();
            }
        }
    }
    addObject( rogerObject ) {
        this.objects.push(rogerObject);
    }
    removeObject( rogerObject ) {
        //removeanimation
    }

}

/**
 * Sprite is the minimun element.
 * It's a frame, an image inside another 
 * @class RogerSprite
 * @param width [number] width of the sprite
 * @param height [number] height of the sprite
 * @param positionX [number] top position on the sprite sheet from 0,0
 * @param positionY [number] left position on the sprite sheet from 0,0
 * @return w [number]
 * @return h [number]
 * @return x [number]
 * @return y [number]
 */
class RogerSprite {
    constructor(width, height, positionX, positionY){
        this.w = width;
        this.h = height;
        this.x = positionX;
        this.y = positionY;
    }
    getWidth() {
        return this.w;
    }
    getHeight() {
        return this.h;
    }
    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

/**
 * @class RogerSheet
 * @param url [string] an absolute URL giving the base location of the spritesheet
 * @param width [number] total width of the image
 * @param height [number] total height of the image
 * @return url [String]
 * @return sprite [RogerSprite]
 */
class RogerSheet {
    constructor(url, width, height, dataFrames) {
        this.url = url;
        this.width = width;
        this.height = height;
        this.dataFrames = dataFrames;

        this.framesHorizontal = 0;
        this.framesVertical = 0;
        this.map = [];

        if(this.dataFrames.length === 1){
            this.framesHorizontal = Math.floor( this.width / this.dataFrames[0].w );
            this.framesVertical  = Math.floor( this.height / this.dataFrames[0].h );
            PabTools.show("All frames have SAME size");
        }else{
            //TODO
            PabTools.show("Frames have DIFFERENT sizes", "info");
        }

        if(this.dataFrames.length === 1){
            let currentX = 0;
            let currentY = 0;
            let index = 0;
            for(let i=0; i<this.framesVertical; i++){
                for(let j=0; j<this.framesHorizontal; j++){
                    this.map.push(new RogerSprite(this.dataFrames[0].w, this.dataFrames[0].h, currentX, currentY));
                    currentX += this.dataFrames[0].w; 
                    index++;
                }
                currentX = 0;
                currentY += this.dataFrames[0].h; 
            }
        }else{
            for(let i=0; i<this.framesVertical; i++){
                for(let j=0; j<this.framesHorizontal; j++){
                    this.map.push(new RogerSprite(this.dataFrames[index].w, this.dataFrames[index].h, this.dataFrames[index].x, this.dataFrames[index].y));
                }
            }
        }
    }
    getURL() {
        return this.url;
    }
    getSprite(number) {
        return this.map[number];
    }
}

/**
 * @class RogerAnimation
 * @param name [String] name for the animation
 * @param spriteSheet [RogerSheet] sprite sheet linked to the animation
 * @param frameList [array] list with the frames that make the animation
 * @return animation [RogerAnimation]
 * @return name [String]
 * @return url [String]
 * @return sprite [RogerSprite]
 * @see RogerSprite
 */
class RogerAnimation {
    constructor(name, spriteSheet, frameList, options = {delay: 0, loop: true, random: false, callBack: null}) {
        this.name = name;
        this.spriteSheetUrl = spriteSheet.getURL();
        this.spriteAnimation = [];
        this.options = options;
        for(let i=0; i<frameList.length; i++){
            this.spriteAnimation.push(spriteSheet.getSprite(frameList[i]));
        }
    }
    /* PUBLIC METHODS */
    setOption(object) {
        this.options = object;
    }
    setLoop(boolean) {
        this.options.loop = boolean;
    }

    /* PRIVATE METHODS */
    getAnimation() {
        return this;
    }
    getName() {
        return this.name;
    }
    getURL() {
        return this.spriteSheetUrl;
    }
    getSprite(number) {
        return this.spriteAnimation[number];
    }
    getNextFrame(currentFrame) {
        let nextFrame = -1;
        if(currentFrame >= this.spriteAnimation.length - 1){
            if(this.options.loop){
                nextFrame = 0;
            }
            if(this.options.callBack != null) {
                this.options.callBack();
            }
        } else {
            nextFrame = currentFrame + 1;
        }
        return nextFrame;
    }
}

/**
 * @class RogerObject
 * @param id [String] id of the element of the DOM linked to the object
 * @param clock [RogerClock] clock linked to the project, the one to set the delta time
 * @return animationName [String]
 * @see RogerSprite
 */
class RogerObject {
    constructor(id, clock) {
        this.id = id;
        this.clock = clock;
        this.elem = document.getElementById(id);
        this.anim = [];
        this.currentAnimation;
        this.currentFrame;
    }
    /* PUBLIC METHODS */
    addAnimation(rogerAnimation) {
        let div = document.createElement('div');
        div.id = rogerAnimation.getName();
        div.className = 'animation';
        div.style.backgroundImage = "url('" + rogerAnimation.getURL() + "')";
        div.style.display = 'none';
        this.elem.appendChild(div);
        this.anim.push(rogerAnimation);
        this.setFrame(rogerAnimation, 0);
        this.clock.addObject(this);
    }
    setDefaultAnimation(name) {
        let shiftIndex = this.getAnimationByName(name);
        let defaultAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.anim[shiftIndex] = this.anim[0];
        this.anim[0] = defaultAnimation;
    }
    playAnimation(name) {
        if(this.currentAnimation){
            document.getElementById(this.currentAnimation.getName()).style.display = 'none';
        }
        this.currentAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.currentFrame = 0;
        document.getElementById(name).style.display = 'block';
    }

    /* PRIVATE METHODS */
    getAnimationByName(name) {
        let index;
        for(let i=0; i<this.anim.length; i++){
            if(this.anim[i].getName() === name){
                index = i;
            }
        }
        return index;
    }
    setFrame(animation, frame) {
        let name = animation.getName();
        let sprite = animation.getSprite(frame);
        this.currentFrame = frame;
        document.getElementById(name).style.width = sprite.getWidth();
        document.getElementById(name).style.height = sprite.getHeight();
        document.getElementById(name).style.backgroundPositionX = - sprite.getX() + "px";
        document.getElementById(name).style.backgroundPositionY = - sprite.getY() + "px";
    }
    setFrameInCurrentAnimation(frame) {
        this.setFrame(this.currentAnimation, frame);
    }
    update() {
        if(this.currentFrame != -1){
            this.setFrame(this.currentAnimation, this.currentFrame);
            this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);
        }
    }
}

/*
class RogerPlayer {
    constructor() {

    }
    play(frame) {
    }
    pause(frame) {

    }
    stop() {
        
    }
    nextFrame() {

    }
    prevFrame() {

    }
}

/*
    - play() -> play(5) [frame]
    - pause()
    - stop()
    - playReverse() -> playReverse(6) [frame]
    - frame() -> frame(4) [frame]
    - nextFrame()
    - prevFrame()
    - 
    - config.loop
    - config.callBack
    - config.preload
*/