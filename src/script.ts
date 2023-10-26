// POLIMORFIZM

// HERMETYZACJA
// public private protected

interface IWhereAmILiving {
    location: string,
    showMe(): () => string,
}

abstract class Animal {
    constructor(
        protected _weight: number,
        protected _height: number,
        protected _color: string
    ) {}

    whoAreYou(): void {}
}

abstract class Dog extends Animal {

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

abstract class Cat extends Animal {

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

abstract class Fish extends Animal {

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


// static
// readonly
class Wolf extends Dog implements IWhereAmILiving {
    static counter: number = 0;

    constructor(
        public _weight: number,
        public _height: number,
        public _color: string,
        public isHappy: boolean,
        public location: string,
        public readonly _name: string,
    ) {
        super(_weight, _height, _color, isHappy);

        console.log(Wolf.counter);
        Wolf.counter++;
        console.log(Wolf.counter);
    }
    
    get name() {
        return this._name;
    }

    showMe(): () => string {
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

const wolf1 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf2 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf3 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");
const wolf4 = new Wolf(200, 100, "red", true, "Taiga", "Lloyd");

console.log(Wolf.counter);