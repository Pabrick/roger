'use strict';

class Vehicle {
    constructor(wheels, brand) {
        this.wheels = wheels;
        this.brand = brand;
    }
    getWheels() {
        return this.wheels;
    }
    setWheels(wheels) {
        this.wheels = wheels;
    }
    getBrand() {
        return this.brand;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    startEngine() {
        console.log("BROOM BROOM");
        return null;
    }
}

class Motorbike extends Vehicle {
    constructor(brand){
        super(2, brand);
    } 
}
class Car extends Vehicle {
    constructor(brand){
        super(4, brand);
    } 
}

var myMoto = new Motorbike("suzuki");
var myCar = new Car("volkswagen");