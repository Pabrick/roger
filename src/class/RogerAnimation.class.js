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