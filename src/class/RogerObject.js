/**
 * @class RogerObject
 * @param {string} id id of the element of the DOM linked to the object
 * @param {RogerClock} clock clock linked to the project, the one to set the delta time
 * @return {string} animationName
 * @see RogerSprite
 */
class RogerObject {
    // constructor(id, clock, idleSprite) {
    constructor(id, clock) {
        this.id = id;
        this.clock = clock;
        this.domElem = document.getElementById(id);
        this.anim = [];
        this.currentAnimation;
        this.currentFrame;
        this.clock.addObject(this);
    }
    /* PUBLIC METHODS */
    update() {
        console.log(`${this.id} update!`);
        /*
        if(this.currentFrame != -1){
            this.setFrame(this.currentAnimation, this.currentFrame);
            this.currentFrame = this.currentAnimation.getNextFrame(this.currentFrame);
        }
        */
    }
    /**
     * @method addAnimation
     * @param {RogerAnimation} rogerAnimation
     * @see RogerAnimation
     */
    addAnimation(rogerAnimation) {
        let currentName = rogerAnimation.getName();
        if(this.getAnimationByName(currentName) === -1){
            /*
            let div = document.createElement('div');
            div.id = currentName;
            div.className = 'animation';
            div.style.backgroundImage = `url('${rogerAnimation.getURL()}')`;
            div.style.display = 'none';
            this.elem.appendChild(div);
            this.anim.push(rogerAnimation);
            this.setFrame(rogerAnimation, 0);
            */
            this.anim.push(rogerAnimation);
        }else{
            alert(`The RogerObject ${this.id} has ALREADY an animation with the name: ${currentName} \n Please choose another name and try it again.`);
        }
    }
    setDefaultAnimation(name) {
        let shiftIndex = this.getAnimationByName(name);
        let defaultAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.anim[shiftIndex] = this.anim[0];
        this.anim[0] = defaultAnimation;
    }
    playAnimation(name) {
        this.domElem.width = '2000px';
        if(this.currentAnimation){
            document.getElementById(this.currentAnimation.getName()).style.display = 'none';
        }
        this.currentAnimation = this.anim[this.getAnimationByName(name)].getAnimation();
        this.currentFrame = 0;
        this.currentAnimation.resetAnimation();
        document.getElementById(name).style.display = 'block';
    }

    /* PRIVATE METHODS */
    getAnimationByName(name) {
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
        let name = animation.getName();
        let sprite = animation.getSprite(frame);
        document.getElementById(name).style.width = sprite.getWidth();
        document.getElementById(name).style.height = sprite.getHeight();
        document.getElementById(name).style.backgroundPositionX = - sprite.getX() + "px";
        document.getElementById(name).style.backgroundPositionY = - sprite.getY() + "px";
    }
}

// export default RogerObject;
