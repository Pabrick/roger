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
	constructor(options) {
		this.delay = options.delay ? options.delay : 0;
		this.loops = (typeof options.loops === 'number') ? options.loops : -1;
		this.direction = options.direction ? options.direction : DIRECTION.FORWARD;
		this.callback = options.callback ? options.callback : null;
	}
}

export default RogerAnimationOptions;