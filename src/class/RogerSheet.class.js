import { RogerSprite } from './RogerSprite.class.js';

/**
 * @class RogerSheet
 * @param url [string] an absolute URL giving the base location of the spritesheet
 * @param size [object] {w:total width of the sheet, h:total height of the sheet }
 * @param dataFrames [array] array with sizes of each sprite
 * @return url [String]
 * @return sprite [RogerSprite]
 */
export class RogerSheet {
    constructor(url, size, dataFrames) {
        this.url = url;
        this.width = size.w;
        this.height = size.h;
        this.map = [];

        for(let i=0; i<dataFrames.length; i++){
            this.map.push(new RogerSprite(dataFrames[i].w, dataFrames[i].h, dataFrames[i].x, dataFrames[i].y));
        }
    }
    /* PUBLIC METHODS */
    getURL() {
        return this.url;
    }
    getSprite(number) {
        return this.map[number];
    }
}