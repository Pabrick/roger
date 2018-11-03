/**
 * Clock is the key to sync all the anims.
 * @class RogerClock
 * @param delta [number] 
 */
export class RogerClock {
    constructor(delta) {
        this.delta = delta;
        this.clock = 0;
        this.clockInterval;
        this.deltaTime = this.delta * 1000;
        this.objects = [];
    }
    /* PUBLIC METHODS */
    init() {
        this.clock = 0;
        this.clockInterval = setInterval(()=>this.update(), this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    update() {
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        for(let i = 0; i < this.objects.length; i++){
            if(this.objects[i]){
                this.objects[i].update();
            }
        }
    }
    addObject(rogerObject) {
        this.objects.push(rogerObject);
    }
    removeObject(rogerObject) {
        //removeanimation
    }
}
