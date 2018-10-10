/**
 * Clock is the key to sync all the anims.
 * @class RogerClock
 * @param delta [number] 
 */
class RogerClock {
    constructor(delta) {
        this.delta = delta;
        this.clock = 0;
        this.clockInterval;
        this.deltaTime = this.delta * 1000;
        this.objects = [];
    }
    /* PUBLIC METHODS */
    init() {
        this.clock = 0;
        this.clockInterval = setInterval(()=>this.update(), this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    update() {
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        for(let i = 0; i < this.objects.length; i++){
            if(this.objects[i]){
                this.objects[i].update();
            }
        }
    }
    addObject(rogerObject) {
        this.objects.push(rogerObject);
    }
    removeObject(rogerObject) {
        //removeanimation
    }
}

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

/**
 * @class RogerSheet
 * @param url [string] an absolute URL giving the base location of the spritesheet
 * @param size [object] {w:total width of the sheet, h:total height of the sheet }
 * @param dataFrames [array] array with sizes of each sprite
 * @return url [String]
 * @return sprite [RogerSprite]
 */
class RogerSheet {
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

const DIRECTION_FORWARD = "forward";
const DIRECTION_BACKWARD = "backward";
const DIRECTION_RANDOM = "random";

/**
 * @class RogerAnimation
 * @param name [String] name for the animation
 * @param spriteSheet [RogerSheet] sprite sheet linked to the animation
 * @param frameList [array] list with the frames that make the animation
 * @return animation [RogerAnimation]
 * @return name [String]
 * @return url [String]
 * @return sprite [RogerSprite]
 * @see RogerSprite
 */
class RogerAnimation {
    constructor(name, spriteSheet, frameList, options) {
        this.name = name;
        this.spriteSheetUrl = spriteSheet.getURL();
        this.spriteAnimation = [];
        this.setSpriteAnimation(spriteSheet, frameList);
        this.setOptions(options);
    }
    /* PUBLIC METHODS */
    setOption(object) {
        this.options = object;
    }
    setLoop(boolean) {
        this.options.loop = boolean;
    }
    getAnimation() {
        return this;
    }
    getName() {
        return this.name;
    }
    getURL() {
        return this.spriteSheetUrl;
    }
    getSprite(number) {
        return this.spriteAnimation[number];
    }

    /* PRIVATE METHODS */
    setSpriteAnimation(spriteSheet, frameList){
        for(let i=0; i<frameList.length; i++){
            this.spriteAnimation.push(spriteSheet.getSprite(frameList[i]));
        }
    }
    setOptions(options) {
        let defaultOptions = {
            delay: 0,
            loops: 0,
            direction: DIRECTION_FORWARD,
            callBack: null
        }
        if(options){
            this.options = {
                delay: options.delay ? options.delay : defaultOptions.delay,
                loops: options.loops ? options.loops : defaultOptions.loops,
                direction: options.direction ? options.direction : defaultOptions.direction,
                callBack: options.callBack ? options.callBack : defaultOptions.callBack
            }
        }else{
            this.options = defaultOptions;
        }
        this.resetAnimation();
    }
    resetAnimation() {
        this.options.delayTime = this.options.delay - 1;
        this.options.loopsNumber = this.options.loops - 1;
    }
    getNextFrame(currentFrame) {
        let nextFrame;
        let frameLimit = this.spriteAnimation.length;

        if(this.options.delayTime <= 0) {
            if(this.options.direction === DIRECTION_FORWARD){
                nextFrame = currentFrame + 1;
            }else if(this.options.direction === DIRECTION_BACKWARD){
                nextFrame = currentFrame - 1;
            }else if(this.options.direction === DIRECTION_RANDOM){
                nextFrame = Math.floor((Math.random() * frameLimit) + 0);
            }
        }else{
            nextFrame = currentFrame;
            this.options.delayTime--;
        }

        if(nextFrame >= frameLimit || nextFrame < 0){
            if(this.options.loops === -1 || this.options.loopsNumber > 0){
                if(nextFrame >= frameLimit){
                    nextFrame = 0;
                }else if(nextFrame < 0){
                    nextFrame = frameLimit;
                }
                if(this.options.loops != -1) {
                    this.options.loopsNumber--;
                }
                this.options.delayTime = this.options.delay;
            }else{
                nextFrame = -1;
            }
            if(this.options.callBack != null){
                this.options.callBack();
            }
        }

        return nextFrame;
    }
}

/**
 * @class RogerObject
 * @param id [String] id of the element of the DOM linked to the object
 * @param clock [RogerClock] clock linked to the project, the one to set the delta time
 * @return animationName [String]
 * @see RogerSprite
 */
class RogerObject {
    constructor(id, clock) {
        this.id = id;
        this.clock = clock;
        this.elem = document.getElementById(id);
        this.anim = [];
        this.currentAnimation;
        this.currentFrame;
        this.clock.addObject(this);
    }
    /* PUBLIC METHODS */
    addAnimation(rogerAnimation) {
        let currentName = rogerAnimation.getName();
        if(this.getAnimationByName(currentName) === -1){
            let div = document.createElement('div');
            div.id = currentName;
            div.className = 'animation';
            div.style.backgroundImage = "url('" + rogerAnimation.getURL() + "')";
            div.style.display = 'none';
            this.elem.appendChild(div);
            this.anim.push(rogerAnimation);
            this.setFrame(rogerAnimation, 0);
        }else{
            alert("The RogerObject '" + this.id + "' has ALREADY an animation with the name: '" + currentName + "'\n Please choose another name and try it again.");
        }
    }
    setDefaultAnimation(name) {
        let shiftIndex = this.getAnimationByName(name);
        let defaultAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.anim[shiftIndex] = this.anim[0];
        this.anim[0] = defaultAnimation;
    }
    playAnimation(name) {
        if(this.currentAnimation){
            document.getElementById(this.currentAnimation.getName()).style.display = 'none';
        }
        this.currentAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.currentFrame = 0;
        this.currentAnimation.resetAnimation();
        document.getElementById(name).style.display = 'block';
    }

    /* PRIVATE METHODS */
    getAnimationByName(name) {
        let index = -1;
        for(let i=0; i<this.anim.length; i++){
            if(this.anim[i].getName() === name){
                index = i;
            }
        }
        return index;
    }
    setFrame(animation, frame) {
        this.currentAnimation = animation;
        this.currentFrame = frame;
        let name = animation.getName();
        let sprite = animation.getSprite(frame);
        document.getElementById(name).style.width = sprite.getWidth();
        document.getElementById(name).style.height = sprite.getHeight();
        document.getElementById(name).style.backgroundPositionX = - sprite.getX() + "px";
        document.getElementById(name).style.backgroundPositionY = - sprite.getY() + "px";
    }
    update() {
        if(this.currentFrame != -1){
            this.setFrame(this.currentAnimation, this.currentFrame);
            this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);
        }
    }
}