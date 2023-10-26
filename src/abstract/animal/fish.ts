import Animal from "./animal.js";


export default abstract class Fish extends Animal {

    constructor(
        protected _weight: number,
        protected _height: number,
        protected _color: string,
        public isDead: boolean,
    ) {
        super(_weight, _height, _color);
    }
    
    moveUp() {}

    moveDown() {}

    swim() {}
}
