/**
 * @class RogerSprite
 * @description Sprite is the minimun element. It's a frame, an image inside another 
 * @param {url} url an absolute URL giving the base location of the spritesheet
 * @param {number} w width of the sprite
 * @param {number} h height of the sprite
 * @param {number} x top position on the sprite sheet from 0,0
 * @param {number} y left position on the sprite sheet from 0,0
 * @return {number} width
 * @return {number} height
 * @return {number} positionX
 * @return {number} positionY
 */
class RogerSprite {
    constructor(url, size, position) {
        this.url = url;
        this.width = size.w;
        this.height = size.h;
        this.positionX = position.x;
        this.positionY = position.y;
    }
    /* PUBLIC METHODS */
    getURL() {
        return this.url;
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    getX() {
        return this.positionX;
    }
    getY() {
        return this.positionY;
    }
}

// export default RogerSprite;
