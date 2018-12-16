/**
 * @class RogerObject
 * @param {string} id id of the element of the DOM linked to the object
 * @return {string} animationName
 * @see RogerSprite
 */
class RogerObject {
    constructor(id, idle) {
        this.id = id;
        this.domElem = document.getElementById(id);
        this.anim = [];
        this.currentAnimation;
        this.currentFrame;

        if(idle) {
            this.idle = idle;
            this.setSprite(idle);
        }
    }
    /* PUBLIC METHODS */

    /**
     * @method update
     * @description this method should be executed by events of RogerClock, setting the next frame of the current 
     */
    update() {
        console.log(this.currentAnimation, this.currentFrame);
        if(this.currentAnimation && this.currentFrame !== -1) {
            this.setFrame(this.currentAnimation, this.currentFrame);
            this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);
            console.log(this.currentFrame);
        }
    }
    addAnimation(rogerAnimation) {
        if (this.getAnimationIndexByName(rogerAnimation.getName()) === -1) {
            this.anim.push(rogerAnimation);
        } else {
            alert(`The RogerObject ${this.id} has ALREADY an animation with the name: ${currentName} \n Please choose another name and try it again.`);
        }
    }
    playAnimation(name) {
        console.log(name);
        this.currentAnimation = this.anim[this.getAnimationIndexByName(name)].getAnimation();
        this.currentFrame = 0;
        this.currentAnimation.resetAnimation();
    }
/*
    setDefaultAnimation(name) {
        let shiftIndex = this.getAnimationIndexByName(name);
        let defaultAnimation = this.anim[this.getAnimationIndexByName(name)].getAnimation();
        this.anim[shiftIndex] = this.anim[0];
        this.anim[0] = defaultAnimation;
    }
*/

    /* PRIVATE METHODS */
    getAnimationIndexByName(name) {
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
        this.setSprite( animation.getSprite(frame) );
    }
    setSprite(sprite) {
        // console.log(sprite);
        this.domElem.style.backgroundImage = `url('${sprite.getURL()}')`;
        this.domElem.style.width = sprite.getWidth() + 'px';
        this.domElem.style.height = sprite.getHeight() + 'px';;
        this.domElem.style.backgroundPositionX = - sprite.getX() + 'px';
        this.domElem.style.backgroundPositionY = - sprite.getY() + 'px';
    }
}

// export default RogerObject;
