// const EventEmitter = require('events');

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
        // super();
        this.direction = {
            FORWARD: 'forward',
            BACKWARD: 'backward',
            RANDOM: 'random',
        };
        this.name = name;
        this.spriteSheetUrl = spriteSheet.getURL();
        this.spriteAnimation = this.getSpriteAnimation(spriteSheet, frameList);
        this.options = this.getDefaultOptions(options);
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
            }
            if (this.options.callBack !== null) {
                this.options.callBack();
            }
            // this.emit('finish');
        }

        return nextFrame;
    }
}

// export default RogerAnimation;
