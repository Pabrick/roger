/**
 * @class RogerSprite
 * @description Sprite is the minimun element. It's a frame, an image inside another 
 * @param {url} url an absolute URL giving the base location of the spritesheet that contains the sprite
 * @param {Object} size {w: width of the sprite; h: height of the sprite }
 * @param {Object} position {x: top position on the sprite sheet from 0.0, y: left position on the sprite sheet from 0.0 }
 */
class RogerSprite {
    constructor(url, size, position) {
        this.spriteURL = url;
        this.width = size.w;
        this.height = size.h;
        this.positionX = position.x;
        this.positionY = position.y;
    }
    get url() {
        return this.spriteURL;
    }
    get w() {
        return this.width;
    }
    get h() {
        return this.height;
    }
    get x() {
        return this.positionX;
    }
    get y() {
        return this.positionY;
    }
}

export default RogerSprite;
