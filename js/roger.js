'use strict';

/**
 * Sprite is the minimun element.
 * It's a frame, an image inside another 
 * @class RogerSprite
 * @param width [number] width of the sprite
 * @param height [number] height of the sprite
 * @param positionX [number] top position on the sprite sheet from 0,0
 * @param positionY [number] left position on the sprite sheet from 0,0
 * @return width, height, x, y
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
 * @param url an absolute URL giving the base location of the spritesheet
 * @param width total width of the image
 * @param height total height of the image
 * @return nothing
 */
class RogerSheet {
    constructor(url, width, height, framesSizes) {
        this.url = url;
        this.width = width;
        this.height = height;
        this.framesSizes = framesSizes;
        this.framesTotal = 0;
        this.framesHorizontal = 0;
        this.framesVertical = 0;

        if(this.framesSizes.length >= 1){
            this.framesHorizontal = Math.floor( this.width / this.framesSizes[0].w );
            this.framesVertical  = Math.floor( this.height / this.framesSizes[0].h );
            this.framesTotal = this.framesHorizontal * this.framesVertical;
        }
    }
     getURL() {
        return this.url;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getFrames() {
        return this.framesTotal;
    }
    getFramesHorizontal() {
        return this.framesHorizontal;
    }
    getFramesVertical() {
        return this.framesVertical;
    }
    getSheet() {
        return this;
    }
}

/**
 * @class RogerAnimation
 * @param spriteSheet sprite sheet linked to the animation
 * @param array sizes and positions of the frames
 * @param initFrame first frame of the animation
 * @param lastFrame last frame of the animation
 * @return map
 * @see RogerSprite
 */
class RogerAnimation {
    constructor(spriteSheet, frameList) {
        this.spriteSheet = spriteSheet;
        this.array = array;
        this.initFrame = initFrame;
        this.lastFrame = lastFrame;

        this.framesTotal = 0;
        this.framesHorizontal = 0;
        this.framesVertical = 0;
        this.map = [];

        if((this.array.length >= 1) && (this.numFrames != 1)){
            this.framesHorizontal = Math.floor( spriteSheet.getWidth() / this.array[0].w );
            this.framesVertical = Math.floor( spriteSheet.getHeight() / this.array[0].h );
            let top = 0;
            let left = 0;
            let index = 0;

            for(let i=0; i<framesVertical; i++){
                for(let j=0; j<framesHorizontal; j++){
                    if((index >= initFrame) && (index <= lastFrame)){
                        this.map.push(new RogerSprite(this.array[0].w, this.array[0].h, left, top));
                        left += this.array[0].w; 
                    }
                    index++;
                }
                left = 0;
                top += this.array[0].h;    
            }
            PabTools.show("All frames have SAME size");
        }else{
            PabTools.show("Frames have DIFFERENT sizes", "info");
        }
    }
    getMap() {
        return this.map;
    }
}

/**
 * @class RogerAnimation
 * @param spritesheet the spritesheet where the sprite is
 * @param width width of the sprite
 * @param height height of the sprite
 * @return nothing
 */
/*
class RogerAnimation extends RogerSprite {
    constructor(spriteSheet, width, height, positionX, positionY){
        super(spriteSheet.getURL(), spriteSheet.getWidth(), spriteSheet.getWidth());
        this.spriteSheet = spriteSheet;
        this.width = width;
        this.height = height;
        this.x = positionX;
        this.y = positionY;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getPosition() {
        return {x:this.x, y:this.y};
    }
}
*/
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