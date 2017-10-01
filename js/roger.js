'use strict';

class RogerClock {
    constructor(){
        this.step = 0.01;
        this.clock = 0;
    }
    init() {
        this.clock = 0;
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
 * @return w, h, x, y
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
}

/**
 * @class RogerSheet
 * @param url [string] an absolute URL giving the base location of the spritesheet
 * @param width [number] total width of the image
 * @param height [number] total height of the image
 * @return RogerSprite
 */
class RogerSheet {
    constructor(url, width, height, dataFrames, sameSizeFrames) {
        this.url = url;
        this.width = width;
        this.height = height;
        this.dataFrames = dataFrames;
        this.sameSizeFrames = sameSizeFrames || false;

        this.framesHorizontal = 0;
        this.framesVertical = 0;
        this.map = [];

        if(sameSizeFrames){
            this.framesHorizontal = Math.floor( this.width / this.dataFrames[0].w );
            this.framesVertical  = Math.floor( this.height / this.dataFrames[0].h );
            PabTools.show("All frames have SAME size");
        }else{
            //TODO
            PabTools.show("Frames have DIFFERENT sizes", "info");
        }

        if(sameSizeFrames){
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
 * @param spriteSheet [RogerSheet] sprite sheet linked to the animation
 * @param frameList [array] list with the frames that make the animation
 * @return array
 * @see RogerSprite
 */
class RogerAnimation {
    constructor(spriteSheet, frameList) {
        this.spriteSheetUrl = spriteSheet.getURL();
        this.spriteAnimation = [];

        for(let i=0; i<frameList.length; i++){
            this.spriteAnimation.push(spriteSheet.getSprite(frameList[i]));
        }
    }
    getURL() {
        return this.spriteSheetUrl;
    }
    getSprite(number) {
        return this.spriteAnimation[number];
    }
}

/**
 * @class RogerObject
 * @param id [String] id of the element of the DOM linked to the object
 * @return array
 * @see RogerSprite
 */
class RogerObject {
    constructor(id) {
        this.id = id;
        this.elem = document.getElementById(id);
        this.anim = [];
    }
    addAnimation(animation, name) {
        let div = document.createElement('div');
        div.className = 'animation';
        div.style.backgroundImage = "url('" + animation.getURL() + "')";
        div.style.width = animation.getSprite(0).getWidth();
        div.style.height = animation.getSprite(0).getHeight();
        this.elem.appendChild(div);

        //this.anim.push();
    }
    setFrame(frame) {
        this.div.style.width = sprite.getWidth();
        div.style.height = sprite.getHeight();
        div.style.backgroundPositionX = sprite.getX() + "px";
        div.style.backgroundPositionY = sprite.getY() + "px";
    }
    /*
    anim(name) {
        // Busca la animacion
        // de vuelve la animacion
        return name;
    }
    */
}

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

//Object Properties
/**
 * Short description. (use period)
 *
 * @since x.x.x
 * @access (private, protected, or public)
 * @property type $var Description.
 */