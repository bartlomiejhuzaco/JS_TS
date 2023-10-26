import Animal from "./animal.js";
export default class Cat extends Animal {
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
