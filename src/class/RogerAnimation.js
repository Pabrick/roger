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
        this.name = name;
        this.spriteSheetUrl = spriteSheet.getURL();
        this.spriteAnimation = [];
        this.direction = {
            FORWARD: 'forward',
            BACKWARD: 'backward',
            RANDOM: 'random',
        };
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
        frameList.forEach(frame => {
            this.spriteAnimation.push(spriteSheet.getSprite(frame));
        });
    }
    setOptions(options) {
        let defaultOptions = {
            delay: 0,
            loops: 0,
            direction: this.direction.FORWARD,
            callBack: null
        }
        if(options) {
            this.options = {
                delay: options.delay ? options.delay : defaultOptions.delay,
                loops: options.loops ? options.loops : defaultOptions.loops,
                direction: options.direction ? options.direction : defaultOptions.direction,
                callBack: options.callBack ? options.callBack : defaultOptions.callBack
            }
        } else {
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

        if (this.options.delayTime <= 0) {
            if (this.options.direction === this.direction.FORWARD) {
                nextFrame = currentFrame + 1;
            } else if (this.options.direction === this.direction.BACKWARD) {
                nextFrame = currentFrame - 1;
            } else if (this.options.direction === this.direction.RANDOM) {
                nextFrame = Math.floor((Math.random() * frameLimit) + 0);
            }
        }else{
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
                if (this.options.loops != -1) {
                    this.options.loopsNumber--;
                }
                this.options.delayTime = this.options.delay;
            } else {
                nextFrame = -1;
            }
            if (this.options.callBack != null) {
                this.options.callBack();
            }
        }

        return nextFrame;
    }
}

// export default RogerAnimation;
