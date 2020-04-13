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
    /**
     * @method init
     * @description initilize the clock without starting
     * @param {number} seconds
     */
    init() {
        this.clock = 0;
    }
    /**
     * @method initWith
     * @description initialize the clock to a specific number without starting
     * @param {number} seconds
     */
    initWith(seconds) {
        this.clock = seconds;
    }

    start() {
        this.init();
        this.clockInterval = setInterval(() => {
            if(!this.paused) {
                this.update();
            }
        }, this.deltaTime);
    }
    /**
     * @method startWith
     * @description starts the clock with a specific number. it works with the delta provided.
     * @param {number} seconds
     */
    startWith(seconds) {
        this.init(seconds);
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
        this.updateToons();
    }
    /**
     * @method updateWith
     * @description update the clock manually. No need of init or start. Pause doesn't work with this option.
     * @param {number} seconds
     */
    updateWith(seconds) {
        this.clock = seconds;
        this.updateToons();
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

    /* PRIVATE METHODS */
    updateToons() {
        this.toons.forEach(toon => { toon.update(); });
        if (this.debugMode) {
            console.log(this.clock);
        }
    }
}

export default RogerClock;
