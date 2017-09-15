'use strict';

var ssRun = new SpriteSheet("img/sprite_sheet.png", 130, 150);
var mainCharRun = new Animation("test", spriteSheet1, 27);

class SpriteSheet  {
    constructor(url, widthSprite, heightSprite) {
        this.url = url;
        this.widthSprite = widthSprite;
        this.heightSprite = heightSprite;
    }
    getSprite(){
        
    }
}

//Object Properties
/**
 * Short description. (use period)
 *
 * @since x.x.x
 * @access (private, protected, or public)
 * @property type $var Description.
 */