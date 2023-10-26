import Dog from './dog.js';
import { IWhereAmILiving } from '../../interfaces/where_am_i_living.js';

export default class Wolf extends Dog implements IWhereAmILiving {
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