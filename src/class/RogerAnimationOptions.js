import DIRECTION from "./../units/direction.const";

/**
 * @class RogerAnimationOptions
 * @description configuration of the animation
 * @param {number} delay time before the animation starts
 * @param {number} repeat number of times the animation repeats
 * @param {string} direction order of the frames
 * @param {Function} callback function executed after the animation ends
 */
class RogerAnimationOptions {
	constructor(delay, loops, direction, callback) {
		this.delay = delay ? delay : 0;
		this.loops = (typeof loops === 'number') ? loops : -1;
		this.direction = direction ? direction : DIRECTION.FORWARD;
		this.callback = callback ? callback : null;
	}
}

export default RogerAnimationOptions;