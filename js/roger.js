'use strict';

/**
 * @class RogerSheet
 * @param url an absolute URL giving the base location of the spritesheet
 * @param width total width of the image
 * @param height total height of the image
 * @return nothing
 */
class RogerSheet {
    constructor(url, width, height) {
        this.url = url;
        this.width = width;
        this.height = height;
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
    getSheet() {
        return this;
    }
}

/**
 * @class RogerSprite
 * @param spritesheet the spritesheet where the sprite is
 * @param width width of the sprite
 * @param height height of the sprite
 * @return width, height, position
 * @see RogerSheet
 */
class RogerSprite extends RogerSheet {
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

/**
 * @class RogerAnimation
 * @param spritesheet the spritesheet where the sprite is
 * @param width width of the sprite
 * @param height height of the sprite
 * @return nothing
 */
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