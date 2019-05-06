/**
 * @class RogerAnimation
 * @param {string} name name for the animation
 * @param {RogerSheet} spriteSheet sprite sheet linked to the animation
 * @param {Array} frameList list with the frames that make the animation
 * @return {RogerAnimation} animation
 * @return {strign} name
 * @return {string} url
 * @return {RogerSprite} sprite
 * @see RogerSprite
 */
class RogerAnimation {
    constructor(name, spriteSheet, frameList, options) {
        this.direction = {
            FORWARD: 'forward',
            BACKWARD: 'backward',
            RANDOM: 'random',
        };
        this.animName = name;
        this.spriteSheetUrl = spriteSheet.url;
        this.spriteAnimation = this.getSpriteAnimation(spriteSheet, frameList);
        this.options = this.getDefaultOptions(options);
        this.isFinished = false;
    }

    get name() {
        return this.animName;
    }
    get url() {
        return this.spriteSheetUrl;
    }
    get hasCallBack() {
        return (this.options && this.options.callBack) ? true : false;
    }
    get hasFinished() {
        return this.isFinished;
    }
    
    /* PUBLIC METHODS */
    setOption(object) {
        this.options = object;
    }
    setLoop(boolean) {
        this.options.loop = boolean;
    }
    getSprite(number) {
        return this.spriteAnimation[number];
    }
    executeCallBack() {
        if(this.hasCallBack) {
            this.options.callBack();
        }
    }

    /* PRIVATE METHODS */
    getSpriteAnimation(spriteSheet, frameList) {
        let spriteAnimation = [];
        frameList.forEach(frame => {
            spriteAnimation.push(spriteSheet.getSprite(frame));
        });
        return spriteAnimation;
    }
    getDefaultOptions(options) {
        let defaultOptions = {
            delay: 0,
            loops: 0,
            direction: this.direction.FORWARD,
            callBack: null
        }
        if(options) {
            defaultOptions = {
                delay: options.delay ? options.delay : defaultOptions.delay,
                loops: options.loops ? options.loops : defaultOptions.loops,
                direction: options.direction ? options.direction : defaultOptions.direction,
                callBack: options.callBack ? options.callBack : defaultOptions.callBack
            }
        }
        // this.resetAnimation();
        return defaultOptions;
    }
    resetAnimation() {
        this.options.delayTime = this.options.delay - 1;
        this.options.loopsNumber = this.options.loops - 1;
    }
    getNextFrame(currentFrame) {
        let nextFrame;
        let frameLimit = this.spriteAnimation.length;
        this.isFinished = false;

        // Calculate NextFrame if delayTime is over
        if (this.options.delayTime <= 0) {
            switch (this.options.direction) {
                case this.direction.FORWARD:
                    nextFrame = currentFrame + 1;
                    break;
                case this.direction.BACKWARD:
                    nextFrame = currentFrame - 1;
                    break;
                case this.direction.RANDOM:
                    nextFrame = Math.floor((Math.random() * frameLimit) + 0);
                    // NOTE: RANDOM animations have infinite loops
                    break;
                default:
                    nextFrame = currentFrame + 1;
                    break;
            }
        } else {
            nextFrame = currentFrame;
            this.options.delayTime--;
        }

        // RECALCULATE NextFrame in case it's out of the limits
        if (nextFrame >= frameLimit || nextFrame < 0) {
            if (this.options.loops === -1 || this.options.loopsNumber > 0) {
                if (nextFrame >= frameLimit) {
                    nextFrame = 0;
                } else if(nextFrame < 0) {
                    nextFrame = frameLimit;
                }
                if (this.options.loops !== -1) {
                    this.options.loopsNumber--;
                }
                this.options.delayTime = this.options.delay;
            } else {
                nextFrame = -1;
                this.isFinished = true;
            }
        }

        return nextFrame;
    }
}

export default RogerAnimation;
