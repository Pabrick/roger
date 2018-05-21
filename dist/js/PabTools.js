'use strict';

/**
 * @class PabTools
 * @param enabler boolean to control logs
 * @return nothing
 */
class PabTools {
    constructor(enabler){
        this.isDebug = enabler || false;
    }
    static entityToChar(entity) {
        var s = document.createElement('span');
        s.innerHTML = entity;
        return s.innerHTML;
    }
    static setDebug(enabler) {
        this.isDebug = enabler;
    }
    static show(message, type) {
        if(this.isDebug){
            switch(type){
                case ("error"):
                    //console.error("✖ " + message);
                    console.error(this.entityToChar("&#10006; ") + message);
                    break;
                case ("warn"):
                    console.warn(this.entityToChar("&#9888; ") + message);
                    break;
                case ("info"):
                    //console.info(this.entityToChar("&#128712; ") + message);
                    console.info(message);
                    break;
                default:
                     //console.log("✔ " + message); 
                    console.log(this.entityToChar("&#10004; ") + message);
                    break;
            }

        }
    }
}