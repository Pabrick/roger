/**
 * @class RogerRegularSheet
 * @description this sprite sheet has ALL the sprites of the same size
 * @param url [string] an absolute URL giving the base location of the spritesheet
 * @param sheetSize [object] {w:total width of the sheet, h:total height of the sheet }
 * @param spriteSize [object] {w:total width of the sprite, h:total height of the sprite }
 * @return url [String]
 * @return sprite [RogerSprite]
 */
class RogerRegularSheet extends RogerSheet {
    constructor(url, sheetSize, spriteSize) {
        let dataFrames = [];

        let currentX = 0;
        let currentY = 0;
        let index = 0;
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
                dataFrames.push(sprite);
                currentX += spriteSize.w; 
                index++;
            }
            currentX = 0;
            currentY += spriteSize.h;  
        }
        super(url, sheetSize, dataFrames);
    }
}