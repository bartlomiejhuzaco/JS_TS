import Animal from "./animal.js";


export default abstract class Dog extends Animal {

    constructor(
        protected _weight: number,
        protected _height: number,
        protected _color: string,
        public isHappy: boolean,
    ) {
        super(_weight, _height, _color);
    }

    bark() {}

    run() {}
}