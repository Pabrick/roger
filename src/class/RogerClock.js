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
        this.toons = [];
        this.debugMode = false;
        this.paused = false;
    }
    /* PUBLIC METHODS */
    init() {
        this.clock = 0;
    }
    start() {
        this.init();
        this.clockInterval = setInterval(() => {
            if(!this.paused) {
                this.update();
            }
        }, this.deltaTime);
    }
    stop() {
        clearInterval(this.clockInterval);
    }
    pause() {
        this.paused = true;
    }
    play() {
        this.paused = false;
    }
    update() {
        this.clock = Math.round( (this.clock + this.delta) * 10 ) / 10;
        this.toons.forEach(toon => { toon.update(); });
        if (this.debugMode) {
            console.log(this.clock);
        }
    }
    addToonToUpdate(rogerToon) {
        this.toons.push(rogerToon);
    }
    clearToonToUpdate() {
        this.toons = [];
    }
    setDebugMode(mode) {
        this.debugMode = mode;
    }
}

export default RogerClock;
