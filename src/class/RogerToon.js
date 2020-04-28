/**
 * @class RogerToon
 * @param {string} id id of the element of the DOM linked to the object
 * @return {string} animationName
 * @see RogerSprite
 */
class RogerToon {
	constructor(id) {
		this.id = id;
		this.domElem = document.getElementById(id);
		this.animList = new Map();
		this.currentAnimation;
		this.currentFrame;
		this.isAnimationPlaying = false;
	}

	/* PUBLIC METHODS */

	get currentAnimationName() {
		return this.currentAnimation.name;
	}

	/**
	 * @method update
	 * @description this method should be executed by events of RogerClock, setting the next frame of the current
	 */
	update() {
		if (this.isAnimationPlaying) {

			this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);
			this.setFrame(this.currentAnimation, this.currentFrame);

			if (this.currentAnimation.hasFinished) {
				this.isAnimationPlaying = false;
				this.currentAnimation.executeCallback();
				this.stop(this.currentAnimation.name);
			}
		}
	}
	add(rogerAnimation) {
		const animationName = rogerAnimation.name;
		if (!this.animList.has(animationName)) {
			this.animList.set(animationName, rogerAnimation);
		} else {
			alert(`The RogerToon ${this.id} has ALREADY an animation with the name: ${animationName} \n Please choose another name and try it again.`);
		}
	}
	play(name) {
		this.isAnimationPlaying = true;
		this.currentAnimation = this.animList.get(name);
		this.currentFrame = 0;
		this.currentAnimation.resetAnimation();
	}
	stop() {
		this.isAnimationPlaying = false;
		this.currentFrame = 0;
		// this.drawSprite(this.animList.values().next().value.getSprite(0));
	}

	/* PRIVATE METHODS */
	setFrame(animation, frame) {
		this.currentAnimation = animation;
		this.currentFrame = frame;
		this.drawSprite(animation.getSprite(frame));
	}
	drawSprite(sprite) {
		if (this.domElem.style.backgroundImage !== `url("${sprite.url}")`) {
			this.domElem.style.backgroundImage = `url("${sprite.url}")`;
		}

		if (this.domElem.style.width !== sprite.w + "px") {
			this.domElem.style.width = sprite.w + "px";
		}

		if (this.domElem.style.height !== sprite.h + "px") {
			this.domElem.style.height = sprite.h + "px";
		}

		if (this.domElem.style.backgroundPositionX !== -sprite.x + "px") {
			this.domElem.style.backgroundPositionX = -sprite.x + "px";
		}

		if (this.domElem.style.backgroundPositionY !== -sprite.y + "px") {
			this.domElem.style.backgroundPositionY = -sprite.y + "px";
		}
	}
}

export default RogerToon;