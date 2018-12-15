// import RogerSheet from './RogerSheet.js';

/**
 * @class RogerRegularSheet
 * @description this sprite sheet has ALL the sprites of the same size
 * @param {string} url an absolute URL giving the base location of the spritesheet
 * @param {Object} sheetSize {w:total width of the sheet, h:total height of the sheet }
 * @param {Object} spriteSize {w:total width of the sprite, h:total height of the sprite }
 * @return {string} url [String]
 * @return sprite [RogerSprite]
 */
class RogerRegularSheet extends RogerSheet {
    constructor(url, sheetSize, spriteSize) {
        let sprites = [];
        let currentX = 0;
        let currentY = 0;
        let framesHorizontal = Math.floor(sheetSize.w / spriteSize.w);
        let framesVertical  = Math.floor(sheetSize.h / spriteSize.h);

        for(let i=0; i<framesVertical; i++){
            for(let j=0; j<framesHorizontal; j++){
                let sprite = {
                    w: spriteSize.w,
                    h: spriteSize.h,
                    x: currentX,
                    y: currentY
                }
                sprites.push(sprite);
                currentX += spriteSize.w; 
            }
            currentX = 0;
            currentY += spriteSize.h;  
        }
        super(url, sheetSize, sprites);
    }
}

// export default RogerRegularSheet;