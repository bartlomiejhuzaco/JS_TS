import Dog from './dog.js';
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
        return `I am living in ${this.location}`;
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
export default Wolf;
