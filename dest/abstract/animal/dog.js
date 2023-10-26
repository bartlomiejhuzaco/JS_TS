import Animal from "./animal.js";
export default class Dog extends Animal {
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
