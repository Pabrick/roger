// import RogerSprite from './RogerSprite.js';

/**
 * @class RogerSheet
 * @param {string} url an absolute URL giving the base location of the spritesheet
 * @param {Object} size {w:total width of the sheet, h:total height of the sheet }
 * @param {Array} dataFrames array with sizes of each sprite
 * @return {string} url
 * @return {RogerSprite} sprite
 */
class RogerSheet {
    constructor(url, size, dataFrames) {
        this.url = url;
        this.width = size.w;
        this.height = size.h;
        this.sprites = [];

        dataFrames.forEach(frame => {
            this.sprites.push(new RogerSprite(frame.w, frame.h, frame.x, frame.y));
        });
    }
    /* PUBLIC METHODS */
    getURL() {
        return this.url;
    }
    getSprite(number) {
        return this.sprites[number];
    }
}

// export default RogerSheet;