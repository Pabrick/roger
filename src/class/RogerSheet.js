import RogerSprite from "./RogerSprite.js";

/**
 * @class RogerSheet
 * @param {string} url an absolute URL giving the base location of the spritesheet
 * @param {Object} size {w:total width of the sheet, h:total height of the sheet }
 * @param {Array} sprites array with sizes of each sprite
 * @return {string} url
 * @return {RogerSprite} sprite
 */
class RogerSheet {
    constructor(url, size, sprites) {
        this.sheetURL = url;
        this.width = size.w;
        this.height = size.h;
        this.rogerSprites = [];

        sprites.forEach(sprite => {
            this.rogerSprites.push(new RogerSprite(url, {w:sprite.w, h:sprite.h}, {x:sprite.x, y:sprite.y}));
        });
    }
    get url() {
        return this.sheetURL;
    }
    /* PUBLIC METHODS */
    getSprite(number) {
        return this.rogerSprites[number];
    }
}

export default RogerSheet;
