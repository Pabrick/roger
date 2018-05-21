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
export class RogerSprite {
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