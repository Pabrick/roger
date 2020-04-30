import DIRECTION from "./../units/direction.const";
import RogerAnimationOptions from "./RogerAnimationOptions.js";

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
	constructor(name, spriteSheet, frameList, options = {}) {
		this.animName = name;
		this.spriteSheetUrl = spriteSheet.url;
		this.spriteAnimation = this.getSpriteAnimation(spriteSheet, frameList);
		this.options = new RogerAnimationOptions(options.delay, options.loops, options.direction, options.callback);
		this.isFinished = false;

		this.checkOptionErrors(this.options);
	}

	/* PUBLIC METHODS */
	get name() {
		return this.animName;
	}
	get url() {
		return this.spriteSheetUrl;
	}
	get hasCallback() {
		return this.options.callback ? true : false;
	}
	get hasFinished() {
		return this.isFinished;
	}

	setOption(object) {
		this.options = object;
	}
	getSprite(number) {
		return this.spriteAnimation[number];
	}
	executeCallback() {
		if (this.hasCallback) {
			this.options.callback();
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
	resetAnimation() {
		this.isFinished = false;
		this.options.delayCounter = this.options.delay - 1;
		// if direction BACKWARD we need to adjust the loops
		this.options.loopsCounter = this.options.loops + (this.options.direction === DIRECTION.BACKWARD ? 1 : 0);
	}
	getNextFrame(currentFrame) {
		const hasInfiniteLoops = this.options.loops === -1 ? true : false;
		const hasRemainingLoops = this.options.loopsCounter > 0 ? true : false;
		const lastFrame = this.spriteAnimation.length - 1;
		let nextFrame;

		// Calculate nextFrame if delayTime is over
		if (this.options.delayCounter <= 0) {
			nextFrame = this.getNextFrameByDirection(currentFrame);
		} else {
			this.options.delayCounter--;
			nextFrame = currentFrame;
		}

		// RECALCULATE nextFrame in case it's out of the limits
		if (nextFrame >= lastFrame + 1 || nextFrame < 0) {
			if (hasInfiniteLoops || hasRemainingLoops) {

				nextFrame = this.getNextFrameOutLimits(nextFrame, lastFrame);
				if (!hasInfiniteLoops && hasRemainingLoops) {
					this.options.loopsCounter--;
				}
				this.options.delayCounter = this.options.delay;

			} else {
				nextFrame = currentFrame;
				this.isFinished = true;
			}
		}

		return nextFrame;
	}

	getNextFrameByDirection(currentFrame) {
		switch (this.options.direction) {
			case DIRECTION.FORWARD:
				return currentFrame + 1;
			case DIRECTION.BACKWARD:
				return currentFrame - 1;
			case DIRECTION.RANDOM:
				return Math.floor((Math.random() * this.spriteAnimation.length) + 0);
			default:
				return currentFrame + 1;
		}
	}

	getNextFrameOutLimits(nextFrame, lastFrame) {
		if (nextFrame >= lastFrame) {
			return 0;
		} else if (nextFrame < 0) {
			return lastFrame;
		}
	}

	checkOptionErrors(options) {
		if (options.loops === -1 && options.callback !== null) {
			alert(`The RogerAnimation ${this.name} will never execute its callback because it has infinite loops.`);
		}

		if (options.direction === DIRECTION.random && options.callback !== null) {
			alert(`The RogerAnimation ${this.name} will never execute its callback because RANDOM animations have infinite loops.`);
		}
	}
}

export default RogerAnimation;