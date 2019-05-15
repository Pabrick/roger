/**
 * @class RogerClock
 * @description Clock is the key to sync all the anims
 * @param {number} delta 
 */
class RogerClock {
    constructor(delta) {
        this.delta = delta;
        this.deltaTime = this.delta * 1000;
        this.clock = 0;
        this.clockInterval;
        this.objects = [];
        this.debugMode = false;
    }
    /* PUBLIC METHODS */
    init() {
        this.clock = 0;
    }
    start() {
        this.init();
        this.clockInterval = setInterval(() => this.update(), this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    update() {
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        this.objects.forEach(obj => { obj.update(); });
        if (this.debugMode) {
            console.log(this.clock);
        }
    }
    addObjectToUpdate(rogerObject) {
        this.objects.push(rogerObject);
    }
    clearObjectToUpdate() {
        this.objects = [];
    }
    setDebugMode(mode) {
        this.debugMode = mode;
    }
}

export default RogerClock;
