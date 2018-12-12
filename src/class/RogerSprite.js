/**
 * @class RogerSprite
 * @description Sprite is the minimun element. It's a frame, an image inside another 
 * @param {number} width width of the sprite
 * @param {number} height height of the sprite
 * @param {number} positionX top position on the sprite sheet from 0,0
 * @param {number} positionY left position on the sprite sheet from 0,0
 * @return {number} w
 * @return {number} h
 * @return {number} x
 * @return {number} y
 */
class RogerSprite {
    constructor(width, height, positionX, positionY) {
        this.w = width;
        this.h = height;
        this.x = positionX;
        this.y = positionY;
    }
    /* PUBLIC METHODS */
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

// export default RogerSprite;
