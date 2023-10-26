import Animal from "./animal.js";

export default abstract class Cat extends Animal {

    constructor(
        protected _weight: number,
        protected _height: number,
        protected _color: string,
        public isSleepy: boolean,
    ) {
        super(_weight, _height, _color);
    }
    
    mu() {}

    run() {}   
}