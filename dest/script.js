"use strict";
// POLIMORFIZM
class Animal {
    constructor(_weight, _height, _color) {
        this._weight = _weight;
        this._height = _height;
        this._color = _color;
    }
    whoAreYou() { }
}
class Dog extends Animal {
    constructor(_weight, _height, _color, isHappy) {
        super(_weight, _height, _color);
        this._weight = _weight;
        this._height = _height;
        this._color = _color;
        this.isHappy = isHappy;
    }
    bark() { }
    run() { }
}
class Cat extends Animal {
    constructor(_weight, _height, _color, isSleepy) {
        super(_weight, _height, _color);
        this._weight = _weight;
        this._height = _height;
        this._color = _color;
        this.isSleepy = isSleepy;
    }
    mu() { }
    run() { }
}
class Fish extends Animal {
    constructor(_weight, _height, _color, isDead) {
        super(_weight, _height, _color);
        this._weight = _weight;
        this._height = _height;
        this._color = _color;
        this.isDead = isDead;
    }
    moveUp() { }
    moveDown() { }
    swim() { }
}
// static
// readonly
class Wolf extends Dog {
    constructor(_weight, _height, _color, isHappy, location, _name) {
        super(_weight, _height, _color, isHappy);
        this._weight = _weight;
        this._height = _height;
        this._color = _color;
        this.isHappy = isHappy;
        this.location = location;
        this._name = _name;
        console.log(Wolf.counter);
        Wolf.counter++;
        console.log(Wolf.counter);
    }
    get name() {
        return this._name;
    }
    showMe() {
        throw new Error("Method not implemented.");
    }
    bark() {
        console.log("AUUU");
    }
    run() {
        console.log("I run to forest!");
    }
    whoAreYou() {
        console.log("I am wolf!!!");
    }
    static convertToJSON() {
        return {};
    }
}
Wolf.counter = 0;
const wolf1 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf2 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf3 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf4 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
console.log(Wolf.counter);
