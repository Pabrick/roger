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

        // Primero calcula los frames que entran;
        if(sameSizeFrames){
            this.framesHorizontal = Math.floor( this.width / this.dataFrames[0].w );
            this.framesVertical  = Math.floor( this.height / this.dataFrames[0].h );
            PabTools.show("All frames have SAME size");
        }else{
            //TODO
            PabTools.show("Frames have DIFFERENT sizes", "info");
        }

        // Después les asigna posiciones a cada uno de ellos.
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
        this.spriteSheet = spriteSheet;
        this.frameList = frameList;
        this.spriteAnimation = [];

        for(let i=0; i<frameList.length; i++){
            this.spriteAnimation.push(spriteSheet.getSprite(this.frameList[i]));
        }

    }
    getAnimation() {
        this.spriteAnimation;
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