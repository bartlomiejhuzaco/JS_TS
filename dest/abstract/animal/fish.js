import Animal from "./animal.js";
export default class Fish extends Animal {
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
