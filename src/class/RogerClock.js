/**
 * @class RogerClock
 * @description Clock is the key to sync all the anims
 * @param {number} delta 
 */
class RogerClock {
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
        this.clockInterval = setInterval(() => this.update(), this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    update() {
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        this.objects.forEach(obj => { obj.update(); });
        // console.log(this.clock);
    }
    addObject(rogerObject) {
        this.objects.push(rogerObject);
    }
    removeObject(rogerObject) {
        //removeRogerObject
    }
}

export default RogerClock;
