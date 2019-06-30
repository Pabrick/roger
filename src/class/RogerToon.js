/**
 * @class RogerToon
 * @param {string} id id of the element of the DOM linked to the object
 * @param {RogerSprite} idle sprite as default while to animation is stopped
 * @return {string} animationName
 * @see RogerSprite
 */
class RogerToon {
    constructor(id, idle) {
        this.id = id;
        this.domElem = document.getElementById(id);
        this.anim = new Map();
        this.currentAnimation;
        this.currentFrame;
        this.isAnimationPlaying = false;

        if(idle) {
            this.idle = idle;
            this.paintSprite(idle);
        }
    }
    /* PUBLIC METHODS */

    /**
     * @method update
     * @description this method should be executed by events of RogerClock, setting the next frame of the current 
     */
    update() {
        if(this.isAnimationPlaying) {

            this.setFrame(this.currentAnimation, this.currentFrame);
            this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);

            if (this.currentAnimation.hasFinished) {

                this.isAnimationPlaying = false;
                if (this.currentAnimation.hasCallBack) {
                    this.currentAnimation.executeCallBack();
                } else {
                    this.stopAnimation(this.currentAnimation.name);  
                }

            }
        }
    }
    addAnimation(rogerAnimation) {
        const animationName = rogerAnimation.name;
        if (!this.anim.has(animationName)) {
            this.anim.set(animationName, rogerAnimation);
        } else {
            alert(`The RogerToon ${this.id} has ALREADY an animation with the name: ${animationName} \n Please choose another name and try it again.`);
        }
    }
    playAnimation(name) {
        console.log("Play animation: " + name);
        this.isAnimationPlaying = true;
        this.currentAnimation = this.anim.get(name);
        this.currentFrame = 0;
        this.currentAnimation.resetAnimation();
    }
    stopAnimation(name) {
        console.log("Stop animation: " + name);
        this.isAnimationPlaying = false;
        this.currentFrame = 0;
        this.paintSprite( this.anim[0].getSprite(0) );
    }

    /* PRIVATE METHODS */
    setFrame(animation, frame) {
        this.currentAnimation = animation;
        this.currentFrame = frame;
        this.paintSprite( animation.getSprite(frame) );
    }
    paintSprite(sprite) {
        this.domElem.style.backgroundImage = `url("${sprite.url}")`;
        this.domElem.style.width = sprite.w + "px";
        this.domElem.style.height = sprite.h + "px";
        this.domElem.style.backgroundPositionX = - sprite.x + "px";
        this.domElem.style.backgroundPositionY = - sprite.y + "px";
    }
}

export default RogerToon;
